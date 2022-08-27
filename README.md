## Getting Started

To start locally you need "npm" and "node" in your machine

ATTENTION "This project use [vanilla-extract](https://vanilla-extract.style/) as base method of style" ATTENTION

To install dependencies:
- run "yarn" or "npm install"

To start development mode:
- run "yarn dev" or "npm run dev" 

To build this project:
- run "yarn build" or "npm run build"

You can see an example react code in [index.tsx](https://oscar-vanilla-kit.vercel.app/src/pages/index.tsx)

You can see an example of components in [components](https://oscar-vanilla-kit.vercel.app/src/components)

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
 function that you create previously. It will return a React Component. Something like this.
- This function need a required parameter called `type`, that allow you to define the type 
 of the component that you are creating. This allows you to create all type of HTML component
 and one give your component the native props of that type of component.
- An example is html `button` vs `div`, `button` element have it a native prop called type 
 and `div` does not have it
```tsx
   //Box now is a React Component and you can use it everywhere you want
  const Box = createComponent('div');
```

Step 2.1:
- To this function you can pass others props for `Default Styles`as second optional parameter. 
- This prop give you 3 - 4 ways of  you apply default styles to your component.

```tsx
   //Example of build a Center component
  const Center = createComponent('div', {
        //defaultStyle receives a string that is used to apply styles to the className prop.
        //You can also pass your style results to the vanilla-extract style function.
        //You can use this prop to reset component styles as you want.
        defaultStyle: 'd-flex center-items',
                    //or
        defaultStyle: componentStyle,
   
        //defaultSprinkles allow you to define default sprinkles props for your component,
        //the nice side of this approach is that it gives you the typing of your sprinkles props :).
        defaultSprinkles: {
           display: 'flex',
           flexPlaceItems: 'center',
           background: { lightMode: 'primary.100', darkMode: 'primary.100' }
        },
   
        //In this prop you can pass the return function that vanilla-extract give you when you create
        // a new variant with the vanilla-extract recipe function. This give you a variant prop that
        // you can use to choose the variant of the component.
        variantFn: componentVariants
   });
```
- You can also mix them, but be "CAREFUL" because you can end up with some rewritten style

Step 2.2:
- The return component has 2 additional props in addition to the properties of your sprinkles 
  and the default properties of the component. One is `variant` and the other is `as`.
- `variant` give you the ability to select the variant of the component
- `as` give you the ability to change the type of the component. 

```tsx
        //Example of as and variant props
        <Heading as={'h1'} variant={{ style:'bigText', color:'redText' }} >
            Build with Vanilla Kit
        </Heading>
```

Step 3:
- Edit all the `sprinklesProperties` as you like without need of edit the components
- The properties of this project you can find them in [here](https://github.com/oscarprogrammer1996/vanilla-kit/tree/main/src/theme/sprinkles/properties)

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




