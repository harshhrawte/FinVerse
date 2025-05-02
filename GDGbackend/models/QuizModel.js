// const mongoose = require('mongoose');

// const quizSchema = new mongoose.Schema({
//   question: { type: String, required: true },
//   options: { type: [String], required: true },
//   answer: { type: String, required: true },
// });

// const Quiz = mongoose.model('Quiz', quizSchema, 'quizzes');

// // Dummy data
// const dummyQuizzes = [
//   {
//     question: "What is the capital of France?",
//     options: ["Berlin", "Madrid", "Paris", "Rome"],
//     answer: "Paris",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Jupiter", "Saturn"],
//     answer: "Mars",
//   },
//   {
//     question: "What is 2 + 2?",
//     options: ["3", "4", "5", "6"],
//     answer: "4",
//   },
//   {
//     question: "Who wrote 'To Kill a Mockingbird'?",
//     options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
//     answer: "Harper Lee",
//   },
//   {
//     question: "What is the largest ocean on Earth?",
//     options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
//     answer: "Pacific Ocean",
//   }
// ];

// // Insert dummy data into the database
// async function seedDatabase() {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/GDG', {
//     });
//     console.log("Connected to MongoDB");

//     // Check if data already exists
//     const existingData = await Quiz.find();
//     if (existingData.length === 0) {
//       await Quiz.insertMany(dummyQuizzes);
//       console.log("Dummy quizzes inserted successfully");
//     } else {
//       console.log("Database already contains quiz data. Skipping insertion.");
//     }

//   } catch (error) {
//     console.error("Error inserting dummy quizzes:", error);
//   } finally {
//     await mongoose.connection.close();
//     console.log("MongoDB connection closed.");
//   }
// }

// seedDatabase();

// module.exports = Quiz;



const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/GDG", {
   
});

const quizSchema = new mongoose.Schema({
    category: String,
    question: String,
    options: [String],
    answer: String
});
const Quiz = mongoose.model("Quiz", quizSchema);

// Sample Questions
const quizData = [
    {
        category: "investment",
        question: "What does ROI stand for?",
        options: ["Return on Investment", "Rate of Interest", "Risk on Investment", "Revenue of Industry"],
        answer: "Return on Investment"
    },
    {
        category: "stock_market",
        question: "What does 'Bull Market' mean?",
        options: ["Market is rising", "Market is falling", "Stable market", "Market crash"],
        answer: "Market is rising"
    }
];

const insertData = async () => {
    await Quiz.insertMany(quizData);
    console.log("Quiz Data Inserted!");
    mongoose.connection.close();
};

insertData();
