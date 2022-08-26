## Getting Started

To start locally you need "npm" and "node" in your machine

ATTENTION "This project use [“vanilla-extract”](https://vanilla-extract.style/) as base method of style" ATTENTION

To install dependencies:
- run "yarn" or "npm install"

To start development mode:
- run "yarn dev" or "npm run dev" 

To build this project:
- run "yarn build" or "npm run build"

You can see an example react code in [“index.tsx”](https://oscar-vanilla-kit.vercel.app/src/pages/index.tsx)

You can see an example of components in [“components”](https://oscar-vanilla-kit.vercel.app/src/components)

Sorry this need some good docs but is a starter project for now,
and i'm planning to convert it to a helper library


# How to create component?

Step 1:
- Create a `.ts` file and call createComponentWithSprinkles(sprinkles) and
 passing ur `sprinkles` function result of `createSprinkles` from "vanilla-extract".
 It will return a function, let call him  `createComponent` that allow you to
 create custom React Components with all your sprinkles parameters as props.

```ts
 //your sprinkles function result
  const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties,
    unResponsiveProperties
);
```

```ts
  //using "createComponentWithSprinkles" function to generate your magic function
   const createComponent = createComponentWithSprinkles(sprinkles);
```

Step 2:
- Create a `.tsx` file for your component, example `Box.tsx` and call createComponent 
function that you create previously. It will return a React Component. Something like this 

```tsx
   //Box now is a React Component and you can use it everywhere you want
  const Box = createComponent('div');
```

Step 3:
- Edit all the `sprinklesProperties` as you like without need of edit the components
- The properties of this project you can find them in [“here”](https://github.com/oscarprogrammer1996/vanilla-kit/tree/main/src/theme/sprinkles/properties)

Result React Component: 
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




