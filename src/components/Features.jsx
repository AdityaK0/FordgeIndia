
const Features = () => {
    const features = [
        {
            title: 'Portfolio Builder',
            description: 'Create a stunning, professional portfolio website in minutes. Showcase your business with beautiful templates.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
            ),
        },
        {
            title: 'Product Manager',
            description: 'Easily add, edit, and organize your products. Upload images, set prices, and manage inventory effortlessly.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
        },
        {
            title: 'Events & Festival Campaigns',
            description: 'Launch targeted festival marketing campaigns. Choose from pre-designed templates for Diwali, Holi, Christmas, and more.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            ),
        },
        {
            title: 'SEO Optimized Pages',
            description: 'Every product page is automatically optimized for search engines, helping customers find you on Google.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            title: 'Smart WhatsApp Share',
            description: 'Share products and posters directly to WhatsApp with one click. Reach customers where they are.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
        },
        {
            title: 'Vendor Dashboard',
            description: 'Manage everything from one central dashboard. Track orders, update products, and monitor performance.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="features" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-extralight tracking-tighter text-primary mb-6">
                        Powerful Features for Your Business
                    </h2>
                    <p className="text-[17px] leading-relaxed text-text-secondary max-w-2xl mx-auto font-light">
                        Everything you need to build, manage, and grow your online presence — all in one platform.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 border border-border-gray hover:border-primary/20 transition-all duration-500 card-hover"
                            >
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-bg-card mb-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-[17px] font-normal text-primary mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[15px] leading-relaxed text-text-secondary font-light">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-extralight text-primary mb-2">500+</div>
                        <div className="text-[13px] text-text-muted font-light">Active Vendors</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-extralight text-primary mb-2">10K+</div>
                        <div className="text-[13px] text-text-muted font-light">Products Listed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-extralight text-primary mb-2">50K+</div>
                        <div className="text-[13px] text-text-muted font-light">Monthly Visitors</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-extralight text-primary mb-2">98%</div>
                        <div className="text-[13px] text-text-muted font-light">Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
