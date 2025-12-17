import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Dashboard from './Dashboard/Dashboard'




const DashboardLayout = () => {
  return (
    // <div className=' flex gap-4 flex-col md:flex-row'>

    //   <div className=' w-64'></div>
    //   <div className=' fixed my-5 mx-3'>
    //     <SideBar/>
    //   </div>
    //   <Outlet/>
    // </div>
    <Dashboard/>
  )
}

export default DashboardLayout