import React from 'react';
import img1 from '../assets/s1.png';
import img2 from '../assets/s2.png';
import img3 from '../assets/s3.png';
import img4 from '../assets/s4.png';
import img5 from '../assets/s5.png';
import img6 from '../assets/s6.png';

const AwardSection = () => {
  const images = [img1, img2, img3, img4, img5, img6, img3, img4, img1, img2, img3, img4];

  return (
    <>
      <section className="mx-auto p-5 mt-5 h-auto sm:h-[50vh]">
        {/* Header Section */}
        <div className="container mx-auto text-center">
          <header className="mb-6">
            <h2 className="text-customBodyColor text-4xl font-bold">
              Awards & Recognitions
            </h2>
          </header>
          <p className="text-gray-600 text-lg font-light leading-relaxed px-5">
            See our accomplishments of bringing tangible value to our clients, our people, 
            and our communities being acknowledged by some of the most important and 
            influential publications and organizations around the world.
          </p>
        </div>

        {/* Scrolling Image Section */}
        <div className="px-10 sm:px-28">
          <div
            className="w-full overflow-x-auto scrollbar-hide mt-10 sm:mt-20"
            style={{
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex space-x-8 sm:space-x-12 md:space-x-16 h-full items-center px-2 sm:px-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="h-12 sm:h-16 md:h-24 object-contain"
                  alt={`Award ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Button Section */}
      <div className="flex relative justify-center py-10 sm:py-20 hidden">
        <button className="w-64 sm:w-72 md:w-80 h-12 sm:h-14 text-sm sm:text-md bg-custom-gradient text-customBodyColor font-medium rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          View All Awards & Recognitions
        </button>
      </div>
    </>
  );
};

export default AwardSection;
