// import React, { useState } from 'react'
// import { Link,useNavigate } from 'react-router-dom';
// import useSignOut from 'react-auth-kit/hooks/useSignOut';
// const SideBar = ({isMenuOpen}) => {
//     const [isConfirm,setConfirm]=useState(false);
//     const send=useNavigate();
//     const signOut = useSignOut()
//     const showConfirm=()=>{
//         setConfirm(true);
//     }
//     const logout=()=>{
//         signOut();
//         send("/login");
//     }
//   return (
//     <>

//     {/* logout confirmation  */}
//     <div className="flex items-center justify-center h-screen ">
//   <div className={isConfirm? "block":"hidden"} x-data="{ showModal: true }">
   
   
   
//     <div x-show="showModal" className="fixed inset-0 transition-opacity z-30 " aria-hidden="true" >
//       <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//     </div>
   
//     <div x-show="showModal" x-transition:enter="transition ease-out duration-300 transform" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="transition ease-in duration-200 transform" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" className="fixed z-50 inset-0 overflow-y-auto" >
//       <div className=" flex  align-middle items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
       
//         <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
//           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          
//             <div className="sm:flex sm:items-start">
//               <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
               
//                 <svg width="64px" height="64px" className="h-6 w-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg"  strokeWidth="0.45600000000000007">
//                   <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                   <g id="SVGRepo_iconCarrier">
//                     <path d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#ef4444"></path>
//                     <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#ef4444"></path>
//                     <path fillRule="evenodd" clipRule={"evenodd"} d="M8.2944 4.47643C9.36631 3.11493 10.5018 2.25 12 2.25C13.4981 2.25 14.6336 3.11493 15.7056 4.47643C16.7598 5.81544 17.8769 7.79622 19.3063 10.3305L19.7418 11.1027C20.9234 13.1976 21.8566 14.8523 22.3468 16.1804C22.8478 17.5376 22.9668 18.7699 22.209 19.8569C21.4736 20.9118 20.2466 21.3434 18.6991 21.5471C17.1576 21.75 15.0845 21.75 12.4248 21.75H11.5752C8.91552 21.75 6.84239 21.75 5.30082 21.5471C3.75331 21.3434 2.52637 20.9118 1.79099 19.8569C1.03318 18.7699 1.15218 17.5376 1.65314 16.1804C2.14334 14.8523 3.07658 13.1977 4.25818 11.1027L4.69361 10.3307C6.123 7.79629 7.24019 5.81547 8.2944 4.47643ZM9.47297 5.40432C8.49896 6.64148 7.43704 8.51988 5.96495 11.1299L5.60129 11.7747C4.37507 13.9488 3.50368 15.4986 3.06034 16.6998C2.6227 17.8855 2.68338 18.5141 3.02148 18.9991C3.38202 19.5163 4.05873 19.8706 5.49659 20.0599C6.92858 20.2484 8.9026 20.25 11.6363 20.25H12.3636C15.0974 20.25 17.0714 20.2484 18.5034 20.0599C19.9412 19.8706 20.6179 19.5163 20.9785 18.9991C21.3166 18.5141 21.3773 17.8855 20.9396 16.6998C20.4963 15.4986 19.6249 13.9488 18.3987 11.7747L18.035 11.1299C16.5629 8.51987 15.501 6.64148 14.527 5.40431C13.562 4.17865 12.8126 3.75 12 3.75C11.1874 3.75 10.4379 4.17865 9.47297 5.40432Z" fill="#ef4444"></path>
//                   </g>
//                 </svg>
//               </div>
//               <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                 <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">Logout </h3>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500"> Are you sure you want to Logout? </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//             <button onClick={logout}  type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"> Logout </button>
//             <button onClick={()=> setConfirm(false)}   type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancel </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// {/* navbar  */}
   
