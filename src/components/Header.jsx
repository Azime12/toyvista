import { useState, useRef, useEffect } from 'react';

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
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <div className="bg-white rounded-xl p-2 shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                <img 
                  src="https://toyvista.com/images/logo.webp" 
                  alt="Toyvista Logo" 
                  className="h-12 w-auto filter brightness-110 contrast-110"
                  onError={(e) => {
                    e.target.src = '/images/logo-fallback.png';
                  }}
                />
              </div>
              <span className="ml-3 text-white font-bold text-xl hidden sm:block">
                ToyVista
              </span>
            </a>
          </div>

          {/* Search Box */}
          <div className="flex-1 max-w-2xl mx-4 lg:mx-8 relative" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search for toys, games, and more..."
                  className="w-full px-4 py-3 border-0 rounded-xl shadow-lg focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 outline-none transition-all duration-200 placeholder-gray-500 text-gray-800"
                  required
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 p-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Suggestions Box */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-2xl mt-2 max-h-60 overflow-y-auto z-50">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150 group"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                        {suggestion}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="/why-toyvista" 
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              Why Toy Vista?
            </a>
            <a 
              href="/blogs" 
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              Blogs
            </a>
            <a 
              href="/disclaimer" 
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              Disclaimer
            </a>
            <div className="w-px h-6 bg-white bg-opacity-30 mx-2"></div>
            <a 
              href="/categories" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-4 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-xl bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-colors duration-200 shadow-md"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-3">
            <a 
              href="/why-toyvista" 
              className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-semibold border-l-4 border-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Toy Vista?
            </a>
            <a 
              href="/blogs" 
              className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-semibold border-l-4 border-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </a>
            <a 
              href="/disclaimer" 
              className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-semibold border-l-4 border-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Disclaimer
            </a>
            <div className="pt-2">
              <a 
                href="/categories" 
                className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-800 font-bold py-3 px-4 rounded-xl text-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop All Categories
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;