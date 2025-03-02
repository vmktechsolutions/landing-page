import React from "react";
import { motion } from 'framer-motion';
import laptopImg from '../../../../assets/Jewellery/DSC08053-removebg-preview.png';
import { Link } from 'react-router-dom';

const JwellerySections = () => {
  return (
    <div className="w-full py-12 md:py-0 hidden lg:block">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
        <motion.div
  className="w-full md:w-1/2 hidden md:block"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <img
    src={laptopImg}
    alt="Digital Excellence"
    className="w-full max-w-6xl mx-auto"
  />
</motion.div>


          {/* Right side - Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-blue-700 mb-4 md:mb-6 leading-tight">
            Gleaming Delight Gold Bangles
            </h2>

            <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8">
              Seamlessly blending technology and strategy for success.
            </p>

            <motion.div
              className="relative w-full flex justify-center lg:justify-start"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="relative flex items-center justify-center font-medium bg-greenColor w-40 sm:w-40 h-12 sm:h-14 rounded-full text-gray-900 text-sm sm:text-base group overflow-hidden shadow-2xl hover:bg-greenColor transition-all duration-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="relative z-10 transition-colors group-hover:text-customBodyColor"
                >
                  Explore More
                </Link>

                {/* <motion.img
                                    className="absolute right-7 top-2/5 transform -translate-y-1/2"
                                    src={arrow}
                                    alt="Arrow"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  /> */}

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
        </div>
      </div>
    </div>
  );
};

export default JwellerySections;
