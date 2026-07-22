import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bookPic from '/src/assets/awardbooks.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PromoBanner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <div className='my-24 px-6 lg:px-24 max-w-6xl mx-auto'>
      <div 
        ref={containerRef}
        className='relative overflow-hidden bg-white border border-slate-100 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-12 px-10 py-12 shadow-sm group'
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-100 to-purple-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <div className='md:w-1/2 z-10 text-center md:text-left space-y-6'>
          <h2 className='text-3xl md:text-4xl font-semibold text-slate-800 leading-snug tracking-normal'>
            Top Books of Famous Authors in <span className="text-blue-600 font-medium">100+ Categories</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-md mx-auto md:mx-0 font-light leading-relaxed">
            Discover critically acclaimed masterpieces, award-winning novels, and hidden gems all in one place.
          </p>
          <div className="pt-2">
            <Link to="/shop" className='inline-block'>
              <button className='bg-blue-600 text-white font-medium px-8 py-3.5 rounded-full shadow-sm hover:shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300'>
                Explore Now
              </button>
            </Link>
          </div>
        </div>
        
        <div className='z-10 mt-6 md:mt-0 flex justify-center'>
          <img 
            src={bookPic} 
            className='w-64 md:w-80 object-contain hover:-translate-y-1 transition-transform duration-500' 
            alt="Award Winning Books" 
          />
        </div>
      </div>
    </div>
  )
}

export default PromoBanner;