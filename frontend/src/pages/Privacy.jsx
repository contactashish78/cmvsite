import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last Updated: December 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Account information (name, email, company)</li>
              <li>Amazon account data via authorized API connections</li>
              <li>Payment information (processed securely via third-party providers)</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide, maintain, and improve our services</li>
              <li>Analyze your Amazon business performance</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>SOC 2 Type II compliance</li>
              <li>Regular security audits and penetration testing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>With your consent</li>
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Revoke Amazon API access at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to provide and improve our services. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your information for as long as your account is active or as needed to provide services. Upon account deletion, we will delete or anonymize your data within 90 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mt-4">
              Email: privacy@comvinity.com<br />
              Address: 123 Business St, San Francisco, CA 94111
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
