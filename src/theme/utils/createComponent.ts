import { ElementType } from "react";
import { Sprinkles } from "theme/sprinkles";
import { styleComponent } from "theme/utils/styleComponent";
import { ComponentTypes } from "theme/utils/types";

export const createComponent = (type: ElementType, sprinkles?: Sprinkles) => {
  return <T extends ComponentTypes>({ children, ...props }: T) => {
    return styleComponent(type, { ...sprinkles, ...props }, children);
  };
};
