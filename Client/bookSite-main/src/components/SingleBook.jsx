import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// Cleaned up SVG Icon component for better readability
const DownloadIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 15V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SingleBook = () => {
  const bookData = useLoaderData();
  const [book, setBook] = useState(bookData);
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  // Fetch book data if not available from loader
  useEffect(() => {
    if (!book || !book._id) {
      console.error('Book data not loaded');
    }
  }, [book]);

  if (!book) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className="text-xl font-medium text-gray-600 animate-pulse">Loading book details...</div>
      </div>
    );
  }

  const { _id, title, imageUrl, authorName, bookDescription, category, bookPdfUrl } = book;

  return (
    <div className='min-h-screen bg-gray-50/50 pt-28 pb-12 px-4 lg:px-24'>
      <div className='max-w-6xl mx-auto'>
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="md:flex">
            
            {/* Left Column: Image Section */}
            <div className="md:w-2/5 lg:w-1/3 bg-gray-50 p-8 lg:p-12 flex flex-col items-center justify-center relative">
               {/* Decorative background circle */}
               <div className="absolute w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
               
              <div className="relative z-10 w-full max-w-[280px] perspective-1000">
                <div className="relative aspect-[2/3] w-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    src={imageUrl} 
                    alt={title} 
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x450?text=No+Cover' }}
                  />
                  {/* Book Spine Effect (Left Border) */}
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-black/20 to-transparent rounded-l-lg"></div>
                </div>
              </div>
            </div>

            {/* Right Column: Details Section */}
            <div className="md:w-3/5 lg:w-2/3 p-8 lg:p-12 flex flex-col">
              
              {/* Header Info */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 uppercase tracking-wide">
                    {category}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600 uppercase tracking-wide">
                    Available
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
                  {title}
                </h1>
                
                <div className="flex items-center text-gray-600 text-lg">
                  <span className="mr-2">By</span>
                  <span className="font-semibold text-gray-900 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                    {authorName}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-100 mb-6" />

              {/* Description */}
              <div className="mb-8 flex-grow">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Discription
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  {bookDescription}
                </p>
              </div>

              {/* Action Area */}
              <div className="mt-auto pt-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-medium text-gray-900">Ready to read?</p>
                    <p className="text-xs text-gray-500">Get this book instantly in PDF format.</p>
                  </div>
                  
                  <a 
                    href={bookPdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                  >
                    <span>Download PDF</span>
                    <DownloadIcon />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SingleBook