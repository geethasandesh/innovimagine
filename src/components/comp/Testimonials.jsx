import React from 'react'

const testimonials = [
  {
    quote: "Their AI-driven approach helped us reach the right audience and grow faster with smarter insights—streamlining our strategy, improving engagement, and delivering results we couldn't achieve before.",
    name: "Brendan",
    role: "Marketing Director at StratIQ"
  },
  {
    quote: "Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We're already seeing results.",
    name: "Lena M",
    role: "Manager at NovaTech"
  },
  {
    quote: "From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction.",
    name: "Eli R",
    role: "COO at GridFrame"
  }
]

const Testimonials = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-14">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="card-3d flex flex-col items-center text-center p-10 transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl bg-white"
          >
            <p className="text-lg text-gray-700 italic mb-6">"{t.quote}"</p>
            <div className="font-bold text-gray-900 mb-1">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials 