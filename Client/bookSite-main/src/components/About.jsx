import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function About() {
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".anim-element", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-slate-50 font-poppins py-20 lg:py-24 overflow-x-hidden min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Visual Container - Small Image Like Before */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start anim-element">
            <div className="relative max-w-md w-full">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Library interior minimalistic" 
                className="relative z-10 object-cover w-full h-96 rounded-2xl shadow-lg border border-slate-200"
              />
              {/* Subtle decorative accent behind image */}
              <div className="absolute -bottom-6 -right-6 w-full h-96 border-4 border-blue-100 rounded-2xl -z-0"></div>
            </div>
          </div>

          {/* Simple Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center anim-element">
            <div className="mb-4">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Who We Are
              </span>
              <h1 className="mt-2 text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                About Us
              </h1>
            </div>
            
            <div className="mb-8">
              <p className="text-base leading-relaxed text-slate-600 mb-2">
                Welcome to <strong className="text-slate-800 font-semibold">E-Book Paradise</strong>, your premier destination for an extensive collection of free eBooks. We believe in the power of knowledge and the joy of reading.
                {!isExpanded && <span>..</span>}
              </p>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-base leading-relaxed text-slate-600 mb-4">
                  Our mission is to democratize access to information and foster a love for reading. We aim to break down barriers and provide a platform where individuals can explore, learn, and grow through the vast world of literature.
                </p>
                <p className="text-base leading-relaxed text-slate-600">
                  We believe that knowledge should be freely available to all, and our platform is designed to make this belief a reality across 100+ categories.
                </p>
              </div>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
                <svg className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-block whitespace-nowrap bg-blue-600 text-white font-medium px-8 py-3.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-blue-700 transition-all duration-300"
              >
                Explore Books
              </Link>
              <Link
                to="/contact"
                className="inline-block whitespace-nowrap bg-white text-slate-700 font-medium px-8 py-3.5 rounded-full shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;