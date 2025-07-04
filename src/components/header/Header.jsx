import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/join-us", label: "Join Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-sans text-gray-900 tracking-tight"
          >
            Innovimagine
          </Link>

          {/* Centered Navigation + Get Started Button */}
          <div className="flex-1 flex items-center justify-center">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-sans transition-colors duration-200 px-2 py-1 border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 ${
                    location.pathname === item.path
                      ? "border-gray-900 text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <Link to="/contact">
              <button
                className="ml-4 px-6 py-2 bg-black text-white rounded-md text-base font-sans border-none shadow-lg backdrop-blur-md hover:opacity-90 transition-all duration-200"
                style={{
                  boxShadow:
                    "0 8px 32px 0 rgba(0,0,0,0.65), 0 1.5px 8px 0 rgba(0,0,0,0.60)",
                }}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-4 bg-white/80 backdrop-blur-md border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-base font-medium transition-colors duration-200 px-2 py-1 border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 ${
                  location.pathname === item.path
                    ? "border-gray-900 text-gray-900"
                    : "text-gray-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button
                className="w-full mt-2 px-6 py-2 bg-black text-white rounded-full text-base font-semibold border-none shadow-lg backdrop-blur-md hover:opacity-90 transition-all duration-200"
                style={{
                  boxShadow:
                    "0 8px 32px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
                }}
              >
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
