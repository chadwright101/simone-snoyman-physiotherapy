import Image from "next/image";

import Button, { ButtonVariant } from "./button";

import icon from "public/graphics/clipboard.png";

interface Props {
  cssClasses?: string;
}

const Fees = ({ cssClasses }: Props) => {
  return (
    <article
      className={`grid grid-cols-1 gap-10 place-items-center ${cssClasses}`}
    >
      <div className="flex flex-col gap-6 tablet:gap-4 tablet:flex-row tablet:items-center tablet:place-self-start">
        <Image
          src={icon}
          alt="Clipboard icon"
          className="h-20 tablet:h-[52px] tablet:-mt-1 w-auto"
        />
        <h2 className="text-heading uppercase font-bebas_neue text-center  phoneLarge:place-self-start">
          Fees
        </h2>
      </div>
      <p className="place-self-start">
        We are conveniently contracted to most medical aids. The account remains
        the responsibility of the account holder until settled in full.
      </p>
      <p className="place-self-start">
        Each session is approximately 45 minutes and is charged according to the
        techniques done.
      </p>
      <Button
        url="/#contact"
        variant={ButtonVariant.Normal}
        cssClasses="phoneLarge:place-self-start"
      >
        Contact for quote
      </Button>
    </article>
  );
};

export default Fees;
