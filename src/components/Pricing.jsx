import { useState } from 'react';

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
            popular: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 md:py-32 bg-bg-light">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extralight tracking-tighter text-primary mb-6">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-[17px] leading-relaxed text-text-secondary max-w-2xl mx-auto mb-10 font-light">
                        Choose the perfect plan for your business. No hidden fees, cancel anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-1 bg-white rounded-full p-1 border border-border-gray">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 rounded-full font-light text-[14px] transition-all duration-300 ${billingCycle === 'monthly'
                                    ? 'bg-primary text-white'
                                    : 'text-text-secondary hover:text-primary'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2 rounded-full font-light text-[14px] transition-all duration-300 ${billingCycle === 'yearly'
                                    ? 'bg-primary text-white'
                                    : 'text-text-secondary hover:text-primary'
                                }`}
                        >
                            Yearly
                            <span className="ml-2 text-[11px] bg-bg-card px-2 py-0.5 rounded-full">
                                Save 17%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl overflow-hidden border transition-all duration-500 ${plan.popular ? 'border-primary' : 'border-border-gray'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-[11px] font-light rounded-bl-xl">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-8">
                                    {/* Plan Name */}
                                    <h3 className="text-[19px] font-normal text-primary mb-2">{plan.name}</h3>
                                    <p className="text-[14px] text-text-secondary font-light mb-8">{plan.description}</p>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-extralight text-primary">
                                                ₹{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                            </span>
                                            <span className="text-[14px] text-text-secondary font-light">
                                                /{billingCycle === 'monthly' ? 'month' : 'year'}
                                            </span>
                                        </div>
                                        {billingCycle === 'yearly' && (
                                            <p className="text-[13px] text-text-muted mt-2 font-light">
                                                Save ₹{(plan.monthlyPrice * 12 - plan.yearlyPrice).toFixed(0)} per year
                                            </p>
                                        )}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="#"
                                        className={`block w-full text-center px-6 py-3 rounded-full font-normal text-[14px] transition-all duration-300 mb-8 ${plan.popular
                                                ? 'bg-accent text-white hover:bg-accent-hover'
                                                : 'bg-white border border-border-gray text-primary hover:bg-bg-card'
                                            }`}
                                    >
                                        Get Started
                                    </a>

                                    {/* Features List */}
                                    <div className="space-y-3">
                                        <p className="text-[12px] font-normal text-text-muted uppercase tracking-wide mb-4">
                                            What's Included:
                                        </p>
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start gap-3">
                                                <svg
                                                    className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary opacity-40"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-[14px] text-text-secondary font-light">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Money Back Guarantee */}
                <div className="mt-20 max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 text-center border border-border-gray">
                        <div className="w-12 h-12 bg-bg-card rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-primary opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-[19px] font-normal text-primary mb-2">30-Day Money-Back Guarantee</h3>
                        <p className="text-[15px] text-text-secondary font-light">
                            Try FordgeIndia risk-free. If you're not satisfied within 30 days, we'll refund your money — no questions asked.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
