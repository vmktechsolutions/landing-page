import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import mobilePhone from '../../assets/vectorImage/Group 326.webp'; 
import arrow from "../../assets/Vector.png";

const OurSeoServices = () => {
  return (
    <div className="w-full py-8 sm:py-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-[#333] leading-tight mb-6 text-center md:text-left">
                Our SEO Services: Driving
                <br />
                Growth & Visibility Online
              </h2>
              
              <p className="text-gray-600 text-base sm:text-md mb-10 leading-relaxed text-center md:text-left">
                At Codes And Marketing, We Specialize In Delivering Comprehensive
                SEO Services Tailored To Meet The Unique Needs Of Your Business. Our
                Expert Team Uses A Combination Of On-Page, Off-Page, And Technical
                SEO Strategies To Improve Your Website's Search Engine Rankings,
                Increase Organic Traffic, And Enhance User Engagement. From
                Thorough Keyword Research To Optimizing Your Site For Local
                Searches, We Focus On Every Aspect Of SEO To Ensure Your Business
                Stands Out In The Competitive Digital Landscape.
              </p>

              <motion.div
                className="relative w-full flex justify-center lg:justify-start"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  className="relative flex items-center justify-center font-medium bg-greenColor w-64 sm:w-72 h-12 sm:h-14 rounded-full text-customBodyColor text-sm sm:text-base group overflow-hidden shadow-lg shadow-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact" 
                    className="relative z-10 transition-colors group-hover:text-customBodyColor"
                  >
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
                    className="absolute inset-0 bg-gradient-to-r from-[#00A9FF]/20 to-[#A259FF]/20"
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
          </div>

          {/* Right Content - Phone Display */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end -mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-[280px] sm:w-[320px] lg:w-[40rem]"
            >
              <div className="relative">
                <img
                  src={mobilePhone}
                  alt="Mobile Display"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSeoServices;
