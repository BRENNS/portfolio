import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import C from "../../assets/languages/c.svg";
import Cpp from "../../assets/languages/c++.svg";
import Css from "../../assets/languages/css-3.svg";
import Html from "../../assets/languages/html-1.svg";
import Js from "../../assets/languages/js.svg";
import python from "../../assets/languages/python.svg";
import react from "../../assets/languages/react.svg";
import typescript from "../../assets/languages/typescript.svg";
import next from "../../assets/languages/next-js.svg";
import tailwind from "../../assets/languages/tailwind-css-2.svg";
import electron from "../../assets/languages/electron-1.svg";
import figma from "../../assets/languages/figma-icon.svg";
import git from "../../assets/languages/github-icon-1.svg";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
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
      ".card",
      { x: 1500 },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".container",
          start: "top 130%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <section
      className={
        "container h-screen lg:h-full w-full flex flex-col gap-16 justify-center pl-[5%] lg:px-[20%]"
      }
    >
      <h1 className={"text-4xl font-futura-bold lg:ml-0 ml-[15%]"}>
        My skills
      </h1>
      <span className={"flex gap-12 lg:overflow-visible overflow-x-auto"}>
        <article
          className={
            "card min-w-72 bg-slate-50 rounded-xl flex gap-4 flex-col px-4 py-2"
          }
        >
          <h1 className={"text-xl font-futura-semi"}>Languages</h1>
          <ul className={"w-full flex flex-wrap gap-3 justify-center"}>
            {languages.map(({ name, src }) => (
              <li
                key={name}
                className={"w-1/4 flex flex-col justify-center items-center"}
              >
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src={src} alt={name} className={"h-14 w-14"} />
                <span className={"font-futura"}>{name}</span>
              </li>
            ))}
          </ul>
        </article>
        <article
          className={
            "card min-w-72 bg-slate-50 rounded-xl flex gap-4 flex-col px-4 py-2"
          }
        >
          <h1 className={"text-xl font-futura-semi"}>
            Libraries and frameworks
          </h1>
          <ul className={"w-full flex flex-wrap gap-3 justify-center"}>
            {frameworks.map(({ name, src }) => (
              <li
                key={name}
                className={"w-1/4 flex flex-col justify-center items-center"}
              >
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src={src} alt={name} className={"h-14 w-14"} />
                <span className={"font-futura"}>{name}</span>
              </li>
            ))}
          </ul>
        </article>
        <article
          className={
            "card min-w-72 bg-slate-50 rounded-xl flex gap-4 flex-col px-4 py-2"
          }
        >
          <h1 className={"text-xl font-futura-semi"}>Tools</h1>
          <ul className={"w-full flex flex-wrap gap-3 justify-center"}>
            {tools.map(({ name, src }) => (
              <li
                key={name}
                className={"w-1/4 flex flex-col justify-center items-center"}
              >
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src={src} alt={name} className={"h-14 w-14"} />
                <span className={"font-futura"}>{name}</span>
              </li>
            ))}
          </ul>
        </article>
      </span>
    </section>
  );
};

export default Skills;
