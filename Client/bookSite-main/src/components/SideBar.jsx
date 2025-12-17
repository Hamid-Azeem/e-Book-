import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import React,{useState} from 'react';
import logo from '/src/assets/profile.jpg'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark,FaArrowLeft } from 'react-icons/fa6';

const SideBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const toggleMenu=()=>{
    setMenuOpen(false)
  }
  return (
    <div className={`border-2 border-black absolute transition-all duration-200 ease-in ${isMenuOpen? ` left-0`:`left-[-400px]`}`} >
        <Sidebar aria-label="Sidebar with content separator example" className=''>
         <div className=' flex flex-row justify-between pr-4'>

         
          <div className=' border-2'>    
        <Sidebar.Logo href="/" img={logo} className=' w-full' imgAlt="=logo">
        
      </Sidebar.Logo>
      </div>
      <div>
      <div className='hidden sm:block'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>{
              isMenuOpen ? <FaArrowLeft className='h-5 w-5 text-black' /> : <FaBarsStaggered />

            }</button>
          </div>
      </div>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={"/admin/dashboard"}>
          <Sidebar.Item icon={HiChartPie}>
            Dashboard

          </Sidebar.Item>
          </Link>
          <Link to={"/admin/dashboard/upload"}>

          <Sidebar.Item  icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          </Link>
          <Link to={"/admin/dashboard/manage"}>
          <Sidebar.Item  icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          </Link>
          <Sidebar.Item  icon={HiUser}>
            Users
          </Sidebar.Item>
          <Link to={"/"}>

          <Sidebar.Item  icon={HiShoppingBag}>
            View Site
          </Sidebar.Item>
          </Link>
          <Link to={"/login"}>

          <Sidebar.Item  icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          </Link>
          <Link to={"/register"}>

          <Sidebar.Item icon={HiTable}>
            Sign Up
          </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>




	

    </div>
  )
}

export default SideBar