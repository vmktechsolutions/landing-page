import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../../../public/logo.png";
import facebook from '../../assets/facebook.png';
import applestore from '../../assets/applestore.png';
import googleplay from '../../assets/googleplaystore.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants for scroll effects
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const sttt = "text-lg font-bold mb-6 text-slate-700 relative inline-block";
  const linkss = "text-gray-600 hover:text-slate-800 transition-colors duration-300"

  return (
    <footer className="relative bg-gradient-to-b from-gray-300 to-slate-300 text-slate-800 pt-20 pb-10 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(var(--custom-gradient-from-rgb), 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(var(--custom-gradient-from-rgb), 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'top',
            animation: 'gridMove 20s linear infinite'
          }}
        />

        {/* Glowing Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[2px] w-full"
              style={{
                top: `${20 * i}%`,
                background: 'linear-gradient(90deg, transparent, rgba(var(--custom-gradient-from-rgb), 0.5), transparent)',
                animation: `glowLine ${3 + i}s linear infinite`,
                opacity: 0.3
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: 'rgba(var(--custom-gradient-from-rgb), 0.5)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${10 + Math.random() * 10}s linear infinite`,
                boxShadow: '0 0 10px rgba(var(--custom-gradient-from-rgb), 0.5)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content with Scroll Animations */}
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            className="md:col-span-4"
            variants={itemVariants}
          >
            <img
              src={logo}
              alt="Company Logo"
              className="h-32 mb-6 filter brightness-110"
            />
            
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61572284557456", color: "#1877F2" },
                { icon: FaTwitter, link: "https://x.com/home", color: "#1DA1F2" },
                { icon: FaInstagram, link: "https://www.instagram.com/codesandmarketing/", color: "#E4405F" },
                { icon: FaLinkedinIn, link: "#", color: "#0A66C2" },
                // { icon: FaYoutube, link: "#", color: "#FF0000" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 shadow-slate-800 shadow-sm rounded-full flex items-center justify-center transition-all duration-300 bg-slate-400"
                  whileHover={{ 
                    scale: 1.1,
                   
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-gray-300 hover:text-white" style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
          >
            <h3 className={sttt}>
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-slate-700"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/AboutUs2" },
                { name: "Contact Us", path: "/contact" },
                { name: "Terms & Condition", path: "/terms" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={item.path} className={linkss}>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
          >
            <h3 className={sttt}>
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-slate-700"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Mobile App Development", path: "/app-Development" },
                { name: "Website Development", path: "/web-Development" },
                { name: "SEO Services", path: "/seo-services" },
                { name: "Digital Marketing", path: "/digital-marketing" }
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={service.path} className={linkss}>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>


          {/* Contact Info */}
          <motion.div
            className="md:col-span-4"
            variants={itemVariants}
          >
            <h3 className={sttt}>
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-slate-700"></span>
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <FaMapMarkerAlt className="text-custom-gradient mt-1" />
                <p className={linkss}>India, Noida sec - 62, ICONIC</p>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <FaPhoneAlt className="text-custom-gradient" />
                <p className={linkss}>+91 95571 10400</p>
                {/* <p className="text-gray-400">+91-6393377862</p> */}
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="text-custom-gradient" />
                <p className={linkss}>karuna@vmktechsolutions.com</p>
              </motion.div>

              {/* Newsletter Subscription */}
              {/* <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h4>
                <motion.div
                  className="flex"
                  whileHover={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-custom-gradient text-gray-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-custom-gradient text-white rounded-r-md"
                  >
                    Subscribe
                  </motion.button>
                </motion.div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={linkss}>
              {currentYear} VMK Tech Solutions - All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={linkss}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div> 

      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        @keyframes glowLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, 10px); }
          50% { transform: translate(0, 20px); }
          75% { transform: translate(-10px, 10px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;