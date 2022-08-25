import React from 'react';
import { createComponent } from 'theme/create';

const HStack = createComponent('div', {
    defaultSprinkles: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export { HStack };
