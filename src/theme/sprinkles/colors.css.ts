import { defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from '../theme.css';

const colorProperties = defineProperties({
    conditions: {
        lightMode: {},
        darkMode: { '@media': '(prefers-color-scheme: dark)' },
    },
    defaultCondition: 'lightMode',
    properties: {
        color: vars.color,
        background: vars.color,
    },
});

export default colorProperties;
