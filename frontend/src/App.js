import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RiskDisclaimer from "./pages/RiskDisclaimer";
import AdminBlogs from "./pages/AdminBlogs";
import AdminBlogEditor from "./pages/AdminBlogEditor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
          
          {/* Admin Routes */}
          <Route path="/admin/blogs" element={<AdminBlogs />} />
          <Route path="/admin/blogs/new" element={<AdminBlogEditor />} />
          <Route path="/admin/blogs/edit/:id" element={<AdminBlogEditor />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </BrowserRouter>
    </div>
  );
}

export default App;
