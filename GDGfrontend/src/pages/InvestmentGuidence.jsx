

import React, { useState } from 'react';
import { 
  ChartBarIcon, 
  ChartPieIcon, 
  SparklesIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InvestmentGuidancePage = () => {
  const [activeStrategy, setActiveStrategy] = useState(null);

  const investmentStrategies = [
    {
      icon: <ChartPieIcon className="w-12 h-12 text-green-400" />,
      title: "Personalized Portfolio",
      description: "Tailored investment strategies crafted to match your unique financial fingerprint.",
      details: "Our advanced AI analyzes your risk tolerance, financial goals, and market conditions to create a completely personalized investment approach that evolves with your life."
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-blue-400" />,
      title: "Intelligent Insights",
      description: "Real-time market analysis and predictive modeling.",
      details: "Leverage cutting-edge AI algorithms that process vast amounts of financial data, providing you with actionable insights and forward-looking investment recommendations."
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-purple-400" />,
      title: "Risk Management",
      description: "Advanced protection for your financial future.",
      details: "Sophisticated risk mitigation strategies that dynamically adjust your portfolio to minimize potential losses while maximizing growth opportunities."
    }
  ];

  const performanceData = [
    { 
      period: "1 Month", 
      return: "4.5%", 
      trend: "positive",
      icon: <CurrencyDollarIcon className="w-6 h-6 text-green-500" />
    },
    { 
      period: "3 Months", 
      return: "12.3%", 
      trend: "positive",
      icon: <CurrencyDollarIcon className="w-6 h-6 text-green-500" />
    },
    { 
      period: "1 Year", 
      return: "35.7%", 
      trend: "exceptional",
      icon: <CurrencyDollarIcon className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1128] via-[#0F2045] to-[#060C1B] text-white">
      <Header className="bg-opacity-20 backdrop-blur-md" />
      
      <main className="container mx-auto px-4 py-16 lg:px-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="relative">
            <ChartBarIcon className="mx-auto w-20 h-20 text-blue-500 mb-6 animate-pulse" />
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl -z-10 rounded-full"></div>
          </div>
          
          <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Intelligent Investment Guidance
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-xl leading-relaxed">
            Transform your financial future with AI-powered investment strategies that adapt, protect, and grow your wealth with unprecedented precision.
          </p>
        </section>

        {/* Strategies Section */}
        <section className="grid md:grid-cols-3 gap-8">
          {investmentStrategies.map((strategy, index) => (
            <div 
              key={index}
              onMouseEnter={() => setActiveStrategy(strategy)}
              onMouseLeave={() => setActiveStrategy(null)}
              className={`
                relative overflow-hidden rounded-2xl border transition-all duration-300
                ${activeStrategy === strategy 
                  ? 'border-blue-500 bg-[#1A2545] shadow-2xl scale-105' 
                  : 'border-gray-800 bg-[#151F3A] hover:border-gray-600'}
                transform hover:scale-105
              `}
            >
              <div className="p-8 relative z-10">
                <div className="mb-6">{strategy.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{strategy.title}</h3>
                <p className="text-gray-400 mb-4">{strategy.description}</p>
                
                {activeStrategy === strategy && (
                  <p className="text-sm text-gray-300 animate-fade-in">
                    {strategy.details}
                  </p>
                )}
              </div>
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </section>

        {/* Performance Section */}
        <section className="bg-[#151F3A] rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Performance Highlights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {performanceData.map((data, index) => (
              <div 
                key={index} 
                className="bg-[#0A1128] p-8 rounded-2xl text-center hover:scale-105 transition-transform"
              >
                <div className="flex justify-center items-center mb-4">
                  {data.icon}
                  <span className="ml-2 text-3xl font-bold text-green-500">{data.return}</span>
                </div>
                <p className="text-gray-400">{data.period} Return</p>
                {data.trend === 'exceptional' && (
                  <span className="mt-2 inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                    Exceptional Performance
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-8">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Your Financial Future Starts Here
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-300 text-xl">
            Unlock personalized investment strategies powered by cutting-edge AI technology.
          </p>
          
          <div className="flex justify-center space-x-4">
            <button className="
              px-10 py-4 rounded-full 
              bg-gradient-to-r from-blue-600 to-purple-600 
              hover:from-blue-700 hover:to-purple-700 
              transition-all duration-300 
              transform hover:-translate-y-1 
              shadow-2xl hover:shadow-blue-500/50
            ">
              Get Started
            </button>
            <button className="
              px-10 py-4 rounded-full 
              border border-gray-600 
              hover:bg-gray-800 
              transition-all duration-300
            ">
              Learn More
            </button>
          </div>
        </section>
      </main>

      <Footer className="bg-opacity-10 backdrop-blur-md" />
    </div>
  );
};

export default InvestmentGuidancePage;