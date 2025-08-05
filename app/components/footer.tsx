import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "@/public/assets/s-logo.svg";
import epitechlogo from "@/public/assets/epitech_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br w-full from-shark-50 to-shark-100 border-t border-shark-200">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-shark-900 hover:bg-shark-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        >
          <FaArrowUp className="group-hover:animate-bounce" size={18} />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-shark-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-shark-100 to-white rounded-xl p-2 shadow-sm border border-shark-100">
                    <Image
                      src={logo}
                      alt="Steven Dong"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full p-1 shadow-sm border border-shark-100">
                    <Image
                      src={epitechlogo}
                      alt="EPITECH"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-futura-bold text-shark-900 mb-1">
                    Steven Dong
                  </h3>
                  <p className="text-shark-600 font-futura-semi mb-2">
                    Développeur Front-end
                  </p>
                  <div className="flex items-center gap-2 text-shark-500 text-sm font-futura">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Disponible pour de nouveaux projets</span>
                  </div>
                </div>
              </div>

              <p className="text-shark-700 font-futura leading-relaxed mb-4">
                Passionné par le développement web moderne et la création
                d'expériences utilisateur innovantes. Spécialisé en React,
                TypeScript et solutions front-end performantes.
              </p>

              <div className="flex items-center gap-3 text-shark-600 text-sm font-futura">
                <span>📍 Paris, France</span>
                <span>•</span>
                <span>🎓 EPITECH Paris</span>
              </div>
            </div>
          </div>

          {/* Navigation Links - Enhanced */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-futura-bold text-shark-900 mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-shark-400 rounded-full"></div>
              Navigation
            </h4>
            <nav className="space-y-3">
              {[
                { href: "#Introduction", label: "Introduction" },
                { href: "#Compétences", label: "Compétences" },
                { href: "#Expérience", label: "Expérience" },
                { href: "#Projets", label: "Projets" },
                { href: "#Contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-shark-600 hover:text-shark-900 font-futura transition-all duration-200 hover:translate-x-1 group"
                >
                  <div className="w-1.5 h-1.5 bg-shark-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social - Enhanced */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-futura-bold text-shark-900 mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-shark-400 rounded-full"></div>
              Restons connectés
            </h4>

            <div className="space-y-4 mb-6">
              <a
                href="mailto:steven.dong2003@gmail.com"
                className="flex items-center gap-3 text-shark-600 hover:text-shark-900 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-shark-100 rounded-lg flex items-center justify-center group-hover:bg-shark-200 transition-colors duration-200">
                  <FaEnvelope size={14} />
                </div>
                <span className="font-futura text-sm">
                  steven.dong2003@gmail.com
                </span>
              </a>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/steven-dong2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-white hover:bg-[#0077B5] text-shark-600 hover:text-white rounded-xl transition-all duration-300 border border-shark-200 hover:border-[#0077B5] shadow-sm hover:shadow-md flex items-center justify-center hover:scale-110"
              >
                <FaLinkedin size={18} />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-shark-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  LinkedIn
                </div>
              </a>
              <a
                href="https://github.com/BRENNS"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-white hover:bg-shark-900 text-shark-600 hover:text-white rounded-xl transition-all duration-300 border border-shark-200 hover:border-shark-900 shadow-sm hover:shadow-md flex items-center justify-center hover:scale-110"
              >
                <FaGithub size={18} />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-shark-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  GitHub
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="pt-8 border-t border-shark-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-shark-600 font-futura text-sm">
              <span>© {currentYear} Steven Dong. Tous droits réservés.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
