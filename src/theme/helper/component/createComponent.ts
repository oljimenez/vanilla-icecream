import { RuntimeFn } from '@vanilla-extract/recipes/dist/declarations/src/types';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { styleComponent } from 'theme/helper';
import { VariantSelection } from '@vanilla-extract/recipes/dist/declarations/src/types';
import { sprinkles } from 'theme/sprinkles';

type Props<S, T, V extends VariantSelection<{}> | undefined = never> = Omit<
    T,
    keyof S
> &
    S & {
        variant?: V;
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

        componentProps?: {
            defaultSprinkles?: Sprinkles;
            defaultStyle?: string;
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
                componentProps?.defaultStyle,
                componentProps?.defaultSprinkles,
                componentProps?.variantFn
            );
        };
    };
};

export const createComponent = createComponentWithSprinkles(sprinkles);
