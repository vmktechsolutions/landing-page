import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/logo_searcho.png";
import img3 from "../assets/blue.png";

const Invovations = () => {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row justify-center lg:justify-between h-auto lg:h-[45rem]">
        <div className="bg-bodyColor w-full lg:w-1/2 px-4 lg:px-0">
          <img
            className="h-16 mt-16 md:mt-20 mx-auto lg:ml-28"
            src={img2}
            alt="img"
          />
          <h1 className="text-white font-bold text-4xl mt-3 text-center lg:text-left lg:ml-28">
            Developed a SuperApp
          </h1>
          <h1 className="text-white font-medium mt-6 text-3xl text-center lg:text-left lg:ml-28">
            for India's Fastest Growing Corporate
          </h1>
          <div className=" group-container mb-9 md:mb-0">
            <p className="text-white font-bold mt-16 text-3xl text-center lg:text-left lg:ml-28">
              500K+
            </p>
            <p className="text-white font-light text-md mt-2 text-center lg:text-left lg:ml-28">
              App Downloads
            </p>
            <hr className="w-4/12 mx-auto lg:mx-0 lg:ml-28" />
            <p className="text-white font-bold mt-10 text-3xl text-center lg:text-left lg:ml-28">
              8.14T
            </p>
            <p className="text-white font-light text-md mt-2 text-center lg:text-left lg:ml-28">
              Reviews
            </p>
            <hr className="w-4/12 mx-auto lg:mx-0 lg:ml-28" />
            <p className="text-white font-bold mt-10 text-3xl text-center lg:text-left lg:ml-28">
              4.8
            </p>
            <p className="text-white font-light text-md mt-2 text-center lg:text-left lg:ml-28">
              Aveage Rating
            </p>
          </div>
          <button className="border rounded-full text-white text-[0.6rem] w-44 h-10 mx-auto lg:mx-0 lg:ml-28 relative bottom-4 left-20 md:left-0 md:bottom-0 md:mt-3">
            Read case Study
          </button>
        </div>

        <div className="bg-bodycolorGrey w-full lg:w-1/2 h-[26rem] lg:h-auto ">
          <img
            className="h-[20rem] w-auto md:h-[33rem] mt-10 md:mt-20 mx-auto lg:ml-0"
            src={img1}
            alt="img"
          />
          <img
            className="relative right-0 bottom-[20rem] md:bottom-[31rem] h-[20rem] w-auto md:h-[30rem] mx-auto lg:right-20 lg:bottom-[31rem]"
            src={img3}
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default Invovations;
