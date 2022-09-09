import {
    RuntimeFn,
    VariantSelection
} from '@vanilla-extract/recipes/dist/declarations/src/types';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { styleComponent } from './styleComponent';

type Props<S, T, V extends VariantSelection<{}> | undefined = never> = Omit<
    T,
    keyof S
> &
    S & {
        variant?: V;
        as?: keyof JSX.IntrinsicElements;
    };

type PropsType<T extends keyof JSX.IntrinsicElements> =
    JSX.IntrinsicElements[T];

export const createComponentWithSprinkles = <S extends (...args: any) => any>(
    sprinklesFn: S
) => {
    type Sprinkles = Parameters<typeof sprinklesFn>[0];

    return <
        T extends keyof JSX.IntrinsicElements,
        F extends RuntimeFn<{}> = RuntimeFn<{}>
    >(
        type: T,
        defaultStyles?: {
            defaultSprinkles?: Sprinkles;
            defaultClassName?: string;
            variantFn?: F;
        }
    ) => {
        return ({
            children,
            ...props
        }: Props<Sprinkles, PropsType<typeof type>, RecipeVariants<F>>) => {
            return styleComponent(
                sprinklesFn,
                type,
                children,
                props,
                defaultStyles?.defaultClassName,
                defaultStyles?.defaultSprinkles,
                defaultStyles?.variantFn
            );
        };
    };
};

