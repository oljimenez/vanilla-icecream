import React from 'react';
import { RuntimeFn } from '@vanilla-extract/recipes/dist/declarations/src/types';
import { RecipeVariants } from '@vanilla-extract/recipes';
import {
    ComponentType,
    PropsWithSprinkles,
    Sprinkles,
    styleComponent
} from 'theme';

export const createComponent = <
    T extends ComponentType,
    F extends RuntimeFn<{}> = RuntimeFn<{}>
>(
    type: T,
    defaultSprinkles?: Sprinkles,
    variantFn?: F
) => {
    type Type = T extends 'button'
        ? React.ButtonHTMLAttributes<HTMLButtonElement>
        : T extends 'img'
        ? React.ImgHTMLAttributes<HTMLImageElement>
        : React.HTMLAttributes<HTMLDivElement>;

    return ({
        children,
        ...props
    }: PropsWithSprinkles<Type, RecipeVariants<F>>) => {
        return styleComponent(
            type,
            { ...defaultSprinkles, ...props },
            children,
            variantFn
        );
    };
};
