import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import '../../animation/ex-style.css'
import { Link } from 'react-router-dom';
import heroImage from '../../assets/vectorImage/image-removebg-preview (3) 1.png';
import { FaSearchDollar, FaRegChartBar, FaUsers, FaBullhorn, FaEnvelopeOpenText, FaMobileAlt } from 'react-icons/fa';
import bgimg from '../../assets/vectorImage/Vector 1.png';

const MasteringDigital = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []);
  const cards = [
    {
      id: 1,
      title: "Search Engine Optimization",
      description: "Boost your website's visibility with data-driven SEO strategies that drive organic traffic and improve search rankings.",
      icon: <FaSearchDollar />
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "Build strong brand presence across social platforms with engaging content and targeted campaigns that convert.",
      icon: <FaUsers />
    },
    {
      id: 3,
      title: "Performance Marketing",
      description: "Maximize ROI with data-driven paid campaigns across search, social, and display networks.",
      icon: <FaRegChartBar />
    },
    {
      id: 4,
      title: "Digital Advertising",
      description: "Create compelling ad campaigns that reach your target audience and drive measurable results.",
      icon: <FaBullhorn />
    },
    {
      id: 5,
      title: "Email Marketing",
      description: "Nurture leads and drive conversions with personalized email campaigns and automation strategies.",
      icon: <FaEnvelopeOpenText />
    },
    {
      id: 6,
      title: "Mobile Marketing",
      description: "Reach customers on-the-go with mobile-first strategies that enhance engagement and drive app installs.",
      icon: <FaMobileAlt />
    },
  ];

  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Main Background Vector */}
      <div className="absolute left-0 top-0 w-full h-full">
        <img src={bgimg} alt="Background Vector" className="w-full h-full object-cover opacity-30" />
      </div>

      {/* Hero Image */}
      <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full z-10">
        <div
          className="w-full h-full" data-aos="fade-right" data-aos-duration="600"
        >
          <img
            src={heroImage}
            alt="Digital Marketing Hero"
            className="w-full h-[20rem] sm:h-[30rem] lg:h-[40rem] object-contain object-center lg:object-left"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Spacer for larger screens */}
          <div className="hidden lg:block lg:w-1/2" />

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 mt-[15rem] sm:mt-[20rem] lg:mt-0">
            <div className="text-center lg:text-center  mb-4 ">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333] mb-4 mt-4 lg:mt-16">
                Mastering The Digital Frontier
              </h2>
              <p className="text-gray-600 text-base lg:text-lg  mb-4">
                Harnessing Technology To Shape The Future Of Success
              </p>
              <div className="flex justify-center items-center mt-8">
                <Link to="/contact">
                  <button

                    className="px-6 py-2 hover-effect bg-greenColor text-[white] rounded-full text-sm font-medium hover:shadow-lg transition-all" data-aos="zoom-in" data-aos-duration="500"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section with Hidden Scrollbar */}
        <div className="relative -mx-4 sm:mx-10  lg:left-32">
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-12 px-4 min-w-max mx-auto ">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-2xl border border-gray-100 shadow-md w-[280px] sm:w-[320px] lg:w-[350px] hover:shadow-lg transition-all hover-scale" data-aos="fade-up" data-aos-duration="200"

                >
                  <div className="flex flex-col items-start">
                    <div className="text-5xl text-[#005C72] mb-4 " >  {card.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-black/75">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                    <button
                      className="mt-4 px-4 hover-effect py-2 text-[#2726B6] text-sm font-medium hover:text-green-700 transition-colors flex items-center gap-2" data-aos="zoom-in" data-aos-duration="500"

                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS to hide scrollbar */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MasteringDigital;
