import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaTools,
  FaRocket,
  FaShieldAlt,
  FaAndroid
} from "react-icons/fa";

const BusinessSolutions = () => {
  const solutions = [
    {
      title: "Mobile Application Consulting",
      description:
        "Align your app with your business goals through expert consulting. We help define your app's roadmap through growth development and maximum monetization.",
      icon: FaMobileAlt,
    },
    {
      title: "Mobile App Design Services",
      description:
        "Craft your vision into reality with functional mobile apps. Our team blends creativity with user-centered design to deliver an exceptional experience.",
      icon: FaPaintBrush,
    },
    {
      title: "Android Development",
      description:
        "Build powerful native Android applications using the latest technologies and best practices. We ensure optimal performance and user experience.",
      icon: FaAndroid,
    },
    {
      title: "App Maintenance & Support",
      description:
        "Keep your app running at peak performance with our end-to-end maintenance services. We enhance system stability and implement automation.",
      icon: FaTools,
    },
    {
      title: "App Security & Protection",
      description:
        "Secure your mobile application with advanced security measures. We implement robust authentication and data protection protocols.",
      icon: FaShieldAlt,
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize your app for speed, reliability, and resource efficiency. We fine-tune every aspect to deliver the best possible user experience.",
      icon: FaRocket,
    },
  ];

  return (
    <div className="relative py-10 bg-[#F4FBF4] min-h-[600px] overflow-hidden">
      <div className="max-w-6xl mx-auto relative px-4">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-duration="600"

          >
            <span className="text-[#2563EB]">
              Custom Mobile App Solutions To Power Your Business Forward
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/30 rounded-[20px] py-8 px-6 shadow-lg hover:shadow-md hover:scale-105 relative group min-h-[280px] flex flex-col items-center text-center border border-white/40 max-w-[300px] mx-auto w-full transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="600" data-aos-delay="{index * 100}"

            >
              <div className="absolute drop-shadow-[0px_4px_10px_#7AF304] top-0 w-20 h-0.5 bg-[#7AF304] rounded-full"></div>

              <div className="mb-4">
                <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <solution.icon className="w-10 h-10 text-[#220176]" />
                </div>
              </div>
              <h3 className="text-[17px] font-bold text-[#220176] mb-4">
                {solution.title}
              </h3>
              <p className="text-[#64748B] text-[13px] leading-[1.6] flex-grow mb-6 px-4">
                {solution.description}
              </p>
              <div className="mt-auto">
                {/* <button className="w-10 h-10 rounded-full bg-greenColor flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <FiArrowRight className="w-5 h-5" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;