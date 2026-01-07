import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="py-16 bg-white">
            <div className="luxury-container">
                <div className="bg-luxury-cream p-12 rounded-lg shadow-lg text-center">
                    <h2 className="section-title text-luxury-navy mb-4">
                        Ready to Find Your Dream Property?
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-8">
                        Our team of luxury real estate specialists is ready to assist you in finding the perfect property that meets your unique lifestyle and investment goals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/contact" className="btn-primary">
                            Contact Us Today
                        </Link>
                        <Link to="/buy" className="btn-secondary border-luxury-navy text-luxury-navy">
                            Explore Listings
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
