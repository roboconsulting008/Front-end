import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Projects = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const observerRef = useRef(null);

  const projects = [
    {
      title: "SMB E-Commerce Modernization",
      category: "Web & Cloud Solutions",
      description: "Scalable e-commerce platform modernized to improve performance, conversions, and operational visibility.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "AWS", "Stripe"]
    },
    {
      title: "Healthcare Operations Platform",
      category: "Healthcare IT",
      description: "End-to-end healthcare management system supporting scheduling, billing workflows, and compliance.",
      image: "https://ik.imagekit.io/yeoyn0r1ah/medical-banner-with-doctor-working-laptop.jpg?updatedAt=1757057078481",
      tech: ["Vue.js", "Python", "PostgreSQL", "HIPAA"]
    },
    {
      title: "Executive Reporting Dashboard",
      category: "Data Engineering & Analytics",
      description: "Centralized analytics platform delivering real-time operational and financial insights to leadership.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tech: ["Angular", "Java", "Kafka", "Power BI"]
    },
    {
      title: "Digital Banking Enablement",
      category: "Secure Application Development",
      description: "Mobile-first banking solution with strong security controls and seamless customer experience.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      tech: ["React Native", "API Gateway", "OAuth", "Cloud Security"]
    },
    {
      title: "Smart Operations Monitoring",
      category: "IoT & Automation",
      description: "Operations monitoring platform enabling real-time visibility and proactive issue resolution.",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&h=300&fit=crop",
      tech: ["Node.js", "Grafana", "MQTT", "Cloud IoT"]
    },
    {
      title: "AI-Enabled CRM Optimization",
      category: "AI & Process Automation",
      description: "CRM enhancement using AI-driven insights to improve sales forecasting and customer engagement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tech: ["Python", "ML Models", "Automation", "Data Pipelines"]
    }
  ];
  

  // Function to determine items per slide based on screen size
  const updateItemsPerSlide = () => {
    if (window.innerWidth < 768) { // sm screens
      setItemsPerSlide(1);
    } else if (window.innerWidth < 1024) { // md screens
      setItemsPerSlide(1);
    } else { // lg screens and up
      setItemsPerSlide(3);
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

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

  // Auto-rotate project slides
  useEffect(() => {
    const totalSlides = Math.ceil(projects.length / itemsPerSlide);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length, itemsPerSlide]);

  // Reset current slide when items per slide changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  return (
    <section id="projects" className="py-20 bg-white" data-animate>
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center space-y-4 mb-16 transform transition-all duration-1000 ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Client Success Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-world solutions delivered for growing businesses across industries,
          focused on scalability, security, and operational efficiency
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
                  {projects.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((project, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden  transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer w-full max-w-sm">
                      <div className="h-48 overflow-hidden relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 transform group-hover:scale-105 transition-transform duration-300">
                          {project.category}
                        </div>
                        {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                            <Play className="w-6 h-6" />
                          </button>
                        </div> */}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full hover:bg-blue-200 transition-colors duration-300">{tech}</span>
                          ))}
                        </div>
                        {/* <button className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 group">
                          Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;