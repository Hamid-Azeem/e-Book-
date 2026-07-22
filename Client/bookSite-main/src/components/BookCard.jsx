import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BookCard = ({ Books, headline }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
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
    <div className='my-24 px-6 lg:px-24 max-w-[1400px] mx-auto' ref={containerRef}>
      <h2 className='text-3xl md:text-4xl text-center font-semibold text-slate-800 mb-12 tracking-normal'>
        {headline}
      </h2>
      <div className="mt-12 px-2">
        <Swiper
          slidesPerView={2}
          spaceBetween={16}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full py-8"
        >
          {Books.map((book, index) => {
            return (
              <SwiperSlide key={index} className='mb-14 group'>
                <Link to={`/books/${book._id}`} className="block h-full">
                  <div className='relative flex flex-col h-full bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 hover:-translate-y-2 transition-all duration-300'>

                    {/* Book Cover */}
                    <div className='overflow-hidden rounded-xl aspect-[2/3] bg-slate-50 relative'>
                      <img
                        className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform ease-out duration-500'
                        src={book.imageUrl}
                        alt={book.title}
                        onError={(e) => { e.target.src = '/assets/banner-books/book1.png' }}
                      />
                      {/* Interactive overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="text-white text-sm font-semibold px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full">
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Book Details */}
                    <div className='mt-5 flex-grow flex flex-col'>
                      <h3 className='text-base font-bold text-slate-900 line-clamp-1 mb-1'>
                        {book.title}
                      </h3>
                      <p className='text-sm font-medium text-slate-500 line-clamp-1'>
                        {book.authorName}
                      </p>

                      {book.category && (
                        <div className="mt-auto pt-3">
                          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                            {book.category}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default BookCard;