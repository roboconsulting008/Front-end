import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BoltIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);
  
  const commitments = [
    {
      icon: ShieldCheckIcon,
      title: 'Simplify technology and operations',
      description: 'Reduce complexity, increase efficiency'
    },
    {
      icon: ChartBarIcon,
      title: 'Improve efficiency and reduce risk',
      description: 'Streamlined processes, better controls'
    },
    {
      icon: BoltIcon,
      title: 'Adopt automation at the right pace',
      description: 'Smart digital tool implementation'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Build foundation for future growth',
      description: 'Scalable, sustainable solutions'
    }
  ];

  const differentiators = [
    'SMB-first mindset – solutions designed for scale, not complexity',
    'Senior consultant involvement from start to finish',
    'Clear communication & transparency at every step'
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
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50" data-animate>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 ${visibleSections.has('about') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-purple-500/30">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-800" />
            <span className="text-blue-800 text-xs sm:text-sm font-medium">ABOUT SCEPTERRA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-5xl mx-auto font-bold mb-4 sm:mb-6 px-2">
            Empowering
            <span className="bg-gradient-to-r text-blue-600 bg-clip-text"> Small & Medium Businesses </span>
            with the Right Technology
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed px-2">
            Scepterra is a consulting-led IT and operations services firm focused on supporting small and medium-sized businesses in navigating technology, process, and operational challenges.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Column */}
          <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${visibleSections.has('about') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Enterprise Expertise */}
            <div>
              <h2 className="text-xl  md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Enterprise Expertise, Tailored for SMBs
              </h2>
              <p className="text-md md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                We understand that SMBs need solutions that are practical, cost-conscious, and easy to manage — not overly complex enterprise frameworks. Our approach is built on real-world experience, ensuring that technology investments directly support business growth and day-to-day operations.
              </p>
              <p className="text-md md:text-base text-gray-600 leading-relaxed">
                With 27+ years of enterprise IT and consulting experience, Scepterra brings large-organization discipline and best practices in a form that is accessible and effective for growing businesses.
              </p>
            </div>

            {/* What Makes Us Different */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">What Makes Us Different</h3>
              <div className="space-y-2.5 sm:space-y-3">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="bg-blue-100 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Our Mission & Vision</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Mission</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    To enable small and mid-sized organizations to turn technology into measurable business outcomes
                    by delivering solutions that are simple, scalable, and built for long-term success.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Vision</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    To be a trusted technology and operations partner for small and medium businesses,
                    helping them grow confidently through practical, affordable, and scalable IT and business solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Commitment</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
                We are committed to helping small and medium organizations achieve operational excellence through
                practical, scalable solutions that deliver real value.
              </p>

              {/* Commitment Cards */}
              <div className="space-y-3 sm:space-y-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start sm:items-center p-3 sm:p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="p-2 sm:p-3 bg-blue-100 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                      <commitment.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{commitment.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{commitment.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience Highlight */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex items-start sm:items-center">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm md:text-base">27+</span>
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Years of Experience</h4>
                    <p className="text-sm md:text-base text-gray-600">
                      Bringing large-organization discipline and best practices in a form that is
                      accessible for growing businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;