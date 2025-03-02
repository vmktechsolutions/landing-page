import React from 'react';
import img1 from '../../../../assets/portfolio/1 (3).png';
import img2 from '../../../../assets/portfolio/20 - chat.png';
import img3 from '../../../../assets/portfolio/16.png';
import img4 from '../../../../assets/portfolio/Yellow_and_White_Modern_Smartphone_Sale_Instagram_Post-removebg-preview.png';
import img5 from '../../../../assets/portfolio/Course.png';
import img6 from '../../../../assets/portfolio/Tarot_card.png';
import img7 from '../../../../assets/portfolio/Chat_Call.png';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "AI-Powered Insights",
      image: img1,
      alt: "AI insights dashboard"
    },
    {
      id: 2,
      title: "Seamless Communication",
      image: img2,
      alt: "Chat application interface"
    },
    {
      id: 3,
      title: "Live Consultations",
      image: img3,
      alt: "Live video call with consultant"
    },
    {
      id: 4,
      title: "Smart Features",
      image: img4,
      alt: "Mobile app with innovative features"
    }
  ];

  return (
    <div className="min-h-[600px] bg-[#fdf5f3] p-8 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gray-500 text-md mb-4">
            Unlock the Power of AI for Your Future
          </p>
          <h1 className="text-5xl font-serif font-medium mb-5">
            Explore FortuneTalk's Capabilities
          </h1>
          <p className="text-gray-500 text-md">
            Experience the future of personalized insights with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-[40px] overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="">
                <div className="aspect-square relative mb-4">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover rounded-[20px_20px_0px_0px]"
                  />
                </div>
                <h3 className="text-center text-gray-700 font-medium py-5">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
