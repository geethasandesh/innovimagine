import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 dotted-border opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              About Innovimagine
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming ideas into innovative digital solutions that drive business growth and user engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-3d p-8 animate-slide-up">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that enhance their online presence, streamline operations, and create meaningful connections with their audience.
              </p>
            </div>
            
            <div className="card-3d p-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl mb-6">🔮</div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading force in digital innovation, creating technology solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "💡", title: "Innovation", desc: "Constantly pushing boundaries and exploring new technologies" },
              { icon: "🤝", title: "Collaboration", desc: "Working together with clients to achieve shared success" },
              { icon: "⚡", title: "Excellence", desc: "Delivering the highest quality solutions with attention to detail" }
            ].map((value, index) => (
              <div key={index} className="card-3d p-6 text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 gradient-text">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", role: "CEO & Founder", desc: "Visionary leader with 15+ years in tech" },
              { name: "Sarah Kim", role: "CTO", desc: "Technical expert specializing in scalable architectures" },
              { name: "Mike Rodriguez", role: "Head of Design", desc: "Creative director focused on user experience" }
            ].map((member, index) => (
              <div key={index} className="card-3d p-6 text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 