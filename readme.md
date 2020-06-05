# create-expo-library

> CLI for creating reusable, modern Expo libraries using [watchwoman](http://npmjs.com/package/watchwoman) and create-expo-app.

[![NPM](https://img.shields.io/npm/v/create-expo-library.svg)](https://www.npmjs.com/package/create-expo-library) [![Build Status](https://travis-ci.com/transitive-bullshit/create-expo-library.svg?branch=master)](https://travis-ci.com/transitive-bullshit/create-expo-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install globally

This package requires `node >= 10`.
before install `create-expo-library` install `watchwoman` like this
```
npm i -g watchwoman
```
then install `create-expo-library`

```bash
npm install -g create-expo-library
```

## Creating a New Module

```bash
create-expo-library
```

Answer some basic prompts about your module, and then the CLI will perform the following steps:

- copy over the template
- install dependencies via yarn or npm
- link packages together for local development
- initialize local git repo


## Development

Local development is broken into two parts (ideally using two tabs).

First, run `yarn start` to watch your `yourpackage` module and automatically add into `exmaple/node_modules/yourpackage` whenever you make changes.

```bash
npm start # runs watchwoman with watch flag
```

The second part will be running the `example/` create-expo-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm start # runs your expo app bundler
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-expo-app` will live-reload your local dev server so you can iterate on your component in real-time.

![](https://media.giphy.com/media/14udF3WUwwGMaA/giphy.gif)

#### Publishing to npm

```bash
npm publish
```

This builds `commonjs` and `es` versions of your module to `dist/` and then publishes your module to `npm`.

Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

#### Deploying to Github Pages

```bash
npm run deploy
```

This creates a production build of the example `create-expo-app` that showcases your library

## Use with Expo Hooks

If you use [expo-hooks](https://expojs.org/docs/hooks-intro.html) in your project, when you debug your example you may run into an exception [Invalid Hook Call Warning](https://expojs.org/warnings/invalid-hook-call-warning.html). This [issue](https://github.com/facebook/expo/issues/14257) explains the reason, your lib and example use a different instance, one solution is rewrite the `expo` path in your example's `package.json` to 'file:../node_modules/expo' or 'link:../node_modules/expo'.

## Examples

### Multiple Named Exports

Here is a [branch](https://github.com/transitive-bullshit/expo-modern-library-boilerplate/tree/feature/multiple-exports) which demonstrates how to use multiple named exports. The module in this branch exports two components, `Foo` and `Bar`, and shows how to use them from the example app.

### Material-UI

Here is a [branch](https://github.com/transitive-bullshit/expo-modern-library-boilerplate/tree/feature/material-ui) which demonstrates how to make use of a relatively complicated peer dependency, [material-ui](https://github.com/mui-org/material-ui). It shows the power of [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external) which makes it a breeze to create reusable modules that include complicated material-ui subcomponents without having them bundled as a part of your module.

### Boilerplate

The CLI is based on this [boilerplate](https://github.com/transitive-bullshit/expo-modern-library-boilerplate), which you can optionally read about [here](https://hackernoon.com/publishing-baller-expo-modules-2b039d84bce7).

## Notice

I am looking for volunteers who would like to become active maintainers on the project. If you are interested, please shoot me a note.
