import { FC, ReactNode } from "react";

export const NavigationItem: FC<{
  href: string;
  children: ReactNode;
  color?: string;
}> = ({ href, children, color }) => {
  return (
    <a href={href} style={{ color: color || "white", fontSize: "18px" }}>
      {children}
    </a>
  );
};
