import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Send, Zap, Radio, Cpu, Trash2, Calculator, BarChart4, Download, History, Lightbulb } from 'lucide-react';
import Header from '../components/Header';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [loadingHistory, setLoadingHistory] = useState(true);

  // Sample suggestions for quick queries
  const suggestions = [
    { text: "How should I start investing?", icon: <BarChart4 size={16} /> },
    { text: "Calculate compound interest on $10000 at 7% for 10 years", icon: <Calculator size={16} /> },
    { text: "How to create a budget?", icon: <Lightbulb size={16} /> },
    { text: "What's a good debt repayment strategy?", icon: <History size={16} /> }
  ];

  // Initialize with a system message and load history
  useEffect(() => {
    const initialMessage = {
      id: 1,
      text: "# FINVERSE AI ACTIVATED\n\nI'm your financial intelligence assistant. Ask me about investments, budgeting, debt management, retirement planning, or use financial calculators. Type a question or try one of the suggested queries below.",
      sender: 'bot',
      type: 'system'
    };
    
    // Start with initial message, then try to load history
    setMessages([initialMessage]);
    
    // This would be replaced with actual history loading from your backend
    setTimeout(() => {
      setLoadingHistory(false);
      // Show suggestions after a brief delay
      setTimeout(() => setShowSuggestions(true), 500);
    }, 1000);
  }, []);

  // Scroll to the bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to clear chat history
  const handleClearHistory = async () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      try {
        const apiUrl = `${import.meta.env.VITE_CHATBOT_API_URL}/api/v1`;
        await axios.post(`${apiUrl}/clear_history`);
        
        // Reset UI to initial state
        const initialMessage = {
          id: 1,
          text: "# FINVERSE AI RESET COMPLETE\n\nChat history has been cleared. How can I assist you with your financial questions today?",
          sender: 'bot',
          type: 'system'
        };
        setMessages([initialMessage]);
        setShowSuggestions(true);
      } catch (error) {
        console.error('Error clearing history:', error);
        alert('Failed to clear chat history.');
      }
    }
  };

  // Function to send message to Flask backend
  const handleSendMessage = async (message = inputMessage) => {
    if (message.trim() === '') return;
    
    // Hide suggestions when user sends a message
    setShowSuggestions(false);

    // Append user's message
    const userMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsProcessing(true);

    try {
      // Use the API URL from your .env file (Vite requires prefix VITE_)
      const apiUrl = `${import.meta.env.VITE_CHATBOT_API_URL}/api/v1`;
      const response = await axios.post(`${apiUrl}/chat`, { message: message });
      const botMessage = {
        id: messages.length + 2,
        text: response.data.message, // Assumed to be in Markdown format
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: 'Failed to connect to the chatbot server. Please check your connection and try again.',
        sender: 'bot',
        type: 'error'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
      // Focus on input after processing is complete
      inputRef.current?.focus();
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  // Function to export chat as text
  const exportChat = () => {
    // Skip the first system message
    const chatContent = messages.slice(1).map(msg => {
      return `${msg.sender === 'user' ? 'You' : 'FinVerse'}: ${msg.text}`;
    }).join('\n\n');
    
    const element = document.createElement("a");
    const file = new Blob([chatContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `finverse-chat-${new Date().toISOString().slice(0,10)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1128] via-[#1A2C50] to-[#2C3E50] flex flex-col overflow-hidden">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-[#162042]/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-900/50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Cpu className="text-blue-300 animate-spin-slow" />
              <h2 className="text-xl font-bold text-white tracking-wider">
                FinVerse FINANCE AI
              </h2>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={exportChat}
                className="bg-blue-800/30 hover:bg-blue-700/50 text-blue-200 rounded-full p-2 transition-all duration-200 tooltip"
                title="Export conversation"
              >
                <Download size={18} />
              </button>
              <button 
                onClick={handleClearHistory}
                className="bg-red-900/30 hover:bg-red-800/50 text-red-200 rounded-full p-2 transition-all duration-200 tooltip"
                title="Clear history"
              >
                <Trash2 size={18} />
              </button>
              <Radio className="text-green-500 animate-pulse ml-2" />
              <Zap className="text-yellow-500" />
            </div>
          </div>
          
          {/* Chat area */}
          <div className="h-[500px] overflow-y-auto overflow-x-hidden p-6 space-y-4 bg-[#0A1128]/50">
            {/* Loading history indicator */}
            {loadingHistory && (
              <div className="flex items-center justify-center h-20">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-blue-400">Loading conversation history...</span>
              </div>
            )}
            
            {/* Messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`transition-all duration-300 ${
                  msg.sender === 'user' ? 'text-right animate-slide-in-right' : 'text-left animate-slide-in-left'
                }`}
              >
                <div
                  className={`inline-block p-4 rounded-2xl max-w-[80%] ${
                    msg.sender === 'user'
                      ? 'bg-blue-700 text-white'
                      : msg.type === 'error' 
                        ? 'bg-red-900/60 text-red-100' 
                        : msg.type === 'system' 
                          ? 'bg-green-900/50 text-green-200 font-mono' 
                          : 'bg-purple-900/50 text-blue-200'
                  }`}
                  style={{
                    whiteSpace: 'pre-wrap',
                    overflowWrap: 'break-word'
                  }}
                >
                  {msg.sender === 'bot' ? (
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            
            {/* Suggestions */}
            {showSuggestions && (
              <div className="my-4 flex flex-wrap gap-2 justify-center animate-fade-in">
                <div className="w-full text-center text-xs text-blue-400 mb-2">Try asking:</div>
                {suggestions.map((suggestion, index) => (
                  <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.text)}
                  className="bg-blue-800/40 hover:bg-blue-700/60 text-blue-200 rounded-xl px-3 py-2 text-sm flex items-center transition-all duration-200 transform hover:scale-105"
                >
                  <span className="mr-2">{suggestion.icon}</span>
                  {suggestion.text}
                </button>
              ))}
            </div>
          )}
          
          {/* Processing indicator */}
          {isProcessing && (
            <div className="text-left animate-pulse text-blue-300 flex items-center">
              <Cpu size={16} className="mr-2 animate-spin" />
              PROCESSING QUERY... <span className="animate-bounce inline-block ml-2">●●●</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="ASK A FINANCIAL QUESTION..."
            className="flex-grow p-3 bg-[#162042] text-white rounded-l-xl border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 tracking-wider"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isProcessing || inputMessage.trim() === ''}
            className={`${
              isProcessing || inputMessage.trim() === '' 
                ? 'bg-blue-900 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white p-3 rounded-r-xl transition duration-300`}
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