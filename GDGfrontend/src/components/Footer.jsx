import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0A1128] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About FinVerse</h2>
          <p className="text-gray-400">Your AI-powered financial assistant, helping you make smart investment decisions and improve financial literacy.</p>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Features</h2>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Conversational AI</a></li>
            <li><a href="#" className="hover:text-blue-500">Investment Guidance</a></li>
            <li><a href="#" className="hover:text-blue-500">Financial Literacy</a></li>
            <li><a href="#" className="hover:text-blue-500">Secure & Trustworthy</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-12">
        <p>© {new Date().getFullYear()} FinAI Advisor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
