import React, { useState, useEffect } from 'react';
//  web-wpp
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiAngularjsFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";

// Mobile-app technologies 
import { TbBrandReactNative } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { GrAndroid } from "react-icons/gr";
import { GrSwift } from "react-icons/gr";
import { TbBrandKotlin } from "react-icons/tb";

// backend technologies
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";
import { SiDotnet } from "react-icons/si";

// database technologies
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const Information = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    setAnimateItems(false);
    setTimeout(() => setAnimateItems(true), 50);
  }, [activeCategory]);

  const frontendTech = [
    { name: "HTML", img: FaHtml5, color: "#E34F26" },
    { name: "CSS", img: FaCss3, color: "#1572B6" },
    { name: "Bootstrap", img: FaBootstrap, color: "#7952B3" },
    { name: "Material UI", img: SiMui, color: "#0081CB" },
    { name: "Tailwind", img: RiTailwindCssFill, color: "#06B6D4" },
    { name: "JavaScript", img: FaJsSquare, color: "#F7DF1E" },
    { name: "Next.js", img: RiNextjsFill, color: "#000000" },
    { name: "Angular", img: RiAngularjsFill, color: "#DD0031" },
    { name: "React", img: RiReactjsLine, color: "#61DAFB" },
    { name: "jQuery", img: DiJqueryLogo, color: "#0769AD" }
  ];

  const mobileTech = [
    { name: "React Native", img: TbBrandReactNative, color: "#61DAFB" },
    { name: "Flutter", img: FaFlutter, color: "#02569B" },
    { name: "iOS", img: BsApple, color: "#000000" },
    { name: "Android", img: GrAndroid, color: "#3DDC84" },
    { name: "Swift", img: GrSwift, color: "#FA7343" },
    { name: "Kotlin", img: TbBrandKotlin, color: "#7F52FF" }
  ];

  const backendTech = [
    { name: "Node.js", img: FaNodeJs, color: "#339933" },
    { name: "Java", img: FaJava, color: "#007396" },
    { name: "Spring", img: SiSpring, color: "#6DB33F" },
    { name: "Python", img: FaPython, color: "#3776AB" },
    { name: "Docker", img: FaDocker, color: "#2496ED" },
    { name: "AWS", img: FaAws, color: "#FF9900" },
    { name: "Laravel", img: FaLaravel, color: "#FF2D20" },
    { name: "CodeIgniter", img: SiCodeigniter, color: "#EF4223" },
    { name: ".NET", img: SiDotnet, color: "#512BD4" }
  ];

  const databaseTech = [
    { name: "MySQL", img: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", img: SiPostgresql, color: "#336791" },
    { name: "MongoDB", img: SiMongodb, color: "#47A248" },
    { name: "Redis", img: SiRedis, color: "#DC382D" },
    { name: "Firebase", img: SiFirebase, color: "#FFCA28" }
  ];

  const categories = {
    frontend: { name: "Frontend", tech: frontendTech },
    mobile: { name: "Mobile", tech: mobileTech },
    backend: { name: "Backend", tech: backendTech },
    database: { name: "Database", tech: databaseTech }
  };

  return (
    <section className="relative text-gray-600 body-font bg-gradient-to-r from-black via-slate-900 to-black bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-10"></div>
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
        <div className="absolute -left-40 -top-40 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute right-20 bottom-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="relative container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-2 text-white tracking-tight">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Core Technologies</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded mx-auto mt-2 mb-6"></div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300">
            We leverage cutting-edge technologies to build robust, scalable, and beautiful digital solutions for our clients.
          </p>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 mx-2 my-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg'
                  : 'bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {categories[category].name}
            </button>
          ))}
        </div>
        
        {/* Tech items grid */}
        <div className="flex flex-wrap justify-center">
          {categories[activeCategory].tech.map((item, i) => (
            <div
              key={i}
              className={`w-1/2 xs:w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 p-4 transition-all duration-500 transform ${
                animateItems ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="group h-full flex flex-col items-center text-center p-4 rounded-xl bg-gray-900 bg-opacity-50 hover:bg-opacity-70 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div 
                  className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-all duration-300"
                  style={{ boxShadow: `0 0 20px ${item.color}30` }}
                >
                  <item.img
                    className="w-8 h-8 transition-all duration-300"
                    style={{ color: item.color }}
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-white title-font font-medium text-sm sm:text-base group-hover:text-blue-400 transition-all duration-300">{item.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;