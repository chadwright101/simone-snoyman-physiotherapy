import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import heroImages from "../data/heroImages.json";

import "@splidejs/react-splide/css";

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
          pauseOnHover: true,
          interval: 5500,
          breakpoints: {
            900: {
              pagination: false,
            },
          },
          drag: false,
        }}
      >
        {heroImages.map(({ src, alt }, index) => (
          <SplideSlide>
            <div key={index}>
              <Image
                src={src}
                alt={alt}
                width={1400}
                height={700}
                className="w-full object-cover pt-[126px] h-[600px] phoneTiny:h-[700px] phoneSmall:pt-[177px]  phoneSmall:h-screen phoneLarge:h-[700px] tablet:pt-[126px] desktop:h-[800px]"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Hero;
