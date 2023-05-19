import Image from "next/image";

import conditionsList from "../data/conditions.json";

interface Props {
  cssClasses?: string;
}

const Conditions = ({ cssClasses }: Props) => {
  return (
    <article
      className={`grid grid-cols-1 gap-10 place-items-center phoneLarge:grid-cols-2 desktop:grid-cols-[1fr_175px] phoneLarge:grid-rows-[1fr_100px_100px_100px] phoneLarge:place-items-start tablet:gap-y-6  ${cssClasses}`}
    >
      <div className="flex flex-col gap-6 tablet:gap-4 tablet:flex-row items-center tablet:place-self-start phoneLarge:col-span-2 phoneLarge:place-self-center tablet:col-auto">
        <Image
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/graphics/glass+jar.png"
          alt="Medicine bottle icon"
          className="h-20 tablet:h-[52px] tablet:-mt-1 w-auto"
          height={80}
          width={80}
        />
        <h2 className="text-heading uppercase font-bebas_neue text-center phoneLarge:text-left">
          Conditions That we treat
        </h2>
      </div>
      <Image
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/conditions/close-up-woman-pain.jpg"
        alt=""
        className="max-w-[200px] h-[200px] object-cover rounded-full desktop:place-self-end phoneLarge:row-span-2 object-right phoneLarge:col-start-2 tablet:col-auto"
        width={200}
        height={200}
      />
      <ul className="list-disc ml-8 place-self-start phoneSmall:place-self-center phoneLarge:place-self-end tablet:place-self-start phoneLarge:row-span-2 tablet:row-span-3 text-left phoneSmall:text-justify ">
        {conditionsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Image
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/simone-snoyman-physiotherapy/conditions/man-holds-his-back-due-pain.jpg"
        alt=""
        className="max-w-[200px] h-[200px] desktop:place-self-end object-cover rounded-full tablet:col-start-2 phoneLarge:row-span-2 object-right -scale-x-100 phoneLarge:col-start-2 tablet:col-auto"
        width={200}
        height={200}
      />
    </article>
  );
};

export default Conditions;
