import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden" data-animate>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center space-y-4 mb-16 transform transition-all duration-1000 ${visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Get In Touch</h2>
          <p className="text-md md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-8 transform transition-all duration-1000 ${visibleSections.has('contact') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+91 98765 43210", color: "bg-blue-600" },
                  { icon: Mail, label: "Email", value: "info@scepterra.com", color: "bg-purple-600" },
                  { icon: MapPin, label: "Address", value: "Chennai, India | Global Delivery", color: "bg-green-600" }
                ]
                  .map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-300">{contact.label}</p>
                        <p className="text-white text-sm md:text-base font-semibold group-hover:text-blue-300 transition-colors duration-300">{contact.value}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>


          </div>

          <div className={`transform transition-all duration-1000 ${visibleSections.has('contact') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 group-hover:bg-white/25"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 group-hover:bg-white/25"
                    />
                  </div>
                </div>
                <div className="group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 group-hover:bg-white/25"
                  />
                </div>
                <div className="group">
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 group-hover:bg-white/25 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;