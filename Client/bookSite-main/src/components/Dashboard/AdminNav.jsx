// import React from 'react';
// import { Link } from 'react-router-dom';
// import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

// const AdminNav = ({toggleMenu}) => {
//     const auth = useAuthUser();
  
//   return (
//     <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
//     <div className="px-3 py-3 lg:px-5 lg:pl-3">
//        <div className="flex items-center justify-between">
//           <div className="flex items-center justify-start">
//              <button onClick={toggleMenu} id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
//                 <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule={"evenodd"} ></path>
//                 </svg>
//                 <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule={"evenodd"} ></path>
//                 </svg>
//              </button>
//              <div className="text-xl font-bold flex items-center lg:ml-2.5">
//              {/* <img src={logo} className="h-6 mr-2" alt="Windster Logo" /> */}
//              <span className="self-center whitespace-nowrap">Hey! {auth.name}</span>
//              </div>

//           </div>
//           <div className="flex items-center">

//              <Link to={'/'} className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">

//                 View Site
//              </Link>
//           </div>
//        </div>
//     </div>
//  </nav>
//   )
// }

// export default AdminNav



import React from 'react';
import { Link } from 'react-router-dom';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { FaBarsStaggered } from 'react-icons/fa6';

const AdminNav = ({ toggleMenu }) => {
  const auth = useAuthUser();

  return (
    <nav className="fixed top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 lg:pl-64 transition-all duration-300">
      <div className="px-4 py-3 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 mr-3 text-slate-600 rounded-full cursor-pointer hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <FaBarsStaggered className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                Dashboard Overview
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-bold text-slate-800">{auth?.name || 'Administrator'}</span>
                <span className="text-xs font-medium text-slate-400">Admin Panel</span>
             </div>
             <Link to="/" className="text-white bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 shadow-sm hover:-translate-y-0.5 hover:shadow-md font-semibold rounded-full text-sm px-6 py-2 transition-all duration-300">
                View Site
             </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AdminNav