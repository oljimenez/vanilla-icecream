import React from "react";
import { styleComponent } from "theme/utils/styleComponent";
import { DivPropsWithSprinkles } from "theme/utils/types";

const Box: React.FC<DivPropsWithSprinkles> = ({ children, ...props }) => {
  return styleComponent("div", props, children);
};

export { Box };
