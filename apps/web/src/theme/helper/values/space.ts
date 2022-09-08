const createScaleFn = (base: number, sum: number, initial: number) =>
    `${(base + initial / sum) * sum}px`;

type CreateSpacesProps = {
    sum: number;
    initial: number;
    spacesNames: string[];
};

export const createSpaces = ({
    sum,
    initial,
    spacesNames
}: CreateSpacesProps) => {
    return spacesNames.reduce<Record<string, string>>(
        (prev, space, currentIndex) => {
            prev[space] = createScaleFn(currentIndex, sum, initial);
            return prev;
        },
        {}
    );
};
