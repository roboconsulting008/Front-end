import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Code,
  Menu,
  X,
  Home,
  Briefcase,
  FolderGit2,
  Users,
  Info,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  // Define nav items with icons
  const navItems = [
    { name: "Home", icon: <Home className="w-4 h-4 mr-2" /> },
    { name: "About", icon: <Info className="w-4 h-4 mr-2" /> },
    { name: "Services", icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { name: "Projects", icon: <FolderGit2 className="w-4 h-4 mr-2" /> },
    // { name: "Team", icon: <Users className="w-4 h-4 mr-2" /> },
    { name: "Contact", icon: <Phone className="w-4 h-4 mr-2" /> },
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.name.toLowerCase());
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.name.toLowerCase();
        }
      });

      setActiveItem(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-300">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Scepterra
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                  to={item.name.toLowerCase()} 
                  smooth={true} 
                  duration={100}
                  offset={-50}
                  key={item.name}
                    className={`cursor-pointer relative group flex items-center transition-all duration-300 font-medium transform
                      ${
                        activeItem === item.name.toLowerCase()
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                  >
                    {item.icon}
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 transform transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white h-full shadow-2xl border-r-2 border-gray-200">
          <div className="pt-20 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.name.toLowerCase()}
                smooth={true}
                offset={-50}
                duration={100}
                onClick={() => {
                  setActiveItem(item.name.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`flex items-center px-4 py-3 text-lg transition-all duration-300 transform hover:translate-x-2
                  ${
                    activeItem === item.name.toLowerCase()
                      ? "bg-blue-50 text-blue-600  border-l-5 border-blue-800"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
