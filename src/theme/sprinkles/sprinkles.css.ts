import { createSprinkles } from '@vanilla-extract/sprinkles';
import colorProperties from './colors.css';
import responsiveProperties from './responsive.css';

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
