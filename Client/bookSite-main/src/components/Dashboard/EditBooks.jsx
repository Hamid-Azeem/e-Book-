// import React,{useState,useEffect} from 'react'
// import { useLoaderData, useParams, useNavigate } from 'react-router-dom'
// import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';


// const EditBooks = () => {
//   const api=import.meta.env.VITE_API_URL || 'http://localhost:3000';
//   const navigate = useNavigate();
//   const {id}=useParams();
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const { title,authorName,imageUrl,category,bookDescription,bookPdfUrl}=useLoaderData();


  
// const bookCategory=[
//   "Fiction",
//   "Non-Fiction",
//   "Programming",
//   "Science",
//   "Fantasy",
//   "Historical",
//   "Biography",
//   "Medical",
//   "Education",
//   "Art", "Biography" ,"Business" , "Classics" ,"Comics", "Contemporary" ,"Cookbooks", "Crime", "Ebooks" , "Graphic" ,"Novels" ,"History", "Horror", "Sports" ,"Thriller", "Travel"
// ]



// const[selected,setSelected]=useState(category);

// const handleSelect=(e)=>{
//   setSelected(e.target.value);
// }


// const handleSubmit=async (e)=>{
//   e.preventDefault();
//   setLoading(true);
//   setMessage('');

//   const form=e.target;
//   const title=form.title.value;
//   const imageUrl=form.imageUrl.value;
//   const category=form.category.value;
//   const bookDescription=form.bookDescription.value;
//   const bookPdfUrl=form.bookPdfUrl.value;
//   const authorName=form.authorName.value;

//   const book={
//     title,authorName,imageUrl,category,bookDescription,bookPdfUrl
//   }
  
//   try {
//     const response = await fetch(`${api}/books/${id}`,{
//       method:"PATCH",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify(book)
//     });

//     const data = await response.json();

//     if (response.ok) {
//       setMessage('✅ Book updated successfully!');
//       console.log('Book updated:', data);
//       setTimeout(() => {
//         navigate('/admin/dashboard');
//       }, 1500);
//     } else {
//       setMessage('❌ Failed to update book: ' + (data.message || 'Unknown error'));
//       console.error('Update error:', data);
//     }
//   } catch (error) {
//     setMessage('❌ Error updating book: ' + error.message);
//     console.error('Fetch error:', error);
//   } finally {
//     setLoading(false);
//   }
// }



//   return (
//     <div className=' px-4 my-12'>
//     <h2 className=' mb-8 text-3xl font-bold'>Update The Book</h2>
// <form onSubmit={handleSubmit} className="flex lg:w-[900px] flex-col flex-wrap gap-4">

// <div className=' flex flex-row gap-4'>
// <div className=' lg:w-1/2'>
// <div className="mb-2 block">
//  <Label htmlFor="title" value="Book Title" />
// </div>
// <TextInput  id="title" name='title' type="text" placeholder="Book Title" defaultValue={title} required />
// </div>

// <div className=' lg:w-1/2'>
// <div className="mb-2 block">
//  <Label htmlFor="authorName" value="Author Name" />
// </div>
// <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
// </div>
// </div>

// <div className=' flex flex-row gap-4'>
// <div className=' lg:w-1/2'>
// <div className="mb-2 block">
//  <Label htmlFor="imageUrl" value="Book Image URL" />
// </div>
// <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book Image URL" defaultValue={imageUrl} required />
// </div>

// <div className=' lg:w-1/2'>
// <div className="mb-2 block">
//  <Label htmlFor="category" value="Category" />
// </div>

// <Select id='category' name='category' className=' w-full rounded' value={selected} defaultValue={category} onChange={handleSelect} required>
//       {
//        bookCategory.map((option)=><option key={option} value={option} >{option}</option>)
//       }
// </Select>
// </div>

// </div>

// <div>
// <div className="mb-2 block">
//  <Label htmlFor="bookDescription" value="Book Description" />
// </div>
// <Textarea id="bookDescription" name='bookDescription' rows={4} placeholder="Book Description" defaultValue={bookDescription} required />

// </div>
// <div>
// <div className="mb-2 block">
//  <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
// </div>
// <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="Book PDF URL" defaultValue={bookPdfUrl} required />
// </div>

// <Button type="submit" disabled={loading}>{loading ? 'Updating...' : 'Update Book'}</Button>
// {message && (
//   <div className={`p-4 rounded ${message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//     {message}
//   </div>
// )}
// </form>
// </div>
//   )
// }

// export default EditBooks



import React, { useState } from 'react'
import { useLoaderData, useParams, useNavigate } from 'react-router-dom'
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import bookCategory from '../Categories';

const EditBooks = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const navigate = useNavigate();
  const { id } = useParams();
  const bookData = useLoaderData();
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(bookData.category);
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUrlState, setImageUrlState] = useState(bookData.imageUrl || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const form = e.target;
    const book = {
      title: form.title.value,
      authorName: form.authorName.value,
      imageUrl: imageUrlState || form.imageUrl.value,
      category: form.category.value,
      bookDescription: form.bookDescription.value,
      bookPdfUrl: form.bookPdfUrl.value
    };

    try {
      const response = await fetch(`${api}/books/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
      });

      if (response.ok) {
        setMessage('✅ Book updated successfully!');
        setTimeout(() => navigate('/admin/dashboard/manage'), 1500);
      } else {
        throw new Error('Failed to update book');
      }
    } catch (error) {
      setMessage('❌ ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900'>Edit Book</h2>
        <p className='text-gray-500 mt-1'>Update details for "{bookData.title}"</p>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div>
              <div className="mb-2 block"><Label htmlFor="title" value="Book Title" /></div>
              <TextInput id="title" name='title' defaultValue={bookData.title} required />
            </div>
            <div>
              <div className="mb-2 block"><Label htmlFor="authorName" value="Author Name" /></div>
              <TextInput id="authorName" name="authorName" defaultValue={bookData.authorName} required />
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div>
              <div className="mb-2 block"><Label htmlFor="imageUrl" value="Book Image URL" /></div>
                <div className="flex items-center gap-4">
                  <TextInput id="imageUrl" name='imageUrl' value={imageUrlState} onChange={(e) => setImageUrlState(e.target.value)} required />
                  <input id="imageFile" name='imageFile' type="file" accept="image/*" onChange={async (e) => {
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
                  }} />
                </div>
                {imageUploading && <p className='text-xs text-blue-500 mt-2'>Uploading...</p>}
                {imageUrlState && <div className='mt-2'><img src={imageUrlState} alt="preview" className='h-24 w-auto rounded border' /></div>}
            </div>
            <div>
              <div className="mb-2 block"><Label htmlFor="category" value="Category" /></div>
              <Select id='category' name='category' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
                {bookCategory.map((option) => <option key={option} value={option}>{option}</option>)}
              </Select>
            </div>
          </div>

          <div>
            <div className="mb-2 block"><Label htmlFor="bookDescription" value="Description" /></div>
            <Textarea id="bookDescription" name='bookDescription' defaultValue={bookData.bookDescription} required rows={5} />
          </div>

          <div>
            <div className="mb-2 block"><Label htmlFor="bookPdfUrl" value="Book PDF URL" /></div>
            <TextInput id="bookPdfUrl" name='bookPdfUrl' defaultValue={bookData.bookPdfUrl} required />
          </div>

          <div className="flex gap-4 mt-4">
             <Button type="submit" isProcessing={loading} className='flex-1'>Update Book</Button>
             <Button color="gray" onClick={() => navigate(-1)}>Cancel</Button>
          </div>

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

export default EditBooks