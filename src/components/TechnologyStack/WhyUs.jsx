import React from "react";
import gif from '../../assets/HeroSection/Track user behavior and filter users.gif';
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 space-y-6 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Codes and Marketing, we harness cutting-edge technologies to develop modern, 
              scalable, and high-performing solutions that adapt to your evolving business needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our expert team ensures seamless integration, robust security, and future-ready 
              digital experiences. From web and mobile development to AI-driven innovations 
              and cloud solutions, we craft tailored strategies designed to drive efficiency, 
              enhance user engagement, and accelerate growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a strong commitment to excellence and innovation, we empower businesses 
              to maintain a competitive edge in an ever-changing digital landscape.
            </p>
            <Link to="/contact">
            <button className="mt-8 px-8 py-3 bg-greenColor text-customBodyColor rounded-full 
                             hover:bg-opacity-90 transition-all duration-300 
                             shadow-lg hover:shadow-xl">
             connect now
            </button>
            </Link>
          </div>
          

          {/* Right Side - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
            
              <img 
                src={gif} 
                alt="Why Choose Us Illustration" 
                className="relative  transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
