import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import flatway from "@/app/assets/logoflatnew.png";
import flatway_phone from "@/app/assets/phone_design.png";
import flatway_computer from "@/app/assets/computer_design.png";
import lettre from "@/app/assets/img.png";
import facteur from "@/app/assets/facteur-1-lettre-1-sourire.gif";
import {
  react,
  Html,
  Css,
  typescript,
  tailwind,
  python,
  git,
  Docker,
  figma,
} from "@/app/assets/languages";
import { hexToRgba } from "@/app/utils/hex_to_rgba";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);
const Experience = () => {
  return (
    <section
      className={"experience h-full w-full flex flex-col gap-16 justify-center"}
    >
      <header className={"px-[20%] h-fit"}>
        <h1 className={"text-4xl font-futura-bold whitespace-nowrap"}>
          My experiences
        </h1>
      </header>
      <section
        className={"w-full h-full lg:h-3/4 flex flex-col lg:flex-row gap-4 p-4"}
      >
        <ExperienceCard
          job={"Front-end developer"}
          color={"#980000"}
          picture={flatway}
          url={"https://www.flatway.fr/"}
          description={
            "In this project, my role involved developing an interactive website using React, TypeScript, and Tailwind CSS. This included creating React components and utilizing TypeScript for better code management, integrating responsive styles with Tailwind CSS, and making API calls for data management. Additionally, I developed a desktop application using React, Electron, TypeScript, and Tailwind CSS. This involved using Electron for desktop deployment and implementing TypeScript to ensure robust code. I was responsible for selecting and implementing the appropriate technologies for both projects."
          }
          languages={[react, typescript, tailwind, figma, git, Docker]}
        >
          <span
            className={"flex h-4/6 w-full items-center justify-center relative"}
          >
            <Image
              src={flatway_phone}
              alt={"flatway"}
              className={"object-scale-down h-3/4 absolute bottom-0 left-10"}
            />
            <Image
              src={flatway_computer}
              alt={"flatway computer"}
              className={"object-scale-down h-full"}
            />
          </span>
        </ExperienceCard>
        <ExperienceCard
          color={"#f9d564"}
          picture={lettre}
          job={"Front-end developer"}
          url={"https://1lettre1sourire.org/"}
          description={
            "In this project, my role involves maintaining and enhancing an interactive WordPress site. This includes creating letters directly on the site, integrating various participating organizations, and modifying components or plugins as needed. Additionally, I am part of a team responsible for redesigning the site using Python Flask, which involves creating new pages and structuring the project for better organization and scalability."
          }
          languages={[python]}
        >
          <Image
            src={facteur}
            alt={"facteur"}
            className={"object-scale-down h-4/6"}
          />
        </ExperienceCard>
      </section>
    </section>
  );
};

const ExperienceCard = ({
  color,
  picture,
  job,
  children,
  url,
  description,
  languages,
}: {
  color: string;
  picture: {};
  job: string;
  children: JSX.Element;
  url: string;
  description: string;
  languages: {}[];
}) => {
  const colorWithOpacity = hexToRgba(color, 0.1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      style={{ backgroundColor: colorWithOpacity }}
      className={`lg:w-1/2 h-full flex flex-col relative justify-between overflow-hidden items-center p-16 rounded-lg`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-slate-50 h-full w-full bg-opacity-50 backdrop-blur p-[10%] absolute flex-col justify-between top-0 z-20 ${!isOpen ? "hidden" : "flex"}`}
      >
        <p className={"font-futura-semi"}>{description}</p>
        <ul className={"flex gap-4"}>
          {languages.map(({ src, name }) => (
            <li key={name} className={"flex flex-col items-center"}>
              <Image
                src={src}
                alt={name}
                className={"h-14 w-14"}
                width={"14"}
                height={"14"}
              />
              <span className={"font-futura"}>{name}</span>
            </li>
          ))}
        </ul>
      </button>

      <header className={"h-1/6 flex flex-col gap-4 justify-center"}>
        <Image
          src={picture}
          alt={picture}
          className={"h-[80%]  object-scale-down"}
        />
        <span className={"h-[20%] w-full flex flex-col gap-2 items-center"}>
          <p className={"text-lg font-semibold"}>{job}</p>
          <ul className={"flex items-center gap-4"}>
            <li>
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ backgroundColor: color }}
                className={`button text-white`}
              >
                En savoir plus
              </button>
            </li>
            <li>
              <a
                href={url}
                target={"_blank"}
                style={{ color: color, borderColor: color }}
                className={`button_primary hover:bg-[${color}] h-auto hover:text-white`}
              >
                Visiter
              </a>
            </li>
          </ul>
        </span>
      </header>
      {children}
    </article>
  );
};

export default Experience;
