import {
  languages,
  project,
  ProjectList,
  projectPictures,
} from "@/app/interfaces/projects";
import Image, { StaticImageData } from "next/image";
import * as assets from "@/app/assets/languages/index";
import { useRef, useState } from "react";

const Projects = () => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const extractTags = (projects: project[]) => {
    const allTags = projects.flatMap((project) => project.tags);
    const uniqueTags = Array.from(new Set(allTags));
    return uniqueTags;
  };

  const tags = extractTags(ProjectList);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current!.offsetLeft;
    scrollLeft.current = scrollContainerRef.current!.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = x - startX.current;
    scrollContainerRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section
      className={
        "h-screen lg:h-full w-full flex flex-col gap-16 justify-center"
      }
    >
      <header className={"px-[20%] h-fit"}>
        <h1 className={"text-4xl font-futura-bold"}>My projects</h1>
      </header>
      <section className={"h-3/4 lg:px-16"}>
        <DisplayFilter
          tags={tags}
          activeTags={activeTags}
          setActiveTags={setActiveTags}
        />
        <div
          className={"h-fit w-full overflow-x-auto flex gap-4 p-4 rounded-xl"}
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
        >
          {ProjectList.map(({ name, description, techno, tags }, index) => {
            const picture = projectPictures.find(
              (picture) => picture.name === name,
            )?.src;
            if (
              activeTags.length > 0 &&
              !tags.some((tag) => activeTags.includes(tag))
            ) {
              return null;
            }

            return (
              <article
                key={index}
                className={
                  "min-w-[400px] w-[400px] hover:scale-105 select-none hover:rotate-1 transition-all duration-100 flex h-fit hover:bg-slate-100 rounded-xl flex-col"
                }
              >
                <div className={"bg-slate-50 h-72 w-full rounded-xl"}>
                  <Image
                    src={picture as StaticImageData}
                    className={`h-full w-full object-cover select-none pointer-events-none ${name === "Arcade" ? "object-left" : ""} rounded-xl`}
                    alt={name}
                  />
                </div>
                <DisplayProjectInformations
                  name={name}
                  description={description}
                  techno={techno}
                  tags={tags}
                />
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
};

const DisplayProjectInformations = ({
  name,
  description,
  techno,
  tags,
}: {
  name: string;
  description: string;
  techno: string[];
  tags: string[];
}) => {
  return (
    <span className={"p-2 flex flex-col pointer-events-none select-none gap-2"}>
      <h1 className={"font-futura-semi"}>{name}</h1>
      <p className={"font-futura"}>{description}</p>
      <div className={"flex gap-4 h-10 items-center"}>
        {techno.map((item, index) => (
          <div className={"h-full w-10"} key={index}>
            <Image
              src={languages.find((lang) => lang.name === item)?.src as string}
              className={"object-contain h-full w-full"}
              alt={name}
            />
          </div>
        ))}
      </div>
      <div className={"flex gap-4"}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={
              "bg-slate-50 text-slate-500 px-2 py-1 rounded-xl text-sm"
            }
          >
            {tag}
          </span>
        ))}
      </div>
    </span>
  );
};

const DisplayFilter = ({
  tags,
  activeTags,
  setActiveTags,
}: {
  tags: string[];
  activeTags: string[];
  setActiveTags: (args: string[]) => void;
}) => {
  return (
    <div className={"w-full flex overflow-x-auto justify-center"}>
      <ul className={"flex gap-4"}>
        {tags.map((tag, index) => (
          <li key={index}>
            <button
              onClick={() => {
                if (activeTags.includes(tag)) {
                  setActiveTags(activeTags.filter((t) => t !== tag));
                } else {
                  setActiveTags([...activeTags, tag]);
                }
              }}
              className={`hover:bg-slate-200 rounded-full lg:text-base text-sm font-futura px-4 py-2 ${activeTags.includes(tag) ? "bg-slate-200" : "bg-slate-50"} transition-all whitespace-nowrap duration-300`}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
