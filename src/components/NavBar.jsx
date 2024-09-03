import { useEffect, useState } from 'react';
import ContentWrapper from './ContentWrapper';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 z-50">
      <div
        className={`nav-bar py-5 transition-colors duration-300 ${
          isScrolled
            ? 'bg-white text-black shadow-md'
            : 'bg-transparent text-white'
        }`}
      >
        <ContentWrapper>
          <div className="flex justify-between items-center max-w-screen-lg mx-auto w-full">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="logo.png"
                alt="Daffodil Logo"
                className="h-10 mr-4"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="flex justify-center items-center space-x-8 text-lg text-black">
                <li className="hover:text-yellow-600 cursor-pointer">
                  Services
                </li>
                <li className="hover:text-yellow-600 cursor-pointer">
                  Industries
                </li>
                <li className="hover:text-yellow-600 cursor-pointer">
                  Our Expertise
                </li>
                <li className="hover:text-yellow-600 cursor-pointer">
                  Client Success
                </li>
                <li className="hover:text-yellow-600 cursor-pointer">
                  Discover Daffodil
                </li>
              </ul>
            </nav>

            {/* Button */}
            <div className="flex items-center">
              <button className="bg-yellow-600 font-semibold text-white py-2 px-6 rounded-full shadow hover:bg-yellow-700 flex items-center">
                Get in Touch
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
}

export default NavBar;
