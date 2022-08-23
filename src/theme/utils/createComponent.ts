import { Sprinkles } from "theme/sprinkles";
import { styleComponent } from "theme/utils/styleComponent";
import {
  ComponentType,
  ComponentTypes,
  DivPropsWithSprinkles,
} from "theme/utils/types";

export const createComponent = <
  T extends ComponentTypes = DivPropsWithSprinkles
>(
  type: ComponentType,
  sprinkles?: Sprinkles
) => {
  return ({ children, ...props }: Omit<T, keyof typeof sprinkles>) => {
    return styleComponent(type, { ...sprinkles, ...props }, children);
  };
};
