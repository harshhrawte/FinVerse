
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircleIcon } from '@heroicons/react/24/solid';

const FinVerseLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" className="h-20 w-64">
    {/* Background circle with gradient */}
    <circle cx="45" cy="50" r="40" fill="url(#blue-gradient)" />
    
    {/* Graph/chart lines representing finance */}
    <path d="M20 60 L35 50 L50 65 L65 40 L80 55" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* AI circuit pattern overlay */}
    <path d="M30 35 L40 35 L40 45 L50 45 L50 35 L60 35" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.7" />
    <path d="M30 65 L40 65 L40 55 L50 55 L50 65 L60 65" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.7" />
    <circle cx="30" cy="35" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="40" cy="35" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="40" cy="45" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="50" cy="45" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="50" cy="35" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="60" cy="35" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="30" cy="65" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="40" cy="65" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="40" cy="55" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="50" cy="55" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="50" cy="65" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="60" cy="65" r="2" fill="#ffffff" opacity="0.8" />
    
    {/* Text part of the logo */}
    <text x="95" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#4285f4">Fin</text>
    <text x="150" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#8a4bff">Verse</text>
    <text x="95" y="65" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff">AI-Powered Financial Guidance</text>
    
    {/* Gradient definition */}
    <defs>
      <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285f4" />
        <stop offset="100%" stopColor="#8a4bff" />
      </linearGradient>
    </defs>
  </svg>
);

const Header = ({ onTestimonialsClick }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate(`/profile/${userId}`);
  };

  const handleTestimonialsClick = () => {
    // If on homepage, scroll to testimonials
    if (window.location.pathname === '/') {
      onTestimonialsClick();
    } else {
      // Navigate to homepage and then scroll to testimonials
      navigate('/', { state: { scrollToTestimonials: true } });
    }
  };

  return (
    <header className="w-full bg-[#0A1128] shadow-md py-2">
      <nav className="container mx-auto px-4 lg:px-16 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <FinVerseLogo />
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition duration-200">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition duration-200">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition duration-200">Contact</Link>
          <button 
            onClick={handleTestimonialsClick} 
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Testimonials
          </button>
          
          {token ? (
            <div className="flex items-center space-x-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button onClick={handleProfileClick} className="text-white hover:text-blue-400 transition">
                <UserCircleIcon className="w-8 h-8" />
              </button>
            </div>
          ) : (
            <>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={handleSignupClick}
              >
                Sign Up
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;