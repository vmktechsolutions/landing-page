import React from 'react';
import { BiBrain } from 'react-icons/bi';
import { HiDocumentText } from 'react-icons/hi';
import { BsPalette, BsCodeSlash, BsBullseye, BsCloudUpload, BsGear } from 'react-icons/bs';

const cycleSteps = [
  {
    icon: BiBrain,
    title: "IDEATION",
    description: "Great ideas begin with a spark of imagination, but they thrive with collaboration and action",
    color: "#00FFC8", // Turquoise
    textPosition: "-left-[300px] -top-[100px]",
    iconPosition: "rotate(0deg) translate(32vh)"
  },
  {
    icon: HiDocumentText,
    title: "REQUIREMENTS",
    description: "Clear requirements lay the foundation for success, turning ideas into actionable goals. Precision today ensures excellence tomorrow.",
    color: "#96FF00", // Lime Green
    textPosition: "-left-[350px] top-[50px]",
    iconPosition: "rotate(51.43deg) translate(32vh)"
  },
  {
    icon: BsPalette,
    title: "DESIGN",
    description: "Design is where creativity meets purpose, transforming visions into experiences",
    color: "#8B4513", // Brown
    textPosition: "-left-[300px] top-[200px]",
    iconPosition: "rotate(102.86deg) translate(32vh)"
  },
  {
    icon: BsCodeSlash,
    title: "DEVELOPMENT",
    description: "Development turns ideas into reality, building solutions that shape the future.",
    color: "#0096FF", // Blue
    textPosition: "left-1/2 -translate-x-1/2 top-[350px]",
    iconPosition: "rotate(154.29deg) translate(32vh)"
  },
  {
    icon: BsBullseye,
    title: "TESTING",
    description: "Testing ensures perfection, transforming code into reliable and flawless solutions.",
    color: "#FF4500", // Orange Red
    textPosition: "left-[250px] top-[200px]",
    iconPosition: "rotate(205.71deg) translate(32vh)"
  },
  {
    icon: BsCloudUpload,
    title: "DEPLOYMENT",
    description: "Deployment is the final step where vision meets reality, delivering innovation to the world.",
    color: "#FFA500", // Orange
    textPosition: "left-[250px] top-[50px]",
    iconPosition: "rotate(257.14deg) translate(32vh)"
  },
  {
    icon: BsGear,
    title: "MAINTENANCE",
    description: "Maintenance keeps the system running smoothly, ensuring longevity and peak performance",
    color: "#FFFF00", // Yellow
    textPosition: "left-[200px] -top-[100px]",
    iconPosition: "rotate(308.57deg) translate(32vh)"
  }
];

const DevelopmentCycle = () => {
  return (
    <div className="h-[70vh] bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-full max-w-[min(700px,90vh)] aspect-square">
          {/* Connecting Circle */}
          <div className="absolute inset-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Purple gradient arc */}
              <path
                d="M50,50 m0,-32 a32,32 0 1,1 0,64 a32,32 0 1,1 0,-64"
                fill="none"
                stroke="url(#purpleGradient)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B00FF" />
                  <stop offset="100%" stopColor="#4B0082" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white rounded-full shadow-xl z-20">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-red-500"></div>
              <div className="text-center p-4">
                <h3 className="text-2xl font-black tracking-tight">
                  CODE AND<br />MARKETING
                </h3>
              </div>
            </div>
          </div>

          {/* Steps */}
          {cycleSteps.map((step, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{ transform: step.iconPosition }}
            >
              <div className="relative">
                {/* Icon Circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative"
                  style={{ 
                    backgroundColor: step.color,
                    transform: `rotate(-${index * (360 / 7)}deg)`,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="relative z-10">
                    <step.icon className="text-white text-2xl" />
                  </div>
                </div>

                {/* Connecting Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500" />

                {/* Text */}
                <div 
                  className={`absolute whitespace-normal ${step.textPosition}`}
                  style={{ transform: `rotate(-${index * (360 / 7)}deg)` }}
                >
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-600 max-w-[250px] leading-tight">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentCycle;
