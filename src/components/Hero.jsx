
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-luxury-navy flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          opacity: 0.6
        }}
      ></div>

      <div className="luxury-container relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover Your Luxury Home
          </h1>
          <p className="text-lg md:text-xl mb-8 text-luxury-silver">
            Exclusive properties curated for the discerning buyer. Experience luxury living at its finest.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/buy" className="btn-primary bg-luxury-gold text-luxury-navy">
              Explore Properties
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-luxury-navy">
              Contact an Agent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
