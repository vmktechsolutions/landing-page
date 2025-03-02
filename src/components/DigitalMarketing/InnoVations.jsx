import React from 'react';
import { motion } from 'framer-motion';
import { BsChatDots, BsArrowRight } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';
import { IoMdTrendingUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import gif1 from '../../assets/HeroSection/495ed1996ab5177e2422d1b21569a7b0.gif';
// import arrow from '../../assets/icons/arrow.svg';
import arrow from "../../assets/Vector.png";
const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-greenColor/10 rounded-xl flex items-center justify-center">
      <Icon className="text-2xl text-greenColor" />
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2 text-customHeading">{title}</h3>
      <p className="text-customBodyColor leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const InnoVations = () => {
  const features = [
    {
      icon: BsChatDots,
      title: 'Enhanced Communication',
      description: 'Foster meaningful connections with your audience through strategic digital channels.'
    },
    {
      icon: RiTeamLine,
      title: 'Team Collaboration',
      description: 'Streamline workflows and boost productivity with integrated team solutions.'
    },
    {
      icon: IoMdTrendingUp,
      title: 'Growth Analytics',
      description: 'Track and optimize your digital performance with advanced analytics tools.'
    }
  ];

  return (
    <div className="w-full py-10 sm:py-20 px-4 sm:px-6 lg:px-0 relative ">
      <div className="absolute top-0 right-0 w-1/2 h-full lg:bg-black rounded-tl-[15rem]"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-center mb-8 lg:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-lg text-customHeading text-center leading-relaxed mb-8 lg:mb-12 text-[#021B79] tracking-wide">
                  Steering your business through the ever-changing digital world,
                  <br className="hidden lg:block" />
                  with innovation and strategy leading the way.
                </h2>
                <motion.div
                  className="relative w-full flex justify-center lg:justify-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    className="relative flex items-center justify-center font-medium bg-custom-gradient w-56 sm:w-64 lg:w-40 h-10 sm:h-12 lg:h-14 rounded-full text-customBodyColor text-xs sm:text-sm lg:text-base group overflow-hidden shadow-lg shadow-blue-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact" 
                      className="relative z-10 transition-colors group-hover:text-customBodyColor"
                    >
                      Explore Now
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
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 lg:pl-20 order-1 lg:order-2 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[40px_40px_0px_40px] sm:rounded-[80px_0px_0px_0px] lg:-mr-8">
                <img 
                  src={gif1} 
                  alt="Digital Innovation" 
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnoVations;