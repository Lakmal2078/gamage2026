import { useState } from 'react';
import type { User } from 'firebase/auth';

interface NavbarProps {
  onSignUpClick: () => void;
  isDark: boolean;
  onDarkToggle: () => void;
  user: User | null;
}

export const Navbar = ({ onSignUpClick, isDark, onDarkToggle, user }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 sticky top-0 z-50 transition-colors duration-300">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          ගමගේ Marketing
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-indigo-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-indigo-400">සේවා</a>
          <a href="#calculator" className="hover:text-indigo-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-indigo-400">කැල්කියුලේටරය</a>
          <a href="#reviews" className="hover:text-indigo-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-indigo-400">Reviews</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-indigo-400">සම්බන්ධ වන්න</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Dark Mode Toggle */}
          <button
            onClick={onDarkToggle}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all cursor-pointer text-lg"
          >
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          {/* User logged in නම් Avatar, නැත්නම් Sign Up button */}
          {user ? (
            <button
              onClick={onSignUpClick}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500 cursor-pointer hover:scale-110 transition-all"
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  {user.displayName?.charAt(0).toUpperCase() || 'U'}
                </div>
              )}
            </button>
          ) : (
            <button
              onClick={onSignUpClick}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold cursor-pointer text-sm"
            >
              Sign Up
            </button>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 text-2xl cursor-pointer"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 border-t border-gray-100 dark:border-gray-700 pt-4">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 font-medium py-2 px-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all">
            <i className="fas fa-briefcase mr-2 text-indigo-400"></i>සේවා
          </a>
          <a href="#calculator" onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 font-medium py-2 px-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all">
            <i className="fas fa-calculator mr-2 text-indigo-400"></i>කැල්කියුලේටරය
          </a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 font-medium py-2 px-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all">
            <i className="fas fa-star mr-2 text-indigo-400"></i>Reviews
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 font-medium py-2 px-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all">
            <i className="fas fa-envelope mr-2 text-indigo-400"></i>සම්බන්ධ වන්න
          </a>
        </div>
      )}
    </nav>
  );
};
