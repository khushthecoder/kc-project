import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <div className="luxury-container py-16">
                    <h1 className="section-title mb-8 text-luxury-gold font-serif">About VishalNexus</h1>

                    <div className="prose max-w-none">
                        <p className="text-lg mb-6 text-white">
                            Welcome to VishalNexus, where luxury meets expertise in the world of high-end real estate.
                        </p>

                        <p className="mb-6 text-gray-300">
                            Founded with a vision to redefine luxury real estate, VishalNexus stands as a beacon of excellence in the industry. Our journey began with a simple yet profound mission: to connect discerning clients with exceptional properties that transcend the ordinary and embody the extraordinary.
                        </p>

                        <p className="mb-6 text-gray-300">
                            At VishalNexus, we understand that a luxury property is more than just a home—it's a statement, a sanctuary, and an investment in a lifestyle of distinction. This understanding forms the cornerstone of our approach to real estate, guiding every interaction and transaction with our esteemed clientele.
                        </p>

                        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-luxury-navy p-8 rounded-lg border border-luxury-gold/30">
                                <h3 className="font-serif text-2xl text-luxury-gold mb-4">Our Mission</h3>
                                <p className="text-white">
                                    To provide unparalleled service and expertise in luxury real estate, helping our clients find properties that not only meet their functional needs but also resonate with their personal aesthetic and lifestyle aspirations.
                                </p>
                            </div>

                            <div className="bg-luxury-navy p-8 rounded-lg border border-luxury-gold/30">
                                <h3 className="font-serif text-2xl text-luxury-gold mb-4">Our Vision</h3>
                                <p className="text-white">
                                    To be the premier destination for luxury real estate worldwide, known for our curated portfolio of exceptional properties and our commitment to excellence in every aspect of the client experience.
                                </p>
                            </div>
                        </div>

                        <p className="mb-6 text-gray-300">
                            What sets VishalNexus apart is not just our portfolio of stunning properties, but our team of dedicated professionals. Each member brings a wealth of experience, market insight, and a passion for real estate that translates into a seamless, satisfying experience for our clients.
                        </p>

                        <p className="mb-6 text-gray-300">
                            We pride ourselves on our attention to detail, our discretion, and our ability to understand and anticipate the unique needs of our clients. Whether you're looking to buy a penthouse in a bustling metropolis, a serene beachfront villa, or a historic estate, we have the expertise and resources to help you find the perfect property.
                        </p>

                        <p className="text-gray-300">
                            Thank you for considering VishalNexus for your luxury real estate needs. We look forward to the opportunity to serve you and to help you discover the property of your dreams.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
