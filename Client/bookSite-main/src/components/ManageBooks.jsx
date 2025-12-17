// import React,{useState,useEffect} from 'react';
// import { Table,Checkbox } from 'flowbite-react';
// import {Link} from 'react-router-dom'
// import '../App.css';
// const ManageBooks = () => {
//   const [books, setBooks] = useState([]);
//   const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

//   useEffect(() => {
//     fetch(`${api}/books`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch books');
//         return res.json();
//       })
//       .then((data) => {
//         setBooks(data);
//       })
//       .catch((err) => {
//         console.error('Error fetching books:', err);
//         setBooks([]);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     setBooks(prevBooks => prevBooks.filter((book) => book._id !== id));

//     fetch(`${api}/books/${id}`, {
//       method: "DELETE"
//     })
//       .then((res) => {
//         console.log("Response Status:", res.status);
  
//         if (res.ok) {
//           // Item deleted successfully
//           console.log("Book Deleted Successfully");
  
//           // Update the state to trigger a re-render
         
//         } else {
//           // Handle non-successful response (e.g., show an alert)
//           console.log("Failed to delete book");
//           alert(`Failed to delete book, status: ${res.status}`);
//         }
//       })
//       .catch((error) => {
//         // Handle network or other errors
//         console.error(error.message);
//       });

      
//   };


  
  
  
  

//   return (
//     <div className=' px-4 my-12'>
//        <h2 className=' mb-8 text-3xl font-bold'>Manage Your Books</h2>
//        <Table hoverable className=' lg:w-[900px]'>
//         <Table.Head >
//           <Table.HeadCell className="p-4">
//             NO.
//           </Table.HeadCell>
//           <Table.HeadCell>Book Name</Table.HeadCell>
//           <Table.HeadCell>Author Name</Table.HeadCell>
//           <Table.HeadCell>Category</Table.HeadCell>
//           <Table.HeadCell>Price</Table.HeadCell>
//           <Table.HeadCell>
//             <span >EDIT OR MANAGE</span>
//           </Table.HeadCell>
//         </Table.Head>
//         <Table.Body>

//           {
//             [...books].reverse().map((book,index) =>
//             <Table.Row key={book._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="p-4">
//               {index+1}
//             </Table.Cell>
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//               {book.title}
//             </Table.Cell>
//             <Table.Cell>{book.authorName}</Table.Cell>
//             <Table.Cell>{book.category}</Table.Cell>
//             <Table.Cell>$10</Table.Cell>
//             <Table.Cell>
//               <Link className=' font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5' to={`/admin/dashboard/edit-books/${book._id}`}> 
//                  Edit
//               </Link>
//               <button onClick={()=>handleDelete(book._id)} className='  bg-black px-4 py-1 font-semibold text-white rounded hover:bg-sky-600'>Delete</button>
//             </Table.Cell>
//           </Table.Row>
//            )
//         }  
          
     
//         </Table.Body>
//       </Table>

// <div class="flex flex-col overflow-x-auto">
//   <div class="sm:-mx-6 lg:-mx-8">
//     <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//       <div class="overflow-x-auto">
//         <table class="min-w-full text-left text-sm font-light">
//           <thead class="border-b font-medium dark:border-neutral-500">
//             <tr>
//               <th scope="col" class="px-6 py-4">NO.</th>
//               <th scope="col" class="px-6 py-4">BOOK NAME</th>
//               <th scope="col" class="px-6 py-4">AUTHOR NAME</th>
//               <th scope="col" class="px-6 py-4">CATEGORY</th>
//               <th scope="col" class="px-6 py-4">EDIT</th>
//               <th scope="col" class="px-6 py-4">DELETE</th>
//             </tr>
//           </thead>
//           <tbody className=' h-3 overflow-y-scroll'>
//             <tr class="border-b dark:border-neutral-500">
//               <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>

   
//             </tr>
//             <tr class="border-b dark:border-neutral-500">
//               <td class="whitespace-nowrap px-6 py-4 font-medium ">2</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>

//             </tr>
//             <tr class="border-b ">
//               <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>
//               <td class="whitespace-nowrap px-6 py-4">Cell</td>

//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default ManageBooks



import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiPencilAlt, HiExclamationCircle, HiSearch } from 'react-icons/hi';

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Delete Modal State
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  // Fetch Books
  useEffect(() => {
    setLoading(true);
    fetch(`${api}/books`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch books');
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching books:', err);
        setBooks([]);
        setFilteredBooks([]);
        setLoading(false);
      });
  }, []);

  // Handle Search
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredBooks(books);
    } else {
      const lowerTerm = searchTerm.toLowerCase();
      const filtered = books.filter(book => 
        book.title.toLowerCase().includes(lowerTerm) || 
        book.authorName.toLowerCase().includes(lowerTerm)
      );
      setFilteredBooks(filtered);
    }
  }, [searchTerm, books]);

  // Handle Delete Confirmation
  const handleDeleteClick = (id) => {
    setBookToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (!bookToDelete) return;

    fetch(`${api}/books/${bookToDelete}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.ok) {
          setBooks(prevBooks => prevBooks.filter((book) => book._id !== bookToDelete));
          setShowDeleteModal(false);
          setBookToDelete(null);
        } else {
          alert(`Failed to delete book. Status: ${res.status}`);
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className='px-4 my-12 max-w-7xl mx-auto'>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className='text-3xl font-bold text-gray-900'>Manage Your Books</h2>
        
        {/* Search Bar */}
        <div className="w-full md:w-96">
          <TextInput
            id="search"
            type="text"
            icon={HiSearch}
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-100">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4">No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {loading ? (
              <Table.Row>
                <Table.Cell colSpan={6} className="text-center py-10 text-gray-500">
                  Loading books...
                </Table.Cell>
              </Table.Row>
            ) : filteredBooks.length > 0 ? (
              [...filteredBooks].reverse().map((book, index) => (
                <Table.Row key={book._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-4 font-medium text-gray-900">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    {book.title}
                  </Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>
                     <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded border border-blue-400">
                        {book.category}
                     </span>
                  </Table.Cell>
                  <Table.Cell>$10.00</Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <Link
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 flex items-center gap-1"
                      to={`/admin/dashboard/edit-books/${book._id}`}
                    >
                      <HiPencilAlt className="w-4 h-4" />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(book._id)}
                      className="font-medium text-red-600 hover:underline flex items-center gap-1 ml-4"
                    >
                      <HiOutlineTrash className="w-4 h-4" />
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={6} className="text-center py-10 text-gray-500">
                  No books found.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} size="md" popup onClose={() => setShowDeleteModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this book?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={confirmDelete}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowDeleteModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageBooks;