import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../../../public/logo.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const currentYear = new Date().getFullYear();
  const sttt = "text-lg font-bold mb-6 text-slate-700 relative inline-block";
  const linkss = "text-gray-600 hover:text-slate-800 transition-colors duration-300";

  return (
    <footer className="relative bg-gradient-to-b from-gray-300 to-slate-300 text-slate-800 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-4" data-aos="fade-up">
            <img src={logo} alt="Company Logo" className="h-32 mb-6 filter brightness-110" />
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61573448232179", color: "#1877F2" },
                { icon: FaTwitter, link: "https://x.com/home", color: "#1DA1F2" },
                { icon: FaInstagram, link: "https://www.instagram.com/vmktechsolutions/", color: "#E4405F" },
                { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/vmk-tech-solutions/posts/?feedView=all&viewAsMember=true", color: "#0A66C2" }
              ].map((social, index) => (
                <a key={index} href={social.link} className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-400 shadow-md transition-all duration-300 hover:bg-slate-500" data-aos="zoom-in">
                  <social.icon className="text-gray-300 hover:text-white" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2" data-aos="fade-up">
            <h3 className={sttt}>Company<span className="absolute -bottom-2 left-0 w-20 h-1 bg-slate-700"></span></h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Contact Us", "Terms & Condition"].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`} className={linkss} data-aos="fade-left">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2" data-aos="fade-up">
            <h3 className={sttt}>Services<span className="absolute -bottom-2 left-0 w-20 h-1 bg-slate-700"></span></h3>
            <ul className="space-y-3">
              {[
                { name: "Mobile App Development", path: "/app-Development" },
                { name: "Website Development", path: "/web-Development" },
                { name: "SEO Services", path: "/seo-services" },
                { name: "Digital Marketing", path: "/digital-marketing" }
              ].map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className={linkss} data-aos="fade-left">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4" data-aos="fade-up">
            <h3 className={sttt}>Get In Touch<span className="absolute -bottom-2 left-0 w-28 h-1 bg-slate-700"></span></h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3" data-aos="fade-right">
                <FaMapMarkerAlt className="text-custom-gradient mt-1" />
                <p className={linkss}>India, Noida sec - 62, ICONIC</p>
              </div>
              <div className="flex items-center space-x-3" data-aos="fade-right">
                <FaPhoneAlt className="text-custom-gradient" />
                <p className={linkss}>+91 90279 38882</p>
              </div>
              <div className="flex items-center space-x-3" data-aos="fade-right">
                <FaEnvelope className="text-custom-gradient" />
                <p className={linkss}>info@vmktechsolutions.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t border-gray-800 pt-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row justify-between items-center px-4 py-6">
            <p className={linkss}>
              {currentYear} VMK Tech Solutions - All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={linkss}
                  data-aos="fade-up"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
