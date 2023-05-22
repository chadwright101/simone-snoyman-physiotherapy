import Image from "next/image";

interface Props {
  cssClasses?: string;
}

const About1 = ({ cssClasses }: Props) => {
  return (
    <article className={`${cssClasses}`}>
      <div className="grid grid-cols-1 items-center tablet:grid-cols-[75%_25%] tablet:grid-rows-2 gap-x-6">
        <div className="flex flex-col tablet:flex-col gap-10 items-center tablet:col-start-2 tablet:row-span-2 tablet:place-self-start desktop:gap-5">
          <p className="text-left">Proudly registered with:</p>
          <div className="flex flex-wrap items-center gap-10 justify-center desktop:gap-5">
            <Image
              src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/logos/hpcsa-logo.png"
              alt="HPCSA logo"
              className="bg-white p-3 max-w-[175px]"
              width={175}
              height={84}
              priority
            />
            <Image
              src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/logos/sasp-logo.jpg"
              alt="SASP logo"
              className="max-w-[175px] h-auto bg-white p-3"
              width={175}
              height={140}
            />
          </div>
        </div>
        <p className="font-normal text-white bg-blue py-6 text-center my-16 tablet:my-0 tablet:col-start-1">
          PR No. 072 000 0272329
        </p>
        <div id="about-mobile" className="-translate-y-36"></div>
        <div className="tablet:col-start-1 tablet:row-start-1 place-self-start">
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
