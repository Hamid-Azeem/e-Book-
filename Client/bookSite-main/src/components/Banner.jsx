import React,{useState} from 'react'
import BannerCard from './BannerCard'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = () => {
      // Navigate to the shop page with the search query as a parameter
      
      navigate(`/shop/?query=${searchQuery}`);
    };

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className=' space-y-8 md:w-1/2 h-full'>
                <h2 className='text-5xl font-bold text-black leading-snug'>Find and Download Books
                <span className=' text-blue-700'> with Just One Click!</span></h2>
                
                <p className='md:w4/5'>Join us on this literary adventure, where the doors to exploration are wide open, and the pleasure of discovering captivating stories is just a click away. Welcome to a space where everyone can indulge in the world of books, expanding their horizons with each page turned.
                
                </p>
                <div className=' text-center md:text-left'>
                    <input value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} type="search" name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none' />
                    <button onClick={handleSearch} className='bg-blue bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner