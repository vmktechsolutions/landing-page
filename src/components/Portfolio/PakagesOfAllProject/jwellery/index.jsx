import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Diamond, Crown, Star, Heart, Gift, Clock, Shield, Sparkles, Code, Smartphone, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import JwelleryHero from "./JwelleryHero";
import JwellerySections from "./JwellerySections";
import JwellerySections2 from "./JwellerySections2";
import TechStack from '../../../WebDevelopment/techStack';
const JewelryTechSolutions = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, once: true
        })
    }, []);
    const heroContent = {
        title: "Innovative Jewelry Tech Solutions",
        subtitle: "Website & App Development for Jewelry Brands",
        description: "Empowering jewelry businesses with cutting-edge digital solutions. From e-commerce platforms to custom jewelry design apps, we craft seamless experiences for your customers."
    };

    const services = [
        { name: "Jewelry E-commerce Websites", icon: <Globe className="w-6 h-6" />, description: "Build a stunning online store with seamless shopping experience." },
        { name: "Custom Jewelry Design Apps", icon: <Smartphone className="w-6 h-6" />, description: "Interactive jewelry design applications for personalized customer experience." },
        { name: "AR & 3D Visualization", icon: <Layers className="w-6 h-6" />, description: "Augmented reality and 3D visualization for lifelike jewelry previews." },
        { name: "CRM & Order Management", icon: <Code className="w-6 h-6" />, description: "Streamlined customer management and order processing systems." }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FDF8F4] to-white">
            {/* Hero Section */}
            {/* <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-amber-800 to-yellow-600 bg-clip-text text-transparent">
                            {heroContent.title}
                        </h1>
                        <p className="text-2xl text-amber-800/80 mb-8">{heroContent.subtitle}</p>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">{heroContent.description}</p>
                        <Link to="/contact">
                        <motion.button className="px-8 py-4 bg-amber-800 text-white rounded-full hover:bg-amber-700 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            Get Started
                        </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section> */}
            <JwelleryHero />

            {/* Services Grid */}
            <section className="py-12 relative bottom-10 bg-white">
                <div className="max-w-7xl mx-auto px-2">
                    <h2 className="text-5xl font-bold text-center mb-10">Our Services</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-6 text-center bg-[#FDF8F4] rounded-2xl hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-20 h-20 mx-auto mb-4 bg-amber-800/10 rounded-full flex items-center justify-center text-amber-800">
                                    {service.icon}
                                </div>
                                <h3 className="font-medium mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <JwellerySections />
            <JwellerySections2 />
            <TechStack />

            {/* CTA Section */}
            <section className="py-20 bg-amber-800 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif mb-8">Transform Your jewellery Business</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">Ready to elevate your brand? Let’s build your custom jewellery website or mobile app today.</p>
                    <Link to="/contact">
                        <button className="px-8 py-4 bg-white text-amber-800 rounded-full hover:bg-amber-50 transition-colors" data-aos="zoom-in">
                            Book a Consultation
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default JewelryTechSolutions;
