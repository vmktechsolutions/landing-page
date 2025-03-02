import { motion } from "framer-motion";
import React from "react";
import computerIcon from "../../assets/Icons/Vector.png";
import img1 from "../../assets/Icons/image 30.png";
import img2 from "../../assets/Icons/image 31.png";

const Achievement = () => {
  return (
    <div className="w-full relative bg-white">
      <div className="absolute bottom-0 w-full h-1/2 bg-[#F4FBF4]"></div>

      <div className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* White card container */}
            <div className="w-full bg-white rounded-3xl shadow-xl p-8 md:p-12" style={{    boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.1)'}}>
              <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
                {/* Years of Experience */}
                <motion.div
                  className="flex flex-col items-center text-center flex-1"
                  whileHover={{ scale: 1.09 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <img
                      src={computerIcon}
                      alt="Experience"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-4xl font-black text-[#2B2B2B]">1+</h3>
                  <p className="text-base font-bold text-[#2B2B2B] mt-1">
                    Years Of Experience
                  </p>
                </motion.div>

                {/* Best of The Year */}
                <motion.div
                  className="flex flex-col items-center text-center flex-1"
                  whileHover={{ scale: 1.09 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <img
                      src={img1}
                      alt="Best of Year"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-4xl font-black text-[#2B2B2B]">2025</h3>
                  <p className="text-base text-[#2B2B2B] font-bold mt-1">
                    Best Of The Year
                  </p>
                  <p className="text-sm font-bold text-[#2B2B2B] mt-1">
                  You Think It,We make it.
                  </p>
                </motion.div>

                {/* Happy Customer */}
                <motion.div
                  className="flex flex-col items-center text-center flex-1"
                  whileHover={{ scale: 1.09 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <img
                      src={img2}
                      alt="Happy Customer"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-4xl font-black text-[#2B2B2B]">100+</h3>
                  <p className="text-base font-bold text-[#2B2B2B] mt-1">
                    Happy Customer
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
