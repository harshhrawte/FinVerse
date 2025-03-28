


import React, { useState, useEffect, useRef } from 'react';
import { Send, Zap, Radio, Cpu } from 'lucide-react';
import Header from '../components/Header';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const initialMessage = {
      id: 1,
      text: "FINANCIAL INTELLIGENCE ACTIVATED. QUERY PROCESSING SYSTEM ONLINE.",
      sender: 'bot',
      type: 'system'
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsProcessing(true);

    setTimeout(() => {
      const botResponses = [
        "ANALYZING FINANCIAL DATA STREAM...",
        "CROSS-REFERENCING INVESTMENT ALGORITHMS...",
        `FINANCIAL INSIGHT GENERATED FOR QUERY: "${inputMessage}"`
      ];

      const botMessage = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        type: 'processing'
      };

      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1128] via-[#1A2C50] to-[#2C3E50] flex flex-col overflow-hidden">
      {/* Header Section */}
      <Header />

      {/* Main Chatbot Section */}
      <div className="flex-grow flex items-center justify-center p-4">
        {/* Chatbot Container */}
        <div className="relative w-full max-w-4xl bg-[#162042]/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-900/50 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Cpu className="text-blue-300 animate-spin-slow" />
              <h2 className="text-xl font-bold text-white tracking-wider">
                FinVerse ROBOTIC ASSISTANT
              </h2>
            </div>
            <div className="flex space-x-2">
              <Radio className="text-green-500 animate-pulse" />
              <Zap className="text-yellow-500" />
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-[#0A1128]/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`transition-all duration-300 ${
                  msg.sender === 'user'
                    ? 'text-right animate-slide-in-right'
                    : 'text-left animate-slide-in-left'
                }`}
              >
                <div
                  className={`inline-block p-4 rounded-2xl max-w-[80%] ${
                    msg.sender === 'user'
                      ? 'bg-blue-700 text-white'
                      : 'bg-purple-900/50 text-blue-200'
                  } ${
                    msg.type === 'system'
                      ? 'bg-green-900/50 text-green-200 font-mono'
                      : ''
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="text-left animate-pulse text-blue-300">
                PROCESSING QUERY... <span className="animate-bounce inline-block">●●●</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 flex items-center">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="INPUT FINANCIAL QUERY..."
              className="flex-grow p-3 bg-[#162042] text-white rounded-l-xl border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase tracking-wider"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white p-3 rounded-r-xl hover:bg-blue-700 transition duration-300 animate-bounce-slow"
            >
              <Send />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
