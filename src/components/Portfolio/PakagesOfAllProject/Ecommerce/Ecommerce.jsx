import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  ShoppingCart, BarChart3, Truck, CreditCard, Globe2, Users, Box,
  Headphones, ChevronRight, Shield, Zap, ArrowRight, Settings,
  Smartphone, Repeat, Star, Clock, Cloud
} from 'lucide-react';
import ContactUs from '../../../../pages/contactUs';
import { Link } from 'react-router-dom';

// HeroSection Component
const HeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, once: true
    })
  }, []);
  return (
    <section className="relative bg-gradient-to-r from-violet-600 via-indigo-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10"></div>
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            data-aos="fade-up" data-aos-duration="600"
          >
            <h1 className="text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Future of E-commerce Is Here
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Experience next-generation e-commerce with AI-powered insights, blockchain security, and seamless omnichannel integration.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105">
                  Launch Store
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 border-2 border-white rounded-full font-bold hover:bg-white/10 transition-all">
                  Watch Demo
                </button>
              </Link>
            </div>
          </div>
          <div
            className="relative" data-aos="zoom-in" data-aos-duration="600"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-white/20 rounded-lg w-3/4 animate-pulse"></div>
                  <div className="h-8 bg-white/20 rounded-lg w-1/2 animate-pulse"></div>
                  <div className="h-32 bg-white/20 rounded-lg mt-4 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FeaturesGrid Component
const FeaturesGrid = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Analytics",
      description: "Real-time insights and predictive analytics to optimize your business decisions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Blockchain Security",
      description: "Advanced encryption and blockchain technology for secure transactions"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Optimized for all devices with progressive web app capabilities"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Integration",
      description: "Seamless cloud infrastructure with automatic scaling"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="text-center mb-16" data-aos="fade-up" data-aos-duration="600"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Future-Ready Features</h2>
          <p className="text-xl text-gray-400">Powered by cutting-edge technology</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-indigo-500 transition-all group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="{index * 100}"
            >
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// StatsDisplay Component
const StatsDisplay = () => {
  const stats = [
    { value: "99.99%", label: "Uptime", icon: <Clock className="w-6 h-6" /> },
    { value: "0.1s", label: "Latency", icon: <Zap className="w-6 h-6" /> },
    { value: "100+", label: "Users", icon: <Users className="w-6 h-6" /> },
    { value: "$1M+", label: "Transactions", icon: <CreditCard className="w-6 h-6" /> }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="{index * 100}"
            >
              <div className="flex justify-center mb-4 text-indigo-400">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// TestimonialSlider Component
const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Director",
      company: "TechRetail",
      content: "The AI-powered analytics have transformed how we understand our customers. Incredible platform!"
    },
    {
      name: "Michael Chang",
      role: "CTO",
      company: "Digital Markets",
      content: "The blockchain security features give us and our customers peace of mind. Outstanding service!"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-xl text-gray-400">Success stories from industry leaders</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900 rounded-2xl border border-gray-800" data-aos="fade-left" data-aos-duration="600" data-aos-delay="{index * 100}"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTASection Component
const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-violet-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Step Into the Future?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already thriving with our next-gen e-commerce platform.
            </p>
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center gap-2">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div

            className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20" data-aos="zoom-in" data-aos-duration="600"
          >
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 focus:border-transparent outline-none"
              />
              <button className="w-full px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-blue-50 transition-all">
                Start Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const EcommerceLanding = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesGrid />
      <StatsDisplay />
      <TestimonialSlider />
      {/* <CTASection /> */}
      <ContactUs />
    </div>
  );
};

export default EcommerceLanding;