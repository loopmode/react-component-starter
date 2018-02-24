# react component starter

## What is it?

It's a boilerplate project for working on reusable react components.
The idea is to have a full setup for building a react component, and at the same time
use a `react-create-app` app for previewing your component and providing a demo/example.

* Preconfigured `eslint` and `prettier`, works with `Sublime Text` with `SublimeLinter` out-of-the-box
* Preconfigured `esdoc` for documentation
* Preconfigured `jest` for testing
* Uses a `create-react-app` app in `/demo` to preview your component in a "realistic scenario"

Consider working with https://github.com/storybooks/storybook instead - it might be a better alternative.

## How do I use it?

This is a boilerplate/template project. You clone it, then adjust it to fit your needs.

* remove the `.git` folder
* adjust package.json - make sure you specify a correct package name
* adjust this readme file

**NOTE:** Use `yarn setup` to install both the component and demo app dependencies!

### CRA demo app

In order to use the app in `/demo` for "live preview" while you are working, you need to make your module available to the app.
The easiest way to achieve this is to `link` your module.

* Run `yarn link` in the module folder (e.g. in this folder)
* Run `yarn link <your-package-name>` in the `/demo` folder

E.g. if package name is `my-cool-module`

```javascript
yarn link
cd demo
yarn link my-cool-module
```

### package scripts

* `yarn build` builds the code from `/src` (es6+) to `/lib` (es5)
* `yarn build --watch` keeps watching and recompiling
* `yarn test` runs the tests once
* `yarn test --watch` keeps watching and testing (Note: this only works when your project is under git version control. Use `--watchAll` otherwise)
* `yarn docs` builds the documentation
* `yarn demo` starts the development server for the `/demo` app. Same as `cd demo && yarn start`

### So how do I really use it?

A typical workflow heavily relies on the `demo` app. So, you should have set up the `link` already.
Then, you would manually launch two processes: One that keeps building your component via `yarn build --watch`, and one that keeps building the `demo` app via `yarn demo`.
That way, you basically get a full, hot-reloaded live working environment.

## Upgrading to react 16:

This is using react 15. If you want to upgrade to react 16, make sure to install the same version for the `react-test-renderer`, or the tests will not run:

```javascript
yarn add react@16.2.0 react-dom@16.2.0 && yarn --dev react-test-renderer@16.2.0
```
