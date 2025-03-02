import React, { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  FaQuoteLeft,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaUserTie,
  FaIndustry
} from 'react-icons/fa';

import img1 from "../../../public/logo.png";
import img2 from "../../assets/Bharti1.png";
import img3 from "../../assets/chaaaruu1-removebg-preview.png";
import img4 from "../../assets/sir.png";
import PageTitle from '../../components/Pagetitle/PageTitle';

const clientData = [
  {
    id: 1,
    name: "Aman Viswakarma",
    role: "Full-stack Developer",
    industry: "Web Services",
    image: img1,
    testimonial: "As a Full-stack Developer in Web Services, I rely on cutting-edge solutions to stay ahead. VMK Tech Solutions has provided me with invaluable tools and strategies to streamline development and improve user experience. Their expertise is unparalleled!",
    socialLinks: {
      linkedin: "https://linkedin.com/in/gautam",
      twitter: "https://twitter.com/gautam",
      website: "https://gautamchowdhary.com"
    }
  },
  {
    id: 2,
    name: "Chandan Prajapati",
    role: "Full-stack Developer",
    industry: "Web Services and App services",
    image: img1,
    testimonial: "VMK Tech Solutions has been instrumental in refining my development workflow across web and app services. Their deep understanding of full-stack technologies has helped me create more scalable and efficient applications. Highly recommended!",
    socialLinks: {
      linkedin: "https://linkedin.com/in/amit",
      twitter: "https://twitter.com/amit",
      website: "https://amitsharma.tech"
    }
  },
  {
    id: 3,
    name: "Karuna Bhardhwaj",
    role: "CEO, VMK Tech Solutions",
    industry: "Web Services and Digital Marketing",
    image: img1,
    testimonial: "As the CEO of VMK Tech Solutions, I take immense pride in the impact we've made in Web Services and Digital Marketing. Our team’s dedication to innovation and client success drives us to deliver the best strategies for business growth.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/priya",
      twitter: "https://twitter.com/priya",
      website: "https://priyakapoor.com"
    }
  },
  {
    id: 4,
    name: "Kamlendra Tripathi",
    role: "Full-stack Developer",
    industry: "Web Services",
    image: img1,
    testimonial: "In the fast-evolving world of Web Services, staying updated with the latest technologies is crucial. VMK Tech Solutions has provided me with cutting-edge solutions that have significantly enhanced my development capabilities. Their expertise is truly game-changing!",
    socialLinks: {
      linkedin: "https://linkedin.com/in/prikshat",
      twitter: "https://twitter.com/prikshat",
      website: "https://fortunetalk.com"
    }
  }
];



const SocialLinks = memo(({ links }) => (
  <div className="flex space-x-4 mt-4">
    {Object.entries(links).map(([platform, link]) => {
      const IconComponent = {
        linkedin: FaLinkedin,
        twitter: FaTwitter,
        website: FaGlobe
      }[platform];

      return (
        <a
          key={platform}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 transition-colors"
        >
          <IconComponent className="text-xl" />
        </a>
      );
    })}
  </div>
));

const ClientCard = memo(({ client }) => (
  <div className="bg-white/50 rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-100 hover:shadow-xl hover:border-blue-100 relative overflow-hidden transform-gpu">
    <div className="flex flex-col items-center">
      <motion.img
        src={client.image}
        alt={client.name}
        className="w-32 h-32 rounded-full border-4 border-white shadow-md mb-4 object-cover transform-gpu will-change-transform"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        loading="lazy"
      />

      <div className="text-center">
        <h3 className="text-xl font-bold text-customBodyColor mb-1">
          {client.name}
        </h3>
        <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
          <FaUserTie className="mr-2" />
          {client.role}
        </div>
        <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
          <FaIndustry className="mr-2" />
          {client.industry}
        </div>
      </div>

      <div className="text-center mb-4">
        <FaQuoteLeft className="text-blue-400 text-2xl mx-auto mb-2 opacity-50 " />
        <p className="text-gray-600 italic text-sm">
          "{client.testimonial}"
        </p>
      </div>

      {/* <SocialLinks links={client.socialLinks} /> */}
    </div>
  </div>
));

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    lazyLoad: true,
    pauseOnHover: true,
    appendDots: dots => (
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <motion.div
      className="min-h-[60vh] bg-gradient-to-b from-gray-50 to-white py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>

      {/* Reduced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl animate-float transform-gpu will-change-transform"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                backgroundColor: `hsla(${Math.random() * 360}, 70%, 70%, 0.08)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 relative transform-gpu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
            <PageTitle title="The Team Behind the Success" />
          
          <p className="text-lg text-greyColor max-w-3xl mx-auto">
            Innovating solutions and building strong partnerships.
          </p>
        </motion.div>

        <Slider {...settings}>
          {clientData.map(client => (
            <motion.div
              key={client.id}
              className="group relative px-4 transform-gpu "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ClientCard client={client} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default memo(Client);
