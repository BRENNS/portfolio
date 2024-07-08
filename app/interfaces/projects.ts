import projects from "@/app/components/homepage components/projects";
import * as assets from "@/app/assets/languages";

export type project = {
  name: string;
  description: string;
  techno: string[];
  tags: string[];
};

export const ProjectList: project[] = [
  {
    name: "Area",
    description: "Zappier like application",
    techno: ["React", "Flutter", "Nest.js"],
    tags: ["Frontend", "Backend", "DevOps"],
  },
  {
    name: "Aleph Hackaton",
    description: "A simple hackaton project",
    techno: ["React", "Tailwind"],
    tags: ["Frontend", "Blockchain"],
  },
  {
    name: "Whanos",
    description: "A simple CI/CD to deploy a project on a kubernetes cluster.",
    techno: ["Docker", "Kubernetes", "Jenkins"],
    tags: ["DevOps"],
  },
  {
    name: "Glados",
    description: "Own language parser and interpreter in Haskell.",
    techno: ["Haskell"],
    tags: ["Functional programming"],
  },
  {
    name: "Image compressor",
    description: "A simple image compressor in Haskell",
    techno: ["Haskell"],
    tags: ["Functional programming"],
  },
  {
    name: "Arcade",
    description: "A simple game engine in C++",
    techno: ["C++"],
    tags: ["Game development", "Object-Oriented Programming"],
  },
  {
    name: "RayTracer",
    description: "A simple raytracer in Rust",
    techno: ["Rust"],
    tags: ["Object-Oriented Programming"],
  },
];

export const languages = [
  { name: "C", src: assets.C },
  { name: "C++", src: assets.Cpp },
  { name: "CSS", src: assets.Css },
  { name: "HTML", src: assets.Html },
  { name: "JavaScript", src: assets.Js },
  { name: "Python", src: assets.python },
  { name: "TypeScript", src: assets.typescript },
  { name: "React", src: assets.react },
  { name: "Next.js", src: assets.next },
  { name: "Tailwind", src: assets.tailwind },
  { name: "Electron", src: assets.electron },
  { name: "Figma", src: assets.figma },
  { name: "Git", src: assets.git },
  { name: "Flutter", src: assets.flutter },
  { name: "Nest.js", src: assets.nestjs },
  { name: "Docker", src: assets.Docker },
  { name: "Jenkins", src: assets.Jenkins },
  { name: "Kubernetes", src: assets.Kubernetes },
  { name: "Haskell", src: assets.haskell },
  { name: "Rust", src: assets.rust },
];
export const projectPictures = [
  { name: "Area", src: assets.Area },
  { name: "Aleph Hackaton", src: assets.Aleph },
  { name: "Whanos", src: assets.Whanos },
  { name: "Glados", src: assets.Glados },
  { name: "Arcade", src: assets.Arcade },
  { name: "Image compressor", src: assets.ImageCompressor },
  { name: "RayTracer", src: assets.RayTracer },
];
