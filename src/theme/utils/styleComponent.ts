import { createElement, ElementType, ReactNode } from "react";
import { extractParams } from "theme/utils";
import { sprinkles } from "theme/sprinkles";
import { ComponentTypes } from "theme/utils/types";

export const styleComponent = (
  componentType: ElementType,
  props: Object,
  children: ReactNode
) => {
  const { sprinklesProps, elementProps } = extractParams(props);

  return createElement<ComponentTypes>(
    componentType,
    {
      className: sprinkles(sprinklesProps),
      ...elementProps,
    },
    children
  );
};
