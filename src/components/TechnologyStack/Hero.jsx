// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import bgpic from "../../assets/image-removebg-preview (6) 1.png";
// import bgpic3 from "../../assets/HeroSection/Technology.webm";
// import bgpic4 from "../../assets/HeroSection/35b47e00498aa77ba00f2aa03b1cf73a.gif";
// import arrow from "../../assets/Vector.png";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);
  
//   const techSolutions = [
//     "App Development",
//     "Web Development",
//     "SEO Services",
//     "Cloud Solutions",
//     "AI Integration",
//     "Digital Marketing",
//     "IoT Solutions",
//     "Blockchain Tech"
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const handleTyping = () => {
//       const currentText = techSolutions[currentIndex];
      
//       if (!isDeleting) {
//         // Typing
//         if (displayText.length < currentText.length) {
//           setDisplayText(currentText.slice(0, displayText.length + 1));
//           setTypingSpeed(150);
//         } else {
//           // Start deleting after a pause
//           setTimeout(() => {
//             setIsDeleting(true);
//             setTypingSpeed(100);
//           }, 1500);
//         }
//       } else {
//         // Deleting
//         if (displayText.length > 0) {
//           setDisplayText(displayText.slice(0, -1));
//           setTypingSpeed(50);
//         } else {
//           setIsDeleting(false);
//           setCurrentIndex((prev) => (prev + 1) % techSolutions.length);
//         }
//       }
//     };

//     const timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [displayText, isDeleting, currentIndex, techSolutions]);

//   // Particle animation configuration
//   const particles = Array.from({ length: 20 });

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="pt-[2.5rem] md:pt-[4.5rem] flex flex-col lg:flex-row justify-between items-center lg:items-start relative overflow-hidden"
//     >
//       {/* Left Section */}
//       <motion.div
//         className="w-full lg:w-1/2 relative flex flex-col justify-center items-center lg:items-start px-4 sm:px-8 lg:px-12 py-8 lg:py-16"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//       >
//         {/* Text Content Container */}
//         <div className="relative w-full max-w-2xl">
//           <motion.div
//             className="absolute -inset-1 bg-gradient-to-r from-white to-white blur-xl"
//             animate={{
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />

//           <motion.h1
//             className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-customBodyColor max-w-2xl lg:max-w-2xl text-center lg:text-left mb-2 p-2"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.2 }}
//           >
//             <span className="bg-gradient-to-r from-customBodyColor to-blue-600 text-transparent bg-clip-text inline-block pb-5">
//             Powerful Technology Solutions with <br/>{" "}
//               <span className="text-[#2726B6] inline-block min-w-[2ch]">
//                 {displayText}
//                 <span className="animate-pulse">|</span>
//               </span>
//             </span>
//           </motion.h1>

//           <motion.h4
//             className="relative text-lg sm:text-xl lg:text-md font-light text-[#5D6368] max-w-xl text-center lg:text-left mb-10"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.4 }}
//           >
//           Empowering businesses with next-gen technology that transforms ideas into reality, driving operational efficiency, scalability, and long-term success.         </motion.h4>

//           {/* Button Container */}
//           <motion.div
//             className="relative w-full flex justify-center lg:justify-start"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.6 }}
//           >
//             <motion.button
//               className="relative flex items-center justify-center font-medium bg-custom-gradient w-64 sm:w-72 h-12 sm:h-14 rounded-full text-customBodyColor text-sm sm:text-base group overflow-hidden shadow-lg shadow-blue-500/20"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 to="/contact" className="relative z-10 transition-colors group-hover:text-customBodyColor">
//                Let's Discuss Project
//               </Link>

//               <motion.img
//                 className="absolute right-7 top-2/5 transform -translate-y-1/2"
//                 src={arrow}
//                 alt="Arrow"
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               />

//               {/* Button Gradient Animation */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
//                 animate={{
//                   x: ["-100%", "100%"],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               />
//             </motion.button>
//           </motion.div>

//           {/* Decorative Elements */} 
//           <motion.div
//             className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square"
//             animate={{
//               background: [
//                 "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 50%)",
//                 "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0) 50%)",
//                 "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 50%)"
//               ],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         </div>
//       </motion.div>

//       {/* Right Section */}
//      <motion.div
//                  className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-8 lg:px-12 py-8 lg:py-16 relative"
//                  initial={{ x: 100, opacity: 0 }}
//                  animate={{ x: 0, opacity: 1 }}
//                  transition={{ duration: 0.3, ease: "easeOut" }}
//                >
//                  {/* Video Container */}
//                  <motion.div className="relative w-full max-w-lg">
//                    {/* Video Element */}
//                    <motion.video
//                      autoPlay
//                      loop
//                      muted
//                      className="w-full h-[28rem] object-cover rounded-full relative z-10 shadow-2xl shadow-blue-500"
//                      whileHover={{ scale: 1.05 }}
//                      transition={{ duration: 0.3 }}
//                    >
//                      <source src={bgpic3} type="video/webm" />
//                    </motion.video>
         
//                    {/* Glow Effect */}
//                    <motion.div
//                      className="absolute -inset-4  blur-2xl -z-10"
//                      animate={{ opacity: [0.3, 0.5, 0.3] }}
//                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                    />
//                  </motion.div>
//                </motion.div>
//     </motion.div>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgpic from "../../assets/image-removebg-preview (6) 1.png";
import bgpic3 from "../../assets/HeroSection/Technology.webm";
import bgpic4 from "../../assets/HeroSection/35b47e00498aa77ba00f2aa03b1cf73a.gif";
import arrow from "../../assets/Vector.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isSafari, setIsSafari] = useState(false);
  
  const techSolutions = [
    "App Development",
    "Web Development",
    "SEO Services",
    "Cloud Solutions",
    "AI Integration",
    "Digital Marketing",
    "IoT Solutions",
    "Blockchain Tech"
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = techSolutions[currentIndex];
      
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(100);
          }, 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % techSolutions.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, techSolutions]);

  const particles = Array.from({ length: 20 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-[2.5rem] md:pt-[4.5rem] flex flex-col lg:flex-row justify-between items-center lg:items-start relative overflow-hidden"
    >
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 relative flex flex-col justify-center items-center lg:items-start px-4 sm:px-8 lg:px-12 py-8 lg:py-16"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Text Content Container */}
        <div className="relative w-full max-w-2xl">
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-white to-white blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.h1
            className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-customBodyColor max-w-2xl lg:max-w-2xl text-center lg:text-left mb-2 p-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-customBodyColor to-blue-600 text-transparent bg-clip-text inline-block pb-5">
            Powerful Technology Solutions with <br/>{" "}
              <span className="text-[#2726B6] inline-block min-w-[2ch]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </motion.h1>

          <motion.h4
            className="relative text-lg sm:text-xl lg:text-md font-light text-[#5D6368] max-w-xl text-center lg:text-left mb-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
          Empowering businesses with next-gen technology that transforms ideas into reality, driving operational efficiency, scalability, and long-term success.
          </motion.h4>

          {/* Button Container */}
          <motion.div
            className="relative w-full flex justify-center lg:justify-start"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
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
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Video/Image Container */}
        <motion.div className="relative w-full max-w-lg">
          {isSafari ? (
            <motion.img
              src={bgpic4}
              alt="Technology Animation"
              className="w-full h-[28rem] object-cover rounded-full relative z-10 shadow-2xl shadow-blue-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.video
              autoPlay
              loop
              muted
              className="w-full h-[28rem] object-cover rounded-full relative z-10 shadow-2xl shadow-blue-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <source src={bgpic3} type="video/webm" />
            </motion.video>
          )}
         
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-4 blur-2xl -z-10"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;