import { defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from 'theme/theme.css';

export const colorProperties = defineProperties({
    conditions: {
        lightMode: { '@media': '(prefers-color-scheme: light)' },
        darkMode: { '@media': '(prefers-color-scheme: dark)' }
    },
    defaultCondition: ['lightMode', 'darkMode'],
    properties: {
        color: vars.color,
        background: vars.color
    }
});
