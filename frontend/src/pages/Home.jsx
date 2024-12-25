import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Team from '../components/Team'; // Import the Team component

// Import images from the assets folder
import heroImage1 from '../assets/pic1.jpg';
import heroImage2 from '../assets/pic2.jpg';

const Home = () => {
  const images = [heroImage1, heroImage2]; // Add the images to the array

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [images.length]);

  return (
    <div className="relative">
      {/* Hero Section with Dynamic Background Image */}
      <div
        className="relative h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }} // Apply the dynamic background
      >
        <div className="absolute inset-0 bg-black opacity-20"></div> {/* Lighter overlay for brightness */}
        <div className="relative z-10 flex justify-center items-center h-full px-6">
          <div className="text-center text-gray-800 p-6 bg-white bg-opacity-70 shadow-lg rounded-lg max-w-lg w-full"> {/* Darker text for readability */}
            <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
              Welcome to the Budget Management System
            </h1>
            <p className="mb-6 text-lg text-gray-700"> {/* Darker text for better contrast */}
              Keep track of your budgets and manage expenses effectively with ease.
            </p>
            <Link
              to="/login"
              className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 py-3 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
              Login
            </Link>
            <div className="mt-6">
              <p className="text-gray-700"> {/* Darker text color for readability */}
                Don't have an account?
              </p>
              <Link to="/register" className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
                Register here
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-12 bg-gray-100">
        <Team /> {/* Render the Team component */}
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us Today and Manage Your Budget Efficiently!</h2>
          <p className="mb-8 text-lg">Start tracking your expenses and savings today to stay on top of your financial goals.</p>
          <Link
            to="/register"
            className="text-white bg-blue-700 hover:bg-blue-800 py-3 px-6 rounded-md text-lg transition duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
