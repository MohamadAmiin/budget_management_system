import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/reset-password', { email });
      setMessage(response.data.message); // Show success message after sending email
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Server error');
    }
  };

  return (
    <section className="relative h-screen bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg"
          alt="Background"
        />
      </div>
      <div className="absolute inset-0 bg-gray-900/50"></div>

      <div className="relative flex items-center justify-center h-full">
        <div className="max-w-lg px-6 py-8 bg-white rounded-md shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Reset Password</h2>
          </div>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {message && <p className="text-green-500 text-center mt-4">{message}</p>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="block text-base font-medium text-gray-900">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
                className="block w-full p-4 mt-2 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-4 text-base font-semibold text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
            >
              Request Password Reset
            </button>
          </form>

          <div className="mt-4 text-center">
            <p>
              <a href="/login" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                Back to Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
