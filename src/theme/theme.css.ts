import { createGlobalTheme } from '@vanilla-extract/css';
import { breakpointScales } from 'theme/helper/values/scales';
import { createValues } from 'theme/helper/values/values';

const breakpointValues = {
    none: '0px',
    sm: breakpointScales(0),
    md: breakpointScales(1),
    lg: breakpointScales(2),
    xl: breakpointScales(3),
    '2xl': breakpointScales(4),
    '3xl': breakpointScales(5),
    '4xl': breakpointScales(6),
    '5xl': breakpointScales(7)
};

const widthVars = {
    '100%': '100%',
    '100vw': '100vw',
    '90vw': '90vw',
    '20rem': '20rem',
    full: '100%',
    fullViewport: '100vw'
};

const heightVars = {
    '100%': '100%',
    '100vh': '100vh',
    '90vh': '90vh',
    full: '100%',
    fullViewport: '100vh'
};

export const vars = createGlobalTheme(':root', {
    space: breakpointValues,
    color: {
        white: '#fff',
        black: '#000',
        red: '#ff0000',
        blue: '#0000ff',
        error: '#F11122',
        'error.100': '#F11122',
        'error.200': '#E01020',
        'error.300': '#B90F1C',
        'error.400': '#840811',
        'error.500': '#250606'
    },
    breakpointValues,
    fontFamily: {
        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    width: {
        ...widthVars,
        ...createValues('pixel'),
        ...createValues('rem')
    },
    height: {
        ...heightVars,
        ...createValues('pixel'),
        ...createValues('rem')
    }
});
