import { sprinkles } from "theme/sprinkles";

export const getSprinklesParams = () => {
  const sprinklesParams: string[] = [];

  sprinkles["properties"].forEach((value: string) => {
    sprinklesParams.push(value);
  });
  return sprinklesParams;
};

type RecordProps = Record<string, unknown>;

export const extractParams = (props: Object) => {
  const Props = props as Record<string, unknown>;
  const sprinklesParams = getSprinklesParams();
  const sprinklesProps: RecordProps = {};
  const elementProps: RecordProps = {};
  let variantProps: RecordProps = {};

  Object.keys(props).forEach((key) => {
    if (sprinklesParams.includes(key)) {
      sprinklesProps[key] = Props[key];
    } else if (key === "variant") {
      variantProps = Props[key] as RecordProps;
    } else {
      elementProps[key] = Props[key];
    }
  });

  return { sprinklesProps, elementProps, variantProps };
};
