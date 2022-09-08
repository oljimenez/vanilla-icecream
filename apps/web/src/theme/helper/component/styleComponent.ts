import { createElement, ElementType, ReactNode } from 'react';
import { RuntimeFn } from '@vanilla-extract/recipes/dist/declarations/src/types';

export type RecordProps = Record<string, unknown>;

export const styleComponent = <S extends (...args: any) => any>(
    sprinklesFn: S,
    componentType: ElementType,
    children: ReactNode,
    props: RecordProps,
    defaultStyle?: string,
    defaultSprinkles?: Parameters<S>[0],
    variantFn?: RuntimeFn<{}>
) => {
    const { as, ...rest } = props;

    const { sprinklesProps, elementProps, variantProps } = extractParams(
        sprinklesFn,
        {
            ...rest,
            ...defaultSprinkles
        }
    );
    const { className, ...restProps } = elementProps;

    return createElement(
        as ? (as as string) : componentType,
        {
            className: [
                className,
                sprinklesFn(sprinklesProps),
                variantFn ? variantFn(variantProps) : '',
                defaultStyle
            ]
                .filter((value) => typeof value !== 'undefined' && value !== '')
                .join(', '),
            ...restProps
        },
        children
    );
};

const getSprinklesParams = (sprinkles: Record<string, any>) => {
    const sprinklesParams: string[] = [];

    sprinkles['properties'].forEach((value: string) => {
        sprinklesParams.push(value);
    });
    return sprinklesParams;
};

const extractParams = <S extends (...args: any) => any>(
    sprinkles: S,
    props: Object
) => {
    const Props = props as Record<string, unknown>;
    const sprinklesParams = getSprinklesParams(sprinkles);
    const sprinklesProps: RecordProps = {};
    const elementProps: RecordProps = {};
    let variantProps: RecordProps = {};

    Object.keys(props).forEach((key) => {
        if (sprinklesParams.includes(key)) {
            sprinklesProps[key] = Props[key];
        } else if (key === 'variant') {
            variantProps = Props[key] as RecordProps;
        } else {
            elementProps[key] = Props[key];
        }
    });

    return { sprinklesProps, elementProps, variantProps };
};
