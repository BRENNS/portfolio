"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import IntroBackground from "@/app/components/intro.background";
import { SectionId } from "@/app/interfaces/section.id";
import Intro from "@/app/components/homepage components/intro";
import Experience from "@/app/components/homepage components/experience";
import Projects from "@/app/components/homepage components/projects";
import Contact from "@/app/components/homepage components/contact";
import Skills from "@/app/components/homepage components/skills";

const Sections = [
  {
    name: SectionId.intro,
    component: <Intro />,
  },
  {
    name: SectionId.skills,
    component: <Skills />,
  },
  {
    name: SectionId.experience,
    component: <Experience />,
  },
  {
    name: SectionId.projects,
    component: <Projects />,
  },
  {
    name: SectionId.contact,
    component: <Contact />,
  },
];

export default function Home() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 1300);
  }, []);

  return (
    <main
      className={`relative w-full flex flex-col text-black ${display ? "bg-slate-50 h-fit" : "bg-white h-screen"} overflow-x-hidden justify-center items-center`}
    >
      <Navbar display={display} Sections={Sections} />
      <IntroBackground display={display} />
      {Sections.map(({ name, component }, index) => {
        if (!display) return;
        return (
          <div
            key={name}
            id={name}
            className={
              "w-full lg:h-screen bg-white transition-all duration-300"
            }
          >
            {component}
          </div>
        );
      })}
    </main>
  );
}
