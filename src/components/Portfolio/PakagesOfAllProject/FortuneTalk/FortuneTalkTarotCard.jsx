import { motion } from 'framer-motion';
import React from 'react';
import tarotCardImage from '../../../../assets/portfolio/Tarot_card.png'; // Update with your image path

const FortuneTalkTarot = () => {
  return (
    <div className="min-h-[500px] bg-[#FDF6F0] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Right Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#E8D6CB] rounded-3xl p-1">
              <img 
                src={tarotCardImage} 
                alt="FortuneTalk Tarot Readings" 
                className="w-full h-full"
              />
            </div>
          </motion.div>
          {/* Left Content */}
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
              Reveal the Mysteries of Your Future
            </motion.p>

            <motion.h2 
              className="text-5xl font-serif text-[#4A2F1C]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
             Tarot Readings
            </motion.h2>

            <motion.p 
              className="text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Gain deep insights and clarity into your life's path through accurate and intuitive tarot card readings.
            </motion.p>

            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Understand past influences, present challenges, and future possibilities with the wisdom of tarot cards.
            </motion.p>

            <motion.button
              className="bg-yellow-400 text-[#4A2F1C] px-8 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              Get a Tarot Reading
            </motion.button>
          </motion.div>

        
        </div>
      </div>
    </div>
  );
};

export default FortuneTalkTarot;
