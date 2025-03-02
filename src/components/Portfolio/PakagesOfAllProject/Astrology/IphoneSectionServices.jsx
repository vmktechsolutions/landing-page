import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../../../assets/portfolio/1 (3) (1).png';
import img2 from '../../../../assets/portfolio/16.png';
import img3 from '../../../../assets/portfolio/20 - chat (1).png';
import img4 from '../../../../assets/portfolio/20 - call.png';
import img5 from '../../../../assets/portfolio/30.jpg';
import img6 from '../../../../assets/portfolio/109.png';

const screens = [
  {
    id: 1,
    title: "FortuneTalk",
    description: "The gateway to your astrological journey on FortuneTalk. Explore daily horoscopes, personalized predictions, and cosmic insights designed to guide your destiny.",
    features: [
      "Daily & weekly horoscope updates",
      "Personalized astrology insights",
      "Live chat with astrologers",
      "Zodiac-based community discussions"
    ],
    image: img1
  },
  {
    "id": 2,
    "title": "Home Page",
    "description": "Your daily destination for astrological insights, personalized horoscopes, and cosmic guidance. Stay connected with the universe and uncover what the stars have in store for you.",
    "features": [
        "Daily & weekly horoscope updates",
        "Personalized astrological insights",
        "Zodiac compatibility checker",
        "Live astrology sessions & expert advice"
    ],
    "image": img3
},
  {
    "id": 3,
    "title": "Live Streaming",
    "description": "Experience real-time astrology sessions with expert astrologers. Get instant insights, live tarot readings, and personalized guidance on your life’s journey.",
    "features": [
        "Live astrology consultations",
        "Instant tarot and palm readings",
        "Ask questions & get real-time answers",
        "Join interactive astrology sessions"
    ],
    "image": img2
},
{
    "id": 4,
    "title": "Call",
    "description": "Connect with expert astrologers for personalized guidance. Get real-time insights and answers to your life’s questions through voice consultations.",
    "features": [
        "One-on-one astrology consultations",
        "Instant connection with experts",
        "Call history & session recordings",
        "Secure & private conversations"
    ],
    "image": img4
},{
    "id": 5,
    "title": "Ecommerce",
    "description": "Discover a curated marketplace for astrology-related products, from healing crystals to personalized horoscope reports. Shop with confidence and enhance your spiritual journey.",
    "features": [
        "Wide range of spiritual & astrology products",
        "Personalized horoscope & birth chart reports",
        "Secure payment options",
        "Exclusive offers & discounts"
    ],
    "image": img5
},
{
    "id": 6,
    "title": "Course",
    "description": "Learn astrology from expert astrologers with structured courses. Gain deep insights into horoscopes, tarot reading, numerology, and Vedic astrology through interactive lessons.",
    "features": [
        "Beginner to advanced astrology courses",
        "Video lessons from expert astrologers",
        "Certificate upon course completion",
        "Interactive quizzes & live Q&A sessions"
    ],
    "image": img6
}
];

const IPhoneMockup = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentScreen((prev) => (prev + 1) % screens.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
      <h1 className='text-center text-customBodyColor font-bold p-6 text-5xl'>Our Feature Astrology App Product</h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto p-4 gap-6">
        {/* Left side - iPhone Mockup */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[300px] h-[600px] bg-gray-800 rounded-[50px] p-4 shadow-xl">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full rounded-[35px] overflow-hidden bg-white">
              <img 
                src={screens[currentScreen].image}
                alt={screens[currentScreen].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Right side - Screen Information */}
        <div className="w-full md:w-1/2 space-y-6 overflow-hidden text-center md:text-left">
          <div className={`transition-all duration-500 ${
            isAnimating 
              ? 'opacity-0 transform translate-y-8' 
              : 'opacity-100 transform translate-y-0'
          }`}>
            <h2 className="text-3xl font-bold animate-title">
              {screens[currentScreen].title}
            </h2>
            <p className="text-lg text-gray-600 mt-4 animate-content">
              {screens[currentScreen].description}
            </p>
            
            <div className="space-y-4 mt-8 ">
              <h3 className="text-xl font-semibold animate-subtitle">Key Features:</h3>
              <ul className="space-y-2">
                {screens[currentScreen].features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-2 animate-feature"
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      opacity: 0,
                      animation: 'feature-in 0.6s ease-out forwards'
                    }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={prevScreen}
              disabled={isAnimating}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-sm text-gray-500">
              {currentScreen + 1} / {screens.length}
            </span>
            <button
              onClick={nextScreen}
              disabled={isAnimating}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes title-in {
            0% { transform: translateY(-20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          @keyframes content-in {
            0% { transform: translateX(20px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          @keyframes subtitle-in {
            0% { transform: translateY(10px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          @keyframes feature-in {
            0% { transform: translateX(-10px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          .animate-title {
            animation: title-in 0.6s ease-out;
          }

          .animate-content {
            animation: content-in 0.6s ease-out 0.2s both;
          }

          .animate-subtitle {
            animation: subtitle-in 0.6s ease-out 0.3s both;
          }

          .animate-feature {
            animation: feature-in 0.6s ease-out forwards;
          }

          @media (max-width: 768px) {
            .animate-title {
              font-size: 2rem; /* Adjust title size */
            }
            .animate-content {
              font-size: 1rem; /* Adjust content size */
            }
            .animate-subtitle {
              font-size: 1.25rem; /* Adjust subtitle size */
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default IPhoneMockup;