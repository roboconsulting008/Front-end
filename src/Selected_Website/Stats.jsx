import React, { useState, useEffect, useRef } from 'react';
import { Target, Award, Shield, Users } from 'lucide-react';

const Stats = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  const stats = [
    { number: "27+", label: " Enterprise IT & consulting", icon: <Target className="w-8 h-8" /> },
    { number: "3+", label: "Multi-ERP, Healthcare & Operations expertise", icon: <Award className="w-8 h-8" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-8 h-8" /> },
    { number: "50+", label: "Consulting-led delivery model", icon: <Users className="w-8 h-8" /> }
  ];



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
    <section className="py-20 bg-white" data-animate id="stats">
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${visibleSections.has('stats') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-blue-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;