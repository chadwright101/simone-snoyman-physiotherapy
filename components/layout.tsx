import { ReactNode } from "react";

interface Props {
  cssClasses?: string;
  children: ReactNode;
}

const Layout = ({ cssClasses, children }: Props) => {
  return <div className={`px-[20px] ${cssClasses}`}>{children}</div>;
};

export default Layout;
