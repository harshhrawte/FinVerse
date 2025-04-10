import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const FinVerseQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizState, setQuizState] = useState({
    loading: true,
    error: null,
    completed: false,
    score: 0
  });

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_CHATBOT_API_URL}/api/v1/quiz`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (!data.questions || !Array.isArray(data.questions)) {
          throw new Error('Invalid quiz data format');
        }
  
        setQuestions(data.questions);
        setQuizState(prev => ({
          ...prev,
          loading: false,
          error: null
        }));
      } catch (error) {
        setQuizState(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }));
      }
    };
  
    fetchQuiz();
  }, []);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    
    const isLastQuestion = currentQuestion === questions.length - 1;
    
    setQuizState(prev => ({
      ...prev,
      score: newScore,
      completed: isLastQuestion
    }));

    if (!isLastQuestion) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(null);
    }
  };

  const resetQuiz = async () => {
    setQuizState({
      loading: true,
      error: null,
      completed: false,
      score: 0
    });
  
    try {
      const response = await fetch(
        `${import.meta.env.VITE_CHATBOT_API_URL}/api/v1/quiz`
      );
      const data = await response.json();
      
      if (!data.questions) {
        throw new Error('No questions in response');
      }
  
      setQuestions(data.questions);
      setCurrentQuestion(0);
      setQuizState({
        loading: false,
        error: null,
        completed: false,
        score: 0
      });
    } catch (error) {
      setQuizState(prev => ({
        ...prev,
        loading: false,
        error: error.message
      }));
    }
  };

  const renderContent = () => {
    if (quizState.loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse">Loading quiz questions...</div>
        </div>
      );
    }

    if (quizState.error) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-red-400">
          <div className="mb-4">Error loading quiz:</div>
          <div className="mb-4 text-center px-4">{quizState.error}</div>
          <button
            onClick={resetQuiz}
            className="bg-[#4285f4] text-white px-4 py-2 rounded-lg hover:bg-[#3367d6]"
          >
            Retry
          </button>
        </div>
      );
    }

    if (!questions.length) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          No quiz questions available. Try again later.
        </div>
      );
    }

    if (quizState.completed) {
      return (
        <div className="bg-[rgba(20,30,60,0.5)] p-8 rounded-xl text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-[#4285f4] to-[#a855f7] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold">{quizState.score}/{questions.length}</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
          <button 
            onClick={resetQuiz}
            className="bg-[#4285f4] text-white px-6 py-3 rounded-lg hover:bg-[#3367d6]"
          >
            Try Again
          </button>
        </div>
      );
    }

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const currentQ = questions[currentQuestion];

    return (
      <>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#4285f4] to-[#a855f7] bg-clip-text text-transparent">
            Financial Literacy Quiz
          </h1>
          <div className="flex items-center justify-between mt-6">
            <span className="text-sm">Question {currentQuestion + 1}/{questions.length}</span>
            <div className="flex-1 mx-4 h-2 bg-gray-800 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-[#4285f4] to-[#a855f7] rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-sm">{Math.round(progress)}%</span>
          </div>
        </div>

        <div className="bg-[rgba(20,30,60,0.5)] p-6 rounded-xl mb-6">
          <h2 className="text-xl font-medium mb-6">{currentQ.question}</h2>
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedOption === index 
                    ? 'bg-[#4285f4] text-white' 
                    : 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]'
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                    selectedOption === index ? 'border-white bg-white text-[#4285f4]' : 'border-gray-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[rgba(255,255,255,0.1)]'
            }`}
          >
            <ArrowLeft size={16} />
            Previous
          </button>
          
          <button 
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg ${
              selectedOption === null 
                ? 'bg-gray-700 cursor-not-allowed' 
                : 'bg-[#4285f4] hover:bg-[#3367d6]'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            <ArrowRight size={16} />
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#0c1126] text-white flex flex-col">
      {/* Header remains same as previous example */}
      <div className="max-w-3xl mx-auto w-full px-4 py-8 flex-1 flex flex-col">
        {renderContent()}
      </div>
    </div>
  );
};

export default FinVerseQuiz;