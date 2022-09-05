# 🍦 Vanilla Cone

# What is vanilla-cone?

A utility library for 🧁[vanilla-extract][vanilla-extract].
- [🍦 Vanilla Cone](#-vanilla-cone)
  - [How to Install](#how-to-install)
  - [Advanced Functions](#advanced-functions)
    - [createComponentWithSprinkles](#createcomponentwithsprinklessprinkles)
  - [Utility Functions](#utility-functions )
    - [createColors](#createcolors)
  - [API](#api)
    - [createComponentWithSprinkles(sprinkles)](#--createcomponentwithsprinkles)
    - [createColors(colorRecord)](#--createcolors)
  - [Thanks](#thanks)


## How to install?

Install the package:

```
$ npm i vanilla-cake
   #or
$ yarn add vanilla-cake
   #or
$ pnpm i vanilla-cake
```
> This packages is dedicated to use with `react` and `vanilla-extract`. But in the future can be adpated to use with others framworks.


### Define your atoms

Configure [vanilla-extract](https://github.com/seek-oss/vanilla-extract) and [`sprinkles`](https://github.com/seek-oss/vanilla-extract/tree/master/packages/sprinkles) and have your atoms ready:

```css.ts
// sprinkles.css.ts
import { createSprinkles, defineProperties} from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: 4,
  medium: 8,
  large: 16,
};
const colors = {
  primary: 'blue',
  // ...
};
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  properties: {
    padding: space,
    backgroundColor: colors,
    // ...
  },
  // ...
});

export const sprinkles = createSprinkles(responsiveProperties);
```

> Check `sprinkles` [docs](https://github.com/seek-oss/vanilla-extract/tree/3360bdfc9220024e7ffa49b3b198b72743d4e264/packages/sprinkles#setup) for more context into how to create these atoms.


## Advanced Functions

### createComponentWithSprinkles(sprinkles)

This function allow you to create a component and adding all your `sprinkles` props.
> This function is dedicated to use only with `react` for now.

Step 1: Create a `.ts` file and use `createComponentWithSprinkles(sprinkles)`function to generate your magic function, let's call that function `createComponent` in the utils folder of our project for this example.

```ts
// utils/createComponent.ts
import { createComponentWithSprinkles } from 'vanilla-cone';
import { sprinkles } from '../sprinkles.css';

const createComponent = createComponentWithSprinkles(sprinkles);
```

Step 2: Create a `.tsx` file for your component, example `Box.tsx` and call `createComponent`
function that you create previously. This function need a required parameter called `type`, that allow you to define the type of the component that you are creating. This allows you to create all type of HTML component like `div`, `button`, `input`, `img`, ...etc, and give your component the native props of that type of component.

```tsx
// box.tsx
import { createComponent } from 'utils/createComponent';

const Box = createComponent('div');
```

> An example is html `button` vs `div`, html `button` element have it a native prop called `type` and html `div` does not have it. So you will get the correct types for your component.


Step 2.1: You can pass a second optional parameter to this `createComponent` function for give your component default styles. This parameter give you 3 - 4 ways of you apply default styles to your component.

- You can use the `defaultClassName` property to assign default values ​​to the html `className` property.
```.tsx
// center.tsx
import { createComponent } from 'utils/createComponent';
import { componentStyle } from 'component.css';

const Center = createComponent('div', {
    defaultClassName: 'd-flex center-items',
    //or
    defaultClassName: componentStyle,
});
```

- You can use the `defaultSprinkles` property to assign default sprinkles values.
```tsx
// center.tsx
import { createComponent } from 'utils/createComponent';

const Center = createComponent('div', {
    defaultSprinkles: {
        display: 'flex',
        flexPlaceItems: 'center',
        background: { lightMode: 'primary.100', darkMode: 'primary.400' }
    },
});
```

- You can use the `variantFn` property to assign default variants to your component. You have to pass the result of the `recipe` function of `vanilla-extract`.
```css.ts
// center.css.ts
import { recipe } from '@vanilla-extract/recipes';

export const componentVariants = recipe({
    ....
});
```

```tsx
// center.tsx
import { createComponent } from 'utils/createComponent';
import { componentVariants } from './center.css'

const Center = createComponent('div', {
    variantFn: componentVariants
});
```
> You can also mix them, but is not recomended.

Step 2.2: The return component has 2 additional props in addition to the properties of your sprinkles and the default html properties of the component. One is `variant` and the other is `as`.
-   `variant` give you the ability to select the variant of the component.
-   `as` give you the ability to change the type of the component.

```tsx
//Example of as and variant props
<Heading as={'h1'} variant={{ style: 'bigText', color: 'redText' }}>
    Build with Vanilla Kit
</Heading>
```

### Example Result Component
```tsx
<Box
    display={'flex'}
    justifyContent={{ mobile: 'center', desktop: 'space-between' }}
    alignItems={'center'}
    padding={'sm'}
    background={{ lightMode: 'error.200', darkMode: 'error.100' }}
    color={'error.200'}
>
    Example
</Box>
```


## Utility Functions

### createColors

This function allow you to extend the form of represent your colors when your defining your vars.

Default of `vanilla-extract`

```.ts

//colors.css.ts
import { createColors } from 'vanilla-cone';

export const colors = {
    white: '#FFF',
    black: '#000',
    "primary.100":"#11F1BB",
    "primary.200":"#10E0AE",
};

```
```.ts
//theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { colors } from './colors.css';

export const vars = createGlobalTheme(':root', {
    colors: colors,
    ...
});
```

With `createColors` function

```.ts

//colors.css.ts
import { createColors } from 'vanilla-cone';

export const colors = createColors({
    white: '#FFF',
    black: '#000',
    primary: {
        100: '#11F1BB',
        200: '#10E0AE',
        ...
    },
    error: {
        100: '#F11122',
        200: '#E01020',
        ...
    },
    neutral: {
        100: '#E0E0E0',
        200: '#A0A0A0',
        ...
    }
});

```
```.ts
//theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { colors } from './colors.css';

export const vars = createGlobalTheme(':root', {
    colors: colors,
    ...
});
```

> Also, the result is a `Color` type, so only accept this color types: RGB | RGBA | HEX | HSV


## API

### - createComponentWithSprinkles
```.ts
createComponentWithAtoms: (sprinkles: SprinklesFn) => 
(type: JSX.IntrinsicElements, defaultStyles?: { 
 defaultClassName?: string,
 defaultSprinkles?: Parameters<typeof sprinkles>[0],
 variantFn?: RecipeVariants 
})
 => ReactElement
```

### - createColors
```.ts
createColors: (colorRecord: Record<string, string | Record<number, Color>>) => 
Record<string, Color>

type Color = RGB | RGBA | HEX | HSV;

```

## Thanks

Thanks to the team of `vanilla-extract` for creating so amazing libraries.


[sprinkles]: https://github.com/seek-oss/vanilla-extract/tree/master/packages/sprinkles
[vanilla-extract]: https://github.com/seek-oss/vanilla-extract
[recipes]: https://github.com/seek-oss/vanilla-extract#recipes-api