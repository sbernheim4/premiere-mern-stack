# Premiere MERN Stack

## About
Simple enough to build on, complex enough to take you all the way.

This stack gets you up and running with dev absolutes. Webpack Dev Server for HMR integrated with an Express API server. Mongoose and MongoDB for your database, Code splitting at the route level for small bundle sizes, elegant linting with smart defaults for consistency and all the other goodies that come from a MERN stack using the latest and greatest. See the full feature list below

## Features
- React Router Client Side Routing
- Lazy Loading/Dynamic Imports for Each Route
- CSS/SASS/LESS
- Babel 7 + Webpack 4
- Webpack Dev Server + Express API Server
- HMR for CSS/SASS/LESS
- Live Reload for HTML/JS/JSX changes
- ESLint
- Stylelint
- PostCSS + Autoprefixer

## Getting Started
1. Run `npm i -g yo generator-premiere-mern-stack`
2. Make your project directory and cd into it `mkdir my_proj && cd my_proj`
3. Run `yo premiere-mern-stack`
4. To connect to MongoDB simply add to the `.env` file  `DB_URI=<YOUR_URI_HERE>`
5. Run `npm start` to begin your premiere developer experience

## Docker Support
`npm run docker` will create and run the site inside a docker container. Port 3000 is mapped so you can continue to view the running container locally.

## Folder Structure
Below is the folder structure for projects made with this generator with an explanation of what each folder contains or what the file is for. Some

```
├──proj_root/
    ├──public/                     # This is where files built with webpack are kept
    ├──server/                     # Server side code including DB models, API routes etc
    |   ├──db/                     # Where all DB models and schemas are stored and registered
    |   ├──api.js                  # Where requests to `/api` are handled
    |   ├──clientSideRoutes.js     # Define client side routes
    |   ├──index.js                # Entrypoint for your server
    ├──src/                        # Where your components live
    |   ├──Navbar/                 # A component called `Navbar`
    |   ├──Routes/                 # A component called `Routes`, sets up react router for client side routing
    |   |   ├──404/                # Component for a 404 page
    |   |   |   ├──404.jsx
    |   |   |   ├──404.scss
    |   |   ├──Home/                # Component for the home page
    |   |   |   ├──Home.jsx
    |   |   |   ├──Home.scss
    |   |   ├──Subpage/             # Component for /subpage
    |   |   |   ├──Subpage.jsx
    |   |   |   ├──subpage.scss
    |   |   ├──index.jsx           # Declare all your `Route`s here and the components they map to
    |   |   ├──LazyLoadRoutes.jsx  # Allows you to lazy load your route components to reduce bundle size
    |   ├──styles/                 # Global styles folder
    |   ├──index.jsx               # Entrypoint, this is where react binds the component to a div with an ID of root
    ├──nodemodules/                # A black hole
    ├──.babelrc                    # Defines settings for babel transpiling
    ├──.env                        # Defines environment variables
    ├──.eslintrc                   # Defines rules for ESLint
    ├──.gitignore                  # Files to be ignored by git/docker
    ├──.stylelintrc                # Defines rules for CSS/SCSS/LESS linting
    ├──HTMLTemplate.js             # HTML template used by webpack to generate static HTML page
    ├──package-lock.json           # Wizardy
    ├──package.json                # Info on your project and its dependencies
    ├──postcss.config.js           # Defines rules for PostCSS
    ├──webpack.config.js           # Defines webpack config
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
