import { ElementType, ReactNode } from 'react';
import { RuntimeFn } from '@vanilla-extract/recipes/dist/declarations/src/types';
export declare type RecordProps = Record<string, unknown>;
export declare const styleComponent: <S extends (...args: any) => any>(sprinklesFn: S, componentType: ElementType, children: ReactNode, props: RecordProps, defaultStyle?: string, defaultSprinkles?: Parameters<S>[0], variantFn?: RuntimeFn<{}>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
