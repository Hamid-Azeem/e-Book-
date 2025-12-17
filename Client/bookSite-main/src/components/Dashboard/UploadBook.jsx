// import React, { useState } from 'react';
// import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
// import bookCategory from '../Categories';
// const UploadBook = () => {

//   const api=import.meta.env.VITE_API_URL || 'http://localhost:3000';
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [imageUploading, setImageUploading] = useState(false);
//   const [imageUrlState, setImageUrlState] = useState('');
//   const [imagePreview, setImagePreview] = useState('');

//   const[selected,setSelected]=useState(bookCategory[0]);

//   const handleSelect=(e)=>{
//     setSelected(e.target.value);
//   }

//   const handleSubmit=async (e)=>{
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     const form=e.target;
//     const title=form.title.value;
//     const category=form.category.value;
//     const bookDescription=form.bookDescription.value;
//     const bookPdfUrl=form.bookPdfUrl.value;
//     const authorName=form.authorName.value;

//     const imageUrl = imageUrlState; // use uploaded image URL

//     const book={
//       title,authorName,imageUrl,category,bookDescription,bookPdfUrl
//     }
    
//     try {
//       const response = await fetch(`${api}/upload-book`,{
//         method:"POST",
//         headers:{
//           "Content-Type":"application/json",
//         },
//         body:JSON.stringify(book)
//       });

//       const data = await response.json();
      
//       if (response.ok && data._id) {
//         setMessage('✅ Book uploaded successfully!');
//         console.log('Book saved:', data);
//         form.reset();
//         setSelected(bookCategory[0]);
//         setImageUrlState('');
//         setImagePreview('');
//       } else {
//         setMessage('❌ Failed to upload book: ' + (data.message || 'Unknown error'));
//         console.error('Upload error:', data);
//       }
//     } catch (error) {
//       setMessage('❌ Error uploading book: ' + error.message);
//       console.error('Fetch error:', error);
//     } finally {
//       setLoading(false);
//     }

//   }

//   return (
//     <div className=' px-4 my-12'>
//              <h2 className=' mb-8 text-3xl font-bold'>Upload A Book</h2>
// <form onSubmit={handleSubmit} className="flex lg:w-[900px] flex-col flex-wrap gap-4">
     
//      <div className=' flex flex-row gap-4'>
//      <div className=' lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="title" value="Book Title" />
//         </div>
//         <TextInput id="title" name='title' type="text" placeholder="Book Title" required />
//       </div>

//       <div className=' lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="authorName" value="Author Name" />
//         </div>
//         <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
//       </div>
//      </div>

//      <div className=' flex flex-row gap-4'>
//      <div className=' lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="imageFile" value="Book Image (select file)" />
//         </div>
//         <input id="imageFile" name='imageFile' type="file" accept="image/*" onChange={async (e)=>{
//           const file = e.target.files[0];
//           if (!file) return;
//           setImageUploading(true);
//           setMessage('');
//           try {
//             const fd = new FormData();
//             fd.append('image', file);
//             const res = await fetch(`${api}/upload-image`, {
//               method: 'POST',
//               body: fd
//             });
//             const data = await res.json();
//             if (res.ok && data.url) {
//               setImageUrlState(data.url);
//               setImagePreview(data.url);
//             } else {
//               setMessage('❌ Failed to upload image: ' + (data.message || 'Unknown error'));
//             }
//           } catch (err) {
//             console.error('Image upload error:', err);
//             setMessage('❌ Error uploading image: ' + err.message);
//           } finally {
//             setImageUploading(false);
//           }
//         }} />
//         {imageUploading && <div className='text-sm text-gray-500 mt-2'>Uploading image...</div>}
//         {imagePreview && <img src={imagePreview} alt="preview" className='mt-2 w-32 h-auto rounded' />}
//       </div>

//       <div className=' lg:w-1/2'>
//         <div className="mb-2 block">
//           <Label htmlFor="category" value="Category" />
//         </div>
       
//         <Select id='category' name='category' className=' w-full rounded' value={selected} onChange={handleSelect} required>
//                {
//                 bookCategory.map((option,index)=><option key={index} value={option}>{option}</option>)
//                }
//         </Select>
//       </div>
      
