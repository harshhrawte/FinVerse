import React from 'react';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  FingerPrintIcon, 
  ServerIcon 
} from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: <LockClosedIcon className="w-10 h-10 text-purple-500" />,
      title: "End-to-End Encryption",
      description: "Advanced encryption protocols protect your financial data at every stage of transmission and storage."
    },
    {
      icon: <FingerPrintIcon className="w-10 h-10 text-blue-500" />,
      title: "Biometric Authentication",
      description: "Multi-factor authentication with biometric verification ensures only you can access your account."
    },
    {
      icon: <ServerIcon className="w-10 h-10 text-green-500" />,
      title: "Secure Data Centers",
      description: "Your data is stored in geographically distributed, state-of-the-art secure data centers with 24/7 monitoring."
    }
  ];

  const complianceCertifications = [
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant",
    "GDPR & CCPA Approved"
  ];

  return (
    <div className="min-h-screen bg-[#0A1128] flex flex-col overflow-hidden text-white">
      <Header className="bg-blue-500 p-4 text-white" />
      
      <main className="flex-grow container mx-auto px-4 py-16 lg:px-16">
        <div className="text-center mb-16">
          <ShieldCheckIcon className="w-16 h-16 mx-auto mb-6 text-purple-500" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Advanced Security & Privacy
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Protecting your financial data with cutting-edge security technologies and rigorous privacy standards.
          </p>
        </div>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#151F3A] p-6 rounded-xl border border-gray-800 hover:bg-[#1E2847] transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="bg-[#151F3A] rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Compliance & Trust
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-4 text-purple-500">Certifications</h4>
              <ul className="space-y-3 text-gray-300">
                {complianceCertifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-3 text-purple-500">✓</span> {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0A1128] p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-4 text-purple-500">Zero Data Sharing Policy</h4>
              <p className="text-gray-400 mb-4">
                We never sell or share your personal financial information with third parties.
              </p>
              <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg">
                Privacy Guaranteed
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Your Financial Data, Your Control
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Experience unparalleled security and peace of mind with our comprehensive data protection strategies.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition">
            Learn More About Security
          </button>
        </section>
      </main>

      <Footer className="bg-gray-800 text-white p-4" />
    </div>
  );
};

export default SecurityPage;