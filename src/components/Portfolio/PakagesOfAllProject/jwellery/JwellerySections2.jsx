import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/Jewellery/WhatsApp Video 2025-02-13 at 16.17.42_29f2c9f2 - ROTATE - Videobolt.net.mp4';

const JewellerySections2 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-6 md:px-0 lg:px-0 py-10">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0 px-1 lg:px-16 ">
        <div
          data-aos="fade-left" data-aos-duration="800" data-aos-once="true"
        >
          <h2 className="text-3xl sm:text-3xl md:text-xl lg:text-6xl font-bold text-blue-700 mb-4 leading-tight max-w-2xl">
            Build Your Jewellery Brand with Us
          </h2>

          <p className="text-gray-600 text-sm sm:text-lg md:text-md mb-6 max-w-xl">
            Elevate your style with our finely crafted gold, diamond, and silver jewellery.
            We provide custom jewellery design, restoration, and premium craftsmanship services.
          </p>

          <div
            className="flex justify-center sm:justify-start" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600"
          >
            <button
              className="flex items-center justify-center font-medium bg-custom-gradient w-48 h-12 rounded-full text-customBodyColor text-sm sm:text-base hover:bg-green-600 transition-all duration-150" data-aos="zoom-in"
            >
              <Link to="/contact" className="relative z-10">
                Explore Our Services
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Video instead of Image */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <video
          src={img1}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-sm md:max-w-lg lg:max-w-3xl "
        />
      </div>
    </div>
  );
};

export default JewellerySections2;