//      </div>
     
// <div>
// <div className="mb-2 block">
//           <Label htmlFor="bookDescription" value="Book Description" />
//         </div>
//         <Textarea id="bookDescription" name='bookDescription' rows={4} placeholder="Book Description" required />
      
// </div>
// <div>
//         <div className="mb-2 block">
//           <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
//         </div>
//         <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="Book PDF URL" required />
//       </div>
     
//       <Button type="submit" disabled={loading}>{loading ? 'Uploading...' : 'Upload Book'}</Button>
//       {message && (
//         <div className={`p-4 rounded ${message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//           {message}
//         </div>
//       )}
//     </form>
//     </div>
//   )
// }

// export default UploadBook


import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea, FileInput } from 'flowbite-react';
import bookCategory from '../Categories';

const UploadBook = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUrlState, setImageUrlState] = useState('');

  const [selectedCategory, setSelectedCategory] = useState(bookCategory[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const form = e.target;
    const book = {
      title: form.title.value,
      authorName: form.authorName.value,
      imageUrl: imageUrlState,
      category: form.category.value,
      bookDescription: form.bookDescription.value,
      bookPdfUrl: form.bookPdfUrl.value
    };

    try {
      const response = await fetch(`${api}/upload-book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
      });
      const data = await response.json();

      if (response.ok && data._id) {
        setMessage('✅ Book uploaded successfully!');
        form.reset();
        setSelectedCategory(bookCategory[0]);
        setImageUrlState('');
      } else {
        throw new Error(data.message || 'Unknown error');
      }
    } catch (error) {
      setMessage('❌ ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageUploading(true);
    try {
      const fd = new FormData();
      fd.append('image', file);
      const res = await fetch(`${api}/upload-image`, { method: 'POST', body: fd });
      const data = await res.json();
      if (res.ok && data.url) {
        setImageUrlState(data.url);
      } else {
        alert('Image upload failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error uploading image');
    } finally {
      setImageUploading(false);
    }
  }

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900'>Upload A Book</h2>
        <p className='text-gray-500 mt-1'>Fill in the details below to add a new book to the inventory.</p>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div>
              <div className="mb-2 block"><Label htmlFor="title" value="Book Title" /></div>
              <TextInput id="title" name='title' placeholder="e.g. The Great Gatsby" required />
            </div>
            <div>
              <div className="mb-2 block"><Label htmlFor="authorName" value="Author Name" /></div>
              <TextInput id="authorName" name="authorName" placeholder="e.g. F. Scott Fitzgerald" required />
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div>
              <div className="mb-2 block"><Label htmlFor="imageFile" value="Book Cover Image" /></div>
              <FileInput id="imageFile" accept="image/*" onChange={handleImageUpload} helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
              {imageUploading && <p className='text-xs text-blue-500 mt-2'>Uploading...</p>}
              {imageUrlState && (
                <div className='mt-2'>
                  <p className='text-xs text-green-500 mb-1'>Image uploaded!</p>
                  <img src={imageUrlState} alt="Cover Preview" className='h-20 w-auto rounded border' />
                </div>
              )}
            </div>
            <div>
              <div className="mb-2 block"><Label htmlFor="category" value="Category" /></div>
              <Select id='category' name='category' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
                {bookCategory.map((option, index) => <option key={index} value={option}>{option}</option>)}
              </Select>
            </div>
          </div>

          <div>
            <div className="mb-2 block"><Label htmlFor="bookDescription" value="Description" /></div>
            <Textarea id="bookDescription" name='bookDescription' placeholder="Write a brief summary of the book..." required rows={5} />
          </div>

          <div>
            <div className="mb-2 block"><Label htmlFor="bookPdfUrl" value="Book PDF Link" /></div>
            <TextInput id="bookPdfUrl" name='bookPdfUrl' type="url" placeholder="https://..." required />
          </div>

          <Button type="submit" size="lg" isProcessing={loading} className='mt-4'>
            {loading ? 'Uploading...' : 'Upload Book'}
          </Button>

          {message && (
            <div className={`p-4 rounded-lg text-sm font-medium ${message.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default UploadBook