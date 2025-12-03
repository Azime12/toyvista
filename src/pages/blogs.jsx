import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Calendar, Clock, ChevronLeft, ChevronRight, Search, TrendingUp, Loader2, Sparkles, BookOpen } from 'lucide-react';
import { BASE_URL } from '../constants/apiTags';

const CACHE_KEY = 'toybista1_blogs';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('newest');
  const blogsPerPage = 9;

  const fetchBlogs = async (query = '') => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/blog-search.php`, { params: { q: query } });
      if (Array.isArray(data)) {
        const formatted = data.map(blog => ({
          ...blog,
          excerpt: blog.snippet || (blog.content ? blog.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...' : 'Read this interesting blog post...'),
          date: blog.created_at
            ? new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
            : 'Recent',
          readTime: Math.max(1, Math.ceil((blog.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200)) + ' min read'
        }));
        setBlogs(formatted);

        // Update cache only when API succeeds and it's full list
        if (!query) localStorage.setItem(CACHE_KEY, JSON.stringify(formatted));
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      // fallback: get from localStorage if API fails
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        setBlogs(JSON.parse(cached));
      } else {
        setBlogs([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1);
    fetchBlogs(query); // Always fetch fresh for search
  };

  const sortedBlogs = blogs.sort((a, b) =>
    sortBy === 'newest' ? new Date(b.created_at) - new Date(a.created_at) : new Date(a.created_at) - new Date(b.created_at)
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  const handlePageChange = page => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
      <p className="mt-4 text-gray-700">Loading articles...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero and Search/Sort code remains unchanged */}
      {/* Blogs Grid */}
      <div className="container px-4 py-12 mx-auto">
        {currentBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentBlogs.map(blog => (
                <article key={blog.id} className="overflow-hidden transition bg-white shadow rounded-2xl hover:shadow-xl">
                  <img src={blog.image_url} alt={blog.title.replace(/<[^>]*>/g, '')} className="object-cover w-full h-48" />
                  <div className="p-6">
                    <div className="flex gap-3 mb-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                      <Link to={`/blog/${blog.slug}`} state={{ blog }} dangerouslySetInnerHTML={{ __html: blog.title }} />
                    </h3>
                    <p className="mt-2 text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
                    <Link
                      to={`/blog/${blog.slug}`}
                      state={{ blog }}
                      className="inline-flex items-center gap-1 px-3 py-2 mt-4 text-sm font-semibold text-white rounded-lg bg-gradient-to-tr from-[#007BFF] to-[#66CB67] hover:bg-emerald-700"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            {/* Pagination remains unchanged */}
          </>
        ) : (
          <div className="py-20 text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="mb-4 text-gray-600">No articles found.</p>
            <button
              onClick={() => { setSearchQuery(''); fetchBlogs(''); setCurrentPage(1); }}
              className="px-4 py-2 text-white rounded bg-gradient-to-tr from-[#0567a8] from-[#0e9615] hover:bg-emerald-700"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
