import { sprinkles } from 'theme/sprinkles';
import { createComponentWithSprinkles } from 'theme/helper';

export type Int = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type IntTo5 = '1' | '2' | '3' | '4' | '5';
export type IntTo5With0 = IntTo5 | '0';

export type DoubleInt = '0' | Int | `${Int}${Int | '0'}`;

export const createComponent = createComponentWithSprinkles(sprinkles);
