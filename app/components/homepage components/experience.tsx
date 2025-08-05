import Image from "next/image";
import flatway from "@/public/assets/logoflatnew.png";
import flatway_phone from "@/public/assets/phone_design.png";
import flatway_computer from "@/public/assets/computer_design.png";
import lettre from "@/public/assets/img.png";
import facteur from "@/public/assets/facteur-1-lettre-1-sourire.gif";
import {
  react,
  typescript,
  tailwind,
  python,
  git,
  Docker,
  figma,
} from "@/public/assets/languages";
import { useState } from "react";

const Experience = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-futura-bold text-shark-900 mb-4">
            Mes expériences
          </h1>
          <div className="w-24 h-1 bg-shark-300 mx-auto rounded-full"></div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <ExperienceCard
            company="Flatway"
            job="Développeur Front-end"
            period="2023 - 2024"
            logo={flatway}
            url="https://www.flatway.fr/"
            description="Développement d'un site web interactif et d'une application desktop avec React, TypeScript et Tailwind CSS. Création de composants React, intégration d'API, et déploiement avec Electron."
            technologies={[react, typescript, tailwind, figma, git, Docker]}
            images={[flatway_computer, flatway_phone]}
            color="bg-red-50 border-red-100"
            accentColor="text-red-600"
          />

          <ExperienceCard
            company="1 Lettre 1 Sourire"
            job="Développeur Front-end"
            period="2023 - 2023"
            logo={lettre}
            url="https://1lettre1sourire.org/"
            description="Maintenance et amélioration d'un site WordPress interactif. Développement de nouvelles fonctionnalités et refonte avec Python Flask pour une meilleure architecture."
            technologies={[python]}
            images={[facteur]}
            color="bg-yellow-50 border-yellow-100"
            accentColor="text-yellow-600"
          />
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  company: string;
  job: string;
  period: string;
  logo: any;
  url: string;
  description: string;
  technologies: any[];
  images: any[];
  color: string;
  accentColor: string;
}

const ExperienceCard = ({
  company,
  job,
  period,
  logo,
  url,
  description,
  technologies,
  images,
  color,
  accentColor,
}: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${color} border-2 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-lg`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-sm border border-shark-100">
            <Image
              src={logo}
              alt={company}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-futura-bold text-shark-900">
              {company}
            </h3>
            <p className={`font-futura-semi ${accentColor} text-lg`}>{job}</p>
            <p className="font-futura text-shark-600 text-sm">{period}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="font-futura text-shark-700 leading-relaxed text-base lg:text-lg">
          {description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="font-futura-semi text-shark-800 mb-3">
          Technologies utilisées
        </h4>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-shark-100"
            >
              <Image
                src={tech}
                alt="Technology"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Images Preview */}
      <div className="mb-6">
        <div className="h-40  p-4 flex items-center justify-center relative overflow-hidden">
          {company === "Flatway" && (
            <>
              <Image
                src={flatway_phone}
                alt="Flatway mobile"
                className="object-scale-down h-3/4 absolute bottom-0 left-4"
              />
              <Image
                src={flatway_computer}
                alt="Flatway desktop"
                className="object-scale-down h-full"
              />
            </>
          )}
          {company === "1 Lettre 1 Sourire" && (
            <Image
              src={facteur}
              alt="1 Lettre 1 Sourire"
              className="object-scale-down h-4/6"
            />
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-shark-900 hover:bg-shark-800 text-white font-futura-semi py-3 px-6 rounded-xl transition-all duration-300 text-center"
        >
          Visiter le site
        </a>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-white hover:bg-shark-50 text-shark-700 font-futura-semi py-3 px-6 rounded-xl border border-shark-200 transition-all duration-300"
        >
          {isExpanded ? "Moins" : "Plus"}
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-shark-200">
          <div className="space-y-4">
            <div>
              <h5 className="font-futura-bold text-shark-800 mb-2">
                Détails techniques
              </h5>
              <p className="font-futura text-shark-600 text-sm leading-relaxed">
                Projet développé avec attention aux bonnes pratiques,
                optimisation des performances et expérience utilisateur moderne.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
