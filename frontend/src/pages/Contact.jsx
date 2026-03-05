import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    monthlyAdSpend: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? Want to see a demo? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Request Access
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="monthlyAdSpend">Monthly Amazon Ad Spend</Label>
                      <Input
                        id="monthlyAdSpend"
                        name="monthlyAdSpend"
                        value={formData.monthlyAdSpend}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="$5,000"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2"
                        rows={4}
                        placeholder="Tell us about your Amazon business..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Other Ways to Reach Us
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">support@comvinity.com</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                      <p className="text-gray-600">Available Monday-Friday</p>
                      <p className="text-sm text-gray-500 mt-1">9am - 6pm EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Book a Strategy Call
                </h3>
                <p className="text-gray-700 mb-6">
                  Get a personalized demo and discuss how Comvinity can help optimize your Amazon business.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Schedule Call
                </Button>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  For Agencies & Enterprise
                </h3>
                <p className="text-gray-700 mb-6">
                  Managing multiple Amazon accounts? We offer custom solutions for agencies and enterprises.
                </p>
                <Button variant="outline" className="border-gray-300">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
