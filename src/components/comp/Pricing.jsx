import React from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$800',
    period: '/month',
    features: [
      'Basic AI Tools',
      'Limited Automation Features',
      'Real-Time Reporting',
      'Basic Chatbot Integration'
    ],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Pro',
    price: '$1700',
    period: '/month',
    features: [
      'Advanced AI Tools',
      'Customizable Workflows',
      'AI-Powered Analytics',
      'Premium Chatbot Features',
      'Cross-Platform Integrations'
    ],
    cta: 'Get Started',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: '$4700',
    period: '/month',
    features: [
      'Fully Customized AI Solutions',
      'Unlimited Integrations',
      'Advanced Reporting & Insights',
      'Scalable AI Solutions',
      'Team Collaboration Features',
      'Priority Feature Access'
    ],
    cta: 'Get Started',
    highlight: false
  }
]

const Pricing = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-14">Simple Price For All</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`card-3d flex flex-col items-center text-center p-10 transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl bg-white ${plan.highlight ? 'border-4 border-transparent bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100' : ''}`}
          >
            <div className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500' : 'text-gray-900'}`}>{plan.name}</div>
            <div className="text-4xl font-extrabold mb-2 text-gray-900">{plan.price}<span className="text-lg font-medium text-gray-500">{plan.period}</span></div>
            <ul className="text-gray-600 text-base mb-8 space-y-2">
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button className={`w-full px-6 py-3 rounded-full font-semibold text-lg shadow transition-all duration-200 ${plan.highlight ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white hover:opacity-90' : 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white'}`}>{plan.cta}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Pricing 