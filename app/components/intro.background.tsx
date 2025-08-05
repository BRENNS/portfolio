"use client";
import logo from "@/public/assets/s-logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function ProfessionalLoader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initialisation");

  const loadingSteps = [
    { text: "Initialisation", duration: 300 },
    { text: "Chargement du portfolio", duration: 400 },
    { text: "Préparation de la vitrine", duration: 300 },
    { text: "Presque prêt", duration: 300 },
  ];

  useEffect(() => {
    let currentStep = 0;
    let currentProgress = 0;

    const updateLoader = () => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text);

        const stepProgress = 100 / loadingSteps.length;
        const targetProgress = (currentStep + 1) * stepProgress;

        const progressInterval = setInterval(() => {
          currentProgress += 2;
          setProgress(Math.min(currentProgress, targetProgress));

          if (currentProgress >= targetProgress) {
            clearInterval(progressInterval);
            currentStep++;
            setTimeout(updateLoader, 100);
          }
        }, loadingSteps[currentStep].duration / 50);
      }
    };

    updateLoader();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-white">
      <div className="relative mb-16">
        <div className="relative p-4">
          <Image
            src={logo}
            alt="Steven Dong Logo"
            width={120}
            height={120}
            className="object-contain opacity-90"
          />
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-futura-semi text-black mb-3">
          Steven Dong
        </h2>
        <p className="text-shark-600 text-lg font-futura">{loadingText}</p>
      </div>

      <div className="w-72 bg-shark-200 rounded-full h-1 mb-6 overflow-hidden">
        <div
          className="h-full bg-black rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Points animés minimalistes */}
      <div className="flex space-x-3 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-shark-400 rounded-full animate-pulse"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: "1.5s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

const IntroBackground = () => {
  return (
    <div
      className={`h-screen transition-all duration-500 w-full flex items-center relative justify-center`}
    >
      <ProfessionalLoader />
    </div>
  );
};

export default IntroBackground;
