import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:9000/api/users/login', {
        email,
        password,
      });
      console.log('Login success:', response.data);
      localStorage.setItem('authToken', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Server error');
    } finally {
      setLoading(false);
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
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          </div>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

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

            <div>
              <label className="block text-base font-medium text-gray-900">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="block w-full p-4 mt-2 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
              />
             
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-4 text-base font-semibold text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </form>

         
          <p className="mt-6 text-center text-base text-gray-600">
            Don’t have an account?{' '}
            <a
              href="/register"
              className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
            >
              Create account from her..!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
