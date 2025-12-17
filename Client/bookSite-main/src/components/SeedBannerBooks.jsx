import React, { useState } from 'react';
import { Button, Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const SeedBannerBooks = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const handleSeedBooks = async () => {
    setLoading(true);
    setMessage('');
    setStatus('');

    try {
      const response = await fetch(`${api}/seed-banner-books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(`✓ ${data.message} - ${data.count} books added successfully!`);
      } else {
        setStatus('info');
        setMessage(data.message || 'Operation completed');
      }
    } catch (error) {
      setStatus('error');
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">📚 Top Selling Books</h2>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Click the button below to populate your home page slider with your 5 banner books (book1.png - book5.png).
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
            <p className="text-sm text-blue-800">
              ✨ This will display your banner book images on the home page "Best Selling Books" slider section.
            </p>
          </div>
        </div>

        {message && (
          <Alert
            color={status === 'success' ? 'success' : status === 'error' ? 'failure' : 'info'}
            icon={HiInformationCircle}
            className="mb-4"
          >
            <span>{message}</span>
          </Alert>
        )}

        <Button
          onClick={handleSeedBooks}
          disabled={loading}
          color="blue"
          className="w-full"
        >
          {loading ? 'Loading...' : 'Add Banner Books to Slider'}
        </Button>

        <div className="mt-6 p-4 bg-gray-50 rounded text-sm text-gray-700">
          <p className="font-semibold mb-2">What happens:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>5 books with your banner images are added</li>
            <li>Books are marked as "Top Selling"</li>
            <li>They appear on home page slider</li>
            <li>Images come from: /assets/banner-books/</li>
            <li>Check "Best Selling Books" on home page</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded text-sm text-green-700 border border-green-200">
          <p className="font-semibold mb-2">✓ Your Banner Books Found:</p>
          <ul className="space-y-1">
            <li>📖 book1.png</li>
            <li>📖 book2.png</li>
            <li>📖 book3.png</li>
            <li>📖 book4.png</li>
            <li>📖 book5.png</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeedBannerBooks;
