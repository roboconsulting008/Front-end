import React, { useState, useEffect, useRef } from 'react';
import { Rocket, HeartHandshake, Eye, Lock } from 'lucide-react';

const WhyChooseUsSection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  const whyChooseUs = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Enterprise-Grade Expertise",
      description: "Access senior consultants with decades of enterprise IT and operations experience, without big-firm complexity or overhead."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Consulting-Led Delivery",
      description: "We lead every engagement with experienced consultants who stay involved from strategy through execution and support."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Practical, Scalable Solutions",
      description: "Our solutions are designed for real-world SMB needs—simple to manage today and scalable for tomorrow."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Governance & Reliability",
      description: "Strong focus on controls, compliance, and operational stability to reduce risk and ensure consistent outcomes."
    }
  ];
  

  // Enhanced Intersection Observer for smoother animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" data-animate id="why-choose-us">
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center space-y-4 mb-16 transform transition-all duration-1000 ${visibleSections.has('why-choose-us') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
Why Choose Scepterra ?
</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Enterprise Capability Without Big-Firm Complexity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center group ${visibleSections.has('why-choose-us') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-blue-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;