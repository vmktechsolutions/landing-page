// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import banner1 from "../../../../assets/Banner/ebc40a525684279646afa0080a0f10b8.mp4";
// import banner2 from "../../../../assets/HeroSection/ebc40a525684279646afa0080a0f10b8.gif";

// const GameHero = () => {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden bg-[#FAF9F6] mt-14">
//       {/* Background Video */}
//       <div className="absolute inset-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source src={banner1} type="video/webm" />
//           Your browser does not support the video tag.
//         </video>
//         {/* Dark Overlay */}
//         <div className="absolute inset-0  "></div>
//       </div>

//       {/* Curved Bottom Shape - Modified */}
//       <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
//         <svg
//           viewBox="0 0 1440 320"
//           className="w-full block"
//           preserveAspectRatio="none"
//           style={{
//             filter: 'drop-shadow(0px -1px 0px #FAF9F6)',
//             marginBottom: '-2px'
//           }}
//         >
//           <path
//             fill="#FFFFFF"
//             d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-32 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-200px)]">
//           {/* Content */}
//           <div className="w-full lg:w-2/3 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white max-w-6xl">
//               Leading Game Development Company
//                             </h1>
//               <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
//                 Transform your online presence with data-driven SEO strategies
//                 that deliver measurable results
//               </p>

//               <motion.div
//                 className="flex justify-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//               >
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center px-8 py-4 bg-greenColor rounded-full text-customBodyColor font-medium text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
//                 >
//                   Get Started
//                 </Link>
//               </motion.div>
//             </motion.div>

//             {/* Floating Elements */}
//             <motion.div
//               className="absolute top-1/4 left-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl hidden lg:block"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               <div className="h-2 w-16 bg-green-400 rounded-full"></div>
//               <div className="h-2 w-12 bg-yellow-400 rounded-full mt-2"></div>
//             </motion.div>

//             <motion.div
//               className="absolute bottom-1/4 right-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl hidden lg:block"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//             >
//               <div className="h-2 w-12 bg-yellow-400 rounded-full"></div>
//               <div className="h-2 w-16 bg-green-400 rounded-full mt-2"></div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GameHero;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import banner1 from "../../../../assets/Banner/ebc40a525684279646afa0080a0f10b8.mp4";
import banner2 from "../../../../assets/HeroSection/ebc40a525684279646afa0080a0f10b8.gif";

const GameHero = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari Browser
    const isSafariBrowser =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#FAF9F6] mt-14">
      {/* Background Media */}
      <div className="absolute inset-0">
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
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
        <svg
          viewBox="0 0 1440 320"
          className="w-full block"
          preserveAspectRatio="none"
          style={{
            filter: "drop-shadow(0px -1px 0px #FAF9F6)",
            marginBottom: "-2px",
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
              <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white max-w-6xl">
                Leading Game Development Company
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Transform your online presence with data-driven SEO strategies
                that deliver measurable results
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
