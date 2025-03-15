import React from 'react';
import { 
  FaClipboardList, 
  FaPencilRuler, 
  FaLaptopCode, 
  FaSearch, 
  FaCode, 
  FaRocket, 
  FaUsersCog 
} from 'react-icons/fa';

const ProcessFlow = () => {
  const processSteps = [
    {
      id: 1,
      icon: <FaClipboardList />,
      title: "Requirement Gathering",
      color: "bg-pink-500",
      borderColor: "border-pink-500",
      shadowColor: "shadow-pink-500/20"
    },
    {
      id: 2,
      icon: <FaPencilRuler />,
      title: "Prototype",
      color: "bg-blue-500",
      borderColor: "border-blue-500",
      shadowColor: "shadow-blue-500/20"
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      title: "UI/UX Design",
      color: "bg-green-500",
      borderColor: "border-green-500",
      shadowColor: "shadow-green-500/20"
    },
    {
      id: 4,
      icon: <FaCode />,
      title: "Development",
      color: "bg-orange-500", 
      borderColor: "border-orange-500",
      shadowColor: "shadow-orange-500/20"
    },
    {
      id: 5,
      icon: <FaSearch />,
      title: "Quality Assurance",
      color: "bg-red-500",
      borderColor: "border-red-500", 
      shadowColor: "shadow-red-500/20"
    },
    {
      id: 6,
      icon: <FaRocket />,
      title: "Deployment",
      color: "bg-yellow-500", 
      borderColor: "border-yellow-500",
      shadowColor: "shadow-yellow-500/20"
    },
    {
      id: 7,
      icon: <FaUsersCog />,
      title: "Support & Maintenance",
      color: "bg-teal-500",
      borderColor: "border-teal-500", 
      shadowColor: "shadow-teal-500/20"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-950 to-blue-900 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/5 opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full border-2 border-white/5 opacity-20"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full border-2 border-white/5 opacity-20"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 rounded-full border-2 border-white/5 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">Process We Follow</span>
          <div className="absolute h-1 w-20 bg-blue-400 bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></div>
        </h2>

        {/* For large screens - horizontal timeline */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Horizontal connection line */}
          <div className="absolute h-1 bg-gradient-to-r from-pink-500 via-blue-500 to-teal-500 top-28 left-32 right-32 z-0"></div>
          
          {/* Process steps */}
          <div className="flex justify-between w-full max-w-6xl relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.id} className={`flex flex-col items-center ${index % 2 === 0 ? 'mt-0' : 'mt-32'}`}>
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center border-4 border-blue-900 ${step.shadowColor} shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl`}>
                  <div className="text-white text-2xl">
                    {step.icon}
                  </div>
                </div>
                <div className="text-white text-center mt-3 font-medium max-w-[120px]">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For medium screens - zig-zag timeline */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col max-w-xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex mb-12 relative">
                {/* Vertical connection */}
                {index !== processSteps.length - 1 && (
                  <div className={`absolute top-16 ${index % 2 === 0 ? 'left-8' : 'right-8'} w-1 h-24 ${step.color} opacity-50`}></div>
                )}
                
                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}>
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${step.shadowColor} z-10 border-4 border-blue-900`}>
                    <div className="text-white text-2xl">{step.icon}</div>
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                    <h3 className="text-white font-bold">{step.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For small screens - vertical timeline */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center mb-16 relative">
                {/* Vertical connection */}
                {index !== processSteps.length - 1 && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-current to-next opacity-70"></div>
                )}
                
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${step.shadowColor} z-10 border-4 border-blue-900`}>
                  <div className="text-white text-2xl">{step.icon}</div>
                </div>
                <h3 className="text-white font-medium mt-4 text-center">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;