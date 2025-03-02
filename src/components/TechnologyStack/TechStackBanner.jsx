import React from 'react';
import img1 from '../../assets/vectorImage/Group 356.png';
import img2 from '../../assets/vectorImage/computer-removebg-preview.png';

const TechStackBanner = () => {
  return (
    <div 
      className="relative min-h-screen w-full py-20 flex items-center justify-center bg-white"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 w-full">
        
        {/* Headline - Centered in all screen sizes */}
        <div className="w-full flex justify-center relative md:bottom-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center max-w-2xl">
            Technology Stack
          </h1>
        </div>

        {/* Content - Image and Empty Right Side */}
        <div className="flex flex-col md:flex-row items-center mt-10">
          {/* Left Side - Computer Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={img2} 
              alt="Computer with code" 
              className="w-full md:w-[500px] h-auto object-contain"
            />
          </div>

          {/* Right Side - Empty for now (Can add more content later) */}
          <div className="w-full md:w-1/2 hidden sm:block"></div>
        </div>
        
      </div>
    </div>
  );
};

export default TechStackBanner;