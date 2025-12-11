import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="max-w-5xl mx-auto text-center animate-slide-up">
                    {/* Minimal Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-bg-card rounded-full mb-12">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span className="text-[13px] font-light text-text-secondary">Trusted by 500+ Local Businesses</span>
                    </div>

                    {/* Ultra-Minimal Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tighter text-primary mb-8 leading-[1.1]">
                        Empowering Local Businesses to{' '}
                        <span className="font-light">Sell More</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-[17px] sm:text-[19px] leading-relaxed text-text-secondary mb-12 max-w-3xl mx-auto font-light">
                        Create your stunning online portfolio, manage products effortlessly, launch festival campaigns,
                        generate eye-catching posters, and track analytics — all in one powerful platform designed for
                        local vendors to grow their business.
                    </p>

                    {/* Minimal CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                        <a
                            href="#pricing"
                            className="group px-8 py-3.5 bg-accent text-white rounded-full font-normal text-[15px] hover:bg-accent-hover transition-all duration-300 flex items-center gap-2"
                        >
                            Get Started
                            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a
                            href="#demo"
                            className="px-8 py-3.5 bg-white text-primary border border-border-gray rounded-full font-normal text-[15px] hover:bg-bg-card transition-all duration-300"
                        >
                            View Sample Portfolio
                        </a>
                    </div>

                    {/* Minimal Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-border-gray rounded-full">
                            <svg className="w-4 h-4 text-primary opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            <span className="text-[13px] font-light text-text-muted">Online Portfolio</span>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-border-gray rounded-full">
                            <svg className="w-4 h-4 text-primary opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <span className="text-[13px] font-light text-text-muted">Product Manager</span>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-border-gray rounded-full">
                            <svg className="w-4 h-4 text-primary opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                            <span className="text-[13px] font-light text-text-muted">Festival Campaigns</span>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-border-gray rounded-full">
                            <svg className="w-4 h-4 text-primary opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span className="text-[13px] font-light text-text-muted">Analytics</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Minimal Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <svg className="w-5 h-5 text-text-muted opacity-30 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
