import React from 'react';
import {
  FaFigma,
  FaSketch,
  FaDribbble,
  FaBehance,
  FaPenNib,
} from 'react-icons/fa';
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { 
  SiAdobephotoshop, 
  SiFramer, 
  SiAdobexd, 
  SiCanva, 
  SiNotion,
  SiInvision,
  SiMiro
} from 'react-icons/si';

const orbitIcons = [
  {
    radius: 80,
    speed: '10s',
    icons: [
      { component: IoLogoNodejs, color: '#5fa04e', name: 'Node.js' },
      { component:FaReact, color: '#61dafb', name: 'React.js' },
      { component: SiNextdotjs, color: '#000000', name: 'Next.js' }
    ],
  },
  {
    radius: 130,
    speed: '18s',
    icons: [
      { component: FaAws, color: '#ee860d', name: 'Aws' },
      { component: SiPrisma, color: '#01344b', name: 'Prisma' },
      { component: BiLogoPostgresql, color: '#37668f', name: 'Postgresql' }
    ],
  },
  {
    radius: 180,
    speed: '26s',
    icons: [
      { component: SiNotion, color: '#000000', name: 'Notion' },
      { component: FaDribbble, color: '#EA4C89', name: 'Dribbble' },
      { component: FaBehance, color: '#1769FF', name: 'Behance' },
      { component: VscAzure, color: '#0a559d', name: 'Azure' },
      { component: SiFramer, color: '#000000', name: 'Framer' }
    ],
  },
];

const Tools = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full md:w-[80%] mx-auto md:h-[900px] h-[700px] flex flex-col items-center justify-between overflow-hidden py-5">
        
        {/* Top Heading */}
        <div className="text-center space-y-2 mb-10 mt-5 ">
        <h1 className="text-2xl md:text-5xl py-2 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Our Tech Stack, Your Growth Engine
</h1>
<p className=" text-lg text-gray-600">
  We work with 20+ advanced tools and technologies to build secure, scalable, and future-ready solutions. From cloud to custom software, we’ve got everything your business needs to move forward with confidence.
</p>

        </div>

        {/* Orbit Section */}
        <div className="relative origin-center scale-[0.8] sm:scale-100 md:scale-[1.2] lg:scale-[1.4] xl:scale-[1.6]">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full flex items-center justify-center font-bold z-10 -translate-x-1/2 -translate-y-1/2 shadow-lg text-sm">
          SCEPTERRA
          </div>

          {/* Orbit Rings */}
          {orbitIcons.map((orbit, index) => (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 orbit-ring border border-gray-300 border-dashed rounded-full ${
                index === 1 ? 'reverse' : ''
              }`}
              style={{
                width: `${orbit.radius * 2}px`,
                height: `${orbit.radius * 2}px`,
                animationDuration: orbit.speed,
                transform: 'translate(-50%, -50%)',
                animation: `${index === 1 ? 'orbit-reverse' : 'orbit'} ${orbit.speed} linear infinite`,
              }}
            >
              {orbit.icons.map((iconData, idx) => {
                const angle = (360 / orbit.icons.length) * idx;
                const rad = (angle * Math.PI) / 180;
                const x = orbit.radius + orbit.radius * Math.cos(rad) - 20;
                const y = orbit.radius + orbit.radius * Math.sin(rad) - 20;
                const IconComponent = iconData.component;

                return (
                  <div
                    key={idx}
                    className="absolute w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-gray-200"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      animation: `${index === 1 ? 'icon-counter-reverse' : 'icon-counter'} ${orbit.speed} linear infinite`,
                    }}
                  >
                    <IconComponent 
                      size={24} 
                      color={iconData.color}
                      title={iconData.name}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <h1></h1>

       

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes orbit {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes orbit-reverse {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(-360deg);
            }
          }

          @keyframes icon-counter {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }

          @keyframes icon-counter-reverse {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .orbit-ring {
            animation: orbit linear infinite;
          }

          .orbit-ring.reverse {
            animation: orbit-reverse linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Tools;