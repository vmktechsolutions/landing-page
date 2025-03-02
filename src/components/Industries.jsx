import React from "react";
import img1 from "../assets/ex1.png";
import img2 from "../assets/ex2.png";
import img3 from "../assets/ex3.png";
import img4 from "../assets/ex4.png";
import img5 from "../assets/Group 130.png";

const Industries = () => {
  const images = [
    { src: img1, overlay: img5 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img1 },
    { src: img1 },
  ];

  return (
    <section className="h-[70vh] border border-gray-300 p-10">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-4xl text-customBodyColor font-semibold text-center">
          Driving Results Through Dedicated Industry Expertise
        </h1>
      </div>
      <div className="overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className="flex w-max gap-10 px-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="h-[25rem] w-72 border rounded-custom flex justify-center items-center bg-white font-medium shadow-sm relative"
            >
              <img src={image.src} alt={`industry-${index}`} className="relative bottom-[5.8rem]" />
              {image.overlay && <img src={image.overlay} className="absolute bottom-[9.5rem] mr-52" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
