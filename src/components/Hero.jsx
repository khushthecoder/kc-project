import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-luxury-navy opacity-60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Luxury Home"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="luxury-container relative z-20 text-center">
                <h1 className="hero-title mb-6 animate-fade-in">
                    Elegance in Every Detail
                </h1>
                <p className="hero-subtitle mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
                    Discover our curated collection of extraordinary properties designed for
                    those who appreciate the finer things in life.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delayed">
                    <a href="/buy" className="btn-primary">
                        Explore Collection
                    </a>
                    <a href="/contact" className="btn-secondary">
                        Private Consultation
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <a href="#featured" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 14l-7 7-7-7"
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
