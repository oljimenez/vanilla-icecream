import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body, #__next", {
  height: "100%",
  margin: "0px",
  padding: "0px",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
});
