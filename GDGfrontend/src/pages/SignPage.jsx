

import React, { useState, useRef } from 'react';
import { ChevronRight, Lock, Mail, User, Phone, Calendar, MapPin, BookOpen, Camera } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
    gender: '',
    address: '',
    password: '',
    confirmPassword: '',
    profilePicture: null
  });

  const [passwordError, setPasswordError] = useState('');
  const [profilePreview, setProfilePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'confirmPassword' || name === 'password') {
      setPasswordError('');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image (JPEG, PNG, or JPG)');
        return;
      }

      if (file.size > maxSize) {
        alert('File size should be less than 5MB');
        return;
      }

      setFormData(prevState => ({
        ...prevState,
        profilePicture: file
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePictureClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setIsSubmitting(true);
    setErrorMessage('');
  
    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email.toLowerCase()); // Normalize email
    data.append('phoneNumber', formData.phoneNumber);
    data.append('age', formData.age);
    data.append('gender', formData.gender);
    data.append('address', formData.address);
    data.append('password', formData.password);
    data.append('confirmPassword', formData.confirmPassword);
    if (formData.profilePicture) {
      data.append('profilePicture', formData.profilePicture);
    }
  
    console.log("FormData being sent:");
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CHATBOT_API_URL}/api/v1/auth/signup`,
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      console.log('Signup successful:', response.data);
      navigate(`/verify-email?email=${encodeURIComponent(formData.email.toLowerCase())}`);
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || 'An error occurred during signup. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#1A2138] rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Create Your Account</h1>
          <p className="text-sm mt-2 text-white/80">Start your AI-powered financial journey</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Profile Picture Upload */}
          <div className="flex justify-center mb-4">
            <div 
              className="relative w-32 h-32 rounded-full bg-[#2A3347] flex items-center justify-center cursor-pointer hover:bg-[#3A4357] transition duration-300"
              onClick={handleProfilePictureClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/jpeg,image/png,image/jpg"
                className="hidden"
              />
              {profilePreview ? (
                <img 
                  src={profilePreview} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center text-gray-400">
                  <Camera size={40} />
                  <span className="text-sm mt-2">Upload Photo</span>
                </div>
              )}
            </div>
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#2A3347] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#2A3347] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full pl-10 pr-4 py-3 bg-[#2A3347] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="tel" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full pl-10 pr-4 py-3 bg-[#2A3347] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Age and Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="number" 
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                min="18"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#2A3347] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-[#2A3347] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" className="text-gray-400">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full pl-10 pr-4 py-3 bg-[#2A3347] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         
          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create Password"
              required
              className="w-full pl-10 pr-4 py-3 bg-[#2A3347] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className={`w-full pl-10 pr-4 py-3 bg-[#2A3347] border ${
                passwordError ? 'border-red-500' : 'border-gray-700'
              } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'} <ChevronRight className="ml-2" size={20} />
          </button>
        </form>

        {/* Login Redirect */}
        <div className="text-center pb-6">
          <p className="text-sm text-gray-400">
            Already have an account? 
            <a href="/login" className="text-blue-500 ml-1 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;