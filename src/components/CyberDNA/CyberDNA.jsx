import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const CyberDNA = () => (
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []),
  <div
    className="relative w-[500px] h-[500px] mx-auto" data-aos="fade-up" data-aos-duration="800"
  >
    {/* Tech Grid Background */}
    <div
      className="absolute inset-0" data-aos="fade-up" data-aos-duration="1000"
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
    </div >

    {/* DNA Helix */}
    <div className="absolute inset-0" >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* DNA Strands */}
        {[...Array(20)].map((_, i) => {
          const y = i * 5;
          const phase = (i * Math.PI) / 5;
          return (
            <g key={i}>
              {/* Left Strand */}
              <path
                d={`M30,${y} Q50,${y + 2.5} 70,${y}`}
                stroke="url(#dnaGradient)"
                strokeWidth="0.5"
                fill="none"
                filter="url(#dnaGlow)"
                className="path-animation"
                data-aos="fade-in"
                data-aos-duration="2000"
                style={'.path-animation{ stroke-dasharray: 300;  stroke-dashoffset: 300; animation: drawPath 2s ease-in-out infinite alternate;} @keyframes drawPath {0%{  stroke-dashoffset: 300; } 100% { stroke-dashoffset: 0; }}'}
              />
              {/* Right Strand */}
              <path
                d={`M30,${y + 2.5} Q50,${y} 70,${y + 2.5}`}
                stroke="url(#dnaGradient)"
                strokeWidth="0.5"
                fill="none"
                filter="url(#dnaGlow)"
                className="path-animation"
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-delay="100"
                style={'.path-animation{ stroke-dasharray: 300;  stroke-dashoffset: 300; animation: drawPath 2s ease-in-out infinite alternate;} @keyframes drawPath {0%{  stroke-dashoffset: 300; } 100% { stroke-dashoffset: 0; }}'}
              />
              {/* Connection Nodes */}
              <circle
                cx={50 + Math.cos(phase) * 20}
                cy={y + 1.25}
                r="0.8"
                fill="url(#dnaGradient)"
                filter="url(#dnaGlow)"
                className="path-animation"
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-delay="200"
                style={'.path-animation{ stroke-dasharray: 300;  stroke-dashoffset: 300; animation: drawPath 2s ease-in-out infinite alternate;} @keyframes drawPath {0%{  stroke-dashoffset: 300; } 100% { stroke-dashoffset: 0; }}'}
              />
            </g>
          );
        })}
      </svg>
    </div >

    {/* Data Particles */}
    {
      [...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute floating-box" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${Math.random() * 100}%`,
          }}

        >
          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#2BDE08] to-[#AAFF01]" />
        </div>
      ))
    }

    {/* Energy Fields */}
    {
      [...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 flex items-center justify-center" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500"
        >
          <div className="w-40 h-full rounded-full border border-[#2BDE08] opacity-20" />
        </div>
      ))
    }

    {/* Data Streams */}
    {
      [...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-full w-0.5" data-aos="fade-in"
          data-aos-duration="1000"
          style={{
            left: `${35 + i * 8}%`,
            background: `linear-gradient(to bottom, 
            transparent,
            ${i % 2 ? '#2BDE08' : '#AAFF01'}66,
            transparent
          )`,
            opacity: 0.3,
          }}
        />
      ))
    }

    {/* Binary Code Effect */}
    {
      [...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-xs font-mono" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200"
          style={{
            left: `${75 + Math.random() * 15}%`,
            top: `${Math.random() * 100}%`,
            color: '#2BDE08',
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </div>
      ))
    }
  </div >
);

export default CyberDNA;
