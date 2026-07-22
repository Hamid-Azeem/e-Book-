import React from 'react';
import { Link } from 'react-router-dom';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { FaBarsStaggered } from 'react-icons/fa6';

const AdminNav = ({ toggleMenu }) => {
  const auth = useAuthUser();

  return (
    <nav className="fixed top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 lg:pl-64 transition-all duration-300">
      <div className="px-4 py-3 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 mr-3 text-slate-600 rounded-full cursor-pointer hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <FaBarsStaggered className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                Dashboard Overview
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-bold text-slate-800">{auth?.name || 'Administrator'}</span>
              <span className="text-xs font-medium text-slate-400">Admin Panel</span>
            </div>
            <Link to="/" className="text-white bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 shadow-sm hover:-translate-y-0.5 hover:shadow-md font-semibold rounded-full text-sm px-6 py-2 transition-all duration-300">
              View Site
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AdminNav