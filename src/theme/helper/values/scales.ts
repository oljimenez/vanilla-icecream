import { modularScale } from "polished";

export const baseScale: number = 4;

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

export const breakpointScales = createScale(2, baseScale);
