import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Check, X } from 'lucide-react';
import { Button } from '../components/ui/button';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 110,
      yearlyPrice: 1122, // 15% discount
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Perfect for small Amazon sellers',
      note: 'Per 5 ASINs',
      features: [
        'Amazon PPC optimization',
        'Profit dashboard & reporting',
        'Inventory alerts',
        'Buy Box monitoring',
        'Email support',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Growth',
      monthlyPrice: 140,
      yearlyPrice: 1428, // 15% discount
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'For established brands scaling operations',
      features: [
        'Everything in Starter',
        'AI creative support for Amazon ads',
        'A+ content generation',
        'Advanced budget intelligence',
        'Priority support',
        'Custom reporting',
        'API access'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      period: '',
      description: 'For large enterprises managing multiple brands',
      features: [
        'Everything in Growth',
        'Multi-geo Amazon marketplace support',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited ASINs',
        '24/7 priority support',
        'Quarterly business reviews',
        'White-label reporting'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const getCurrentPrice = (plan) => {
    if (!plan.monthlyPrice) return 'Custom';
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    return `$${price.toLocaleString()}`;
  };

  const comparisonFeatures = [
    { name: 'Amazon PPC Optimization', starter: true, growth: true, enterprise: true },
    { name: 'Profit Dashboard & Reporting', starter: true, growth: true, enterprise: true },
    { name: 'Inventory Alerts', starter: true, growth: true, enterprise: true },
    { name: 'Buy Box Monitoring', starter: true, growth: true, enterprise: true },
    { name: 'Basic Analytics', starter: true, growth: true, enterprise: true },
    { name: 'Email Support', starter: true, growth: true, enterprise: true },
    { name: 'AI Creative Support for Amazon Ads', starter: false, growth: true, enterprise: true },
    { name: 'A+ Content Generation', starter: false, growth: true, enterprise: true },
    { name: 'Advanced Budget Intelligence', starter: false, growth: true, enterprise: true },
    { name: 'Priority Support', starter: false, growth: true, enterprise: true },
    { name: 'Custom Reporting', starter: false, growth: true, enterprise: true },
    { name: 'API Access', starter: false, growth: true, enterprise: true },
    { name: 'Multi-geo Amazon Marketplace Support', starter: false, growth: false, enterprise: true },
    { name: 'Dedicated Account Manager', starter: false, growth: false, enterprise: true },
    { name: 'Custom Integrations', starter: false, growth: false, enterprise: true },
    { name: 'Unlimited ASINs', starter: false, growth: false, enterprise: true },
    { name: '24/7 Priority Support', starter: false, growth: false, enterprise: true },
    { name: 'Quarterly Business Reviews', starter: false, growth: false, enterprise: true },
    { name: 'White-label Reporting', starter: false, growth: false, enterprise: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that fits your Amazon business. No hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-2 ${
                  plan.popular 
                    ? 'border-blue-600 shadow-2xl scale-105' 
                    : 'border-gray-200'
                } hover:shadow-xl transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      {getCurrentPrice(plan)}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                    {plan.note && (
                      <p className="text-sm text-blue-600 mt-2 font-medium">{plan.note}</p>
                    )}
                  </div>

                  <Button 
                    className={`w-full mb-8 ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-7xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Compare Plans
            </h2>

            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="text-left p-6 text-gray-900 font-semibold">Features</th>
                    <th className="text-center p-6 text-gray-900 font-semibold">Starter</th>
                    <th className="text-center p-6 text-gray-900 font-semibold bg-blue-50">Growth</th>
                    <th className="text-center p-6 text-gray-900 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <td className="p-4 text-gray-700">{feature.name}</td>
                      <td className="p-4 text-center">
                        {feature.starter ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center bg-blue-50/50">
                        {feature.growth ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.enterprise ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Can I change plans later?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards (Visa, Mastercard, American Express) and ACH transfers for annual plans.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Is there a long-term contract?
                </h3>
                <p className="text-gray-600">
                  No, all plans are month-to-month or annual. You can cancel anytime with no penalties.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How does pricing work for the Starter plan?
                </h3>
                <p className="text-gray-600">
                  The Starter plan is priced at $110 per month for every 5 ASINs. If you have more ASINs, pricing will scale accordingly.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Do you offer custom enterprise plans?
                </h3>
                <p className="text-gray-600">
                  Yes, for brands with unique requirements or managing multiple Amazon accounts, we offer custom enterprise solutions. Contact our sales team for pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Optimize Your Amazon Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of Amazon sellers already optimizing with Comvinity
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-7 text-lg rounded-xl">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
