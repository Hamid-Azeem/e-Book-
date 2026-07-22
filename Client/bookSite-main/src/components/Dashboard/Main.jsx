import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import categoryItems from '../Categories'

const Main = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  const [totalBooks, setTotalBooks] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCategories, setTotalCategories] = useState(categoryItems.length);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch(`${api}/books`).then(res => res.ok ? res.json() : Promise.reject('Failed to fetch books')),
      fetch(`${api}/getuser`).then(res => res.ok ? res.json() : Promise.reject('Failed to fetch users'))
    ])
      .then(([booksData, usersData]) => {
        setTotalBooks(booksData.length);
        setTotalUsers(usersData.length);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load dashboard data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-slate-800 tracking-tight">Dashboard Overview</h1>
        <p className="text-sm text-slate-500 mt-1 font-medium">Welcome back! Here is what's happening today.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 text-sm font-semibold text-red-600 bg-red-50 border border-red-100 rounded-xl" role="alert">
          {error}
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Total Books</p>
            <h3 className="text-3xl font-black text-slate-800">{loading ? '...' : totalBooks}</h3>
          </div>
          <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Total Categories</p>
            <h3 className="text-3xl font-black text-slate-800">{totalCategories}</h3>
          </div>
          <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Registered Users</p>
            <h3 className="text-3xl font-black text-slate-800">{loading ? '...' : totalUsers}</h3>
          </div>
          <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="upload" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group text-center">
            <svg className="w-8 h-8 text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            <span className="font-semibold text-slate-700 group-hover:text-blue-700">Upload New Book</span>
          </Link>
          <Link to="manage" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group text-center">
            <svg className="w-8 h-8 text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
            <span className="font-semibold text-slate-700 group-hover:text-blue-700">Manage Inventory</span>
          </Link>
          <Link to="user" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group text-center">
            <svg className="w-8 h-8 text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <span className="font-semibold text-slate-700 group-hover:text-blue-700">View Users</span>
          </Link>
          <Link to="admins" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group text-center">
            <svg className="w-8 h-8 text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <span className="font-semibold text-slate-700 group-hover:text-blue-700">Manage Admins</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Main