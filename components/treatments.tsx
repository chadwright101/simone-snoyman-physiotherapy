import Image from "next/image";

import image from "public/placeholders/AdobeStock_61892453_Preview.jpeg";

import treatmentList from "../data/treatments.json";

interface Props {
  cssClasses?: string;
}

const Treatments = ({ cssClasses }: Props) => {
  return (
    <article
      className={`grid grid-cols-1 gap-10 place-items-center ${cssClasses}`}
    >
      <h2 className="text-heading uppercase font-bebas_neue text-center tablet:place-self-start">
        Treatment Techniques
      </h2>
      <p className="place-self-start">
        Emphasis is placed on “Hands-On” treatments individualised for every
        person.
      </p>
      <ul className="list-disc ml-8 place-self-start">
        {treatmentList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="place-self-start">Home visits offered upon request.</p>
      <Image
        src={image}
        alt=""
        className="max-w-[200px] h-[200px] object-cover rounded-full phoneLarge:hidden"
      />
    </article>
  );
};

export default Treatments;
