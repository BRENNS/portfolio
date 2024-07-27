"use client";
import videogames from "../assets/video games.svg";
import food from "../assets/food.svg";
import voyage from "../assets/voyage.svg";
import dev from "../assets/dev.svg";
import music from "../assets/music.svg";
import money from "../assets/money.svg";
import sneakers from "../assets/sneakers.svg";
import logo from "../assets/s-logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function DisplayImage() {
  const images = [logo, videogames, food, voyage, dev, music, money, sneakers];
  const [displayIndex, setDisplayIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex === images.length) {
          clearInterval(interval);
        }
        return newIndex % images.length;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <ul>
        <li key={displayIndex}>
          <Image src={images[displayIndex]} alt={`Image ${displayIndex}`} />
        </li>
      </ul>
    </div>
  );
}

const IntroBackground = ({ display }: { display: boolean }) => {
  return (
    <div
      className={`${display ? "h-5" : "h-screen"} transition-all duration-300 w-full flex items-center relative justify-center`}
    >
      {!display && <DisplayImage />}
    </div>
  );
};

export default IntroBackground;
