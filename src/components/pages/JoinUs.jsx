import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const JoinUs = () => {
  const [form, setForm] = useState({ name: '', email: '', link: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can integrate EmailJS, Formspree, or your backend here
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-16 px-2 md:px-0">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-sans text-center text-gray-900 mb-4 font-bold"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Join Us at Innovimagine
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-600 mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          We're building something special—and we want passionate builders, dreamers, and doers to join us. Whether you're a developer, designer, advisor, or just excited about the future, let's connect!
        </motion.p>
        {/* Who We're Looking For */}
        <motion.div
          className="bg-white rounded-2xl shadow-neumorphic p-6 md:p-8 mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Who We're Looking For</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Early team members (engineering, product, design, growth)</li>
            <li>Advisors and mentors</li>
            <li>Freelancers and collaborators</li>
            <li>Anyone excited to shape the future of software & AI</li>
          </ul>
        </motion.div>
        {/* Why Join */}
        <motion.div
          className="bg-white rounded-2xl shadow-neumorphic p-6 md:p-8 mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Why Join Innovimagine?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Work with passionate founders and innovators</li>
            <li>Shape products and culture from the ground up</li>
            <li>Flexible, remote-friendly, and open to all backgrounds</li>
            <li>Make a real impact in a fast-growing startup</li>
          </ul>
        </motion.div>
        {/* Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-neumorphic p-6 md:p-8 mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Express Your Interest</h2>
          {submitted ? (
            <div className="text-green-600 text-center font-semibold py-8">Thank you for reaching out! We'll be in touch soon.</div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-medium">LinkedIn or GitHub (optional)</label>
                <input
                  type="text"
                  name="link"
                  value={form.link}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourname or https://github.com/yourname"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Tell us about yourself, your interests, or how you'd like to contribute!"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-all duration-200 shadow-lg"
              >
                Send
              </button>
            </form>
          )}
        </motion.div>
        {/* Open Invitation */}
        <motion.div
          className="text-center text-gray-600 mt-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <span className="font-semibold text-gray-900">We welcome all backgrounds and experiences.</span> If you're excited about our mission, we want to hear from you—no matter your title or location!
        </motion.div>
      </div>
    </div>
  );
};

export default JoinUs; 