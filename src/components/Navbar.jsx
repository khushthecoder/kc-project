
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="luxury-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-luxury-navy">VishalNexus</span>
            <span className="ml-2 text-xs uppercase tracking-widest text-luxury-gold">Refined Homes</span>
          </Link>

          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-luxury-navy transition-colors">Home</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-luxury-navy transition-colors">About</Link>
            <Link to="/buy" className="font-medium text-gray-700 hover:text-luxury-navy transition-colors">Buy</Link>
            <Link to="/rent" className="font-medium text-gray-700 hover:text-luxury-navy transition-colors">Rent</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-luxury-navy transition-colors">Contact</Link>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-luxury-navy"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-700 hover:text-luxury-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-700 hover:text-luxury-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/buy" 
                className="font-medium text-gray-700 hover:text-luxury-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy
              </Link>
              <Link 
                to="/rent" 
                className="font-medium text-gray-700 hover:text-luxury-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rent
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-gray-700 hover:text-luxury-navy transition-colors"
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
