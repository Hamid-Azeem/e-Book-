
// import React,{useState,useEffect} from 'react'
// import { Table,Checkbox } from 'flowbite-react';
// import {Link} from 'react-router-dom'

// const Users = () => {
//    const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

//     const [users, setUsers] = useState([]);
//     const [isConfirm,setConfirm]=useState(false);
//     const [id,setId]=useState("");
//     const [showEdit,setShowEdit]=useState(false);
// const[currentUser,setCurrentUser]=useState([]);
//     const showConfirm=()=>{
//         setConfirm(!isConfirm);
//     }

//     const showEditBox=()=>{
//         setShowEdit(!showEdit);
//     }
 
  




//     const handleDelete = (id) => {
//         setUsers(prevUser => prevUser.filter((user) => user._id !== id));
    
//         fetch(`${api}/getuser/${id}`, {
//           method: "DELETE"
//         }).then((res) => {
//             console.log("Response Status:", res.status);
      
//             if (res.ok) {
//               // Item deleted successfully
//               console.log("User Deleted Successfully");
      
//               // Update the state to trigger a re-render
             
//             } else {
//               // Handle non-successful response (e.g., show an alert)
//               console.log("Failed to delete User");
//               alert(`Failed to delete User, status: ${res.status}`);
//             }
//           })
//           .catch((error) => {
//             // Handle network or other errors
//             console.error(error.message);
//           });
    
          
//       };


//       const handleEdit=(e)=>{
//         e.preventDefault();
    
//         const role=e.target.role.value;


        
      
        
//         const user={
//           role
//         }
        
//         fetch(`${api}/getuser/${currentUser._id}`,{
//           method:"PATCH",
//           headers:{
//             "Content-type":"application/json"
//           },
//           body:JSON.stringify(user)
//         }).then((res)=>{}).then(()=>{
          
          
//         })
      
//       showEditBox();
      
//       }

//       useEffect(() => {
//         fetch(`${api}/getuser`)
//           .then((res) => {
//             return res.json();
//           })
//           .then((data) => {
//             setUsers(data);
//           });
//       }, [handleEdit]);
      
    

//   return (

//     <div className=' px-4 my-12'>
//        <h2 className=' mb-8 text-3xl font-bold'>Manage Registered Admins</h2>
       

       
// <div id="Delete-modal" tabIndex="-1" className={` ${isConfirm?"flex" : "hidden"}  overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
// <div x-show="showModal" className="fixed inset-0 transition-opacity z-30 " aria-hidden="true" >
//       <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//     </div>
//     <div className="relative p-4 w-full max-w-md max-h-full z-50 ">
//         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             <button onClick={showConfirm} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
//                 <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//             </button>
//             <div className="p-4 md:p-5 text-center">
//                 <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
//                 </svg>
//                 <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
//                 <button onClick={()=>{
//                     handleDelete(id);
//                     showConfirm();
//                     }} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
//                     Yes, I'm sure
//                 </button>
//                 <button onClick={showConfirm} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
//             </div>
//         </div>
//     </div>
// </div>






// <div id="Edit-modal" tabIndex="-1" aria-hidden="true" className={` ${showEdit?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100vh] max-h-full`}>

//       <div className="absolute inset-0 bg-gray-500 opacity-75 "></div>
//     <div className="relative p-4 w-full max-w-md max-h-full">
       
//         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
         
//             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     Edit User Permission
//                 </h3>
//                 <button onClick={showEditBox} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
//                     <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                     </svg>
//                     <span className="sr-only">Close modal</span>
//                 </button>
//             </div>
        
//             <form onSubmit={(e)=>handleEdit(e)} className="p-4 md:p-5">
//                 <div className="grid gap-4 mb-4 grid-cols-2">
//                     <div className="col-span-2">
//                         <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
//                         <div>{currentUser.name}</div>
//                     </div>
 
//                     <div className="col-span-2 sm:col-span-1">
//                         <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
//                         <select id="category" name='role' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
//                             <option defaultValue=" ">Select category</option>
//                             <option value="Author">Author</option>
//                             <option value="Admin">Admin</option>
//                             <option value="Super-Admin">Super-Admin</option>
//                         </select>
//                     </div>

//                 </div>
//                 <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                   
//                     Save
//                 </button>
//             </form>
//         </div>
//     </div>
// </div> 


