import React from 'react';
import img1 from '../assets/Group 234.png';
import button from '../assets/button.png';

const QuestionItem = ({ question }) => {
  return (
    <div className="flex flex-col shadow-sm h-16 bg-white mt-4 rounded-custom2 relative transition-transform duration-300 hover:shadow-md">
      <p className="text-black text-sm md:text-xl font-light px-4 py-4">{question}</p>
      <div className="absolute top-6 right-3 md:top-4 md:right-4 h-4 w-4 md:h-8 md:w-8">
        <img src={button} alt="Expand button" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

const FreqQues = () => {
  const questions = [
    'How much experience does your team have?',
    'What industries do you specialize in?',
    'What is your project delivery timeline?',
    'What technologies do you use?',
    'Can you provide case studies or references?',
    'What is your pricing structure?',
    'Do you offer post-launch support?',
    'How do you ensure project quality?',
    'What is your approach to project management?'
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between mx-auto p-5">
      <div className="w-full md:w-2/3 px-4 md:px-16">
        <h1 className="text-customBodyColor text-3xl md:text-5xl font-semibold text-center md:text-left leading-tight">
          Frequently Asked Questions
        </h1>
        <div
          className="h-96 overflow-y-auto mt-2 p-1 "
          style={{
            overflowX: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollbarColor: 'transparent transparent',
          }}
        >
          {questions.map((question, index) => (
            <QuestionItem key={index} question={question} />
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 relative right-10 justify-center items-start mt-8 md:mt-0 hidden md:block">
        <img
          src={img1}
          alt="FAQs Illustration"
          className="h-auto max-w-full md:mt-14 md:mr-10"
        />
      </div>
    </div>
  );
};

export default FreqQues;
