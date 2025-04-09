// // controllers/investingController.js

// const investingBasics = [
//     {
//       id: 1,
//       title: "📈 What are Stocks?",
//       description: "Stocks represent ownership in a company. When you buy a stock, you become a shareholder.",
//       videoUrl: "https://www.youtube.com/embed/F3QpgXBtDeo",
//       infographic: "/images/stocks-infographic.jpg",
//     },
//     {
//       id: 2,
//       title: "💰 What are Mutual Funds?",
//       description: "Mutual Funds pool money from multiple investors to buy stocks, bonds, or other assets.",
//       videoUrl: "https://www.youtube.com/embed/Vt6KOJuK-Sk",
//       infographic: "/images/mutual-funds-infographic.jpg",
//     },
//     {
//       id: 3,
//       title: "🔄 What is SIP (Systematic Investment Plan)?",
//       description: "SIP allows you to invest a fixed amount in Mutual Funds at regular intervals.",
//       videoUrl: "https://www.youtube.com/watch?v=1DRq8N7SpYc",
//       infographic: "/images/sip-infographic.jpg",
//     },
//     {
//       id: 4,
//       title: "🏦 What are Bonds?",
//       description: "Bonds are fixed-income securities issued by companies or governments.",
//       videoUrl: "https://www.youtube.com/watch?v=ZYArHkBofas",
//       infographic: "/images/bonds-infographic.jpg",
//     }
//   ];
  
//   // ✅ Business Logic: Fetch investing basics data
//   const getInvestingBasics = (req, res) => {
//     res.json(investingBasics);
//   };
  
// module.exports = { getInvestingBasics };
  

// controllers/investingController.js

const investingBasics = [
  {
    id: 1,
    title: "📈 What are Stocks?",
    description: "Stocks represent ownership in a company. When you buy a stock, you become a shareholder.",
    videoUrl: "https://www.youtube.com/embed/kTxx_Jpnpn0?si=GLJhyN-AhexVP1FR", // Updated URL
    infographic: "/images/stocks-infographic.jpg",
  },

  {
    id: 2,
    title: "💰 What are Mutual Funds?",
    description: "Mutual Funds pool money from multiple investors to buy stocks, bonds, or other assets.",
    videoUrl: "https://www.youtube.com/embed/ACpQo1a_RBk?si=y8OchPlSqO9YVrp9", // Updated URL
    infographic: "/images/mutual-funds-infographic.jpg",
  },
  {
    id: 3,
    title: "🔄 What is SIP (Systematic Investment Plan)?",
    description: "SIP allows you to invest a fixed amount in Mutual Funds at regular intervals.",
    videoUrl: "https://www.youtube.com/embed/1DRq8N7SpYc?si=yQ5f8Y6HT34rbsvV", // Updated URL
    infographic: "/images/sip-infographic.jpg",
  },
  {
    id: 4,
    title: "🏦 What are Bonds?",
    description: "Bonds are fixed-income securities issued by companies or governments.",
    videoUrl: "https://www.youtube.com/embed/ZYArHkBofas?si=_WheWMHOBB3f8aAZ", // Updated URL
    infographic: "/images/bonds-infographic.jpg",
  }
];

// ✅ Business Logic: Fetch investing basics data
const getInvestingBasics = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Investing basics data retrieved successfully",
    data: investingBasics,
  });
};

module.exports = { getInvestingBasics };
