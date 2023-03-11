import { useState } from "react";
import Button, { ButtonVariant } from "./button";

interface Props {
  cssClasses?: string;
}

const ContactForm = ({ cssClasses }: Props) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section
      className={`bg-blue flex flex-col gap-6 py-10 desktop:py-0 ${cssClasses}`}
    >
      <p className="italic font-thin text-white">
        Please fill in the form below and I will get back to you.
      </p>
      <form
        action="https://formsubmit.co/59f8e226cb88b0752db1acc8ce63bcff"
        method="POST"
        className="flex flex-col gap-10 desktop:gap-6"
      >
        <input type="text" name="_honey" className="hidden" />
        <input
          type="hidden"
          name="_subject"
          value="Simone Snoyman Phisiotherapy - Reply to website form message"
        />
        <div className="flex flex-col gap-6 desktop:gap-2">
          <label htmlFor="name" className=" text-paragraph text-white">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Full name"
            className="bg-white px-2.5 py-1.5 text-paragraph placeholder:italic font-thin placeholder:opacity-75 focus:text-black"
          />
        </div>
        {!showEmail && (
          <Button
            variant={ButtonVariant.FormNext}
            onClick={() => setShowEmail(!showEmail)}
          >
            Next
          </Button>
        )}
        {showEmail && (
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className=" text-paragraph text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email address"
              className="bg-white px-2.5 py-1.5 text-paragraph placeholder:italic font-thin placeholder:opacity-75 focus:text-black"
            />
          </div>
        )}
        {!showMessage && showEmail && (
          <Button
            variant={ButtonVariant.FormNext}
            onClick={() => setShowMessage(!showMessage)}
          >
            Next
          </Button>
        )}
        {showMessage && (
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className=" text-paragraph text-white">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              placeholder="Type your message here"
              className="bg-white px-2.5 py-1.5 text-paragraph placeholder:italic font-thin placeholder:opacity-75 focus:text-black"
            />
          </div>
        )}
        {showMessage && (
          <Button
            variant={ButtonVariant.FormSubmit}
            onClick={() => setShowMessage(!showMessage)}
          >
            Submit
          </Button>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
