

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfile } from "../api/Profileapi";
import { motion } from "framer-motion";

const Profile = () => {
  let { userId } = useParams();
  const navigate = useNavigate();
  
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile(userId, token);
        setUser(data || {});
      } catch (err) {
        console.error(err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [userId, token]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin absolute top-2 left-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400 font-bold">
          Loading
        </div>
      </div>
    </div>
  );

  if (error) return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-4"
    >
      <div className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl text-red-400 border border-red-500/30 max-w-md w-full">
        <div className="flex items-center space-x-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-xl font-bold">Error</h3>
        </div>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-medium py-2 px-4 rounded-lg transition duration-300 shadow-lg shadow-blue-700/30"
        >
          Try Again
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Profile Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-lg bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-3xl shadow-2xl overflow-hidden mb-8 border border-gray-700/50"
        >
          {/* Banner Image */}
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90">
              <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1000x300')] mix-blend-overlay opacity-20"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            
            {/* Animated Dots */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-60"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="px-6 sm:px-10 pb-10 relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-20 mb-6 relative z-10">
              {/* Profile Image with Animated Border */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
                <img 
                  src={user.profilePicture || "https://via.placeholder.com/150"} 
                  alt="Profile" 
                  className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-gray-900 z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 sm:mt-0 sm:ml-8 text-center sm:text-left"
              >
                <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  {user.firstName || 'Unknown'} {user.lastName || 'User'}
                </h2>
                <p className="text-blue-400 text-lg">
                  @{user.username || (user.email ? user.email.split('@')[0] : 'user')}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-lg bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl shadow-xl overflow-hidden col-span-1 border border-gray-700/50 hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Personal Information</h3>
              </div>
              
              <div className="space-y-6">
                <InfoItem 
                  icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  label="Email" 
                  value={user.email || 'Not provided'}

                />
                <InfoItem 
                  icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  label="Phone" 
                  value={user.phoneNumber || 'Not provided'} 
                />
                <InfoItem 
                  icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  label="Address" 
                  value={user.address || 'Not provided'} 
                />
                <InfoItem 
                  icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  label="Age" 
                  value={user.age || 'Not specified'} 
                />
                <InfoItem 
                  icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  label="Gender" 
                  value={user.gender || 'Not specified'} 
                />
              </div>
            </div>
          </motion.div>

          {/* About Me Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="backdrop-blur-lg bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl shadow-xl overflow-hidden col-span-1 lg:col-span-2 border border-gray-700/50 hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-500"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">About Me</h3>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 sm:p-8 rounded-xl text-gray-300 border border-gray-700/50">
                {user.about || 'No description provided yet.'}
              </div>
              
              {/* Financial Stats Preview - Optional */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard title="Investment" value="$12,450" change="+8.2%" positive={true} />
                <StatCard title="Savings" value="$5,240" change="+3.7%" positive={true} />
                <StatCard title="Expenses" value="$1,840" change="-2.3%" positive={false} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => navigate(`/profile/edit/${userId}`)}
            className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl transition duration-300 shadow-lg shadow-blue-700/30"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 group-hover:animate-shine"></span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Profile
            </div>
          </button>
        </motion.div>
      </div>
      
      {/* Custom Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

// Helper components
const InfoItem = ({ icon, label, value }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-center group"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
    </svg>
    <div className="flex flex-col">
      <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{label}</span>
      <span className="text-gray-300">{value}</span>
    </div>
  </motion.div>
);

const StatCard = ({ title, value, change, positive }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700/50"
  >
    <p className="text-sm text-gray-400">{title}</p>
    <p className="text-xl font-bold text-white mt-1">{value}</p>
    <p className={`text-sm mt-1 ${positive ? 'text-green-400' : 'text-red-400'}`}>
      {change} {positive ? '↑' : '↓'}
    </p>
  </motion.div>
);

export default Profile;