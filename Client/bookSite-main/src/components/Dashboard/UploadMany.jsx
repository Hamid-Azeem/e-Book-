// import React, { useState } from 'react';
// import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
// const UploadMany=()=> {
//   const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

//   const [jsonData, setJsonData] = useState('');
//   const [response, setResponse] = useState('');
//  const[format,setFormat]=useState('');
//     const exampleData=[
   
//         {
           
//             "title": "First Book",
//             "authorName": "John",
//             "imageUrl": "https://example.jpg",
//             "category": "Psychology",
//             "bookDescription": "Some description",
//             "bookPdfUrl": "https://example.com/boook.pdf"
           
//         },
//         {
          
//             "title": "Second Book",
//             "authorName": "John",
//             "imageUrl": "https://example.jpg",
//             "category": "Psychology",
//             "bookDescription": "Some description",
//             "bookPdfUrl": "https://example.com/boook.pdf"
           
//         }
//         ];

    

//   const submitJson = async (e) => {
//     e.preventDefault();
   
    
//     try {
//       const response = await fetch(`${api}/insertMany`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ items: JSON.parse(jsonData) }),
//       });

//       const data = await response.json();
//       setResponse(JSON.stringify(data, null, 2));
//     } catch (error) {
//       console.error('Error:', error);
//     }
   

//     e.target.reset();
//   };

//   return (
//     <div className=' px-4 my-12'>
//              <h2 className=' mb-8 text-3xl font-bold'>Upload Bulk Books</h2>


//       <form onSubmit={(e)=>{submitJson(e)}}>
// <div className="mb-2 block">
//           <Label htmlFor="booksJson" value="Insert Books in JSON Format" />
//         </div>
//         <Textarea  id="booksJson" name='booksJson' rows={10} cols={50}
//          placeholder="Books Array "
         
//         onChange={(e) => setJsonData(e.target.value)} required />
//        <Button className=' mt-5' type="submit">Upload Books</Button>
//         {response.length>0? 
//        <div className=' overflow-scroll max-w-[50vw]'>
//         <h3 className=' mt-5'>Response:</h3>
//         <pre>{response}</pre>
//       </div>
//       :" "

//         }
       
        
        
// </form>
// <div className=' mt-5'>
//     <h2 className=' font-semibold'>Example JSON Format</h2>
// <pre className=' mt-3 text-wrap text-[10px]'>{JSON.stringify(exampleData,null,4)}</pre>
// </div>
//     </div>
//   );
// }

// export default UploadMany;


import React, { useState } from 'react';
import { Button, Label, Textarea } from 'flowbite-react';
import { HiOutlineDuplicate } from 'react-icons/hi';

const UploadMany = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [jsonData, setJsonData] = useState('');
  const [response, setResponse] = useState('');

  const exampleData = [
    {
      "title": "Example Book 1",
      "authorName": "Author One",
      "imageUrl": "https://example.com/image1.jpg",
      "category": "Fiction",
      "bookDescription": "Description...",
      "bookPdfUrl": "https://example.com/book1.pdf"
    }
  ];

  const submitJson = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/insertMany`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: JSON.parse(jsonData) }),
      });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
    e.target.reset();
  };

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900'>Bulk Upload</h2>
        <p className='text-gray-500 mt-1'>Upload multiple books at once using JSON format.</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
         {/* Form Section */}
         <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
            <form onSubmit={submitJson}>
               <div className="mb-4 block">
                  <Label htmlFor="booksJson" value="Paste JSON Data" />
               </div>
               <Textarea 
                  id="booksJson" 
                  name='booksJson' 
                  rows={12} 
                  className="font-mono text-xs"
                  placeholder='[ { "title": "..." } ]'
                  onChange={(e) => setJsonData(e.target.value)} 
                  required 
               />
               <Button className='mt-5 w-full' type="submit" color="blue">Upload Books</Button>
            </form>
         </div>

         {/* Helper Section */}
         <div className='space-y-6'>
            <div className='bg-gray-50 p-6 rounded-xl border border-gray-200'>
               <div className="flex justify-between items-center mb-3">
                  <h3 className='font-semibold text-gray-900'>Example Format</h3>
                  <button 
                     onClick={() => navigator.clipboard.writeText(JSON.stringify(exampleData, null, 4))}
                     className="text-xs flex items-center gap-1 text-blue-600 hover:underline"
                  >
                     <HiOutlineDuplicate/> Copy
                  </button>
               </div>
               <pre className='text-xs bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto'>
                  {JSON.stringify(exampleData, null, 4)}
               </pre>
            </div>

            {response && (
               <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                  <h3 className='font-semibold text-gray-900 mb-2'>Server Response</h3>
                  <pre className='text-xs bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto text-gray-700'>
                     {response}
                  </pre>
               </div>
            )}
         </div>
      </div>
    </div>
  );
}

export default UploadMany;