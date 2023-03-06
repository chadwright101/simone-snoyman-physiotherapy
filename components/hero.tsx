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
          autoplay: false,
          type: "loop",
          speed: 1500,
          interval: 5500,
          breakpoints: {
            900: {
              pagination: false,
            },
          },
          drag: false,
        }}
      >
        {heroImages.map(({ src, alt, loading, position }, index) => (
          <SplideSlide key={index}>
            <Image
              src={src}
              alt={alt}
              width={1400}
              height={700}
              className={`w-full object-cover pt-[126px] phoneSmall:pt-[177px] h-[800px] phoneLarge:h-[700px] tablet:pt-[126px] desktop:h-[800px] ${position}`}
              loading={loading ? "eager" : "lazy"}
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
