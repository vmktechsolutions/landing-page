

import { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileNav = () => setMobileNavActive(!mobileNavActive);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
    className={`fixed top-0 left-0 w-full transition-all z-50 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
    }`}
>
    <div  className={`mx-auto flex items-center justify-between px-6 sm:w-[80%] w-full py-3 rounded-2xl ${ scrolled ? "shadow-none " : "shadow-xl bg-white mt-3" }`}>
        <Link to="/" className="flex items-center text-2xl font-bold uppercase">
          <img src={logo} className="h-20 transition-all duration-300 ${scrolled ? 'h-10' : 'h-12' }" alt="Logo" />
        </Link>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${mobileNavActive ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={toggleMobileNav}></div>

        <nav className={`fixed top-0 left-0 h-full sm:w-64 w-full bg-white shadow-xl transform ${mobileNavActive ? "translate-x-0" : "-translate-x-full"} transition-transform md:relative md:flex md:w-auto md:translate-x-0 md:shadow-none z-50`}>
          <button onClick={toggleMobileNav} className="absolute top-5 right-5 text-2xl text-gray-700 md:hidden">
            <BiX />
          </button>
          <ul className="flex flex-col md:flex-row md:space-x-10 mt-16 md:mt-0 p-5 md:p-0  bg-white sm:bg-none">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Pricing", path: "/pricing" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" }
            ].map((item, index) => (
              <li key={index} className="relative">
                <Link to={item.path}
                  className="text-gray-700 hover:text-green-500 block py-2 transition-all duration-100 group">
                  <span className="relative inline-block hover:scale-94 transition-transform duration-200 group-hover:translate-y-1">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social & Mobile Toggle */}
        <div className="flex space-x-4 items-center">
          {[FaTwitter, FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
            <Link to={"/"} key={index} className="text-gray-700 hover:text-green-500 transition-transform transform hover:scale-110">
              <Icon size={20} />
            </Link>
          ))}
          <button onClick={toggleMobileNav} className="md:hidden text-gray-700 text-2xl">
            {mobileNavActive ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
