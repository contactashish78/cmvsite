import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminBlogEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Comvinity Team',
    seo_keywords: '',
    featured_image: '',
    read_time: 5,
    published: true
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BACKEND_URL}/api/blog/${id}`);
      const blog = response.data;
      setFormData({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        author: blog.author,
        seo_keywords: blog.seo_keywords.join(', '),
        featured_image: blog.featured_image || '',
        read_time: blog.read_time,
        published: blog.published
      });
    } catch (error) {
      console.error('Error fetching blog:', error);
      alert('Failed to load blog');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Auto-generate slug from title
    if (name === 'title' && !isEditMode) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        seo_keywords: formData.seo_keywords.split(',').map(k => k.trim()).filter(k => k)
      };

      if (isEditMode) {
        await axios.put(`${BACKEND_URL}/api/blog/${id}`, payload);
        alert('Blog updated successfully!');
      } else {
        await axios.post(`${BACKEND_URL}/api/blog/`, payload);
        alert('Blog created successfully!');
      }

      navigate('/admin/blogs');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert(error.response?.data?.detail || 'Failed to save blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/admin/blogs')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blogs
        </Button>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>

        <Card>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  placeholder="How to Calculate True Amazon Profit Beyond ACOS"
                />
              </div>

              {/* Slug */}
              <div>
                <Label htmlFor="slug">Slug (URL) *</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  placeholder="calculate-true-amazon-profit-beyond-acos"
                />
                <p className="text-sm text-gray-500 mt-1">
                  URL-friendly version of the title
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="mt-2"
                  placeholder="Short description that appears on the blog listing page..."
                />
              </div>

              {/* Content */}
              <div>
                <Label htmlFor="content">Content (Markdown supported) *</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={15}
                  className="mt-2 font-mono text-sm"
                  placeholder="## Introduction&#10;&#10;Your blog content here using markdown...&#10;&#10;- Bullet point 1&#10;- Bullet point 2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Use Markdown formatting (## for headings, - for bullets, **bold**, etc.)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Author */}
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                {/* Read Time */}
                <div>
                  <Label htmlFor="read_time">Read Time (minutes)</Label>
                  <Input
                    id="read_time"
                    name="read_time"
                    type="number"
                    value={formData.read_time}
                    onChange={handleChange}
                    className="mt-2"
                    min="1"
                  />
                </div>
              </div>

              {/* SEO Keywords */}
              <div>
                <Label htmlFor="seo_keywords">SEO Keywords</Label>
                <Input
                  id="seo_keywords"
                  name="seo_keywords"
                  value={formData.seo_keywords}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Amazon profit, ACOS optimization, Amazon PPC"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Comma-separated keywords
                </p>
              </div>

              {/* Featured Image */}
              <div>
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                  id="featured_image"
                  name="featured_image"
                  value={formData.featured_image}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="https://images.unsplash.com/photo-..."
                />
              </div>

              {/* Published */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="published"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <Label htmlFor="published" className="cursor-pointer">
                  Publish immediately
                </Label>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {loading ? 'Saving...' : isEditMode ? 'Update Blog' : 'Create Blog'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/admin/blogs')}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminBlogEditor;
