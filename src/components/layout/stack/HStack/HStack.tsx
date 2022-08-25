import React from 'react';
import { createComponent } from 'theme/helper';

const HStack = createComponent('div', {
    defaultSprinkles: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export { HStack };
