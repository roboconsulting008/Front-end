import React from 'react';
import { Code } from 'lucide-react';

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const socials = [
        { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
        { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com" },
        { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com" },
      ];
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold">Scepterra</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
            A consulting-led technology and operations partner helping small and
            mid-sized businesses simplify systems, improve efficiency, and scale with confidence.
            </p>
            <div className="flex space-x-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
        >
          {social.icon}
        </a>
      ))}
    </div>
          </div>
          
          {[
  { 
    title: "Services", 
    to:"services",
    links: [
      "IT Consulting",
      "Cloud & Infrastructure",
      "Application Development",
      "Managed IT Services"
    ] 
  },
  { 
    title: "About", 
    to:"about",
    links: [
      "About Scepterra",
      "Delivery Model",
      "Careers",
      "Contact Us"
    ] 
  },
  { 
    title: "Resources", 
    to:"services",
    links: [
      "Insights & Articles",
      "Case Studies",
      "Support Center"
    ] 
  }
].map((column, index) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={link}>
                    <a 
                      href={`#${column.to}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
  © {new Date().getFullYear()} Scepterra. All rights reserved.
</p>
            <div className="flex space-x-6">
              <a  className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a  className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a  className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;