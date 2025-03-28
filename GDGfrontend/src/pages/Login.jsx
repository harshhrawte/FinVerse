


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/auth/login',
        { email: email.toLowerCase(), password }
      );
      
      console.log('Login successful:', response.data);
      toast.success('Login successful!');

      // Store token (e.g., in localStorage) and redirect
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      setTimeout(() => {
        navigate('/'); // Adjust to your protected route
      }, 2000);
    } catch (error) {
      console.error('Login error:', error.response?.data);
      const errorMsg = error.response?.data?.message || 'Login failed. Please try again.';
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1E1E1E] rounded-xl border border-gray-700 shadow-lg">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center rounded-t-xl">
          <h2 className="text-2xl font-bold text-white">Login to Your Account</h2>
          <p className="text-white/80 mt-2">Access your AI-powered financial journey</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <input 
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 bg-[#2C2C2C] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
          </div>
          
          <div>
            <input 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 bg-[#2C2C2C] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember"
                disabled={isLoading}
                className="mr-2 rounded bg-[#2C2C2C] border-gray-600 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
              />
              <label htmlFor="remember" className="text-white/80">
                Remember me
              </label>
            </div>
            <a href="/forgot-password" className="text-blue-400 hover:underline">
              Forgot Password?
            </a>
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-3 mt-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          
          <div className="text-center mt-4 text-sm">
            <span className="text-white/80">
              Don't have an account? 
            </span>
            <a href="/signup" className="ml-1 text-blue-400 hover:underline">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;