import React from 'react';
import { motion } from 'framer-motion';

const CyberDNA = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative w-[500px] h-[500px] mx-auto"
  >
    {/* Tech Grid Background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <pattern id="techGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M10 0L10 10M0 10L10 10"
              stroke="#2BDE08"
              strokeWidth="0.1"
              opacity="0.1"
            />
            <circle cx="10" cy="10" r="0.5" fill="#AAFF01" opacity="0.2" />
          </pattern>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2BDE08">
              <animate attributeName="stop-color" values="#2BDE08;#AAFF01;#2BDE08" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#AAFF01">
              <animate attributeName="stop-color" values="#AAFF01;#2BDE08;#AAFF01" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <filter id="dnaGlow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.17  0 1 0 0 0.87  0 0 0 0 0.03  0 0 0 18 -7"
            />
          </filter>
        </defs>
        <rect width="100" height="100" fill="url(#techGrid)" />
      </svg>
    </motion.div>

    {/* DNA Helix */}
    <motion.div className="absolute inset-0">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* DNA Strands */}
        {[...Array(20)].map((_, i) => {
          const y = i * 5;
          const phase = (i * Math.PI) / 5;
          return (
            <g key={i}>
              {/* Left Strand */}
              <motion.path
                d={`M30,${y} Q50,${y + 2.5} 70,${y}`}
                stroke="url(#dnaGradient)"
                strokeWidth="0.5"
                fill="none"
                filter="url(#dnaGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              {/* Right Strand */}
              <motion.path
                d={`M30,${y + 2.5} Q50,${y} 70,${y + 2.5}`}
                stroke="url(#dnaGradient)"
                strokeWidth="0.5"
                fill="none"
                filter="url(#dnaGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              {/* Connection Nodes */}
              <motion.circle
                cx={50 + Math.cos(phase) * 20}
                cy={y + 1.25}
                r="0.8"
                fill="url(#dnaGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            </g>
          );
        })}
      </svg>
    </motion.div>

    {/* Data Particles */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${30 + Math.random() * 40}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0],
          x: [0, (Math.random() - 0.5) * 20],
          y: [0, (Math.random() - 0.5) * 20],
        }}
        transition={{
          duration: 2 + Math.random(),
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#2BDE08] to-[#AAFF01]" />
      </motion.div>
    ))}

    {/* Energy Fields */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.2],
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 1,
          ease: "easeInOut",
        }}
      >
        <div className="w-40 h-full rounded-full border border-[#2BDE08] opacity-20" />
      </motion.div>
    ))}

    {/* Data Streams */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-full w-0.5"
        style={{
          left: `${35 + i * 8}%`,
          background: `linear-gradient(to bottom, 
            transparent,
            ${i % 2 ? '#2BDE08' : '#AAFF01'}66,
            transparent
          )`,
          opacity: 0.3,
        }}
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: 2 + i,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}

    {/* Binary Code Effect */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-xs font-mono"
        style={{
          left: `${75 + Math.random() * 15}%`,
          top: `${Math.random() * 100}%`,
          color: '#2BDE08',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      >
        {Math.random() > 0.5 ? '1' : '0'}
      </motion.div>
    ))}
  </motion.div>
);

export default CyberDNA;
