require('dotenv').config()
const express=require("express");
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
const PORT=process.env.PORT || 3000;
const bodyParser=require("body-parser");
const jwt=require("jsonwebtoken");
const path = require('path');
const fs = require('fs');
// multer for handling multipart/form-data (file uploads)
const multer = require('multer');
// bcrypt for password hashing
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
// Cloudinary for remote image hosting (optional)
const cloudinary = require('cloudinary').v2;

// Log environment variables on startup
console.log('Environment:', {
  DATABASE: process.env.DATABASE ? 'Set' : 'Not set',
  JWT_SECRET: process.env.JWT_SECRET ? 'Set' : 'Not set',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'Not set',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? 'Set' : 'Not set',
  PORT: PORT
});

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err.message);
});

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// Ensure upload directory exists and serve uploads statically
const uploadsDir = path.join(__dirname, 'public', 'assets', 'uploads');
fs.mkdirSync(uploadsDir, { recursive: true });
app.use('/assets/uploads', express.static(uploadsDir));

// Configure Cloudinary if individual vars provided. If `CLOUDINARY_URL` is present
// the Cloudinary SDK will parse it automatically from the environment, so
// we only call config when individual vars are supplied.
if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  console.log('Cloudinary configured from individual environment variables');
} else if (process.env.CLOUDINARY_URL) {
  console.log('CLOUDINARY_URL detected in environment; Cloudinary SDK will use it.');
}

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const safeName = Date.now() + '-' + file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, safeName);
  }
});

const upload = multer({ storage });
const bookSchema=new mongoose.Schema({
    title:String,
    authorName:String,
    imageUrl:String,
    category:String,
    bookDescription:String,
    bookPdfUrl:String,
    isFeatured: {
        type: Boolean,
        default: false
    },
    sales: {
        type: Number,
        default: 0
    }
});

const Book=mongoose.model("Book",bookSchema);

// Admin Schema
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Admin = mongoose.model("Admin", adminSchema);



app.get("/",(req,res)=>{
    res.json({ 
        message: "E-Book Paradise API",
        status: "running",
        adminEmail: process.env.ADMIN_EMAIL,
        timestamp: new Date().toISOString()
    });
});


app.post('/upload-book', async (req, res) => {
  try {
    console.log('Received book upload request:', req.body);

    // Validate required fields
    const { title, authorName, imageUrl, category, bookDescription, bookPdfUrl } = req.body;

    if (!title || !authorName || !imageUrl || !category || !bookDescription || !bookPdfUrl) {
      return res.status(400).json({
        error: 'Missing required fields',
        received: Object.keys(req.body)
      });
    }

    const book = new Book({
      title,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl
    });

    const saved = await book.save();
    console.log('Book saved:', saved._id);
    return res.status(201).json(saved);
  } catch (error) {
    console.error('Error saving book:', error);
    return res.status(500).json({ error: 'Failed to save book', message: error.message });
  }
});

// Image upload endpoint - accepts a single file field named 'image'
app.post('/upload-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    // If Cloudinary is configured, upload there and remove the local temp file
    if (process.env.CLOUDINARY_URL || (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET)) {
      try {
        const uploadResult = await cloudinary.uploader.upload(req.file.path, { folder: 'ebook_paradise' });
        // remove local file after successful upload
        fs.unlink(req.file.path, (err) => {
          if (err) console.error('Failed to remove local file:', err);
        });
        return res.json({ url: uploadResult.secure_url });
      } catch (cloudErr) {
        console.error('Cloudinary upload failed:', cloudErr?.message || cloudErr);
        // Fall back to local static URL but return success so frontend can continue.
        const fallbackUrl = `${req.protocol}://${req.get('host')}/assets/uploads/${req.file.filename}`;
        // Do not return an error status — include a warning so frontend still uses returned URL.
        return res.json({ url: fallbackUrl, warning: 'Cloudinary upload failed, using local fallback', error: cloudErr?.message || String(cloudErr) });
      }
    }

    // Fallback: return local static URL
    const fileUrl = `${req.protocol}://${req.get('host')}/assets/uploads/${req.file.filename}`;
    return res.json({ url: fileUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    return res.status(500).json({ message: 'Failed to upload image', error: error.message });
  }
});


