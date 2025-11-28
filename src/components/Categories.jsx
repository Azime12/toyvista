const Categories = () => {
  const categories = [
    {
      name: "Educational Toys",
      slug: "educational-toys",
      icon: "📚",
      description: "Learning through play",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Educational Tablets",
      slug: "educational-tablets",
      icon: "📱",
      description: "Tech for young minds",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "LEGO Toys",
      slug: "lego-toys",
      icon: "🧱",
      description: "Build & create",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Coding Robots",
      slug: "coding-robots",
      icon: "🤖",
      description: "Learn to code",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Superhero Costumes",
      slug: "superhero-costumes",
      icon: "🦸",
      description: "Become a hero",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Hoverboards",
      slug: "hoverboards",
      icon: "🛹",
      description: "Future mobility",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Skateboards",
      slug: "skateboards",
      icon: "🛼",
      description: "Street style",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Electric Skateboards",
      slug: "electric-skateboards",
      icon: "⚡",
      description: "Power ride",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Roller Skates",
      slug: "roller-skates",
      icon: "⛸️",
      description: "Smooth moves",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Skate Shoes",
      slug: "skate-shoes",
      icon: "👟",
      description: "Style & comfort",
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Scooters",
      slug: "scooters",
      icon: "🛴",
      description: "Urban travel",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Electric Scooters",
      slug: "electric-scooters",
      icon: "🔋",
      description: "Eco-friendly ride",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Bicycles",
      slug: "bicycles",
      icon: "🚲",
      description: "Classic cycling",
      color: "from-lime-500 to-lime-600"
    },
    {
      name: "Remote Control Toys",
      slug: "remote-control-toys",
      icon: "🎮",
      description: "Wireless fun",
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "Drones",
      slug: "drones",
      icon: "🚁",
      description: "Aerial adventure",
      color: "from-violet-500 to-violet-600"
    },
    {
      name: "Drones with Camera",
      slug: "drones-with-camera",
      icon: "📸",
      description: "Capture from above",
      color: "from-fuchsia-500 to-fuchsia-600"
    },
    {
      name: "Gaming Laptops",
      slug: "gaming-laptops",
      icon: "💻",
      description: "Portable power",
      color: "from-rose-500 to-rose-600"
    },
    {
      name: "Gaming Desktops",
      slug: "gaming-desktops",
      icon: "🖥️",
      description: "Ultimate performance",
      color: "from-sky-500 to-sky-600"
    },
    {
      name: "Gaming Consoles",
      slug: "gaming-consoles",
      icon: "🎯",
      description: "Console gaming",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Gaming Tablets",
      slug: "gaming-tablets",
      icon: "🎮",
      description: "Mobile gaming",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Virtual Reality (VR)",
      slug: "virtual-reality-vr",
      icon: "🥽",
      description: "Immersive experience",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Rubic's Cubes",
      slug: "rubics-cubes",
      icon: "🎲",
      description: "Brain teasers",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Dolls & Dollhouses",
      slug: "dolls-dollhouses",
      icon: "🏠",
      description: "Imaginative play",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Ride-On Vehicles",
      slug: "ride-on-vehicles",
      icon: "🚗",
      description: "Kids driving",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Construction & Building Toys",
      slug: "construction-building-toys",
      icon: "🏗️",
      description: "Build creations",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Action Figures",
      slug: "action-figures",
      icon: "🦸",
      description: "Hero collection",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Water Guns",
      slug: "water-guns",
      icon: "🔫",
      description: "Summer fun",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Electric Water Guns",
      slug: "electric-water-guns",
      icon: "💧",
      description: "Power splash",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Stuffed Animals & Plush Toys",
      slug: "stuffed-animals-plush-toys",
      icon: "🧸",
      description: "Cuddly friends",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Board Games & Puzzles",
      slug: "board-games-puzzles",
      icon: "🎲",
      description: "Family time",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Pretend Play & Costumes",
      slug: "pretend-play-costumes",
      icon: "🎭",
      description: "Role playing",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Military Toys",
      slug: "military-toys",
      icon: "🎖️",
      description: "Tactical play",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Toy Guns",
      slug: "toy-guns",
      icon: "🔫",
      description: "Action play",
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "Fidget Spinners",
      slug: "fidget-spinners",
      icon: "🌀",
      description: "Focus tools",
      color: "from-violet-500 to-violet-600"
    },
    {
      name: "Pet Robots",
      slug: "pet-robots",
      icon: "🐕",
      description: "Robotic pets",
      color: "from-fuchsia-500 to-fuchsia-600"
    },
    {
      name: "Toys for Pets",
      slug: "toys-for-pets",
      icon: "🐾",
      description: "Pet entertainment",
      color: "from-rose-500 to-rose-600"
    },
    {
      name: "Eco-Friendly Toys",
      slug: "eco-friendly-toys",
      icon: "🌱",
      description: "Sustainable play",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Barbies",
      slug: "barbies",
      icon: "👸",
      description: "Fashion dolls",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Play Dough",
      slug: "play-dough",
      icon: "🎨",
      description: "Creative molding",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Balls",
      slug: "balls",
      icon: "⚽",
      description: "Sports & games",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Kids Sport Equipment & Kits",
      slug: "kids-sport-equipment-kits",
      icon: "🏐",
      description: "Active play",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Sport Toys",
      slug: "sport-toys",
      icon: "🎾",
      description: "Athletic fun",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Toys from the <span className="text-blue-600">Categories</span> below
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-4 h-1 bg-blue-400 rounded-full mx-2"></div>
            <div className="w-2 h-1 bg-blue-300 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of toy categories designed for every age, interest, and play style. 
            Find the perfect toys for learning, creativity, and endless fun!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <a
              key={category.slug}
              href={`/${category.slug}`}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Category Content */}
              <div className="p-6 text-center">
                {/* Icon */}
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                {/* Category Name */}
                <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {category.name}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                  {category.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-4 h-4 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="text-center mt-12">
          <a
            href="/categories"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Browse All Categories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Quality Assured</h4>
            <p className="text-sm text-gray-600">All toys meet safety standards and quality requirements</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
            <p className="text-sm text-gray-600">Quick shipping with reliable delivery partners</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Customer Love</h4>
            <p className="text-sm text-gray-600">Trusted by thousands of happy parents and kids</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;