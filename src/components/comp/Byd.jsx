import React from 'react';
import { useNavigate } from 'react-router-dom';

const Byd = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 overflow-hidden py-20">
      <div className="text-2xl md:text-3xl text-gray-500 max-w-3xl text-center mb-12 font-sans leading-relaxed">
        <p>At Innovimagine, we turn <span className="text-black font-sans">data</span> into direction.</p>
        <p>We decode your audience, power it with <span className="text-black font-sans">AI</span>, and craft strategies that cut through the clutter.</p>
        <p>We don't just plan — we <span className="text-black font-sans">build</span>, launch, and deliver.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button
          className="px-10 py-3 bg-black text-white rounded-md font-sans text-lg transition-all duration-300 group relative overflow-hidden hover:scale-105 hover:shadow-2xl"
          style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.7), 0 6px 20px rgba(0,0,0,0.5)' }}
          onClick={() => navigate('/contact')}
        >
          <span className="flex items-center gap-2 relative z-10">
            Get Started
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              🚀
            </span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
        <button
          className="px-10 py-3 bg-white text-black rounded-md font-sans text-lg transition-all duration-300 group relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
          style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.3), 0 6px 20px rgba(0,0,0,0.2)' }}
          onClick={() => navigate('/services')}
        >
          <span className="flex items-center gap-2 relative z-10">
            Our Services
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              ⚙️
            </span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Byd;
