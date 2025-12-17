import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from '/src/assets/awardbooks.png'
const PromoBanner = () => {
  return (
    <div className=' mt16 py-12 bg-teal-100 px-4 lg:px-24'
    >
        <div className='  flex flex-col md:flex-row justify-between items-center gap-12'>

        
        <div className=' md:w1/2'>
            <h2 className=' text-4xl font-bold mb-6 leading-snug'>Top Books of Famous Authors in 100+ Categories!</h2>
            <Link to="/shop" className=' mt-8 block'>
          <button className=' bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore Now</button>
          </Link>

        </div>
        <div>
            <img src={bookPic} className=' w-96' alt="" />
        </div>
        </div>
    </div>
  )
}

export default PromoBanner