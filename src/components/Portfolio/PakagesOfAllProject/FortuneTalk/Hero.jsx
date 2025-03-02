import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../../../../assets/portfolio/home.png"; // Replace with your bottle image

const Hero = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="bg-[#4A2F1C] min-h-[600px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-3 text-center md:text-left">
                        <motion.p
                            className="text-white/80"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Features Our Product
                        </motion.p>

                        <motion.h1
                            className="text-6xl lg:text-7xl text-white font-serif leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            FortuneTalk
                        </motion.h1>

                        <motion.p
                            className="text-white/80 max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            FortuneTalk is an astrology app that provides personalized
                            horoscopes, tarot readings, and celestial insights. Connect with
                            expert astrologers for guidance on love, career, and life.
                        </motion.p>

                        {/* Additional Text - Shown on Button Click */}
                        {showMore && (
                            <motion.p
                                className="text-white/80 max-w-xl "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                Our app also offers daily affirmations, lunar phase tracking,
                                and compatibility reports to help you make informed decisions
                                based on celestial movements.
                            </motion.p>
                        )}

                        <motion.div
                            className="flex gap-4 pt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <button
                                className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                                onClick={() => setShowMore(!showMore)}
                            >
                                {showMore ? "Show Less" : "Learn More"}
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        className="lg:w-1/2 mt-12 lg:mt-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className=" rounded-3xl ">
                            <img
                                src={heroImage}
                                alt="Premium Liquid Product"
                                className="w-auto h-auto "
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
