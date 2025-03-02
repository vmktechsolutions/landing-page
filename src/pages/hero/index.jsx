
import React from "react";
import ParticlesBackground from '../../components/particlesAnimation/ParticlesAnimation';

const CarouselPage = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[100vh] overflow-hidden">
      <ParticlesBackground />
      <div  className="absolute top-0 left-0 w-full h-full flex flex-col mt-5 justify-center px-[5%]">
        <button className="text-white font-semibold w-fit p-2 bg-gradient-to-b from-[#9de78f] to-[#34da58] rounded-[23px] px-5"
        >WELCOME TO VMK Tech solutions
        </button>
        <h1 className="text-[26px] sm:text-6xl font-extrabold mt-4 sm:mt-16">Convert Your Business into a Brand with the Best IT Services in India</h1>
        <p>We are 165+ professional software engineers with more than 10 years of experience in delivering superior products.</p>
      </div>
    </div>
  );
};

export default CarouselPage;

