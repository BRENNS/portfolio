import Image from "next/image";
import moi from "@/public/assets/moi.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import epitechlogo from "@/public/assets/epitech_logo.png";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm border border-shark-100 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-shark-50 border-4 border-white shadow-lg">
                  <Image
                    src={moi}
                    alt="Steven Dong"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg border border-shark-100">
                  <Image
                    src={epitechlogo}
                    alt="EPITECH"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left order-2 lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-shark-600 font-futura text-lg">
                    Hello, je m&apos;appelle
                  </p>
                  <h1 className="text-4xl lg:text-5xl font-futura-bold text-shark-900">
                    Steven Dong
                  </h1>
                  <div className="text-xl lg:text-2xl font-futura-semi text-shark-700">
                    <Typewriter
                      options={{
                        strings: [
                          "Développeur Front-end",
                          "Étudiant à EPITECH Paris",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>

                <div className="h-px bg-shark-200 w-16 mx-auto lg:mx-0"></div>

                <div className="space-y-3">
                  <p className="text-lg lg:text-xl font-futura-semi text-shark-800 leading-relaxed">
                    Passionné par le développement et la création
                    d&apos;expériences numériques innovantes.
                  </p>

                  <p className="text-base lg:text-lg font-futura text-shark-600 leading-relaxed">
                    Étudiant à EPITECH Paris, je combine créativité et expertise
                    technique pour concevoir des solutions web modernes.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                <Link
                  href="https://www.linkedin.com/in/steven-dong2003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-shark-50 hover:bg-[#0077B5] text-shark-600 hover:text-white rounded-xl transition-all duration-300 border border-shark-200 hover:border-[#0077B5] hover:shadow-lg"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  href="https://github.com/BRENNS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-shark-50 hover:bg-shark-900 text-shark-600 hover:text-white rounded-xl transition-all duration-300 border border-shark-200 hover:border-shark-900 hover:shadow-lg"
                >
                  <FaGithub size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
