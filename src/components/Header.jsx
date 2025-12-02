import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 2) {
      // Simulate API call for suggestions
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Simulate fetching suggestions
  const fetchSuggestions = async (query) => {
    // Replace this with actual API call
    try {
      // Mock data for demonstration
      const mockSuggestions = [
        'STEM Robotics Kit',
        'Educational Toys',
        'Building Blocks',
        'Remote Control Cars',
        'Science Experiments',
        'Coding Robots',
        'LEGO Sets',
        'Puzzle Games'
      ].filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
      );
      
      setSuggestions(mockSuggestions);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    window.location.href = `/search?q=${encodeURIComponent(suggestion)}`;
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
   <header className="bg-gradient-to-r from-white via-[#50A8FF] via-[#007BFF] to-[#66CB67]">

      <nav className="container px-4 py-3 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <div className="p-2 transition-transform duration-200 transform group-hover:scale-105">
                <img 
                  src="/public/images/logo.webp" 
                  alt="Toyvista Logo" 
                  className="w-auto h-12 filter brightness-110 contrast-110"
                  onError={(e) => {
                    e.target.src = '/images/logo-fallback.png';
                  }}
                />
              </div>
            
            </a>
          </div>

          <div className="relative flex-1 max-w-2xl mx-4 lg:mx-8" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search for toys, games, and more..."
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 transition-all duration-200 border-0 shadow-lg outline-none rounded-xl focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                  required
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="absolute p-2 text-gray-800 transition-colors duration-200 transform -translate-y-1/2 bg-yellow-400 rounded-lg shadow-md right-3 top-1/2 hover:bg-yellow-500 hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 z-50 mt-2 overflow-y-auto bg-white border border-gray-200 shadow-2xl top-full rounded-xl max-h-60">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 transition-colors duration-150 border-b border-gray-100 cursor-pointer hover:bg-blue-50 last:border-b-0 group"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="flex items-center">
                      <div className="p-1 mr-3 transition-colors bg-blue-100 rounded-lg group-hover:bg-blue-200">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700 transition-colors group-hover:text-blue-600">
                        {suggestion}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
<div className="items-center hidden space-x-6 lg:flex">
  <Link
    to="/why-toyvista"
    className="px-3 py-2 font-semibold text-white transition-colors duration-200 rounded-lg hover:text-yellow-300 hover:bg-white hover:bg-opacity-10"
  >
    Why Toy Vista?
  </Link>

  <Link
    to="/blogs"
    className="px-3 py-2 font-semibold text-white transition-colors duration-200 rounded-lg hover:text-yellow-300 hover:bg-white hover:bg-opacity-10"
  >
    Blogs
  </Link>

  <Link
    to="/disclaimer"
    className="px-3 py-2 font-semibold text-white transition-colors duration-200 rounded-lg hover:text-yellow-300 hover:bg-white hover:bg-opacity-10"
  >
    Disclaimer
  </Link>

  <div className="w-px h-6 mx-2 bg-white bg-opacity-30"></div>

  <Link
    to="/categories"
    className="px-4 py-2 font-bold text-gray-800 transition-colors duration-200 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg"
  >
    Shop Now
  </Link>
</div>


          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-white transition-colors duration-200 bg-white shadow-md rounded-xl bg-opacity-10 hover:bg-opacity-20"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col justify-center w-6 h-6 space-y-1">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
      {/* Mobile Navigation Menu */}
<div
  className={`lg:hidden transition-all duration-300 ease-in-out ${
    isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
  }`}
>
  <div className="p-6 space-y-3 bg-white shadow-2xl rounded-2xl">
    <Link
      to="/why-toyvista"
      className="block px-4 py-3 font-semibold text-gray-700 transition-colors duration-200 border-l-4 border-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
      onClick={() => setIsMenuOpen(false)}
    >
      Why Toy Vista?
    </Link>

    <Link
      to="/blogs"
      className="block px-4 py-3 font-semibold text-gray-700 transition-colors duration-200 border-l-4 border-green-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
      onClick={() => setIsMenuOpen(false)}
    >
      Blogs
    </Link>

    <Link
      to="/disclaimer"
      className="block px-4 py-3 font-semibold text-gray-700 transition-colors duration-200 border-l-4 border-purple-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl"
      onClick={() => setIsMenuOpen(false)}
    >
      Disclaimer
    </Link>

    <div className="pt-2">
      <Link
        to="/categories"
        className="block w-full px-4 py-3 font-bold text-center text-gray-800 transition-all duration-200 transform shadow-md bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-xl hover:shadow-lg hover:scale-105"
        onClick={() => setIsMenuOpen(false)}
      >
        Shop All Categories
      </Link>
    </div>
  </div>
</div>

      </nav>
    </header>
  );
};

export default Header;