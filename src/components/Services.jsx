import React from 'react';
import img3 from '../assets/android copy.png';
import img4 from '../assets/Apple_logo copy.png';
import img6 from '../assets/digitalmarketing.png';
import img5 from '../assets/React_native_logo copy.png';

const servicesData = [
  {
    image: img3,
    title: 'Android App Development',
    description:
      'Codes And Marketing is one of the best Android app development companies in Hyderabad, offering fully functional and secure application solutions tailored to business needs. Our company has an ample understanding of frameworks, industry experience, technical knowledge and innovative approaches.',
  },
  {
    image: img4,
    title: 'iOS App Development',
    description:
      'Our highly-skilled iOS application developers have the combined experience and knowledge of working on and delivering iPhone and iPad apps for various apps covering such genres as Healthcare, Business, Entertainment, Technology, Lifestyle, Travel, and more.',
  },
  {
    image: img5,
    title: 'Hybrid App Development',
    description:
      'Hybrid application development in Hyderabad involves creating an app compatible with numerous platforms. It uses a framework that works on iOS, Android, and Windows platforms. Hybrid application development uses web technologies such as CSS, JavaScript and HTML.',
  },
  {
    image: img6,
    title: 'React Native App Development',
    description:
      'Team up with the top React Native app development company with React Native, and develop your great idea along with our team of professional developers who will strengthen your mission and boost your business success through their contemporary technology implementation.',
  },
];

const Services = () => {
  return (
    <div className="bg-white relative bottom-12 px-4 lg:px-16">
      <h1 className="text-customBodyColor text-center font-bold text-3xl lg:text-4xl max-w-2xl mx-auto mt-20 mb-10">
        Our Comprehensive Service Offerings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img src={service.image} alt={`${service.title} Icon`} className="w-16 h-16 mb-4" />
            <h2 className="font-medium text-lg text-gray-800">{service.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
