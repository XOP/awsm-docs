# AWSM Design System Documentation Website Slingshot 

## About

AWSM Docs is practically a template for a quick scaffolding of Design System (or UI library) documentation.  
It is built with [Astro](https://astro.build/) and relies on [MDX](https://docs.astro.build/en/guides/markdown-content/) for documentation, which is non-developer friendly. However the most interesting part is using [storybook](https://storybook.js.org/) stories format both for development and examples in the docs website.


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


## Usage


## Technologies


## [LICENSE](./LICENSE)
