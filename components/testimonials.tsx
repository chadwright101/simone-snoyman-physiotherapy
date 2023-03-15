import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import icon from "public/graphics/medicine.png";

import "@splidejs/react-splide/css";

interface Props {
  cssClasses?: string;
  Testimonials?: [
    {
      testimonials: {
        name: string;
        location: string;
        testimonial: string;
      };
      id: string;
    }
  ];
}

const Testimonials = ({ cssClasses, Testimonials }: Props) => {
  return (
    <article className={`${cssClasses}`}>
      <div className="flex flex-col gap-6 tablet:gap-4 tablet:flex-row items-center tablet:place-self-start">
        <Image
          src={icon}
          alt="Medicine bottle icon"
          className="h-20 tablet:h-[52px] tablet:-mt-10 w-auto"
        />
        <h2 className="text-heading uppercase font-bebas_neue text-center mb-10">
          Testimonials
        </h2>
      </div>
      <Splide
        options={{
          arrows: false,
          height: "13rem",
          direction: "ttb",
          autoplay: false,
          speed: 2000,
          type: "loop",
          wheel: true,
          rewind: true,
          pauseOnHover: true,
          breakpoints: {
            350: {
              height: "20.5rem",
            },
            400: {
              height: "18.5rem",
            },
            550: {
              height: "15.5rem",
            },
            700: {
              height: "14.5rem",
            },
            900: { height: "13.5rem" },
            1050: { height: "14rem" },
            1300: {
              height: "13rem",
            },
          },
        }}
        className="border-y-2 border-black"
      >
        {Testimonials?.map(
          ({ testimonials: { location, name, testimonial }, id }) => (
            <SplideSlide key={id} className="flex items-center">
              <div className="pr-10">
                <blockquote className="italic mb-4">
                  &quot;{testimonial}&quot;
                </blockquote>
                <p className="font-normal">{name}</p>
                <p className="font-thin">{location}</p>
              </div>
            </SplideSlide>
          )
        )}
      </Splide>
    </article>
  );
};
export default Testimonials;
