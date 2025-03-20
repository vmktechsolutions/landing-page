import { useState, memo, } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { FaCheck, FaArrowRight, FaStar, FaGamepad, FaShoppingCart, FaGem, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaAndroid,
  FaApple,
  FaSearchPlus,
  FaPalette,
  FaRobot,
  FaCloud,
  FaBullhorn,
  FaClock,
  FaHeadset,
} from "react-icons/fa";
import icon1 from "../../assets/Icons/1.png";
import icon2 from "../../assets/Icons/2.png";
import icon3 from "../../assets/Icons/3.png";
import icon4 from "../../assets/Icons/4.png";

// React.useEffect(() => {
//   Aos.init({ duration: 1000, once: true });
// }, []);

const serviceData = [
  {
    title: "Website Development",
    image: icon1,
    description:
      "Custom web solutions with modern technologies and responsive design",
    features: [
      "AI-Powered Admin Panel",
      "Secure Payment Integration",
      "24/7 Developer Support",
    ],
    PageLink: "/web-Development",
  },
  {
    title: "Android Development",
    image: icon4,
    description:
      "Native and cross-platform Android apps for your business needs",
    features: [
      "AI-Powered Chatbot",
      "Responsive UI/UX Design",
      "White Label Solution",
    ],
    PageLink: "/app-Development",
  },
  {
    title: "Digital Marketing",
    image: icon3,
    description:
      "Boost your online presence with our tailored digital marketing strategies",
    features: [
      "Social Media Management",
      "Content Marketing",
      "Email Marketing Campaigns",
    ],
    PageLink: "/Digital-Marketing",
  },
  {
    title: "SEO Services",
    image: icon2,
    description: "Comprehensive SEO solutions to boost your online presence",
    features: ["Keyword Research", "On-Page Optimization", "Off-Page Strategy"],
    PageLink: "/SEO-Services",
  },

  // {
  //   title: "UI/UX Design",
  //   icon: FaPalette,
  //   description: "Creative and user-centered design solutions",
  //   features: [
  //     "User Research",
  //     "Wireframing",
  //     "Prototyping",
  //   ],
  //   PageLink: "/ui-ux-design",
  // },

  // {
  //   title: "AI Solutions",
  //   icon: FaRobot,
  //   description: "Cutting-edge AI integration for your applications",
  //   features: [
  //     "Machine Learning",
  //     "Natural Language Processing",
  //     "Computer Vision",
  //   ],
  //   PageLink: "/ai-solutions",
  // },

  // {
  //   title: "Cloud Services",
  //   icon: FaCloud,
  //   description: "Scalable cloud solutions for modern businesses",
  //   features: [
  //     "Cloud Migration",
  //     "AWS/Azure/GCP",
  //     "Cloud Security",
  //   ],
  //   PageLink: "/cloud-services",
  // },

  // {
  //   title: "iOS Development",
  //   icon: FaApple,
  //   description: "Premium iOS applications with cutting-edge features",
  //   features: [
  //     "AI Integration",
  //     "Intuitive Interface",
  //     "White Label Solution",
  //   ],
  //   PageLink: "/ios-development",
  // },

  // {
  //   title: "Astrology Services",
  //   image: icon1,
  //   description: "Accurate astrology predictions and horoscope analysis",
  //   features: [
  //     "Daily Horoscope",
  //     "Kundali Matching",
  //     "Numerology Readings",
  //   ],
  //   PageLink: "/astrology-services",
  // },

  // {
  //   title: "Gaming Services",
  //   image: icon1,
  //   description: "Game development and e-sports solutions",
  //   features: [
  //     "Custom Game Development",
  //     "VR/AR Integration",
  //     "Multiplayer & AI Bots",
  //   ],
  //   PageLink: "/gaming-services",
  // },

  // {
  //   title: "Ecommerce Services",
  //   image: icon1,
  //   description: "Custom e-commerce solutions with payment integration",
  //   features: [
  //     "WooCommerce & Shopify",
  //     "Multi-Vendor Marketplaces",
  //     "Secure Payment Gateways",
  //   ],
  //   PageLink: "/ecommerce-services",
  // },

  // {
  //   title: "Jewelry Website Design",
  //   image: icon1,
  //   description: "Elegant jewelry websites with stunning visual appeal",
  //   features: [
  //     "Luxury & Minimalist Design",
  //     "360° Product View",
  //     "Secure Payment Integration",
  //   ],
  //   PageLink: "/jewelry-website-design",
  // },

  // {
  //   title: "Real Estate Services",
  //   image: icon1,
  //   description: "Real estate website solutions for agents and firms",
  //   features: [
  //     "Property Listing & Search",
  //     "Interactive Maps",
  //     "Lead Management System",
  //   ],
  //   PageLink: "/real-estate-services",
  // },
];


const ServicesProvides = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // eslint-disable-next-line react/display-name
  const ServiceCard = memo(({ service, index }) => (
    <div
      key={index}
      className="group relative aos-item" data-aos="fade-up" data-aos-duration="400" data-aos-delay="{index * 100}"
    >
      <div className="relative h-full bg-white rounded-2xl p-6 shadow-md   ">
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="relative w-28 h-28 mx-auto mb-6">
              <div className="absolute inset-0 bg-white rounded-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 transform-gpu">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain transition-transform duration-100 group-hover:scale-105"
                      loading="lazy"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold  mb-4 text-center transition-colors duration-300 text-transparent bg-clip-text bg-gradient-to-r from-customBodyColor to-blue-600">
              {service.title}
            </h2>

            <p className="text-[#303030cc] mb-6 text-center">
              {service.description}
            </p>

            <ul className="space-y-3 mb-6">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-[#303030cc] group/item"
                >
                  <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    <FaCheck className="w-4 h-4 text-green-500 transition-transform duration-300 group-hover/item:scale-110" />
                  </div>
                  <span className="group-hover/item:text-[#303030cc] transition-colors duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Link to={service.PageLink} className="block">
            <button className="relative w-full px-6 py-3 text-[customBodyColor] bg-custom-gradient rounded-full transition-all duration-300 hover:shadow-md group-hover:translate-y-[-2px]">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="font-medium">Learn More</span>
                <FaArrowRight className="w-4 h-4 transform-gpu transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4 relative overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>

      {/* Reduced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                backgroundColor: `hsla(${Math.random() * 360}, 70%, 70%, 0.08)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 8 + 5}s`,
                willChange: "transform",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="text-center mb-10 relative aos-item" data-aos="fade-up" data-aos-duration="500"

        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-customBodyColor via-blue-600 to-customBodyColor bg-[length:200%_auto] animate-background-pan bg-clip-text text-transparent mb-2 pb-2">
            Our Comprehensive Services
          </h1>
          <p className="text-lg text-[#303030cc] max-w-2xl mx-auto">
            Empowering your digital journey with cutting-edge solutions and
            expert support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ServicesProvides);
