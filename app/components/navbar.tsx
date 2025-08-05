import Image from "next/image";
import logo from "@/public/assets/s-logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NavBar = ({
  Sections,
}: {
  Sections: { name: string; component: JSX.Element }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mappedItems = Sections.map(({ name, component }) => {
    return (
      <li key={name}>
        <AnchorLink href={`#${name}`} offset={"64px"} className="all_unset">
          <button onClick={() => setIsOpen(false)}>
            {name.charAt(0).toUpperCase()}
            {name.slice(1)}
          </button>
        </AnchorLink>
      </li>
    );
  });

  return (
    <nav
      className={`fixed ${isOpen ? "h-fit flex-col" : "h-14"} z-50 justify-between items-center transition-all flex duration-300 top-4 w-5/6 lg:w-3/4 rounded-xl bg-slate-50 bg-opacity-60 backdrop-blur-sm left-1/2 -translate-x-1/2`}
    >
      <div className={"flex w-full justify-between items-center"}>
        <Image
          src={logo}
          alt={"logo"}
          className={"object-contain max-h-14 h-full w-fit"}
        />
        <span className={"px-4 lg:hidden block"}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoClose className={"text-3xl"} />
            ) : (
              <MdMenu className={"text-3xl"} />
            )}
          </button>
        </span>
        <span className={"w-fit px-4 lg:block hidden"}>
          <ul className={"h-full flex items-center gap-14 font-futura-semi"}>
            {mappedItems}
          </ul>
        </span>
      </div>
      {isOpen && (
        <div
          className={"flex items-center justify-center w-full bg-opacity-70"}
        >
          <ul
            className={
              "h-fit flex flex-col text-center leading-[70px] font-futura-semi"
            }
          >
            {mappedItems}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
