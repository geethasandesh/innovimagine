import React from 'react'

function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern Frameworks"]
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["Native iOS/Android", "Cross-platform", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
      features: ["AWS/Azure/GCP", "DevOps", "CI/CD", "Monitoring"]
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Intelligent solutions powered by artificial intelligence and machine learning.",
      features: ["Chatbots", "Data Analytics", "Predictive Models", "Automation"]
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 dotted-border opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs, from concept to deployment and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-3d p-8 animate-slide-up group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and objectives" },
              { step: "02", title: "Planning", desc: "Creating detailed project roadmap and strategy" },
              { step: "03", title: "Development", desc: "Building your solution with precision and care" },
              { step: "04", title: "Launch", desc: "Deploying and maintaining your digital solution" }
            ].map((process, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold animate-glow">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">{process.title}</h3>
                <p className="text-gray-300">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="card-3d p-12 text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into powerful digital solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 animate-glow">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-colors duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 