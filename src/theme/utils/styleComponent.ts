import { createElement, ElementType, ReactNode } from "react";
import { extractParams } from "theme/utils";
import { sprinkles } from "theme/sprinkles";

export const styleComponent = (
  componentType: ElementType,
  props: Object,
  children: ReactNode
) => {
  const { sprinklesProps, elementProps } = extractParams(props);

  return createElement(
    componentType,
    {
      className: sprinkles(sprinklesProps),
      ...elementProps,
    },
    children
  );
};
