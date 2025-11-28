const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-bold mb-2">
                <span className="text-white">To</span>
                <span className="text-blue-400">Vista</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your ultimate destination for educational toys, games, and fun learning experiences for children of all ages.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { 
                  name: 'Facebook', 
                  url: 'https://facebook.com/toyvistacom', 
                  color: 'hover:bg-blue-600',
                  icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                },
                { 
                  name: 'Instagram', 
                  url: 'https://www.instagram.com/toyvistacom/', 
                  color: 'hover:bg-pink-600',
                  icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                },
                { 
                  name: 'Pinterest', 
                  url: 'https://www.pinterest.com/toyvistacom/', 
                  color: 'hover:bg-red-600',
                  icon: <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                },
                { 
                  name: 'TikTok', 
                  url: 'https://www.tiktok.com/@toyvistacom', 
                  color: 'hover:bg-black',
                  icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`bg-gray-800 ${social.color} w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Contact Us', 'Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2">
              {[
                'FAQ',
                'Privacy Policy', 
                'Terms of Service',
                'Disclaimer',
                'Affiliate Program',
                'Sitemap'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <a href="mailto:contact@toyvista.com" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  contact@toyvista.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">+1 (555) 123-TOYS</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <h4 className="font-medium mb-2 text-white text-sm">Newsletter</h4>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded font-medium transition-colors duration-200 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sister Companies */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <h3 className="text-sm font-semibold mb-3 text-gray-300 text-center">Sister Companies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Welness World', url: 'https://welnessworld.com' },
              { name: 'Tech Heaven Stores', url: 'https://techheavenstores.com' },
              { name: 'Shoespire', url: 'https://shoespire.com' }
            ].map((company) => (
              <a
                key={company.name}
                href={company.url}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {company.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom - Compact */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-xs text-center md:text-left">
              © 2024 ToyVista. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span>Secure payments:</span>
              <div className="flex space-x-1">
                {['VISA', 'MC', 'PP', 'AE'].map((method) => (
                  <div key={method} className="bg-white px-1 py-0.5 rounded text-gray-800 font-bold text-xs">
                    {method}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-gray-400 text-xs text-center md:text-right">
              Developed by{' '}
              <a
                href="https://marketingethiopia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                MarketingEthiopia.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;