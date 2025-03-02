import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaDatabase, FaCloud, FaCogs } from 'react-icons/fa';

const CodesCrousel = () => {
  const cards = [
    {
      id: 1,
      icon: <FaMobileAlt />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Advanced Tech Solutions',
      description: 'Transforming ideas into cutting-edge mobile and web applications with modern technology stack.'
    },
    {
      id: 2,
      icon: <FaDatabase />,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Data-Driven Solutions',
      description: 'Leveraging data analytics and insights to drive smarter business decisions and growth.'
    },
    {
      id: 3,
      icon: <FaCloud />,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Cloud Integration',
      description: 'Seamless cloud solutions for scalable and reliable infrastructure deployment.'
    },
    {
      id: 4,
      icon: <FaCogs />,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Custom Development',
      description: 'Tailored development solutions to meet your specific business requirements and goals.'
    }
  ];

  return (
    <div className="bg-[#F4FBF4] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4">
          Empowering Business Success With Cutting-Edge Technology Solutions At Codes And Marketing
        </h2>
        <p className="text-center text-gray-600 mb-2">
        </p>

        <div className="relative -mx-4 sm:mx-10">
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-4 sm:gap-6 lg:gap-12 mt-8 lg:mt-12 px-4 min-w-max mx-auto">
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-2xl w-[280px] sm:w-[320px] lg:w-[350px] hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col items-start">
                    <div className={`w-16 h-16 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-4`}>
                      <div className="text-3xl">{card.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-black/75">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-4 py-2 text-[#2726B6] text-sm font-medium hover:text-green-700 transition-colors flex items-center gap-2"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS to hide scrollbar */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CodesCrousel;
