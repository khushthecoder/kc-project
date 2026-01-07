import React from 'react';

const testimonials = [
    {
        id: 1,
        quote: "Working with VishalNexus was a dream. They understood exactly what we were looking for in a luxury property and found us the perfect home.",
        author: "Jonathan & Maria Reynolds",
        position: "Homeowners",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        id: 2,
        quote: "The attention to detail and personalized service we received from the VishalNexus team exceeded all expectations. Truly a premium experience.",
        author: "Alexandra Chen",
        position: "Property Investor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        id: 3,
        quote: "As someone who values quality and craftsmanship, I was impressed by the caliber of properties in the VishalNexus portfolio. They truly represent the finest in luxury real estate.",
        author: "Marcus Hamilton",
        position: "CEO, Hamilton Enterprises",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
];

const TestimonialSection = () => {
    return (
        <section className="py-16 bg-luxury-navy text-white">
            <div className="luxury-container">
                <div className="text-center mb-12">
                    <h2 className="section-title text-luxury-silver mb-4">Client Experiences</h2>
                    <p className="text-luxury-silver max-w-3xl mx-auto opacity-80">
                        Discover what our discerning clients have to say about their experience with VishalNexus.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="bg-luxury-charcoal bg-opacity-50 p-6 rounded-lg">
                            <div className="mb-6">
                                <svg
                                    className="h-8 w-8 text-luxury-gold opacity-80"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>

                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="h-12 w-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-medium">{testimonial.author}</h4>
                                    <p className="text-sm text-luxury-silver opacity-75">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
