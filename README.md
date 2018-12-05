# Premiere MERN Stack

## About
Simple enough to build on, complex enough to take you all the way.

This stack gets you up and running with dev absolutes. Webpack Dev Server for HMR integrated with an Express API server. Mongoose and MongoDB for your database, Code splitting at the route level for small bundle sizes, elegant linting with smart defaults for consistency and all the other goodies that come from a MERN stack using the latest and greatest. See the full feature list below

## Features
- React Router Client Side Routing
- Code Splitting at the Route Level for Dynamic Imports
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
    ├── public/                     # This is where files built with webpack are kept
    ├── server/                     # Server side code including DB models, API routes etc
    |   ├── db/                     # Where all DB models and schemas are stored and registered
    |   ├── api.js                  # Where requests to `/api` are handled
    |   ├── clientSideRoutes.js     # Define client side routes - See note below on client side and server side routing
    |   ├── index.js                # Entrypoint for your server
    ├── src/                        # Where your components live
    |   ├── Navbar/                 # A component called `Navbar`
    |   ├── Routes/                 # A component called `Routes`, sets up react router for client side routing
    |   |   ├── index.jsx           # Declare all your `Route`s here and the components they map to
    |   |   ├── LazyLoadRoutes.jsx  # Allows you to lazy load your route components to reduce bundle size
    |   ├── styles/                 # Global styles folder
    |   ├── index.jsx               # Entrypoint, this is where react binds the component to a div with an ID of root
    ├── node_modules/               # A black hole
    ├── .babelrc                    # Defines settings for babel transpiling
    ├── .env                        # Defines environment variables
    ├── .eslintrc                   # Defines rules for ESLint
    ├── .gitignore                  # Files to be ignored by git/docker
    ├── .stylelintrc                # Defines rules for CSS/SCSS/LESS linting
    ├── HTMLTemplate.js             # HTML template used by webpack to generate static HTML page
    ├── package-lock.json           # Wizardy
    ├── package.json                # Info on your project and its dependencies
    ├── postcss.config.js           # Defines rules for PostCSS
    ├── webpack.config.js           # Defines webpack config
```

## Note on client side and server side routing
There is an issue in hanlding client and server side routing. Mainly when using client side routing, if you are on a page `/settings` and refresh the page, a request is made to the server for `/settings`. Since however you are using client side routing, the server has no idea this route exists and will return a 404. To solve this problem, the server has to know what routes are valid on the client. This is done by declaring client side routes in the server via an array. The server will then check to see if the request made is valid (if the url is in the array). If so, the server sends back the HTML file which then allows the client side router to take over.

This means that all client side routes declared in `src/Routes/index.jsx` must be stored in the array in `server/clientSideRoutes.js`. An example is already set up to help make it clear where the route needs to go and how it should be formatted.

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
