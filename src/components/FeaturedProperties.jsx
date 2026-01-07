import React from 'react';
import PropertyCard from './PropertyCard';

const featuredProperties = [
    {
        id: 1,
        title: 'Luxury Penthouse with Ocean View',
        location: 'Miami Beach, FL',
        price: '$5,250,000',
        bedrooms: 4,
        bathrooms: 3.5,
        squareFt: 3200,
        imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    },
    {
        id: 2,
        title: 'Modern Villa with Private Pool',
        location: 'Beverly Hills, CA',
        price: '$8,750,000',
        bedrooms: 5,
        bathrooms: 6,
        squareFt: 6500,
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80'
    },
    {
        id: 3,
        title: 'Exclusive Waterfront Mansion',
        location: 'Palm Beach, FL',
        price: '$12,900,000',
        bedrooms: 7,
        bathrooms: 8.5,
        squareFt: 9800,
        imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
];

const FeaturedProperties = () => {
    return (
        <section className="py-16 bg-luxury-silver">
            <div className="luxury-container">
                <div className="text-center mb-12">
                    <h2 className="section-title mb-4">Featured Properties</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Discover our handpicked selection of the most exceptional properties currently available in our portfolio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="/buy" className="btn-secondary">
                        View All Properties
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