app.post('/insertMany', async (req, res) => {
  try {
    const items = req.body.items;

    // Insert the array of items into the MongoDB collection
    const insertedItems = await Book.insertMany(items);

    res.json({ success: true, items: insertedItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});



app.get("/books", async (req, res) => {
  try {
    if (req.query?.category) {
      const category = req.query.category;
      const books = await Book.find({ category: category });
      res.json(books);
    } else {
      const books = await Book.find();
      res.json(books);
    }
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get("/books/:id", async (req, res) => {
  const id=req.params.id;
  const result=await Book.findById(id);
  res.send(result);
});



 app.patch("/books/:id", async (req, res) => {
   try {
     const updatedBook = await Book.findByIdAndUpdate(
       { _id: req.params.id },
       { $set: req.body },
       { new: true }
     );
     
     if (!updatedBook) {
       return res.status(404).json({ error: 'Book not found' });
     }
     
     console.log('Book updated:', updatedBook._id);
     res.status(200).json(updatedBook);
   } catch (error) {
     console.error('Error updating book:', error);
     res.status(500).json({ error: 'Failed to update book', message: error.message });
   }
 });
 
 app.delete("/books/:id", async (req, res) => {
   try {
     const deletedBook = await Book.findByIdAndDelete(req.params.id);
     
     if (!deletedBook) {
       return res.status(404).json({ error: 'Book not found' });
     }
     
     console.log('Book deleted:', deletedBook._id);
     res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
   } catch (error) {
     console.error('Error deleting book:', error);
     res.status(500).json({ error: 'Failed to delete book', message: error.message });
   }
 });



 
 const UserSchema=new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  role:String,
});

const User=mongoose.model("User",UserSchema);


  app.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
  
    try {
      // Validate required fields
      if (!email || !password || !name) {
        return res.status(400).json({ 
          message: 'All fields are required',
          isCreated: false 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: 'Invalid email format',
          isCreated: false 
        });
      }

      // Validate password length
      if (password.length < 6) {
        return res.status(400).json({ 
          message: 'Password must be at least 6 characters',
          isCreated: false 
        });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ 
          message: 'User already exists with this email',
          isCreated: false 
        });
      }
  
      // Hash password and create new user
      const hashed = await bcrypt.hash(password, SALT_ROUNDS);
      const newUser = new User({
        name,
        email,
        password: hashed,
        role: 'user'
      });

      await newUser.save();
      console.log('New user registered:', newUser._id, newUser.email);
  
      // Generate JWT token
      const jwtToken = jwt.sign(
        {
          id: newUser._id,
          email: newUser.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.status(201).json({ 
        message: 'User registered successfully', 
        token: jwtToken,
        isCreated: true,
        user: {
          id: newUser._id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ 
        message: 'Internal Server Error',
        error: error.message,
        isCreated: false 
      });
    }
  });

  // Admin registration endpoint (for creating new admins)
  app.post('/admin-register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
      // Validate required fields
      if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }

      // Validate password length
      if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
      }

      // Check if admin already exists
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin with this email already exists' });
      }

      // Hash admin password and create new admin
      const hashed = await bcrypt.hash(password, SALT_ROUNDS);
      const newAdmin = new Admin({
        name,
        email,
        password: hashed
      });

      await newAdmin.save();
      res.status(201).json({ 
        message: 'Admin created successfully',
        admin: {
          id: newAdmin._id,
          name: newAdmin.name,
          email: newAdmin.email
        }
      });
    } catch (error) {
      console.error('Admin registration error:', error);
      res.status(500).json({ 
        message: 'Error creating admin',
        error: error.message 
      });
    }
  });

  // Admin login endpoint
  app.post('/admin-login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // First check database for admin
      const admin = await Admin.findOne({ email });

      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          console.log(`Admin login: authenticated via DB for ${email}`);
          const jwtToken = jwt.sign(
            {
              id: admin._id,
              email: admin.email,
              role: 'admin'
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
          );
          
          return res.json({ 
            message: 'Admin login successful', 
            token: jwtToken,
            name: admin.name,
            role: 'admin',
            isAdmin: true
          });
        }
      }
      
      
      // Fallback to .env credentials for default admin
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        console.log(`Admin login: authenticated via .env fallback for ${email}`);
        // Ensure an Admin document exists for this env admin so other admins can see/login
        try {
          const existing = await Admin.findOne({ email });
          if (!existing) {
            const hashedEnvPass = await bcrypt.hash(password, SALT_ROUNDS);
            const created = new Admin({ name: process.env.ADMIN_NAME || 'Admin', email, password: hashedEnvPass });
            await created.save();
            console.log('Created admin from .env credentials in DB for', email);
          }
        } catch (ensureErr) {
          console.error('Error ensuring env admin exists in DB:', ensureErr);
        }

        const jwtToken = jwt.sign(
          {
            email: email,
            role: 'admin'
          },
          process.env.JWT_SECRET,
          { expiresIn: '24h' }
        );
        
        return res.json({ 
          message: 'Admin login successful', 
          token: jwtToken,
          name: 'Admin',
          role: 'admin',
          isAdmin: true
        });
      }
      
      return res.status(400).json({ message: 'Invalid admin credentials' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  // Get all admins endpoint
  app.get('/admins', async (req, res) => {
    try {
      const admins = await Admin.find().select('-password');
      res.json(admins);
    } catch (error) {
      console.error('Error fetching admins:', error);
      res.status(500).json({ message: 'Error fetching admins', error: error.message });
    }
  });

  // Delete admin endpoint
  app.delete('/admins/:id', async (req, res) => {
    try {
      const admin = await Admin.findByIdAndDelete(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.json({ message: 'Admin deleted successfully' });
    } catch (error) {
      console.error('Error deleting admin:', error);
      res.status(500).json({ message: 'Error deleting admin', error: error.message });
    }
  });

  // Update admin endpoint
  app.patch('/admins/:id', async (req, res) => {
    try {
      const { name, email } = req.body;
      const admin = await Admin.findByIdAndUpdate(
        req.params.id,
        { name, email },
        { new: true }
      ).select('-password');
      
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.json({ message: 'Admin updated successfully', admin });
    } catch (error) {
      console.error('Error updating admin:', error);
      res.status(500).json({ message: 'Error updating admin', error: error.message });
    }
  });

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
   
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Email or password does not match' });
      }
  
      
      const isPasswordValid = password === user.password;
  
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Email or password does not match' });
      }
  
      
      const jwtToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      
      );
  
      res.json({ message: 'Login successful', token: jwtToken,name:user.name, role:user.role });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

 app.get("/getuser",async (req,res)=>{
    try {
      const users = await User.find().sort({ createdAt: -1 });
      res.json(users);
    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  })
  
  app.delete("/getuser/:id", async (req, res) => {
    try {
      const deleted = await User.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User deleted', user: deleted });
    } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  });

  app.get("/getuser/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const result = await User.findById(id);
      if (!result) return res.status(404).json({ error: 'User not found' });
      res.json(result);
    } catch (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  });

  app.patch("/getuser/:id", async (req, res) => {
    try {
      const updated = await User.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!updated) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User updated', user: updated });
    } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'Failed to update user' });
    }
  });

  // Endpoint to add banner books (top selling)
  app.post('/seed-banner-books', async (req, res) => {
    try {
      const bannerBooks = [
        {
          title: "Book One",
          authorName: "Author One",
          imageUrl: "/assets/banner-books/book1.png",
          category: "Fiction",
          bookDescription: "First premium book in our collection",
          bookPdfUrl: "https://example.com/book1.pdf",
          isFeatured: true,
          sales: 10000
        },
        {
          title: "Book Two",
          authorName: "Author Two",
          imageUrl: "/assets/banner-books/book2.png",
          category: "Fiction",
          bookDescription: "Second premium book in our collection",
          bookPdfUrl: "https://example.com/book2.pdf",
          isFeatured: true,
          sales: 9500
        },
        {
          title: "Book Three",
          authorName: "Author Three",
          imageUrl: "/assets/banner-books/book3.png",
          category: "Dystopian",
          bookDescription: "Third premium book in our collection",
          bookPdfUrl: "https://example.com/book3.pdf",
          isFeatured: true,
          sales: 8700
        },
        {
          title: "Book Four",
          authorName: "Author Four",
          imageUrl: "/assets/banner-books/book4.png",
          category: "Romance",
          bookDescription: "Fourth premium book in our collection",
          bookPdfUrl: "https://example.com/book4.pdf",
          isFeatured: true,
          sales: 8200
        },
        {
          title: "Book Five",
          authorName: "Author Five",
          imageUrl: "/assets/banner-books/book5.png",
          category: "Fiction",
          bookDescription: "Fifth premium book in our collection",
          bookPdfUrl: "https://example.com/book5.pdf",
          isFeatured: true,
          sales: 7800
        }
      ];

      // Check if banner books already exist
      const existingCount = await Book.countDocuments({ isFeatured: true });
      
      if (existingCount >= 5) {
        return res.json({ 
          message: 'Banner books already exist',
          count: existingCount
        });
      }

      // Insert banner books
      const insertedBooks = await Book.insertMany(bannerBooks);
      
      res.status(201).json({ 
        message: 'Banner books added successfully',
        count: insertedBooks.length,
        books: insertedBooks
      });
    } catch (error) {
      console.error('Error seeding banner books:', error);
      res.status(500).json({ 
        message: 'Error seeding banner books',
        error: error.message 
      });
    }
  });

  // Endpoint to get featured/top selling books
  app.get('/featured-books', async (req, res) => {
    try {
      const books = await Book.find({ isFeatured: true }).sort({ sales: -1 }).limit(7);
      res.json(books);
    } catch (error) {
      console.error('Error fetching featured books:', error);
      res.status(500).json({ message: 'Error fetching featured books', error: error.message });
    }
  });


app.listen(PORT,()=>{
    console.log("Running...");
})