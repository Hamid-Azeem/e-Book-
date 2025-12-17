import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import './BannerCard.css';
// import './styles.css';
// import '../App.css';
// import required modules

import { EffectCards } from 'swiper/modules';
import book1 from '../assets/banner-books/book1.png';
import book2 from '../assets/banner-books/book2.png';
import book3 from '../assets/banner-books/book3.png';
import book4 from '../assets/banner-books/book4.png';
import book5 from '../assets/banner-books/book5.png';


const BannerCard = () => {
  const bannerBooks = [
    { id: 1, image: book1 },
    { id: 2, image: book2 },
    { id: 3, image: book3 },
    { id: 4, image: book4 },
    { id: 5, image: book5 }
  ];

  return (
    <div className='banner mr-10'>
         <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
      {
        bannerBooks.map((book,index)=>{
         return <SwiperSlide key={index} style={{backgroundImage:`url(${book.image})`, backgroundSize:"cover"}}></SwiperSlide>
        })
      }
      </Swiper>
    </div>
  )
}

export default BannerCard