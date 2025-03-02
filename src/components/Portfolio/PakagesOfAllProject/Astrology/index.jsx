import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sun, Moon, Heart, Briefcase, Phone, Clock, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import TechStack from '../../../WebDevelopment/techStack';
import IphoneSectionServices from './IphoneSectionServices';
const AstrologyServices = () => {
  // Services Data
  const services = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: "AstroCloud Platform",
      description: "Cloud-based astrology software with advanced calculations and AI predictions.",
      features: ["Birth Chart Generator", "Transit Calculator", "AI Predictions"]
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Client Management Suite",
      description: "Complete CRM solution designed specifically for astrology practitioners.",
      features: ["Client Profiles", "Appointment Scheduling", "Payment Processing"]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Mobile Consultation App",
      description: "White-label mobile app solution for astrologers to connect with clients.",
      features: ["Video Consultations", "Chat Support", "Digital Payments"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Advanced analytics and reporting tools for astrological practices.",
      features: ["Business Insights", "Client Analytics", "Revenue Tracking"]
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Prikshat Sehgal",
      rating: 5,
      text: "AstroTech's cloud platform has revolutionized our practice. We've increased our client base by 300% since implementation.",
      service: "FortuneTalk App"
    },
    {
      name: "Charu Gandhi",
      rating: 5,
      text: "The mobile consultation app has allowed us to reach clients worldwide. The video consultation feature is seamless.",
      service: "Food Services"
    }
  ];

  // Blog Data
  const blogPosts = [
    {
      title: "AI in Modern Astrology",
      excerpt: "How artificial intelligence is revolutionizing astrological predictions and analysis.",
      link: "#"
    },
    {
      title: "Digital Transformation of Astrology",
      excerpt: "Embracing technology to scale your astrological practice in the digital age.",
      link: "#"
    },
    {
      title: "Cloud Computing in Astrology",
      excerpt: "Benefits of cloud-based platforms for modern astrology practitioners.",
      link: "#"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "Is your software suitable for beginners?",
      answer: "Yes, our platforms are designed with intuitive interfaces while offering advanced features for experienced practitioners. We also provide comprehensive training and support."
    },
    {
      question: "How do you ensure calculation accuracy?",
      answer: "Our software uses NASA-grade ephemeris data and advanced algorithms, regularly validated by expert astrologers for precision and reliability."
    },
    {
      question: "What about data security?",
      answer: "We use bank-grade encryption and comply with international data protection standards to ensure your and your clients' data remains secure."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
        <Hero/>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Feature 
              icon={<Clock />} 
              title="24/7 Availability"
              description="Round-the-clock astrology consultations"
            />
            <Feature 
              icon={<Shield />} 
              title="100% Confidential"
              description="Your personal information is secure"
            />
            <Feature 
              icon={<Users />} 
              title="Expert Astrologers"
              description="Experienced and certified consultants"
            />
            <Feature 
              icon={<Phone />} 
              title="Online Consultation"
              description="Get guidance from anywhere"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Astrology Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <IphoneSectionServices/>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
      <TechStack/>

      {/* FAQ Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQCard key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Modernize Your Astrology Practice with Technology</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of astrologers who have transformed their practice with our digital solutions.
          </p>
          <Link to="/contact">
          <motion.button
            className="px-8 py-4 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Product Demo
          </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Feature Component
const Feature = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="w-1  h-1  mx-auto mb-10 text-indigo-600 ">
      {icon}
    </div>
    <h3 className="font-medium mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Service Card Component
const ServiceCard = ({ icon, title, description, features, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm text-gray-600">
          <Star className="w-4 h-4 text-indigo-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

// Testimonial Card Component
const TestimonialCard = ({ name, rating, text, service }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="p-6 bg-white rounded-2xl shadow-lg"
  >
    <div className="flex items-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{text}</p>
    <div className="flex items-center justify-between">
      <span className="font-medium">{name}</span>
      <span className="text-sm text-indigo-600">{service}</span>
    </div>
  </motion.div>
);

// Blog Card Component
const BlogCard = ({ title, excerpt, link }) => (
  <div className="p-6 bg-white rounded-2xl shadow-lg">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{excerpt}</p>
    <a href={link} className="text-indigo-600 hover:underline">Read More</a>
  </div>
);

// FAQ Card Component
const FAQCard = ({ question, answer }) => (
  <div className="p-6 bg-white rounded-2xl shadow-lg">
    <h3 className ="text-lg font-bold mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default AstrologyServices;