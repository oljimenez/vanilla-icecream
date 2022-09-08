import { IntTo5With0 } from "theme/utils";

type PixelType = `${IntTo5With0}px`;
type RemType = `${IntTo5With0}rem`;

type RecordType<T extends string> = Record<T, T>;

export function createValues(type: "pixel" | "rem", max: number = 6) {
  const array = Array.from(Array(max).keys()).reduce<Record<string, string>>(
    (prev, curr) => {
      prev[`${curr}${type === "pixel" ? "px" : "rem"}`] = `${curr}${
        type === "pixel" ? "px" : "rem"
      }`;
      return prev;
    },
    {}
  );

  return type === "pixel"
    ? (array as unknown as RecordType<PixelType>)
    : (array as unknown as RecordType<RemType>);
}
