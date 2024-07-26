import { useCallback, useEffect, useState } from "react";
import { FaCheck, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import bye from "@/app/assets/bye.png";
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
  } = useContact();

  return (
    <section className={"h-full w-full px-[10%] pb-[10%]"}>
      <div className={"w-full bg-slate-50 rounded-xl flex h-full"}>
        <ContactSideContent />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"w-1/2 h-full flex flex-col justify-center"}
        >
          <fieldset>
            <ContactInput
              type={"Email"}
              textfield={false}
              register={register}
            />
            <ContactInput type={"Name"} textfield={false} register={register} />
            <ContactInput
              type={"Message"}
              textfield={true}
              register={register}
            />
          </fieldset>
          <FlyingButton
            sent={sent}
            setIsSubmit={setIsSubmit}
            isSubmit={isSubmit}
            setSent={setSent}
          />
        </form>
      </div>
    </section>
  );
};

const ContactSideContent = () => {
  return (
    <aside
      className={"w-1/2 h-full flex flex-col items-center justify-between"}
    >
      <div></div>
      <header>
        <h1 className={"text-4xl font-futura-bold whitespace-nowrap"}>
          Contact
        </h1>
        <p className={"font-futura-semi"}>
          Get in touch
          <br />
          Feel free to connect on social media
        </p>
        <ul className={"flex text-4xl gap-4"}>
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
      </header>
      <Image src={bye} alt={"bye"} className={"w-56"} />
    </aside>
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
  return (
    <div className="w-full max-w-full p-5 rounded-lg font-futura">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="unique-input"
      >
        {type}
      </label>
      {!textfield ? (
        <input
          required={true}
          className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
          placeholder={type}
          type="text"
          {...register(type)}
          id="unique-input"
        />
      ) : (
        <textarea
          required={true}
          className="text-sm custom-input resize-none min-h-40 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
          placeholder={type}
          {...register(type)}
          id="unique-input"
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
}: {
  sent: boolean;
  isSubmit: boolean;
  setSent: (args: boolean) => void;
  setIsSubmit: (value: ((prevState: boolean) => boolean) | boolean) => void;
}) => {
  const [success, setSuccess] = useState(false);
  const [successAnimation, setSuccessAnimation] = useState(false);

  useEffect(() => {
    let successTimeout: NodeJS.Timeout;
    let animationTimeout: NodeJS.Timeout;

    if (sent) {
      successTimeout = setTimeout(() => {
        setIsSubmit(false);
        setSuccess(true);
      }, 1000);
    }

    if (success) {
      animationTimeout = setTimeout(() => {
        setSuccessAnimation(true);
      }, 300);
    }

    if (successAnimation) {
      setTimeout(() => {
        setSuccessAnimation(false);
        setSuccess(false);
        setIsSubmit(false);
        setSent(false);
      }, 1000);
    }

    return () => {
      clearTimeout(successTimeout);
      clearTimeout(animationTimeout);
    };
  }, [sent, success, successAnimation, setIsSubmit, setSent]);

  return (
    <button
      className={`relative flex mx-5 items-center min-h-[40px] w-28 text-white py-2 px-4 min-w-28 group rounded-lg transition-all duration-300 transform active:scale-95 overflow-hidden ${successAnimation ? "bg-green-600" : "bg-blue-600"} transition-all duration-300`}
    >
      <div
        className={`transition-all duration-300 ${isSubmit ? "rotate-45 translate-x-full" : ""} ${success ? "translate-x-[400%]" : ""} ${successAnimation ? "translate-x-[200%]" : ""}`}
      >
        {!successAnimation ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={`transform transition-transform ${isSubmit ? "animate-fly" : "mr-3"}`}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        ) : (
          <div>
            <FaCheck />
          </div>
        )}
      </div>
      <span className={`transition-transform ${isSubmit ? "hidden" : "block"}`}>
        {sent ? "" : <p>Send</p>}
      </span>
    </button>
  );
};

export default Contact;
