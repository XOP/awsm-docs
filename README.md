# AWSM Design System Documentation Website Slingshot 

## About

AWSM Docs is practically a template for a quick scaffolding of Design System (or UI library) documentation.  
It is built with [Astro](https://astro.build/) and relies on [MDX](https://docs.astro.build/en/guides/markdown-content/) for documentation, which is non-developer friendly. However the most interesting part is using [Storybook](https://storybook.js.org/) stories format both for development and examples in the docs website.


## Contents

Repo is organized with [nx](https://nx.dev/) and split into apps and packages.  

### Apps

Apps contain **docs**, which is the documentation project itself.

Another app is **storybook**, which is used for UI development.  
Note, that it is set up to consume stories from the relative path,  
compared to the classic in-project location.

Both apps consume and expose stories from the UI package.

### Packages

There are core and support packages.  
Core packages consist of design tokens (`awsm-tokens`) and UI library (`awsm-ui`).  
Support packages are basically configuration - `eslint-config-awsm` and `awsm-tsconfig`.


## Technologies

### UI library

UI library is represented by several classic elements from 2 categories - `Button`, `Switch` and `Disclosure`.  
Each component is using a different headless UI library for demo purposes.   
Storybook can be adjusted respectively, but in this case there's no need.

Note that I use React, however there should be no problem with using Vue, Solid etc.

Headless libraries used:

- [React Aria components](https://react-spectrum.adobe.com/react-aria/index.html)
- [Radix UI primitives](https://www.radix-ui.com/primitives)
- [Headless UI components](https://headlessui.com/)

### Styling 

There are 2 styling approaches in this project for demonstration purposes.  
First is scoped CSS in Astro, along with CSS modules. Both rely on CSS variables as design tokens.   
Second is using [vanilla-extract](https://vanilla-extract.style/) as a styling engine,  
to showcase CSS-in-JS application and JS tokens as well. 


## Usage

Install project dependencies:
```sh
yarn install
```

Run Storybook:
```sh
nx run storybook:dev
```

Run Docs locally:
```sh
nx run docs:dev
```

Similarly, build Docs:
```sh
nx run docs:build
```


## Customization

Docs app is made with customization and scaling in mind.

The structure of the website is pretty much traditional for the Design System websites,  
which gives a solid kickstart, yet there are many things that can be improved further.  

Components in docs are intentionally under-styled, just to give a sense of presentation.  
Same for functionality, pages, structure - everything can be tweaked or removed for your benefit.  


## [LICENSE](./LICENSE)
