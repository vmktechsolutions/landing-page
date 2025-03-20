
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import bottleImage from '../../assets/bottle.png'; // Update with your bottle image path

const OverViewsDescription = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []);
  return (
    <div className="min-h-screen bg-[#FDF6F0] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div
            className="lg:w-1/2" data-aos="fade-right" data-aos-duration="800" data-aos-once="true"

          >
            <div className="bg-[#E8D6CB] rounded-3xl p-8">
              <img
                src={bottleImage}
                alt="Premium Liquid Product"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div
            className="lg:w-1/2 space-y-6" data-aos="fade-right" data-aos-duration="800" data-aos-once="true"
          >
            <p
              className="text-gray-600" data-aos="fade-right" data-aos-duration="800" data-aos-once="true"
            >
              Unlock the Secrets of Our Premium Liquid Treasures
            </p>

            <h2
              className="text-5xl font-serif text-[#4A2F1C]" data-aos="fade-right" data-aos-duration="800" data-aos-once="true"
            >
              Crafting<br />
              Liquid
            </h2>

            <p
              className="text-gray-700" data-aos="fade-right" data-aos-duration="800" data-aos-once="true"
            >
              Dive into the Alluring World of Our Liquid Masterpieces. Each bottle is a testament to our unwavering commitment to quality
            </p>

            <p
              className="text-gray-600" data-aos="fade-right" data-aos-duration="800" data-aos-once="true"
            >
              Elevate Your Everyday with Our Exceptional Liquid Offerings. From the moment you encounter our products
            </p>



            <button
              className="bg-yellow-400 text-[#4A2F1C] px-8 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors mt-6" data-aos="fade-up" data-aos-duration="800" data-aos-once="true"
            >
              Shop Now
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default OverViewsDescription; 