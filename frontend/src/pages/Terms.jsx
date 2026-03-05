import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-12">Last Updated: December 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using Comvinity's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              Comvinity provides an Amazon business operating system that connects advertising, inventory, pricing, and financial data to help sellers optimize profitability. Our service includes data analysis, recommendations, and reporting tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be authorized to connect the Amazon account(s) you link to Comvinity</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subscription terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Subscriptions are billed monthly or annually</li>
              <li>Fees are non-refundable except as required by law</li>
              <li>We may change pricing with 30 days' notice</li>
              <li>You can cancel anytime; access continues through the billing period</li>
              <li>Failed payments may result in service suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our service to harm others or our infrastructure</li>
              <li>Reverse engineer or copy our software</li>
              <li>Share your account access with unauthorized users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Amazon API Usage</h2>
            <p className="text-gray-700 leading-relaxed">
              You authorize Comvinity to access your Amazon account data via Amazon's APIs. You can revoke this access at any time through your Amazon Seller Central settings. We comply with all Amazon API terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. No Auto-Execution</h2>
            <p className="text-gray-700 leading-relaxed">
              Comvinity provides recommendations and insights but does not automatically execute changes to your Amazon account without your explicit approval. You maintain full control and responsibility for all actions taken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, features, and functionality of Comvinity are owned by us and protected by copyright, trademark, and other intellectual property laws. Your Amazon data remains yours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitations of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our service is provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Specific results or profit increases</li>
              <li>Uninterrupted or error-free service</li>
              <li>Accuracy of all recommendations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate the agreement at any time. We may suspend or terminate your access immediately for violations of these terms. Upon termination, your access will cease and we will delete your data per our retention policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may modify these terms at any time. Material changes will be communicated via email. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms are governed by the laws of the State of California, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms, contact us at legal@comvinity.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
