// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-20">
        {[...Array(72)].map((_, i) => (
          <div key={i} className="border border-blue-500 rounded-lg"></div>
        ))}
      </div>

      {/* Animated particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}

      {/* Glowing orb following mouse */}
      <div
        className="absolute w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Title with Nasalization font */}
        <h1
  className="text-6xl font-bold mb-4"
  style={{ fontFamily: 'Nasalization, sans-serif' }}
>
  SYNTACORE
</h1>


        {/* Subtitle with default font */}
        <p className="text-xl mb-8 text-center max-w-2xl">
          Revolutionizing the future with cutting-edge AI technology
        </p>

        {/* Button with Nasalization font */}
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center transition-all duration-300 transform hover:scale-105 nasalization-font"
        >
          Explore Our Solutions
          <ChevronRight className="ml-2" />
        </button>
      </div>

      {/* Futuristic decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/4 border-t-2 border-r-2 border-blue-500 opacity-50 rounded-tr-full"></div>
      <div className="absolute top-0 right-0 w-1/4 h-1/3 border-b-2 border-l-2 border-blue-500 opacity-50 rounded-bl-full"></div>

      {/* Pulsating circles */}
      <div className="absolute left-1/4 top-1/4 w-16 h-16 border-2 border-blue-500 rounded-full animate-ping opacity-30"></div>
      <div
        className="absolute right-1/4 bottom-1/4 w-24 h-24 border-2 border-blue-500 rounded-full animate-ping opacity-20"
        style={{ animationDelay: '1s' }}
      ></div>
    </div>
  );
};

export default HeroSection;
