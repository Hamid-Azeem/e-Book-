import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import BannerCard from './BannerCard';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const bannerRef = useRef(null);

  const handleSearch = () => {
    navigate(`/shop/?query=${searchQuery}`);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Small delay so the cards fan out first, then text appears
      gsap.fromTo('.hero-text', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.5 }
      );
    }, bannerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={bannerRef} className='relative px-4 lg:px-8 bg-white flex flex-col justify-center items-center min-h-screen overflow-hidden pt-24 pb-12'>
      {/* Minimalistic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 via-purple-50 to-teal-50 rounded-full blur-3xl opacity-70 -z-10"></div>
      
      {/* 1. Center piece: The Cards */}
      <div className='w-full flex justify-center z-10 mb-12 sm:mb-16 mt-10 md:mt-0'>
        <BannerCard />
      </div>

      {/* 2. Content at bottom, centered, compact ("little short") */}
      <div className='z-10 flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto'>
        <h2 className='hero-text text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 leading-tight tracking-normal'>
          The Ultimate <br/>
          <span className='text-blue-600'>Reading Experience</span>
        </h2>
        
        <p className='hero-text text-lg md:text-xl text-slate-500 font-light max-w-xl leading-relaxed'>
          Explore millions of captivating stories. Find and download your next favorite book with just one click.
        </p>
        
        <div className='hero-text flex w-full max-w-md items-center gap-3 pt-6'>
          <input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            type="search" 
            placeholder='Search by title, author, or genre...' 
            className='w-full py-3.5 px-6 rounded-full border border-slate-200 bg-white shadow-sm outline-none focus:ring-1 focus:ring-blue-500 transition-all text-slate-700 font-normal' 
          />
          <button 
            onClick={handleSearch} 
            className='whitespace-nowrap bg-blue-600 text-white font-medium px-8 py-3.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-blue-700 transition-all duration-300'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner;