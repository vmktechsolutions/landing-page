import React, { useEffect, useRef } from 'react';
import img3 from '../assets/image-removebg-preview (10) 2.png';
import img4 from '../assets/image-removebg-preview (11) 2.png';
import img2 from '../assets/image-removebg-preview (8) 1.png';
import img1 from '../assets/image-removebg-preview (9) 2.png';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const scrollWidth = sliderRef.current.scrollWidth;
        const clientWidth = sliderRef.current.clientWidth;

        if (scrollLeft + clientWidth >= scrollWidth) {
          sliderRef.current.scrollLeft = 0;
        } else {
          sliderRef.current.scrollBy({
            left: 200,
            behavior: 'smooth',
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={sliderRef}
        className="w-full relative bottom-[6rem] lg:bottom-10 h-20 bg-gray-200 overflow-x-auto scrollbar-hide hidden lg:block"
        style={{
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 h-full items-center px-4">
          <img src={img1} className="h-10 sm:h-14 md:h-12 lg:h-12 object-contain" alt="img1" />
          <img src={img2} className="h-7 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img2" />
          <img src={img3} className="h-10 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img3" />
          <img src={img4} className="h-10 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img4" />
          <img src={img1} className="h-10 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img1" />
          <img src={img2} className="h-7 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img2" />
          <img src={img3} className="h-10 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img3" />
          <img src={img4} className="h-10 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img4" />
          <img src={img1} className="h-10 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img1" />
          <img src={img2} className="h-7 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img2" />
          <img src={img3} className="h-10 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img3" />
          <img src={img4} className="h-10 sm:h-14 md:h-16 lg:h-12 object-contain" alt="img4" />
        </div>
      </div>
    </>
  );
};

export default Slider;
