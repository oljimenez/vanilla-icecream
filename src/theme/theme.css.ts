import {
    createGlobalTheme,
    createTheme,
    createThemeContract
} from '@vanilla-extract/css';
import { breakpointScales } from 'theme/values/scales';
import { createValues } from 'theme/values/values';

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
    space: {
        ...breakpointValues
    },
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

const colors = createThemeContract({
    primary: null,
    secondary: null,
    background: null,
    text: {
        normal: null,
        dimmed: null
    }
});

export const lightTheme = createTheme(colors, {
    primary: '#1E40AF',
    secondary: '#DB2777',
    background: '#EFF6FF',
    text: {
        normal: '#1F2937',
        dimmed: '#6B7280'
    }
});

export const darkTheme = createTheme(colors, {
    primary: '#60A5FA',
    secondary: '#F472B6',
    background: '#1F2937',
    text: {
        normal: '#F9FAFB',
        dimmed: '#D1D5DB'
    }
});
