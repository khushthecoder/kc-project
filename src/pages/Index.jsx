import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import TestimonialSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero />
                <div id="featured">
                    <FeaturedProperties />
                </div>
                <TestimonialSection />
                <CallToAction />
            </main>

            <Footer />
        </div>
    );
};

export default Index;
