import React, { useState, useEffect, useRef } from 'react';
import { Award, Target, Shield, Users } from 'lucide-react';

const Stats = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  const stats = [
    {
      title: "Senior-Led Consulting",
      description: "Every engagement is guided by experienced consultants, not junior teams.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Built for SMBs",
      description: "Practical IT, ERP, healthcare, and operations solutions designed for growing businesses.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Reliable Support",
      description: "Responsive support aligned to your business priorities and timelines.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Consulting-Led Delivery",
      description: "Hands-on guidance, accountability, and outcomes driven by senior expertise.",
      icon: <Users className="w-8 h-8" />
    }
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
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" data-animate id="stats">
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${
            visibleSections.has('stats')
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-blue-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {stat.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
