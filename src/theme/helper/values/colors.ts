type RGB = `rgb(${number}, ${number}, ${number})`;
type HSV = `hsl(${number}, ${number}%, ${number}%)`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX | HSV;

type ColorRecord = Record<string, string | Record<number, Color>>;

type ReturnColor<ObjectType extends ColorRecord> = {
    [Key in NestedKeyOf<ObjectType>]: Key;
};

type NestedKeyOf<ObjectType extends ColorRecord> = {
    [Key in keyof ObjectType &
        (string | number)]: ObjectType[Key] extends ColorRecord
        ? `${Key}.${SecondNestedKeyOf<ObjectType[Key]>}`
        : `${Key}`;
}[keyof ObjectType & (string | number)];

type SecondNestedKeyOf<ObjectType extends ColorRecord> = {
    [Key in keyof ObjectType &
        (string | number)]: ObjectType[Key] extends string ? `${Key}` : never;
}[keyof ObjectType & (string | number)];

export const createColors = <T extends ColorRecord>(
    colorRecord: T,
    returnObj: Record<string, string> = {}
) => {
    const keys = Object.keys(colorRecord);

    return keys.reduce((prev, key) => {
        if (typeof colorRecord[key] === 'string') {
            prev[key] = colorRecord[key] as string;
        } else {
            Object.keys(colorRecord[key]).forEach((secondKey) => {
                prev[`${key}.${secondKey}`] =
                    colorRecord[key][parseInt(secondKey)];
            });
        }
        return prev;
    }, returnObj) as unknown as ReturnColor<T>;
};
