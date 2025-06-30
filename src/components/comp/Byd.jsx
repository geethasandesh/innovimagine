import React from 'react';

const Byd = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 overflow-hidden py-20">
      <div className="text-2xl md:text-3xl text-gray-500 max-w-3xl text-center mb-12 font-sans leading-relaxed">
        <p>At Innovimagine, we turn <span className="text-black font-sans">data</span> into direction.</p>
        <p>We decode your audience, power it with <span className="text-black font-sans">AI</span>, and craft strategies that cut through the clutter.</p>
        <p>We don't just plan — we <span className="text-black font-sans">build</span>, launch, and deliver.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button
          className="px-10 py-3 bg-black text-white rounded-md font-sans text-lg hover:opacity-90 transition-all duration-200"
          style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.7), 0 6px 20px rgba(0,0,0,0.5)' }}
        >
          Get Started
        </button>
        <button
          className="px-10 py-3 bg-white text-black rounded-md font-sans text-lg hover:opacity-90 transition-all duration-200"
          style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.3), 0 6px 20px rgba(0,0,0,0.2)' }}
        >
          Our Services
        </button>
      </div>
    </section>
  );
};

export default Byd;
