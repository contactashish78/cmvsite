import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Zap, Brain, Shield, Gauge } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How Comvinity Works
            </h1>
            <p className="text-xl text-gray-600">
              A unified operating system that connects advertising, finance, and operations for Amazon profit optimization
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Data Layer */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Integrated Amazon Data Layer
              </h2>
              <p className="text-xl text-gray-600">
                Connect all your Amazon business data in one place
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Amazon Ads API</h3>
                  <p className="text-gray-600">Campaign performance, keyword data, ACOS, ROAS metrics</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Amazon Seller API</h3>
                  <p className="text-gray-600">Inventory levels, fees, returns, Buy Box status</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-cyan-200 bg-cyan-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Analytics</h3>
                  <p className="text-gray-600">Market share, competitor insights, search terms</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Intelligence Engine */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Business Intelligence Engine
              </h2>
              <p className="text-xl text-gray-600">
                AI analyzes relationships between metrics to surface actionable insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ACOS ↔ Profit Analysis</h3>
                    <p className="text-gray-600">Correlates advertising cost with true net margin after all fees</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gauge className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Inventory ↔ Ad Velocity</h3>
                    <p className="text-gray-600">Aligns stock coverage with advertising spend rates</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">CPC ↔ Conversion Rate</h3>
                    <p className="text-gray-600">Monitors efficiency of ad spend relative to conversion</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Return Rate Impact</h3>
                    <p className="text-gray-600">Adjusts profitability based on product return patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Framework */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Prioritized Alert Framework
              </h2>
              <p className="text-xl text-gray-600">
                Every insight is categorized by urgency and profit impact
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-r-xl">
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 font-bold text-lg">CRITICAL</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Immediate Action Required</h3>
                    <p className="text-gray-700">High profit impact or urgent business risk (e.g., stockout imminent, margin negative)</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-r-xl">
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-600 font-bold text-lg">MODERATE</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Review Within 24-48 Hours</h3>
                    <p className="text-gray-700">Medium profit impact or declining trend (e.g., ACOS rising, Buy Box percentage dropping)</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-xl">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 font-bold text-lg">FYI</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">For Your Information</h3>
                    <p className="text-gray-700">Low urgency, informational updates (e.g., positive trends, minor optimizations)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Control */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Execution With Control
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Comvinity recommends actions but never executes without your approval. You maintain full control of your Amazon account.
            </p>
            
            <div className="bg-white p-12 rounded-2xl border-2 border-gray-200 shadow-lg">
              <div className="space-y-6 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">Review recommended actions with projected impact</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">Approve or modify suggestions before implementation</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">Track results and optimize based on outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Connect your Amazon account and start optimizing in minutes
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-7 text-lg rounded-xl">
            Start Optimizing My Amazon Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
