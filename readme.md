# create-expo-library

> CLI for creating reusable, modern Expo libraries using [watchwoman](http://npmjs.com/package/watchwoman) and expo init.

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
npm start # runs watcher of watchwoman
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


## Notice

I am looking for volunteers who would like to become active maintainers on the project. If you are interested, please shoot me a note.
