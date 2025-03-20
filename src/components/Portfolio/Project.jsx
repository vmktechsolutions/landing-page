import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import img3 from '../../assets/portfolio/iPhone 16 Pro.png';
import img1 from "../../assets/portfolio/Screenshot_2025-02-08-16-00-34-99_5f5658b955d33e1676e20b39f111b3fc.webp";
import img2 from '../../assets/portfolio/image copy.webp';

const ProjectCard = ({ image, title, subtitle, link, index }) => (
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []),
  <div
    className="group bg-white rounded-[40px] border shadow-lg hover:shadow-2xl transition-all duration-300 transform" data-aos="fade-up" data-aos-duration="500" data-aos-delay="index * 200"
  >
    <div
      className="aspect-square w-full mb-4 bg-gray-50 rounded-[40px] overflow-hidden border"
    >
      <img

        src={image}
        alt={title}
        className="w-full h-auto" data-aos="zoom-in" data-aos-duration="300"
      />
    </div>
    <div

      className="space-y-2 p-4" data-aos="fade-in" data-aos-duration="800" data-aos-delay="{200 + index * 200}"
    >
      <span
        className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium" data-aos="fade-in" data-aos-duration="800"
      >
        Featured
      </span>
      <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
      <a
        href={link}
        className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium" data-aos="fade-in" data-aos-duration="800"
      >
        Read More →
      </a>
    </div>
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      image: img1,
      title: "FortuneTalk App",
      subtitle: "FortuneTalk is an astrology app that provides personalized horoscopes, tarot readings, and celestial insights. Connect with expert astrologers for guidance on love, career, and life",
      link: "/FortuneTalk",
    },
    {
      image: img3,
      title: "E-Commerce App",
      subtitle: "E-Commerce is a user-friendly app that makes local buying and selling effortless. Users can list products, find great deals, and connect securely with buyers and sellers nearby.",
      link: "#",
    },
    {
      image: img2,
      title: " Jewellery",
      subtitle: "Jewellery offers exquisite, handcrafted gold, diamond, and silver ornaments, blending tradition with modern elegance.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-50">
      <div
        className="text-center mb-10" data-aos="fade-down" data-aos-duration="600"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-[length:200%_auto] animate-background-pan bg-clip-text text-transparent mb-6">
          Featured Projects
        </h1>
        <p
          className="text-xl text-gray-600 max-w-7xl mx-auto" data-aos="fade-in" data-aos-duration="600" data-aos-delay="300"
        >
          Discover our innovative solutions that help businesses transform and grow in the digital age.
          Each project represents our commitment to excellence and cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;