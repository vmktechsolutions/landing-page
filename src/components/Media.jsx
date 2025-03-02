import React from 'react';
import news from '../assets/uil_newspaper.jpg';
const Media = () => {
  const newsItems = [
    "Codes And Marketing Recognized For Being A Top B2B Company in 2014 By Clutch",
    "Codes And Marketing Recognized by Forbes As A Best Place To Work for 2014",
    "Codes And Marketing Recognized For Being A Top B2B Company in 2014 By Clutch",
    "Codes And Marketing Recognized by Forbes As A Best Place To Work for 2014",
  ];

  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl mt-10 font-bold text-center text-customBodyColor">Media Coverage</h1>
        <p className="text-center text-lg mt-10">
          Tapping Into The Rising Tide Of Success Through Custom Software Development Services And Establishing A Firm Foundation For Growth.
        </p>
        <p className="text-center font-semibold mt-3">Discover The Latest News And Updates About Us.</p>

        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
          {/* Card Component */}
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="bg-whiteShade p-6 rounded-lg shadow-md w-full md:w-1/2">
                <h2 className="text-xl font-bold mb-4">
                 <img src={news}/>  News
                </h2>
                <ul className="space-y-2 text-sm">
                  {newsItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  
                  ))}
                </ul>
                <a href="#" className="text-blue-600 mt-4 inline-block">
                  View All News →
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
