# React component starter

A boilerplate project for developing react components as standalone npm packages.  
After the initial setup, you can easily work on components in isolation while using them in larger projects.

## Usage

### package.json
Make sure `"name"` is unique and does not collide with the name of another package.  

### build
`npm run build` to create a transpiled ES5 version of your `./src` and copies it to `./lib`, which is your actual export dir.  
`npm run build-watch` to keep rebuilding whenever any source files change.

### react-dev-server
Run `npm start` to start a development server and preview your component in the browser, standalone.

### npm link
Run `npm link` in the root folder of the package. 
Then, in your actual projects, install it with `npm link your-package-name` and use it just like you would use any other npm module.  
This created a symlink relation, so whenever you rebuild to the `./lib` folder, the changes are immediatly available to the projects depending on your package.

### in your code

Using ES6:

    import MyModule from 'your-package-name';

Using CommonJS:

    var MyModule = require('your-package-name');

## Notes
  
- If you work on multiple components simultanously and need multiple live previews too, you must specify a different port in each `webpack.config.js`.

## Todos

- Add setup for testing the component
- Find a way to trigger hot reload when using `npm link` and `npm run build-watch` together
