import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/Jewellery/WhatsApp Video 2025-02-13 at 16.17.42_29f2c9f2 - ROTATE - Videobolt.net.mp4';

const JewellerySections2 = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-6 md:px-0 lg:px-0 py-10">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0 px-1 lg:px-16 ">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-3xl md:text-xl lg:text-6xl font-bold text-blue-700 mb-4 leading-tight max-w-2xl">
            Build Your Jewellery Brand with Us
          </h2>

          <p className="text-gray-600 text-sm sm:text-lg md:text-md mb-6 max-w-xl">
            Elevate your style with our finely crafted gold, diamond, and silver jewellery.  
            We provide custom jewellery design, restoration, and premium craftsmanship services.
          </p>

          <motion.div
            className="flex justify-center sm:justify-start"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="flex items-center justify-center font-medium bg-custom-gradient w-48 h-12 rounded-full text-customBodyColor text-sm sm:text-base hover:bg-green-600 transition-all duration-150"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="relative z-10">
                Explore Our Services
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Section - Video instead of Image */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <video
          src={img1}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-sm md:max-w-lg lg:max-w-3xl "
        />
      </div>
    </div>
  );
};

export default JewellerySections2;
