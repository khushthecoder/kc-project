import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { Search } from 'lucide-react';
import { filterProperties } from '../lib/utils';
import { buyProperties } from '../data/propertyData';

const Buy = () => {
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [filteredProperties, setFilteredProperties] = useState(buyProperties);

    const handleSearch = () => {
        const filters = {
            location,
            propertyType,
            priceRange,
            bedrooms
        };

        const filtered = filterProperties(buyProperties, filters);
        setFilteredProperties(filtered);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <div className="bg-luxury-navy py-12">
                    <div className="luxury-container">
                        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-8">
                            Luxury Properties for Sale
                        </h1>

                        <div className="bg-luxury-charcoal p-6 rounded-lg shadow-lg border border-luxury-gold/20">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label className="block text-luxury-gold mb-2" htmlFor="location">
                                        Location
                                    </label>
                                    <select
                                        id="location"
                                        className="w-full p-3 border border-luxury-gold/30 rounded-md bg-luxury-navy text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    >
                                        <option value="">Any Location</option>
                                        <option value="New York">New York</option>
                                        <option value="Los Angeles">Los Angeles</option>
                                        <option value="Miami">Miami</option>
                                        <option value="Chicago">Chicago</option>
                                        <option value="San Francisco">San Francisco</option>
                                        <option value="Boston">Boston</option>
                                        <option value="Dallas">Dallas</option>
                                        <option value="Seattle">Seattle</option>
                                        <option value="Austin">Austin</option>
                                        <option value="Denver">Denver</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-luxury-gold mb-2" htmlFor="property-type">
                                        Property Type
                                    </label>
                                    <select
                                        id="property-type"
                                        className="w-full p-3 border border-luxury-gold/30 rounded-md bg-luxury-navy text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                                        value={propertyType}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                    >
                                        <option value="">Any Type</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="house">House</option>
                                        <option value="villa">Villa</option>
                                        <option value="penthouse">Penthouse</option>
                                        <option value="mansion">Mansion</option>
                                        <option value="loft">Loft</option>
                                        <option value="townhouse">Townhouse</option>
                                        <option value="condo">Condo</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-luxury-gold mb-2" htmlFor="price-range">
                                        Price Range
                                    </label>
                                    <select
                                        id="price-range"
                                        className="w-full p-3 border border-luxury-gold/30 rounded-md bg-luxury-navy text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
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
                                    <label className="block text-luxury-gold mb-2" htmlFor="bedrooms">
                                        Bedrooms
                                    </label>
                                    <select
                                        id="bedrooms"
                                        className="w-full p-3 border border-luxury-gold/30 rounded-md bg-luxury-navy text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                                        value={bedrooms}
                                        onChange={(e) => setBedrooms(e.target.value)}
                                    >
                                        <option value="">Any</option>
                                        <option value="1">1+</option>
                                        <option value="2">2+</option>
                                        <option value="3">3+</option>
                                        <option value="4">4+</option>
                                        <option value="5">5+</option>
                                        <option value="6">6+</option>
                                        <option value="7">7+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    type="button"
                                    onClick={handleSearch}
                                    className="btn-primary flex items-center justify-center mx-auto bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-navy font-bold py-3 px-8 rounded-md"
                                >
                                    <Search size={18} className="mr-2" />
                                    Search Properties
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="luxury-container py-16">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-serif font-medium text-luxury-gold">Available Properties</h2>
                        <div className="text-gray-400">Showing {filteredProperties.length} properties</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    {filteredProperties.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-400 text-lg">No properties match your search criteria.</p>
                            <button
                                className="mt-4 text-luxury-gold hover:underline"
                                onClick={() => {
                                    setLocation('');
                                    setPropertyType('');
                                    setPriceRange('');
                                    setBedrooms('');
                                    setFilteredProperties(buyProperties);
                                }}
                            >
                                Reset filters
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Buy;
