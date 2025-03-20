import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Home, Globe, Code, Server } from "lucide-react";
import RealEstate from "./RealEstate";
import TechStack from "../../../WebDevelopment/techStack";
import Services from "../../../AndroidDevelopment/Services";
import ContactUs from "../../../../pages/contactUs";
const RealEstateTech = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const services = [
    { icon: <Home size={40} />, title: "Real Estate Apps", description: "Custom mobile applications for property listings, management, and more." },
    { icon: <Globe size={40} />, title: "Website Development", description: "Scalable and responsive websites for real estate businesses." },
    { icon: <Code size={40} />, title: "Custom Software", description: "Tailor-made digital solutions for real estate professionals." },
    { icon: <Server size={40} />, title: "Technical Consulting", description: "Expert guidance for building tech-driven real estate solutions." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12">
      {/* Hero Section */}
      <section className="text-center mb-6">
        <RealEstate />
      </section>

      {/* Services Section */}
      <h1 className="text-center font-bold text-4xl md:text-6xl mb-10 relative text-blue-700">Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-xl text-center flex flex-col items-center" data-aos="zoom-in"
          >
            <div className="mb-4 text-greenColor">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-10 py-10">
        <Link to="/contact">
          <button
            className="px-8 py-4 bg-custom-gradient text-customBodyColor font-medium rounded-full transition-all hover:bg-blue-700" data-aos="zoom-in"
          >
            Get a Free Consultation
          </button>
        </Link>
      </div>
      <TechStack />
      <Services />
      <ContactUs />
    </div>
  );
};

export default RealEstateTech;
