import { motion } from "framer-motion";
import React from "react";
import react from "../../assets/Icons/react 1.png";
import swiftIcon from "../../assets/Icons/icons8-next.js-128.svg";
import Angular from "../../assets/Icons/angular.svg";
import nodeJsIcon from "../../assets/Icons/node.png";
import reactNativeIcon from "../../assets/Icons/icons8-vue-js-128.svg";
import Tailwindcss from "../../assets/Icons/tailwind-css 1.png";
import Bootstrap from "../../assets/Icons/bootstrap.png";
import nodejs from "../../assets/Icons/nodejs.svg";
import dj from "../../assets/Icons/django.svg";
import larawel from "../../assets/Icons/laravel.svg";
import mongo from "../../assets/Icons/mongodb.svg";
import Sql from "../../assets/Icons/mysql.svg";
import FaPython from "../../assets/Icons/icons8-python.svg"

const TechStack = () => {
  const technologies = [
    {
      name: "React.js",
      icon: react,
      description:
        "Create Dynamic And Interactive Web Applications With The Most Popular Frontend Library.",
      delay: 0.6,
    },
    {
      name: "Next.js",
      icon: swiftIcon,
      description:
        "Enhance SEO And Performance With Server-Side Rendering And Static Site Generation.",
      delay: 0.7,
    },
    {
      name: "Vue.js",
      icon: reactNativeIcon,
      description:
        "Build Lightweight And Scalable UI Components With This Progressive JavaScript Framework.",
      delay: 0.8,
    },
    {
      name: "Angular",
      icon: Angular,
      description:
        "Develop Enterprise-Grade Web Applications With Google’s Powerful Framework.",
      delay: 0.9,
    },
    {
      name: "Tailwind CSS",
      icon: Tailwindcss,
      description:
        "Design Beautiful, Responsive, And Modern UI With A Utility-First CSS Framework.",
      delay: 1.0,
    },
    {
      name: "Bootstrap",
      icon: Bootstrap,
      description:
        "Quickly Build Responsive Websites With The World’s Most Popular CSS Framework.",
      delay: 1.1,
    },
    {
      name: "Node.js (Backend)",
      icon: nodejs,
      description:
        "Handle Server-Side Logic And APIs With The JavaScript Runtime Environment.",
      delay: 1.2,
    },
    {
      name: "Django",
      icon: dj,
      description:
        "Develop Secure And Scalable Web Applications Using Python’s High-Level Framework.",
      delay: 1.3,
    },
    {
      name: "Laravel",
      icon: larawel,
      description:
        "Build Robust And Feature-Rich Web Applications With PHP’s Most Popular Framework.",
      delay: 1.4,
    },
    {
      name: "MongoDB",
      icon: mongo,
      description: "Store And Manage Data With A Flexible NoSQL Database.",
      delay: 1.5,
    },
    {
      name: "MySQL",
      icon: Sql,
      description:
        "Handle Structured Data Efficiently With The World’s Most Popular SQL Database.",
      delay: 1.6,
    },
    {
      name: "Python",
      icon: FaPython,
description: "A powerful, easy-to-learn language for web development, data science, and automation.",
      delay: 1.6,
    },    
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-10">
      <div className="max-w-6xl mx-auto px-2">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A3DD8] mb-4">
          Innovative & Scalable Web Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Technologies We Use to Build Future-Ready Websites
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-auto ">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl py-10 px-8 shadow-lg hover:shadow-xl transition-all duration-300 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tech.delay }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-black/75 mb-4">
                  {tech.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
