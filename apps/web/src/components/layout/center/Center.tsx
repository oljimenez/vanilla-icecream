import React from 'react';
import { createComponent } from 'theme/utils';

const Center = createComponent('div', {
    defaultSprinkles: {
        display: 'flex',
        flexPlaceItems: 'center'
    }
});

export { Center };
