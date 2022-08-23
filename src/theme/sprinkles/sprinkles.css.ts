import { createSprinkles } from '@vanilla-extract/sprinkles';
import colorProperties from './colors.css';
import responsiveProperties from './responsive.css';
import unResponsiveProperties from 'theme/sprinkles/unresponsive.css';

export const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties,
    unResponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
