
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  
  
  const handleFilterChange = (name: string, value: string) => {
    let newLocation = name === 'location' ? value : location;
    let newPropertyType = name === 'propertyType' ? value : propertyType;
    let newPriceRange = name === 'priceRange' ? value : priceRange;
    let newBedrooms = name === 'bedrooms' ? value : bedrooms;
    
    
    if (name === 'location') setLocation(value);
    if (name === 'propertyType') setPropertyType(value);
    if (name === 'priceRange') setPriceRange(value);
    if (name === 'bedrooms') setBedrooms(value);
    
    
    const searchParams = new URLSearchParams();
    if (newLocation) searchParams.append('location', newLocation);
    if (newPropertyType) searchParams.append('type', newPropertyType);
    if (newPriceRange) searchParams.append('price', newPriceRange);
    if (newBedrooms) searchParams.append('bedrooms', newBedrooms);
  };
  
  return (
    <section className="py-16 bg-luxury-charcoal text-white">
      <div className="luxury-container">
        <div className="text-center mb-10">
          <h2 className="section-title mb-4 text-white">Find Your Dream Home</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Search through our extensive catalog of luxury properties available for sale and rent.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-luxury-navy/30 backdrop-blur-sm rounded-lg border border-luxury-gold/20 shadow-lg shadow-luxury-gold/5 p-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="location">
                  Location
                </label>
                <select
                  id="location"
                  className="w-full p-3 border border-luxury-gold/30 rounded-md bg-luxury-navy/50 text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
                  value={location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  <option value="">Any Location</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="miami">Miami</option>
                  <option value="chicago">Chicago</option>
                  <option value="san-francisco">San Francisco</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="property-type">
                  Property Type
                </label>
                <select
                  id="property-type"
                  className="w-full p-3 border border-luxury-gold/30 rounded-md bg-luxury-navy/50 text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
                  value={propertyType}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                >
                  <option value="">Any Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="mansion">Mansion</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="price-range">
                  Price Range
                </label>
                <select
                  id="price-range"
                  className="w-full p-3 border border-luxury-gold/30 rounded-md bg-luxury-navy/50 text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
                  value={priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                >
                  <option value="">Any Price</option>
                  <option value="1000000-3000000">$1M - $3M</option>
                  <option value="3000000-5000000">$3M - $5M</option>
                  <option value="5000000-10000000">$5M - $10M</option>
                  <option value="10000000-25000000">$10M - $25M</option>
                  <option value="25000000+">$25M+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="bedrooms">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  className="w-full p-3 border border-luxury-gold/30 rounded-md bg-luxury-navy/50 text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
                  value={bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
