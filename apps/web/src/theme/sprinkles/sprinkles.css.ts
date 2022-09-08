import { createSprinkles } from '@vanilla-extract/sprinkles';
import {
    responsiveProperties,
    unResponsiveProperties,
    colorProperties
} from './properties';

export const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties,
    unResponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
