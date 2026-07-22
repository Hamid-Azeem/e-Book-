import { Link } from 'react-router-dom';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaBookOpen } from 'react-icons/fa';

function MyFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 font-poppins pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <FaBookOpen className="w-7 h-7 text-blue-500 group-hover:text-blue-400 transition-colors" />
              <span className="font-serif text-2xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                E-Book Paradise
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Democratizing access to knowledge, one book at a time. Discover millions of free eBooks across all categories, beautifully organized for your reading pleasure.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <BsFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <BsInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <BsTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <BsGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Dribbble</span>
                <BsDribbble className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-white font-semibold tracking-wide mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Library</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wide mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Terms of Service</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Licensing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wide mb-6">Connect</h3>
            <ul className="space-y-4">
              <li><Link to="/admin/dashboard" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Admin Dashboard</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Help Center</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} E-Book Paradise. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-white transition-colors duration-300">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors duration-300">Terms</Link>
            <Link to="#" className="hover:text-white transition-colors duration-300">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;