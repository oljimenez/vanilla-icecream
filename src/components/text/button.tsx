import React from "react";
import { button, type ButtonVariants } from "components/text/button.css";
import { Sprinkles, sprinkles, SprinklesWithVariants } from "theme/sprinkles";

type TextProps = ButtonVariants & {
  children: string;
  css?: Sprinkles;
};

const Button: React.FC<TextProps> = ({ children, css, ...variants }) => {
  return (
    <button className={`${button(variants)} ${sprinkles({ ...css })} `}>
      {children}
    </button>
  );
};

export default Button;