//        <Table hoverable className=' lg:w-[900px]'>
//         <Table.Head >
//           <Table.HeadCell className="p-4">
//             NO.
//           </Table.HeadCell>
//           <Table.HeadCell>Admin Name</Table.HeadCell>
//           <Table.HeadCell>Email Address</Table.HeadCell>
//           <Table.HeadCell>Role</Table.HeadCell>
//           <Table.HeadCell>
//             <span >DELETE</span>
//           </Table.HeadCell>
//         </Table.Head>
//         <Table.Body>

//             {
//               [...users].reverse().map((user,index) =>
//             <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="p-4">
//               {index+1}
//             </Table.Cell>
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//               {user.name}
//             </Table.Cell>
//             <Table.Cell>{user.email}</Table.Cell>
//             <Table.Cell>{user.role}</Table.Cell>
//             <Table.Cell>
//             <button onClick={()=>{
//                 setCurrentUser(user);
//                 showEditBox();
//             }} className=' font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5'> 
//                  Edit
//               </button>

//               <button onClick={()=>{
//                 setId(user._id);
//                 showConfirm()
//               }} className='  bg-black px-4 py-1 font-semibold text-white rounded hover:bg-sky-600'>Delete</button>
//             </Table.Cell>
//           </Table.Row>
//            )
//         }  
          
     
//         </Table.Body>
//       </Table>


//     </div>
//   )
// }

// export default Users



import React, { useState, useEffect } from 'react'
import { Table, Modal, Button, Select, Label } from 'flowbite-react';
import { HiOutlineTrash, HiPencilAlt, HiExclamationCircle } from 'react-icons/hi';

const Users = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [users, setUsers] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch(`${api}/getuser`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  };

  const handleDelete = () => {
    if (!selectedUser) return;
    
    fetch(`${api}/getuser/${selectedUser._id}`, { method: "DELETE" })
      .then(res => {
        if (res.ok) {
          setUsers(prev => prev.filter(u => u._id !== selectedUser._id));
          setShowDeleteModal(false);
          setSelectedUser(null);
        } else {
          alert("Failed to delete user");
        }
      })
      .catch(err => console.error(err));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const role = e.target.role.value;
    
    fetch(`${api}/getuser/${selectedUser._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ role })
    })
    .then(res => res.json())
    .then(() => {
      fetchUsers(); // Refresh list to show new role
      setShowEditModal(false);
      setSelectedUser(null);
    });
  };

  return (
    <div className='max-w-6xl mx-auto'>
       <div className='mb-6'>
        <h2 className='text-3xl font-bold text-gray-900'>User Management</h2>
        <p className='text-gray-500'>Manage registered users and their permissions.</p>
       </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {[...users].reverse().map((user, index) => (
              <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="font-medium text-gray-900">{index + 1}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                   <span className={`px-2 py-1 rounded-full text-xs font-semibold ${user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                      {user.role || 'User'}
                   </span>
                </Table.Cell>
                <Table.Cell className="flex gap-2">
                  <Button size="xs" color="light" onClick={() => { setSelectedUser(user); setShowEditModal(true); }}>
                    <HiPencilAlt className="mr-1 h-4 w-4" /> Edit
                  </Button>
                  <Button size="xs" color="failure" onClick={() => { setSelectedUser(user); setShowDeleteModal(true); }}>
                    <HiOutlineTrash className="mr-1 h-4 w-4" /> Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} size="md" popup onClose={() => setShowDeleteModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete {selectedUser?.name}?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>Yes, I'm sure</Button>
              <Button color="gray" onClick={() => setShowDeleteModal(false)}>No, cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Edit Role Modal */}
      <Modal show={showEditModal} size="sm" onClose={() => setShowEditModal(false)}>
        <Modal.Header>Edit User Role</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-4">
              <Label htmlFor="role" value="Select Role" />
              <Select id="role" name="role" defaultValue={selectedUser?.role || 'User'} className="mt-2">
                <option value="User">User</option>
                <option value="Author">Author</option>
                <option value="Admin">Admin</option>
              </Select>
            </div>
            <div className="flex justify-end gap-2">
               <Button type="submit" color="blue">Save</Button>
               <Button color="gray" onClick={() => setShowEditModal(false)}>Cancel</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Users