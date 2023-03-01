import Image from "next/image";

import image1 from "public/placeholders/AdobeStock_160757465_Preview.jpeg";
import image2 from "public/placeholders/AdobeStock_244750183_Preview.jpeg";

import conditionsList from "../data/conditions.json";

interface Props {
  cssClasses?: string;
}

const Conditions = ({ cssClasses }: Props) => {
  return (
    <article
      className={`grid grid-cols-1 gap-10 place-items-center phoneLarge:grid-cols-2 phoneLarge:grid-rows-[1fr_100px_100px_100px] phoneLarge:place-items-start phoneLarge:gap-y-6  ${cssClasses}`}
    >
      <h2 className="text-heading uppercase font-bebas_neue text-center phoneLarge:text-left">
        Conditions That we treat
      </h2>
      <Image
        src={image1}
        alt=""
        className="max-w-[200px] h-[200px] object-cover rounded-full phoneLarge:row-span-2"
      />
      <ul className="list-disc ml-8 place-self-start phoneLarge:row-span-3">
        {conditionsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Image
        src={image2}
        alt=""
        className="max-w-[200px] h-[200px] object-cover rounded-full phoneLarge:col-start-2 phoneLarge:row-span-2"
      />
    </article>
  );
};

export default Conditions;
