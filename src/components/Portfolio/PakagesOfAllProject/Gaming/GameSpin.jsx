import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Gamepad2, X, Cpu, Monitor } from 'lucide-react';
import img1 from "../../../../assets/game/image-removebg-preview (10).png";
import img2 from "../../../../assets/game/image-removebg-preview (11).png";
import img3 from "../../../../assets/game/image-removebg-preview (7).png";
import img4 from "../../../../assets/game/image-removebg-preview (8).png";
import img5 from "../../../../assets/game/image-removebg-preview (9).png";
import img6 from "../../../../assets/game/img1.png";

const TechSphere = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    { id: 1, name: "Godot", description: "Experience ultra-realistic lighting and reflections with advanced ray tracing technology.", image: img1, color: "from-yellow-400 to-orange-500" },
    { id: 2, name: "Neural Gaming AI", description: "An adaptive AI system that learns and evolves based on player behavior.", image: img2, color: "from-blue-500 to-indigo-600" },
    { id: 3, name: "UNITY", description: "Low-latency cloud gaming infrastructure for seamless access to games on any device.", image: img3, color: "from-cyan-400 to-blue-500" },
    { id: 4, name: "Unreal Engine", description: "Advanced tactile response system providing immersive physical feedback.", image: img4, color: "from-purple-500 to-pink-600" },
    { id: 5, name: "VR Integration", description: "Full virtual reality support with motion tracking and spatial audio.", image: img5, color: "from-green-400 to-emerald-600" },
    { id: 6, name: "DLSS 3.0", description: "AI-powered super sampling delivering ultra-high frame rates.", image: img6, color: "from-red-500 to-orange-600" },
  ];

  const handleSphereClick = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setSelectedTech(null);
      setTimeout(() => setIsSpinning(false), 2500);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedTech(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full min-h-[300px] py-10 overflow-hidden bg-gradient-to-b from-white to-white flex flex-col items-center">
      <div className="text-center mb-10 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4" data-aos="fade-up" data-aos-duration="800">
          {/* <Gamepad2 className="w-10 h-10 text-cyan-400" /> */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            GameTech Hub
          </h2>
          {/* <Monitor className="w-10 h-10 text-cyan-400" /> */}
        </div>
      </div>

      <div className="relative max-w-7xl w-full h-[500px] flex items-center justify-center">
        <div className="absolute w-full h-full flex items-center justify-center">
          {technologies.map((tech, index) => {
            const angle = (index * 360) / technologies.length;
            const radius = 220;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={tech.id}
                className="absolute" data-aos="zoom-in"
                data-aos-duration="2500"
                data-aos-delay="100"
                onClick={() => !isSpinning && setSelectedTech(tech)}
              >
                <div
                  className={`w-28 h-28 hover-effect bg-gradient-to-br ${tech.color} rounded-full shadow-lg flex items-center justify-center cursor-pointer backdrop-blur-sm border border-white/10`}
                  data-aos="zoom-in" data-aos-duration="300"
                  style={'.hover-effect:hover{   transform: scale(1.15) rotate(5deg); transition: transform 0.3s ease-in-out;} .hover-effect:active { transform: scale(0.95);}'}

                >
                  <img src={tech.image} alt={tech.name} className="w-20 h-20" />
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="relative w-36 h-36 hover-scale rounded-full flex items-center justify-center cursor-pointer" data-aos="zoom-in" data-aos-duration="300"
          style={'.hover-scale:hover{transform: scale(1.1); transition: transform 0.3s ease-in-out;}  .hover-scale:active{transform: scale(0.95);}'}
          onClick={handleSphereClick}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
          {/* <Cpu className="w-16 h-16 text-cyan-400 animate-pulse" /> */}
          <div className='w-28 h-28 bg-custom-gradient rounded-full'></div>

        </div>
      </div>

      {selectedTech && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm" data-aos="fade-in" data-aos-duration="800"
          onClick={() => setSelectedTech(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 max-w-lg mx-4  border border-cyan-500/20" data-aos="fade-in" data-aos-duration="800"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedTech.name}</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedTech.description}</p>
            <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity" onClick={() => setSelectedTech(null)}>
              Learn More About {selectedTech.name}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechSphere;