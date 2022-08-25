import React from 'react';
import { createComponent } from 'theme/helper';

const VStack = createComponent('div', {
    defaultSprinkles: {
        display: 'flex',
        flexDirection: 'column'
    }
});

export { VStack };
