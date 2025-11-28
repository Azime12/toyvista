const LatestBlogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tamagotchi Paradise Jade Forest — Interactive Virtual Pet Adventure Game",
      slug: "tamagotchi-paradise-jade-forest-interactive-virtual-pet",
      image: "https://images-na.ssl-images-amazon.com/images/I/81Yf0+y9fRL._AC_UL900_SR900,600_.jpg",
      excerpt: "Tamagotchi Paradise – Jade Forest: The Ultimate Virtual Pet Adventure. Dive into a new world with Tamagotchi Paradise – Jade Forest, where you can raise, nurture, and explore with your virtual pet in an immersive jungle environment...",
      readTime: "5 min read",
      date: "Nov 28, 2024",
      category: "Virtual Pets",
      author: "ToyVista Team"
    },
    {
      id: 2,
      title: "Best HP Gaming PCs in 2025: Power, Performance, and Value for Every Gamer",
      slug: "best-hp-gaming-pcs-in-2025-power-performance-and-value-for-every-gamer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6CAUKKtIX-DnQ_GnoPfVM-z0rLdhyU6fEw&s",
      excerpt: "If you're searching for a powerful gaming desktop that delivers great performance, reliable cooling, and stylish design, an HP Gaming PC could be the perfect fit. Known for its high-quality hardware and innovative features...",
      readTime: "8 min read",
      date: "Nov 27, 2024",
      category: "Gaming",
      author: "Tech Expert"
    },
    {
      id: 3,
      title: "How Things Work: A Fun & Visual Guide to Science for Kids",
      slug: "how-things-work-science-guide-kids",
      image: "https://m.media-amazon.com/images/I/61HZz4YKzyL._AC_UL480_FMwebp_QL65_.jpg",
      excerpt: "How Things Work: A Fun & Visual Guide to Science for Kids. Discover the fascinating world of science through colorful illustrations and easy-to-understand explanations. Perfect for curious young minds...",
      readTime: "6 min read",
      date: "Nov 26, 2024",
      category: "Educational",
      author: "Science Educator"
    },
    {
      id: 4,
      title: "Best Programmable Robots for Kids: Learn Coding Through Play",
      slug: "best-programmable-robots-for-kids-learn-coding-through-play",
      image: "https://info.scholarschoice.ca/hubfs/Introducing%20Robotics%20to%20your%20children.jpg",
      excerpt: "Programmable robots are one of the most exciting educational toys available today. Designed to teach kids the fundamentals of coding, logic, and robotics, these smart toys make learning fun and interactive...",
      readTime: "7 min read",
      date: "Nov 25, 2024",
      category: "STEM",
      author: "Coding Expert"
    },
    {
      id: 5,
      title: "Top 10 Educational Toys for Kids in 2025: Learning Made Fun!",
      slug: "top-10-educational-toys-for-kids-in-2025-learning-made-fun",
      image: "https://abcdeelearning.com/wp-content/uploads/2023/05/714je0REWJL._AC_SL1500_.jpg",
      excerpt: "Parents today want more than just entertainment from toys — they want tools that support learning, spark imagination, and help their children grow and thrive. That's why educational toys are more popular than ever...",
      readTime: "10 min read",
      date: "Nov 24, 2024",
      category: "Educational",
      author: "Toy Expert"
    },
    {
      id: 6,
      title: "STEM Toys That Make Learning Fun at Home",
      slug: "stem-toys-that-make-learning-fun-at-home",
      image: "https://cdn.thewirecutter.com/wp-content/uploads/2016/11/stemtoys-lowres-5308.jpg?auto=webp&quality=75&crop=3:2&width=1024",
      excerpt: "From building robots to simple science kits, STEM toys for kids encourage curiosity and logical thinking. Our best-seller, the XYZ Robotics Kit, helps children aged 6+ learn coding basics through hands-on projects...",
      readTime: "4 min read",
      date: "Nov 23, 2024",
      category: "STEM",
      author: "STEM Educator"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-blue-600">Blog Posts</span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-4 h-1 bg-blue-400 rounded-full mx-2"></div>
            <div className="w-2 h-1 bg-blue-300 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, reviews, and guides about toys, education, and child development. 
            Stay updated with trends and make informed choices for your kids.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group/readmore"
                  >
                    Read More
                    <svg className="w-4 h-4 transform group-hover/readmore:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <a
            href="/blogs"
            className="inline-flex items-center gap-3 bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v12m0 0h4m-4 0h2" />
            </svg>
            View All Blog Posts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

    
      </div>
    </section>
  );
};

export default LatestBlogs;