import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Contact form submission logic
    console.log('Contact form submitted', { name, email, phoneNumber, message });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1E1E1E] rounded-xl border border-gray-700 shadow-lg">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center rounded-t-xl">
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <p className="text-white/80 mt-2">We'd love to hear from you</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <input 
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#2C2C2C] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <input 
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#2C2C2C] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <input 
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 bg-[#2C2C2C] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <textarea 
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              className="w-full px-4 py-3 bg-[#2C2C2C] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 mt-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
          
          <div className="text-center mt-4 text-sm">
            <span className="text-white/80">
              Need immediate assistance? 
            </span>
            <a href="#" className="ml-1 text-blue-400 hover:underline">
              Call Support
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;