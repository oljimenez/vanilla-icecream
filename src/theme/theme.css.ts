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

const widthVars = {
  "100%": "100%",
  "100vw": "100vw",
  "90vw": "90vw",
  "20rem": "20rem",
};

const heightVars = {
  "100%": "100%",
  "100vh": "100vh",
  "90vh": "90vh",
  "20rem": "20rem",
};

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    ...breakpointValues,
    "1rem": "1rem",
  },
  color: {
    white: "#fff",
    black: "#000",
    red: "#ff0000",
    blue: "#0000ff",
  },
  borderRadius: {
    ...breakpointValues,
    "50%": "50%",
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSize: breakpointValues,
  lineHeight: breakpointValues,
  width: widthVars,
  height: heightVars,
});
