import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import arrows from "public/icons/double_arrows.svg";

interface Props {
  children: ReactNode;
  cssClasses?: string;
  url?: string;
  variant: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonVariant {
  FormNext,
  FormSubmit,
  Normal,
}

const Button = ({ children, cssClasses, url, variant, onClick }: Props) => {
  if (variant === ButtonVariant.Normal) {
    return (
      <div className={`${cssClasses}`}>
        <button className="px-8 py-1.5 bg-blue rounded-2xl flex items-center tablet:hover:bg-lightBlue1">
          <Link
            href={url!}
            className="font-lato_light text-[1.5rem] text-white text-center"
          >
            {children}
          </Link>
        </button>
      </div>
    );
  } else if (variant === ButtonVariant.FormNext) {
    return (
      <div className={`${cssClasses}`}>
        <button
          onClick={onClick}
          className="px-6 py-1.5 bg-white rounded-2xl flex gap-1 justify-around items-center font-lato_light text-[1.5rem] text-black text-center"
        >
          {children}
          <Image src={arrows} alt="Arrow icons" className="h-9 -mr-3" />
        </button>
      </div>
    );
  } else if (variant === ButtonVariant.FormSubmit) {
    return (
      <div className={`${cssClasses}`}>
        <button
          type="submit"
          className="px-6 py-1.5 bg-white rounded-2xl flex gap-1 justify-around items-center font-lato_light text-[1.5rem] text-black text-center"
        >
          {children}
          <Image src={arrows} alt="Arrow icons" className="h-9 -mr-3" />
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Button;
