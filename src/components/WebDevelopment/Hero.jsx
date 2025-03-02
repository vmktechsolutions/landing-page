import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgpic3 from "../../assets/HeroSection/appdevelopement.webm";
import bgpic4 from "../../assets/HeroSection/Optimize Oracle Query Using the Best & Simplest Techniques.gif";
import arrow from "../../assets/Vector.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    controls.start({
      opacity: [0.3, 0.5, 0.3],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  const particles = Array.from({ length: 20 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-[2.5rem] md:pt-[4.5rem] flex flex-col lg:flex-row justify-between items-center lg:items-start relative overflow-hidden bg-white"
    >
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 relative flex flex-col justify-center items-center lg:items-start px-4 sm:px-8 lg:px-12 py-8 lg:py-16"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Text Content Container */}
        <div className="relative w-full max-w-2xl">
          <motion.div
            className="absolute -inset-1 blur-xl"
            animate={controls}
          />

          <motion.h1
            className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-customBodyColor max-w-2xl lg:max-w-xl text-center lg:text-left mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-customBodyColor to-blue-600 text-transparent bg-clip-text inline-block pb-5">
              Driving Growth Through Powerful Web Development
            </span>
          </motion.h1>

          <motion.h4
            className="relative text-lg sm:text-xl lg:text-md font-light text-[#5D6368] max-w-xl text-center lg:text-left mb-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Codes & Marketing provides innovative software, mobile apps, and data-driven marketing to elevate your brand with secure, high-performance solutions.
          </motion.h4>

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

          {/* Decorative Elements */}
          <motion.div
            className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square"
            animate={{
              background: [
                "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 50%)",
                "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0) 50%)",
                "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 50%)"
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-8 lg:px-12 py-8 lg:py-16 relative"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div className="relative w-full max-w-lg">
          {isSafari ? (
            <motion.img
              src={bgpic4}
              alt="Safari Compatible Animation"
              className="w-full h-[28rem] object-cover"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
          ) : (
            <motion.video
              key="video"
              className="w-full h-[28rem] object-cover  relative z-10 shadow-2xl shadow-white"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={bgpic3} type="video/webm" />
              <p className="text-center text-red-500">Your browser does not support the video tag.</p>
            </motion.video>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

//  <motion.div
//         className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-8 lg:px-12 py-8 lg:py-16 relative"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         {/* Video Container */}
//         <motion.div className="relative w-full max-w-lg">
//           {/* Video Element */}
//           <motion.video
//             autoPlay
//             loop
//             muted
//             className="w-full h-[28rem] object-cover rounded-full relative z-10 shadow-2xl shadow-blue-500/20"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <source src={bgpic3} type="video/webm" />
//           </motion.video>

//           {/* Glow Effect */}
//           <motion.div
//             className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10"
//             animate={{ opacity: [0.3, 0.5, 0.3] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </motion.div>
//       </motion.div>