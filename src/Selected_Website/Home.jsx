import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from "react-scroll";
import boyimg from '../assets/boy_img.webp'

const Home = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-bounce">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 50+ Companies
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your Business with Practical,
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Scalable IT & Operations Solutions
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We help organizations simplify complex technology landscapes, optimize operations, and scale efficiently through consulting-led delivery and managed services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
              >
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
                  Request a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
              >
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                  Explore Our Services
                </button>
              </Link>

            </div>
            <div className="flex items-center space-x-8 pt-8">
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative ">
            {/* Background decorative element */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 opacity-20 to-purple-500 rounded-4xl transform rotate-8 z-10"></div>
            {/* Image container with proper z-index and styling */}
            <img
              src={boyimg}
              alt="Professional IT Solutions"
              className=" w-[90%] h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section >
  );
};

export default Home;