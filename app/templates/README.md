# Premiere MERN Stack

## About
Simple enough to build on, complex enough to take you all the way.

This stack gets you up and running with dev absolutes. Webpack Dev Server for HMR integrated with an Express API server. Mongoose and MongoDB for your database, models, and session store. Elegant linting with smart defaults for consistency and all the other goodies that come from a MERN stack using the latest and greatest.

## Getting Started
1. Run `npm i -g yo generator-premiere-mern-stack`
2. Make your project directory and cd into it `mkdir my_proj && cd my_proj`
3. Run `yo premiere-mern-stack`
4. To connect to MongoDB simply add to the `.env` file  `DB_URI=<YOUR_URI_HERE>`
5. Run `npm start` to begin your premiere developer experience

## Docker Support
`npm run docker` will create and run the site inside a docker container. Port 3000 is mapped so you can continue to view the running container locally.

## Folder Structure
Below is the folder structure for projects made with this generator with an explanation of what each folder contains or what the file is for. This is not an exhaustive list of every file but outlines most of them and their function. More information can be found in some of the files themselves about what they do and how they work.

```
- proj_root/
    - public/ - This is where files built with webpack are placed. This folder is recreated when building with webpack automatically and should not be committed to your codebase

    - server/ - Your server code including DB models and API routes
        - db/ - Where all DB models and schemas are stored and registered
        - api.js - Where requests to `/api` are handled
        - index.js - Entrypoint for your server
    - src/ - Where your components live
        - Routes/ - A component called `Routes`, sets up react-router for client side routing
            - index.jsx - Declare all your `Route`s here and the components they map to
            - LazyLoadRoutes.jsx - Allows you to lazy load your route components to reduce bundle size
        - Navbar/ - A Navbar component for the site
        - styles/ - Global styles folder
        - index.jsx - Entrypoint, this is where react binds the component to a div with an ID of root
    - node_modules/ - a black hole
    - .babelrc - Defines settings for babel transpiling
    - .env - Defines environment variables
    - .eslintrc - Defines rules for ESLint
    - .gitignore - Files to be ignored by git/docker
    - .stylelintrc - Defines rules for CSS/SCSS/LESS linting
    - HTMLTemplate.js - HTML template used by webpack to generate static HTML page
    - package-lock.json - Wizardy
    - package.json - Info on your package/module
    - postcss.config.js - Defines rules for PostCSS
    - webpack.config.js - Defines webpack config
```

## Configuration
There are many ways you can configure this stack to suit your specific needs

### Babel
- You can configure all your babel plugins via the `.babelrc`

### Stylelint
- Set your preferred order for styles in `.stylelintrc` (achieved via stylelint-order package)
- Whitelist or blacklist units that are allowed
- Control if tabs should be done with spaces or tabs
- [And many more](https://stylelint.io/user-guide/plugins/)

### ESLint
- ESLint lets you customize and enforce certain rules for your JS code like
- Enforcing `===` always instead of `==`
- Disallowing use of `var` keyword
- [And many more](https://eslint.org/docs/rules/)

