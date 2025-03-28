
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChatBubbleLeftRightIcon, 
  ChartBarIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  StarIcon 
} from '@heroicons/react/24/solid';

import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  
  // Create a ref for the testimonials section
  const testimonialsRef = useRef(null);

  const features = [
    { 
      icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-blue-500" />, 
      title: "Conversational AI", 
      description: "Ask financial questions naturally and get intelligent insights.",
      link: '/chatbot' 
    },
    { 
      icon: <ChartBarIcon className="w-10 h-10 text-green-500" />, 
      title: "Investment Guidance", 
      description: "Discover tailored investment opportunities.",
      link: '/investments' 
    },
    { 
      icon: <LightBulbIcon className="w-10 h-10 text-yellow-500" />, 
      title: "Financial Literacy", 
      description: "Understand financial concepts through interactive AI.",
      link: '/learning' 
    },
    { 
      icon: <ShieldCheckIcon className="w-10 h-10 text-purple-500" />, 
      title: "Secure & Trustworthy", 
      description: "Advanced security for your financial data.",
      link: '/security' 
    }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Tech Entrepreneur",
      quote: "This AI financial assistant has transformed how I manage my investments.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Financial Analyst",
      quote: "Impressive depth of analysis and conversational approach.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Small Business Owner",
      quote: "Financial literacy tools help me make informed decisions.",
      rating: 4
    }
  ];

  // Function to scroll to testimonials
  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest!');
    setEmail('');
  };

  const renderStars = (count) => (
    [...Array(count)].map((_, i) => (
      <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
    ))
  );

  return (
    <div className="min-h-screen bg-[#0A1128] flex flex-col overflow-hidden">
      <Header 
        onTestimonialsClick={scrollToTestimonials} 
        className="bg-blue-500 p-4 text-white" 
      />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          AI-Powered Financial Guidance
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mb-10">
          Revolutionizing financial literacy and investment decisions through AI technology.
        </p>

        <form onSubmit={handleEmailSubmit} className="w-full max-w-md flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for early access"
            required
            className="flex-grow px-4 py-3 rounded-l-lg bg-[#151F3A] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 md:px-6 py-3 rounded-r-lg hover:bg-blue-700 transition text-white"
          >
            Get Access
          </button>
        </form>

        <FeaturesSection 
          features={features} 
          navigate={navigate} 
        />
        
        <div className="w-full border-t border-gray-800 my-24"></div>
        
        {/* Add ref to the testimonials section */}
        <TestimonialSection 
          ref={testimonialsRef}
          testimonials={testimonials} 
          renderStars={renderStars} 
        />

        <div className="w-full border-t border-gray-800 my-24"></div>
      </main>

      <Footer className="bg-gray-800 text-white p-4" />
    </div>
  );
};

// Modify TestimonialSection to be a forwardRef component
const TestimonialSection = React.forwardRef(({ testimonials, renderStars }, ref) => (
  <div ref={ref} className="w-full max-w-6xl">
    <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={index} 
          testimonial={testimonial} 
          renderStars={renderStars} 
        />
      ))}
    </div>
  </div>
));


const TestimonialCard = ({ testimonial, renderStars }) => (
    <div className="bg-[#151F3A] p-6 rounded-xl border border-gray-800 hover:bg-[#1E2847] transition flex flex-col items-center text-center">
      <div className="flex mb-4">
        {renderStars(testimonial.rating)}
      </div>
      <p className="text-gray-300 italic mb-6 text-sm">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center">
        <div className="text-center">
          <h4 className="font-bold text-white">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
  
  const FeaturesSection = ({ features, navigate }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-6xl">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index} 
          feature={feature} 
          navigate={navigate} 
        />
      ))}
    </div>
  );
  
  const FeatureCard = ({ feature, navigate }) => (
    <div 
      onClick={() => feature.link !== '#' && navigate(feature.link)}
      className="bg-[#151F3A] p-6 rounded-xl border border-gray-800 hover:bg-[#1E2847] transition flex flex-col items-center text-center cursor-pointer"
    >
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
      <p className="text-sm text-gray-400">{feature.description}</p>
    </div>
  );
  
  export default HomePage;
  