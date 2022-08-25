import React from 'react';
import { createComponent } from 'theme/create';

const Stack = createComponent('div', {
    defaultSprinkles: {
        display: 'flex',
        padding: 'sm'
    }
});

export { Stack };
