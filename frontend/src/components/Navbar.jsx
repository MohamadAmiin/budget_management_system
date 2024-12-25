import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_components.scss';  // Import the SCSS file

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="logo">
          <Link to="/dashboard">Budget Management</Link>
        </div>

        {/* Navbar Tabs */}
        <div className="nav-links">
          <Link to="/dashboard" className="btn">Dashboard</Link>
          <Link to="/budget" className="btn">Budget</Link>
          <Link to="/create-budget" className="btn">Create Budget</Link>
          <Link to="/expenses" className="btn">Expenses</Link>
          <Link to="/reports" className="btn">Reports</Link>
        </div>

        {/* Right side: Notification and User Profile */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-blue-500">
              <i className="fas fa-bell text-xl"></i>
            </button>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </div>
          
          {/* Profile Picture and Dropdown Menu */}
          <div className="relative">
            <div 
              className="profile-circle"
              onMouseEnter={toggleProfileMenu} 
              onMouseLeave={toggleProfileMenu}
            >
              <img src="/path/to/user-avatar.jpg" alt="User" className="profile-img" />
            </div>

            {/* Dropdown Menu */}
            {isProfileMenuOpen && (
              <div
                className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-3 w-48"
                onMouseEnter={toggleProfileMenu} // Keep open when hovering over the dropdown
                onMouseLeave={toggleProfileMenu} // Close when leaving both profile and dropdown
              >
                <Link to="/profile" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded">Profile</Link>
                <Link to="/settings" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded">Settings</Link>
                <button onClick={() => console.log("Logout logic here")} className="block text-red-500 hover:bg-gray-100 px-4 py-2 rounded w-full text-left">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-nav flex items-center" onClick={toggleMenu}>
          <button className="text-blue-600">
            <i className={`fas ${isMobile ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav bg-white shadow-md absolute top-16 left-0 w-full transition-transform duration-300 ${isMobile ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/dashboard" className="btn">Dashboard</Link>
          <Link to="/budget" className="btn">Budget</Link>
          <Link to="/create-budget" className="btn">Create Budget</Link>
          <Link to="/expenses" className="btn">Expenses</Link>
          <Link to="/reports" className="btn">Reports</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
