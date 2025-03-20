import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
// import img1 from '../../assets/TestonomialImage/praveen_Sir.png';
// import img2 from '../../assets/TestonomialImage/nidhi-removebg-preview.png';
// import img3 from '../../assets/TestonomialImage/Neeraj-removebg-preview.png';
import img1 from "../../assets/dur1.jpg";
import img2 from "../../assets/Bharti1.png";
import img3 from "../../assets/chaaaruu1-removebg-preview.png";
import img4 from "../../assets/sir.png";

const ClientTestimonial = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      image: img1,
      title: "Digital Marketing",
      quote: "Codes and Marketing has been a game-changer for our digital strategy. Their team's expertise and tailored approach have delivered exceptional results, driving growth and engagement. I highly recommend their services for anyone looking to elevate their online presence.! - Durgesh",
      author: "Durgesh Singh",
      position: "CMO, Digital Marketing",
      rating: 5
    },
    {
      image: img2,
      title: "Astrology Services",
      quote: "Working with Codes and Marketing has been a fantastic experience. Their team's professionalism and innovative approach to digital strategies have helped elevate our brand and reach more clients. I highly recommend their services for anyone looking to grow online. - Bharti Khanna ",
      author: "Bharti Khanna",
      position: "CEO, Miraclemind",
      rating: 5
    },
    {
      image: img3,
      title: "Food Services",
      quote: "Codes and Marketing has truly transformed our digital presence. Their creative strategies and commitment to results have helped us reach new heights. Their team is professional, reliable, and always ahead of the curve. Highly recommend their services! - Charu Gandhi",
      author: "Charu Gandhi",
      position: "CEO, IndianFry",
      rating: 5
    },
    {
      image: img4,
      title: "Finance Services",
      quote: "Codes and Marketing provided outstanding support in shaping our digital marketing strategy. Their expertise and personalized approach have made a huge difference in our online reach. Highly recommended! - Prikshat Sehgal",
      author: "Prikshat Sehgal",
      position: "CFO, Fortunetalk",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div

          className="mb-12 text-center" data-aos="fade-up" data-aos-duration="600" data-aos-once="true"
        >
          <p

            className="text-red-500 font-semibold text-sm mb-2" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="200"
          >
            TESTIMONIALS
          </p>
          <h2
            className="text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="400"
          >
            What Our Clients Say
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="600"
          >
            Hear from the satisfied clients who have entrusted us with their software projects and digital transformation journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Container with Animation */}
          <div
            className="relative h-[400px] w-full" data-aos="fade-up" data-aos-duration="600" data-aos-once="true"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-lg z-10" />
            <div
              className="absolute inset-0 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-duration="600" data-aos-once="true"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-full h-full object-cover object-center"
                style={{ transition: 'opacity 0.5s ease-in-out' }}
              />
            </div>
          </div>

          {/* Content Container with Animation */}
          <div
            className="space-y-8" data-aos="fade-up" data-aos-duration="600" data-aos-once="true"
          >
            <div
              className="flex gap-1" data-aos="fade-up" data-aos-duration="600" data-aos-once="true"
            >
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <h3
              className="text-2xl font-bold" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="200"
            >
              {testimonials[currentIndex].title}
            </h3>

            <blockquote
              className="text-gray-600 leading-relaxed text-lg italic" data-aos="fade-up" data-aos-duration="600" data-aos-once="true"
            >
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div
              className="space-y-2" data-aos="fade-up" data-aos-duration="600" data-aos-once="true"
            >
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
              <p className="text-gray-500">{testimonials[currentIndex].position}</p>
            </div>

            <div
              className="flex justify-between items-center" data-aos="fade-up" data-aos-duration="600" data-aos-once="true"
            >
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                  Read More
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators with Animation */}
        <div
          className="flex justify-center gap-2 mt-8" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="800"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-black w-6' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>

        <div
          className="text-center mt-4" data-aos="fade-up" data-aos-duration="600" data-aos-once="true"
        >
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Slideshow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial; 