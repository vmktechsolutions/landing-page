import React from 'react';
import PageTitle from "../../components/Pagetitle/PageTitle";

const ServicesSection = () => {

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-white fill-current">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      ),
      title: 'Web Design & Development',
      color: 'bg-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-white fill-current">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      ),
      title: 'Mobile App Development',
      color: 'bg-red-500',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-white fill-current">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
      title: 'Graphic Design',
      color: 'bg-green-600',
      buttonColor: 'bg-green-700 hover:bg-green-800'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-white fill-current">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      title: 'Digital Marketing',
      color: 'bg-orange-500',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-white fill-current">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: 'Software Testing',
      color: 'bg-gray-600',
      buttonColor: 'bg-gray-700 hover:bg-gray-800'
    }
  ];

  return (
    <div className="w-full mx-auto px-4 py-16 bg-cyan-50">
      <div className="text-center mb-12">
        <div className="inline-block text-slate-500 px-4 py-1 mb-4 text-xl sm:text-3xl font-bold uppercase tracking-wider">
          OUR SERVICES
        </div>

        <PageTitle
          title={
            <>
              We've ton of features <br /> for give you the best Services
            </>
          }
        />

        <p className="text-gray-600 max-w-3xl mx-auto">
          We provide highly professional services of the latest technology for web services to make your business
          more efficient and unique. We believe client service is not just a department but it's a responsible job
          hence we maintain all possible high quality standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-100 flex flex-col items-center p-6 relative overflow-hidden group"
          >
            {/* Half-height hover background effect */}
            <div className={` absolute bottom-0 left-0 w-full h-[80%] ${service.color} rounded-t-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0`}></div>

            {/* Content (above the background) */}
            <div className="flex flex-col items-center w-full h-full z-10 relative">
              <div className={`${service.color} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-center mb-4">{service.title}</h3>
              <button className={`${service.buttonColor} text-white py-2 px-4 rounded-full text-sm mt-auto`}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;