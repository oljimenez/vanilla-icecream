import { buttonVariants } from './button.css';
import { createComponent } from 'theme/utils';

const Button = createComponent('button', { variantFn: buttonVariants });

export { Button };
