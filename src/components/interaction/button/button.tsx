import { buttonVariants } from './button.css';
import { createComponent } from 'theme/helper';

const Button = createComponent('button', { variantFn: buttonVariants });

export { Button };
