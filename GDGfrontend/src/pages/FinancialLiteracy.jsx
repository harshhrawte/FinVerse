import React, { useState } from 'react';
import { 
  LightBulbIcon, 
  BookOpenIcon, 
  ChatBubbleLeftIcon, 
  AcademicCapIcon 
} from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FinancialLiteracyPage = () => {
  const [activeModule, setActiveModule] = useState(null);

  const learningModules = [
    {
      icon: <BookOpenIcon className="w-10 h-10 text-yellow-500" />,
      title: "Personal Finance Basics",
      description: "Learn fundamental concepts of budgeting, saving, and financial planning.",
      content: "Understand key financial principles including income management, expense tracking, creating emergency funds, and setting financial goals."
    },
    {
      icon: <ChatBubbleLeftIcon className="w-10 h-10 text-blue-500" />,
      title: "Investment Education",
      description: "Master investment strategies and understanding market dynamics.",
      content: "Explore different investment types, risk assessment, portfolio diversification, and long-term wealth building strategies."
    },
    {
      icon: <AcademicCapIcon className="w-10 h-10 text-green-500" />,
      title: "Advanced Financial Planning",
      description: "In-depth modules on retirement, taxes, and wealth management.",
      content: "Deep dive into retirement planning, tax optimization, estate planning, and creating sustainable financial strategies."
    }
  ];

  const handleModuleClick = (module) => {
    setActiveModule(activeModule === module ? null : module);
  };

  return (
    <div className="min-h-screen bg-[#0A1128] flex flex-col overflow-hidden text-white">
      <Header className="bg-blue-500 p-4 text-white" />
      
      <main className="flex-grow container mx-auto px-4 py-16 lg:px-16">
        <div className="text-center mb-16">
          <LightBulbIcon className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
            Financial Literacy Hub
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Empower yourself with comprehensive financial knowledge through interactive AI-driven learning modules.
          </p>
        </div>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {learningModules.map((module, index) => (
            <div 
              key={index} 
              onClick={() => handleModuleClick(module)}
              className={`
                bg-[#151F3A] p-6 rounded-xl border border-gray-800 
                hover:bg-[#1E2847] transition cursor-pointer
                ${activeModule === module ? 'ring-2 ring-yellow-500' : ''}
              `}
            >
              <div className="mb-4">{module.icon}</div>
              <h3 className="text-xl font-bold mb-4">{module.title}</h3>
              <p className="text-gray-400 mb-4">{module.description}</p>
              {activeModule === module && (
                <div className="text-sm text-gray-300 mt-4">
                  {module.content}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="bg-[#151F3A] rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
            Interactive Learning Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-400 mb-6">
                Our AI-powered platform adapts to your learning pace and financial background. Engage with interactive modules, quizzes, and personalized financial scenarios.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-3 text-yellow-500">✓</span> Personalized Learning Paths
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-yellow-500">✓</span> Real-world Financial Simulations
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-yellow-500">✓</span> Continuous Skill Assessment
                </li>
              </ul>
            </div>
            <div className="bg-[#0A1128] p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-yellow-500">Learning Progress</h4>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '65%'}}></div>
              </div>
              <p className="text-gray-400">65% of recommended modules completed</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
            Start Your Financial Education Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Unlock the power of financial knowledge and transform your financial future.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg transition">
            Begin Learning
          </button>
        </section>
      </main>

      <Footer className="bg-gray-800 text-white p-4" />
    </div>
  );
};

export default FinancialLiteracyPage;