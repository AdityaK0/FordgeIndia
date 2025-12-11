import { useState, useEffect } from 'react';

const FestivalMarketing = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const festivals = [
        { name: 'Diwali', icon: '🪔', color: 'bg-orange-500' },
        { name: 'Holi', icon: '🎨', color: 'bg-pink-500' },
        { name: 'Christmas', icon: '🎄', color: 'bg-red-500' },
        { name: 'Eid', icon: '🌙', color: 'bg-teal-500' },
        { name: 'New Year', icon: '🎉', color: 'bg-indigo-500' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % festivals.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="festival-marketing" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                        Festival Marketing Made Easy
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Boost your sales during festivals with professionally designed poster templates.
                        Create, customize, and share in minutes.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Process Steps */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Admin Publishes Events</h3>
                                    <p className="text-text-secondary">
                                        We publish official festival events like Diwali, Holi, Christmas, Eid, and more throughout the year.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Choose Poster Templates</h3>
                                    <p className="text-text-secondary">
                                        Browse beautiful, professionally designed poster templates for each festival and select your favorite.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Customize & Edit Text</h3>
                                    <p className="text-text-secondary">
                                        Add your business name, offers, and custom messages. Make it uniquely yours with our easy editor.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Download & Share</h3>
                                    <p className="text-text-secondary">
                                        Download your poster and share it instantly via WhatsApp, Facebook, Instagram, or print it out.
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-6">
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    Start Creating Posters
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Right: Animated Carousel */}
                        <div className="relative">
                            {/* Main Poster Display */}
                            <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden border border-border-gray">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-bl-full"></div>

                                <div className="relative z-10">
                                    {/* Poster Preview */}
                                    <div className={`aspect-[3/4] rounded-xl ${festivals[currentSlide].color} p-8 flex flex-col items-center justify-center text-white transition-all duration-500`}>
                                        <div className="text-8xl mb-6 animate-float">
                                            {festivals[currentSlide].icon}
                                        </div>
                                        <h3 className="text-4xl font-bold mb-4 text-center">
                                            Happy {festivals[currentSlide].name}
                                        </h3>
                                        <div className="w-20 h-1 bg-white/50 rounded-full mb-6"></div>
                                        <p className="text-xl text-center mb-6">
                                            Special Offers Inside!
                                        </p>
                                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
                                            <p className="text-lg font-semibold">Your Business Name</p>
                                        </div>
                                    </div>

                                    {/* Carousel Indicators */}
                                    <div className="flex justify-center gap-2 mt-6">
                                        {festivals.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-accent' : 'w-2 bg-gray-300'
                                                    }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Action Buttons */}
                            <div className="absolute -bottom-6 -right-6 flex gap-3">
                                <div className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group border border-border-gray">
                                    <svg className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </div>
                                <div className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group border border-border-gray">
                                    <svg className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Festival Icons Row */}
                    <div className="mt-16 flex justify-center gap-8 flex-wrap">
                        {festivals.map((festival, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`cursor-pointer transition-all duration-300 ${index === currentSlide ? 'scale-125' : 'scale-100 opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <div className={`text-5xl p-4 rounded-2xl ${festival.color} bg-opacity-10 border border-border-gray`}>
                                    {festival.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FestivalMarketing;
