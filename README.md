## Getting Started

To start locally you need "npm" and "node" in your machine

ATTENTION "This proyect use vanilla-extract as base method of style" ATTENTION
look at the docs for help https://vanilla-extract.style/

To install dependencies:
- run "yarn" or "npm install"

To start development mode:
- run "yarn dev" or "npm run dev" 

To build this project:
- run "yarn build" or "npm run build"

You can see en example in https://oscar-vanilla-kit.vercel.app/

Go to src/pages/index.tsx to see the result code example for now

Sorry this need some good docs but is a starter project for now,
and i'm planning to convert it to a helper library

```bash

# How to create component?

Step 1:
- Create a .ts file and call createComponentWithSprinkles(sprinkles) and
 passing ur "sprinkles" function result of "createSprinkles" from "vanilla-extract".
 It will return a function, let call him  "createComponent" that allow you to
 create custom React Components with all your sprinkles parameters as props.
 
 //your sprinkles function result
  const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties,
    unResponsiveProperties
);

  //using "createComponentWithSprinkles" function to generate your magic function
   const createComponent = createComponentWithSprinkles(sprinkles);

Step 2:
- Create a .tsx file for your component, example "Box.tsx" and call createComponent 
function that you create previously. It will return a react component. Something like this 

  const Box = createComponent('div');

Step 3:
- Edit all the sprinklesProperties as you like, in this example you can found them
in src/theme/sprinkles/properties folder

Result: 
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




