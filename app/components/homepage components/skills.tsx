import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import C from "@/public/assets/languages/c.svg";
import Cpp from "@/public/assets/languages/c++.svg";
import Css from "@/public/assets/languages/css-3.svg";
import Html from "@/public/assets/languages/html-1.svg";
import Js from "@/public/assets/languages/js.svg";
import python from "@/public/assets/languages/python.svg";
import react from "@/public/assets/languages/react.svg";
import typescript from "@/public/assets/languages/typescript.svg";
import next from "@/public/assets/languages/next-js.svg";
import tailwind from "@/public/assets/languages/tailwind-css-2.svg";
import electron from "@/public/assets/languages/electron-1.svg";
import figma from "@/public/assets/languages/figma-icon.svg";
import git from "@/public/assets/languages/github-icon-1.svg";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef<HTMLElement>(null);

  const languages = [
    { name: "C", src: C },
    { name: "C++", src: Cpp },
    { name: "CSS", src: Css },
    { name: "HTML", src: Html },
    { name: "JavaScript", src: Js },
    { name: "Python", src: python },
    { name: "TypeScript", src: typescript },
  ];
  const frameworks = [
    { name: "React", src: react },
    { name: "Next.js", src: next },
    { name: "Tailwind", src: tailwind },
    { name: "Electron", src: electron },
  ];
  const tools = [
    { name: "Figma", src: figma },
    { name: "Git", src: git },
  ];
  useLayoutEffect(() => {
    gsap.fromTo(
      ".skill-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen/2 w-full flex flex-col justify-center px-4 lg:px-20 py-16"
    >
      <div className="w-full">
        <h2 className="text-4xl font-futura-bold text-shark-900 mb-16 text-center lg:text-left">
          Mes compétences
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="skill-card flex-1 bg-white rounded-2xl shadow-sm border border-shark-100 p-8">
            <h3 className="text-xl font-futura-semi text-shark-900 mb-6">
              Langages
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {languages.map(({ name, src }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-3 p-3 rounded-xl hover:bg-shark-50 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={src}
                      alt={name}
                      width={40}
                      height={40}
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="font-futura text-sm text-shark-700 text-center">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card flex-1 bg-white rounded-2xl shadow-sm border border-shark-100 p-8">
            <h3 className="text-xl font-futura-semi text-shark-900 mb-6">
              Frameworks & Librairies
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {frameworks.map(({ name, src }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-3 p-3 rounded-xl hover:bg-shark-50 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={src}
                      alt={name}
                      width={40}
                      height={40}
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="font-futura text-sm text-shark-700 text-center">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card flex-1 bg-white rounded-2xl shadow-sm border border-shark-100 p-8">
            <h3 className="text-xl font-futura-semi text-shark-900 mb-6">
              Outils
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {tools.map(({ name, src }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-3 p-3 rounded-xl hover:bg-shark-50 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={src}
                      alt={name}
                      width={40}
                      height={40}
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="font-futura text-sm text-shark-700 text-center">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
