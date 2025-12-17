import React, { useEffect, useState } from 'react'
// import favImg from '../../public/assets/favoritebook.jpg';
import favImg from '/src/assets/favoritebook.jpg';

import { Link } from 'react-router-dom';

const FavBooks = () => {
  
    
  return (
   <div className=' px4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 '>
    <div className=' md:w-1/2'>

           <img src={favImg} alt="" className=' rounded md:w-10/12 w-[100%]' />
    </div>
    <div className=' md:w-1/2 space-y-6 space-x-5 md:space-x-0'>
<h2 className=' text-5xl font-bold my-5 md:w-4/5 leading-snug mx-5 md:mx-0'>Find your Favorite <span className=' text-blue-700'>Book Here!</span></h2>
    <p className=' mb-10 text-lg md:w-5/6'>We invites everyone to download a diverse collection of books spanning genres and eras, celebrating the joy of reading without any cost.</p>
    <div className=' flex flex-col sm:flex-row md:justify-between justify-center gap-6 md:w-3/4 my-14'>
      <div>
        <h3 className=' text-3xl font-bold'>1000+</h3>
        <p className=' text-base'>Book Listings</p>
      </div>
      <div>
        <h3 className=' text-3xl font-bold'>550+</h3>
        <p className=' text-base'>Register Users</p>
      </div>
      <div>
        <h3 className=' text-3xl font-bold'>5000+</h3>
        <p className=' text-base'>PDF Downloads</p>
      </div>
    </div>
    <Link to="/shop" className=' mt-8 block text-center md:text-left'>
          <button className=' bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button>
    </Link>
    </div>
   </div>
  )
}

export default FavBooks