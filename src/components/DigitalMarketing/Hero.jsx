import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import vrImage from '../../assets/Banner/pixelcut-export (1).webp';
import { FiArrowRight } from 'react-icons/fi';
import arrow from "../../assets/Vector.png";


const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-[2.5rem] md:pt-[5.5rem] py-36 text-center md:text-left  ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pt-[2.5rem] md:pt-[4rem]">
        <img 
          src={vrImage} 
          alt="Background" 
          className="w-full h-[45rem] object-cover"
        />
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-600/90"></div> */}
      </div>

      {/* White curved shape at bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-white" 
        style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%'
        }}>
      </div> */}

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-8">
              Unlock Of the Future of Digital Marketing
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-xl leading-relaxed">
              Leading your brand into the future with advanced digital
              marketing strategies.
            </p>

            {/* Button Container */}
          <motion.div
                      className="relative w-full flex justify-center lg:justify-start"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <motion.button
                        className="relative flex items-center justify-center font-medium bg-custom-gradient w-64 sm:w-72 h-12 sm:h-14 rounded-full text-customBodyColor text-sm sm:text-base group overflow-hidden shadow-lg shadow-blue-500/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to="/contact" className="relative z-10 transition-colors group-hover:text-customBodyColor">
                         Let's Discuss Project
                        </Link>
          
                        <motion.img
                          className="absolute right-7 top-2/5 transform -translate-y-1/2"
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
          </motion.div>

          {/* Right content - Empty space for balance */}
          <div className="flex-1"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
      <div className="absolute bottom-32 left-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 -ml-48"></div>
    </div>
  );
};

export default Hero;