import React from 'react';
import { createComponent } from 'theme/utils';

const HStack = createComponent('div', {
    defaultSprinkles: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export { HStack };
