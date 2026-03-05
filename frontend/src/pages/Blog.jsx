import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/blog/`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Amazon Seller Insights
            </h1>
            <p className="text-xl text-gray-600">
              Expert strategies for profit optimization, PPC management, and sustainable Amazon growth
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.slug}`}>
                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl group h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blog.featured_image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        Amazon Selling
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {blog.read_time} min read
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
