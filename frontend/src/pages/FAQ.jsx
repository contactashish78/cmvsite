import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How does Comvinity integrate with my Amazon account?",
      answer: "Comvinity connects securely via Amazon's official APIs (Amazon Ads API and Amazon Seller API). You authorize read-only access through Amazon's OAuth system. We never store your Amazon credentials, and you can revoke access at any time through your Amazon Seller Central settings."
    },
    {
      question: "Will Comvinity make changes to my Amazon account automatically?",
      answer: "No. Comvinity recommends actions but never executes changes without your explicit approval. You review each recommendation, see the projected impact, and choose whether to implement it. You maintain full control of your Amazon business."
    },
    {
      question: "How long does setup take?",
      answer: "Initial setup takes 5-10 minutes. You'll connect your Amazon account, and Comvinity will begin analyzing your data immediately. Most sellers see their first insights within hours of connecting."
    },
    {
      question: "What Amazon marketplaces do you support?",
      answer: "Starter and Growth plans support Amazon US. The Scale plan includes multi-geo support for Amazon UK, Canada, Germany, France, Italy, Spain, Japan, and Australia."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, all plans include a 14-day free trial with full access to features. No credit card required to start."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, all plans are month-to-month with no long-term contracts. You can cancel anytime, and you'll retain access through the end of your billing period."
    },
    {
      question: "How is Comvinity different from other Amazon tools?",
      answer: "Most Amazon tools focus on a single function—PPC management, inventory tracking, or financial reporting. Comvinity is an operating system that connects advertising, inventory, pricing, and finance into one unified platform. We optimize for profit, not isolated metrics."
    },
    {
      question: "What level of Amazon revenue do I need to use Comvinity?",
      answer: "Comvinity is designed for sellers doing at least $10K/month in revenue. Our Starter plan supports up to $50K monthly revenue, Growth up to $250K, and Scale for unlimited revenue."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We're SOC 2 Type II compliant and never share your data with third parties. Your Amazon account credentials are never stored on our servers."
    },
    {
      question: "Do you integrate with other tools?",
      answer: "Yes, Comvinity integrates with major accounting platforms (QuickBooks, Xero), inventory management systems, and Amazon seller tools. Contact us for specific integration requirements."
    },
    {
      question: "What kind of support do you offer?",
      answer: "Starter plans include email support with 24-hour response time. Growth plans get priority support. Scale plans include a dedicated account manager and 24/7 priority support."
    },
    {
      question: "Can I use Comvinity for multiple Amazon accounts?",
      answer: "Yes, Scale plan customers can connect multiple Amazon seller accounts. For agencies managing multiple clients, we offer custom enterprise pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about Comvinity
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border-2 border-gray-200 rounded-xl px-6 hover:border-blue-500 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl font-semibold transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
