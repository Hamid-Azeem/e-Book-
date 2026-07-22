import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import book1 from '../assets/banner-books/book1.png';
import book2 from '../assets/banner-books/book2.png';
import book3 from '../assets/banner-books/book3.png';
import book4 from '../assets/banner-books/book4.png';
import book5 from '../assets/banner-books/book5.png';

gsap.registerPlugin(ScrollTrigger);

const bannerBooks = [
  { id: 1, image: book1 }, // The Great Gatsby (Bottom of stack / Left-most fanned)
  { id: 2, image: book2 }, // Pride and Prejudice
  { id: 3, image: book3 }, // Frankenstein
  { id: 4, image: book4 }, // Moby Dick
  { id: 5, image: book5 }  // Alice in Wonderland (Top of stack / Right-most fanned)
];

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollComplete, setScrollComplete] = useState(false);
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const textContainerRef = useRef(null);
  const fanCardsRef = useRef([]);

  const handleSearch = () => {
    navigate(`/shop/?query=${searchQuery}`);
  };

  useEffect(() => {
    const cards = fanCardsRef.current.filter(Boolean);
    const text = textContainerRef.current;
    const wrapper = cardsWrapperRef.current;

    if (!cards.length || !text || !wrapper) return;

    const mm = gsap.matchMedia();

    // ── DESKTOP ANIMATION (>= 768px) ──
    mm.add("(min-width: 768px)", () => {
      const angles = [-26, -13, 0, 13, 26];
      const xOffsets = [-200, -100, 0, 100, 200];
      const yOffsets = [25, 8, 0, 8, 25];

      // Initial Intro Fan-out in center
      gsap.set(cards, { x: 0, y: 40, rotation: 0, scale: 0.6, opacity: 0 });
      gsap.set(text, { opacity: 0, x: -60 });
      gsap.set(wrapper, { x: 0, y: 0 });

      // Run entrance animation for fanning out
      let completed = 0;
      cards.forEach((card, i) => {
        gsap.to(card, {
          x: xOffsets[i],
          y: yOffsets[i],
          rotation: angles[i],
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "expo.out",
          delay: 0.2 + (i * 0.08),
          onComplete: () => {
            completed++;
            // Initialize ScrollTrigger only when all cards have finished fanning out
            if (completed === cards.length) {
              initScrollTrigger();
            }
          }
        });
      });

      const initScrollTrigger = () => {
        // Scroll Animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=220%",
            scrub: 1.2,
            pin: true,
            onUpdate: (self) => {
              setScrollComplete(self.progress > 0.9);
            }
          }
        });

        // Phase A: Collapse card-by-card (Staggered Cascade with explicit fromTo values)
        cards.forEach((card, i) => {
          tl.fromTo(card, 
            {
              x: xOffsets[i],
              y: yOffsets[i],
              rotation: angles[i],
              scale: 1,
              opacity: 1
            },
            {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "power2.inOut"
            }, 
            i * 0.1
          );
        });

        // Phase B: Slide Right, Fade/Slide in Text on Left
        tl.to(wrapper, {
          x: "20vw",
          duration: 0.6,
          ease: "power3.inOut"
        }, 0.5);

        tl.to(text, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.inOut"
        }, 0.5);

        // Phase C: Swap to Swiper
        tl.to('.gsap-fan-container', { opacity: 0, duration: 0.1 }, 1.0);
        tl.to('.swiper-deck-container', { opacity: 1, duration: 0.1 }, 1.0);
      };
    });

    // ── MOBILE & TABLET (< 768px) ── (No deck/scroll morph, stays fanned out naturally)
    mm.add("(max-width: 767px)", () => {
      const angles = [-15, -7, 0, 7, 15];
      const xOffsets = [-60, -30, 0, 30, 60];
      const yOffsets = [15, 5, 0, 5, 15];

      // Initial Intro Fan-out
      gsap.set(cards, { x: 0, y: 20, rotation: 0, scale: 0.5, opacity: 0 });
      gsap.set(text, { opacity: 0, y: 30 });

      cards.forEach((card, i) => {
        gsap.to(card, {
          x: xOffsets[i],
          y: yOffsets[i],
          rotation: angles[i],
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.2 + (i * 0.06)
        });
      });

      gsap.to(text, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.6
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className='relative w-full h-screen bg-white overflow-hidden select-none'
    >
      <div className='relative md:sticky md:top-0 min-h-screen md:h-screen w-full flex flex-col md:flex-row items-center justify-center py-16 md:py-0 overflow-hidden'>
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[90vw] max-w-[600px] bg-gradient-to-tr from-blue-50 via-purple-50 to-teal-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

        {/* Cards Wrapper (Fanned out, sits statically on mobile with top margin to avoid navbar) */}
        <div
          ref={cardsWrapperRef}
          className='relative md:absolute w-[120px] h-[180px] sm:w-[180px] sm:h-[270px] md:w-[240px] md:h-[360px] z-20 flex items-center justify-center order-1 md:order-2 mt-20 md:mt-0 mb-12 md:mb-0 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2'
        >
          {/* Static Fan (GSAP Animated) */}
          <div className='gsap-fan-container absolute inset-0 pointer-events-none'>
            {bannerBooks.map((book, i) => (
              <div
                key={book.id}
                ref={(el) => (fanCardsRef.current[i] = el)}
                className='absolute inset-0 rounded-xl sm:rounded-2xl shadow-lg bg-white overflow-hidden border border-slate-100'
                style={{ zIndex: i + 10, transformOrigin: 'bottom center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-10 pointer-events-none"></div>
                <img src={book.image} alt="Book" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Swiper Deck (Interactions enabled at end of scroll on Desktop) */}
          <div
            className='swiper-deck-container absolute inset-0 opacity-0 z-30'
            style={{ pointerEvents: scrollComplete ? 'auto' : 'none' }}
          >
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-full h-full drop-shadow-2xl"
            >
              {[...bannerBooks].reverse().map((book) => (
                <SwiperSlide key={book.id} className="rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-black/30 pointer-events-none z-10"></div>
                  <img src={book.image} alt="Book cover" className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Text Content (Sits naturally below fanned cards on mobile) */}
        <div
          ref={textContainerRef}
          className="relative md:absolute z-25 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 md:left-[10vw] md:top-1/2 md:-translate-y-1/2 w-[88vw] md:w-[35vw]"
          style={{ pointerEvents: 'auto' }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight'>
            The Ultimate <br />
            <span className='text-blue-600'>Reading Experience</span>
          </h2>
          <p className='text-xs sm:text-sm md:text-base text-slate-500 font-normal mt-4 max-w-sm md:max-w-md leading-relaxed'>
            Explore millions of captivating stories. Find and download your next favourite book with just one click.
          </p>
          <div className='flex flex-col md:flex-row w-full max-w-sm items-center gap-3 pt-6 pointer-events-auto'>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="search"
              placeholder='Search books...'
              className='w-full py-2.5 px-4 rounded-full border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-700 text-xs sm:text-sm text-center md:text-left'
            />
            <button
              onClick={handleSearch}
              className='w-full max-w-[160px] md:w-auto whitespace-nowrap bg-blue-600 text-white font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-blue-700 transition-all text-xs sm:text-sm'
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;