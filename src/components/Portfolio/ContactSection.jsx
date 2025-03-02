import React from 'react';
import img1 from '../../assets/Ritik-removebg-preview.png';

const TeamMemberCard = ({ name, role, quote, img, avatarBgColor = "bg-gray-200" }) => (
  <div className="text-center p-6 bg-white rounded-[25px] shadow-sm border border-green-500 hover:scale-105 transition duration-300">
    <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${avatarBgColor} flex items-center justify-center overflow-hidden`}>
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-2">
      <p className="font-medium text-gray-900">{name}</p>
      <p className="text-sm text-gray-600">{role}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{quote}</p>
    </div>
  </div>
);

const ContactSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sujeet",
      role: "Project Manager",
      quote: "The team at this software development company has exceeded our expectations at every step of the project.",
      img: img1
    },
    {
      id: 2,
      name: "Ranjeet",
      role: "Lead Developer",
      quote: "We've been working with this software development company for several years, and they've consistently delivered.",
      img: img1
    },
    {
      id: 3,
      name: "Shivani",
      role: "Chief Technology Officer",
      quote: "This software development company has been instrumental in helping us achieve our digital transformation goals.",
      img: img1
    }
  ];

  return (
    <div className="bg-green-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-l from-blue-600/75  to-blue-800 bg-clip-text text-transparent">
  Contact Us
</h2>
          <p className="text-gray-600 max-w-8xl mx-auto">
            Get in touch with our team to discuss your software development needs and learn how we can help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              quote={member.quote}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
