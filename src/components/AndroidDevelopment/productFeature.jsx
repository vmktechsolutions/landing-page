import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAndroid, 
  FaRocket, 
  FaShieldAlt, 
  FaMobileAlt,
  FaSync,
  FaUserCheck
} from 'react-icons/fa';

const ProductFeature = () => {
  const features = [
    {
      title: 'Native Android Development',
      description: 'Harness the full power of Android platform with native development for optimal performance and seamless user experience.',
      icon: FaAndroid
    },
    {
      title: 'Rapid Performance',
      description: 'Lightning-fast app performance with optimized code and efficient resource management for smooth user interactions.',
      icon: FaRocket
    },
    {
      title: 'Robust Security',
      description: 'Advanced security measures including encryption, secure authentication, and protection against mobile threats.',
      icon: FaShieldAlt
    },
    {
      title: 'Responsive Design',
      description: 'Adaptive layouts that work flawlessly across all Android devices, screen sizes, and orientations.',
      icon: FaMobileAlt
    }
  ];

  return (
    <div className="relative py-10 px-4 overflow-hidden flex items-center justify-center min-h-[600px] bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20"></div>

      <div className="relative w-full max-w-7xl mx-auto">
      
        <div className="text-center mb-8">
        <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-customBodyColor via-blue-600 to-customBodyColor bg-[length:200%_auto] animate-background-pan bg-clip-text text-transparent mb-3 pb-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
          Android App Development Features
          </motion.h1>
          <p className="text-lg text-customFontSmall/80 max-w-5xl mx-auto">
          Powerful native Android solutions with cutting-edge features to deliver exceptional mobile experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-2xl border border-[#F8F8F8] transition-all duration-300 hover:scale-105 w-full text-center flex flex-col items-center min-h-[320px] justify-between hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300  to-transparent"></div>
              <div className="relative flex flex-col items-center h-full justify-between py-4">
                <div className="w-24 h-24 bg-custom-gradient rounded-full flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-all duration-300 transform group-hover:rotate-6">
                  <feature.icon className="w-12 h-12 transform group-hover:-rotate-6 transition-transform duration-300" />
                </div>
                <div className="flex flex-col flex-grow justify-center">
                  <h3 className="text-lg font-bold text-[#220176] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#5D6368] leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;