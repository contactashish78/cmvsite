import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Comvinity
            </h1>
            <p className="text-xl text-gray-600">
              Building the operating system for Amazon commerce
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Purpose</h2>
            <div className="prose prose-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Most Amazon sellers operate with fragmented tools. Advertising teams focus on ACOS. Finance tracks revenue. Operations manages inventory. These functions rarely align, and profit suffers as a result.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Comvinity was built to solve this problem. We created an intelligent operating system that connects advertising, inventory, pricing, and financial data into a unified view designed specifically for Amazon sellers.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our mission is to help Amazon businesses make smarter, faster decisions that improve profitability and enable sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Vision</h2>
            <div className="prose prose-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We envision a future where every Amazon seller has access to enterprise-grade business intelligence without the complexity or cost typically associated with such systems.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Comvinity aims to be the standard operating platform for Amazon commerce—a system where advertising, operations, and finance work together automatically, enabling sellers to focus on growth rather than firefighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Principles</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Profit Over Vanity Metrics</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We optimize for net profit, not revenue or ACOS alone. Every recommendation is evaluated based on its impact on true business profitability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency First</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  No black boxes. Every insight includes the reasoning behind it, and sellers maintain full control over execution.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Simplicity in Complexity</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Amazon commerce is complex. Our job is to make it simple. We surface only what matters and hide unnecessary noise.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Operators</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We build for people running real businesses, not marketers chasing vanity metrics. Our features prioritize operational efficiency and sustainable growth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Improvement</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Amazon changes constantly. So do we. Our platform evolves based on seller feedback and marketplace dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Join Hundreds of Amazon Sellers
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start making smarter business decisions today
          </p>
          <button className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg rounded-xl font-semibold transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
