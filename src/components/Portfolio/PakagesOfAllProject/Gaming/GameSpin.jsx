import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, X, Cpu, Monitor } from 'lucide-react';
import img1 from "../../../../assets/game/image-removebg-preview (10).png";
import img2 from "../../../../assets/game/image-removebg-preview (11).png";
import img3 from "../../../../assets/game/image-removebg-preview (7).png";
import img4 from "../../../../assets/game/image-removebg-preview (8).png";
import img5 from "../../../../assets/game/image-removebg-preview (9).png";
import img6 from "../../../../assets/game/img1.png";

const TechSphere = () => {
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 mb-4">
          {/* <Gamepad2 className="w-10 h-10 text-cyan-400" /> */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            GameTech Hub
          </h2>
          {/* <Monitor className="w-10 h-10 text-cyan-400" /> */}
        </motion.div>
      </div>

      <div className="relative max-w-7xl w-full h-[500px] flex items-center justify-center">
        <div className="absolute w-full h-full flex items-center justify-center">
          {technologies.map((tech, index) => {
            const angle = (index * 360) / technologies.length;
            const radius = 220;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={tech.id}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, x, y, rotate: isSpinning ? [0, 720] : 0 }}
                transition={{ duration: isSpinning ? 2.5 : 0.5, type: "spring", delay: isSpinning ? 0 : index * 0.1 }}
                onClick={() => !isSpinning && setSelectedTech(tech)}
              >
                <motion.div 
                  className={`w-28 h-28 bg-gradient-to-br ${tech.color} rounded-full shadow-lg flex items-center justify-center cursor-pointer backdrop-blur-sm border border-white/10`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={tech.image} alt={tech.name} className="w-20 h-20" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <motion.div 
          className="relative w-36 h-36 rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSphereClick}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
          {/* <Cpu className="w-16 h-16 text-cyan-400 animate-pulse" /> */}
          <div className='w-28 h-28 bg-custom-gradient rounded-full'></div>
          
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 max-w-lg mx-4  border border-cyan-500/20"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedTech.name}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedTech.description}</p>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity" onClick={() => setSelectedTech(null)}>
                Learn More About {selectedTech.name}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechSphere;