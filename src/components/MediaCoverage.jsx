import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MediaCoverage = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-customBodyColor">Media Coverage</h1>
        <p className="text-center text-sm sm:text-lg text-gray-700 mt-4 sm:mt-6">
          Tapping into the rising tide of success through custom software development services and establishing a firm foundation for growth.
        </p>
        <p className="text-center font-medium text-black mt-3 text-sm sm:text-base">
          Discover the latest news and updates about us.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-8 items-center sm:items-start justify-center mx-auto p-5 mt-7">
        {/* First News Section */}
        <div className="h-auto sm:h-60 w-full sm:w-[30rem] bg-whiteShade rounded-2xl mb-4 sm:mb-0">
          <div className="flex flex-row items-center px-5 py-4">
            <FontAwesomeIcon icon={faNewspaper} className="text-greyColor text-2xl" />
            <p className="text-lg sm:text-xl font-bold px-3 text-gray-700">News</p>
          </div>
          <div className="px-5">
            <p className="text-sm sm:text-custom text-gray-700">
              Codes and marketing Recognized for Being A Top B2B Company in 2024 by Clutch
            </p>
            <hr className="my-2" />
            <p className="text-sm sm:text-custom text-gray-700">
              Code and Marketing Recognized by Forbes as a Best Place To Work For 2024
            </p>
            <hr className="my-2" />
            <p className="text-sm sm:text-custom text-gray-700">
              Codes and marketing Recognized for Being A Top B2B Company in 2024 by Clutch
            </p>
            <hr className="my-2" />
            <p className="text-sm sm:text-custom text-gray-700">
              Code and Marketing Recognized by Forbes as a Best Place To Work For 2024
            </p>
            <hr className="my-2" />
            <div>
              <a href="#" className="text-sm text-blueColor">View All News</a>
            </div>
          </div>
        </div>
        {/* Second Placeholder Section */}
        <div className="h-auto sm:h-60 w-full sm:w-[30rem] bg-whiteShade rounded-2xl">
          <div className="flex flex-row items-center px-5 py-4">
            <FontAwesomeIcon icon={faNewspaper} className="text-greyColor text-2xl" />
            <p className="text-lg sm:text-xl font-bold px-3 text-gray-700">News</p>
          </div>
          <div className="px-5">
            <p className="text-sm sm:text-custom text-gray-700">
              Codes and marketing Recognized for Being A Top B2B Company in 2024 by Clutch
            </p>
            <hr className="my-2" />
            <p className="text-sm sm:text-custom text-gray-700">
              Code and Marketing Recognized by Forbes as a Best Place To Work For 2024
            </p>
            <hr className="my-2" />
            <p className="text-sm sm:text-custom text-gray-700">
              Codes and marketing Recognized for Being A Top B2B Company in 2024 by Clutch
            </p>
            <hr className="my-2" />
            <p className="text-sm sm:text-custom text-gray-700">
              Code and Marketing Recognized by Forbes as a Best Place To Work For 2024
            </p>
            <hr className="my-2" />
            <div>
              <a href="#" className="text-sm text-blueColor">View All News</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
