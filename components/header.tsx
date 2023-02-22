import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import useScrollPosition from "./utils/scroll-position";

import classNames from "classnames";

import logo from "../public/logos/simone-snoyman-physiotherapy-logo.png";
import menuIcon from "../public/icons/menu-icon.svg";
import closeIcon from "../public/icons/close-icon.svg";

import menuList from "../data/menuList.json";

interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`fixed w-full drop-shadow-md border-b-2 border-darkBlue ${cssClasses}`}
    >
      {!menuToggle && (
        <div
          className={classNames(
            "px-[20px] py-6 flex justify-between gap-6 bg-beige",
            {
              "h-[90px]": scrollPosition > 0,
            }
          )}
        >
          <Link href="/" className="flex gap-4 items-center">
            <Image
              src={logo}
              alt="Simone Snoyman Physiontherapy logo"
              className={classNames(
                "w-[100px] h-auto transform ease-in-out duration-[150ms]",
                {
                  "scale-[45%] -translate-y-0.5 -translate-x-5":
                    scrollPosition > 0,
                }
              )}
            />
            <div
              className={classNames("transform ease-in-out duration-[400ms]", {
                " -translate-y-28": scrollPosition > 0,
              })}
            >
              <h1 className="flex flex-col">
                <span className="font-amatic_sc tracking-[0.11rem] text-[2.25rem] text-lightBlue1">
                  SIMONE SNOYMAN
                </span>
                <span className="font-bebas_neue text-[2.5rem] text-darkBlue -mt-2.5 -mb-2">
                  PHYSIOTHERAPY
                </span>
              </h1>
              <h2 className="font-lato font-thin text-[1rem]">
                Plettenberg Bay
              </h2>
            </div>
          </Link>
          <button
            onClick={() => setMenuToggle(!menuToggle)}
            className={classNames(
              "h-16 w-16 grid place-items-center my-auto transform ease-in-out duration-[150ms]",
              {
                "-translate-y-2.5": scrollPosition > 0,
              }
            )}
          >
            <Image src={menuIcon} alt="Menu icon" className="w-[50px] h-auto" />
          </button>
        </div>
      )}

      {/* mobile navigation */}
      {menuToggle && (
        <nav className="bg-blue flex justify-between pt-10 pb-8 pl-[30px] pr-[20px]">
          <ul className="flex flex-col gap-5 font-lato font-extralight text-[1.5rem] text-white">
            {menuList.map(({ title, url }, index) => (
              <li key={index}>
                <Link href={url} className="py-2.5 px-3 -ml-3">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMenuToggle(!menuToggle)}
            className="w-[50px] h-[50px]"
          >
            <Image src={closeIcon} alt="Close icon" />
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
