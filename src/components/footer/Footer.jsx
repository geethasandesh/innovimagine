import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Footer = () => (
  <footer className="bg-white">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Logo, Description, Socials */}
      <div>
        <div className="mb-4">
          <span className="block text-lg font-bold tracking-widest mb-2">INNOVIMAGINE</span>
        </div>
        <p className="text-gray-700 mb-6 text-base">Transforming digital landscapes with innovative technology solutions and cutting-edge design.</p>
        <div className="flex space-x-4 text-2xl text-gray-700">
          <motion.a
            href="https://www.linkedin.com/in/innov-imagine-582915350/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/accounts/login/?next=%2Finnovimagine%2F&source=omni_redirect"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=61572732074218&mibextid=qi2Omg&rdid=WW2L7v3ytUejb5A0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18dGf6b7YL%2F%3Fmibextid%3Dqi2Omg#"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 6 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaFacebook />
          </motion.a>
        </div>
      </div>
      {/* Services col 1 */}
      <div>
        <h3 className="text-xl font-semibold  font-sans mb-4">Services</h3>
        <ul className="space-y-3 text-gray-800">
          <li><Link to="/services">All Services</Link></li>
          <li><Link to="/services/web-app-development">Web App Development</Link></li>
          <li><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
          <li><Link to="/services/full-stack-development">Full Stack Development</Link></li>
        </ul>
      </div>
      {/* Services col 2 */}
      <div className="pt-10 md:pt-0">
        <ul className="space-y-3 text-gray-800">
        <li><Link to="/">.</Link></li>
          <li><Link to="/services/ai-tool-applications">AI Tool Applications</Link></li>
          <li><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
          <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
          <li><Link to="/services/software-support">Software Support</Link></li>
        </ul>
      </div>
      {/* Pages */}
      <div>
        <h3 className="text-xl font-semibold font-sans mb-4">Pages</h3>
        <ul className="space-y-3 text-gray-800">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/join-us">Join Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold font-sans mb-4">Contact Info</h3>
        <ul className="space-y-4 text-gray-800">
          <li className="flex items-center gap-3"><HiOutlineLocationMarker className="text-lg" /> Hyderabad, India</li>
          <li className="flex items-center gap-3"><HiOutlineMail className="text-lg" />
            <a href="mailto:innovimagine@gmail.com" className="hover:underline">innovimagine@gmail.com</a>
          </li>
          <li className="flex items-center gap-3"><HiOutlinePhone className="text-lg" />
            <a href="tel:+917569460743" className="hover:underline">+91 7569460743</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} InnovImagine. All rights reserved.
    </div>
  </footer>
)

export default Footer
