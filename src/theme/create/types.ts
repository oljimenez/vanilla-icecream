import { Sprinkles } from 'theme/sprinkles';
import { VariantSelection } from '@vanilla-extract/recipes/dist/declarations/src/types';

export type ComponentType = 'div' | 'button' | 'img';

export type PropsWithSprinkles<
    T,
    V extends VariantSelection<{}> | undefined = never
> = Omit<T, keyof Sprinkles> &
    Sprinkles & {
        variant?: V;
    };
