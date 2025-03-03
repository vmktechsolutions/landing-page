import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Languages = () => {

  const stats = [
    { id: 1, value: 500, label: "Satisfied Customers" },
    { id: 2, value: 1000, label: "Complete Projects" },
    { id: 3, value: 50, label: "Professionals" },
    { id: 4, value: 5, label: "Award Won" },
  ];
  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const duration = 1000; // 1 second animation
      const intervalTime = duration / target;
  
      const interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === target) clearInterval(interval);
      }, intervalTime);
  
      return () => clearInterval(interval);
    }, [target]);
  
    return (
      <motion.h2
        className="text-6xl font-extrabold text-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {count}+
      </motion.h2>
    );
  };

  const sty = "title-font font-extrabold sm:text-6xl text-3xl text-gray-900";

  return (
    <div className="relative bg-gradient-to-r from-blue-200 to-slate-600">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {stats.map((item) => (
              <div key={item.id}  className="p-4 sm:w-1/4 w-1/2">
                <Counter target={item.value} />
                <p className="leading-relaxed text-slate-700 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Languages;