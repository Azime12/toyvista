import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../constants/apiTags'
const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fallback categories in case API fails
  const fallbackCategories = [
    { id: 1, name: "Educational Toys", slug: "educational-toys" },
    { id: 2, name: "Educational Tablets", slug: "educational-tablets" },
    { id: 3, name: "LEGO Toys", slug: "lego-toys" },
    { id: 4, name: "Coding Robots", slug: "coding-robots" },
    { id: 5, name: "Superhero Costumes", slug: "superhero-costumes" },
    { id: 6, name: "Hoverboards", slug: "hoverboards" },
    { id: 7, name: "Skateboards", slug: "skateboards" },
    { id: 8, name: "Electric Skateboards", slug: "electric-skateboards" },
    { id: 9, name: "Roller Skates", slug: "roller-skates" },
    { id: 10, name: "Skate Shoes", slug: "skate-shoes" },
    { id: 11, name: "Scooters", slug: "scooters" },
    { id: 12, name: "Electric Scooters", slug: "electric-scooters" },
    { id: 13, name: "Bicycles", slug: "bicycles" },
    { id: 14, name: "Remote Control Toys", slug: "remote-control-toys" },
    { id: 15, name: "Drones", slug: "drones" },
    { id: 16, name: "Drones with Camera", slug: "drones-with-camera" },
    { id: 17, name: "Gaming Laptops", slug: "gaming-laptops" },
    { id: 18, name: "Gaming Desktops", slug: "gaming-desktops" },
    { id: 19, name: "Gaming Consoles", slug: "gaming-consoles" },
    { id: 20, name: "Gaming Tablets", slug: "gaming-tablets" }
  ];

  // Available items per page options
  const itemsPerPageOptions = [5, 10, 15, 20, 25, 50];

  // Fetch categories from API with pagination
  const fetchCategories = async (page = currentPage, limit = itemsPerPage) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log(`Fetching categories: Page ${page}, Limit ${limit}`);
      const response = await axios.get(`${BASE_URL}/categories.php`, {
        params: { 
          page: page,
          limit: limit
        }
      });
      
      console.log('API Response:', response.data);
      
      // Handle different response formats
      if (response.data && Array.isArray(response.data)) {
        // If API returns just array
        setCategories(response.data);
        // Since we don't know total, assume there might be more
        setTotalPages(Math.max(1, Math.ceil((response.data.length * 2) / limit)));
        setTotalItems(response.data.length);
      } else if (response.data && response.data.categories) {
        // If API returns paginated response
        setCategories(response.data.categories || []);
        setTotalPages(response.data.totalPages || 1);
        setTotalItems(response.data.totalItems || response.data.categories?.length || 0);
      } else {
        // If API returns empty or invalid data, use fallback
        console.log('API returned empty data. Using fallback categories.');
        setCategories(fallbackCategories.slice(0, limit));
        setTotalPages(Math.ceil(fallbackCategories.length / limit));
        setTotalItems(fallbackCategories.length);
        setError('API returned empty data. Using default categories.');
      }
      
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Failed to load categories from API. Using default categories.');
      // Use fallback categories on error
      setCategories(fallbackCategories.slice(0, itemsPerPage));
      setTotalPages(Math.ceil(fallbackCategories.length / itemsPerPage));
      setTotalItems(fallbackCategories.length);
    } finally {
      setLoading(false);
    }
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchCategories(page, itemsPerPage);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    const newLimit = parseInt(e.target.value);
    setItemsPerPage(newLimit);
    setCurrentPage(1); // Reset to first page when changing items per page
    fetchCategories(1, newLimit);
  };

  // Generate page numbers for pagination
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show limited pages with ellipsis
      if (currentPage <= 3) {
        // Near the beginning
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  useEffect(() => {
    fetchCategories(currentPage, itemsPerPage);
  }, []);

  // Generate slug if not provided
  const generateSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Get slug from category
  const getSlug = (category) => {
    return category.slug || generateSlug(category.name);
  };

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-white via-blue-50/30 to-white">
        {/* Section Header */}
        <div className="py-4 text-center bg-gray-900">
          <h2 className="text-xl font-bold tracking-widest text-white md:text-2xl" style={{ letterSpacing: '0.25rem' }}>
            Choose Toys from the <span className="text-cyan-400">Categories</span> below
          </h2>
        </div>

        <div className="container px-4 py-12 mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 mb-4 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            <p className="text-gray-600">Loading categories...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Section Header */}
      <div className="py-4 text-center bg-gray-900">
        <h2 className="text-xl font-bold tracking-widest text-white md:text-2xl" style={{ letterSpacing: '0.25rem' }}>
          Choose Toys from the <span className="text-cyan-400">Categories</span> below
        </h2>
      </div>

      <div className="container px-4 py-8 mx-auto">
        {/* Error message if API failed */}
        {error && (
          <div className="p-4 mb-6 text-yellow-700 bg-yellow-100 border border-yellow-400 rounded-lg">
            <p>
              {error}
            </p>
          </div>
        )}

        {/* Categories View */}
        <div>
          {/* Pagination Controls - Top */}
          <div className="flex flex-col items-center justify-between mb-6 space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
              <span className="font-semibold">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of{' '}
              <span className="font-semibold">{totalItems}</span> categories
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Items per page:</span>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {itemsPerPageOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {categories.map((category, index) => {
              const slug = getSlug(category);
              const isPopular = index < 8; // First 8 categories as popular
              
              return (
                <Link
                  key={category.id || category.name}
                  to={`/categories/${slug}`}
                    state={{ category }}   // <-- passing data here

                  className={`
                    group relative p-4 text-center transition-all duration-300
                    bg-white border border-gray-200 rounded-lg shadow-sm
                    hover:shadow-lg hover:border-blue-300 hover:bg-blue-50
                    ${isPopular ? 'border-blue-100 bg-blue-50/50' : ''}
                    w-full h-full
                  `}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-2 -left-2">
                      <span className="px-2 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-cyan-500">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Category Name */}
                  <div className="flex items-center justify-center h-full">
                    <span className="text-sm font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-700 md:text-base">
                      {category.name}
                    </span>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className="absolute transition-opacity duration-200 transform -translate-y-1/2 opacity-0 right-3 top-1/2 group-hover:opacity-100">
                    <span className="text-blue-500">&gt;</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination Controls - Bottom */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center justify-between mt-8 space-y-4 md:flex-row md:space-y-0">
              <div className="text-sm text-gray-600">
                Page <span className="font-semibold">{currentPage}</span> of{' '}
                <span className="font-semibold">{totalPages}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  &lt;
                </button>
                
                {/* Page Numbers */}
                {generatePageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' && handlePageChange(page)}
                    disabled={page === '...'}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      currentPage === page
                        ? 'bg-blue-600 text-white font-semibold'
                        : page === '...'
                        ? 'text-gray-400 cursor-default'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  &gt;
                </button>
              </div>
            </div>
          )}

          {/* API Status */}
          <div className="p-3 mt-6 text-center">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold text-blue-600">{categories.length}</span> categories per page
              {error && (
                <span className="ml-2 text-yellow-600">(Using default categories)</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;