//     <aside id="sidebar" className={`fixed  z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${isMenuOpen? ` left-0`:`left-[-400px]`} lg:left-0`} aria-label="Sidebar">
//          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
//             <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
//                <div className="flex-1 px-3 bg-white divide-y space-y-1">
//                   <ul className="space-y-2 pb-2">
//                      {/* <li>
//                         <form action="#" method="GET" className="lg:hidden">
//                            <label for="mobile-search" className="sr-only">Search</label>
//                            <div className="relative">
//                               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
//                                  </svg>
//                               </div>
//                               <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600  block w-full pl-10 p-2.5" placeholder="Search" />
//                            </div>
//                         </form>
//                      </li> */}
//                      <li>
//                         <Link to={''} className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
//                            <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
//                               <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
//                            </svg>
//                            <span className="ml-3">Dashboard</span>
//                         </Link>
//                      </li>
//                      <li>
//                         <Link to={'manage'}  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
//                            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
//                            </svg>
//                            <span className="ml-3 flex-1 whitespace-nowrap">Manage Books</span>
//                            {/* <span className="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">Pro</span> */}
//                         </Link>
//                      </li>
//                      <li>
//                         <Link to={'upload'} className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
//                            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
//                               <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
//                            </svg>
//                            <span className="ml-3 flex-1 whitespace-nowrap">Upload Books</span>
//                            {/* <span className="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">Pro</span> */}
//                         </Link>
//                      </li>
//                      <li>
//                         <Link to={'user'} className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
//                            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule={"evenodd"} ></path>
//                            </svg>
//                            <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
//                         </Link>
//                      </li>
//                      <li>
//                         <Link to={'admins'} className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
//                            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v2h8v-2zM2 15a4 4 0 008 0v2H2v-2z"></path>
//                            </svg>
//                            <span className="ml-3 flex-1 whitespace-nowrap">Manage Admins</span>
//                         </Link>
//                      </li>
//                      <li>
//                         <Link to={'/'} className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
//                            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule={"evenodd"} ></path>
//                            </svg>
//                            <span className="ml-3 flex-1 whitespace-nowrap">View Site</span>
//                         </Link>
//                      </li>
//                      <li>
//                         <Link to={'/login'} className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
//                            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule={"evenodd"} ></path>
//                            </svg>
//                            <span className="ml-3 flex-1 whitespace-nowrap">Sign In</span>
//                         </Link>
//                      </li>
//                      <li>
//                         <Link to={'/register'} className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
//                            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule={"evenodd"} ></path>
//                            </svg>
//                            <span className="ml-3 flex-1 whitespace-nowrap">Create Admin</span>
//                         </Link>
//                      </li>
//                   </ul>
//                   <div className="space-y-2 pt-2">
//                      {/* <Link to={'comming-soon'}  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
//                         <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
//                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule={"evenodd"} ></path>
//                         </svg>
//                         <span className="ml-3">Documentation</span>
//                      </Link> */}
//                      <Link to={'bulk-upload'}  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
//                         <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
//                         </svg>
//                         <span className="ml-3">Bulk Upload</span>
//                      </Link>
//                      <Link to={'seed-books'}  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
//                         <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
//                         </svg>
//                         <span className="ml-3">Top Selling Books</span>
//                      </Link>
//                      <button onClick={showConfirm} className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
//                         <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule={"evenodd"} ></path>
//                         </svg>
//                         <span className="ml-3">Logout</span>
//                      </button>

//                      <div>
                  


//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </aside>
//       </>
//   )
// }

// export default SideBar





import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { Modal, Button } from 'flowbite-react';
import { HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiLogout, HiOutlineCloudUpload } from 'react-icons/hi';

const SideBar = ({ isMenuOpen }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const signOut = useSignOut();
  const location = useLocation();

  const handleLogout = () => {
    signOut();
    navigate("/login");
  }

  const isActive = (path) => {
    // Check if the current path exactly matches or includes the path (for nested routes)
    if (path === '' && location.pathname === '/admin/dashboard') return true;
    if (path !== '' && location.pathname.includes(path)) return true;
    return false;
  };

  const NavItem = ({ to, icon: Icon, label }) => (
    <li>
      <Link 
        to={to} 
        className={`flex items-center p-3 text-base font-medium rounded-lg group transition-colors duration-200 ${
          isActive(to) 
            ? 'bg-blue-100 text-blue-700' 
            : 'text-gray-900 hover:bg-gray-100'
        }`}
      >
        <Icon className={`w-6 h-6 transition duration-75 ${isActive(to) ? 'text-blue-700' : 'text-gray-500 group-hover:text-gray-900'}`} />
        <span className="ml-3">{label}</span>
      </Link>
    </li>
  );

  return (
    <>
      <aside 
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-4 transition-transform bg-white border-r border-gray-200 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white flex flex-col justify-between">
          <ul className="space-y-2 mt-4">
             <div className='px-2 mb-6'>
                <h2 className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                    <HiViewBoards/> AdminPanel
                </h2>
             </div>
            <NavItem to="" icon={HiChartPie} label="Dashboard" />
            <NavItem to="manage" icon={HiInbox} label="Manage Books" />
            <NavItem to="upload" icon={HiOutlineCloudUpload} label="Upload Book" />
            <NavItem to="bulk-upload" icon={HiTable} label="Bulk Upload" />
            <NavItem to="user" icon={HiUser} label="Users" />
            <NavItem to="admins" icon={HiShoppingBag} label="Manage Admins" />
          </ul>

          <div className="pt-4 mt-4 space-y-2 border-t border-gray-200">
            <button 
              onClick={() => setShowLogoutModal(true)} 
              className="flex w-full items-center p-3 text-base font-medium text-red-600 rounded-lg hover:bg-red-50 group transition-colors duration-200"
            >
              <HiLogout className="w-6 h-6 text-red-500 transition duration-75 group-hover:text-red-700" />
              <span className="ml-3">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Logout Confirmation Modal using Flowbite */}
      <Modal show={showLogoutModal} size="md" popup onClose={() => setShowLogoutModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiLogout className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to sign out?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleLogout}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowLogoutModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SideBar