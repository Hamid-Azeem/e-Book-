import React, { useEffect, useState } from 'react'
import BookCard from './BookCard';
import book1 from '../assets/banner-books/book1.png';
import book2 from '../assets/banner-books/book2.png';
import book3 from '../assets/banner-books/book3.png';
import book4 from '../assets/banner-books/book4.png';
import book5 from '../assets/banner-books/book5.png';

const BestSellBooks = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Banner books with their asset images
  const bannerBooks = [
    {
      _id: 'banner-1',
      title: "Book One",
      authorName: "Author One",
      imageUrl: book1,
      category: "Premium",
      bookDescription: "Premium book from collection"
    },
    {
      _id: 'banner-2',
      title: "Book Two",
      authorName: "Author Two",
      imageUrl: book2,
      category: "Premium",
      bookDescription: "Premium book from collection"
    },
    {
      _id: 'banner-3',
      title: "Book Three",
      authorName: "Author Three",
      imageUrl: book3,
      category: "Premium",
      bookDescription: "Premium book from collection"
    },
    {
      _id: 'banner-4',
      title: "Book Four",
      authorName: "Author Four",
      imageUrl: book4,
      category: "Premium",
      bookDescription: "Premium book from collection"
    },
    {
      _id: 'banner-5',
      title: "Book Five",
      authorName: "Author Five",
      imageUrl: book5,
      category: "Premium",
      bookDescription: "Premium book from collection"
    }
  ];

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
        setBooks(allBooks.slice(0, 7)); // Show 5 banner + 2 from DB
        setError('');
      })
      .catch((err) => {
        console.error('Error fetching books:', err);
        // If DB fails, still show banner books
        setBooks(bannerBooks);
        setError('');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='text-center py-10'>Loading best sellers...</div>;
  }

  if (books.length === 0) {
    return <div className='text-center py-10'>No books available</div>;
  }

  return (
    <BookCard Books={books} headline="Best Selling Books"/>
  )
}

export default BestSellBooks