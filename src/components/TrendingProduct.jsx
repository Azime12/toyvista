import { useState } from 'react';

const TrendingProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const trendingProducts = [
    {
      id: 1,
      name: "Gesture Sensing RC Stunt Car - 2.4GHz 4WD Drift Hand Controlled RC Cars with 360° Rotation & Lights Music, All Terrains Twist Off Road Transform Remote Control Car Toys for Kids Age 6 7 8 9 10 11 12",
      image: "https://m.media-amazon.com/images/I/81jyG8OgwOL._AC_SX679_.jpg",
      price: "$49.99",
      affiliateLink: "https://amzn.to/43h9jkW",
      category: "RC Cars",
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      name: "Thames & Kosmos Mega Cyborg Hand STEM Experiment Kit | Build Your Own GIANT Hydraulic Amazing Gripping Capabilities Adjustable for Different Sizes Learn Pneumatic Systems",
      image: "https://m.media-amazon.com/images/I/51lUpLLC+eL._SL500_.jpg",
      price: "$39.99",
      affiliateLink: "https://www.amazon.com/dp/B085LRW4VR?tag=toyvista101-20",
      category: "STEM Toys",
      rating: 4.6,
      reviews: 189
    },
    {
      id: 3,
      name: "Bottleboom STEM 13-in-1 Education Solar Power Robots Toys for Boys Age 8-12, Educational Toy Science Kits for Kids Experiment Robotics Set Birthday Gifts for 8 9 10 11 12 Years Old-Green",
      image: "https://m.media-amazon.com/images/I/51AjlJVtkFL._SL500_.jpg",
      price: "$32.99",
      affiliateLink: "https://www.amazon.com/dp/B0CRQBLM2Z?tag=toyvista101-20",
      category: "Solar Toys",
      rating: 4.5,
      reviews: 156
    },
    {
      id: 4,
      name: "STEM Robotics Kits for Kids Age 8-12 8-10, Science Kits for Kids 5-7, STEM Toys for Boys Age 6 7 8 9 10 12 13 14 Girls Boys Birthday Gifts, Robot Building Crafts 6-8 Engineering Motor Set",
      image: "https://m.media-amazon.com/images/I/513Za0O5QuL._SL500_.jpg",
      price: "$36.99",
      affiliateLink: "https://www.amazon.com/dp/B0CSMQ5XDP?tag=toyvista101-20",
      category: "STEM Toys",
      rating: 4.4,
      reviews: 278
    },
    {
      id: 5,
      name: "LECPOP 5 in 1 Building Toys STEM Robotics Kit, 430 PCS Blocks RC Robot Erector Sets, APP & Remote Control Excavator Science Kits for Kids Age 6 7 8 9 10 11 12-14, DIY Educational Gift for Boys & Girls",
      image: "https://m.media-amazon.com/images/I/61VpsJmoVML._SL500_.jpg",
      price: "$54.99",
      affiliateLink: "https://www.amazon.com/dp/B0B849LZR9?tag=toyvista101-20",
      category: "Building Sets",
      rating: 4.7,
      reviews: 312
    },
    {
      id: 6,
      name: "Giggleway Electric Motor Robotic Science Kits, DIY STEM Toys for kids, Building Science Experiment Kits for Boys and Girls-Doodling, Balance Car, Reptile Robot (3 kits)",
      image: "https://m.media-amazon.com/images/I/51eQ0AeDXJL._SL500_.jpg",
      price: "$28.99",
      affiliateLink: "https://www.amazon.com/dp/B07N4GWDZM?tag=toyvista101-20",
      category: "Science Kits",
      rating: 4.3,
      reviews: 198
    },
    {
      id: 7,
      name: "STEM Robotics Science Kits for Kids Age 8-12 8-10, STEM Toys for Boys Girls 6-8, Build Robot Building Kit Science Experiments Engineering Projects STEAM Activities Gifts 6 7 8 Year Old Boy Toys Crafts",
      image: "https://m.media-amazon.com/images/I/51i44SSeNdL._SL500_.jpg",
      price: "$29.99",
      affiliateLink: "https://www.amazon.com/dp/B0BGLNCD2X?tag=toyvista101-20",
      category: "STEM Toys",
      rating: 4.5,
      reviews: 167
    },
    {
      id: 8,
      name: "FanttikRide 12V 7Ah Licensed Mercedes-Benz G63 Ride on Car for Kids Ages 3-6, Electric Car Ride on Toys w/Parent Remote, Wireless Music, Suspension System - AMG G63 Large, Black",
      image: "https://m.media-amazon.com/images/I/71r-f24T86L._AC_SX679_.jpg",
      price: "$299.99",
      affiliateLink: "https://amzn.to/4mDHeNF",
      category: "Ride-On Cars",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 9,
      name: "FanttikRide T10 Electric Scooter for Kids 4.3-5.6 ft, 200 W Motor, LED Battery Level, 7/10/12 MPH, Height Adjustable and 45W Fast Charging, Foldable Electric Scooter for Kids, Up to 40 mins",
      image: "https://m.media-amazon.com/images/I/61a0sRCNrvL._AC_SX679_.jpg",
      price: "$149.99",
      affiliateLink: "https://amzn.to/3YLqvh2",
      category: "Electric Scooters",
      rating: 4.7,
      reviews: 123
    },
    {
      id: 10,
      name: "STEM Kits for Kids Crafts 6-8 8-12, Boys Gifts Toys for 6 7 Year Old Boy Birthday Gift Ideas, STEM Toys Craft Kits 6+ 7+ yr, Robotics Science Activities Robot Building Age 8-10 8 9 10 11 12 Years",
      image: "https://m.media-amazon.com/images/I/51ZNJDJ6KpL._SL500_.jpg",
      price: "$34.99",
      affiliateLink: "https://www.amazon.com/dp/B0C3GWRMZY?tag=toyvista101-20",
      category: "STEM Toys",
      rating: 4.4,
      reviews: 145
    },
    {
      id: 11,
      name: "STEM Robotics Science Kits, Crafts for Boys 6-8 Girls 8-12, Robot Building Kit for Kids 8-10, Electronic Science Experiments Activities, Engineering Toys 7+ 6 7 8 9 10 11 12 + Year Old Gifts",
      image: "https://m.media-amazon.com/images/I/51Q5hgeQSXL._SL500_.jpg",
      price: "$34.99",
      affiliateLink: "https://www.amazon.com/dp/B0CDWWMVS6?tag=toyvista101-20",
      category: "STEM Toys",
      rating: 4.5,
      reviews: 178
    },
    {
      id: 12,
      name: "STEM Science Kits for Kids 5-7 8-12, Robotics Robot Building Car Kit STEM Toys for Boys Robots Craft 5-8 6-8, Science Activities Experiment Engineering Project Electronics 5 6 7 8 Year Old Boy Gifts",
      image: "https://m.media-amazon.com/images/I/51B-pJ9D77L._SL500_.jpg",
      price: "$39.99",
      affiliateLink: "https://www.amazon.com/dp/B0C61NRTS5?tag=toyvista101-20",
      category: "STEM Toys",
      rating: 4.6,
      reviews: 201
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white via-blue-50/50 to-white">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl font-[Fredoka]">
            Trending <span className="text-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text">Products</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover the most popular toys loved by kids and recommended by parents
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-2xl group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div className="relative flex-grow-0 overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
                <a 
                  href={product.affiliateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-48 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-blue-600 to-green-500">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow p-5">
                {/* Product Name */}
                <a 
                  href={product.affiliateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-grow group"
                >
                  <h3 className="mb-3 text-sm font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600 font-[Fredoka] leading-tight">
                    {product.name}
                  </h3>
                </a>

                {/* Price and Rating */}
                {/* <div className="flex items-center justify-between mb-4"> */}
                  {/* <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-blue-600">{product.price}</span>
                    {product.price.includes('$') && parseFloat(product.price.replace('$', '')) < 50 && (
                      <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                        Great Value
                      </span>
                    )}
                  </div> */}
                  {/* <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div> */}
                {/* </div> */}

                {/* Quick Features */}
                {/* <div className="mb-4">
                  <div className="flex flex-wrap gap-2"> */}
                    {/* {product.category.includes('STEM') && (
                      <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">STEM Learning</span>
                    )} */}
                    {/* <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded">Gift Idea</span> */}
                    {/* <span className="px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded">Free Shipping</span> */}
                  {/* </div>
                </div> */}

                {/* CTA Buttons */}
                <div className="mt-auto">
                  <div className="flex gap-2">
                    {/* <a
                      href={product.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 text-sm font-bold text-center text-white transition-all duration-200 rounded-lg shadow-sm bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 hover:from-blue-700 hover:via-blue-600 hover:to-green-600 hover:shadow-md"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Buy on Amazon
                      </div>
                    </a> */}
                    {/* <button className="p-3 text-gray-600 transition-colors duration-200 bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button> */}
                  </div>
                  
                  {/* Additional CTA */}
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2 mt-2 text-xs font-semibold text-center text-blue-600 transition-all duration-200 border border-blue-200 rounded-lg hover:bg-blue-50 hover:border-blue-300"
                  >
                    View Details & Reviews
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="mt-12 text-center">
          <a
            href="/all-products"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 hover:shadow-xl"
          >
            <span>View All Trending Products</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default TrendingProducts;