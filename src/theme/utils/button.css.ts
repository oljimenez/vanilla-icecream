import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    color: "#000000",
    padding: "0.5rem 2rem",
    borderRadius: "0.2rem",
    fontSize: "1rem",
  },
  variants: {
    style: {
      primary: {
        backgroundColor: "#ff0000",
        boxShadow: "0 0 1rem #ff0000",
        ":hover": {
          backgroundColor: "rgba(255,0,0,0.50)",
          color: "#ffffff",
        },
      },
      secondary: {
        backgroundColor: "#0032ff",
        boxShadow: "0 0 1rem #0032ff",
        ":hover": {
          backgroundColor: "rgba(0,50,255,0.5)",
          color: "#ffffff",
        },
      },
    },
  },
  defaultVariants: {
    style: "primary",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
