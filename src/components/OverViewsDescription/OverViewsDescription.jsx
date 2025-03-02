import { motion } from 'framer-motion';
import React from 'react';
import bottleImage from '../../assets/bottle.png'; // Update with your bottle image path

const OverViewsDescription = () => {
  return (
    <div className="min-h-screen bg-[#FDF6F0] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#E8D6CB] rounded-3xl p-8">
              <img 
                src={bottleImage} 
                alt="Premium Liquid Product" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Unlock the Secrets of Our Premium Liquid Treasures
            </motion.p>

            <motion.h2 
              className="text-5xl font-serif text-[#4A2F1C]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Crafting<br />
              Liquid
            </motion.h2>

            <motion.p 
              className="text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Dive into the Alluring World of Our Liquid Masterpieces. Each bottle is a testament to our unwavering commitment to quality
            </motion.p>

            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Elevate Your Everyday with Our Exceptional Liquid Offerings. From the moment you encounter our products
            </motion.p>

            {/* <motion.a
              href="#"
              className="text-blue-600 hover:text-blue-700 inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Discover the Allure of Our Liquid Wonders
            </motion.a> */}

            <motion.button
              className="bg-yellow-400 text-[#4A2F1C] px-8 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>

        {/* <motion.p 
          className="text-center text-gray-600 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          Unveiling the Artistry of Our Liquid Creations
        </motion.p> */}
      </div>
    </div>
  );
};

export default OverViewsDescription; 