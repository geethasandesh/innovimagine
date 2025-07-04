import React from 'react';
import { motion } from 'framer-motion';
import mobileImage from '../../assets/mobile-app.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const MobileAppDevelopment = () => (
  <motion.section
    className="bg-white min-h-screen pt-28 pb-16 px-4 md:px-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
      {/* LEFT COLUMN: Image + Technologies + Benefits */}
      <motion.div
        className="w-full md:w-2/5 flex flex-col gap-8 items-start"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src={mobileImage}
          alt="Mobile App Development"
          className="rounded-2xl max-w-[420px] w-full object-cover shadow-lg"
        />
        {/* Technologies */}
        <div>
          <h2 className="text-2xl font-semibold mt-4 mb-2 font-sans">Platforms</h2>
          <p className="text-gray-700 font-sans">
            iOS (Swift, Objective-C), Android (Kotlin, Java), React Native, Flutter.
          </p>
        </div>
        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold mt-4 mb-2 font-sans">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 font-sans">
            <li>Reach a wider audience</li>
            <li>Boost customer engagement</li>
            <li>Increase brand loyalty</li>
            <li>Monetization opportunities</li>
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
          className="text-4xl md:text-5xl font-semibold mb-6 text-black font-sans"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Mobile App Development
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8 font-sans"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          We create cross-platform mobile apps for iOS and Android with seamless user experiences. Our apps are designed for performance, scalability, and user engagement.
        </motion.p>
        {/* Features */}
        <motion.h2
          className="text-2xl font-semibold mt-8 mb-4 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Key Features
        </motion.h2>
        <motion.ul
          className="list-disc list-inside text-gray-700 mb-6 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <li>Native and cross-platform solutions</li>
          <li>Intuitive UI/UX</li>
          <li>API and third-party integrations</li>
          <li>Push notifications</li>
          <li>App Store & Play Store deployment</li>
        </motion.ul>
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
          <li>Discovery & Planning</li>
          <li>UI/UX Design</li>
          <li>Development</li>
          <li>Testing & QA</li>
          <li>Launch</li>
          <li>Support & Updates</li>
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
          Start Your Mobile App Project
        </a>
      </motion.div>
    </div>
  </motion.section>
);

export default MobileAppDevelopment; 