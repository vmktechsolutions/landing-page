import React from 'react';
import { motion } from 'framer-motion';

const CyberBrain = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative w-[500px] h-[500px] mx-auto"
  >
    {/* Hexagonal Grid Background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <pattern id="hexGrid" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <path
              d="M5,0 L10,2.5 L10,7.5 L5,10 L0,7.5 L0,2.5 Z"
              fill="none"
              stroke="#2BDE08"
              strokeWidth="0.1"
              opacity="0.1"
            />
          </pattern>
          <radialGradient id="cyberGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2BDE08" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#AAFF01" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#hexGrid)" />
        <circle cx="50" cy="50" r="45" fill="url(#cyberGlow)" />
      </svg>
    </motion.div>

    {/* Brain Circuit Paths */}
    <motion.div className="absolute inset-0">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2BDE08">
              <animate attributeName="stop-color" values="#2BDE08;#AAFF01;#2BDE08" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#AAFF01">
              <animate attributeName="stop-color" values="#AAFF01;#2BDE08;#AAFF01" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <filter id="circuitGlow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.17  0 1 0 0 0.87  0 0 0 0 0.03  0 0 0 18 -7"
            />
          </filter>
        </defs>

        {/* Left Brain Hemisphere */}
        <motion.path
          d="M30,50 C30,35 40,25 50,25 C45,35 45,45 50,50"
          stroke="url(#circuitGradient)"
          strokeWidth="0.5"
          fill="none"
          filter="url(#circuitGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Right Brain Hemisphere */}
        <motion.path
          d="M70,50 C70,35 60,25 50,25 C55,35 55,45 50,50"
          stroke="url(#circuitGradient)"
          strokeWidth="0.5"
          fill="none"
          filter="url(#circuitGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Neural Connections */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={50 + Math.cos((i * Math.PI) / 4) * 20}
            cy={50 + Math.sin((i * Math.PI) / 4) * 20}
            r="1"
            fill="url(#circuitGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </motion.div>

    {/* Synaptic Pulses */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 1.5 + Math.random(),
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#2BDE08] to-[#AAFF01]" />
      </motion.div>
    ))}

    {/* Energy Waves */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.2],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 1,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full border border-[#2BDE08] opacity-20" />
      </motion.div>
    ))}

    {/* Data Streams */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-[#2BDE08] to-transparent"
        style={{
          left: `${20 + i * 15}%`,
          opacity: 0.2,
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          height: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "linear",
        }}
      />
    ))}

    {/* Circuit Nodes */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5"
        style={{
          left: `${50 + Math.cos((i * Math.PI) / 6) * 35}%`,
          top: `${50 + Math.sin((i * Math.PI) / 6) * 35}%`,
        }}
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#2BDE08] to-[#AAFF01]" />
      </motion.div>
    ))}
  </motion.div>
);

export default CyberBrain;
