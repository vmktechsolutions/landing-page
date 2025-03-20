import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import vrImage from '../../assets/Banner/pixelcut-export (1).webp';
import { FiArrowRight } from 'react-icons/fi';
import arrow from "../../assets/Vector.png";


const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []);
  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-[2.5rem] md:pt-[5.5rem] py-36 text-center md:text-left  ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pt-[2.5rem] md:pt-[4rem]">
        <img
          src={vrImage}
          alt="Background"
          className="w-full h-[45rem] object-cover"
        />
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-600/90"></div> */}
      </div>

      {/* White curved shape at bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-white" 
        style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%'
        }}>
      </div> */}

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div
            className="flex-1 text-white" data-aos="fade-right" data-aos-duration="1000" data-aos-deley="500"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-8">
              Unlock Of the Future of Digital Marketing
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-xl leading-relaxed">
              Leading your brand into the future with advanced digital
              marketing strategies.
            </p>

            {/* Button Container */}
            <div
              className="relative w-full flex justify-center lg:justify-start" data-aos="fade-right" data-aos-duration="1000" data-aos-deley="500"
            >
              <button
                className="relative flex items-center justify-center font-medium bg-custom-gradient w-64 sm:w-72 h-12 sm:h-14 rounded-full text-customBodyColor text-sm sm:text-base group overflow-hidden shadow-lg shadow-blue-500/20"

              >
                <Link
                  to="/contact" className="relative z-10 transition-colors group-hover:text-customBodyColor">
                  Let's Discuss Project
                </Link>

                <img
                  className="absolute right-7 top-2/5 transform -translate-y-1/2 horizontal-move" data-aos="fade-in"
                  data-aos-duration="1000"
                  src={arrow}
                  alt="Arrow"

                />

                {/* Button Gradient Animation */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 marquee" data-aos="fade-in"
                  data-aos-duration="1000"
                  

                />
              </button>
            </div>
          </div>

          {/* Right content - Empty space for balance */}
          <div className="flex-1"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
      <div className="absolute bottom-32 left-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 -ml-48"></div>
    </div>
  );
};

export default Hero;