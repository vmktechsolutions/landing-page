import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import developerImg from '../../assets/HeroSection/850477fed08bfe98598082bcd309ce70.gif';

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  })
  const services = [
    { name: 'UI/UX DESIGN & PROTOTYPING', delay: 0.1 },
    { name: 'MOBILE & WEB APP DEVELOPMENT', delay: 0.3 },
    { name: 'WEBSITE REDESIGN & OPTIMIZATION', delay: 0.4 },
    { name: 'AI & ML INTEGRATION FOR APPS', delay: 0.5 },
    { name: 'LOGISTICS & DELIVERY APP SOLUTIONS', delay: 0.6 },
    { name: 'APP & WEBSITE MAINTENANCE', delay: 0.6 },
  ];



  return (
    <div className="bg-[#003140] text-white p-4">
      <div className="max-w-9xl mx-auto px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Services */}
          <div className="max-w-xl ">
            <h2
              className="text-3xl md:text-5xl font-bold mb-10 text-white text-center" data-aos="fade-up" data-aos-duration="500"
            >
              Services We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="w-full bg-white/5 hover:bg-white/10 text-white text-center px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 " data-aos="fade-right" data-aos-duration="500" data-aos-delay="service.delay"

                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Developer Illustration */}
          <div
            className="flex justify-center items-center" data-aos="fade-left" data-aos-duration="500"

          >
            <img
              src={developerImg}
              alt="Developer"
              className="w-full max-w-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;