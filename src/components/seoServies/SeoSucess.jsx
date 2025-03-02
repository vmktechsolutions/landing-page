import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import seoSuccessImage from '../../assets/HeroSection/Vidico __ Agency - Video & Animation in Melbourne, Australia.gif'; 
import arrow from "../../assets/Vector.png";

const SeoSuccess = () => {
  const successPoints = [
    "More Qualified Leads & Conversions",
    "Stronger Brand Credibility & Trust",
    "Higher Organic Rankings",
    "Increased Website Traffic"
  ];

  return (
    <div className="w-full py-16 sm:py-20  bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333] mb-6">
            The Power Of SEO For Success
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Illustration */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={seoSuccessImage}
                alt="SEO Success Illustration"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Right Side - Success Points */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              {successPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{scale : 1.05}}
                  transition={{ duration: 0.2, delay: index * 0.0 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D9D9D9]">
                    <p className="text-black/75 font-bold text-md">{point}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                className="relative w-full flex justify-center lg:justify-start"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  className="relative flex items-center justify-center font-medium bg-custom-gradient w-64 sm:w-52 h-12 sm:h-14 rounded-full text-customBodyColor text-sm sm:text-base group overflow-hidden shadow-lg shadow-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact" 
                    className="relative z-10 transition-colors group-hover:text-customBodyColor"
                  >
                    Connect Now
                  </Link>

                  <motion.img
                    className="absolute right-6 top-2/5 transform -translate-y-1/2"
                    src={arrow}
                    alt="Arrow"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />

                  {/* Button Gradient Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoSuccess;
