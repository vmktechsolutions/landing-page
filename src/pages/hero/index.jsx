
import React from "react";
import ParticlesBackground from '../../components/particlesAnimation/ParticlesAnimation';

const CarouselPage = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-[100vh] overflow-hidden">
      <ParticlesBackground />
      <div className="absolute mt-20 sm:mt-3 flex justify-center items-center w-full h-full flex-col p-[5%]">
        <button className="text-white font-semibold w-fit p-2 bg-gradient-to-b from-[#55884a] to-[#34da58] rounded-md px-5 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >WELCOME TO VMK Tech solutions
        </button>
        <h1 className="text-[26px] sm:text-6xl font-extrabold mt-4 sm:mt-16 w-[80%] text-center">Convert Your Business into a Brand with the Best IT Services in India</h1>
        <p className="text-center">We are 165+ professional software engineers with more than 10 years of experience in delivering superior products.</p>
      </div>
    </div>
  );
};

export default CarouselPage;

