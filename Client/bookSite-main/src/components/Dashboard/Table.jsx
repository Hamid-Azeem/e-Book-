// import { useMemo,useState,useEffect } from 'react';
// import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
//   useMRT_Rows
// } from 'material-react-table';
// import { MenuItem, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { Edit, Delete, Refresh } from '@mui/icons-material';
// import '../../App.css';

// const Table = () => {
//   const api=import.meta.env.VITE_API_URL || 'http://localhost:3000';

//   const auth = useAuthUser();
//     const [data, setData] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState('');

//     const fetchBooks = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`${api}/books`);
//         const booksData = await response.json();
//         setData(booksData);
//         console.log('Books fetched:', booksData.length);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//         setMessage('Error fetching books');
//       } finally {
//         setLoading(false);
//       }
//     };

//     useEffect(() => {
//       fetchBooks();

//       fetch(`${api}/getuser`)
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           setUsers(data);
//         });
//     }, []);
   
//   //should be memoized or stable
//   let index=0;
//   const columns = useMemo(
//     () => [
//         {
//             accessorKey: 'rowNumber',
            
//             header: '#',
//             size: 50,
//             Cell:({row})=> row.index+1,
            
            
//           },
//       {
//         accessorKey: 'title', //access nested data with dot notation
//         header: 'Title',
//         size: 300,
//       },
//       {
//         accessorKey: 'authorName',
//         header: 'Author Name',
//         size: 200,
//       },
//       {
//         accessorKey: 'category', //normal accessorKey
//         header: 'Category',
//         size: 150,
//       },

      
//     ],
//     [],
//   );


//   const table = useMaterialReactTable({
//     columns,
//     data,
//     enableRowNumbers: false,
//     enableRowActions: true,
//     initialState: {
//         columnOrder: [
//             'rowNumber',
//          'title',
//          'mrt-row-select', //move the built-in selection column to the end of the table
//          'authorName',
//          'category'
//         ],
//       },
//       defaultColumn: {
//         minSize: 20,

//       },
//       layoutMode:"grid",
      
//     renderRowActionMenuItems: ({ row }) => [
      
//         <Link to={`/admin/dashboard/edit-books/${row.original._id}`}>
//       <MenuItem key="edit"  onClick={() => console.info('Edit')}>
//         <Edit/>
//         Edit
//       </MenuItem>
//       </Link>,
//       <MenuItem key="delete"  onClick={() =>{

//         handleDelete(row.original._id)
//         }}>
//           <Delete/>
//         Delete
//       </MenuItem>,
      
//     ],
  
//     muiTableBodyProps: {
//         sx: {
//           //stripe the rows, make odd rows a darker color
//           '& td:nth-of-type(2)': {
//             color: 'rgb(17 24 39/0.9)',
//             fontWeight:'550'
            
//           },
//           '& td': {
//             color: 'rgb(17 24 39/0.8)',
            
//           },
//         },
    
//       },
//   });

 


  
//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure you want to delete this book?')) {
//       return;
//     }

//     try {
//       const response = await fetch(`${api}/books/${id}`, {
//         method: "DELETE"
//       });

//       if (response.ok) {
//         setData(prevBooks => prevBooks.filter((book) => book._id !== id));
//         setMessage('✅ Book deleted successfully');
//         setTimeout(() => setMessage(''), 3000);
//       } else {
//         setMessage('❌ Failed to delete book');
//         console.error('Delete failed:', response.status);
//       }
//     } catch (error) {
//       setMessage('❌ Error deleting book: ' + error.message);
//       console.error('Delete error:', error);
//     }
//   };
  
  

//   return(
//     <div className=' px-4 my-12'>
//        <div className='flex justify-between items-center mb-8'>
//          <h2 className='text-3xl font-bold'>Manage Your Books</h2>
//          <Button 
//            variant="contained" 
//            startIcon={<Refresh />}
//            onClick={fetchBooks}
//            disabled={loading}
//          >
//            {loading ? 'Loading...' : 'Refresh'}
//          </Button>
//        </div>
//        {message && (
//          <div className={`mb-4 p-3 rounded ${message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//            {message}
//          </div>
//        )}
//        <div className=' w-[300px] sm:w-[600px] md:w-full'>
//   <MaterialReactTable  table={table} />

//        </div>
//   </div>
//   ) 
// };

// export default Table;



import { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MenuItem, Button as MuiButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Edit, Delete, Refresh } from '@mui/icons-material';

const Table = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${api}/books`);
      const booksData = await response.json();
      setData(booksData);
    } catch (error) {
      console.error(error);
      setMessage('Error fetching books');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this book?')) return;
    try {
      const response = await fetch(`${api}/books/${id}`, { method: "DELETE" });
      if (response.ok) {
        setData(prev => prev.filter(book => book._id !== id));
        setMessage('✅ Book deleted successfully');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('❌ Failed to delete book');
      }
    } catch (error) {
      setMessage('❌ Error: ' + error.message);
    }
  };

  const columns = useMemo(() => [
    { accessorKey: 'title', header: 'Title', size: 250 },
    { accessorKey: 'authorName', header: 'Author', size: 180 },
    { accessorKey: 'category', header: 'Category', size: 120 },
    { 
        accessorKey: 'price', 
        header: 'Price', 
        size: 100,
        Cell: ({row}) => row.original.price ? `$${row.original.price}` : 'Free'
    },
  ], []);

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowNumbers: true,
    enableRowActions: true,
    renderRowActionMenuItems: ({ row, closeMenu }) => [
      <Link to={`/admin/dashboard/edit-books/${row.original._id}`} key="edit" style={{textDecoration: 'none', color: 'inherit'}}>
        <MenuItem onClick={() => closeMenu()}>
            <Edit className='mr-2' fontSize="small"/> Edit
        </MenuItem>
      </Link>,
      <MenuItem key="delete" onClick={() => { handleDelete(row.original._id); closeMenu(); }}>
        <Delete className='mr-2 text-red-600' fontSize="small"/> <span className="text-red-600">Delete</span>
      </MenuItem>,
    ],
    muiTablePaperProps: {
        elevation: 0,
        style: { border: '1px solid #e5e7eb', borderRadius: '0.75rem' }
    }
  });

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col sm:flex-row justify-between items-center mb-6 gap-4'>
         <div>
            <h2 className='text-3xl font-bold text-gray-900'>Manage Books</h2>
            <p className='text-gray-500 mt-1'>View and manage your book inventory</p>
         </div>
         <MuiButton variant="outlined" startIcon={<Refresh />} onClick={fetchBooks} disabled={loading}>
           {loading ? 'Refreshing...' : 'Refresh List'}
         </MuiButton>
      </div>

      {message && (
         <div className={`mb-4 p-4 rounded-lg text-sm font-medium ${message.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
           {message}
         </div>
      )}

      <MaterialReactTable table={table} />
    </div>
  );
};

export default Table;