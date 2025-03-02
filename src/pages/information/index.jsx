import React from 'react';
import img10 from '../../assets/CaseStudy/image copy 10.png';
import img1 from '../../assets/CaseStudy/image copy 3.png';
import img2 from '../../assets/CaseStudy/image copy 4.png';
import img3 from '../../assets/CaseStudy/image copy 5.png';
import img4 from '../../assets/CaseStudy/image copy 6.png';
import img5 from '../../assets/CaseStudy/image copy 7.png';
import img6 from '../../assets/CaseStudy/image copy.png';
import img7 from '../../assets/CaseStudy/image.png';
import img8 from '../../assets/CaseStudy/image copy 8.png';
import img9 from '../../assets/CaseStudy/image copy 9.png';
// import img10 from '../../assets/CaseStudy/next.png';
import vector from '../../assets/Vector 33.png';
import arrow from '../../assets/Vector.png';
import { Link } from 'react-router-dom';
import bgImage from '../../../public/bgimg.jpg';

const Information = () => {

  const teamMembers = [
    { name: "Holden Caulfield", role: "UI Designer", img: img10 },
    { name: "Henry Letham", role: "CTO", img: img1 },
    { name: "Oskar Blinde", role: "Founder", img: img2 },
    { name: "John Doe", role: "DevOps", img: img3 },
    { name: "Martin Eden", role: "Software Engineer", img: img4 },
    { name: "Boris Kitua", role: "UX Researcher", img: img5 },
    { name: "Atticus Finch", role: "QA Engineer", img: img6 },
    { name: "Alper Kamu", role: "System Architect", img: img7 },
    { name: "Rodrigo Monchi", role: "Product Manager", img: img8 },
    { name: "Harry Potter", role: "CEO", img: img9 },
    // { name: "Harry Potter", role: "CEO", img: img10 },
  ];


  return (
    <section
      className="relative text-gray-600 body-font bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1  className="sm:text-3xl z-0 text-2xl font-medium title-font mb-4 text-white">Our Core Tech</h1>
          <p  className="lg:w-2/3 mx-auto leading-relaxed text-base text-white z-0">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -mx-2 sm:-mx-3 md:-mx-4">
          {teamMembers.map((item, i) => (
            <div
              key={i}
              className="p-2 sm:p-3 md:p-4 w-1/2 xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
            >
              <div  className="h-full flex flex-col items-center text-center">
                <img
                  alt={`team member ${item.name}`}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gray-100 p-2 sm:p-3 md:p-4 object-cover object-center flex-shrink-0 rounded-full mb-3"
                  src={item.img}
                />
                <div className="w-full">
                  <h2 className="text-white title-font font-medium text-sm sm:text-base md:text-lg">{item.name}</h2>
                  <p className="text-white text-xs sm:text-sm opacity-75">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;
