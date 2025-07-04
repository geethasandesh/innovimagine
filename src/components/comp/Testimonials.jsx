import React, { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "Innovimagine transformed our workflow with their AI solutions. Their team delivered exactly what we needed - intelligent automation that actually works.",
    name: "Sarah Chen",
    role: "CTO at TechFlow Solutions",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format"
  },
  {
    quote: "The AI tools Innovimagine built for us have increased our productivity by 40%. Their expertise in machine learning is unmatched.",
    name: "Marcus Rodriguez",
    role: "Operations Director at DataSync",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format"
  },
  {
    quote: "Innovimagine's web development and AI integration services exceeded our expectations. They truly understand modern business needs.",
    name: "Emily Watson",
    role: "CEO at CloudFirst",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format"
  }
]

const stats = [
  { number: "15+", label: " Projects Delivered" },
  { number: "100%", label: "Client Satisfaction Rate" },
  { number: "2+", label: "Years of Innovation" }
]

const StarRating = ({ rating, isAnimated = false }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 transition-all duration-700 ease-in-out ${i < rating ? (isAnimated ? 'text-yellow-500' : 'text-gray-900') : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  const testimonialRefs = useRef([]);
  const [animatedTestimonials, setAnimatedTestimonials] = React.useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = testimonialRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setAnimatedTestimonials(prev => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#f5f6fa', boxShadow: '4px 4px 12px #e0e0e0, -4px -4px 12px #ffffff' }}>
            <svg className="w-4 h-4 text-gray-500 mr-2 transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-110 hover:rotate-12 hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover how Innovimagine is transforming businesses with AI-powered solutions.</p>
        </div>

        {/* Hero Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg">
            <div className="mb-6">
              <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
                Innovimagine's <span className="text-gray-400">AI-driven approach</span> revolutionized our business processes. Their expertise in <span className="text-gray-400">machine learning</span> and <span className="text-gray-400">web development</span> helped us achieve results we never thought possible.
              </p>
            </div>
            <div className="text-4xl text-gray-300 mb-4">"</div>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="h-64">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&auto=format" 
                alt="Innovimagine client success"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Individual Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              ref={(el) => (testimonialRefs.current[idx] = el)}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <StarRating rating={testimonial.rating} isAnimated={animatedTestimonials.has(idx)} />
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center py-8">
              <div className="text-5xl lg:text-6xl  font-sans text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials