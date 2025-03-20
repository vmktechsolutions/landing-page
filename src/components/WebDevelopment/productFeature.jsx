import React, { useEffect } from 'react';
import { FaLightbulb, FaShieldAlt, FaBullseye, FaStar } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../animation/ex-style.css';

const ProductFeature = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);
  const features = [
    {
      title: 'Creativity & Innovation',
      description: 'We craft innovative, future-ready websites that make you stand out.',
      icon: FaLightbulb
    },
    {
      title: 'Dependability',
      description: 'Rely on us for secure, high-performance websites with ongoing support.',
      icon: FaShieldAlt
    },
    {
      title: 'Your Vision, Our Mission',
      description: 'We turn your vision into reality through transparent and ongoing teamwork.',
      icon: FaBullseye
    },
    {
      title: 'Premium Quality',
      description: 'Expect flawless design, top-tier performance, and exceptional user experience.',
      icon: FaStar
    }
  ];

  return (
    <div className="relative py-10 px-4 overflow-hidden flex items-center justify-center min-h-[600px] bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20"></div>

      <div className="relative w-full max-w-7xl mx-auto">

        <div className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-customBodyColor via-blue-600 to-customBodyColor bg-[length:200%_auto] animate-background-pan bg-clip-text text-transparent mb-3 pb-2"
            data-aos="fade-right" data-aos-duration="1000"
          >
            Web Development That Works for You
          </h1>
          <p className="text-lg text-greyColor max-w-5xl mx-auto">
            Scalable, secure, and high-performance web solutions designed to drive growth and deliver exceptional user experiences.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-[#F8F8F8] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full text-center flex flex-col items-center min-h-[320px] justify-between"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col items-center h-full justify-between py-4">
                <div className="w-24 h-24 bg-custom-gradient rounded-full flex items-center justify-center shadow-sm text-white mb-4 group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-12 h-12" />
                </div>
                <div className="flex flex-col flex-grow justify-center">
                  <h3 className="text-lg font-bold text-black/75 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#5D6368] leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;