import { defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "../theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "grid"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end"],
    zIndex: ["auto", "inherit", "initial"],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    width: vars.width,
    height: vars.height,
    borderRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    textAlign: ["center"],
  },
  shorthands: {
    placeItems: ["justifyContent", "alignItems"],
    itemSize: ["height", "width"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    typeSize: ["fontSize", "lineHeight"],
  },
});

export default responsiveProperties;
