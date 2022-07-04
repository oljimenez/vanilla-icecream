import { sprinkles, vars } from "theme";
import { style, styleVariants } from "@vanilla-extract/css";

export const boxCss = sprinkles({
  display: "flex",
  paddingX: "base",
  flexDirection: {
    mobile: "column",
    desktop: "row",
  },
  background: {
    lightMode: "black",
    darkMode: "white",
  },
});

export const base = style({
  display: "flex",
  padding: "10px",
});

export const color = styleVariants(vars.color, (value) => ({
  background: value,
}));
