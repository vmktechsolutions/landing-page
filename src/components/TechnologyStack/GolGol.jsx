import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const GolGol = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    });
  }, []);
  const [setRotations] = useState([0, 0, 0]); // Tracks rotation of each circle
  const [activeSpinner, setActiveSpinner] = useState(null);

  const circleIcons = [
    { src: "/android.svg", alt: "Android" },
    { src: "/python.svg", alt: "Python" },
    { src: "/java.svg", alt: "Java" },
    { src: "/vscode.svg", alt: "VS Code" },
    { src: "/react.svg", alt: "React" },
    { src: "/kubernetes.svg", alt: "Kubernetes" },
    { src: "/flutter.svg", alt: "Flutter" },
    { src: "/xd.svg", alt: "Adobe XD" },
  ];

  const handleSpin = (index) => {
    setRotations((prev) => {
      const newRotations = [...prev];
      newRotations[index] += 360; // Rotate full group
      return newRotations;
    });
    setActiveSpinner(index);
  };

  const Circle = ({ icons, index }) => (
    <div
      className="relative w-72 h-72 rotate-box rounded-full border-4 border-greenColor flex items-center justify-center" data-aos="fade-in" data-aos-duration="1500"
    >
      {icons.map((icon, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            transform: `rotate(${i * (360 / icons.length)}deg) translateY(-100px)`,
          }}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-12 h-12 object-contain"
            style={{
              transform: `rotate(-${i * (360 / icons.length)}deg)`,
              filter: "brightness(1.2)",
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
            Advanced Tech Ecosystem For Future-Ready Solutions
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Where Innovation Meets Limitless Possibilities
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-20">
          {[circleIcons, circleIcons, circleIcons].map((icons, index) => (
            <div key={index} className="relative bg-white rounded-full p-2">
              <div onClick={() => handleSpin(index)} className="cursor-pointer">
                <Circle icons={icons} index={index} />
              </div>
              <div
                className="absolute bottom-[7.5rem] left-[7.5rem] transform -translate-x-1/2 -translate-y-1/2
             w-16 h-16 rounded-full bg-[#FFE365] border-2 border-greenColor text-customBodyColor 
             flex items-center justify-center 
             text-sm font-medium z-10 pointer-events-none glowing-box" data-aos="zoom-in" data-aos-duration="2000"
              >
                <span className="font-bold text-9xl text-white scale-effect" data-aos="zoom-in" data-aos-duration="1500"
                >
                  ❂
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GolGol;