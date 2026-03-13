import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, TrendingUp, DollarSign, Package, Target, BarChart3, ShoppingCart, AlertTriangle, Zap, ChevronRight } from 'lucide-react';

const Home = () => {
  // Mock data for social proof
  const trustedBrands = [
    "Amazon FBA Pro", "Seller Central Elite", "Prime Brands Co", "FBA Masters", 
    "E-commerce Elite", "Digital Retail Co", "Prime Sellers Hub", "Amazon Growth Partners"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Soft White Background */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30"></div>
        
        <div className="container mx-auto px-6 py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
                Trusted by 300+ Amazon Sellers
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
                Increase Amazon Profit with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Smarter Business Decisions
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                AI-powered operating system that connects your Amazon PPC, inventory, pricing and financial data to improve margins, control ad spend and scale sustainably.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/20 group whitespace-normal text-center leading-snug h-auto">
                  <Link to="/contact" className="flex items-center justify-center gap-2 text-center">
                    <span>Start Optimizing My Amazon Business</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl whitespace-normal text-center h-auto">
                  <Link to="/contact" className="text-center">
                    Book a Strategy Call
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1632813404574-b63d317ee258" 
                  alt="Amazon Dashboard"
                  className="w-full aspect-[4/3] lg:aspect-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-2xl shadow-xl hidden lg:block">
                <div className="text-3xl font-bold text-white">$2.4M+</div>
                <div className="text-sm text-blue-100">Profit Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <section className="bg-gray-100 border-y border-gray-200 py-6 overflow-hidden">
        <div className="flex items-center space-x-8 animate-scroll">
          {[...trustedBrands, ...trustedBrands].map((brand, index) => (
            <div key={index} className="text-gray-500 whitespace-nowrap font-medium">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section - Reimagined */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Amazon growth breaks when decisions are made in{' '}
              <span className="text-blue-600">isolation</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Advertising teams focus on ACOS. Finance tracks revenue. Operations manages inventory.<br/>
              <strong className="text-gray-900">Profit depends on how these work together.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advertising</h3>
                <p className="text-gray-600">Campaign optimization without financial context</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Finance</h3>
                <p className="text-gray-600">Revenue tracking missing operational insights</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Operations</h3>
                <p className="text-gray-600">Inventory managed separately from advertising</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-4 bg-blue-50 px-8 py-4 rounded-full">
              <Zap className="h-6 w-6 text-blue-600" />
              <p className="text-lg font-semibold text-blue-900">
                Comvinity evaluates your Amazon business as a unified system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Comvinity Is - Bento Grid Style */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              An Operating System Built for Amazon Sellers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instead of disconnected dashboards, Comvinity surfaces structured actions designed to improve financial outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
            {[
              'Amazon PPC efficiency tracking',
              'ROAS and ACOS trends',
              'SKU-level profitability',
              'Fee and return impact',
              'Inventory coverage',
              'Buy Box status',
              'Keyword waste analysis',
              'Budget allocation'
            ].map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-blue-500 group">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Large Product Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86" 
              alt="Comvinity Dashboard Interface"
              className="relative rounded-2xl shadow-2xl border border-gray-200 w-full aspect-[16/10] object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works - Visually Impactful */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-20">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <Card className="relative border-0 shadow-xl overflow-hidden bg-white h-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform">
                    <span className="text-4xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Connect Your Amazon Account
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Secure integration via Amazon Ads API and Amazon Seller API. Set up in minutes, not weeks.
                  </p>
                  <div className="mt-8 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Quick Setup <ChevronRight className="ml-1 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <Card className="relative border-0 shadow-xl overflow-hidden bg-white h-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform">
                    <span className="text-4xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    AI Analyzes Your Business
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Advertising, financial, operational and performance data are evaluated together in real-time.
                  </p>
                  <div className="mt-8 flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Smart Analysis <ChevronRight className="ml-1 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <Card className="relative border-0 shadow-xl overflow-hidden bg-white h-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-50"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-red-500 rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform">
                    <span className="text-4xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Get Actionable Insights
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Receive prioritized business alerts with projected impact on profit or margin.
                  </p>
                  <div className="mt-8 flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Start Growing <ChevronRight className="ml-1 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview - Modern Cards */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Designed for Clarity, Not Complexity
            </h2>
            <p className="text-xl text-gray-600">
              Everything Amazon operators need in one intelligent dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: 'Profit Dashboard',
                description: 'Real-time net margin view after all fees, ads and returns',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'PPC Optimization',
                description: 'Campaign efficiency tracking with financial context',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: AlertTriangle,
                title: 'Inventory Alerts',
                description: 'Predictive stock coverage and restock recommendations',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Target,
                title: 'Budget Intelligence',
                description: 'Smart allocation across campaigns and products',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: Zap,
                title: 'AI Assistant',
                description: 'Chat-based business intelligence and recommendations',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Package,
                title: 'Performance-Driven A+ Content',
                description: 'Generate Amazon A+ modules aligned with pricing, positioning, and category intelligence — without manual design effort',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-2xl group cursor-pointer">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's Built For */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
              Built for Amazon Operators Who Need Results
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Amazon FBA brands scaling ad budgets',
                'Sellers managing multiple SKUs',
                'Operators focused on net profit',
                'Agencies overseeing Amazon growth'
              ].map((audience, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-all">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-lg font-medium text-gray-800">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Make Every Amazon Decision Count
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 300+ sellers who've optimized their Amazon business with AI-powered intelligence
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-xl shadow-2xl font-semibold group whitespace-normal h-auto">
            <Link to="/contact" className="flex items-center justify-center gap-2 text-center">
              <span>Start Optimizing My Amazon Business</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;