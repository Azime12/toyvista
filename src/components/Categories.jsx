const Categories = () => {
  const categories = [
    "Educational Toys",
    "Educational Tablets",
    "LEGO Toys",
    "Coding Robots",
    "Superhero Costumes",
    "Hoverboards",
    "Skateboards",
    "Electric Skateboards",
    "Roller Skates",
    "Skate Shoes",
    "Scooters",
    "Electric Scooters",
    "Bicycles",
    "Remote Control Toys",
    "Drones",
    "Drones with Camera",
    "Gaming Laptops",
    "Gaming Desktops",
    "Gaming Consoles",
    "Gaming Tablets",
    "Virtual Reality (VR)",
    "Rubic's Cubes",
    "Dolls & Dollhouses",
    "Ride-On Vehicles",
    "Construction & Building Toys",
    "Action Figures",
    "Water Guns",
    "Electric Water Guns",
    "Stuffed Animals & Plush Toys",
    "Board Games & Puzzles",
    "Pretend Play & Costumes",
    "Military Toys",
    "Toy Guns",
    "Fidget Spinners",
    "Pet Robots",
    "Toys for Pets",
    "Eco-Friendly Toys",
    "Barbies",
    "Play Dough",
    "Balls",
    "Kids Sport Equipment & Kits",
    "Sport Toys"
  ];

  // Generate slugs from category names
  const generateSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <section className="bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Section Header */}
      <div className="py-4 text-center bg-gray-900">
        <h2 className="text-xl font-bold tracking-widest text-white md:text-2xl" style={{ letterSpacing: '0.25rem' }}>
          Choose Toys from the <span className="text-cyan-400">Categories</span> below
        </h2>
        <div className="inline-block ml-2">
          <svg className="w-4 h-4 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className="container px-10 py-4 mx-auto md:px-20 ">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((category, index) => {
            const slug = generateSlug(category);
            const isPopular = index < 8; // First 8 categories as popular
            
            return (
              <a
                key={slug}
                href={`/${slug}`}
                className={`
                  group relative p-4 text-center transition-all duration-300
                  bg-white border border-gray-200 rounded-lg shadow-sm
                  hover:shadow-lg hover:border-blue-300 hover:bg-blue-50
                  ${isPopular ? 'border-blue-100 bg-blue-50/50' : ''}
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
                    {category}
                  </span>
                </div>
                
                {/* Arrow Indicator */}
                <div className="absolute transition-opacity duration-200 transform -translate-y-1/2 opacity-0 right-3 top-1/2 group-hover:opacity-100">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Browse All Button
        <div className="mt-12 text-center">
          <a
            href="/categories"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Browse All Categories
          </a>
        </div> */}

        {/* Category Count Info */}
        {/* <div className="mt-8 text-center">
          <p className="text-gray-600">
            <span className="font-semibold text-blue-600">{categories.length}+</span> toy categories available
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Find the perfect toy for every age and interest
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Categories;