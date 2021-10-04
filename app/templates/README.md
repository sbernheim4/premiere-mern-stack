# Premiere MERN Stack

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
5. Run `npm i && npm start` to begin your premiere developer experience

## Folder Structure
Below is the folder structure for projects made with this generator with an explanation of what each folder contains or what the file is for. Some

```
├──proj_root/
    ├──dist/                       # This is where files built with webpack are kept
    ├──server/                     # Server side code including API routes
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
    ├──.gitignore                  # Files to be ignored by git
    ├──.stylelintrc                # Defines rules for CSS/SCSS/LESS linting
    ├──HTMLTemplate.js             # HTML template used by webpack to generate static HTML page
    ├──package-lock.json           # Wizardy
    ├──package.json                # Info on your project and its dependencies
    ├──postcss.config.js           # Defines rules for PostCSS
    ├──webpack.config.js           # Defines webpack config
```
