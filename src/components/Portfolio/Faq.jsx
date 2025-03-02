import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border rounded-lg p-4 cursor-pointer" onClick={onClick}>
    <div className="flex justify-between items-start gap-4">
      <div>
        <h3 className="font-medium text-gray-900 mb-2">{question}</h3>
        {isOpen && (
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {answer}
          </p>
        )}
      </div>
      <div className="text-gray-400">
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
    </div>
  </div>
);

const ProfileCard = () => (
  <div className="bg-green-50 rounded-lg p-6 relative">
    {/* Decorative circles */}
    <div className="absolute top-4 right-4 w-12 h-12 bg-green-100 rounded-full opacity-50" />
    <div className="absolute -top-8 -right-8 w-24 h-24 bg-green-100 rounded-full opacity-25" />
    
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-700">
        S
      </div>
      <div>
        <h3 className="font-medium text-gray-900">Sax Dakhlpane</h3>
        <p className="text-sm text-gray-600 mt-1">
          Product Info and Form Troubleshooting Representative Express
        </p>
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide a comprehensive range of software development services."
    },
    {
      question: "How long does a typical project take?",
      answer: "The duration of a project depends on the scope and complexity of the software requirements."
    },
    {
      question: "Do you offer maintenance and support?",
      answer: "Yes, we provide comprehensive maintenance and support services to ensure the ongoing stability."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ Column */}
        <div>
          <h2 className="text-2xl font-medium mb-8">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Profile Column */}
        <div className="mt-8 md:mt-16">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;