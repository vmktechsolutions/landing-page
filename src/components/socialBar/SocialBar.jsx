import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialBar = () => {

  const socialIcons = [
    { icon: FaTwitter, href: "https://twitter.com", color: "hover:text-blue-400" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61573448232179", color: "hover:text-blue-600" },
    { icon: FaInstagram, href: "https://www.instagram.com/vmktechsolutions/", 
      color: "hover:text-pink-500" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/vmk-tech-solutions/?viewAsMember=true", 
      color: "hover:text-blue-500" },
    { icon: FaGithub, href: "https://github.com", color: "hover:text-gray-800" }
  ];

  return (
    <div className="fixed left-3 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-5 hidden md:flex">
      <div className="flex flex-col items-center space-y-5 bg-white py-4 px-3 rounded-full shadow-lg">
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-600 transition-all duration-300 transform hover:scale-125 ${social.color}`}
          >
            <social.icon size={22} />
          </a>
        ))}
      </div>
      <div className="mx-auto w-px h-16 bg-gray-300"></div>
    </div>
  );
};

export default SocialBar;