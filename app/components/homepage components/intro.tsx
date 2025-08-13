"use client";
import Image from "next/image";
import moi from "@/public/assets/moi.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLUListElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const social = socialRef.current;
    const bottom = bottomRef.current;

    if (!section || !image || !content || !social || !bottom) return;

    const tl = gsap.timeline();

    gsap.set([image, content, social, bottom], { opacity: 0, y: 30 });

    tl.to(image, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        content,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .to(
        social,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .to(
        bottom,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2",
      );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex flex-col justify-between items-center px-4 py-8"
      id="intro"
      aria-label="Introduction section"
    >
      <main className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center h-full justify-center max-w-6xl w-full">
        <div ref={imageRef} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <Image
            src={moi}
            alt="Steven Dong - Front-end Developer"
            className="h-48 w-48 rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105 shadow-2xl"
            priority
            width={192}
            height={192}
          />
        </div>
        <div
          ref={contentRef}
          className="font-futura-semi h-fit flex flex-col gap-6 w-full max-w-md"
        >
          <header className="text-center lg:text-left">
            <h2 className="text-lg lg:text-xl text-shark-600 mb-2">
              Salut, je m&apos;appelle
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-shark-900 mb-4 bg-gradient-to-r from-shark-800 to-shark-600 bg-clip-text text-transparent">
              Steven Dong
            </h1>
            <div className="flex flex-col sm:flex-row text-xl lg:text-2xl gap-1 items-center justify-center lg:justify-start">
              <p className="text-shark-700">et je suis</p>
              <div className="text-blue-600 font-semibold min-h-[1.5em] flex items-center">
                <Typewriter
                  options={{
                    strings: [
                      "développeur front-end",
                      "étudiant français",
                      "passionné d'UI/UX",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            </div>
          </header>
          <ul
            ref={socialRef}
            className="flex text-3xl gap-6 justify-center lg:justify-start"
            role="list"
            aria-label="Social media links"
          >
            <li>
              <a
                href="https://www.linkedin.com/in/steven-dong2003/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visiter le profil LinkedIn de Steven"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-[#0077B5]/10"
              >
                <FaLinkedin className="text-shark-600 group-hover:text-[#0077B5] transition-all duration-300 group-hover:scale-110" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  LinkedIn
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/BRENNS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visiter le profil GitHub de Steven"
                className="group relative p-2 rounded-full transition-all duration-300 hover:bg-shark-100"
              >
                <FaGithub className="text-shark-600 group-hover:text-shark-900 transition-all duration-300 group-hover:scale-110" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  GitHub
                </span>
              </a>
            </li>
          </ul>
        </div>
      </main>
      <footer
        ref={bottomRef}
        className="font-futura flex flex-col items-center text-lg lg:text-xl text-center max-w-5xl space-y-3 pb-8"
        role="contentinfo"
      >
        <p className="text-shark-700">
          Étudiant à <span className="font-semibold text-blue-600">EPITECH</span>
        </p>
        <p className="text-shark-600 leading-relaxed max-w-lg mb-4">
          Développeur freelance spécialisé dans la création d&apos;applications web fonctionnelles et qualitatives
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-shark-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600 text-lg">20+</span>
            <span>projets réalisés</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600 text-lg">3+</span>
            <span>ans d&apos;expérience</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Intro;