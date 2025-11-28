const TrendingProducts = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "STEM Robotics Science Kits for Kids 5-12, Robot Building Kit with Electronics",
      image: "https://m.media-amazon.com/images/I/51B-pJ9D77L._SL500_.jpg",
      price: "$39.99",
      affiliateLink: "https://www.amazon.com/dp/B0C61NRTS5?tag=toyvista101-20",
      category: "STEM Toys"
    },
    {
      id: 2,
      name: "Solar Power Robots Toys for Boys Age 8-12, 13-in-1 Educational Science Kits",
      image: "https://m.media-amazon.com/images/I/51AjlJVtkFL._SL500_.jpg",
      price: "$32.99",
      affiliateLink: "https://www.amazon.com/dp/B0CRQBLM2Z?tag=toyvista101-20",
      category: "Solar Toys"
    },
    {
      id: 3,
      name: "Electric Scooter for Kids 4.3-5.6 ft, 200W Motor, Foldable with Fast Charging",
      image: "https://m.media-amazon.com/images/I/61a0sRCNrvL._AC_SX679_.jpg",
      price: "$149.99",
      affiliateLink: "https://amzn.to/3YLqvh2",
      category: "Ride-On Toys"
    },
    {
      id: 4,
      name: "STEM Robotics Science Kits, Crafts for Boys & Girls 6-12, Engineering Projects",
      image: "https://m.media-amazon.com/images/I/51Q5hgeQSXL._SL500_.jpg",
      price: "$34.99",
      affiliateLink: "https://www.amazon.com/dp/B0CDWWMVS6?tag=toyvista101-20",
      category: "STEM Toys"
    },
    {
      id: 5,
      name: "STEM Robotics Science Kits for Kids Age 8-12, Build Robot Engineering Projects",
      image: "https://m.media-amazon.com/images/I/51i44SSeNdL._SL500_.jpg",
      price: "$29.99",
      affiliateLink: "https://www.amazon.com/dp/B0BGLNCD2X?tag=toyvista101-20",
      category: "STEM Toys"
    },
    {
      id: 6,
      name: "Hydrobot Arm Kit, Hydraulic STEM Building Toy for Kids 12+",
      image: "https://m.media-amazon.com/images/I/41McOfBfpnL._SL500_.jpg",
      price: "$45.99",
      affiliateLink: "https://www.amazon.com/dp/B07NVFGH2X?tag=toyvista101-20",
      category: "Hydraulic Toys"
    },
    {
      id: 7,
      name: "STEM Robotics Kits for Kids Age 8-12, Science Kits with Motor Engineering Set",
      image: "https://m.media-amazon.com/images/I/513Za0O5QuL._SL500_.jpg",
      price: "$36.99",
      affiliateLink: "https://www.amazon.com/dp/B0CSMQ5XDP?tag=toyvista101-20",
      category: "STEM Toys"
    },
    {
      id: 8,
      name: "Gesture Sensing RC Stunt Car - 2.4GHz 4WD Drift Hand Controlled RC Cars",
      image: "https://m.media-amazon.com/images/I/81jyG8OgwOL._AC_SX679_.jpg",
      price: "$49.99",
      affiliateLink: "https://amzn.to/43h9jkW",
      category: "RC Toys"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending <span className="text-blue-600">Products</span>
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most popular and exciting toys loved by kids and parents alike. 
            Quality guaranteed with fast delivery options.
          </p> */}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium text-sm">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight group-hover:text-blue-600 transition-colors duration-200">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-blue-600">
                    {product.price}
                  </span>
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Buy Now
                  </a>
                </div>

                {/* Rating */}
                <div className="flex items-center mt-3">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(4.8)</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;