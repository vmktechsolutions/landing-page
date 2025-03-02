import React from "react";
import img1 from "../../assets/HeroSection/video.webm";
import img2 from "../../assets/HeroSection/Smiths Detection - Corsys — Explainer Video - Vidico __ Agency.gif"
import { motion } from "framer-motion"; 
import arrow from "../../assets/Vector.png";
import { Link } from "react-router-dom";
const Descriptions = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left side - Images */}
          <div className="w-full md:w-1/2">
          <video autoPlay loop muted className="w-full h-auto">
  <source src={img1} type="video/webm" /> 
</video>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-3xl font-medium text-gray-900 leading-tight">
              <span className="font-bold md:text-4xl">
                {" "}
                Codes and Marketing:
              </span>{" "}
              Your Trusted Partner for Cutting-Edge Web Development Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Looking for a reliable and affordable web development company to
              transform your online presence? Your search ends here! Codes and
              Marketing offers top-notch web development services designed to
              elevate your digital identity and help you stay ahead in a
              competitive marketplace. Whether you're launching a new website or
              optimizing an existing one, we're here to deliver impactful
              solutions tailored to your needs.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptions;
