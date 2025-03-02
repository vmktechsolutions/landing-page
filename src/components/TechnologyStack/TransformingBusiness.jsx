import React from 'react';
import { motion } from 'framer-motion';
import android from '../../assets/Icons/android.png';
import flutter from '../../assets/Icons/flutter2.png';
import react from '../../assets/Icons/React_native_logo.png';

const TransformingBusiness = () => {
  const techCards = [
    {
      icon: android,
      title: "Android",
      description: "Our Android Development Services Are Focused On Creating User-Friendly, Feature-Rich Applications, We Blend Creativity With Technical Expertise To Help Your Brand Drive On The Android Platform"
    },
    {
      icon: react,
      title: "React",
      description: "Our React Development Services Are Focused On Creating User-Friendly, Feature-Rich Applications, We Blend Creativity With Technical Expertise To Help Your Brand Drive On The React Platform"
    },
    {
      icon: flutter,
      title: "Flutter",
      description: "Our Flutter Development Services Are Focused On Creating User-Friendly, Feature-Rich Applications, We Blend Creativity With Technical Expertise To Help Your Brand Drive On The Android Platform"
    }
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F4FBF4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-customBodyColor bg-gradient-to-r from-customBodyColor to-blue-600 text-transparent bg-clip-text mb-4"
          >
            Transforming Your Business With Tech Innovations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Tech-driven solutions that fuel your business transformation and success.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {techCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white px-6 py-12 rounded-2xl shadow-lg border border-greenColor hover:shadow-xl transition-all duration-300 flex flex-col items-center" 
              style={{borderRadius : "40px"}}
            >
              <div className="flex flex-col items-center text-center w-full max-w-xs">
                <div className="mb-6 w-24 h-24 bg-white rounded-full shadow-xl p-4 flex items-center justify-center">
                  <img 
                    src={card.icon} 
                    alt={card.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TransformingBusiness;
