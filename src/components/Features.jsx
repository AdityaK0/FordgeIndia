import React from 'react';

const Features = () => {
    const features = [
        {
            title: 'Portfolio Builder',
            description: 'Create a stunning, professional portfolio website in minutes. Showcase your business with beautiful templates.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
            ),
            gradient: 'from-accent to-green-600',
        },
        {
            title: 'Product Manager',
            description: 'Easily add, edit, and organize your products. Upload images, set prices, and manage inventory effortlessly.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            gradient: 'from-accent-blue to-blue-600',
        },
        {
            title: 'Events & Festival Campaigns',
            description: 'Launch targeted festival marketing campaigns. Choose from pre-designed templates for Diwali, Holi, Christmas, and more.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            ),
            gradient: 'from-purple-500 to-pink-600',
        },
        {
            title: 'SEO Optimized Pages',
            description: 'Every product page is automatically optimized for search engines, helping customers find you on Google.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            gradient: 'from-orange-500 to-red-600',
        },
        {
            title: 'Smart WhatsApp Share',
            description: 'Share products and posters directly to WhatsApp with one click. Reach customers where they are.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            gradient: 'from-green-500 to-teal-600',
        },
        {
            title: 'Vendor Dashboard',
            description: 'Manage everything from one central dashboard. Track orders, update products, and monitor performance.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            gradient: 'from-indigo-500 to-purple-600',
        },
        {
            title: 'Real-Time Analytics',
            description: 'Get insights into visitor behavior, popular products, and campaign performance with detailed analytics.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            gradient: 'from-yellow-500 to-orange-600',
        },
        {
            title: 'Secure Subscription System',
            description: 'Flexible subscription plans with secure payment processing. Upgrade, downgrade, or cancel anytime.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            gradient: 'from-red-500 to-pink-600',
        },
    ];

    return (
        <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                        Powerful Features for Your Business
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to build, manage, and grow your online presence — all in one platform.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 card-hover"
                            >
                                {/* Icon with gradient background */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>

                                {/* Hover arrow */}
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                        <div className="text-gray-600">Active Vendors</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">10K+</div>
                        <div className="text-gray-600">Products Listed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
                        <div className="text-gray-600">Monthly Visitors</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                        <div className="text-gray-600">Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
