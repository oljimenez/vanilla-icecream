import { ElementType } from "react";
import { Sprinkles } from "theme/sprinkles";
import { styleComponent } from "theme/utils/styleComponent";
import {
  ButtonPropsWithSprinkles,
  ComponentTypes,
  DivPropsWithSprinkles,
  ImagePropsWithSprinkles,
} from "theme/utils/types";

export const createComponent = (type: ElementType, sprinkles?: Sprinkles) => {
  const Component = <T extends ComponentTypes>({ children, ...props }: T) => {
    return styleComponent(type, { ...sprinkles, ...props }, children);
  };

  if (type === "button") {
    return Component<ButtonPropsWithSprinkles>;
  }

  if (type === "img") {
    return Component<ImagePropsWithSprinkles>;
  }

  //type detail to fix
  //always get all ButtonPropsWithSprinkles, ImagePropsWithSprinkles and DivPropsWithSprinkles types
  return Component<DivPropsWithSprinkles>;
};
