import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Mail } from 'lucide-react';

const Team = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  const team = [
    {
      name: "Alex Thompson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: "Full-Stack Development, DevOps"
    },
    {
      name: "Maria Garcia",
      role: "Lead Security Architect",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      expertise: "Cybersecurity, Compliance"
    },
    {
      name: "David Kim",
      role: "Cloud Solutions Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      expertise: "AWS, Azure, Cloud Architecture"
    },
    {
      name: "Lisa Chen",
      role: "AI/ML Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      expertise: "Machine Learning, Data Science"
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
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" data-animate>
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center space-y-4 mb-16 transform transition-all duration-1000 ${visibleSections.has('team') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to delivering exceptional results and driving innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-700 text-center group ${visibleSections.has('team') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto overflow-hidden rounded-full group-hover:scale-110 transition-transform duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>
              <div className="flex justify-center space-x-3">
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team