import React from 'react'

const AboutUs = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8">About Innovimagine</h2>
      <div className="text-lg text-gray-700 leading-relaxed space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
          <p>
            To empower businesses of all sizes to harness the transformative power of AI and digital innovation, making advanced technology accessible, ethical, and impactful for everyone.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
          <p>
            At Innovimagine, we are dedicated to delivering intelligent solutions that drive growth, efficiency, and creativity. We partner with organizations to design, build, and scale AI-powered tools and digital experiences that solve real-world challenges.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Values</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-gray-900">Innovation:</span> We push boundaries to create future-ready solutions.</li>
            <li><span className="font-semibold text-gray-900">Integrity:</span> We believe in transparency, trust, and ethical AI.</li>
            <li><span className="font-semibold text-gray-900">Collaboration:</span> We work closely with our clients as partners in success.</li>
            <li><span className="font-semibold text-gray-900">Excellence:</span> We are committed to delivering quality and measurable results.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default AboutUs 