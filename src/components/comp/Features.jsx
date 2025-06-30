import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const features = [
  {
    icon: (
      <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-white shadow-neumorphic mb-6">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-600 hover:text-blue-500 transition-all duration-300 hover:drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </motion.svg>
      </div>
    ),
    title: 'Data-Driven Insights',
    desc: 'Transform raw data into actionable strategies that drive real business growth.',
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-white shadow-neumorphic mb-6">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:drop-shadow-lg hover:animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </motion.svg>
      </div>
    ),
    title: 'AI-Powered Strategy',
    desc: 'Leverage cutting-edge AI to decode your audience and craft winning campaigns.',
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-white shadow-neumorphic mb-6">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-600 hover:text-purple-500 transition-all duration-300 hover:drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </motion.svg>
      </div>
    ),
    title: 'End-to-End Delivery',
    desc: 'From strategy to launch, we build, implement, and deliver results that matter.',
  },
];

const technologies = [
  'React', 'Next.js', 'Node.js', 'Python', 'AI/ML', 'Web Development', 
  'Mobile Apps', 'Real-time', 'Faster', 'Scalable', 'Cloud', 'API',
  'Database', 'UI/UX', 'DevOps', 'Analytics', 'Automation', 'Blockchain'
];

const Features = () => {
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth);
    }
  }, []);

  useEffect(() => {
    if (!carouselWidth) return;
    const animate = async () => {
      while (true) {
        await controls.start({
          x: -carouselWidth / 2,
          transition: {
            duration: carouselWidth / 80, // 80px/sec for slower, smoother
            ease: 'linear',
          },
        });
        controls.set({ x: 0 });
      }
    };
    animate();
    // eslint-disable-next-line
  }, [carouselWidth]);

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-sans text-center text-gray-900 mb-4">Why Choose Innovimagine</h2>
        <p className="text-lg text-center text-gray-500 mb-14">
          We don't just analyze data — we turn it into direction that drives your business forward.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-neumorphic"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Technologies Section */}
        <div className="mt-16 relative">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Our Technologies</h3>
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, #f3f4f6 80%, transparent)'}} />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, #f3f4f6 80%, transparent)'}} />
            {/* Scrolling carousel */}
            <div className="w-full">
              <motion.div
                ref={carouselRef}
                className="flex gap-4"
                animate={controls}
                style={{ width: 'max-content' }}
              >
                {[...technologies, ...technologies].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 bg-white rounded-full px-6 py-3 shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-gray-700 font-medium whitespace-nowrap">{tech}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
