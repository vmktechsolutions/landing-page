import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import icon1 from '../../assets/Icons/5.png';
import icon2 from '../../assets/Icons/6.png';
import icon3 from '../../assets/Icons/8.png';
import icon4 from '../../assets/Icons/9.png';

const SeoCards = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []);
  const cardData = [
    {
      id: 1,
      title: "Keyword Research & Analysis",
      description: "Our expert team conducts in-depth keyword research to identify high-value, low-competition terms that drive targeted traffic. We analyze search intent, volume, and trends to optimize your content strategy.",
      icon: icon1
    },
    {
      id: 2,
      title: "On-Page SEO Optimization",
      description: "We optimize your website's meta tags, headers, content structure, and internal linking to improve search engine visibility. Our technical SEO ensures your site meets Google's latest standards.",
      icon: icon2
    },
    {
      id: 3,
      title: "Content Strategy & Creation",
      description: "Our content team creates engaging, SEO-optimized content that resonates with your audience and ranks well. We develop comprehensive content plans aligned with your business goals.",
      icon: icon3
    },
    {
      id: 4,
      title: "Performance Tracking & Reports",
      description: "Track your SEO success with detailed analytics and ranking reports. We monitor key metrics, backlink profiles, and competitor analysis to continuously improve your search presence.",
      icon: icon4
    }
  ];

  return (
    <div className="w-full py-16 sm:py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4052FF] mb-6">
            Unlock The Power Of SEO With Codes And Marketing
          </h2>
          <p className="text-gray-600 text-lg">
            Data-Driven SEO Strategies Designed To Boost Rankings And Grow Your Business Online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {cardData.map((card) => (
            <div
              key={card.id}

              className="bg-white border border-greenColor rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-greenColor rounded-full flex items-center justify-center">
                      <img src={card.icon} alt={card.title} className="w-16 h-16 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
                    {card.description}
                  </p>
                </div>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-10 py-3 bg-greenColor text-[#2726B6] rounded-full text-xs font-md hover:shadow-md transition-all mx-auto"
                >
                  Read More
                </motion.button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoCards;
