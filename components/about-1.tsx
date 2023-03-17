import Image from "next/image";

import logo1 from "public/logos/hpcsa-logo.png";
import logo2 from "public/logos/sasp-logo.jpg";

interface Props {
  cssClasses?: string;
}

const About1 = ({ cssClasses }: Props) => {
  return (
    <article className={`${cssClasses}`}>
      <div className="grid grid-cols-1 items-center tablet:grid-cols-[75%_25%] gap-x-6">
        <div className="flex flex-col tablet:flex-col gap-10 items-center tablet:order-2 tablet:row-span-2 tablet:place-self-start desktop:gap-5">
          <p className="text-left">Proudly registered with:</p>
          <div className="flex flex-wrap items-center gap-10 justify-center desktop:gap-5">
            <Image
              src={logo1}
              alt="HPCSA logo"
              className="max-w-[175px] h-auto bg-white p-3"
            />
            <Image
              src={logo2}
              alt="SASP logo"
              className="max-w-[175px] h-auto bg-white p-3"
            />
          </div>
        </div>
        <p className="font-normal text-white bg-blue py-6 text-center my-16 tablet:order-3 tablet:my-0">
          PR No. 072 000 0272329
        </p>
        <div id="about-mobile" className="-translate-y-36"></div>
        <div className="tablet:order-1 place-self-start">
          <p className="mb-4">
            At Simone Snoyman Physiotherapy we believe in a “hands-on” approach.
          </p>
          <p>
            Each patient is individually assessed and treated holistically with
            emphasis placed on understanding the cause of your complaint and
            empowering each person to achieve maximum function and pain relief.
            I am passionate about what I do and believe that the therapist (me)
            and patient (you) are a team with the goal being, “Getting YOU where
            YOU want to be.”
          </p>
        </div>
      </div>
    </article>
  );
};

export default About1;
