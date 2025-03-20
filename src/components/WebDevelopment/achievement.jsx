import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import computerIcon from "../../assets/Icons/Vector.png";
import img1 from "../../assets/Icons/image 30.png";
import img2 from "../../assets/Icons/image 31.png";
import '../../animation/ex-style.css';

const Achievement = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <div className="w-full relative bg-white">
      <div className="absolute bottom-0 w-full h-1/2 bg-[#F4FBF4]"></div>

      <div className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            data-aos="fade-up" data-aos-duration="800"
          >
            {/* White card container */}
            <div className="w-full bg-white rounded-3xl shadow-xl p-8 md:p-12" style={{ boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.1)' }}>
              <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
                {/* Years of Experience */}
                <div
                  className="flex flex-col items-center text-center flex-1" data-aos="zoom-in" data-aos-duration="800"
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
                </div>

                {/* Best of The Year */}
                <div
                  className="flex flex-col items-center text-center flex-1 hover-effect"
                  data-aos="zoom-in" data-aos-duration="800"
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
                </div>

                {/* Happy Customer */}
                <div
                  className="flex flex-col items-center text-center flex-1 hover-scale"
                  data-aos="zoom-in" data-aos-duration="800"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
