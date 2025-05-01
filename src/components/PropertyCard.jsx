
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, MapPin } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card group">
      <div className="relative">
        <Link to={`/property/${property.id}`}>
          <div className="h-64 overflow-hidden">
            <img 
              src={property.imageUrl} 
              alt={property.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute top-4 right-4 bg-luxury-navy text-white py-1 px-3 rounded-sm">
            {property.price}
          </div>
        </Link>
      </div>
      
      <div className="p-5">
        <Link to={`/property/${property.id}`}>
          <h3 className="font-serif text-xl font-medium text-luxury-navy mb-2 hover:text-luxury-gold transition-colors">
            {property.title}
          </h3>
        </Link>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1" />
          <span>{property.location}</span>
        </div>
        
        <div className="flex justify-between text-gray-700 border-t pt-4 mt-4">
          <div className="flex items-center">
            <Bed size={18} className="mr-1" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={18} className="mr-1" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div>
            <span>{property.squareFt} sq ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
