import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Signup from "./pages/SignPage";
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Login from "./pages/Login";
import ContactUs from './pages/ContactUs'
import Chatbot from './pages/Chatbot'
import Header from './components/Header'
import VerifyEmailPage from './pages/VerifyEmail'
import Profile from './pages/Profile'; 
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import InvestmentGuidancePage from "./pages/InvestmentGuidence";
import FinancialLiteracyPage from "./pages/FinancialLiteracy";
import SecurityPage from "./pages/Security";
import EditProfile from "./pages/EditProfile";
import InvestingBasics from "./pages/InvestingBasics";
import FinVerseQuiz from "./pages/Quiz";

const userId=localStorage.getItem('userId')

function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/chatbot" element={<ProtectedRoute><Chatbot /></ProtectedRoute>} />
        <Route path="/head" element={<Header />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/profile/:userId" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/profile/edit/:userId" element={<EditProfile />} />
        <Route path="/quiz" element={<FinVerseQuiz />} />
        {/* <Route
          path="/profile/edit/:userId"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/investment-guidence" element={<InvestmentGuidancePage />} />
        <Route path="/financial-literacy" element={<FinancialLiteracyPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/investment-basics" element={<InvestingBasics /> } />

        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
      </Routes>
    </Router>

    
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
  </>
  )
}

export default App
