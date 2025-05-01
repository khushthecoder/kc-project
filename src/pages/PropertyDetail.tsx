
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bed, Bath, SquareCode, Calendar, CreditCard } from 'lucide-react';

// Mock property data - in a real application, this would be fetched from a database
const propertyData = {
  id: 1,
  title: 'Luxury Penthouse with Ocean View',
  location: 'Miami Beach, FL',
  price: '$5,250,000',
  description: `This exceptional penthouse offers breathtaking ocean views and unparalleled luxury living. Featuring floor-to-ceiling windows, a gourmet kitchen with top-of-the-line appliances, and a spacious private terrace.

The master suite includes a lavish bathroom with a soaking tub, rain shower, and dual vanities. Additional features include smart home technology, private elevator access, and a dedicated wine cellar.

Located in a premier building with 5-star amenities including a concierge service, infinity pool, state-of-the-art fitness center, and private beach access.`,
  bedrooms: 4,
  bathrooms: 3.5,
  squareFt: 3200,
  yearBuilt: 2019,
  propertyType: 'Penthouse',
  parking: '2 Garage Spaces',
  features: [
    'Floor-to-ceiling windows', 
    'Private terrace', 
    'Gourmet kitchen', 
    'Smart home technology', 
    'Wine cellar', 
    'Private elevator', 
    'Concierge service', 
    'Infinity pool', 
    'Fitness center', 
    'Private beach access'
  ],
  images: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1560185008-d0f1f7092904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  ]
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in this property (ID: ${id}). Please contact me with more information.`
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the inquiry to a server
    console.log('Inquiry submitted:', formData);
    // Show success message
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        ...formData,
        name: '',
        email: '',
        phone: ''
      });
    }, 3000);
  };
  
  // Navigate to next image
  const nextImage = () => {
    setActiveImage((prev) => (prev === propertyData.images.length - 1 ? 0 : prev + 1));
  };
  
  // Navigate to previous image
  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? propertyData.images.length - 1 : prev - 1));
  };
  
  // Select a specific image
  const selectImage = (index: number) => {
    setActiveImage(index);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Property Image Gallery */}
        <div className="relative h-[70vh] bg-luxury-navy">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-black/30">
              <img 
                src={propertyData.images[activeImage]} 
                alt={propertyData.title} 
                className="w-full h-full object-cover opacity-75"
              />
            </div>
          </div>
          
          {/* Gallery Navigation */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button 
              onClick={prevImage}
              className="bg-luxury-navy bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="bg-luxury-navy bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {propertyData.images.map((image, index) => (
              <button
                key={index}
                onClick={() => selectImage(index)}
                className={`h-16 w-24 rounded overflow-hidden border-2 ${
                  index === activeImage ? 'border-luxury-gold' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Property Price Tag */}
          <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-navy py-2 px-4 rounded-sm font-bold text-lg">
            {propertyData.price}
          </div>
        </div>
        
        <div className="luxury-container py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-grow">
              {/* Breadcrumbs */}
              <div className="text-sm text-gray-400 mb-4">
                <Link to="/" className="hover:text-luxury-gold">Home</Link> &gt; {' '}
                <Link to="/buy" className="hover:text-luxury-gold">Properties</Link> &gt; {' '}
                <span className="text-luxury-gold">{propertyData.title}</span>
              </div>
              
              {/* Property Title and Location */}
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-luxury-gold mb-4">
                {propertyData.title}
              </h1>
              
              <div className="flex items-center text-gray-300 mb-6">
                <span className="mr-1 text-luxury-gold">{propertyData.location}</span>
              </div>
              
              {/* Property Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-luxury-navy rounded-lg border border-luxury-gold/20">
                <div className="flex flex-col items-center">
                  <Bed size={24} className="text-luxury-gold mb-2" />
                  <span className="text-sm text-gray-400">Bedrooms</span>
                  <span className="font-medium text-white">{propertyData.bedrooms}</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <Bath size={24} className="text-luxury-gold mb-2" />
                  <span className="text-sm text-gray-400">Bathrooms</span>
                  <span className="font-medium text-white">{propertyData.bathrooms}</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <SquareCode size={24} className="text-luxury-gold mb-2" />
                  <span className="text-sm text-gray-400">Area</span>
                  <span className="font-medium text-white">{propertyData.squareFt} sq ft</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <Calendar size={24} className="text-luxury-gold mb-2" />
                  <span className="text-sm text-gray-400">Year Built</span>
                  <span className="font-medium text-white">{propertyData.yearBuilt}</span>
                </div>
              </div>
              
              {/* Property Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-medium mb-4 text-luxury-gold">Description</h2>
                <div className="prose max-w-none text-gray-300">
                  {propertyData.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* Property Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-medium mb-4 text-luxury-gold">Property Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-luxury-navy/50 p-6 rounded-lg border border-luxury-gold/10">
                  <div className="flex border-b border-luxury-gold/10 pb-3">
                    <span className="w-1/2 text-gray-400">Property Type</span>
                    <span className="w-1/2 font-medium text-white">{propertyData.propertyType}</span>
                  </div>
                  <div className="flex border-b border-luxury-gold/10 pb-3">
                    <span className="w-1/2 text-gray-400">Year Built</span>
                    <span className="w-1/2 font-medium text-white">{propertyData.yearBuilt}</span>
                  </div>
                  <div className="flex border-b border-luxury-gold/10 pb-3">
                    <span className="w-1/2 text-gray-400">Bedrooms</span>
                    <span className="w-1/2 font-medium text-white">{propertyData.bedrooms}</span>
                  </div>
                  <div className="flex border-b border-luxury-gold/10 pb-3">
                    <span className="w-1/2 text-gray-400">Bathrooms</span>
                    <span className="w-1/2 font-medium text-white">{propertyData.bathrooms}</span>
                  </div>
                  <div className="flex border-b border-luxury-gold/10 pb-3">
                    <span className="w-1/2 text-gray-400">Square Footage</span>
                    <span className="w-1/2 font-medium text-white">{propertyData.squareFt} sq ft</span>
                  </div>
                  <div className="flex border-b border-luxury-gold/10 pb-3">
                    <span className="w-1/2 text-gray-400">Parking</span>
                    <span className="w-1/2 font-medium text-white">{propertyData.parking}</span>
                  </div>
                </div>
              </div>
              
              {/* Property Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-medium mb-4 text-luxury-gold">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-luxury-navy/50 p-6 rounded-lg border border-luxury-gold/10">
                  {propertyData.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-luxury-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-20">
                <div className="bg-luxury-navy p-6 rounded-lg shadow-md mb-6 border border-luxury-gold/20">
                  <h3 className="text-xl font-serif font-medium mb-4 text-luxury-gold">Request Information</h3>
                  
                  {isSubmitted ? (
                    <div className="bg-green-900/40 border border-green-500/30 text-green-300 rounded-lg p-4">
                      <h4 className="font-medium mb-1">Thank You!</h4>
                      <p className="text-sm">Your inquiry has been sent. We'll contact you shortly with more information about this property.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-luxury-gold text-sm mb-1" htmlFor="name">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-luxury-gold/30 rounded-md bg-luxury-charcoal text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-luxury-gold text-sm mb-1" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-luxury-gold/30 rounded-md bg-luxury-charcoal text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-luxury-gold text-sm mb-1" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-2 border border-luxury-gold/30 rounded-md bg-luxury-charcoal text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-luxury-gold text-sm mb-1" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full p-2 border border-luxury-gold/30 rounded-md bg-luxury-charcoal text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-2 px-4 bg-luxury-gold text-luxury-navy font-medium rounded-md hover:bg-luxury-gold/80 transition-colors"
                      >
                        Send Inquiry
                      </button>
                    </form>
                  )}
                </div>
                
                <div className="bg-luxury-navy p-6 rounded-lg shadow-md border border-luxury-gold/20">
                  <h3 className="text-xl font-serif font-medium mb-4 text-luxury-gold">Financing</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <CreditCard size={20} className="text-luxury-gold mr-2" />
                      <span className="font-medium text-white">Mortgage Estimate</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Estimated monthly payment for a {propertyData.price} loan:
                    </p>
                    <p className="text-lg font-medium mt-1 text-luxury-gold">$22,500/month</p>
                    <p className="text-xs text-gray-400">
                      Based on 20% down, 30-year fixed rate at 3.5%
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <button className="w-full py-2 px-4 border border-luxury-gold text-luxury-gold font-medium rounded-md hover:bg-luxury-gold hover:text-luxury-navy transition-colors">
                      Calculate Affordability
                    </button>
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

export default PropertyDetail;
