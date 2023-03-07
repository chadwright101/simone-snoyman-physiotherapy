import Image from "next/image";

import image from "public/treatments/doctor-examining-female-patient-stomach.jpg";
import icon from "public/graphics/large medicine.png";

import treatmentList from "../data/treatments.json";

interface Props {
  cssClasses?: string;
}

const Treatments = ({ cssClasses }: Props) => {
  return (
    <article
      className={`grid grid-cols-1 gap-10 place-items-center ${cssClasses}`}
    >
      <div className="flex flex-col gap-6 tablet:gap-4 tablet:flex-row items-center tablet:place-self-start">
        <Image
          src={icon}
          alt="Medicine bottle icon"
          className="h-20 tablet:h-[52px] tablet:-mt-1 w-auto"
        />
        <h2 className="text-heading uppercase font-bebas_neue text-center tablet:place-self-start">
          Treatment Techniques
        </h2>
      </div>
      <p className="place-self-start">
        Emphasis is placed on “Hands-On” treatments individualised for every
        person.
      </p>
      <ul className="list-disc ml-8 place-self-start text-left phoneSmall:text-justify">
        {treatmentList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="place-self-start">
        Home visits offered upon request in Plettenberg Bay and surrounding
        areas.
      </p>
      <Image
        src={image}
        alt=""
        className="max-w-[200px] h-[200px] object-cover rounded-full phoneLarge:hidden"
      />
    </article>
  );
};

export default Treatments;
