import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How do I publish my portfolio?',
            answer: 'After signing up and completing your profile, your portfolio is automatically published at https://<your-business-name>.site.fordgeindia.online. You can customize it anytime from your dashboard and share the link with customers immediately.',
        },
        {
            question: 'How do I add products to my portfolio?',
            answer: 'Simply log in to your vendor dashboard, navigate to the Products section, and click "Add Product". Upload images, add descriptions, set prices, and publish. Your products will appear on your portfolio instantly.',
        },
        {
            question: 'How do festival campaigns work?',
            answer: 'We publish official festival events throughout the year (Diwali, Holi, Christmas, etc.). You can browse available poster templates, customize them with your business name and offers, download them, and share via WhatsApp or social media.',
        },
        {
            question: 'Is there a free trial?',
            answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore the platform and see if it\'s right for your business before committing.',
        },
        {
            question: 'How do I upgrade or cancel my subscription?',
            answer: 'You can upgrade, downgrade, or cancel your subscription anytime from your account settings. Changes take effect immediately. If you cancel, you\'ll retain access until the end of your current billing period.',
        },
        {
            question: 'Can I use my own domain name?',
            answer: 'Yes! Growth and Enterprise plans support custom domain integration. You can connect your own domain (e.g., www.yourbusiness.com) to your FordgeIndia portfolio. Our support team will help you with the setup.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets. All transactions are secured with industry-standard encryption.',
        },
        {
            question: 'Do I need technical knowledge to use FordgeIndia?',
            answer: 'Not at all! FordgeIndia is designed for non-technical users. Our intuitive interface makes it easy to create your portfolio, add products, and manage campaigns without any coding or technical skills.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-primary pr-8">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    >
                                        <svg
                                            className="w-5 h-5 text-accent"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Support CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-4 bg-white rounded-2xl p-8 shadow-lg">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-blue rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-2">Still have questions?</h3>
                            <p className="text-gray-600 mb-4">
                                Our support team is here to help you get started.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                            >
                                Contact Support
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
