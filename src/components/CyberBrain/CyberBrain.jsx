import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const CyberBrain = () => (
  useEffect(() => {
    Aos.init({
      duration:1000 , once: true
    })
  }, []),
  
  <div
    className="relative w-[500px] h-[500px] mx-auto" data-aos="fade-up" data-aos-duration="500"
  >
    {/* Hexagonal Grid Background */}
    <div
      className="absolute inset-0" data-aos="fade-up" data-aos-duration="1000"
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
    </div>

    {/* Brain Circuit Paths */}
    <div className="absolute inset-0">
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
        <path
          d="M30,50 C30,35 40,25 50,25 C45,35 45,45 50,50"
          stroke="url(#circuitGradient)"
          strokeWidth="0.5"
          fill="none"
          filter="url(#circuitGlow)"
          className="path-animation"
          data-aos="fade-in"
          data-aos-duration="2000"
          style={'.path-animation{stroke-dasharray: 100;  stroke-dashoffset: 100;  animation: drawPath 2s ease-in-out forwards;} @keyframes drawPath{0%{ stroke-dashoffset: 100;} 100%{stroke-dashoffset: 0;}}'}
        />

        {/* Right Brain Hemisphere */}
        <path
          d="M70,50 C70,35 60,25 50,25 C55,35 55,45 50,50"
          stroke="url(#circuitGradient)"
          strokeWidth="0.5"
          fill="none"
          filter="url(#circuitGlow)"
          className="path-animation"
          data-aos="fade-in"
          data-aos-duration="2000"
          style={'.path-animation{stroke-dasharray: 100;  stroke-dashoffset: 100;  animation: drawPath 2s ease-in-out forwards;} @keyframes drawPath{0%{ stroke-dashoffset: 100;} 100%{stroke-dashoffset: 0;}}'}

        />

        {/* Neural Connections */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={50 + Math.cos((i * Math.PI) / 4) * 20}
            cy={50 + Math.sin((i * Math.PI) / 4) * 20}
            r="1"
            fill="url(#circuitGradient)"
            className="pulse" data-aos="zoom-in" data-aos-duration="2000"
            style={'.pulse{ width: 50px; height: 50px; background-color: red; border-radius: 50%; animation: pulseEffect 2s ease-in-out infinite;} @keyframes pulseEffect{0%{ transform: scale(1); opacity: 1;} 50%{ transform: scale(1.5); opacity: 0.5;} 100%{ transform: scale(1); opacity: 1;}}'}

          />
        ))}
      </svg>
    </div>

    {/* Synaptic Pulses */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute pulse" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,

        }}

      >
        <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#2BDE08] to-[#AAFF01]" />
      </div>
    ))}

    {/* Energy Waves */}
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="absolute inset-0" data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="200"
      >
        <div className="w-full h-full rounded-full border border-[#2BDE08] opacity-20" />
      </div>
    ))}

    {/* Data Streams */}
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-[#2BDE08] to-transparent" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200"
        style={{
          left: `${20 + i * 15}%`,
          opacity: 0.2,
        }}
      />
    ))}

    {/* Circuit Nodes */}
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200"
        style={{
          left: `${50 + Math.cos((i * Math.PI) / 6) * 35}%`,
          top: `${50 + Math.sin((i * Math.PI) / 6) * 35}%`,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#2BDE08] to-[#AAFF01]" />
      </div>
    ))}
  </div>
);

export default CyberBrain;
