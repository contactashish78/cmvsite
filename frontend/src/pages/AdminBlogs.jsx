import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Pencil, Trash2, Plus, Eye } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

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

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      await axios.delete(`${BACKEND_URL}/api/blog/${id}`);
      alert('Blog deleted successfully!');
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Blog Management</h1>
          <Link to="/admin/blogs/new">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Create New Blog
            </Button>
          </Link>
        </div>

        <div className="grid gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{blog.title}</h2>
                      {blog.published ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Published
                        </span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Draft
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>By {blog.author}</span>
                      <span>•</span>
                      <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{blog.read_time} min read</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <Link to={`/blog/${blog.slug}`} target="_blank">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to={`/admin/blogs/edit/${blog.id}`}>
                      <Button variant="outline" size="sm">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(blog.id, blog.title)}
                      className="text-red-600 hover:text-red-700 hover:border-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No blogs yet. Create your first one!</p>
              <Link to="/admin/blogs/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Blog
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogs;
