import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBarsStaggered, FaBookOpen, FaXmark } from 'react-icons/fa6';
import gsap from 'gsap';

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Fixed the removeEventListener bug
    };
  }, []);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo('.mobile-nav-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Library", path: "/shop" },
    { link: "Contact Us", path: "/contact" }
  ];

  return (
    <header className={`w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${isSticky ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className='flex justify-between items-center'>

          {/* Logo */}
          <Link className='text-2xl font-black flex items-center gap-2 group' to="/">
            <FaBookOpen className='text-blue-600 group-hover:rotate-12 transition-transform duration-300' />
            <span className='font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight'>
              Book
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className='md:flex space-x-10 hidden items-center'>
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${location.pathname === path
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                    }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Call to action (Desktop) */}
          <div className='hidden md:flex items-center'>
            <Link to="/shop">
              <button className='bg-slate-900 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>
                Explore
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className='text-slate-800 focus:outline-none p-2 rounded-full hover:bg-slate-100 transition-colors'>
              {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBarsStaggered className='h-6 w-6' />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[400px] py-6 opacity-100 visible" : "max-h-0 py-0 opacity-0 invisible"
          }`}
      >
        <div className='flex flex-col items-center space-y-6'>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className='mobile-nav-item text-lg font-bold text-slate-800 uppercase tracking-widest hover:text-blue-600 transition-colors'
            >
              {link}
            </Link>
          ))}
          <Link to="/shop" onClick={() => setMenuOpen(false)} className="mobile-nav-item w-3/4">
            <button className='w-full bg-slate-900 text-white font-bold px-8 py-4 rounded-full shadow-lg'>
              Explore Books
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default NavBar;