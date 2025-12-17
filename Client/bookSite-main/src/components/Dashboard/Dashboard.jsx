// import React,{useState,useEffect} from 'react'
// import { Link } from 'react-router-dom';
// import SideBar from './SideBar';
// import AdminNav from './AdminNav';
// import { Outlet } from 'react-router-dom'
// const Dashboard = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false); 
//   const toggleMenu=()=>{
//    setMenuOpen(!isMenuOpen);
//   } 

//   return (
//     <div>
   
// <div>
//   <AdminNav toggleMenu={toggleMenu}/>
//    <div className="flex overflow-hidden bg-white pt-16 absolute ">

//     {/* nabar  */}
//     <SideBar isMenuOpen={isMenuOpen}/>
      
      
//    <div className=' flex justify-center w-[100vw] lg:w-full lg:ml-[300px]'>

//       <Outlet/>
//    </div>
//    </div>
 
// </div>
//     </div>
//   )
// }

// export default Dashboard



import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar';
import AdminNav from './AdminNav';

const Dashboard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <SideBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full relative">
        <AdminNav toggleMenu={toggleMenu} />
        
        <main className="flex-1 overflow-y-auto pt-16 lg:ml-64 p-4 lg:p-6 scroll-smooth">
          <Outlet />
        </main>
      </div>
      
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-20 lg:hidden glass"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  )
}

export default Dashboard