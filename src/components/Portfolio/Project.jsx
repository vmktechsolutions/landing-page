import React from "react";
import { motion } from "framer-motion";
import img3 from '../../assets/portfolio/iPhone 16 Pro.png';
import img1 from "../../assets/portfolio/Screenshot_2025-02-08-16-00-34-99_5f5658b955d33e1676e20b39f111b3fc.webp";
import img2 from '../../assets/portfolio/image copy.webp';

const ProjectCard = ({ image, title, subtitle, link, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ scale: 1.02 }}
    className="group bg-white rounded-[40px] border shadow-lg hover:shadow-2xl transition-all duration-300 transform"
  >
    <motion.div 
      className="aspect-square w-full mb-4 bg-gray-50 rounded-[40px] overflow-hidden border"
    >
      <motion.img 
        whileHover={{ scale: 1.00 }}
        transition={{ duration: 0.3 }}
        src={image} 
        alt={title} 
        className="w-full h-auto" 
      />
    </motion.div>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 + index * 0.2 }}
      className="space-y-2 p-4"
    >
      <motion.span 
        whileHover={{ scale: 1.05 }}
        className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
      >
        Featured
      </motion.span>
      <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
      <motion.a 
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        href={link} 
        className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium"
      >
        Read More →
      </motion.a>
    </motion.div>
  </motion.div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      image: img1,
      title: "FortuneTalk App",
      subtitle: "FortuneTalk is an astrology app that provides personalized horoscopes, tarot readings, and celestial insights. Connect with expert astrologers for guidance on love, career, and life",
      link: "/FortuneTalk",
    },
    {
      image: img3,
      title: "E-Commerce App",
      subtitle: "E-Commerce is a user-friendly app that makes local buying and selling effortless. Users can list products, find great deals, and connect securely with buyers and sellers nearby.",
      link: "#",
    },
    {
      image: img2,
      title: " Jewellery",
      subtitle: "Jewellery offers exquisite, handcrafted gold, diamond, and silver ornaments, blending tradition with modern elegance.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-[length:200%_auto] animate-background-pan bg-clip-text text-transparent mb-6">
          Featured Projects
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-600 max-w-7xl mx-auto"
        >
          Discover our innovative solutions that help businesses transform and grow in the digital age.
          Each project represents our commitment to excellence and cutting-edge technology.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;