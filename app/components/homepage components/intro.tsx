import Image from "next/image";
import moi from "@/app/assets/moi.png";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import epitechlogo from "@/app/assets/epitech_logo.png";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectioncontainer = useRef(null);
  const introcontainer = useRef(null);
  const epitechText = useRef(null);
  const epitechLogo = useRef(null);

  useEffect(() => {
    gsap.set(epitechLogo.current, { display: "hidden", width: "0" });

    ScrollTrigger.create({
      trigger: sectioncontainer.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(epitechText.current, {
          opacity: 0,
          duration: 0.1,
          display: "none",
        });
        gsap.to(epitechLogo.current, {
          opacity: 1,
          delay: 0.3,
          duration: 0.3,
          display: "block",
          width: "100%",
        });
        gsap.to(introcontainer.current, {
          width: "300px",
          duration: 0.5,
        });
      },
    });
  }, []);

  return (
    <section
      ref={sectioncontainer}
      className={"h-screen w-full flex flex-col justify-between items-center"}
    >
      <div></div>
      <span className={"flex-col gap-14 lg:flex-row flex items-center"}>
        <Image src={moi} alt={"moi"} className={"h-48 w-48"} />
        <div className={"font-futura-semi h-fit flex flex-col gap-4 w-72"}>
          <header>
            <h2>Hi, my name is</h2>
            <h1 className={"text-3xl"}>Steven Dong</h1>
            <span className={"flex text-xl gap-1"}>
              <p>and I'm a</p>
              <Typewriter
                options={{
                  strings: ["Front-end developer", "French student"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </header>
          <ul className={"flex text-2xl gap-4"}>
            <li>
              <a
                href={"https://www.linkedin.com/in/steven-dong2003/"}
                target={"_blank"}
              >
                <FaLinkedin
                  className={"hover:text-[#0077B5] transition-all duration-300"}
                />
              </a>
            </li>
            <li>
              <a href={"https://github.com/BRENNS"} target={"_blank"}>
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </span>
      <div
        className={
          "font-futura flex flex-col items-center text-xl lg:text-2xl text-center"
        }
      >
        <p className={"flex lg:flex-row flex-col items-center lg:items-end"}>
          I am a student at
          <div
            ref={introcontainer}
            className={"relative flex w-fit h-fit items-start ml-2"}
          >
            <p ref={epitechText}>EPITECH</p>
            <Image
              ref={epitechLogo}
              src={epitechlogo}
              alt={"epitech"}
              className={"w-full object-contain top-0 left-0 opacity-0"}
            />
          </div>
        </p>
        , and I am passionate about development.
        <p>I am eager to learn more and expand my knowledge in this field.</p>
      </div>
    </section>
  );
};

export default Intro;
