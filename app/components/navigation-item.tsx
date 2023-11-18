import { FC, ReactNode } from "react";

export const NavigationItem: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <a href={href} style={{ color: "white", fontSize: "18px" }}>
      {children}
    </a>
  );
};
