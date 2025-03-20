import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
import banner1 from "../../assets/Banner/portfolio.webm";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []);
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#FAF9F6]">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={banner1} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B45]/80 to-[#000033]/90 backdrop-blur-sm"></div>
      </div>

      {/* Wavy Curve at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
          style={{
            filter: 'drop-shadow(0px -2px 1px rgba(250, 249, 246, 0.3))',
            marginBottom: '-2px'
          }}
        >
          <path
            fill="#FAF9F6"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-200px)]">
          {/* Content */}
          <div className="w-full lg:w-2/3 text-center">
            <div
              data-aos="fade-up" data-aos-duration="800"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white max-w-6xl">
                CodesAndMarketing Delivers Cutting-Edge Revolutionize Industry
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Transform your online presence with data-driven SEO strategies
                that deliver measurable results
              </p>

              <div
                className="flex justify-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-greenColor rounded-full text-customBodyColor font-medium text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
