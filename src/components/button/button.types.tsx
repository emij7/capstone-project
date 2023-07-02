import { ReactNode } from "react";

export type TButton = {
  children: ReactNode;
  google?: boolean;
  base?: boolean;
  inverted?: boolean;
  onClick?: () => void;
  type?: "submit" | "button";
};
