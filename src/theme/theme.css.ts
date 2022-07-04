import { createGlobalTheme } from "@vanilla-extract/css";
import { modularScale } from "polished";

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const breakpointScales = createScale(2, 4);
const breakpointValues = {
  base: breakpointScales(0),
  sm: breakpointScales(1),
  md: breakpointScales(2),
  lg: breakpointScales(3),
  xl: breakpointScales(4),
};
//{ base: '4px', sm: '8px', md: '16px', lg: '32px', xl: '64px' }

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    ...breakpointValues,
  },
  color: {
    white: "#fff",
    black: "#000",
  },
  borderRadius: breakpointValues,
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSize: breakpointValues,
  lineHeight: breakpointValues,
});
