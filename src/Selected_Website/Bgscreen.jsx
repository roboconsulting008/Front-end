import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import BgImg from '../assets/bg_screen.webp';

function Bgscreen() {
  return (
    <div className='bg-white'>
        <div className="relative w-[95%] mx-auto">
      {/* Main Section */}
      <section className="relative h-screen rounded-4xl overflow-hidden isolate">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: `url(${BgImg})`,
            zIndex: 1
          }}
        >
          {/* Black overlay */}
          <div 
            className="absolute inset-0 bg-black opacity-50"
            style={{ zIndex: 2 }}
          ></div>
        </div>
        
        {/* Content Layer */}
        <div 
          className="relative h-full flex flex-col justify-center items-center text-center px-4 p-5"
          style={{ zIndex: 10 }}
        >
          {/* Play Button
          <div className="mt-14 mb-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg">
              <Play className="w-6 h-6" fill="currentColor" />
            </button>
          </div> */}
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
          Enterprise-Grade Technology
 
            Built for Growing Businesses
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-md text-white text-opacity-90 mb-8 max-w-2xl leading-relaxed">
          Practical, scalable IT and operations solutions designed to help small and mid-sized businesses
  modernize, streamline, and grow with confidence.
          </p>
          
          {/* Discover More Button */}
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl text-lg font-semibold transform hover:-translate-y-1 transition-all duration-300 group shadow-lg">
          Explore Our Services  
            <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Statistics Card - Outside the main section */}
      <div 
        className="relative -mt-18 mx-4 "
        style={{ zIndex: 40 }}
      >
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              27+ 
              </div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              98%
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
               SMB
              </div>
              <div className="text-gray-600 font-medium">Focused Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Global
              </div>
              <div className="text-gray-600 font-medium">Delivery & Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Bgscreen;