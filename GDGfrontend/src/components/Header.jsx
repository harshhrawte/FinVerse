
// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem('token'); // Check if user is logged in

// //   const handleSignupClick = () => {
// //     navigate('/signup');
// //   };

// //   const handleLoginClick = () => {
// //     navigate('/login');
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('user');
// //     navigate('/login');
// //   };

// //   return (
// //     <header className="w-full bg-[#0A1128] shadow-md">
// //       <nav className="container mx-auto px-4 lg:px-16 py-4 flex justify-between items-center">
// //         {/* Logo Section */}
// //         <div className="flex items-center space-x-3">
// //           <div className="bg-blue-500 rounded-full p-2 flex items-center justify-center">
// //             <span className="text-white font-bold text-lg">FinAI</span>
// //           </div>
// //           <span className="text-xl font-semibold text-white">FinAI Advisor</span>
// //         </div>
        
// //         {/* Navigation Links */}
// //         <div className="hidden md:flex items-center space-x-6">
// //           <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
// //           <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
// //           <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          
// //           {token ? (
// //             <button
// //               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
// //               onClick={handleLogout}
// //             >
// //               Logout
// //             </button>
// //           ) : (
// //             <>
// //               <button
// //                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
// //                 onClick={handleSignupClick}
// //               >
// //                 Sign Up
// //               </button>
// //               <button
// //                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
// //                 onClick={handleLoginClick}
// //               >
// //                 Login
// //               </button>
// //             </>
// //           )}
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { UserCircleIcon } from '@heroicons/react/24/solid'; // Import profile icon

// const Header = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token'); // Check if user is logged in

//   const handleSignupClick = () => {
//     navigate('/signup');
//   };

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   const handleProfileClick = () => {
//     navigate('/profile');
//   };

//   return (
//     <header className="w-full bg-[#0A1128] shadow-md">
//       <nav className="container mx-auto px-4 lg:px-16 py-4 flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-3">
//           <div className="bg-blue-500 rounded-full p-2 flex items-center justify-center">
//             <span className="text-white font-bold text-lg">FinVerse</span>
//           </div>
//           <span className="text-xl font-semibold text-white">Financial Advisor</span>
//         </div>
        
//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center space-x-6">
//           <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
//           <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
//           <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
//           <Link to="/" className="text-gray-300 hover:text-white">Testimonials</Link>
          
//           {token ? (
//             <div className="flex items-center space-x-4">
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//               <button onClick={handleProfileClick} className="text-white hover:text-blue-400 transition">
//                 <UserCircleIcon className="w-8 h-8" />
//               </button>
//             </div>
//           ) : (
//             <>
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 onClick={handleSignupClick}
//               >
//                 Sign Up
//               </button>
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 onClick={handleLoginClick}
//               >
//                 Login
//               </button>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Header = ({ onTestimonialsClick }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
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
    <header className="w-full bg-[#0A1128] shadow-md">
      <nav className="container mx-auto px-4 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 rounded-full p-2 flex items-center justify-center">
            <span className="text-white font-bold text-lg">FinVerse</span>
          </div>
          <span className="text-xl font-semibold text-white">Financial Advisor</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <button 
            onClick={handleTestimonialsClick} 
            className="text-gray-300 hover:text-white"
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