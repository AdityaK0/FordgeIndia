
const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-primary via-gray-900 to-primary relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-white">Join 500+ Growing Businesses</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Grow Your Business?
                        <br />
                        <span className="text-gradient bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent">
                            Start with FordgeIndia Today
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Create your professional portfolio, manage products, launch festival campaigns, and watch your business grow — all in one powerful platform.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href="#pricing"
                            className="group px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-white rounded-lg font-semibold text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            Create Vendor Account
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        >
                            Contact Support
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">14-Day Free Trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">No Credit Card Required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">Cancel Anytime</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">500+</div>
                            <div className="text-gray-400 text-sm">Active Vendors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">10K+</div>
                            <div className="text-gray-400 text-sm">Products</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">50K+</div>
                            <div className="text-gray-400 text-sm">Visitors/Month</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">98%</div>
                            <div className="text-gray-400 text-sm">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default CTA;
