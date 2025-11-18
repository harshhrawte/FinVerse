# 🌟 FinVerse - AI-Powered Financial Assistant

<div align="center">

![FinVerse Banner](https://img.shields.io/badge/FinVerse-AI%20Financial%20Assistant-blue?style=for-the-badge&logo=robot)

**Your Intelligent Companion for Financial Guidance**

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-green?style=flat-square)](https://www.mongodb.com/mern-stack)
[![GenAI](https://img.shields.io/badge/Powered%20by-GenAI-purple?style=flat-square)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Usage](#-usage) • [Contributing](#-contributing)

</div>

---

## 📖 About

**FinVerse** is a cutting-edge GenAI-powered financial chatbot that leverages **Retrieval-Augmented Generation (RAG)** technology to provide instant, accurate answers to your finance-related queries. Whether you're looking for investment advice, tax guidance, budgeting tips, or market insights, FinVerse delivers intelligent, conversational responses powered by advanced Large Language Models (LLMs).

With secure **Google Authentication** and a seamless MERN stack architecture, FinVerse makes financial knowledge accessible, personalized, and secure.

---

## ✨ Features

### 🤖 **AI-Powered Intelligence**
- **RAG Technology**: Retrieves relevant financial information and generates contextual responses
- **Natural Language Understanding**: Ask questions in plain English
- **Real-time Responses**: Get instant answers to complex financial queries
- **Context-Aware Conversations**: Maintains conversation history for coherent dialogue

### 🔐 **Secure Authentication**
- **Google OAuth Integration**: Seamless sign-in with your Google account
- **JWT Token Management**: Secure session handling
- **Protected Routes**: User data privacy and security

### 💼 **Financial Capabilities**
- Investment guidance and portfolio recommendations
- Tax planning and optimization strategies
- Budgeting and savings advice
- Market analysis and trends
- Retirement planning assistance
- Debt management strategies

### 🎨 **User Experience**
- Clean, intuitive interface
- Responsive design for all devices
- Real-time chat interface
- Conversation history tracking
- Markdown support for formatted responses

---

## 🛠️ Tech Stack

### **Frontend**
- **React.js** - Dynamic user interface
- **Redux/Context API** - State management
- **Axios** - HTTP client
- **CSS3/Tailwind CSS** - Styling
- **React Router** - Navigation

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### **AI & Authentication**
- **GenAI/OpenAI API** - Language model integration
- **Vector Database** - Document embeddings storage
- **Google OAuth 2.0** - Secure authentication
- **Passport.js** - Authentication middleware

### **Additional Tools**
- **JWT** - Token-based authentication
- **dotenv** - Environment configuration
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (Local or Atlas)
- **npm** or **yarn**
- **Google Cloud Console Account** (for OAuth credentials)
- **GenAI API Key** (OpenAI, Anthropic, or similar)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/finverse.git
cd finverse
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/finverse
# OR for MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/finverse

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

# GenAI Configuration
OPENAI_API_KEY=your_openai_api_key
# OR
ANTHROPIC_API_KEY=your_anthropic_api_key

# Frontend URL
CLIENT_URL=http://localhost:3000
```

Create a `.env` file in the `client` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

4. **Set up Google OAuth**

- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project or select existing
- Enable Google+ API
- Create OAuth 2.0 credentials
- Add authorized redirect URIs: `http://localhost:5000/auth/google/callback`
- Copy Client ID and Client Secret to your `.env` file

5. **Start the application**

```bash
# Start backend server (from server directory)
npm run dev

# Start frontend (from client directory, in a new terminal)
npm start
```

The application should now be running at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

---

## 💡 Usage

### Getting Started with FinVerse

1. **Sign In**: Click on "Sign in with Google" to authenticate
2. **Start Chatting**: Type your financial question in the chat input
3. **Get Answers**: Receive AI-powered responses with relevant financial insights
4. **Continue Conversation**: Ask follow-up questions for deeper understanding

### Example Queries

```
"What are the best investment options for beginners?"
"How can I create a monthly budget with a $5000 income?"
"Explain the tax implications of cryptocurrency trading"
"What's the difference between 401(k) and IRA?"
"Help me plan for early retirement"
```

---

## 📁 Project Structure

```
finverse/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── services/         # Business logic
│   │   └── aiService.js  # GenAI integration
│   ├── utils/            # Helper functions
│   ├── server.js         # Entry point
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🔒 Security Features

- **Secure Authentication**: Google OAuth 2.0 integration
- **JWT Tokens**: Stateless authentication with httpOnly cookies
- **Password Encryption**: bcrypt hashing for user credentials
- **Environment Variables**: Sensitive data protection
- **Input Validation**: Sanitization of user inputs
- **CORS Configuration**: Controlled cross-origin requests
- **Rate Limiting**: API abuse prevention

---

## 🎯 Roadmap

- [ ] Multi-language support
- [ ] Voice input/output capability
- [ ] Financial document analysis (PDF upload)
- [ ] Portfolio tracking integration
- [ ] Email notifications for market alerts
- [ ] Mobile application (React Native)
- [ ] Advanced analytics dashboard
- [ ] Customizable financial goals tracking

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

**Project Maintainer**: Your Name

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

**Project Link**: [https://github.com/yourusername/finverse](https://github.com/yourusername/finverse)

---

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) / [Anthropic](https://www.anthropic.com/) for AI capabilities
- [MongoDB](https://www.mongodb.com/) for database solutions
- [Google Cloud](https://cloud.google.com/) for OAuth services
- [React](https://reactjs.org/) community for amazing tools
- All contributors and supporters of this project

---

<div align="center">

**Made with ❤️ and AI**

⭐ Star this repo if you find it helpful!

</div>
