import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaLaptopCode, FaPaintBrush, FaTools, FaCogs, FaRocket, FaChartLine } from "react-icons/fa";

const BusinessSolutions = () => {
  const solutions = [
    {
      title: "Custom Web Development",
      description:
        "Build scalable, high-performance web applications tailored to your business needs. Our expert team delivers innovative solutions using cutting-edge technologies.",
      icon: FaLaptopCode,
    },
    {
      title: "UI/UX Design Services",
      description:
        "Create stunning, user-friendly interfaces that engage and convert. We combine aesthetic excellence with user-centered design principles to deliver exceptional experiences.",
      icon: FaPaintBrush,
    },
    {
      title: "Web Application Maintenance",
      description:
        "Keep your web applications running smoothly with our comprehensive maintenance services. Regular updates, security patches, and performance optimization.",
      icon: FaTools,
    },
    {
      title: "System Integration",
      description:
        "Seamlessly integrate your web applications with existing systems and third-party services. Enhance workflow efficiency and data consistency across platforms.",
      icon: FaCogs,
    },
    {
      title: "Performance Optimization",
      description:
        "Boost your website's speed and performance. We optimize code, implement caching strategies, and enhance server response times for better user experience.",
      icon: FaRocket,
    },
    {
      title: "Analytics & Growth",
      description:
        "Make data-driven decisions with comprehensive analytics integration. Track user behavior, monitor performance metrics, and identify growth opportunities.",
      icon: FaChartLine,
    },
  ];

  return (
    <div className="relative py-10 bg-[#F4FBF4] min-h-[600px] overflow-hidden">
      <div className="max-w-6xl mx-auto relative px-4">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2563EB]">
              Customized Web Solutions Designed to 
              <br />
              Accelerate Your Business Growth
            </span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-sm bg-white/30 rounded-[20px] py-8 px-6 shadow-lg hover:shadow-md hover:scale-105 relative group min-h-[280px] flex flex-col items-center text-center border border-white/40 max-w-[300px] mx-auto w-full transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute drop-shadow-[0px_4px_10px_#7AF304] top-0 w-20 h-0.5 bg-custom-gradient rounded-full"></div>

              <div className="mb-4">
                <div className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <solution.icon className="w-9 h-9 text-[#220176]" />
                </div>
              </div>
              <h3 className="text-[16px] font-bold text-[#220176] mb-4">
                {solution.title}
              </h3>
              <p className="text-[#64748B] text-[13px] leading-[1.6] flex-grow mb-6 px-4">
                {solution.description}
              </p>
              <div className="mt-auto">
                {/* <button className="w-10 h-10 rounded-full bg-custom-gradient flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <FiArrowRight className="w-5 h-5" />
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
