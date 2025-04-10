// import React, { useEffect, useState } from "react";
// import axios from "axios";


// const InvestingBasics = () => {
//   const [topics, setTopics] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/investing-basics")
//       .then((res) => {
//         console.log("API Response:", res.data); // ✅ Debugging
//         if (Array.isArray(res.data.data)) {
//           setTopics(res.data.data); // ✅ Ensure correct extraction
//         } else {
//           console.error("Expected an array, received:", res.data.data);
//           setTopics([]); // Prevent crashes
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("API Fetch Error:", err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section className="p-6 text-center">
//       <h2 className="text-2xl font-bold mb-4">📚 Basics of Investing</h2>

//       {loading ? (
//         <p className="text-blue-500">Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {topics.map((topic) => (
//             <div key={topic.id} className="p-4 border rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
//               <p className="text-gray-700">{topic.description}</p>
//               <iframe
//                 className="w-full h-48 my-3 rounded-lg"
//                 src={topic.videoUrl}
//                 allowFullScreen
//               ></iframe>
//               <img
//                 src={topic.infographic}
//                 alt={`${topic.title} infographic`}
//                 className="w-full rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default InvestingBasics;


import React, { useEffect, useState } from "react";
import axios from "axios";

const InvestingBasics = () => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_CHATBOT_API_URL}/api/v1/investing-basics`)
      .then((res) => {
        if (Array.isArray(res.data.data)) {
          setTopics(res.data.data);
        } else {
          console.error("Expected an array, received:", res.data.data);
          setTopics([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Fetch Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 px-6 text-center relative overflow-hidden" style={{ 
      background: "linear-gradient(to bottom, #0a1120, #0f172a)",
      backgroundSize: "cover"
    }}>
      {/* Animated Background Dots (matching your current site) */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `pulse ${Math.random() * 8 + 5}s infinite`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ 
          background: "linear-gradient(to right, #3b82f6, #8b5cf6)", 
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          📚 Basics of Investing
        </h2>
        
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Understanding the fundamentals of investing is your first step toward financial freedom. Explore these essential topics curated by FinVerse AI.
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-900 bg-opacity-50 text-white p-4 rounded-lg shadow-lg">
            <p className="text-lg">Unable to load investing basics: {error}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic) => (
              <div 
                key={topic.id} 
                className="rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105 hover:shadow-blue-500/30"
                style={{ background: "linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.95))" }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4 h-16">
                    <h3 className="text-xl font-bold text-blue-300">{topic.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{topic.description}</p>
                  
                  <div className="mb-6 relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 animate-pulse"></div>
                    <iframe
                      className="w-full h-48 relative z-10 rounded-lg"
                      src={topic.videoUrl}
                      title={`${topic.title} video`}
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
                    <img
                      src={topic.infographic}
                      alt={`${topic.title} infographic`}
                      className="w-full rounded-lg relative z-10 hover:opacity-90 transition-opacity"
                    />
                  </div>
                  
                  <button 
                    className="mt-6 px-6 py-2 w-full rounded-lg font-medium transition-all duration-300"
                    style={{
                      background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                      boxShadow: "0 4px 14px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!loading && !error && topics.length === 0 && (
          <div className="bg-blue-900 bg-opacity-50 text-white p-8 rounded-lg shadow-lg">
            <p className="text-xl">No investing topics available at the moment. Check back soon!</p>
          </div>
        )}

        {!loading && !error && topics.length > 0 && (
          <button 
            className="mt-12 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              boxShadow: "0 4px 14px rgba(59, 130, 246, 0.3)"
            }}
          >
            Explore All Topics
          </button>
        )}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.5); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default InvestingBasics;