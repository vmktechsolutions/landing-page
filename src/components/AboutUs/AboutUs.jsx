import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import expriecce from "../../assets/Icons/clock.png";
import project from "../../assets/Icons/completion.png";
import img3 from "../../assets/Icons/crm.png";
import img1 from "../../assets/Icons/customer-service.png";
import happycustomer from "../../assets/Icons/customer.png";
import img4 from "../../assets/Icons/growth-graph.png";
import live from "../../assets/Icons/live.png";
import img2 from "../../assets/Icons/technology.png";

const StatItem = ({ img, number, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (isInView) {
      const target = parseInt(number);
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60 FPS

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-20 h-20 mx-auto mb-4 bg-white shadow-[1px_2px_10px_1px_rgba(155,236,0,1)] rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
        <img
          src={img}
          alt={label}
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="text-3xl font-bold text-gray-800 mb-2">
        {count}+
      </h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const AboutUs = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  const stats = [
    { img: happycustomer, number: 100, label: "Happy Clients" },
    { img: live, number: 50, label: "Live Projects" },
    { img: project, number: 200, label: "Projects Completed" },
    { img: expriecce, number: 1, label: "Years Experience" },
  ];

  const values = [
    {
      img: img1,
      title: "Technical Excellence",
      description:
        "We pride ourselves on delivering cutting-edge solutions using the latest technologies and best practices in software development.",
      details:
        "Our team stays ahead of technology trends, ensuring your solutions are built with future-proof technologies and scalable architectures.",
    },
    {
      img: img2,
      title: "Innovation First",
      description:
        "Our approach combines creativity with technical expertise to solve complex business challenges with innovative solutions.",
      details:
        "We invest in research and development to bring you the most innovative solutions that give you a competitive edge in the market.",
    },
    {
      img: img3,
      title: "Client Partnership",
      description:
        "We believe in building long-term partnerships with our clients, understanding their needs, and growing together.",
      details:
        "Our client-centric approach means we're not just service providers – we're your technology partners invested in your success.",
    },
    {
      img: img4,
      title: "Growth Focused",
      description:
        "Our solutions are designed to scale with your business, ensuring sustainable growth and long-term success.",
      details:
        "We help you navigate digital transformation with scalable solutions that adapt to your evolving business needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F4FBF4]">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 bg-gradient-to-r from-[#2563EB]/10 to-[#7AF304]/10 lg:mt-12">
        <motion.div
          className="max-w-6xl mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-black to-black bg-clip-text text-transparent text-4xl md:text-6xl mb-10">
              Welcome to CodesAndMarketing
            </span>
          </motion.h1>
          <motion.p
            className="text-sm md:text-xl text-center md:text-left text-gray-600 max-w-10xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CodesAndMarketing – where innovation meets strategy. We are a
            forward-thinking digital solutions agency that specializes in
            helping businesses navigate the ever-evolving digital landscape. Our
            mission is simple: to drive growth, enhance brand visibility, and
            deliver measurable results for businesses of all sizes. Founded on
            the belief that technology and creativity go hand in hand,
            CodesAndMarketing offers a comprehensive range of services,
            including web development, SEO (Search Engine Optimization), content
            creation, and digital marketing strategies. With a team of highly
            skilled professionals who are passionate about what they do, we
            tailor each project to fit your unique needs and objectives. We
            understand the challenges businesses face in the digital world, and
            that's why we work closely with our clients to develop customized
            strategies that ensure long-term success. Whether you're looking to
            build a stunning website, boost your search engine rankings, or
            launch a targeted marketing campaign, we've got the expertise to
            make it happen. Our approach combines cutting-edge technologies,
            data-driven insights, and creative thinking to develop solutions
            that not only meet but exceed your expectations. At
            CodesAndMarketing, we're committed to helping you attract the right
            audience, convert leads into customers, and maximize your online
            presence. With a proven track record of success and a focus on
            delivering value, we're here to make your digital goals a reality.
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#2563EB]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7AF304]/5 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      {/* Stats Section - Updated */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Values Section - Updated */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-customBodyColor via-blue-600 to-customBodyColor bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-white shadow-[1px_2px_10px_1px_rgba(155,236,0,1)] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-2 transition-transform duration-300">
                  <img
                    src={value.img}
                    alt={value.title}
                    className="w-16 h-16 object-contain transform group-hover:-rotate-12 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {value.title}
                </h3>
                <AnimatePresence mode="wait">
                  {hoveredValue === index ? (
                    <motion.p
                      key="details"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-600 text-center"
                    >
                      {value.details}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="description"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-600 text-center"
                    >
                      {value.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <motion.div
        className="py-16 bg-gradient-to-r from-[#2563EB]/5 to-[#7AF304]/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-customBodyColor via-blue-600 to-customBodyColor bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              To empower businesses with cutting-edge technology solutions that
              drive growth, enhance efficiency, and create exceptional digital
              experiences. We strive to be the catalyst that transforms
              innovative ideas into powerful digital realities.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#2563EB]/10 to-[#7AF304]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's collaborate to bring your vision to life with our expertise in
            technology and marketing.
          </motion.p>
          <Link to="/contact">
            <motion.button
              className="bg-custom-gradient text-customBodyColor px-8 py-4 rounded-full text-sm font-medium hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
