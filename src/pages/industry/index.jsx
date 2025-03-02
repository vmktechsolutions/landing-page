import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../assets/ex1.png';
import img2 from '../../assets/ex3.png';
import img3 from '../../assets/ex11.png';
import img4 from '../../assets/ex10.png';
import img5 from "../../assets/ex12.png";

const products = [
  { 
    id: 1, 
    title: 'Mobile App Development', 
    image: img3, 
    description: 'Innovative mobile applications for iOS and Android platforms, tailored to your unique business needs and user experience requirements.', 
    link: 'Read More',
    tags: ['iOS', 'Android', 'Cross-Platform']
  },
  { 
    id: 2, 
    title: 'Web Development', 
    image: img2, 
    description: 'Cutting-edge, responsive websites that provide seamless user experiences across all devices, from desktop to mobile.', 
    link: 'Read More',
    tags: ['React', 'Next.js', 'Responsive']
  },
  { 
    id: 3, 
    title: 'Enterprise Solutions',   
    image: img1, 
    description: 'Scalable, secure, and efficient enterprise-grade software solutions that streamline business processes and drive digital transformation.', 
    link: 'Read More',
    tags: ['Cloud', 'Scalability', 'Security']
  },
  { 
    id: 4, 
    title: 'UI/UX Design', 
    image: img4, 
    description: 'Intuitive, engaging, and visually stunning user interfaces that enhance user satisfaction and drive engagement for your digital products.', 
    link: 'Read More',
    tags: ['Figma', 'Design System', 'UX']
  },
  { 
    id: 5, 
    title: 'Cross-Platform Development', 
    image: img5, 
    description: 'Modern frameworks to develop cross-platform applications that work seamlessly across multiple platforms, reducing development time and cost.', 
    link: 'Read More',
    tags: ['Flutter', 'React Native', 'Efficiency']
  }
];

const ProductCard = memo(({ product }) => {
  return (
    <div className="flex-shrink-0 w-80 my-5 group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 12 
        }}
        className="h-full rounded-custom overflow-hidden bg-white border border-gray-200 shadow-lg transform-gpu will-change-transform transition-transform duration-200 hover:scale-[1.02]"
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-56 object-cover transform-gpu"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-5 transition-opacity duration-200" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-black mb-3">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-4 min-h-[3rem]">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {product.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-greenColor bg-opacity-20 text-greenColor text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-blue-600 hover:underline cursor-pointer">
              {product.link}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-greenColor text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors hidden transform-gpu"
            >
              Explore
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

const Industry = () => {
  return (
    <div className='bg-white min-h-screen py-16 px-4 md:px-16'>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            type: "spring", 
            stiffness: 80, 
            damping: 15,
            duration: 0.5 
          }
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12 transform-gpu"
      >
        <h1 className="font-bold text-customBodyColor text-3xl md:text-5xl mb-4">
          Driving Results Through 
          <span className="block text-blue-500 mt-2">
            Dedicated Industry Expertise
          </span>
        </h1>
        <p className="text-greyColor max-w-4xl mx-auto">
          Transforming businesses with cutting-edge technological solutions that push the boundaries of innovation and efficiency.
        </p>
      </motion.div>

      <div
        className="flex overflow-x-auto space-x-8 px-4 pb-8 scroll-smooth"
        style={{
          overflowX: 'auto', 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Industry);
