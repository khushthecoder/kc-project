
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("public/lovable-uploads/eb2f10f9-1998-49c8-aea0-c6e02a113b32.png")',
          opacity: 0.5
        }}
      ></div>
      
      
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/80 to-transparent"></div>

      <div className="luxury-container relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            <span className="text-luxury-gold">Ultra</span> Exclusive Properties
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 drop-shadow-md">
            Experience the pinnacle of architectural innovation with our collection of the world's most extraordinary homes - underwater mansions, floating penthouses, and vertical skyscraper estates.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/buy" className="btn-primary bg-luxury-gold text-luxury-navy glow-hover">
              Explore Properties
            </Link>
            <Link to="/contact" className="btn-secondary border-luxury-gold text-luxury-gold hover:bg-luxury-gold/20">
              Contact an Agent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
