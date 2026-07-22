import React, { useEffect, useState } from 'react'
import BookCard from './BookCard';
import { bannerBooks } from '../data/bannerBooks';

const BestSellBooks = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${api}/books`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch books');
        return res.json();
      })
      .then((data) => {
        // Combine banner books (first 5) with database books (rest)
        const allBooks = [...bannerBooks, ...data];
        setBooks(allBooks.slice(0, 10)); // Show up to 10 books total
      })
      .catch((err) => {
        console.error('Error fetching books:', err);
        // Fallback to banner books if API fails
        setBooks(bannerBooks);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [api]);

  if (loading) {
    return <div className='text-center py-20 text-slate-500'>Loading best sellers...</div>;
  }

  if (books.length === 0) {
    return (
      <div className='text-center py-24'>
        <h2 className='text-3xl font-semibold text-slate-800 mb-4'>Best Selling Books</h2>
        <p className='text-slate-500'>No books available.</p>
      </div>
    );
  }

  return (
    <BookCard Books={books} headline="Best Selling Books"/>
  )
}

export default BestSellBooks;