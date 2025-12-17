import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import avatorImg from '/src/assets/profile.jpg';
// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className=' my-12 px-4 lg:px-24'>
        <h2 className=' text-5xl font-bold text-center mb-6'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>

        
        <SwiperSlide className=' shadow-xl bg-white py-8 px-4 md:mx-5 md:mt-5
         rounded-lg border mb-20'>
            <div className=' space-y-6'>
              <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, distinctio asperiores magni quo ab mollitia!</p>
                <Avatar img={avatorImg} alt="avatar of Jese" rounded className=' w-10 mb-4'/>
                <h5 className=' text-lg font-medium'>Mark Ping</h5>
                <p className=' text-base'>CEO, Mark Tech ltd</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-xl bg-white py-8 px-4 md:m-5
         rounded-lg border'>
            <div className=' space-y-6'>
              <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, distinctio asperiores magni quo ab mollitia!</p>
                <Avatar img={avatorImg} alt="avatar of Jese" rounded className=' w-10 mb-4'/>
                <h5 className=' text-lg font-medium'>Mark Ping</h5>
                <p className=' text-base'>CEO, Mark Tech ltd</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-xl bg-white py-8 px-4 md:m-5
         rounded-lg border'>
            <div className=' space-y-6'>
              <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, distinctio asperiores magni quo ab mollitia!</p>
                <Avatar img={avatorImg} alt="avatar of Jese" rounded className=' w-10 mb-4'/>
                <h5 className=' text-lg font-medium'>Mark Ping</h5>
                <p className=' text-base'>CEO, Mark Tech ltd</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-xl bg-white py-8 px-4 md:m-5
         rounded-lg border'>
            <div className=' space-y-6'>
              <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, distinctio asperiores magni quo ab mollitia!</p>
                <Avatar img={avatorImg} alt="avatar of Jese" rounded className=' w-10 mb-4'/>
                <h5 className=' text-lg font-medium'>Mark Ping</h5>
                <p className=' text-base'>CEO, Mark Tech ltd</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-xl bg-white py-8 px-4 md:m-5
         rounded-lg border'>
            <div className=' space-y-6'>
              <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, distinctio asperiores magni quo ab mollitia!</p>
                <Avatar img={avatorImg} alt="avatar of Jese" rounded className=' w-10 mb-4'/>
                <h5 className=' text-lg font-medium'>Mark Ping</h5>
                <p className=' text-base'>CEO, Mark Tech ltd</p>
              </div>
            </div>
        </SwiperSlide>
        </div>
      </Swiper>
        </div>
    </div>

    
  )
}

export default Review