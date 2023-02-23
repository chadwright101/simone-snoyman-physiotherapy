import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import useScrollPosition from "./utils/scroll-position";

import classNames from "classnames";
import { useSpring, animated } from "@react-spring/web";

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

  const logoLoadAnimate = useSpring({
    from: { x: -750, opacity: 0 },
    to: { x: 0, opacity: 100 },
    config: {
      mass: 10,
      tension: 220,
      bounce: 0.1,
    },
  });

  const [mobileMenuToggle, setMobileMenuToggle] = useSpring(() => ({
    to: { x: -150, opacity: 100 },
    config: {
      loop: { reverse: true },
      mass: 5,
      tension: 240,
      bounce: 0.05,
    },
  }));

  return (
    <header
      className={`fixed w-full drop-shadow-md border-b-2 border-darkBlue ${cssClasses}`}
    >
      {!menuToggle && (
        <div
          className={classNames(
            "px-[20px] py-6 flex justify-between gap-3 phoneSmall:gap-6 bg-beige",
            {
              "h-[90px]": scrollPosition > 0,
            }
          )}
        >
          {/* logo */}
          <animated.div style={logoLoadAnimate}>
            <Link href="/" className="flex gap-4 items-center">
              <Image
                src={logo}
                alt="Simone Snoyman Physiontherapy logo"
                className={classNames(
                  "hidden phoneTiny:block w-[50px] phoneSmall:w-[100px] h-auto transform ease-in-out duration-[150ms] ",
                  {
                    "scale-[45%] -translate-y-[43px] -translate-x-5":
                      scrollPosition > 0,
                  }
                )}
              />
              <div>
                <h1 className="flex flex-col">
                  <span
                    className={classNames(
                      "font-amatic_sc text-[1.5rem] tracking-[0.0825rem] phoneSmall:tracking-[0.09625rem] phoneSmall:text-[1.75rem] text-lightBlue1 transform ease-in-out duration-[70ms]",
                      {
                        "opacity-0": scrollPosition > 0,
                      }
                    )}
                  >
                    SIMONE SNOYMAN
                  </span>
                  <span
                    className={classNames(
                      "font-bebas_neue text-[1.5rem] tracking-[0.0675rem] phoneSmall:text-[1.75rem] phoneSmall:tracking-[0.09rem] text-darkBlue -mt-2.5 -mb-2 transform ease-in-out duration-[70ms]",
                      {
                        "opacity-0": scrollPosition > 0,
                      }
                    )}
                  >
                    PHYSIOTHERAPY
                  </span>
                </h1>
                <h2
                  className={classNames(
                    "font-lato font-thin text-[0.875rem] phoneSmall:text-[1rem] transform ease-in-out duration-[70ms]",
                    {
                      "opacity-0": scrollPosition > 0,
                    }
                  )}
                >
                  Plettenberg Bay
                </h2>
              </div>
            </Link>
          </animated.div>
          <button
            onClick={() => {
              setMenuToggle(!menuToggle);
              setMobileMenuToggle({ x: 0, opacity: 100 });
            }}
            className={classNames(
              "h-16 w-16 grid place-items-center my-auto transform ease-in-out duration-[150ms]",
              {
                "-translate-y-[10.5px]": scrollPosition > 0,
              }
            )}
          >
            <Image src={menuIcon} alt="Menu icon" className="w-[50px] h-auto" />
          </button>
        </div>
      )}

      {/* mobile navigation */}
      {menuToggle && (
        <nav className="bg-blue flex justify-between pt-12 pb-8 pl-[30px] pr-[20px]">
          <animated.ul
            style={mobileMenuToggle}
            className="flex flex-col gap-6 font-lato font-extralight text-[1.5rem] text-white"
          >
            {menuList.map(({ title, url }, index) => (
              <li key={index}>
                <Link href={url} className="py-2.5 px-3 -ml-3 transform">
                  {title}
                </Link>
              </li>
            ))}
          </animated.ul>
          <button
            onClick={() => setMenuToggle(!menuToggle)}
            className="w-16 h-16 grid place-items-center -mt-2.5"
          >
            <Image
              className="w-[50px] h-auto"
              src={closeIcon}
              alt="Close icon"
            />
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
