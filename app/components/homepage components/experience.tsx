import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import flatway from "@/app/assets/logoflatnew.png";
import flatway_phone from "@/app/assets/phone_design.png";
import flatway_computer from "@/app/assets/computer_design.png";
import lettre from "@/app/assets/img.png";
import facteur from "@/app/assets/facteur-1-lettre-1-sourire.gif";
import { hexToRgba } from "@/app/utils/hex_to_rgba";

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
}: {
  color: string;
  picture: string;
  job: string;
  children: JSX.Element;
  url: string;
}) => {
  const colorWithOpacity = hexToRgba(color, 0.1);

  return (
    <article
      style={{ backgroundColor: colorWithOpacity }}
      className={`lg:w-1/2 h-full flex flex-col justify-between items-center p-16 rounded-lg`}
    >
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
