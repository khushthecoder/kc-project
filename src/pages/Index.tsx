import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import SearchSection from '../components/SearchSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';
import CircularText from '../components/CircularText';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/80 to-transparent z-[-1]"></div>
      <div style={{ position: 'absolute', top: 32, left: 32, zIndex: 50 }}>
        <CircularText
          text={"* VISHALNEXUS * LUXURY * REAL ESTATE *"}
          spinDuration={18}
          className="circular-logo-large"
        />
      </div>
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />
        <Hero />
        <FeaturedProperties />
        <SearchSection />
        <TestimonialSection />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
