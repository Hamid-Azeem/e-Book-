import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import book1 from '../assets/banner-books/book1.png';
import book2 from '../assets/banner-books/book2.png';
import book3 from '../assets/banner-books/book3.png';
import book4 from '../assets/banner-books/book4.png';
import book5 from '../assets/banner-books/book5.png';

const BannerCard = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const bannerBooks = [
    { id: 1, image: book1 },
    { id: 2, image: book2 },
    { id: 3, image: book3 },
    { id: 4, image: book4 },
    { id: 5, image: book5 }
  ];

  // Store variables so they are accessible in hover events
  // Use percentages so GSAP scales the fan based on the card's width dynamically per device
  const angles = [-30, -15, 0, 15, 30];
  const xOffsets = ["-75%", "-35%", "0%", "35%", "75%"];
  const yOffsets = ["15%", "5%", "0%", "5%", "15%"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start all cards perfectly stacked in the middle and slightly lower
      gsap.set(cardsRef.current, {
        x: "0%",
        y: "40%",
        rotation: 0,
        scale: 0.6,
        opacity: 0,
      });

      // Animate them fanning out
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          x: xOffsets[i],
          y: yOffsets[i],
          rotation: angles[i],
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "expo.out",
          delay: 0.1 + (i * 0.08),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(cardsRef.current[index], {
      y: "-15%",
      scale: 1.1,
      rotation: 0,
      zIndex: 50,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardsRef.current[index], {
      y: yOffsets[index],
      scale: 1,
      rotation: angles[index],
      zIndex: index + 10,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className='relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] h-[260px] sm:h-[320px] md:h-[400px] flex justify-center items-center perspective-1000 mx-auto'
    >
      {bannerBooks.map((book, index) => (
        <div
          key={book.id}
          ref={(el) => (cardsRef.current[index] = el)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className='absolute w-[120px] h-[180px] sm:w-[150px] sm:h-[225px] md:w-[200px] md:h-[300px] rounded-xl shadow-2xl cursor-pointer bg-white overflow-hidden border border-slate-100 transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
          style={{ zIndex: index + 10, transformOrigin: 'bottom center' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
          <img
            src={book.image}
            alt={`Book ${book.id}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default BannerCard;