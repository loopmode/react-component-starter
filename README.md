# React component starter

A boilerplate project for developing react components as standalone npm packages.  
After the initial setup, you can easily work on components in isolation while using them in larger projects.

## Usage

1) Make sure you have node.js installed (check using the `node --version` command, install from [node.js](https://nodejs.org) or [io.js](https://iojs.org/en/) if not installed)

2) Clone the repository:

    git clone git@github.com:loopmode/react-component-starter.git

3) Then install and start the project:

    cd react-component-starter
    npm install
    npm start

### package.json
Make sure `"name"` is unique and does not collide with the name of another package.  

### build
`npm run build` to create a transpiled ES5 version of your `./src` and copy it to `./lib`, which is the module you actually export.  
`npm run build-watch` to keep rebuilding whenever any source files change.

### react-dev-server
Run `npm start` to start a development server and preview your component in the browser, standalone.

### npm link
Run `npm link` in the root folder of the package. 
Then, in your actual projects, install it with `npm link your-package-name` and use it just like you would use any other npm module.  
Now your component is symlinked into your project, so any changes you make to your component are available dependent projects right after you build your sources. Keep the `build-watch` to rebuild whenever you change your sources.

### in your actual projects

Import or require your component using ES6:

    import MyModule from 'your-package-name';

or using ES5 CommonJS:

    var MyModule = require('your-package-name');

## Notes
  
- To work on multiple standalone components simultanously, you need to tweak the `DEV_SERVER.port` settings in `webpack.config.js`.

## Todos

- Install testing environment
- Trigger hot reload in dependent projects. It must be possible!
