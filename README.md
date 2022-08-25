## Getting Started

To start locally you need "npm" and "node" in your machine

ATENTION "This proyect use vanilla-extract as base method of style"
look at the docs for help https://vanilla-extract.style/

run "yarn dev" or "npm run dev" to start development

run "yarn build" or "npm run build" to build proyect

You can see en example in https://oscar-vanilla-kit.vercel.app/

Go to src/pages/index.tsx to see the result code example for now

Sorry this need some good docs but is a starter proyect for now,
and i'm planning to convert it to a helper library

```bash

# How to create component?

Step 1:
- Create a .ts file and call createComponentWithSprinkles(sprinkles) and
 passing ur sprinkles function result of createSprinkles from vanilla-extract.
 It will return a function, let call him  "createComponent" that allow you to
 create custom React Components with all your sprinkles parameters as props.
 
Step 2:
- Create a .tsx file for your component, example Box.tsx and call createComponent 
function that you create previously.

Step 3:
- Edit all the sprinklesProperties as you like, in this example you can found them
in src/theme/sprinkles/properties folder

Result: 
    <Box display={'flex'} justifyContent={'center'} padding={'sm'}>
         Example
    </Box>




