import { createGlobalTheme } from '@vanilla-extract/css';
import { createValues } from 'theme/helper/values/values';
import { colors } from 'theme/values';
import { spaces } from 'theme/values/spaces';

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
    space: spaces,
    colors: colors,
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
