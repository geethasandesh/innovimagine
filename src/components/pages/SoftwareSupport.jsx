import React from 'react';
import { motion } from 'framer-motion';
import supportImage from '../../assets/software-support.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const SoftwareSupport = () => (
  <motion.section
    className="bg-white min-h-screen pt-28 pb-16 px-4 md:px-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
      {/* LEFT COLUMN: Image + Services + Benefits */}
      <motion.div
        className="w-full md:w-2/5 flex flex-col gap-8 items-start"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src={supportImage}
          alt="Software Support"
          className="rounded-2xl max-w-[420px] w-full object-cover shadow-lg"
        />
        {/* Services */}
        <div>
          <h2 className="text-2xl font-semibold mt-4 mb-2 font-sans">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700 font-sans">
            <li>Bug fixing & troubleshooting</li>
            <li>Performance monitoring</li>
            <li>Security updates</li>
            <li>Feature enhancements</li>
            <li>Technical support</li>
          </ul>
        </div>
        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold mt-4 mb-2 font-sans">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 font-sans">
            <li>Minimized downtime</li>
            <li>Improved software reliability</li>
            <li>Proactive issue prevention</li>
            <li>Peace of mind</li>
          </ul>
        </div>
      </motion.div>
      {/* RIGHT COLUMN: Main Content */}
      <motion.div
        className="w-full md:w-3/5"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-black font-sans"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Software Support
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8 font-sans"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          We provide continuous support and maintenance to ensure your software performs optimally and evolves with your business needs.
        </motion.p>
        {/* Process */}
        <motion.h2
          className="text-2xl font-semibold mt-8 mb-4 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Process
        </motion.h2>
        <motion.ol
          className="list-decimal list-inside text-gray-700 mb-6 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <li>Assessment & Planning</li>
          <li>Issue Resolution</li>
          <li>Monitoring & Reporting</li>
          <li>Continuous Improvement</li>
        </motion.ol>
      </motion.div>
    </div>
    {/* CTA centered for the whole page */}
    <div className="w-full flex justify-center mt-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <a
          href="/contact"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition font-sans shadow-lg"
        >
          Get Reliable Support
        </a>
      </motion.div>
    </div>
  </motion.section>
);

export default SoftwareSupport; 