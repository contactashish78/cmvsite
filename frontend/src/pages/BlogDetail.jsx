import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/blog/${slug}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
        <img 
          src={blog.featured_image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'} 
          alt={blog.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <article className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-blue-100 text-blue-700">
                Amazon Selling
              </Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {blog.read_time} min read
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(blog.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Author */}
            <div className="flex items-center space-x-3 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div>
                <div className="font-semibold text-gray-900">{blog.author}</div>
                <div className="text-sm text-gray-500">Amazon Growth Expert</div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                  p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed mb-6" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
                  a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-700 underline" {...props} />,
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>

            {/* SEO Keywords */}
            {blog.seo_keywords && blog.seo_keywords.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-sm font-semibold text-gray-500 mb-3">RELATED TOPICS</div>
                <div className="flex flex-wrap gap-2">
                  {blog.seo_keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="border-gray-300 text-gray-700">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Optimize Your Amazon Business?
              </h3>
              <p className="text-gray-700 mb-6">
                Get the insights and tools you need to increase profit and scale sustainably.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Optimizing Today
              </Button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
