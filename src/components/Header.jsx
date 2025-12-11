import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-xl border-b border-border-gray'
                    : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <span className="text-[15px] font-normal text-primary">
                            FordgeIndia
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-light text-[14px] text-text-secondary transition-colors hover:text-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="#pricing"
                            className="px-5 py-2 bg-accent text-white rounded-full font-normal text-[14px] hover:bg-accent-hover transition-all duration-300"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-bg-card transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="py-4 space-y-1 border-t border-border-gray">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2.5 text-text-secondary hover:bg-bg-card hover:text-primary rounded-lg transition-colors font-light text-[14px]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="px-4 pt-4">
                            <a
                                href="#pricing"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center px-5 py-2.5 bg-accent text-white rounded-full font-normal text-[14px] hover:bg-accent-hover transition-all"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
