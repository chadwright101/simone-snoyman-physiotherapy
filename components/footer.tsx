import Image from "next/image";
import Link from "next/link";

import logo from "../public/logos/simone-snoyman-physiotherapy-logo.png";
import logo1 from "public/logos/hpcsa-logo.png";
import logo2 from "public/logos/sasp-logo.jpg";

import menuList from "../data/menuList.json";

interface Props {
  cssClasses?: string;
}

const Footer = ({ cssClasses }: Props) => {
  return (
    <footer className={`${cssClasses}`}>
      {/* mobile view */}
      <div className="flex flex-col items-center tablet:hidden gap-6">
        <Image
          src={logo}
          alt="Simone Snoyman Physiotherapy"
          className="w-[106px] h-auto"
        />
        <p className="font-thin text-[1rem] mb-4">PR No. 072 000 0272329</p>
        <div className="grid grid-cols-2 items-center gap-6">
          <Image
            src={logo2}
            alt="SASP logo"
            className="max-w-[175px] h-auto bg-white p-3"
          />
          <Image
            src={logo1}
            alt="HPCSA logo"
            className="max-w-[175px] h-auto bg-white p-3"
          />
        </div>
        <div className="flex flex-col items-center mt-4">
          <p className="font-thin text-[1rem]">
            © Simone Snoyman Physiotherapy, Plettenberg Bay
          </p>
          <Link href="/" className="font-thin text-[1rem] text-blue">
            www.simonesnoymanphysiotherapy.co.za
          </Link>
        </div>
      </div>

      {/* desktop view */}
      <div className="hidden tablet:flex flex-col items-center gap-12">
        <div className="flex justify-between w-full">
          <nav>
            <ul className="flex flex-col gap-1 font-thin text-[1rem]">
              {menuList.map(({ title, url }, index) => (
                <li key={index}>
                  <Link
                    href={url}
                    className="hover:underline underline-offset-4 decoration-1"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-end gap-4">
              <Image
                src={logo1}
                alt="HPCSA logo"
                className="max-w-[90px] h-auto bg-white p-2"
              />
              <Image
                src={logo2}
                alt="SASP logo"
                className="max-w-[90px] h-auto bg-white p-2"
              />
            </div>
            <Link href="/" className="flex gap-4 items-center">
              <Image
                src={logo}
                alt="Simone Snoyman Physiontherapy logo"
                className="w-[60px] h-auto"
              />

              <h1 className="flex flex-col">
                <span className="font-amatic_sc text-[1.5rem] tracking-[0.0825rem] phoneSmall:tracking-[0.09625rem] phoneSmall:text-[1.75rem] text-lightBlue1">
                  SIMONE SNOYMAN
                </span>
                <span className="font-bebas_neue text-[1.5rem] tracking-[0.0675rem] phoneSmall:text-[1.75rem] phoneSmall:tracking-[0.09rem] text-darkBlue -mt-2.5 -mb-2">
                  PHYSIOTHERAPY
                </span>
              </h1>
            </Link>
          </div>
        </div>
        <p>
          <p className="font-thin text-[1rem]">
            © Simone Snoyman Physiotherapy, Plettenberg Bay |{` `}
            <Link
              href="/"
              className="font-thin text-[1rem] text-blue hover:underline underline-offset-4 decoration-1 decoration-blue"
            >
              www.simonesnoymanphysiotherapy.co.za
            </Link>
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
