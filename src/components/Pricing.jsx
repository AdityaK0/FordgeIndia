import React, { useState } from 'react';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for small businesses getting started',
            monthlyPrice: 199,
            yearlyPrice: 1990,
            features: [
                'Beautiful Portfolio Website',
                'Manage up to 50 Products',
                'WhatsApp Share Tools',
                'Basic Analytics',
                'Email Support',
                'Mobile Responsive Design',
            ],
            color: 'accent',
            popular: false,
        },
        {
            name: 'Growth',
            description: 'Best for growing businesses',
            monthlyPrice: 399,
            yearlyPrice: 3990,
            features: [
                'Everything in Starter',
                'Unlimited Products',
                'Festival Campaign Posters',
                'Advanced Analytics Dashboard',
                'Custom Domain Support',
                'Priority Support',
                'SEO Optimization Tools',
                'Social Media Integration',
            ],
            color: 'accent-blue',
            popular: true,
        },
        {
            name: 'Enterprise',
            description: 'For established businesses',
            monthlyPrice: 799,
            yearlyPrice: 7990,
            features: [
                'Everything in Growth',
                'Multi-Location Support',
                'Custom Branding',
                'API Access',
                'Dedicated Account Manager',
                'Custom Integrations',
                'Advanced Security Features',
                'Training & Onboarding',
            ],
            color: 'purple-500',
            popular: false,
        },
    ];

    return (
        <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Choose the perfect plan for your business. No hidden fees, cancel anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-md">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${billingCycle === 'monthly'
                                    ? 'bg-accent text-white shadow-lg'
                                    : 'text-gray-600 hover:text-accent'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${billingCycle === 'yearly'
                                    ? 'bg-accent text-white shadow-lg'
                                    : 'text-gray-600 hover:text-accent'
                                }`}
                        >
                            Yearly
                            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                Save 17%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${plan.popular ? 'ring-2 ring-accent scale-105 md:scale-110' : ''
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-accent-blue text-white px-6 py-2 text-sm font-semibold rounded-bl-2xl">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-8">
                                    {/* Plan Name */}
                                    <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                                    <p className="text-gray-600 mb-6">{plan.description}</p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-bold text-primary">
                                                ₹{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                            </span>
                                            <span className="text-gray-600">
                                                /{billingCycle === 'monthly' ? 'month' : 'year'}
                                            </span>
                                        </div>
                                        {billingCycle === 'yearly' && (
                                            <p className="text-sm text-green-600 mt-2">
                                                Save ₹{(plan.monthlyPrice * 12 - plan.yearlyPrice).toFixed(0)} per year
                                            </p>
                                        )}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="#"
                                        className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mb-8 ${plan.popular
                                                ? 'bg-gradient-to-r from-accent to-accent-blue text-white shadow-lg hover:shadow-xl'
                                                : 'bg-gray-100 text-primary hover:bg-gray-200'
                                            }`}
                                    >
                                        Get Started
                                    </a>

                                    {/* Features List */}
                                    <div className="space-y-4">
                                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                            What's Included:
                                        </p>
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start gap-3">
                                                <svg
                                                    className={`w-5 h-5 flex-shrink-0 mt-0.5 text-${plan.color}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Gradient */}
                                <div className={`h-2 bg-gradient-to-r from-${plan.color} to-${plan.color}`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table CTA */}
                <div className="text-center mt-12">
                    <button className="text-accent font-semibold hover:underline flex items-center gap-2 mx-auto">
                        Compare All Features
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Money Back Guarantee */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-accent/10 to-accent-blue/10 rounded-2xl p-8 text-center border border-accent/20">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">30-Day Money-Back Guarantee</h3>
                        <p className="text-gray-600">
                            Try FordgeIndia risk-free. If you're not satisfied within 30 days, we'll refund your money — no questions asked.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
