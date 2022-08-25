import React from 'react';
import { RuntimeFn } from '@vanilla-extract/recipes/dist/declarations/src/types';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { styleComponent } from './styleComponent';
import { ComponentType, Props } from './types';
import { sprinkles } from 'theme/sprinkles';

export const createComponentWithSprinkles = <S extends (...args: any) => any>(
    sprinklesFn: S
) => {
    type Sprinkles = Parameters<typeof sprinklesFn>[0];

    type CreateComponentProps<F> = {
        defaultStyle?: string;
        defaultSprinkles?: Sprinkles;
        variantFn?: F;
    };

    return <T extends ComponentType, F extends RuntimeFn<{}> = RuntimeFn<{}>>(
        type: T,
        componentProps?: CreateComponentProps<F>
    ) => {
        type Type = T extends 'button'
            ? React.ButtonHTMLAttributes<HTMLButtonElement>
            : T extends 'input'
            ? React.InputHTMLAttributes<HTMLInputElement>
            : T extends 'img'
            ? React.ImgHTMLAttributes<HTMLImageElement>
            : React.HTMLAttributes<HTMLDivElement>;

        return ({
            children,
            ...props
        }: Props<Sprinkles, Type, RecipeVariants<F>>) => {
            return styleComponent(
                sprinklesFn,
                type,
                children,
                props,
                componentProps?.defaultStyle,
                componentProps?.defaultSprinkles,
                componentProps?.variantFn
            );
        };
    };
};

export const createComponent = createComponentWithSprinkles(sprinkles);
