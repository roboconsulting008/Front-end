// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Website from './website/Website'
// import Website1 from './website/Website1'
// import Website2 from './website/Website2'
// import Website3 from './website/Website3'
// import Website4 from './website/Website4'
// import Website5 from './website/Website5'
// import Website6 from './website/Website6'
// import Website7 from './website/Website7'
// import Website8 from './website/Website8'
// import Website9 from './website/Website9'
// import Website10 from './website/Website10'
// import Website11 from './website/Website11'
// import Website12 from './website/Website12'
// import Website13 from './website/Website13'
// import Website14 from './website/Website14'
// import Website15 from './website/Website15'
// import Form from './website/Form'

// function App() {
//   return (
//     <div>
//   <BrowserRouter>
//   <Routes>
//     <Route path='/0' element={<Website/>}/>
//     <Route path='/1' element={<Website1/>}/>
//     <Route path='/2' element={<Website2/>}/>
//     <Route path='/3' element={<Website3/>}/>
//     <Route path='/4' element={<Website4/>}/>
//     <Route path='/5' element={<Website5/>}/>
//     <Route path='/6' element={<Website6/>}/>
//     <Route path='/7' element={<Website7/>}/>
//     <Route path='/8' element={<Website8/>}/>
//     <Route path='/9' element={<Website9/>}/>
//     <Route path='/form' element={<Form/>}/>
//     <Route path='/10' element={<Website10/>}/>
//     <Route path='/11' element={<Website11/>}/>
//     <Route path='/12' element={<Website12/>}/>
//     <Route path='/13' element={<Website13/>}/>
//     <Route path='/14' element={<Website14/>}/>
//     <Route path='/15' element={<Website15/>}/>
//   </Routes>
//   </BrowserRouter>
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './Selected_Website/Navbar';
import Home from './Selected_Website/Home';
import Stats from './Selected_Website/Stats';
import Services from './Selected_Website/Services';
import Projects from './Selected_Website/Projects';
import Team from './Selected_Website/Team';
import Testimonials from './Selected_Website/Testimonials';
import Blog from './Selected_Website/Blog';
import About from './Selected_Website/About';
import Contact from './Selected_Website/Contact';
import Footer from './Selected_Website/Footer';
import WhyChooseUs from './Selected_Website/WhyChooseUs';
import ProvenProcessSection from './Selected_Website/ProvenProcessSection';
import TechnologiesSection from './Selected_Website/Technologies';
import Bgscreen from './Selected_Website/Bgscreen';
import Chatbot from './Selected_Website/Chatbot'


const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Scroll to top button */}
      {/* <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-500 transform ${
          showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-75'
        } hover:scale-110 hover:shadow-xl`}
      >
        <ChevronUp className="w-6 h-6" />
      </button> */}

      <Chatbot/>

      <Navbar />
      <Home />
      <Stats />
      <About />
      <WhyChooseUs />
      <Services />
      <Bgscreen/>
      <TechnologiesSection/>
      <ProvenProcessSection/>
      <Projects />
      {/* <Team /> */}
      <Testimonials />
      <Contact />
      <Footer />

      {/* Global CSS for animations and styling */}
      <style jsx global>{`
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default App;
