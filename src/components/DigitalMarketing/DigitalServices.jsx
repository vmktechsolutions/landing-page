import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaUsers, FaRegThumbsUp } from 'react-icons/fa';
import { BsCalendar2Check } from 'react-icons/bs';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { use } from 'react';

const ServiceTag = ({ text }) => (

  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []),


  < div className="inline-flex items-center px-4 sm:px-6 lg:px-10 py-2 sm:py-3 min-w-[140px] sm:min-w-[180px] justify-center bg-white border-2 border-greenColor rounded-full text-sm sm:text-md text-customBodyColor hover:text-white mr-2 mb-2 hover:bg-greenColor hover:shaow-lg ease-in duration-300 transition-colors" >
    {text}
  </div >
);

const StatCard = ({ icon: Icon, number, text }) => {
  const ref = React.useRef(null);
  const [displayNumber, ] = React.useState(0);

  

  return (
    <div ref={ref} className="flex items-center h-auto min-h-[100px] xs:min-h-[120px] sm:min-h-[150px] lg:min-h-[180px] gap-2 xs:gap-3 sm:gap-4 lg:gap-6 bg-white border border-greenColor py-3 xs:py-4 sm:py-6 lg:py-8 px-2 xs:px-3 sm:px-4 lg:px-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex-shrink-0 text-[#005C72] text-xl xs:text-2xl sm:text-3xl lg:text-5xl">
        <Icon />
      </div>
      <div className="flex flex-col justify-center">
        <div className="font-black text-lg xs:text-xl sm:text-2xl lg:text-4xl mb-1 sm:mb-2 text-[#5D6368]">
          {displayNumber}+
        </div>
        <div className="text-xs xs:text-sm lg:text-base text-black/75 font-bold max-w-[80px] xs:max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] leading-tight">{text}</div>
      </div>
    </div>
  );
};

const digitalServicesData = {
  title: 'Digital Marketing Service',
  description: 'Stand & Go Stand Position With Strategic & Best Digital Marketing Services In India From Industry Leaders.OrangeManta Is One Of The Leading Digital Marketing Company You Can Trust On. Get Comprehensive Services Package In One Place.',
  services: ['SEO', 'PPC', 'SMO', 'CRM', 'Email Marketing', 'Google Analytics'],
  stats: [
    {
      icon: BsCalendar2Check,
      number: '1',
      text: 'Years Of Experience'
    },
    {
      icon: MdOutlineBusinessCenter,
      number: '50',
      text: 'Global Top Brands & Startups Served'
    },
    {
      icon: FaUsers,
      number: '300',
      text: 'Industry-Best Tech Professionals'
    },
    {
      icon: FaRegThumbsUp,
      number: '100',
      text: 'Happy Customers'
    }
  ]
};

const DigitalServices = () => {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-24">
          {/* Left side - Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">{digitalServicesData.title}</h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {digitalServicesData.description}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {digitalServicesData.services.map((service, index) => (
                <ServiceTag key={index} text={service} />
              ))}
            </div>
          </div>

          {/* Right side - Stats Grid */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
              {digitalServicesData.stats.map((stat, index) => (
                <div
                  key={index}
                >
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalServices;