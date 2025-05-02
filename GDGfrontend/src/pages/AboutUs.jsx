


// import React from 'react';
// import { FaGlobe, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import imageSrc from '/planet.png';
// import Footer from '../components/Footer';
// import Header from '../components/Header';

// const AboutUs = () => {
//   return (
    
      
//       <div className="min-h-screen flex flex-col bg-[#0A1128] text-white p-8 pb-20 relative">
//       {/* Background Image */}
//      <Header/>
    
//       <img 
//         src={imageSrc} 
//         alt="Background" 
//         className="absolute top-0 left-0 w-1/2 h-full object-cover opacity-30" 
//       />

//       {/* Main Content */}
//       <div className="flex-grow">
//         {/* Header Section */}
//         <motion.h1 
//           className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
        
//         </motion.h1>

//         {/* Content Section */}
//         <div className="grid md:grid-cols-2 gap-12 relative">
//           {/* Left Section */}
//           <motion.div
//             className="flex flex-col space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <h2 className="text-2xl font-semibold">Our Mission</h2>
//             <p>
//             At Finverse, our mission is to empower individuals with the knowledge and tools they need to make confident financial decisions. With the rise of new investors, financial literacy remains a major challenge, leading to uninformed decisions and potential losses. 
//              </p>

//             <h2 className="text-2xl font-semibold">Why AI Matters?</h2>
//             <p>
//             We believe that everyone deserves access to expert-level financial advice, no matter their experience level. By leveraging the power of GenAI, we aim to bridge the gap between financial knowledge and smart investing, ensuring that people can grow their wealth safely and effectively.            
//             </p>
//           </motion.div>

//           {/* Right Section - Features */}
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             <FeatureCard icon={<FaGlobe />} title="Global Reach" desc="Providing financial literacy across the globe." />
//             <FeatureCard icon={<FaUsers />} title="User Focused" desc="Tailored advice for every investor." />
//             <FeatureCard icon={<FaLightbulb />} title="Smart Insights" desc="AI-powered insights for smarter decisions." />
//             <FeatureCard icon={<FaRocket />} title="Rapid Growth" desc="Scaling rapidly with AI at the core." />
//           </motion.div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// const FeatureCard = ({ icon, title, desc }) => {
//   return (
//     <motion.div 
//       className="p-6 rounded-lg shadow-lg text-white flex flex-col items-center space-y-4 bg-gradient-to-r from-blue-400 to-purple-600"
//       whileHover={{ scale: 1.05 }}
//     >
//       <div className="text-4xl text-white">{icon}</div>
//       <h3 className="text-xl font-bold">{title}</h3>
//       <p className="text-center">{desc}</p>
//     </motion.div>
//   );
// };

// export default AboutUs;



import React from 'react';
import { FaGlobe, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import imageSrc from '/planet.png';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A1128] text-white">
      <Header className="z-10" />
      
      <div className="flex-grow relative overflow-hidden">
        {/* Background Image */}
        <img 
          src={imageSrc} 
          alt="Background" 
          className="absolute top-0 left-0 w-1/2 h-full object-cover opacity-30 z-0" 
        />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Section */}
            <motion.div
              className="flex flex-col space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p>
                At Finverse, our mission is to empower individuals with the knowledge and tools they need to make confident financial decisions. With the rise of new investors, financial literacy remains a major challenge, leading to uninformed decisions and potential losses. 
              </p>

              <h2 className="text-2xl font-semibold">Why AI Matters?</h2>
              <p>
                We believe that everyone deserves access to expert-level financial advice, no matter their experience level. By leveraging the power of GenAI, we aim to bridge the gap between financial knowledge and smart investing, ensuring that people can grow their wealth safely and effectively.            
              </p>
            </motion.div>

            {/* Right Section - Features */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <FeatureCard icon={<FaGlobe />} title="Global Reach" desc="Providing financial literacy across the globe." />
              <FeatureCard icon={<FaUsers />} title="User Focused" desc="Tailored advice for every investor." />
              <FeatureCard icon={<FaLightbulb />} title="Smart Insights" desc="AI-powered insights for smarter decisions." />
              <FeatureCard icon={<FaRocket />} title="Rapid Growth" desc="Scaling rapidly with AI at the core." />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer className="z-10" />
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <motion.div 
      className="p-6 rounded-lg shadow-lg text-white flex flex-col items-center space-y-4 bg-gradient-to-r from-blue-400 to-purple-600"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl text-white">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center">{desc}</p>
    </motion.div>
  );
};

export default AboutUs;