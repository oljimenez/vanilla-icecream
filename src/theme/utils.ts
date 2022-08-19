import { sprinkles } from "theme/sprinkles";

export type Int = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type IntTo5 = "1" | "2" | "3" | "4" | "5";
export type IntTo5With0 = IntTo5 | "0";

export type DoubleInt = "0" | Int | `${Int}${Int | "0"}`;

export const getSprinklesParams = () => {
  const sprinklesParams: string[] = [];

  sprinkles["properties"].forEach((value: string) => {
    sprinklesParams.push(value);
  });
  return sprinklesParams;
};

export const extractParams = (props: Object) => {
  const Props = props as Record<string, unknown>;
  const sprinklesParams = getSprinklesParams();
  const sprinklesProps: Record<string, unknown> = {};
  const elementProps: Record<string, unknown> = {};

  Object.keys(props).forEach((key) => {
    if (sprinklesParams.includes(key)) {
      sprinklesProps[key] = Props[key];
    } else {
      elementProps[key] = Props[key];
    }
  });

  return { sprinklesProps, elementProps };
};
