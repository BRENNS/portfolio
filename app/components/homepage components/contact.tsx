import { useCallback, useEffect, useState } from "react";
import { FaCheck, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import bye from "@/public/assets/bye.png";
import { useContact } from "@/app/hooks/contact.hooks";

const Contact = () => {
  const {
    handleSubmit,
    register,
    onSubmit,
    sent,
    isSubmit,
    setIsSubmit,
    setSent,
    success,
    setSuccess,
  } = useContact();

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 lg:px-8 py-16 bg-gradient-to-br from-shark-50/30 via-white to-shark-50/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-futura-bold text-shark-900 mb-4">
            Contactez-moi
          </h2>
          <div className="w-24 h-1 bg-shark-900 mx-auto mb-6"></div>
          <p className="text-lg text-shark-600 font-futura max-w-2xl mx-auto">
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-shark-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            <ContactSideContent />
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-6">
                  <ContactInput
                    type={"Name"}
                    textfield={false}
                    register={register}
                  />
                  <ContactInput
                    type={"Email"}
                    textfield={false}
                    register={register}
                  />
                  <ContactInput
                    type={"Message"}
                    textfield={true}
                    register={register}
                  />
                </div>
                <FlyingButton
                  sent={sent}
                  setIsSubmit={setIsSubmit}
                  isSubmit={isSubmit}
                  setSent={setSent}
                  success={success}
                  setSuccess={setSuccess}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSideContent = () => {
  return (
    <div className="bg-gradient-to-br from-shark-900 via-shark-800 to-shark-900 px-8 lg:px-12 pt-8 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-shark-900/50 to-transparent"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h3 className="text-3xl lg:text-4xl font-futura-bold text-white mb-4">
            Travaillons ensemble
          </h3>
          <div className="w-16 h-1 bg-white/30 mb-6"></div>
          <p className="text-shark-200 font-futura text-lg leading-relaxed mb-8">
            Vous avez un projet passionnant ?
            <br />
            Contactez-moi pour en discuter et créer quelque chose
            d&apos;exceptionnel ensemble.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-shark-200">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <p className="font-futura-semi text-white">Email</p>
              <p className="font-futura text-sm">steven.dong@epitech.eu</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-shark-200">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-futura-semi text-white">Localisation</p>
              <p className="font-futura text-sm">Paris, France</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 z-10">
        <div className="flex items-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/steven-dong2003/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-[#0077B5] text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/BRENNS"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-white hover:text-shark-900 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={bye}
            alt="Illustration de contact"
            width={200}
            height={200}
            className="object-contain opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

const ContactInput = ({
  type,
  textfield,
  register,
}: {
  type: string;
  textfield: boolean;
  register: any;
}) => {
  const inputId = `contact-${type.toLowerCase()}`;
  const inputType = type === "Email" ? "email" : "text";

  return (
    <div className="space-y-2">
      <label
        className="block text-shark-700 font-futura-semi text-sm"
        htmlFor={inputId}
      >
        {type}
      </label>
      {!textfield ? (
        <input
          required={true}
          className="w-full px-4 py-3 border border-shark-200 rounded-xl bg-shark-50/50 font-futura text-shark-900 placeholder-shark-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-shark-900/20 focus:border-shark-900 hover:border-shark-300"
          placeholder={`Votre ${type.toLowerCase()}`}
          type={inputType}
          {...register(type)}
          id={inputId}
        />
      ) : (
        <textarea
          required={true}
          className="w-full px-4 py-3 border border-shark-200 rounded-xl bg-shark-50/50 font-futura text-shark-900 placeholder-shark-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-shark-900/20 focus:border-shark-900 hover:border-shark-300 resize-none min-h-[120px]"
          placeholder="Votre message..."
          {...register(type)}
          id={inputId}
        />
      )}
    </div>
  );
};

const FlyingButton = ({
  sent,
  setSent,
  isSubmit,
  setIsSubmit,
  success,
  setSuccess,
}: {
  sent: boolean;
  isSubmit: boolean;
  setSent: (args: boolean) => void;
  setIsSubmit: (value: ((prevState: boolean) => boolean) | boolean) => void;
  success: boolean | null;
  setSuccess: (success: boolean | null) => void;
}) => {
  const [animationState, setAnimationState] = useState<
    "idle" | "sending" | "success" | "error" | "complete"
  >("idle");

  const resetToIdle = useCallback(() => {
    setAnimationState("idle");
    setIsSubmit(false);
    setSent(false);
    setSuccess(null);
  }, [setIsSubmit, setSent, setSuccess]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (sent && animationState === "idle") {
      setAnimationState("sending");
    }

    if (success !== null && animationState === "sending") {
      setIsSubmit(false);
      if (success === true) {
        setAnimationState("success");
      } else if (success === false) {
        setAnimationState("error");
      }

      timeoutId = setTimeout(() => {
        setAnimationState("complete");

        setTimeout(() => {
          resetToIdle();
        }, 1200);
      }, 800);
    }

    return () => clearTimeout(timeoutId);
  }, [sent, success, animationState, setIsSubmit, resetToIdle]);

  const getButtonStyles = () => {
    const baseStyles =
      "relative flex items-center justify-center min-h-[48px] w-full sm:w-auto sm:px-8 py-3 px-6 font-futura-semi rounded-xl transition-all duration-500 transform active:scale-95 overflow-hidden disabled:cursor-not-allowed";

    switch (animationState) {
      case "success":
      case "complete":
        return `${baseStyles} bg-green-500 text-white scale-105 shadow-lg`;
      case "error":
        return `${baseStyles} bg-red-500 text-white scale-105 shadow-lg`;
      case "sending":
        return `${baseStyles} bg-shark-200 text-shark-600 cursor-wait`;
      default:
        return `${baseStyles} bg-shark-900 text-white hover:bg-shark-800 hover:shadow-lg`;
    }
  };

  const getIconTransform = () => {
    switch (animationState) {
      case "sending":
        return "rotate-45 translate-x-16 opacity-0";
      case "success":
      case "error":
        return "translate-x-0 scale-110";
      case "complete":
        return "translate-x-0 scale-100";
      default:
        return "translate-x-0";
    }
  };

  return (
    <button
      type="submit"
      disabled={isSubmit || animationState !== "idle"}
      className={getButtonStyles()}
      aria-label={
        animationState === "idle" ? "Envoyer le message" : "Envoi en cours"
      }
    >
      <div className="relative flex items-center justify-center w-full">
        <div
          className={`absolute transition-all duration-500 ease-out ${getIconTransform()}`}
        >
          {animationState === "success" || animationState === "complete" ? (
            <FaCheck className="w-5 h-5 text-green-600" />
          ) : animationState === "error" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="w-5 h-5 text-red-600"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="transform transition-transform duration-300"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              />
            </svg>
          )}
        </div>

        {animationState === "sending" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-shark-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </button>
  );
};

export default Contact;
