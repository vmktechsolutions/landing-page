import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import mobilePhone from '../../assets/vectorImage/Group 326.webp';
import arrow from "../../assets/Vector.png";

const OurSeoServices = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []);
  return (
    <div className="w-full py-8 sm:py-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div
              data-aos="fade-up" data-aos-duration="600"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-[#333] leading-tight mb-6 text-center md:text-left">
                Our SEO Services: Driving
                <br />
                Growth & Visibility Online
              </h2>

              <p className="text-gray-600 text-base sm:text-md mb-10 leading-relaxed text-center md:text-left">
                At Codes And Marketing, We Specialize In Delivering Comprehensive
                SEO Services Tailored To Meet The Unique Needs Of Your Business. Our
                Expert Team Uses A Combination Of On-Page, Off-Page, And Technical
                SEO Strategies To Improve Your Website's Search Engine Rankings,
                Increase Organic Traffic, And Enhance User Engagement. From
                Thorough Keyword Research To Optimizing Your Site For Local
                Searches, We Focus On Every Aspect Of SEO To Ensure Your Business
                Stands Out In The Competitive Digital Landscape.
              </p>

              <div
                className="relative w-full flex justify-center lg:justify-start" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600"
              >
                <button
                  className="relative flex items-center justify-center font-medium bg-greenColor hover-effect w-64 sm:w-72 h-12 sm:h-14 rounded-full text-customBodyColor text-sm sm:text-base group overflow-hidden shadow-lg shadow-blue-500/20" data-aos-duration="300" data-aos="zoom-in"
                // style={'.hover-effect{transition: transform 0.3s ease-in-out;} .hover-effect:hover{transform: scale(1.05);} .hover-effect:active{transform: scale(0.95);}'}
                >
                  <Link
                    to="/contact"
                    className="relative z-10 transition-colors group-hover:text-customBodyColor"
                  >
                    Let's Discuss Project
                  </Link>

                  <img
                    className="absolute shake-effect right-7 top-2/5 transform -translate-y-1/2" data-aos="fade-in" data-aos-duration="800"
                    src={arrow}
                    alt="Arrow"
                  // style={'@keyframes shake{0% { transform: translateX(0); }  50% { transform: translateX(5px); } 100% { transform: translateX(0); }} .shake-effect{animation: shake 1.5s ease-in-out infinite;}'}
                  />

                  {/* Button Gradient Animation */}
                  <div
                    className="absolute scroll-effect inset-0 bg-gradient-to-r from-[#00A9FF]/20 to-[#A259FF]/20" data-aos="fade-in" data-aos-duration="800"
                  // style={'@keyframes horizontal-scroll{ 0% { transform: translateX(-100%); }  100% { transform: translateX(100%); }} .scroll-effect{animation: horizontal-scroll 3s linear infinite; display: inline-block; whitespace: nowrap;}'}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Display */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end -mt-16">
            <div

              className="relative w-[280px] sm:w-[320px] lg:w-[40rem]" data-aos="zoom-in" data-aos-duration="600"
            >
              <div className="relative">
                <img
                  src={mobilePhone}
                  alt="Mobile Display"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSeoServices;
