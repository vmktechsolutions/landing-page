import React from 'react';
import { Code, Cloud, Shield } from 'lucide-react';


const CategoryCard = ({ title, description, icon: Icon, index }) => (
  <div 
    className="relative group p-8 rounded-2xl bg-gradient-to-br from-emerald-700/50 to-emerald-900/50 backdrop-blur-sm border border-emerald-600/20 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:-translate-y-1"
    style={{ 
      animationDelay: `${index * 150}ms`,
      animation: 'fade-in-up 0.6s ease-out forwards'
    }}
  >
    <div className="absolute inset-0 bg-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative space-y-4">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 p-2.5 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
        <Icon className="w-6 h-6" />
      </div>

      <div className="space-y-4">
        <h3 className="text-white text-xl font-medium flex items-center gap-2">
          {title}
          <div className="h-px w-8 bg-custom-gradient group-hover:w-12 transition-all duration-300" />
        </h3>
        <p className="text-emerald-100/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <button className="text-emerald-300 text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-emerald-200">
        Learn more
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

const ProjectCategories = () => {
  const categories = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Expert software solutions tailored to your business needs. From web applications to enterprise systems, we deliver scalable and efficient solutions using cutting-edge technologies."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud infrastructure and migration services. We help businesses leverage AWS, Azure, and Google Cloud to optimize operations and reduce costs while ensuring maximum security."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets. Our team implements robust security measures, conducts regular audits, and ensures compliance with industry standards."
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 relative">
            Project Categories
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-custom-gradient" />
          </h2>
          <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of software development services and find the perfect solution for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              index={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCategories;