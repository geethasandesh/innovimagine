import React from 'react'

const steps = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
    number: '01',
    title: 'Workflow Assessment',
    desc: 'We examine your existing workflows to identify where AI can deliver the greatest impact.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
    number: '02',
    title: 'Deploy with Confidence',
    desc: 'Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    number: '03',
    title: 'Ongoing Support & Optimization',
    desc: 'After deployment, we provide support and refine your AI systems to keep them performing at their best.'
  }
]

const Process = () => (
  <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 relative overflow-x-hidden">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">Our Process</h2>
      <p className="text-lg text-center text-gray-500 mb-14 max-w-2xl mx-auto">A transparent process of collaboration and feedback to deliver scalable, reliable AI solutions for your business.</p>
      <div className="hidden md:flex items-center justify-between relative z-10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center relative">
            {/* Icon */}
            <div className="mb-4 z-20">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg border-4 border-gray-100">
                {step.icon}
              </div>
            </div>
            {/* Step Number */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white text-xl font-bold mb-3 shadow-lg border-4 border-white z-20">
              {step.number}
            </div>
            {/* Title & Desc */}
            <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{step.title}</h3>
            <p className="text-gray-600 text-sm text-center max-w-xs">{step.desc}</p>
            {/* Connecting line/arrows except last */}
            {idx < steps.length - 1 && (
              <div className="absolute top-12 right-0 left-full h-1 flex items-center z-0">
                <div className="w-full h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-60 rounded-full"></div>
                <svg className="w-6 h-6 -ml-3 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4l4 4-4 4" /></svg>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Mobile layout: vertical stack */}
      <div className="md:hidden flex flex-col gap-10 mt-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center relative">
            <div className="mb-4 z-20">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg border-4 border-gray-100">
                {step.icon}
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white text-xl font-bold mb-3 shadow-lg border-4 border-white z-20">
              {step.number}
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{step.title}</h3>
            <p className="text-gray-600 text-sm text-center max-w-xs">{step.desc}</p>
            {/* Vertical connecting line except last */}
            {idx < steps.length - 1 && (
              <div className="absolute left-1/2 top-full w-1 h-10 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 opacity-60 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Process 