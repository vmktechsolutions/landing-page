import React from 'react';
import { FaFlag, FaChartLine, FaHeadset, FaUserFriends } from 'react-icons/fa';
import PageTitle from "../../components/Pagetitle/PageTitle";
import Icon from "../../../public/bus.png";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaFlag className="w-8 h-8 text-blue-500" />,
      title: "Years of Expertise",
      description: "We are dedicated professionals with years of experience in IT management and web development services. Rest assured of our excellence and achieve complete satisfaction."
    },
    {
      id: 2,
      icon: <FaChartLine className="w-8 h-8 text-red-500" />,
      title: "Credible services",
      description: "Why shell out cash for print and digital advertisements? Prefer IT solutions and web development with us. We ensure long-lasting effects."
    },
    {
      id: 3,
      icon: <FaUserFriends className="w-8 h-8 text-green-500" />,
      title: "Enhanced User Experience",
      description: "Websites designed and maintained by our professionals at the leading IT solution company are easy to navigate. Thus you can ensure a user-friendly platform for your target audience."
    },
    {
      id: 4,
      icon: <FaHeadset className="w-8 h-8 text-purple-500" />,
      title: "Complete Support and Maintenance",
      description: "Our services are not limited to designing websites. Rather we provide support and maintenance with our IT and web development services."
    }
  ];

  return (
    <div className="w-full h-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className='flex flex-col justify-center items-center'>
        <PageTitle title="Best IT Services in India" />
        </div>
        
        {/* Intro text */}
        <p className="text-center max-w-4xl mx-auto mb-12 text-gray-700">
          At VMK Tech solutions, we offer best IT solutions, we are professionals to handle A to Z of your organization's IT services needs. We can help you to focus on the latest market trends as well as boost your online presence.
        </p>
        
        <div className="flex flex-wrap items-stretch justify-center">
          {/* Features grid - will display as single column on mobile, 2x2 grid on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left column features (mobile: full width, desktop: left side) */}
            <div className="space-y-6 md:space-y-8 col-span-1">
              {features.slice(0, 2).map((feature) => (
                <div 
                  key={feature.id}
                  className="bg-white cursor-pointer rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl h-[200px] border-2 hover:border-slate-400"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-md font-semibold mb-2 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center image (hidden on small screens, visible on lg and above) */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-red-500 rounded-full relative shadow-xl flex items-center justify-center">
                <img 
                  src={Icon}
                  alt="IT Professional" 
                  className="absolute bottom-0 h-64 md:h-64 object-cover object-center"
                />
              </div>
            </div>

            {/* Center image for medium screens (hidden on small and large screens) */}
            <div className="md:col-span-2 lg:hidden flex justify-center py-6">
              <div className="w-48 h-48 bg-red-500 rounded-full relative shadow-xl flex items-center justify-center">
                <img 
                  src={Icon}
                  alt="IT Professional" 
                  className="absolute bottom-0 h-64 object-cover object-center"
                />
              </div>
            </div>
            
            {/* Right column features (mobile: full width, desktop: right side) */}
            <div className="space-y-6 md:space-y-8 col-span-1">
              {features.slice(2, 4).map((feature) => (
                <div 
                  key={feature.id}
                 className="bg-white cursor-pointer rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl h-[200px] border-2 hover:border-slate-400"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-md font-semibold mb-2 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;