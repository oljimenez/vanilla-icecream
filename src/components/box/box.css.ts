import { sprinkles } from "theme";

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
