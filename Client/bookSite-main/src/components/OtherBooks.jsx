import React,{useState,useEffect} from 'react'
import BookCard from './BookCard';

const OtherBooks = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch(`${api}/books`)
          .then((res) => {
            if (!res.ok) throw new Error('Failed to fetch books');
            return res.json();
          })
          .then((data) => {
            setBooks(data.slice(2, 12));
            setError('');
          })
          .catch((err) => {
            console.error('Error fetching books:', err);
            setError('Failed to load books');
            setBooks([]);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);

  return (
    <BookCard Books={books} headline="Other Books"/>
  )
}

export default OtherBooks