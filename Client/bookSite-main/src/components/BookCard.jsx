import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from 'react-icons/fa6';
// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const BookCard = ({Books ,headline}) => {
 
  return (
    <div>
    <div className=' my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
        <div className="mt-12">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
       
        {
            Books.map((book,index)=>{
              return  <SwiperSlide key={index} className=' mb-10'>
                <Link key={index} to={`/books/${book._id}`} className="block">
                  <div className='relative'>
                    <div className='overflow-hidden rounded-md h-48 bg-gray-100'>
                      <img className='w-full h-full object-cover hover:scale-105 transition-transform ease-in duration-150' src={book.imageUrl} alt={book.title} onError={(e)=>{e.target.src='/assets/banner-books/book1.png'}} />
                    </div>
                  </div>
                  <div className='mt-3'>
                    <div>
                      <h3 className='text-sm lg:text-base font-semibold truncate'>{book.title}</h3>
                      <p className='text-xs text-gray-500 truncate'>{book.authorName}</p>
                    </div>
                  </div>
                </Link>
                </SwiperSlide>

            })
        }
      </Swiper>
      </div>
    </div>
    </div>
  )
}

export default BookCard