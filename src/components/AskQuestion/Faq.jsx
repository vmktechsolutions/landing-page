import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What services does VMK Tech solutions provide?",
    answer: "We offer a comprehensive range of services including custom software development, mobile app development, web development, UI/UX design, digital marketing, and IT consulting. Our solutions are tailored to meet your specific business needs."
  },
  {
    question: "How do you ensure project quality and timely delivery?",
    answer: "We follow agile methodologies and have a robust quality assurance process. Our team uses modern project management tools, conducts regular code reviews, and maintains transparent communication throughout the development lifecycle."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our team is proficient in a wide range of technologies including React, Node.js, Python, Java, iOS/Android development, cloud services (AWS, Azure, GCP), and emerging technologies like AI/ML and blockchain."
  },
  {
    question: "How do you handle project communication and updates?",
    answer: "We maintain regular communication through scheduled meetings, progress reports, and dedicated project management platforms. You'll have a dedicated project manager and access to real-time project updates."
  },
  {
    question: "What is your approach to data security and privacy?",
    answer: "We implement industry-standard security protocols and follow best practices for data protection. This includes secure coding practices, encryption, regular security audits, and compliance with relevant data protection regulations."
  }
];

const FaqItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      className="mb-4 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        className="w-full text-left p-5 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden border-l-4 border-transparent hover:border-blue-600"
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-base md:text-lg text-gray-800 pr-8">
            {question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="text-blue-600 absolute right-5 top-1/2 -translate-y-1/2"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </motion.div>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-gray-50 rounded-lg mt-2">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqIllustration = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative w-[500px] h-[500px] mx-auto"
  >
    {/* Neural Network Background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <pattern id="neuralGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.5" fill="#3B82F6" opacity="0.1" />
            <line x1="10" y1="10" x2="20" y2="20" stroke="#3B82F6" strokeWidth="0.1" opacity="0.05" />
            <line x1="10" y1="10" x2="20" y2="0" stroke="#3B82F6" strokeWidth="0.1" opacity="0.05" />
            <line x1="10" y1="10" x2="0" y2="20" stroke="#3B82F6" strokeWidth="0.1" opacity="0.05" />
            <line x1="10" y1="10" x2="0" y2="0" stroke="#3B82F6" strokeWidth="0.1" opacity="0.05" />
          </pattern>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#neuralGrid)" />
        <circle cx="50" cy="50" r="45" fill="url(#glowGradient)" />
      </svg>
    </motion.div>

    {/* Quantum Rings */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40 - i * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={`quantumRing${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.05 + i * 0.05} />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity={0.05 + i * 0.05} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.05 + i * 0.05} />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r={48 - i * 4}
            fill="none"
            stroke={`url(#quantumRing${i})`}
            strokeWidth={0.5 + i * 0.2}
            strokeDasharray={`${1 + i} ${3 + i}`}
          />
        </svg>
      </motion.div>
    ))}

    {/* Digital Circuits */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0"
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.g filter="url(#neonGlow)">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${50 + 30 * Math.cos(i * Math.PI / 4)} ${50 + 30 * Math.sin(i * Math.PI / 4)} L${50} 50`}
              stroke={i % 2 ? "#3B82F6" : "#8B5CF6"}
              strokeWidth="0.3"
              strokeDasharray="1 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 1, 0],
                strokeWidth: ["0.2", "0.4", "0.2"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          ))}
        </motion.g>
      </svg>
    </motion.div>

    {/* Holographic Question Mark */}
    <motion.div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-48 h-48"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <filter id="holoGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feFlood floodColor="#3B82F6" result="glowColor"/>
              <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
              <feMerge>
                <feMergeNode in="softGlow"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA">
                <animate attributeName="stop-color" values="#60A5FA;#8B5CF6;#3B82F6;#60A5FA" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#8B5CF6">
                <animate attributeName="stop-color" values="#8B5CF6;#3B82F6;#60A5FA;#8B5CF6" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#3B82F6">
                <animate attributeName="stop-color" values="#3B82F6;#60A5FA;#8B5CF6;#3B82F6" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <filter id="neonFlare">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="neon"/>
              <feComposite in="SourceGraphic" in2="neon" operator="over"/>
            </filter>
          </defs>
          
          {/* Main Question Mark */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M50 20C65 20 70 30 70 40C70 50 60 55 50 55L50 65"
            stroke="url(#holoGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter="url(#holoGlow)"
          />

          {/* Outer Glow Effect */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            d="M50 20C65 20 70 30 70 40C70 50 60 55 50 55L50 65"
            stroke="url(#holoGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            filter="url(#neonFlare)"
            opacity="0.3"
          />

          {/* Energy Dots */}
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              cx={50 + Math.cos(i * Math.PI / 2.5) * 25}
              cy={40 + Math.sin(i * Math.PI / 2.5) * 25}
              r="2"
              fill="url(#holoGradient)"
              filter="url(#holoGlow)"
            />
          ))}

          {/* Main Dot with Pulse */}
          <motion.circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            cx="50"
            cy="80"
            r="3"
            fill="url(#holoGradient)"
            filter="url(#holoGlow)"
          />
          
          {/* Pulsing Ring around Dot */}
          <motion.circle
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            cx="50"
            cy="80"
            r="3"
            stroke="url(#holoGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#neonFlare)"
          />

          {/* Tech Lines */}
          {[...Array(3)].map((_, i) => (
            <motion.line
              key={i}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
              x1={45 + i * 5}
              y1="85"
              x2={45 + i * 5}
              y2="75"
              stroke="url(#holoGradient)"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              filter="url(#neonFlare)"
            />
          ))}
        </svg>

        {/* Hologram Scan Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              top: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1
            }}
            className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            style={{ opacity: 0.3 - i * 0.1 }}
          />
        ))}
      </motion.div>
    </motion.div>

    {/* Quantum Particles */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -15 * Math.random(), 0],
          x: [0, 15 * Math.random() - 7.5, 0],
          opacity: [0, 0.8, 0],
          scale: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      >
        <div className={`w-1 h-1 rounded-full ${i % 2 ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-purple-400 to-blue-400'}`} />
      </motion.div>
    ))}

    {/* Energy Fields */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0, 0.2],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 1,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full border border-blue-400/10" 
             style={{ borderWidth: `${0.5 + i * 0.5}px` }} />
      </motion.div>
    ))}
  </motion.div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="block text-blue-600 text-sm md:text-base font-semibold mb-2"
            >
              FAQs 
            </motion.span>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
            Got Questions? We've Got Answers
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mx-auto rounded-full"
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 max-w-7xl mx-auto">
          {/* FAQ Questions */}
          <div className="w-full">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  index={index}
                />
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Faq;
