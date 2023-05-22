import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import heroImages from "../data/heroImages.json";

import "@splidejs/react-splide/css";
import Button, { ButtonVariant } from "./button";

interface Props {
  cssClasses?: string;
}

const Hero = ({ cssClasses }: Props) => {
  return (
    <section
      className={`desktop:max-w-[1200px] desktop:mx-auto desktopLarge:max-w-[1400px] ${cssClasses}`}
    >
      <Splide
        options={{
          pagination: true,
          arrows: false,
          autoplay: true,
          type: "loop",
          speed: 1500,
          interval: 5500,
          breakpoints: {
            900: {
              pagination: false,
            },
          },
          dragMinThreshold: 10,
        }}
      >
        {heroImages.map(({ src, alt, loading, position }, index) => (
          <SplideSlide key={index} className="">
            <Image
              src={src}
              alt={alt}
              className={`w-full h-[600px] phoneLarge:h-[700px] desktop:h-[800px] object-cover phoneSmall:pt-[177px] pt-[125px] tablet:pt-[126px] ${position}`}
              loading={loading ? "eager" : "lazy"}
              width={1500}
              height={600}
              sizes="(max-width: 400px) 100vw, (max-width: 600px) 100vw, (max-width: 900px) 100vw, (max-width: 1300px) 100vw, 100vw"
            />
          </SplideSlide>
        ))}
      </Splide>
      <Button
        url="/#contact"
        variant={ButtonVariant.Normal}
        cssClasses="-translate-y-20 ml-10 tablet:ml-0 tablet:mr-10 tablet:flex tablet:justify-end desktop:mr-24"
      >
        Get in Touch
      </Button>
    </section>
  );
};

export default Hero;
