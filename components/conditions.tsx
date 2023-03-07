import Image from "next/image";

import image1 from "public/conditions/close-up-woman-pain.jpg";
import image2 from "public/conditions/man-holds-his-back-due-pain.jpg";
import icon from "public/graphics/glass jar.png";

import conditionsList from "../data/conditions.json";

interface Props {
  cssClasses?: string;
}

const Conditions = ({ cssClasses }: Props) => {
  return (
    <article
      className={`grid grid-cols-1 gap-10 place-items-center tablet:grid-cols-2 desktop:grid-cols-[1fr_175px] tablet:grid-rows-[1fr_100px_100px_100px] tablet:place-items-start tablet:gap-y-6  ${cssClasses}`}
    >
      <div className="flex flex-col gap-6 tablet:gap-4 tablet:flex-row items-center tablet:place-self-start">
        <Image
          src={icon}
          alt="Medicine bottle icon"
          className="h-20 tablet:h-[52px] tablet:-mt-1 w-auto"
        />
        <h2 className="text-heading uppercase font-bebas_neue text-center phoneLarge:text-left">
          Conditions That we treat
        </h2>
      </div>
      <Image
        src={image1}
        alt=""
        className="max-w-[200px] h-[200px] object-cover rounded-full desktop:place-self-end tablet:row-span-2 object-right"
      />
      <ul className="list-disc ml-8 place-self-start phoneSmall:place-self-center tablet:place-self-start phoneLarge:row-span-3 text-left phoneSmall:text-justify">
        {conditionsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Image
        src={image2}
        alt=""
        className="max-w-[200px] h-[200px] desktop:place-self-end object-cover rounded-full tablet:col-start-2 tablet:row-span-2 object-right -scale-x-100"
      />
    </article>
  );
};

export default Conditions;
