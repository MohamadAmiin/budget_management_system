import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className=""
          >
          <h1 className="text-3xl font-extrabold text-white">
           Budget App
           </h1>
          </Link>
            
        </div>

        {/* Links Section (Team tab and Register button) */}
        <div className="space-x-10">
          {/* Smooth scroll to #team */}
          <a
            href="#team" // Use href instead of Link for smooth scrolling
            className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            Team
          </a>
          <Link
            to="/register"
            className="text-white bg-blue-700 hover:bg-blue-800 py-2 px-6 rounded-md text-lg font-semibold transition-colors duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
