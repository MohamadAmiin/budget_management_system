import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/PagesNavbar'; // Import the Navbar component
import Layouts from './components/Layouts'; // Import the Layouts component
import Home from './pages/Home'; // Import your Home component
import Login from './pages/Login'; // Import your Login component
import Register from './pages/Register'; // Import your Register component
import ResetPassword from './pages/ResetPasswordPage'; // Import your ResetPassword component
import NotFound from './pages/NotFound'; // Import your NotFound component
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute component
import 'antd/dist/antd.css';

// Create a component to check if the Navbar should be displayed
const AppWithNavbar = () => {
  const location = useLocation();

  // List of paths where the navbar should appear
  const pathsWithNavbar = ['/', '/login', '/register', '/resetpassword'];

  return (
    <>
      {/* Conditionally render Navbar based on the current path */}
      {pathsWithNavbar.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        
        {/* Protected route for dashboard */}
        <Route 
          path="/dashboard/*" 
          element={
            // <PrivateRoute>
              <Layouts />
            // </PrivateRoute>
          } 
        />

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWithNavbar />
    </Router>
  );
};

export default App;
