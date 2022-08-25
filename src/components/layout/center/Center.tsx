import React from 'react';
import { createComponent } from 'theme/helper';

const Center = createComponent('div', {
    defaultSprinkles: {
        display: 'flex',
        flexPlaceItems: 'center'
    }
});

export { Center };
