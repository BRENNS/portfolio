"use client";
import Navbar from "@/app/components/navbar";
import IntroBackground from "@/app/components/intro.background";
import Footer from "@/app/components/footer";
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
  return (
    <main
      className={`w-full flex flex-col text-black bg-white relative h-auto overflow-x-hidden justify-center items-center`}
    >
      <Navbar Sections={Sections} />
      {Sections.map(({ name, component }, index) => {
        return (
          <div
            key={name}
            id={name}
            className={"w-full bg-white transition-all duration-300"}
          >
            {component}
          </div>
        );
      })}
      <Footer />
    </main>
  );
}
