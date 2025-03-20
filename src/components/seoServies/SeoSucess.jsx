import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import seoSuccessImage from '../../assets/HeroSection/Vidico __ Agency - Video & Animation in Melbourne, Australia.gif';
import arrow from "../../assets/Vector.png";
import '../../animation/ex-style.css';

const SeoSuccess = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  const successPoints = [
    "More Qualified Leads & Conversions",
    "Stronger Brand Credibility & Trust",
    "Higher Organic Rankings",
    "Increased Website Traffic"
  ];

  return (
    <div className="w-full py-16 sm:py-20  bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333] mb-6">
            The Power Of SEO For Success
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Illustration */}
          <div className="w-full lg:w-1/2">
            <div
              data-aos="fade-left" data-aos-duration="600"
            >

              <img
                src={seoSuccessImage}
                alt="SEO Success Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Success Points */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              {successPoints.map((point, index) => (
                <div
                  key={index}
                  data-aos="fade-up" data-aos-duration="200" data-aos-delay="0"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D9D9D9]">
                    <p className="text-black/75 font-bold text-md">{point}</p>
                  </div>
                </div>
              ))}

              <div
                className="relative w-full flex justify-center lg:justify-start" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600"
              >
                <button
                  className="relative flex items-center justify-center font-medium bg-custom-gradient w-64 sm:w-52 h-12 sm:h-14 rounded-full text-customBodyColor text-sm hover-effect sm:text-base group overflow-hidden shadow-lg shadow-blue-500/20" data-aos="zoom-in" data-aos-duration="300"
                >
                  <Link
                    to="/contact"
                    className="relative z-10 transition-colors group-hover:text-customBodyColor"
                  >
                    Connect Now
                  </Link>

                  <img
                    className="absolute wiggle-effect right-6 top-2/5 transform -translate-y-1/2" data-aos="fade-in" data-aos-duration="1000"
                    src={arrow}
                    alt="Arrow"
                  />

                  {/* Button Gradient Animation */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r marquee-text from-blue-400/20 to-purple-400/20" data-aos="fade-in" data-aos-duration="1000"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoSuccess;
