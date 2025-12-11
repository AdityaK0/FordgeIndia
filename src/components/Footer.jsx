
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-border-gray">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <span className="text-[15px] font-normal text-primary">FordgeIndia</span>
                        </div>
                        <p className="text-[13px] text-text-muted mb-6 font-light leading-relaxed">
                            Empowering local businesses with professional portfolios, smart marketing tools, and growth analytics.
                        </p>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="font-normal text-[13px] text-primary mb-4">Product</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="#features" className="text-[13px] text-text-muted hover:text-primary transition-colors font-light">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-[13px] text-text-muted hover:text-primary transition-colors font-light">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#demo" className="text-[13px] text-text-muted hover:text-primary transition-colors font-light">
                                    Demo
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-normal text-[13px] text-primary mb-4">Company</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="#" className="text-[13px] text-text-muted hover:text-primary transition-colors font-light">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[13px] text-text-muted hover:text-primary transition-colors font-light">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-[13px] text-text-muted hover:text-primary transition-colors font-light">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h3 className="font-normal text-[13px] text-primary mb-4">Support</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="#" className="text-[13px] text-text-muted hover:text-primary transition-colors font-light">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-[13px] text-text-muted hover:text-primary transition-colors font-light">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[13px] text-text-muted hover:text-primary transition-colors font-light">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border-gray pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[12px] text-text-muted font-light">
                        © {currentYear} FordgeIndia. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-[12px] text-text-muted hover:text-primary transition-colors font-light">
                            Terms
                        </a>
                        <a href="#" className="text-[12px] text-text-muted hover:text-primary transition-colors font-light">
                            Privacy
                        </a>
                        <a href="#" className="text-[12px] text-text-muted hover:text-primary transition-colors font-light">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
