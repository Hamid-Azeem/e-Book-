import React, { useEffect, useState } from 'react';
import { Pagination } from 'flowbite-react';
import LoadingIndicator from './Loading';
import { useNavigate, Link } from 'react-router-dom';
import items from './Categories';

function Shop() {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const query = new URLSearchParams(location.search).get('query') || '';
  const category = new URLSearchParams(location.search).get('category') || '';
  const navigate = useNavigate();
  
  const [books, setBooks] = useState([]);
  const [originalBooks, setoriginalBooks] = useState([]);
  
  // loading 
  const [loading, setLoading] = useState(false);

  // category search and selection 
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownBookOpen, setDropdownBookOpen] = useState(true);

  const filteredItems = items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setLoading(true);

    fetch(`${api}/books`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch books');
        return res.json();
      })
      .then((data) => {
        console.log('Books fetched:', data.length);
        setBooks(data);
        setSearchBook(query || '');
        setSelectedItem(category || '');
        setoriginalBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        alert('Error loading books: ' + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [searchBook, setSearchBook] = useState('');

  // use debouncing to limit too many requests to api
  const [debouncedSearch, setDebouncedSearch] = useState(searchBook);
  const [result, setResult] = useState([]);

  const fetchResult = (value) => {
    fetch(`${api}/books`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch books');
        return res.json();
      })
      .then((data) => {
        let res = data.filter(
          (item) => {
            if (selectedItem) {
              if (item.category === selectedItem)
                return value && item && item.title && item.title.toLowerCase().includes(value.toLowerCase());
            } else {
              return value && item && item.title && item.title.toLowerCase().includes(value.toLowerCase())
            }
          })
        setResult(res);
      })
      .catch((error) => {
        console.error('Error searching books:', error);
        setResult([]);
      });
  }

  const handleChange = (value) => {
    setDropdownBookOpen(true);
    setBooks(originalBooks);
    setSearchBook(value);
  };

  // debounce searchBook into debouncedSearch
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchBook), 500);
    return () => clearTimeout(t);
  }, [searchBook]);


  const handleItemSelect = (e) => {
    setSearchBook(e.title);
    setDropdownBookOpen(false)
  }

  const handleItemClick = (item) => {
    // set category and close dropdown
    setSelectedItem(item);
    setDropdownOpen(false);
    setSearchQuery('');
    // if an item is selected, filter the displayed books immediately
    if (item && item.length > 0) {
      const filtered = originalBooks.filter((b) => b.category === item);
      setBooks(filtered);
    } else {
      setBooks(originalBooks);
    }
  }

  useEffect(() => {
    fetchResult(debouncedSearch);
  }, [debouncedSearch]);


  // showing results on form submit search 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }

  const handleSearch = () => {
    const data = books.filter((item) => {
      if (selectedItem) {
        if (item.category === selectedItem)
          return item && item.title && item.title.toLowerCase().includes(searchBook.toLowerCase());
      } else {
        return item && item.title && item.title.toLowerCase().includes(searchBook.toLowerCase());

      }
    })
    setBooks(data);

    if (searchBook.length !== 0 && !selectedItem) {
      navigate(`?query=${searchBook}`);
    } else if (searchBook.length !== 0 && selectedItem) {
      navigate(`?query=${searchBook}&category=${selectedItem}`);
    }
  }

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const booksPerPage = 8;
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  let booksToDisplay;

  booksToDisplay = books.slice(startIndex, endIndex);

  return (
    <div className='min-h-screen bg-gray-50/50 mt-20 pb-20'>
      {/* Header Section */}
      <div className='max-w-7xl mx-auto px-4 lg:px-24 pt-12'>
        <div className='flex flex-col md:flex-row items-end justify-between mb-10 gap-4'>
          <div>
            <h2 className='text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight'>
              Discover Books
            </h2>
            <p className='mt-2 text-gray-500 text-lg'>Explore our collection of <span className='font-semibold text-blue-600'>{books.length}</span> titles</p>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className='relative z-30 mb-16'>
          <form className='flex justify-center w-full' onSubmit={handleFormSubmit}>
            <div className="flex flex-col md:flex-row w-full lg:w-[800px] bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-2 border border-gray-100 relative">
              
              {/* Category Button */}
              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="w-full md:w-48 h-12 flex items-center justify-between px-4 text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                >
                  <span className="truncate">{selectedItem || 'All Categories'}</span>
                  <svg className={`w-3 h-3 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {/* Category Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute top-14 left-0 z-50 bg-white divide-y divide-gray-100 rounded-xl shadow-2xl w-full md:w-64 border border-gray-100 animate-fade-in-down">
                    <div className="p-2">
                      <input
                        type="search"
                        className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Filter categories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()} // Prevent closing on click
                      />
                    </div>
                    <ul className="py-2 text-sm text-gray-700 max-h-60 overflow-y-auto custom-scrollbar">
                      {filteredItems.map((item, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            className="w-full text-left px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={() => handleItemClick(item)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                      {filteredItems.length === 0 && <li className="px-4 py-2 text-gray-400">No categories found</li>}
                    </ul>
                  </div>
                )}
              </div>

              {/* Search Input */}
              <div className="relative flex-grow mt-2 md:mt-0 md:ml-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full h-12 pl-10 pr-12 text-gray-900 bg-white md:bg-transparent border-0 md:border-l border-gray-200 focus:ring-0 focus:border-transparent placeholder-gray-400"
                  placeholder="Search by book title..."
                  required
                  onChange={(e) => {
                    handleChange(e.target.value)
                    setSearchBook(e.target.value)
                  }}
                  value={searchBook}
                />
                <button
                  type="submit"
                  onClick={(e) => handleFormSubmit(e)}
                  className="absolute right-1 top-1 bottom-1 px-5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                >
                  Search
                </button>
              </div>

              {/* Search Suggestions Dropdown */}
              {result.length > 0 && isDropdownBookOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-40">
                  <ul className="divide-y divide-gray-100">
                    {result.map((item, index) => (
                      <li key={index}>
                        <button
                          type="button"
                          className="w-full text-left px-5 py-3.5 hover:bg-gray-50 flex items-center justify-between group transition-colors"
                          onClick={() => handleItemSelect(item)}
                        >
                          <span className="font-medium text-gray-700 group-hover:text-blue-600">{item.title}</span>
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{item.category}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Results Section */}
        {loading ? (
          <div className='flex justify-center items-center h-64'>
            <LoadingIndicator />
          </div>
        ) : booksToDisplay.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-[50vh] text-center'>
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">No results found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
          </div>
        ) : (
          <div className='grid gap-8 mb-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {[...booksToDisplay].reverse().map(book => (
              <Link to={`/books/${book._id}`} key={book._id} className="group h-full">
                <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.target.src = '/assets/banner-books/book1.png' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  </div>

                  {/* Content */}
                  <div className='flex-1 flex flex-col p-5'>
                    <div className="mb-auto">
                      {book.category && (
                         <span className="inline-block px-2.5 py-0.5 mb-2 text-xs font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
                           {book.category}
                         </span>
                      )}
                      <h5 className="text-xl font-bold tracking-tight text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {book.title}
                      </h5>
                      <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {book.bookDescription ? book.bookDescription : "No description available."}
                      </p>
                    </div>

                    <button className="mt-5 w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-blue-600 bg-white border border-blue-200 rounded-xl hover:bg-blue-600 hover:text-white hover:border-transparent focus:ring-4 focus:outline-none focus:ring-blue-100 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                      View Details
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </button>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center pb-12">
          <Pagination
            layout="pagination"
            currentPage={currentPage}
            totalPages={Math.ceil(books.length / booksPerPage)}
            onPageChange={onPageChange}
            showIcons
            className="flex items-center space-x-2"
          />
        </div>
      </div>
    </div>
  )
}

export default Shop