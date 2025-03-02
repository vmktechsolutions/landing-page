import React from 'react';
import { motion } from 'framer-motion';
import icon1 from '../../../../assets/game/image.png';
import icon2 from '../../../../assets/game/image copy.png';
import icon3 from '../../../../assets/game/image copy 2.png';
import icon4 from '../../../../assets/game/image copy 4.png';

const GameServiceCards = () => {
    const cardData = [
        {
          id: 1,
          title: "Concept Art Creation",
          description: "Our team of concept artists can help you to visualize and design the game ideas, animation, and other visual objects to finalize the aesthetics and visual representation of the gaming solution.",
          icon: icon1
        },
        {
          id: 2,
          title: "Character Or Avatar Creation",
          description: "Our game developers can design and create creative gaming characters and avatars using different tools and software to offer unique experiences to users for different gaming solutions such as Video games, metaverse solutions, VR applications, and more.",
          icon: icon2
        },
        {
          id: 3,
          title: "Casual Development",
          description: "Get casual gaming solutions that offer short sessions accessible by a wide audience on various different platforms like mobile devices, web browsers, gaming consoles, and more with the help of our game developers.",
          icon: icon3
        },
        {
          id: 4,
          title: "Performance Tracking & Reports",
          description: "Our game developers offer inimitable desktop game development services for different platforms such as Windows, MacOS, Linux, and more leveraging their years of expertise throughout the game development process of designing, coding, testing, deploying, and more.",
          icon: icon4
        }
      ];

  return (
    <div className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4052FF] mb-6">
            Elevate Your Gaming Vision With Expert Development
          </h2>
          <p className="text-gray-600 text-lg">
            Transforming innovative ideas into immersive gaming experiences with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 ">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: card.id * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="bg-white border border-greenColor rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 "
            >
              <div className="flex flex-col h-full">
                <div className="mb-">
                  <div className="flex justify-center mb-10">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center relative group">
                      <motion.img 
                        src={card.icon} 
                        alt={card.title} 
                        className="w-40 h-40  object-contain transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center group-hover:text-[#4052FF] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameServiceCards;