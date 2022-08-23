import React from "react";
import { DivPropsWithSprinkles } from "theme/utils/types";
import { createComponent } from "theme/utils/createComponent";

const Flex = createComponent<Omit<DivPropsWithSprinkles, "display">>("div", {
  display: "flex",
});

export { Flex };
