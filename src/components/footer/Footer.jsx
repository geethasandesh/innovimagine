import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-24">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Logo, Description, Socials */}
      <div>
        <div className="mb-4">
          <span className="block text-lg font-bold tracking-widest mb-2">INNOV<br/>IMAGINE</span>
        </div>
        <p className="text-gray-700 mb-6 text-base">Transforming digital landscapes with innovative technology solutions and cutting-edge design.</p>
        <div className="flex space-x-4 text-2xl text-gray-700">
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
      </div>
      {/* Services */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Services</h3>
        <ul className="space-y-3 text-gray-800">
          <li>Web Development</li>
          <li>App Development</li>
          <li>UI/UX Design</li>
          <li>AI Solutions</li>
        </ul>
      </div>
      {/* Company */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Company</h3>
        <ul className="space-y-3 text-gray-800">
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/ai-innovations">AI Innovations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
        <ul className="space-y-4 text-gray-800">
          <li className="flex items-center gap-3"><HiOutlineLocationMarker className="text-lg" /> Hyderabad, India</li>
          <li className="flex items-center gap-3"><HiOutlineMail className="text-lg" /> innovimagine@gmail.com</li>
          <li className="flex items-center gap-3"><HiOutlinePhone className="text-lg" /> +91 7569460743</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} InnovImagine. All rights reserved.
    </div>
  </footer>
)

export default Footer
