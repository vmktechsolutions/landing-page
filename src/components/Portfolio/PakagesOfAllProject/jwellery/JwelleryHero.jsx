import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import banner1 from "../../../../assets/HeroSection/c2ec08004918b0f707853ef8b85f03be - ROTATE - Videobolt.net.mp4";
import banner2 from "../../../../assets/HeroSection/c2ec08004918b0f707853ef8b85f03be - ROTATE - Videobolt.net.mp4";

const GameHero = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari Browser
    const isSafariBrowser =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#FAF9F6] mt-16">
      {/* Background Media */}
      <div className="absolute inset-0">
        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[0px]"></div>

        {isSafari ? (
          <img
            src={banner2}
            alt="Safari Background"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={banner1} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Curved Bottom Shape */}
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
        fill="#FFFFFF"
        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full lg:w-2/3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white max-w-8xl">
              Innovative jewellery 
              <br/>       
              Solutions  Website & App Development for jewellery Brands  
                   </h1>
              <p className="text-xl text-white mb-8 max-w-6xl mx-auto">
                Empower your astrological practice with our suite of AI-powered
                tools and cloud-based solutions. Transform traditional astrology
                into a digital experience.
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
            <motion.div
              className="absolute top-1/4 left-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="h-2 w-16 bg-green-400 rounded-full"></div>
              <div className="h-2 w-12 bg-yellow-400 rounded-full mt-2"></div>
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 right-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl hidden lg:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <div className="h-2 w-12 bg-yellow-400 rounded-full"></div>
              <div className="h-2 w-16 bg-green-400 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHero;
