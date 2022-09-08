/// <reference types="react" />
import { RuntimeFn, VariantSelection } from '@vanilla-extract/recipes/dist/declarations/src/types';
import { RecipeVariants } from '@vanilla-extract/recipes';
declare type Props<S, T, V extends VariantSelection<{}> | undefined = never> = Omit<T, keyof S> & S & {
    variant?: V;
    as?: keyof JSX.IntrinsicElements;
};
declare type PropsType<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T];
export declare const createComponentWithSprinkles: <S extends (...args: any) => any>(sprinklesFn: S) => <T extends keyof JSX.IntrinsicElements, F extends RuntimeFn<{}> = RuntimeFn<{}>>(type: T, defaultStyles?: {
    defaultSprinkles?: Parameters<S>[0];
    defaultClassName?: string;
    variantFn?: F;
}) => ({ children, ...props }: Props<Parameters<S>[0], PropsType<T>, RecipeVariants<F>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
