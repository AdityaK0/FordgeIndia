import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            business: 'Kumar Electronics',
            location: 'Delhi',
            image: '👨‍💼',
            rating: 5,
            text: 'FordgeIndia helped me get 32% more customers during Diwali. The festival poster feature is a game-changer! My sales doubled compared to last year.',
        },
        {
            name: 'Priya Sharma',
            business: 'Priya Fashion Boutique',
            location: 'Mumbai',
            image: '👩‍💼',
            rating: 5,
            text: 'My fashion shop now looks professional online. The portfolio website is beautiful and my customers love browsing products on their phones.',
        },
        {
            name: 'Amit Patel',
            business: 'Patel Grocery Store',
            location: 'Ahmedabad',
            image: '👨‍🍳',
            rating: 5,
            text: 'Setting up my online store was so easy! Within 2 hours, I had my portfolio live and started sharing it with customers on WhatsApp.',
        },
        {
            name: 'Sneha Reddy',
            business: 'Sneha Jewellers',
            location: 'Hyderabad',
            image: '👩‍💍',
            rating: 5,
            text: 'The analytics dashboard helps me understand which products are popular. I can now plan my inventory better and reduce waste.',
        },
        {
            name: 'Vikram Singh',
            business: 'Singh Auto Parts',
            location: 'Jaipur',
            image: '👨‍🔧',
            rating: 5,
            text: 'Best investment for my business! The WhatsApp integration makes it super easy to share product catalogs with my customers.',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                        Loved by Local Businesses
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join hundreds of vendors who are growing their business with FordgeIndia.
                    </p>
                </div>

                {/* Main Testimonial Slider */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"></div>

                        {/* Quote Icon */}
                        <div className="absolute top-8 left-8 text-accent/10 text-8xl font-serif">"</div>

                        <div className="relative z-10">
                            {/* Testimonial Content */}
                            <div className="text-center mb-8">
                                {/* Avatar */}
                                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-blue rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                                    {testimonials[activeIndex].image}
                                </div>

                                {/* Rating */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-6 h-6 text-yellow-400 fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                                    {testimonials[activeIndex].text}
                                </p>

                                {/* Author Info */}
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-1">
                                        {testimonials[activeIndex].name}
                                    </h4>
                                    <p className="text-gray-600">
                                        {testimonials[activeIndex].business} • {testimonials[activeIndex].location}
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                                    aria-label="Previous testimonial"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-600 group-hover:text-accent transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextTestimonial}
                                    className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                                    aria-label="Next testimonial"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-600 group-hover:text-accent transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-8">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-gray-300'
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`p-4 rounded-xl transition-all duration-300 ${index === activeIndex
                                        ? 'bg-gradient-to-br from-accent to-accent-blue text-white shadow-lg scale-105'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                            >
                                <div className="text-3xl mb-2">{testimonial.image}</div>
                                <p className={`text-sm font-semibold truncate ${index === activeIndex ? 'text-white' : 'text-gray-700'
                                    }`}>
                                    {testimonial.name}
                                </p>
                                <p className={`text-xs truncate ${index === activeIndex ? 'text-white/80' : 'text-gray-500'
                                    }`}>
                                    {testimonial.business}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="font-medium">Verified Reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="font-medium">4.9/5 Average Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-medium">500+ Happy Vendors</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
