const express = require("express");
const mongoose = require("mongoose");
// const carpool = require("./routes/carpool");
// const profile = require("./routes/profile");
const auth = require("./routes/auth");
const profile = require("./routes/profile");
const path = require("path");
const authMiddleware=require('./middlewares/authmiddleware')
const investingRoutes = require("./routes/InvestingBasics");
// const authMiddleware=require('./middlewares/authmiddleware')
// const reviews = require("./routes/reviews");
// const paymentRoutes = require("./routes/carpool");
// const notificationRoutes = require("./routes/notifications");
// const communityRoutes = require("./routes/community");

const cors = require("cors");
const dbConnect = require("./config/database");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// CORS Configuration
const corsOptions = {
  origin: 'https://finverse-frontend.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", auth);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();


app.use("/api", investingRoutes);
app.use("/api/v1/auth", auth);
app.use("/api/v1/profile", profile);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
// app.use("/api/v1/reviews", reviews);





const quizSchema = new mongoose.Schema({
  category: String,
  question: String,
  options: [String],
  answer: String
});
const Quiz = mongoose.model("Quiz", quizSchema);

// ✅ API to Fetch Questions by Category
app.get("/quiz/:category", async (req, res) => {
  try {
      const category = req.params.category;
      const questions = await Quiz.find({ category }).select("-answer"); // Hide answer
      res.json(questions);
  } catch (error) {
      res.status(500).json({ message: "Error fetching quiz", error });
  }
});

// ✅ API to Submit Answers & Get Score
app.post("/quiz/submit", async (req, res) => {
  try {
      const { answers } = req.body;
      let score = 0;

      for (let ans of answers) {
          const correct = await Quiz.findById(ans.questionId);
          if (correct.answer === ans.selectedAnswer) {
              score++;
          }
      }

      res.json({ message: "Quiz completed!", score });
  } catch (error) {
      res.status(500).json({ message: "Error calculating score", error });
  }
});







// app.use("/api/v1/payments", paymentRoutes);
// Default Route
app.get("/", (req, res) => {
  res.send(`<h1>HomePage</h1>`);
});

// app.use("/api/v1/notifications", notificationRoutes);
// app.use("/api/v1/community", communityRoutes);

app.get('/', (req, res) => {
  res.json({ message: ' Backend API is live', status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`);
});