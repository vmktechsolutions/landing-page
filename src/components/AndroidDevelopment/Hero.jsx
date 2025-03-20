import { useEffect, useState } from "react";
// import { useAnimation } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import '../../animation/ex-style.css'
import { Link } from "react-router-dom";
import bgpic3 from "../../assets/HeroSection/Technology.webm";
import bgpic4 from "../../assets/HeroSection/35b47e00498aa77ba00f2aa03b1cf73a.gif";
import arrow from "../../assets/Vector.png";

const Hero = () => {
  const [setMousePosition] = useState({ x: 0, y: 0 });
  // eslint-disable-next-line no-undef
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const particles = Array.from({ length: 20 });

  return (
    <div
      className="pt-[2.5rem] md:pt-[4.5rem] flex flex-col lg:flex-row justify-between items-center lg:items-start relative overflow-hidden" data-aos="fade-in" data-aos-duration="1000"
    >
      {/* Left Section */}
      <div
        className="w-full lg:w-1/2 relative flex flex-col justify-center items-center lg:items-start px-4 sm:px-8 lg:px-12 py-8 lg:py-16" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-out"
      >
        {/* Text Content Container */}
        <div className="relative w-full max-w-2xl">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-lg infinite-opacity" data-aos="fade" data-aos-duration="2000"


          />

          <h1
            className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-customBodyColor max-w-2xl lg:max-w-xl text-center lg:text-left mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"

          >
            <span className="bg-gradient-to-r from-customBodyColor to-blue-600 text-transparent bg-clip-text inline-block pb-5">
              Custom Android Mobile App for Your Business
            </span>
          </h1>

          <h4
            className="relative text-lg sm:text-xl lg:text-md font-light text-[#5D6368] max-w-xl text-center lg:text-left mb-10" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"

          >
            Codes & Marketing provides innovative software, mobile apps, and
            data-driven marketing to elevate your brand with secure,
            high-performance solutions.
          </h4>

          {/* Button Container */}
          <div
            className="relative w-full flex justify-center lg:justify-start" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600"

          >
            <button
              className="relative flex items-center justify-center font-medium bg-custom-gradient w-64 sm:w-72 h-12 sm:h-14 rounded-full text-customBodyColor text-sm sm:text-base group overflow-hidden shadow-lg shadow-blue-500/20 animated-element" data-aos="fade-in" data-aos-duration="500"

            >
              <Link to="/contact" className="relative z-10 group-hover:text-white">
                Let's Discuss Project
              </Link>

              <img
                className="absolute right-7 top-2/5 transform -translate-y-1/2 animated-element" data-aos="fade-in" data-aos-duration="1000"
                src={arrow}
                alt="Arrow"

              />

              {/* Button Gradient Animation */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 moving-element" data-aos="fade-in" data-aos-duration="1000"

              />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-8 lg:px-12 py-8 lg:py-16 relative" data-aos="fade-left" data-aos-duration="800"

      >
        <div className="relative w-full max-w-lg">
          {isSafari ? (
            <img
              src={bgpic4}
              alt="Safari Compatible Animation"
              className="w-full h-[28rem] object-cover rounded-full relative z-10 shadow-2xl shadow-blue-500/20" data-aos="zoom-in" data-aos-duration="200"

            />
          ) : (
            <video
              key="video"
              className="w-full h-[28rem] object-cover rounded-full relative z-10 shadow-2xl shadow-blue-500/20" data-aos="zoom-in"
              data-aos-duration="200"

              loop
              muted

            >
              <source src={bgpic3} type="video/webm" />
              <p className="text-center text-red-500">Your browser does not support the video tag.</p>
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;