import React from 'react';
import { createComponent } from 'theme/utils';

const VStack = createComponent('div', {
    defaultSprinkles: {
        display: 'flex',
        flexDirection: 'column'
    }
});

export { VStack };
