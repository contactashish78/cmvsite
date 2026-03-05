import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/comvinity-logo.png" 
              alt="Comvinity" 
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              How It Works
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-600/20">
              <a href="https://app.comvinity.com" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/features" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-4">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://app.comvinity.com" target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
