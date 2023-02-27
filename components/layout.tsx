import { ReactNode } from "react";

interface Props {
  cssClasses?: string;
  children: ReactNode;
}

const Layout = ({ cssClasses, children }: Props) => {
  return (
    <div
      className={`px-[20px] tablet:px-[50px] desktop:px-0 desktop:max-w-[1200px] desktopLarge:max-w-[1400px] desktop:mx-auto ${cssClasses}`}
    >
      {children}
    </div>
  );
};

export default Layout;
