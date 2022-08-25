import { buttonVariants } from './button.css';
import { createComponent } from 'theme/create';

const Button = createComponent('button', { variantFn: buttonVariants });

export { Button };
