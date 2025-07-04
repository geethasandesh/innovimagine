import React, { useRef, useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    country: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSent(false);
    emailjs.sendForm(
      'service_vfws8rr',
      'template_z8wwy0w',
      formRef.current,
      '7l18AEEBovnNx3Rnh'
    )
    .then(() => {
      setSent(true);
      setSending(false);
      setFormData({
        fullName: '',
        email: '',
        number: '',
        country: '',
        subject: '',
        message: ''
      });
    }, () => {
      setError('Failed to send. Please try again.');
      setSending(false);
    });
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with neumorphic design */}
        <motion.div
          className="flex flex-col items-center mt-12 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: '#f5f6fa', boxShadow: '4px 4px 12px #e0e0e0, -4px -4px 12px #ffffff' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
          >
            <User className="w-5 h-5 text-gray-500 mr-2 transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-125 hover:rotate-6 cursor-pointer" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">CONTACT</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-sans text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Reach Us At Anytime
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Have questions or need any help? We're here to help you with that
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info Cards */}
          <motion.div
            className="flex flex-col h-full space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {/* Email Card */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8 shadow-neumorphic h-full flex flex-col justify-between group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 shadow-neumorphic-inset">
                  <Mail className="w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-red-500 group-hover:scale-125 group-hover:rotate-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Us Anytime</h4>
                <div className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-2">24/7 Support</div>
                <p className="text-gray-600 mb-2 text-sm">
                  Our team replies within 24 hours. For project inquiries, partnerships, or support, drop us a message!
                </p>
                <ul className="list-disc list-inside text-gray-500 text-xs mb-4">
                  <li>Project Inquiries</li>
                  <li>Partnership Opportunities</li>
                  <li>Customer Support</li>
                </ul>
              </div>
              <a 
                href="mailto:innovimagine@gmail.com" 
                className="text-black font-medium hover:underline"
              >
                innovimagine@gmail.com
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8 shadow-neumorphic h-full flex flex-col justify-between group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 shadow-neumorphic-inset">
                  <Phone className="w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-green-500 group-hover:scale-125 group-hover:rotate-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Call Us Directly</h4>
                <div className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-2">Available 9am–7pm IST</div>
                <p className="text-gray-600 mb-2 text-sm">
                  Call us for instant support, demo scheduling, or a quick consultation. We're happy to help!
                </p>
                <ul className="list-disc list-inside text-gray-500 text-xs mb-4">
                  <li>Urgent Queries</li>
                  <li>Demo Scheduling</li>
                  <li>Consultation</li>
                </ul>
              </div>
              <a
                href="tel:+919000278794"
                className="text-black font-medium hover:underline text-left"
              >
                Book a call
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form with neumorphic design and full height */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow-neumorphic h-full flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <form ref={formRef} className="space-y-6 flex flex-col h-full justify-between" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Geetha Sandesh"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Enter your country"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Subject Of Interest
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Regarding Project"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  How may we assist you?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Give us more info.."
                  className="w-full max-w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-y bg-gray-100 shadow-neumorphic-inset"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-neumorphic"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Your Message'}
              </motion.button>
              {sent && <p className="text-green-600 mt-2">Message sent successfully!</p>}
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;