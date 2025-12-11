
const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Create Your Vendor Profile',
            description: 'Complete a simple onboarding process and choose your subscription plan. Get started in minutes with our intuitive setup wizard.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'Publish Portfolio Website',
            description: 'Get your personalized portfolio URL instantly: https://<business-name>.site.fordgeindia.online — share it with customers and start building your online presence.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Manage Products & Events',
            description: 'Add your products, create stunning festival posters, share them via WhatsApp, and watch your traffic grow with our powerful marketing tools.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Get your business online in three simple steps. No technical knowledge required.
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connection line for desktop */}
                        <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border-gray opacity-50" style={{ top: '6rem' }}></div>

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border-gray h-full">
                                    {/* Number Badge */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent font-bold text-xl mb-6 relative z-10">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 text-accent mb-4">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-primary mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#pricing"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Start Your Journey
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
