import { useState, useEffect } from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img1 from "../../assets/Ritik-removebg-preview.png";
import Img2 from "../../assets/nidhi-removebg-preview.png";
import Img3 from "../../assets/Neeraj-removebg-preview.png";
import Img4 from "../../assets/praveen_Sir.png";

const testimonialData = [
  {
    id: 1,
    name: "Ritik Chauhan",
    role: "Product Manager",
    image: Img1,
    content: "Driving product vision and strategy to deliver user-centric and market-leading solutions. I work closely with cross-functional teams to identify customer needs, define product roadmaps, and ensure seamless execution.",
    rating: 5
  },
  {
    id: 2,
    name: "Nidhi Tiwari",
    role: "Tech Lead",
    image: Img2,
    content: "Leading development teams to design and implement robust, scalable software architectures. With a deep understanding of system design and modern technologies, I ensure that projects are delivered with high efficiency and reliability.",
    rating: 5
  },
  {
    id: 3,
    name: "Neeraj",
    role: "Senior Developer",
    image: Img3,
    content: "Developing high-performance applications and ensuring seamless user experiences through optimized code. My expertise includes full-stack development, troubleshooting complex software issues, and improving system efficiency.",
    rating: 5
  },
  {
    id: 4,
    name: "Praveen Tiwari",
    role: "Network Engineer",
    image: Img4,
    content: "Expertise in designing, implementing, and maintaining network infrastructures. He is experienced in troubleshooting and optimizing networks, ensuring reliable and secure connections for businesses and clients.",
    rating: 5
  }
];



const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[70vh] bg-gradient-to-b from-gray-50 to-white py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5 animate-gradient"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                backgroundColor: `hsla(${Math.random() * 360}, 70%, 70%, 0.1)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="text-center mb-12 md:mb-16 relative"
          data-aos="fade-down"
        >
          {/* Title Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 via-blue-300/20 to-purple-300/20 filter blur-3xl animate-pulse-slow"></div>

          <h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-customBodyColor via-blue-600 to-customBodyColor bg-[length:200%_auto] animate-background-pan bg-clip-text text-transparent mb-6" data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-once="false"

          >
            What Our Customers Say
          </h2>
          <p className="text-lg text-greyColor max-w-2xl mx-auto">
            Discover why clients trust us for their digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 ">
            <div
              key={activeIndex}

              className="lg:col-span-2" data-aos="fade-right" data-aos-duration="500"
            >
              <div
                className="relative bg-white/90 p-12 w-full max-w-[36rem] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/20 lg:ml-24" data-aos="zoom-in" data-aos-duration="300" class="hover-effect"

              >
                {/* Modern Corner Accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-customBodyColor/50"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-customBodyColor/50"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-customBodyColor/50"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-customBodyColor/50"></div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-customBodyColor/50 to-blue-500/50 rounded-full animate-pulse opacity-75"></div>
                    <img
                      src={testimonialData[activeIndex].image}
                      alt={testimonialData[activeIndex].name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-customBodyColor/30 relative z-10"
                    />
                    <div className="absolute -inset-2 border-2 border-dashed border-customBodyColor/20 rounded-full animate-spin-slow"></div>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-customBodyColor">
                      {testimonialData[activeIndex].name}
                    </h4>
                    <p className="text-customBodyColor">{testimonialData[activeIndex].role}</p>
                  </div>
                </div>

                <div className="relative mb-6">
                  <FaQuoteRight className="absolute -top-4 -left-2 text-4xl md:text-5xl text-customBodyColor/10" />
                  <p className="text-black/75 italic relative z-10 pl-8 text-lg">
                    {testimonialData[activeIndex].content}
                  </p>
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(testimonialData[activeIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
                  ))}
                </div>
              </div>
            </div>
       

          <div className="space-y-4 lg:space-y-8">
            {testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className={`group relative bg-white/80 p-4 rounded-xl cursor-pointer transition-all duration-300  ${index === activeIndex
                  ? 'shadow-lg border-l-4 border-customBodyColor'
                  : 'hover:shadow-md border-l-4 border-transparent'
                  }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-customBodyColor/0 via-customBodyColor/5 to-customBodyColor/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-customBodyColor/20"
                  />

                  <div className="flex-grow">
                    <h4 className={`font-semibold ${index === activeIndex ? 'text-customBodyColor' : 'text-gray-700'}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-black/50 line-clamp-1">
                      {testimonial.content}
                    </p>
                  </div>
                  <FaQuoteRight className={`flex-shrink-0 ${index === activeIndex ? 'text-customBodyColor' : 'text-customBodyColor/20'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
