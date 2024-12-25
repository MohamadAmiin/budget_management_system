import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-500 mb-6">404 - Page Not Found</h1>
        <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-md">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
