import Image from "next/image";
import Link from "next/link";

import desktopMenuList from "../data/desktopMenuList.json";

interface Props {
  cssClasses?: string;
}

const Footer = ({ cssClasses }: Props) => {
  return (
    <footer className={`${cssClasses}`}>
      {/* mobile view */}
      <div className="flex flex-col items-center tablet:hidden gap-6">
        <Image
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/logos/simone-snoyman-physiotherapy-logo.png"
          alt="Simone Snoyman Physiotherapy"
          className="w-[106px] h-auto"
          width={106}
          height={200}
        />
        <p className="font-thin text-[1rem] mb-4">PR No. 072 000 0272329</p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <Image
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/logos/sasp-logo.jpg"
            alt="SASP logo"
            className="max-w-[175px] h-auto bg-white p-3"
            width={175}
            height={240}
          />
          <Image
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/logos/hpcsa-logo.png"
            alt="HPCSA logo"
            className="max-w-[175px] h-auto bg-white p-3"
            width={175}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center mt-4">
          <p className="font-thin text-[1rem] text-center">
            © Simone Snoyman Physiotherapy, Plettenberg Bay
          </p>
          <Link href="/" className="font-thin text-[1rem] text-blue">
            www.simonesnoymanphysiotherapy.co.za
          </Link>
        </div>
        <p className="font-thin text-[1rem] text-center">
          Designed & developed by{" "}
          <Link
            className="font-thin text-[1rem] text-blue hover:underline underline-offset-4 decoration-1 decoration-blue"
            href="https://www.thewrightdesigns.co.za"
            target="_blank"
          >
            The Wright Designs
          </Link>
        </p>
      </div>

      {/* desktop view */}
      <div className="hidden tablet:flex flex-col items-center gap-12">
        <div className="flex justify-between w-full">
          <nav>
            <ul className="flex flex-col gap-1 font-thin text-[1rem]">
              {desktopMenuList.map(({ title, url }, index) => (
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
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/logos/hpcsa-logo.png"
                alt="HPCSA logo"
                className="max-w-[90px] h-auto bg-white p-2"
                width={90}
                height={100}
              />
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/logos/sasp-logo.jpg"
                alt="SASP logo"
                className="max-w-[90px] h-auto bg-white p-2"
                width={90}
                height={100}
              />
            </div>
            <Link href="/" className="flex gap-4 items-center">
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/logos/simone-snoyman-physiotherapy-logo.png"
                alt="Simone Snoyman Physiontherapy logo"
                className="w-[60px] h-auto"
                width={60}
                height={100}
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
        <div className="flex justify-between w-full">
          <p className="font-thin text-[1rem] flex flex-col">
            © Simone Snoyman Physiotherapy, Plettenberg Bay
            <Link
              href="/"
              className="font-thin text-[1rem] text-blue hover:underline underline-offset-4 decoration-1 decoration-blue"
            >
              www.simonesnoymanphysiotherapy.co.za
            </Link>
          </p>
          <p className="font-thin text-[1rem]">
            Designed & developed by{" "}
            <Link
              className="font-thin text-[1rem] text-blue hover:underline underline-offset-4 decoration-1 decoration-blue"
              href="https://www.thewrightdesigns.co.za"
              target="_blank"
            >
              The Wright Designs
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
