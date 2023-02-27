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
      className={`fixed w-full drop-shadow-md border-b-2 border-darkBlue bg-beige z-10 ${cssClasses}`}
    >
      <div className="tablet:pr-[50px] justify-between items-end tablet:flex tablet:py-6 desktop:max-w-[1200px] desktopLarge:max-w-[1400px] desktop:mx-auto desktop:px-0">
        {!menuToggle && (
          <div
            className={classNames(
              "px-[20px] tablet:pl-[50px] py-6 tablet:py-0 flex justify-between gap-3 phoneSmall:gap-6 desktop:px-0",
              {
                "h-[75px] tablet:h-[35px]": scrollPosition > 100,
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
                    "hidden phoneTiny:block w-[50px] phoneSmall:w-[100px] h-auto tablet:w-[60px]",
                    {
                      "max-w-[38px] -translate-y-[24px] phoneSmall:-translate-y-[32px] tablet:max-w-[45px] tablet:translate-x-0 tablet:-translate-y-4":
                        scrollPosition > 100,
                    }
                  )}
                />
                <div
                  className={classNames("transform", {
                    "opacity-0": scrollPosition > 100,
                  })}
                >
                  <h1 className="flex flex-col">
                    <span className="font-amatic_sc text-[1.5rem] tracking-[0.0825rem] phoneSmall:tracking-[0.09625rem] phoneSmall:text-[1.75rem] text-lightBlue1">
                      SIMONE SNOYMAN
                    </span>
                    <span className="font-bebas_neue text-[1.5rem] tracking-[0.0675rem] phoneSmall:text-[1.75rem] phoneSmall:tracking-[0.09rem] text-darkBlue -mt-2.5 -mb-2">
                      PHYSIOTHERAPY
                    </span>
                  </h1>
                  <h2 className="font-lato font-thin text-[0.875rem] phoneSmall:text-[1rem] tablet:hidden">
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
                "h-16 w-16 grid place-items-center my-auto transform tablet:hidden",
                {
                  "-translate-y-[17.5px]": scrollPosition > 100,
                }
              )}
            >
              <Image
                src={menuIcon}
                alt="Menu icon"
                className="w-[50px] h-auto"
              />
            </button>
          </div>
        )}

        {/* mobile navigation */}
        {menuToggle && (
          <nav className="bg-blue flex justify-between pt-12 pb-8 pl-[30px] pr-[20px] tablet:hidden">
            <animated.ul
              style={mobileMenuToggle}
              className="flex flex-col font-lato font-extralight text-[1.5rem] text-white w-full"
            >
              {menuList.map(({ title, url }, index) => (
                <li onClick={() => setMenuToggle(!menuToggle)} key={index}>
                  <Link href={url} className="px-3 -ml-3 transform">
                    {title}
                  </Link>
                  {index < menuList.length - 1 && (
                    <div className="h-px my-4 bg-white w-[90%]"></div>
                  )}
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

        {/* desktop navigation */}

        <nav
          className={classNames("hidden tablet:block pb-1", {
            "translate-y-[14px]": scrollPosition > 100,
          })}
        >
          <ul className="flex gap-5 text-paragraph font-extralight">
            {menuList.map(({ title, url }, index) => (
              <li key={index} className="hover:text-blue">
                <Link href={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
