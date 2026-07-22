require('dotenv').config();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

// Cloudinary will auto-configure using CLOUDINARY_URL from .env
console.log('Cloudinary URL detected:', !!process.env.CLOUDINARY_URL);

const bookSchema = new mongoose.Schema({
    title: String,
    authorName: String,
    imageUrl: String,
    category: String,
    bookDescription: String,
    bookPdfUrl: String,
    isFeatured: {
        type: Boolean,
        default: false
    },
    sales: {
        type: Number,
        default: 0
    }
});

const Book = mongoose.model("Book", bookSchema);

const booksToSeed = [
  {
    title: "Dracula",
    authorName: "Bram Stoker",
    sourceImageUrl: "https://covers.openlibrary.org/b/id/10574880-L.jpg",
    category: "Horror",
    bookDescription: "Count Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and of the battle between Dracula and a small group of people led by Professor Abraham Van Helsing.",
    bookPdfUrl: "https://www.planetebook.com/free-ebooks/dracula.pdf"
  },
  {
    title: "The Picture of Dorian Gray",
    authorName: "Oscar Wilde",
    sourceImageUrl: "https://covers.openlibrary.org/b/id/8261899-L.jpg",
    category: "Classic Fiction",
    bookDescription: "A philosophical novel about a young man who remains youthful and beautiful while his portrait ages and records every sin he commits.",
    bookPdfUrl: "https://www.planetebook.com/free-ebooks/the-picture-of-dorian-gray.pdf"
  },
  {
    title: "A Tale of Two Cities",
    authorName: "Charles Dickens",
    sourceImageUrl: "https://covers.openlibrary.org/b/id/8263158-L.jpg",
    category: "Historical",
    bookDescription: "Set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris and his release to live in London.",
    bookPdfUrl: "https://www.planetebook.com/free-ebooks/a-tale-of-two-cities.pdf"
  },
  {
    title: "Les Misérables",
    authorName: "Victor Hugo",
    sourceImageUrl: "https://covers.openlibrary.org/b/id/8266209-L.jpg",
    category: "Historical",
    bookDescription: "Beginning in 1815 and culminating in the 1832 June Rebellion in Paris, the novel follows the lives and interactions of several characters, particularly the struggles of ex-convict Jean Valjean.",
    bookPdfUrl: "https://www.planetebook.com/free-ebooks/les-miserables.pdf"
  },
  {
    title: "Crime and Punishment",
    authorName: "Fyodor Dostoevsky",
    sourceImageUrl: "https://covers.openlibrary.org/b/id/8262747-L.jpg",
    category: "Crime",
    bookDescription: "Focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates a plan to kill an unscrupulous pawnbroker for her money.",
    bookPdfUrl: "https://www.planetebook.com/free-ebooks/crime-and-punishment.pdf"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to MongoDB");

    for (const book of booksToSeed) {
      console.log(`Uploading image for ${book.title} to Cloudinary...`);
      // Upload remote URL directly to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(book.sourceImageUrl, {
        folder: 'ebook_paradise'
      });
      
      console.log(`Successfully uploaded! Cloudinary URL: ${uploadResult.secure_url}`);

      const newBook = new Book({
        title: book.title,
        authorName: book.authorName,
        imageUrl: uploadResult.secure_url,
        category: book.category,
        bookDescription: book.bookDescription,
        bookPdfUrl: book.bookPdfUrl
      });

      await newBook.save();
      console.log(`Saved book "${book.title}" to DB!`);
    }

    console.log("Seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
}

seed();
