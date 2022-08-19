import type { NextPage } from "next";
import { AllHTMLAttributes, createElement, ElementType } from "react";
import { sprinkles, Sprinkles } from "theme/sprinkles";
import { extractParams } from "theme/utils";

export interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, keyof Sprinkles | "style">,
    Omit<Sprinkles, "display"> {}

const Flex: NextPage<BoxProps> = ({ children, ...props }) => {
  const { sprinklesProps, elementProps } = extractParams(props);
  return createElement(
    "div",
    {
      className: sprinkles({
        display: "flex",
        ...sprinklesProps,
      }),
      ...elementProps,
    },
    children
  );
};

export { Flex };
