import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/HeroSection/1d2f46f939171fc08bc0598bcbdc3ec6.gif';

const WaveAnimation = () => (
 <div className="absolute bottom-0 left-0 w-full">
  {/* Animated Foreground Wave */}
  <motion.svg 
    viewBox="0 0 1440 120" 
    className="w-full h-32 relative z-20"
    preserveAspectRatio="none"
    style={{ display: 'block' }}
  >
    <motion.path 
      fill="#FAF9F6" 
      d="M0,64 
        C180,120 280,0 480,64 
        C680,128 750,32 960,64 
        C1170,96 1320,0 1440,48 
        L1440,120 L0,120 Z"
      animate={{
        d: [
          "M0,64 C180,120 280,0 480,64 C680,128 750,32 960,64 C1170,96 1320,0 1440,48 L1440,120 L0,120 Z",
          "M0,64 C180,32 280,96 480,64 C680,32 750,96 960,64 C1170,32 1320,96 1440,48 L1440,120 L0,120 Z",
          "M0,64 C180,120 280,0 480,64 C680,128 750,32 960,64 C1170,96 1320,0 1440,48 L1440,120 L0,120 Z"
        ]
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut"
      }}
    />
  </motion.svg>

  {/* Background Static Wave with Shadow */}
  <div className="absolute bottom-0 left-0 right-0 transform translate-y-1 z-10">
    <svg
      viewBox="0 0 1440 320"
      className="w-full block"
      preserveAspectRatio="none"
      style={{
        filter: 'drop-shadow(0px -2px 1px rgba(250, 249, 246, 0.3))',
        marginBottom: '-2px'
      }}
    >
      <path
        fill="#FAF9F6"
        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
</div>
);

const FloatingElement = ({ position, delay = 0 }) => (
  <motion.div
    className={`absolute ${position} bg-white/10 backdrop-blur-sm p-4 rounded-xl hidden lg:block`}
    animate={{ y: position.includes('top') ? [0, -10, 0] : [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity, delay }}
  >
    <div className={`h-2 w-16 ${position.includes('top') ? 'bg-blue-400' : 'bg-purple-400'} rounded-full`}></div>
    <div className={`h-2 w-12 ${position.includes('top') ? 'bg-purple-400' : 'bg-blue-400'} rounded-full mt-2`}></div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={banner1} 
          alt="SEO Analytics Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B45]/80 to-[#000033]/90"></div>
      </div>

      {/* Animated Wave */}
      <WaveAnimation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-200px)]">
          {/* Content */}
          <div className="w-full lg:w-2/3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                The Next Era of SEO
                <br />
                Excellence Begins Here
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Transform your online presence with data-driven SEO strategies that deliver measurable results
              </p>
              
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-greenColor rounded-full text-customBodyColor font-medium text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <FloatingElement position="top-1/4 left-10" />
            <FloatingElement position="bottom-1/4 right-10" delay={0.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;