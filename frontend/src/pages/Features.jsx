import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { BarChart3, TrendingUp, Package, Target, Zap, DollarSign, AlertTriangle, ShoppingCart } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to Optimize Amazon Profit
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive tools for advertising, inventory, pricing, and financial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Amazon Advertising Optimization */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Amazon Advertising Optimization</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Performance Tracking</h3>
                  <p className="text-gray-600">Monitor ACOS, ROAS, CPC, and conversion rates across all campaigns</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Keyword Waste Analysis</h3>
                  <p className="text-gray-600">Identify high-spend, zero-order keywords automatically</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Bid Optimization Recommendations</h3>
                  <p className="text-gray-600">AI-powered bid suggestions based on profit goals</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Allocation Intelligence</h3>
                  <p className="text-gray-600">Optimal budget distribution across campaigns and products</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Profit Intelligence */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Amazon Profit Intelligence</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">True Net Margin Calculation</h3>
                  <p className="text-gray-600">Revenue minus all fees, ads, returns, and COGS</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SKU-Level Profitability</h3>
                  <p className="text-gray-600">Per-product profit analysis including all costs</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Settlement Reconciliation</h3>
                  <p className="text-gray-600">Automatic Amazon settlement sync and validation</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fee Impact Analysis</h3>
                  <p className="text-gray-600">Breakdown of referral, FBA, storage fees by SKU</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Management System */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Inventory Management System</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Stock Coverage Tracking</h3>
                  <p className="text-gray-600">Days of inventory remaining based on sell-through rate</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Restock Forecasting</h3>
                  <p className="text-gray-600">AI-powered restock recommendations aligned with ad velocity</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Warehouse Tracking</h3>
                  <p className="text-gray-600">Monitor inventory across Amazon fulfillment centers</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Stockout Alerts</h3>
                  <p className="text-gray-600">Proactive warnings before inventory runs out</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Box & Pricing Monitoring */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Buy Box & Pricing Monitoring</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Buy Box Percentage Tracking</h3>
                  <p className="text-gray-600">Monitor your Buy Box exposure over time</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Price Analysis</h3>
                  <p className="text-gray-600">Track competitor pricing and positioning</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Margin Impact Alerts</h3>
                  <p className="text-gray-600">Notifications when pricing affects profitability</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Price Optimization</h3>
                  <p className="text-gray-600">Recommendations for profit-maximizing prices</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Category & Brand Intelligence */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Category & Brand Intelligence</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Brand vs Non-Brand Split</h3>
                  <p className="text-gray-600">Performance breakdown by search term type</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SKU Cannibalization Detection</h3>
                  <p className="text-gray-600">Identify products competing against each other</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-SKU Halo Tracking</h3>
                  <p className="text-gray-600">Measure how advertising one product affects others</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Category Performance</h3>
                  <p className="text-gray-600">Benchmark performance against category averages</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Engine */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">AI-Powered Decision Engine</h2>
            <p className="text-xl text-blue-100 mb-12">
              Every recommendation is based on structured logic analyzing financial impact, risk thresholds, and business context. No black boxes—just transparent, data-driven insights.
            </p>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg rounded-xl font-semibold transition-colors">
              Start Optimizing Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
