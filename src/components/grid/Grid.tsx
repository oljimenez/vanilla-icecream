import type { NextPage } from "next";
import { AllHTMLAttributes, createElement, ElementType } from "react";
import { sprinkles, Sprinkles } from "theme/sprinkles";

export interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, keyof Sprinkles | "style">,
    Omit<Sprinkles, "display"> {
  componentType?: ElementType;
}

const Grid: NextPage<BoxProps> = ({
  children,
  componentType = "div",
  ...props
}) => {
  return createElement(
    componentType,
    { className: sprinkles({ display: "grid", ...props }), ...props },
    children
  );
};

export { Grid };
