import React, { useEffect, useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  User, 
  Tag, 
  Facebook, 
  Twitter, 
  Linkedin,
  MessageSquare,
  Eye,
  ChevronRight,
  Home,
  Layers
} from 'lucide-react';
import { BASE_URL } from '../constants/apiTags';

const BlogDetail = () => {
  const location = useLocation();
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  // Format a blog with date and readTime
  const formatBlog = (b) => {
    if (!b) return null;
    
    const cleanContent = b.content ? b.content.replace(/<[^>]*>/g, '') : '';
    const estimatedReadTime = Math.max(1, Math.ceil(cleanContent.split(/\s+/).length / 200));
    
    return {
      ...b,
      cleanContent: cleanContent,
      date: b.created_at
        ? new Date(b.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : 'Recent',
      formattedDate: b.created_at
        ? new Date(b.created_at).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : 'Recent',
      readTime: `${estimatedReadTime} min read`,
      category: extractFirstTag(b.content) || 'General',
      tags: extractTags(b.content),
      wordCount: cleanContent.split(/\s+/).length,
    };
  };

  const extractFirstTag = (content) => {
    const match = content?.match(/<(\w+)[^>]*>/);
    return match ? match[1].charAt(0).toUpperCase() + match[1].slice(1) : 'General';
  };

  const extractTags = (content) => {
    const tags = [];
    const tagRegex = /<(\w+)[^>]*>/g;
    let match;
    while ((match = tagRegex.exec(content || '')) !== null && tags.length < 5) {
      const tagName = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      if (!tags.includes(tagName) && tagName.length < 15) {
        tags.push(tagName);
      }
    }
    return tags.length > 0 ? tags : ['General', 'Blog', 'Article'];
  };

  const calculateReadTime = (content) => {
    const text = content?.replace(/<[^>]*>/g, '') || '';
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return `${Math.max(1, Math.ceil(words / wordsPerMinute))} min read`;
  };

  // Load current blog
  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        // First try to get from state
        const blogFromState = location.state?.blog;
        if (blogFromState) {
          setBlog(formatBlog(blogFromState));
        } else {
          // If not in state, fetch all blogs and find by slug
          const response = await axios.get(`${BASE_URL}/blogs.php`);
          if (response.data && Array.isArray(response.data)) {
            const foundBlog = response.data.find(b => b.slug === slug);
            setBlog(formatBlog(foundBlog || null));
          }
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [location.state, slug]);

  // Fetch recent blogs
  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/blogs.php`);
        if (res.data && Array.isArray(res.data)) {
          const sorted = res.data
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 6)
            .map(formatBlog);
          setRecentBlogs(sorted.filter(b => b && b.id !== blog?.id));
          
          // Set related blogs (excluding current and recent)
          if (blog) {
            const related = res.data
              .filter(b => b.id !== blog.id && b.id !== sorted[0]?.id)
              .slice(0, 3)
              .map(formatBlog);
            setRelatedBlogs(related);
          }
        }
      } catch (err) {
        console.error('Error fetching recent blogs:', err);
      }
    };
    
    if (!loading) {
      fetchRecentBlogs();
    }
  }, [blog, loading]);

  const shareBlog = (platform) => {
    const url = window.location.href;
    const title = blog?.title || '';
    const text = blog?.cleanContent?.substring(0, 100) || '';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 rounded-full border-emerald-200 border-t-emerald-600 animate-spin"></div>
          <div className="absolute inset-0 border-4 rounded-full border-emerald-100 animate-ping"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading article...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-gray-50 to-red-50">
        <div className="p-6 mb-6 bg-white shadow-lg rounded-2xl">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-100 to-red-200">
            <Bookmark className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Article Not Found</h1>
          <p className="max-w-md mb-8 text-gray-600">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 bg-emerald-600 rounded-xl hover:bg-emerald-700"
            >
              <ArrowLeft className="w-5 h-5" /> Browse All Articles
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 bg-gray-100 rounded-xl hover:bg-gray-200"
            >
              <Home className="w-5 h-5" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-emerald-50">
      {/* Navigation Breadcrumbs */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-lg">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="transition-colors hover:text-emerald-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blogs" className="transition-colors hover:text-emerald-600">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-900 truncate">{blog.title}</span>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl px-4 py-8 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                Back to All Articles
              </Link>
            </div>

            {/* Article Header */}
            <div className="mb-8">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl">
                <Tag className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">{blog.category}</span>
              </div> */}
              <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-white shadow-lg rounded-2xl">
                {/* <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-500">
                      <User className="text-white w-7 h-7" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Admin</p>
                    <p className="text-sm text-gray-600">Published on {blog.formattedDate}</p>
                  </div>
                </div> */}
                
                {/* <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{blog.wordCount.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Words</p>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{blog.readTime}</p>
                    <p className="text-sm text-gray-600">Read Time</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Featured Image */}
            {blog.image_url && (
              <div className="relative mb-8 overflow-hidden shadow-2xl rounded-2xl group">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-transparent"></div>
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="object-cover w-full h-[400px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute z-20 bottom-6 left-6">
                  <div className="flex items-center gap-2 text-white/90">
                    <Eye className="w-5 h-5" />
                    <span className="text-sm font-medium">Featured Image</span>
                  </div>
                </div>
              </div>
            )}

            {/* Article Content */}
            <article className="p-8 mb-8 bg-white shadow-lg rounded-2xl">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              
              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="pt-8 mt-8 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-semibold text-gray-900">Article Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-medium transition-colors border rounded-full cursor-pointer text-emerald-700 bg-emerald-50 border-emerald-100 hover:bg-emerald-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Share Section */}
            <div className="p-6 mb-8 border border-gray-200 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Share this article</h3>
                  <p className="text-gray-600">Help others discover this content</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => shareBlog('facebook')}
                    className="p-3 text-blue-600 transition-colors bg-blue-100 rounded-xl hover:bg-blue-200"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => shareBlog('twitter')}
                    className="p-3 transition-colors bg-sky-100 text-sky-600 rounded-xl hover:bg-sky-200"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => shareBlog('linkedin')}
                    className="p-3 text-blue-700 transition-colors bg-blue-200 rounded-xl hover:bg-blue-300"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="p-3 text-gray-700 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200"
                    title="Copy link"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    className="p-3 transition-colors bg-emerald-100 text-emerald-600 rounded-xl hover:bg-emerald-200"
                    title="Save for later"
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
                  <Link 
                    to="/blogs" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link
                      key={relatedBlog.id}
                      to={`/blog/${relatedBlog.slug}`}
                      state={{ blog: relatedBlog }}
                      className="block overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1 group"
                    >
                      <div className="relative h-40 overflow-hidden rounded-t-2xl">
                        <img
                          src={relatedBlog.image_url}
                          alt={relatedBlog.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <div className="p-5">
                        <h3 className="mb-2 font-bold text-gray-900 line-clamp-2 group-hover:text-emerald-700">
                          {relatedBlog.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {relatedBlog.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {relatedBlog.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
           

            {/* Recent Articles */}
            <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Recent Articles</h3>
              </div>
              <div className="space-y-4">
                {recentBlogs.slice(0, 5).map((recentBlog) => (
                  <Link
                    key={recentBlog.id}
                    to={`/blog/${recentBlog.slug}`}
                    state={{ blog: recentBlog }}
                    className="flex items-start gap-3 p-3 transition-colors rounded-xl hover:bg-gray-50 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg">
                      <img
                        src={recentBlog.image_url}
                        alt={recentBlog.title}
                        className="object-cover w-full h-full transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 line-clamp-2 group-hover:text-emerald-700">
                        {recentBlog.title}
                      </h4>
                      
                    </div>
                  </Link>
                ))}
              </div>
            </div>

        
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;