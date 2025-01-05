import React,{ useState } from 'react';
import logo from './images/logo-removebg-preview.png'
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div>
               <nav className="text-white transition-all py-5 lg:py-2">
              <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                  <Link to="/">  <img src={logo} className='w-6 h-6 md:w-16 md:h-16 object-cover object-center ' alt="suplink" /></Link>
                  </div>
                  {/* Hamburger Menu Icon */}
                  <div className="md:hidden">
                    <button
                      onClick={toggleMenu}
                      className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {isOpen ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                  {/* Desktop Menu */}
                  <div className="hidden transition-all md:flex space-x-5 mt-5 ">
                    <Link to="/about" className="hover:underline transition-all text-2xl hover:text-gray-400">
                      About
                    </Link>
                    <Link to="/blog" className="hover:underline transition-all text-2xl hover:text-gray-400">
                      Blog
                    </Link>
                    <Link to="/contact" className="hover:underline transition-all text-2xl hover:text-gray-400">
                      Contact
                    </Link>
                    <a href='https://superlink.me/results' target='blank' className="hover:underline transition-all text-2xl  text-bold text-cyan-500 hover:text-gray-400">
                      SIGN UP
                    </a>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              {isOpen && (
                <div className="md:hidden bg-transparent">
                  <Link to="/about" className="block px-4 py-2 hover:underline transition-all text-xl hover:text-gray-400">
                    About
                  </Link>
                  <Link to="/blog" className="block px-4 py-2 hover:underline transition-all text-xl hover:text-gray-400">
                    Blog
                  </Link>
                  <Link to="/contact" className="block px-4 py-2 hover:underline transition-all text-xl hover:text-gray-400">
                    Contact
                  </Link>
                </div>
              )}
            </nav>
        </div>
    );
};

export default Nav;