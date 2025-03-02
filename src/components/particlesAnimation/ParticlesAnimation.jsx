import React, { useEffect } from 'react';
// import Img from '../../../src/assets/web.png';

const ParticlesAnimation = () => {
  useEffect(() => {
    const particlesJS = window.particlesJS;
    
    if (particlesJS) {
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 100, 
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#000000" 
          },
          "shape": {
            "type": "circle",
          },
          "opacity": {
            "value": 0.5,
            "random": true
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            }
          }
        },
        "retina_detect": true
      });
    }
    
    // Cleanup function
    return () => {
      // There's no official cleanup method for particles.js
      // If needed, you could manually remove the canvas
      const canvas = document.querySelector('#particles-js canvas');
      if (canvas) {
        canvas.remove();
      }
    };
  }, []); // Empty dependency array ensures this runs once

  return (
    <div id="particles-js" style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      // background: '#ffffff'
    //  backgroundImage: `url(${Img})` 
    }}></div>
  );
};

export default ParticlesAnimation;