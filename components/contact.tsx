import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ContactForm from "./contact-form";

interface Props {
  cssClasses?: string;
}

const Contact = ({ cssClasses }: Props) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section
      className={`desktop:bg-blue desktop:py-10 desktop:drop-shadow-md ${cssClasses}`}
    >
      <div className="px-[20px] tablet:px-[50px] desktop:px-0 desktop:max-w-[1200px] desktopLarge:max-w-[1400px] desktop:mx-auto">
        <div className="flex flex-col gap-6 tablet:gap-4 tablet:flex-row items-center tablet:place-self-start phoneLarge:place-self-start">
          <Image
            src="/assets/graphics/stethoscope.png"
            alt="Medicine bottle icon"
            className="h-20 tablet:h-[52px] tablet:-mt-12 w-auto desktop:hidden"
            width={60}
            height={80}
          />
          <h2 className="text-heading uppercase font-bebas_neue text-center tablet:text-left mb-10 desktop:text-white">
            Contact
          </h2>
        </div>
        <div className="desktop:grid grid-cols-2">
          <ul className="flex flex-col gap-10 desktop:text-white desktop:gap-4">
            <li className="desktop:grid grid-cols-[95px_1fr]">
              <h5 className="mb-3 font-normal desktop:mb-0">Phone:</h5>
              {!showPhone && (
                <p
                  onClick={() => setShowPhone(!showPhone)}
                  className="text-blue italic hover:cursor-pointer px-3 py-2 -mx-3 -my-2 desktop:p-0 desktop:m-0 tablet:hover:opacity-75 desktop:text-white"
                >
                  Show phone number
                </p>
              )}
              {showPhone && (
                <Link
                  className="text-blue px-3 py-2 -mx-3 -my-2 desktop:p-0 desktop:m-0 tablet:hover:opacity-75 desktop:text-white"
                  href="tel:+27829234370"
                >
                  082 923 4370
                </Link>
              )}
            </li>
            <li className="desktop:grid grid-cols-[95px_1fr]">
              <h5 className="mb-3 font-normal desktop:mb-0">Email:</h5>
              {!showEmail && (
                <p
                  onClick={() => setShowEmail(!showEmail)}
                  className="text-blue italic hover:cursor-pointer px-3 py-2 -mx-3 -my-2 desktop:p-0 desktop:m-0 tablet:hover:opacity-75 desktop:text-white"
                >
                  Show email address
                </p>
              )}
              {showEmail && (
                <Link
                  className="text-blue px-3 py-2 -mx-3 -my-2 desktop:p-0 desktop:m-0 tablet:hover:underline underline-offset-8 decoration-1 desktop:text-white"
                  href="mailto:snoymanphysio@gmail.com"
                >
                  snoymanphysio@gmail.com
                </Link>
              )}
            </li>
            <li className="desktop:grid grid-cols-[95px_1fr]">
              <h5 className="mb-3 font-normal desktop:mb-0">Address:</h5>
              <p className="desktop:text-white">
                Castleton Estate, Plettenberg Bay, South Africa
              </p>
            </li>
            <li className="desktop:mt-4">
              <h5 className="underline font-normal underline-offset-[5px] decoration-1 mb-3">
                Operating hours
              </h5>
              <ul className="flex flex-col gap-0.5 desktop:gap-0">
                <li className="grid grid-cols-[120px_1fr]">
                  <p className="font-normal desktop:text-white">Monday:</p>
                  <p className="desktop:text-white">8:15-16:30</p>
                </li>
                <li className="grid grid-cols-[120px_1fr]">
                  <p className="font-normal desktop:text-white">Tuesday:</p>
                  <p className="desktop:text-white">8:15-16:30</p>
                </li>
                <li className="grid grid-cols-[120px_1fr]">
                  <p className="font-normal desktop:text-white">Wednesday:</p>
                  <p className="desktop:text-white">8:15-16:30</p>
                </li>
                <li className="grid grid-cols-[120px_1fr]">
                  <p className="font-normal desktop:text-white">Thursday:</p>
                  <p className="desktop:text-white">8:15-16:30</p>
                </li>
                <li className="grid grid-cols-[120px_1fr]">
                  <p className="font-normal desktop:text-white">Friday:</p>
                  <p className="desktop:text-white">8:15-16:30</p>
                </li>
                <li className="grid grid-cols-[120px_1fr]">
                  <p className="font-normal desktop:text-white">Saturday:</p>
                  <p className="text-left desktop:text-white">
                    By appointment only
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <ContactForm cssClasses="mt-10 desktop:mt-0 hidden desktop:flex" />
        </div>
      </div>
      <ContactForm cssClasses="mt-10 desktop:mt-0 desktop:hidden px-[20px] tablet:px-[50px] " />
    </section>
  );
};

export default Contact;
