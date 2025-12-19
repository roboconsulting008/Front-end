import React, { useState, useEffect, useRef } from 'react';
import { Code, Cloud, Shield, Users, CheckCircle, ChevronRight } from 'lucide-react';

const Services = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Application & Platform Development",
      description: "Practical, scalable applications built to support SMB growth without unnecessary complexity.",
      features: ["Business Web Apps", "Internal Tools", "API Integrations", "Modern UI Frameworks"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Infrastructure Services",
      description: "Cost-conscious cloud solutions that improve reliability, performance, and scalability.",
      features: ["AWS & Azure Setup", "Cloud Optimization", "Backup & DR", "DevOps Enablement"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Right-sized security frameworks to protect your systems without enterprise overhead.",
      features: ["Risk Assessments", "Access Controls", "Policy & Compliance", "Security Hardening"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "IT & Technology Consulting",
      description: "Consulting-led guidance to align technology decisions with real business outcomes.",
      features: ["IT Roadmapping", "Vendor Evaluation", "Technology Advisory", "Operational Alignment"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Data Engineering & Reporting",
      description: "Turn operational data into insights that support better, faster decision-making.",
      features: ["Data Pipelines", "Business Dashboards", "Reporting Automation", "Cost Visibility"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Process Consulting & BPO",
      description: "Streamlined processes and managed operations to reduce cost and improve efficiency.",
      features: ["Process Mapping", "SOP Documentation", "Managed Operations", "Governance & Controls"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Automation, AI & RPA",
      description: "Intelligent automation that removes manual work and improves operational accuracy.",
      features: ["Workflow Automation", "RPA Bots", "AI Insights", "Operational Efficiency"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Healthcare Operations & Billing",
      description: "Reliable healthcare support services focused on compliance, accuracy, and revenue optimization.",
      features: ["Medical Billing", "RCM Support", "Coding Accuracy", "HIPAA Compliance"],
      image: "https://ik.imagekit.io/yeoyn0r1ah/doctor-writing-about-routine-medical-checkup.jpg?updatedAt=1757230899006"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Digital & Operational Transformation",
      description: "Incremental transformation programs designed for sustainable, measurable improvement.",
      features: ["Legacy Modernization", "Process Digitization", "Change Enablement", "Growth Readiness"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
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
    <section id="services" className="py-20 bg-white" data-animate>
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center space-y-4 mb-16 transform transition-all duration-1000 ${visibleSections.has('services') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Expert Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 group ${visibleSections.has('services') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="h-48 overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group">
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;