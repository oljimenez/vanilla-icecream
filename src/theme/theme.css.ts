import { createGlobalTheme } from "@vanilla-extract/css";
import { breakpointScales } from "theme/values/scales";
import { createValues } from "theme/values/values";

const breakpointValues = {
  none: "0px",
  sm: breakpointScales(0),
  md: breakpointScales(1),
  lg: breakpointScales(2),
  xl: breakpointScales(3),
  "2xl": breakpointScales(4),
  "3xl": breakpointScales(5),
  "4xl": breakpointScales(6),
  "5xl": breakpointScales(7),
};

const widthVars = {
  "100%": "100%",
  "100vw": "100vw",
  "90vw": "90vw",
  "20rem": "20rem",
  full: "100%",
  fullViewport: "100vw",
};

const heightVars = {
  "100%": "100%",
  "100vh": "100vh",
  "90vh": "90vh",
  full: "100%",
  fullViewport: "100vh",
};

export const vars = createGlobalTheme(":root", {
  space: {
    ...breakpointValues,
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
  width: {
    ...widthVars,
    ...createValues("pixel"),
    ...createValues("rem"),
  },
  height: {
    ...heightVars,
    ...createValues("pixel"),
    ...createValues("rem"),
  },
});
