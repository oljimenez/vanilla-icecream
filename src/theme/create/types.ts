import { VariantSelection } from '@vanilla-extract/recipes/dist/declarations/src/types';

export type Props<
    S,
    T,
    V extends VariantSelection<{}> | undefined = never
> = T &
    S & {
        variant?: V;
    };

export type RecordProps = Record<string, unknown>;
