import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

import testimonialsList from "../data/testimonials-test-data.json";

interface Props {
  cssClasses?: string;
}

const Testimonials = ({ cssClasses }: Props) => {
  return (
    <article className={`${cssClasses}`}>
      <h2 className="text-heading uppercase font-bebas_neue text-center tablet:text-left phoneLarge:place-self-start mb-10">
        Testimonials
      </h2>
      <Splide
        options={{
          arrows: false,
          height: "12rem",
          direction: "ttb",
          autoplay: true,
          type: "loop",
          wheel: true,
          rewind: true,
          breakpoints: {
            1300: {
              height: "14rem",
            },
          },
        }}
        className="border-y-2 border-black"
      >
        {testimonialsList.map(({ quote, name, location }, index) => (
          <SplideSlide
            key={index}
            className="flex justify-center items-center tablet:justify-start"
          >
            <div className="pr-10">
              <blockquote className="italic mb-4">
                &quot;{quote}&quot;
              </blockquote>
              <p className="font-normal">{name}</p>
              <p className="font-thin">{location}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </article>
  );
};

export default Testimonials;
