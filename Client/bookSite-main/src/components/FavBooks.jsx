import React, { useEffect, useRef } from 'react'
import favImg from '/src/assets/favoritebook.jpg';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FavBooks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.animate-fav');
      
      elements.forEach((el, index) => {
        gsap.fromTo(el,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }
  }, []);

  return (
    <div className='relative bg-white overflow-hidden' ref={containerRef}>
      {/* Minimalistic background accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-slate-50 to-white -z-10"></div>
      
      <div className='px-6 lg:px-24 py-24 flex flex-col md:flex-row justify-between items-center gap-16 max-w-7xl mx-auto'>
        <div className='md:w-1/2 animate-fav relative group'>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
          <img 
            src={favImg} 
            alt="Favorite Books" 
            className='relative rounded-2xl shadow-xl hover:shadow-2xl md:w-10/12 w-full object-cover transform hover:-translate-y-2 transition-all duration-500 ease-out border border-gray-50' 
          />
        </div>
        
        <div className='md:w-1/2 space-y-8 animate-fav'>
          <h2 className='text-3xl md:text-4xl font-semibold text-slate-800 leading-tight tracking-normal'>
            Find your Favorite <br/>
            <span className='text-blue-600 font-medium'>Book Here!</span>
          </h2>
          <p className='text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-lg'>
            We invite everyone to discover a diverse collection of books spanning genres and eras, celebrating the joy of reading in a beautifully simple space.
          </p>
          
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 py-4'>
            <div className="flex flex-col space-y-1">
              <h3 className='text-3xl font-semibold text-slate-800'>1000+</h3>
              <p className='text-xs font-medium text-slate-400 uppercase tracking-widest'>Book Listings</p>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className='text-3xl font-semibold text-slate-800'>550+</h3>
              <p className='text-xs font-medium text-slate-400 uppercase tracking-widest'>Registered Users</p>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className='text-3xl font-semibold text-slate-800'>5000+</h3>
              <p className='text-xs font-medium text-slate-400 uppercase tracking-widest'>PDF Downloads</p>
            </div>
          </div>
          
          <div className='flex justify-center md:justify-start w-full'>
            <Link to="/shop" className='inline-block mt-4'>
              <button className='bg-blue-600 text-white font-medium px-8 py-3.5 rounded-full shadow-sm hover:shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300'>
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavBooks;