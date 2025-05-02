
// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   ChatBubbleLeftRightIcon, 
//   ChartBarIcon, 
//   LightBulbIcon, 
//   ShieldCheckIcon, 
//   StarIcon 
// } from '@heroicons/react/24/solid';

// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const HomePage = () => {
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();
  
//   // Create a ref for the testimonials section
//   const testimonialsRef = useRef(null);

//   const features = [
//     { 
//       icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-blue-500" />, 
//       title: "Conversational AI", 
//       description: "Ask financial questions naturally and get intelligent insights.",
//       link: '/chatbot' 
//     },
//     { 
//       icon: <ChartBarIcon className="w-10 h-10 text-green-500" />, 
//       title: "Investment Guidance", 
//       description: "Discover tailored investment opportunities.",
//       link: '/investment-guidence' 
//     },
//     { 
//       icon: <LightBulbIcon className="w-10 h-10 text-yellow-500" />, 
//       title: "Financial Literacy", 
//       description: "Understand financial concepts through interactive AI.",
//       link: '/financial-literacy' 
//     },
//     { 
//       icon: <ShieldCheckIcon className="w-10 h-10 text-purple-500" />, 
//       title: "Secure & Trustworthy", 
//       description: "Advanced security for your financial data.",
//       link: '/security' 
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Alex Rodriguez",
//       role: "Tech Entrepreneur",
//       quote: "This AI financial assistant has transformed how I manage my investments.",
//       rating: 5
//     },
//     {
//       name: "Sarah Chen",
//       role: "Financial Analyst",
//       quote: "Impressive depth of analysis and conversational approach.",
//       rating: 5
//     },
//     {
//       name: "Michael Thompson",
//       role: "Small Business Owner",
//       quote: "Financial literacy tools help me make informed decisions.",
//       rating: 4
//     }
//   ];

//   // Function to scroll to testimonials
//   const scrollToTestimonials = () => {
//     testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your interest!');
//     setEmail('');
//   };

//   const renderStars = (count) => (
//     [...Array(count)].map((_, i) => (
//       <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
//     ))
//   );

//   return (
//     <div className="min-h-screen bg-[#0A1128] flex flex-col overflow-hidden">
//       <Header 
//         onTestimonialsClick={scrollToTestimonials} 
//         className="bg-blue-500 p-4 text-white" 
//       />

//       <main className="flex-grow flex flex-col justify-center items-center text-center px-4 lg:px-16">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//           AI-Powered Financial Guidance
//         </h1>
//         <p className="text-lg text-gray-400 max-w-2xl mb-10">
//           Revolutionizing financial literacy and investment decisions through AI technology.
//         </p>

//         <form onSubmit={handleEmailSubmit} className="w-full max-w-md flex">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email for early access"
//             required
//             className="flex-grow px-4 py-3 rounded-l-lg bg-[#151F3A] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 px-4 md:px-6 py-3 rounded-r-lg hover:bg-blue-700 transition text-white"
//           >
//             Get Access
//           </button>
//         </form>

//         <FeaturesSection 
//           features={features} 
//           navigate={navigate} 
//         />
        
//         <div className="w-full border-t border-gray-800 my-24"></div>
        
//         {/* Add ref to the testimonials section */}
//         <TestimonialSection 
//           ref={testimonialsRef}
//           testimonials={testimonials} 
//           renderStars={renderStars} 
//         />

//         <div className="w-full border-t border-gray-800 my-24"></div>
//       </main>

//       <Footer className="bg-gray-800 text-white p-4" />
//     </div>
//   );
// };

// // Modify TestimonialSection to be a forwardRef component
// const TestimonialSection = React.forwardRef(({ testimonials, renderStars }, ref) => (
//   <div ref={ref} className="w-full max-w-6xl">
//     <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//       What Our Users Say
//     </h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       {testimonials.map((testimonial, index) => (
//         <TestimonialCard 
//           key={index} 
//           testimonial={testimonial} 
//           renderStars={renderStars} 
//         />
//       ))}
//     </div>
//   </div>
// ));


// const TestimonialCard = ({ testimonial, renderStars }) => (
//     <div className="bg-[#151F3A] p-6 rounded-xl border border-gray-800 hover:bg-[#1E2847] transition flex flex-col items-center text-center">
//       <div className="flex mb-4">
//         {renderStars(testimonial.rating)}
//       </div>
//       <p className="text-gray-300 italic mb-6 text-sm">
//         "{testimonial.quote}"
//       </p>
//       <div className="flex items-center">
//         <div className="text-center">
//           <h4 className="font-bold text-white">{testimonial.name}</h4>
//           <p className="text-gray-400 text-sm">{testimonial.role}</p>
//         </div>
//       </div>
//     </div>
//   );
  
//   const FeaturesSection = ({ features, navigate }) => (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-6xl">
//       {features.map((feature, index) => (
//         <FeatureCard 
//           key={index} 
//           feature={feature} 
//           navigate={navigate} 
//         />
//       ))}
//     </div>
//   );
  
//   const FeatureCard = ({ feature, navigate }) => (
//     <div 
//       onClick={() => feature.link !== '#' && navigate(feature.link)}
//       className="bg-[#151F3A] p-6 rounded-xl border border-gray-800 hover:bg-[#1E2847] transition flex flex-col items-center text-center cursor-pointer"
//     >
//       <div className="mb-4">{feature.icon}</div>
//       <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
//       <p className="text-sm text-gray-400">{feature.description}</p>
//     </div>
//   );
  
//   export default HomePage;
  




import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChatBubbleLeftRightIcon, 
  ChartBarIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  StarIcon 
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Footer from '../components/Footer';

// Particle background component
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Draw particle
        ctx.fillStyle = `rgba(100, 149, 237, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

const HomePage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const testimonialsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        if (scrollPosition > elementPosition) {
          element.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { 
      icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-blue-500" />, 
      title: "Conversational AI", 
      description: "Ask financial questions naturally and get intelligent insights.",
      link: '/chatbot',
      delay: 0.1
    },
    { 
      icon: <ChartBarIcon className="w-10 h-10 text-green-500" />, 
      title: "Investment Guidance", 
      description: "Discover tailored investment opportunities.",
      link: '/investment-guidence',
      delay: 0.2 
    },
    { 
      icon: <LightBulbIcon className="w-10 h-10 text-yellow-500" />, 
      title: "Financial Literacy", 
      description: "Understand financial concepts through interactive AI.",
      link: '/financial-literacy',
      delay: 0.3
    },
    { 
      icon: <ShieldCheckIcon className="w-10 h-10 text-purple-500" />, 
      title: "Secure & Trustworthy", 
      description: "Advanced security for your financial data.",
      link: '/security',
      delay: 0.4
    }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Tech Entrepreneur",
      quote: "This AI financial assistant has transformed how I manage my investments.",
      rating: 5,
      delay: 0.1
    },
    {
      name: "Sarah Chen",
      role: "Financial Analyst",
      quote: "Impressive depth of analysis and conversational approach.",
      rating: 5,
      delay: 0.2
    },
    {
      name: "Michael Thompson",
      role: "Small Business Owner",
      quote: "Financial literacy tools help me make informed decisions.",
      rating: 4,
      delay: 0.3
    }
  ];

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
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 * i }}
      >
        <StarIcon className="w-5 h-5 text-yellow-500" />
      </motion.div>
    ))
  );

  // Variants for framer motion
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2
      } 
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        delay: 0.4
      } 
    }
  };
  
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        delay: 0.6
      } 
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1128] flex flex-col overflow-hidden relative">
      <ParticleBackground />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <Header 
          onTestimonialsClick={scrollToTestimonials} 
          className="bg-blue-500 p-4 text-white z-10 relative" 
        />
      </motion.div>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 lg:px-16 z-10 relative">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          AI-Powered Financial Guidance
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mb-10"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Revolutionizing financial literacy and investment decisions through AI technology.
        </motion.p>

        <motion.form 
          onSubmit={handleEmailSubmit} 
          className="w-full max-w-md flex"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for early access"
            required
            className="flex-grow px-4 py-3 rounded-l-lg bg-[#151F3A] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            type="submit"
            className="bg-blue-600 px-4 md:px-6 py-3 rounded-r-lg hover:bg-blue-700 transition text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Access
          </motion.button>
        </motion.form>

        <FeaturesSection 
          features={features} 
          navigate={navigate} 
        />
        
        <div className="w-full border-t border-gray-800 my-24"></div>
        
        <TestimonialSection 
          ref={testimonialsRef}
          testimonials={testimonials} 
          renderStars={renderStars} 
        />

        <div className="w-full border-t border-gray-800 my-24"></div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Footer className="bg-gray-800 text-white p-4 relative z-10" />
      </motion.div>
    </div>
  );
};

// Modify TestimonialSection to be a forwardRef component with animations
const TestimonialSection = React.forwardRef(({ testimonials, renderStars }, ref) => (
  <div ref={ref} className="w-full max-w-6xl">
    <motion.h2 
      className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      What Our Users Say
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={index} 
          testimonial={testimonial} 
          renderStars={renderStars} 
          index={index}
        />
      ))}
    </div>
  </div>
));

const TestimonialCard = ({ testimonial, renderStars, index }) => (
  <motion.div 
    className="bg-[#151F3A] p-6 rounded-xl border border-gray-800 hover:bg-[#1E2847] transition flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: testimonial.delay }}
    whileHover={{ 
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 }
    }}
  >
    <div className="flex mb-4">
      {renderStars(testimonial.rating)}
    </div>
    <motion.p 
      className="text-gray-300 italic mb-6 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: testimonial.delay + 0.2 }}
    >
      "{testimonial.quote}"
    </motion.p>
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: testimonial.delay + 0.3 }}
    >
      <div className="text-center">
        <h4 className="font-bold text-white">{testimonial.name}</h4>
        <p className="text-gray-400 text-sm">{testimonial.role}</p>
      </div>
    </motion.div>
  </motion.div>
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
  <motion.div 
    onClick={() => feature.link !== '#' && navigate(feature.link)}
    className="bg-[#151F3A] p-6 rounded-xl border border-gray-800 hover:bg-[#1E2847] transition flex flex-col items-center text-center cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: feature.delay }}
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(79, 209, 197, 0.3)",
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div 
      className="mb-4"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: feature.delay + 0.2 
      }}
    >
      {feature.icon}
    </motion.div>
    <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
    <p className="text-sm text-gray-400">{feature.description}</p>
  </motion.div>
);

export default HomePage;