import Button, { ButtonVariant } from "./button";

interface Props {
  cssClasses?: string;
}

const Fees = ({ cssClasses }: Props) => {
  return (
    <article
      className={`grid grid-cols-1 gap-10 place-items-center ${cssClasses}`}
    >
      <h2 className="text-heading uppercase font-bebas_neue text-center tablet:place-self-start phoneLarge:place-self-start">
        Fees
      </h2>
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
