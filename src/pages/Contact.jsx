import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <div className="bg-luxury-navy py-12">
                    <div className="luxury-container">
                        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-2">
                            Contact Us
                        </h1>
                        <p className="text-luxury-silver">
                            Our team of luxury real estate specialists is ready to assist you.
                        </p>
                    </div>
                </div>

                <div className="luxury-container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl font-serif font-medium text-white mb-6">Get in Touch</h2>

                            {isSubmitted ? (
                                <div className="bg-green-900 border border-green-700 text-white rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-medium mb-2">Thank You!</h3>
                                    <p>Your message has been sent successfully. One of our representatives will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-white mb-2" htmlFor="name">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 border border-gray-600 bg-luxury-charcoal text-white rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white mb-2" htmlFor="email">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 border border-gray-600 bg-luxury-charcoal text-white rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white mb-2" htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full p-3 border border-gray-600 bg-luxury-charcoal text-white rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white mb-2" htmlFor="subject">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 border border-gray-600 bg-luxury-charcoal text-white rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="Property Inquiry">Property Inquiry</option>
                                            <option value="Selling My Property">Selling My Property</option>
                                            <option value="Rental Inquiry">Rental Inquiry</option>
                                            <option value="Investment Opportunity">Investment Opportunity</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-white mb-2" htmlFor="message">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full p-3 border border-gray-600 bg-luxury-charcoal text-white rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="btn-primary bg-luxury-gold text-luxury-navy hover:bg-opacity-90"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-medium text-white mb-6">Our Information</h2>

                            <div className="bg-luxury-navy p-8 rounded-lg border border-luxury-gold/30 mb-8">
                                <div className="flex flex-col space-y-6">
                                    <div className="flex">
                                        <div className="mr-4">
                                            <div className="bg-luxury-gold p-3 rounded-full">
                                                <MapPin size={24} className="text-luxury-navy" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">Visit Our Office</h3>
                                            <p className="text-luxury-silver">
                                                1234 Luxury Avenue<br />
                                                Beverly Hills, CA 90210<br />
                                                United States
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="mr-4">
                                            <div className="bg-luxury-gold p-3 rounded-full">
                                                <Phone size={24} className="text-luxury-navy" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
                                            <p className="text-luxury-silver">
                                                +1 (800) 123-4567<br />
                                                Monday-Friday: 9am to 6pm<br />
                                                Saturday: 10am to 4pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="mr-4">
                                            <div className="bg-luxury-gold p-3 rounded-full">
                                                <Mail size={24} className="text-luxury-navy" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
                                            <p className="text-luxury-silver">
                                                info@vishalnexus.com<br />
                                                sales@vishalnexus.com<br />
                                                rentals@vishalnexus.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
