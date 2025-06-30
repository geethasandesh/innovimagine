import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-24">
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-extrabold text-gray-900 mb-6 md:mb-0">
        Innovimagine
      </Link>
      {/* Links */}
      <nav className="flex flex-wrap gap-6 text-gray-600 text-base font-medium justify-center md:justify-end">
        <Link to="/features" className="hover:text-gray-900 transition-colors">Features</Link>
        <Link to="/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
        <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
        <Link to="/updates" className="hover:text-gray-900 transition-colors">Updates</Link>
        <Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
      </nav>
    </div>
    <div className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Innovimagine. All rights reserved.
    </div>
  </footer>
)

export default Footer
