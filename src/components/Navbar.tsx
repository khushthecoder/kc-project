
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CircularText from './CircularText';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-luxury-charcoal border-b border-luxury-gold/20 sticky top-0 z-50">
      <div className="luxury-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <CircularText 
                text="• VISHAL • NEXUS •" 
                innerText="VN"
                spinDuration={15}
                className="mr-3 scale-100"
              />
              <span className="ml-2 text-xs uppercase tracking-widest text-gray-400">Refined Homes</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-gray-300 hover:text-luxury-gold transition-colors">Home</Link>
            <Link to="/about" className="font-medium text-gray-300 hover:text-luxury-gold transition-colors">About</Link>
            <Link to="/buy" className="font-medium text-gray-300 hover:text-luxury-gold transition-colors">Buy</Link>
            <Link to="/rent" className="font-medium text-gray-300 hover:text-luxury-gold transition-colors">Rent</Link>
            <Link to="/contact" className="font-medium text-gray-300 hover:text-luxury-gold transition-colors">Contact</Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-luxury-gold"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-luxury-gold/20">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-300 hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-300 hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/buy" 
                className="font-medium text-gray-300 hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy
              </Link>
              <Link 
                to="/rent" 
                className="font-medium text-gray-300 hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rent
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-gray-300 hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
