const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
          {/* OUR STORES */}
          <div>
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2">
              OUR STORES
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Ha Noi",
                "New York",
                "London SF",
                "Los Angeles",
                "Chicago",
                "Las Vegas",
              ].map((store, index) => (
                <li key={index} className="hover:text-gray-400 cursor-pointer">
                  {store}
                </li>
              ))}
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2">
              INFORMATION
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "About Store",
                "New Collection",
                "Woman Dress",
                "Contact Us",
                "Latest News",
                "Our Sitemap",
              ].map((info, index) => (
                <li key={index} className="hover:text-gray-400 cursor-pointer">
                  {info}
                </li>
              ))}
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2">
              USEFUL LINKS
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Privacy Policy",
                "Returns",
                "Terms & Conditions",
                "Contact Us",
                "Latest News",
                "Our Sitemap",
              ].map((link, index) => (
                <li key={index} className="hover:text-gray-400 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* FOOTER MENU */}
          <div>
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2">
              FOOTER MENU
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Instagram profile",
                "New Collection",
                "Woman Dress",
                "Contact Us",
                "Latest News",
                "Purchase Theme",
              ].map((menu, index) => (
                <li key={index} className="hover:text-gray-400 cursor-pointer">
                  {menu}
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT THE STORE */}
          <div>
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2">
              ABOUT THE STORE
            </h3>
            <p className="mt-4 text-gray-400">
              STORE - worldwide fashion store since 1978. We sell over 1000+
              branded products on our website.
            </p>
            <p className="mt-4 flex items-center">
              📍 451 Wall Street, USA, New York
            </p>
            <p className="mt-2 flex items-center">📞 Phone: (064) 332-1233</p>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-white hover:text-gray-400 text-xl">
            🌐
          </a>
          <a href="#" className="text-white hover:text-gray-400 text-xl">
            📧
          </a>
          <a href="#" className="text-white hover:text-gray-400 text-xl">
            📷
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          © 2019 Created by <span className="text-blue-400">The4 Studio</span>.
          Premium e-commerce solutions.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
