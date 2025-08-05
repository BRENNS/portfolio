import * as assets from "@/public/assets/languages";

export type project = {
  name: string;
  description: string;
  techno: string[];
  tags: string[];
};

export const ProjectList: project[] = [
  {
    name: "Area",
    description: "Application similaire à Zapier",
    techno: ["React", "Flutter", "Nest.js"],
    tags: ["Frontend", "Backend", "DevOps"],
  },
  {
    name: "Aleph Hackaton",
    description: "Un simple projet de hackathon",
    techno: ["React", "Tailwind"],
    tags: ["Frontend", "Blockchain"],
  },
  {
    name: "Whanos",
    description: "Un simple CI/CD pour déployer un projet sur un cluster Kubernetes.",
    techno: ["Docker", "Kubernetes", "Jenkins"],
    tags: ["DevOps"],
  },
  {
    name: "Glados",
    description: "Analyseur et interpréteur de langage propriétaire en Haskell.",
    techno: ["Haskell"],
    tags: ["Programmation fonctionnelle"],
  },
  {
    name: "Image compressor",
    description: "Un simple compresseur d'images en Haskell",
    techno: ["Haskell"],
    tags: ["Programmation fonctionnelle"],
  },
  {
    name: "Arcade",
    description: "Un simple moteur de jeu en C++",
    techno: ["C++"],
    tags: ["Développement de jeux", "Programmation orientée objet"],
  },
  {
    name: "RayTracer",
    description: "Un simple raytracer en Rust",
    techno: ["Rust"],
    tags: ["Programmation orientée objet"],
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
