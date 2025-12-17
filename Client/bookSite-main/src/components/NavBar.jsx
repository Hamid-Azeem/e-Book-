import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';




function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);


  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Library", path: "/shop" },
    // { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Contact Us", path: "/contact" }
  ]

  return (
    <header className='w-full z-50  bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav  className={`py-4 lg:px-24 px-4 ${isSticky ? "top-0 left-0 right-0 bg-blue-300 sticky" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <Link className='text-2xl font-bold text-blue-700 flex items-center gap-2' to="/"><FaBlog className='inline-block' />Books</Link>

          <ul className='md:flex space-x-12 hidden'>
            {
              navItems.map(({ link, path }) => {
                return <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700' >{link}</Link>
              })
            }
          </ul>

          <div className='space-x-12 hidden lg:flex items-center'>
            <button><FaBarsStaggered className='w-5' /></button></div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>{
              isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered />

            }</button>
          </div>

          <div onClick={toggleMenu} className={`space-y-4 px-4 mt-12 py-7 bg-teal-100 text-center ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
              navItems.map(({ link, path }) => {
                return <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700' >{link}</Link>
              })
            }
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar