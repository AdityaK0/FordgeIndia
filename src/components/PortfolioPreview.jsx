
const PortfolioPreview = () => {
    return (
        <section id="demo" className="py-20 bg-bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                        See Your Portfolio in Action
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Get a beautiful, professional portfolio website that showcases your products and attracts customers.
                    </p>
                </div>

                {/* Preview Container */}
                <div className="max-w-6xl mx-auto">
                    {/* Desktop Preview */}
                    <div className="mb-12 relative group">
                        <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative bg-gray-900 rounded-2xl p-3 shadow-2xl">
                            {/* Browser Chrome */}
                            <div className="flex items-center gap-2 mb-3 px-3">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex-1 bg-gray-800 rounded-lg px-4 py-1.5 text-xs text-gray-400 flex items-center gap-2">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span>muskan-shopping.fordgeindia.online</span>
                                </div>
                            </div>

                            {/* Portfolio Content */}
                            <div className="bg-white rounded-lg overflow-hidden">
                                {/* Hero Banner */}
                                <div className="relative h-64 bg-accent/10 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg border-2 border-accent/20">
                                            <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-bold text-primary mb-2">Muskan Shopping Center</h3>
                                        <p className="text-text-secondary">Fashion & Lifestyle Store</p>
                                    </div>
                                </div>

                                {/* Products Grid */}
                                <div className="p-8">
                                    <h4 className="text-2xl font-bold text-primary mb-6">Featured Products</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[1, 2, 3].map((item) => (
                                            <div key={item} className="bg-bg-card rounded-lg overflow-hidden group cursor-pointer border border-border-gray">
                                                <div className="aspect-square bg-bg-light flex items-center justify-center group-hover:scale-105 transition-transform">
                                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="p-3">
                                                    <div className="h-3 bg-gray-300 rounded mb-2"></div>
                                                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Preview */}
                    <div className="flex justify-center items-center gap-8 flex-col md:flex-row">
                        <div className="text-center flex-1 max-w-xs">
                            <h3 className="text-2xl font-bold text-primary mb-4">Mobile Optimized</h3>
                            <p className="text-text-secondary mb-6">
                                Your portfolio looks perfect on all devices — desktop, tablet, and mobile.
                            </p>
                            <a
                                href="#pricing"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-all duration-300 hover:scale-105"
                            >
                                View Live Demo
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        {/* Mobile Device Mockup */}
                        <div className="relative group">
                            <div className="absolute -inset-3 bg-accent/10 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl w-64">
                                <div className="bg-white rounded-2xl overflow-hidden">
                                    {/* Mobile Screen */}
                                    <div className="h-96 overflow-hidden">
                                        {/* Mobile Header */}
                                        <div className="bg-accent/10 p-6 text-center">
                                            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow border-2 border-accent/20">
                                                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-bold text-primary">Muskan Shopping</h4>
                                            <p className="text-xs text-text-secondary">Fashion Store</p>
                                        </div>

                                        {/* Mobile Products */}
                                        <div className="p-4 space-y-3">
                                            {[1, 2].map((item) => (
                                                <div key={item} className="bg-bg-card rounded-lg p-3 flex gap-3 border border-border-gray">
                                                    <div className="w-20 h-20 bg-bg-light rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="h-3 bg-gray-300 rounded mb-2"></div>
                                                        <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                                                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Home Indicator */}
                                <div className="flex justify-center pt-2 pb-1">
                                    <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features List */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary mb-1">Instant Setup</h4>
                                <p className="text-sm text-text-secondary">Your portfolio goes live in minutes</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary mb-1">Custom Domain</h4>
                                <p className="text-sm text-text-secondary">Get your unique branded URL</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary mb-1">SEO Ready</h4>
                                <p className="text-sm text-text-secondary">Optimized for search engines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPreview;
