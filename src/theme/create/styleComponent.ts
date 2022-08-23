import { createElement, ElementType, ReactNode } from "react";
import { RuntimeFn } from "@vanilla-extract/recipes/dist/declarations/src/types";
import { extractParams, sprinkles } from "theme";

export const styleComponent = (
  componentType: ElementType,
  props: Object,
  children: ReactNode,
  variantFn?: RuntimeFn<{}>
) => {
  const { sprinklesProps, elementProps, variantProps } = extractParams(props);
  return createElement(
    componentType,
    {
      className:
        sprinkles(sprinklesProps) +
        `${variantFn ? variantFn(variantProps) : ""}`,
      ...elementProps,
    },
    children
  );
};
