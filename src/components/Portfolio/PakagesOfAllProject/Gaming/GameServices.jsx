import React from "react";
import { motion } from "framer-motion";
import laptopImg from "../../../../assets/vectorImage/image-removebg-preview (7).png";
import { Link } from "react-router-dom";
import arrow from "../../../../assets/Vector.png";

const GameServices = () => {
  return (
    <div className="w-full bg-white py-10 md:py-10 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left side - Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={laptopImg}
              alt="Digital Excellence"
              className="w-full h-auto object-contain max-w-lg"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-blue-700 mb-4 md:mb-6 leading-tight max-w-2xl">
            The Team of Proficient Game Developers Delivering Interactive and Immersive Gaming Solutions            </h2>

            <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8 max-w-2xl md:max-w-none">
              Seamlessly blending technology and strategy for success.
            </p>

            <motion.div
              className="relative w-full flex justify-center md:justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="relative flex items-center justify-center font-medium bg-custom-gradient w-40 sm:w-40 h-12 sm:h-14 rounded-full text-black text-sm sm:text-base group overflow-hidden shadow-lg hover:bg-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="relative z-10 transition-colors group-hover:text-black pr-1"
                >
                  Explore More
                </Link>

                {/* <motion.img
                  className="absolute right-7 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  src={arrow}
                  alt="Arrow"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                /> */}

                {/* Button Gradient Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20"
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

export default GameServices;