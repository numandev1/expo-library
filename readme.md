# expo-library

> CLI for creating reusable, modern Expo libraries using [Monorepo expo-yarn-workspaces](https://github.com/expo/expo/tree/master/packages/expo-yarn-workspaces) and expo init.

[![NPM](https://img.shields.io/npm/v/expo-library.svg)](https://www.npmjs.com/package/expo-library) [![Build Status](https://travis-ci.com/transitive-bullshit/expo-library.svg?branch=master)](https://travis-ci.com/transitive-bullshit/expo-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Intro

<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/nomi9995/expo-library/master/media/demo.gif">
</p>

## Install globally

This package requires `node >= 10`.

install `expo-library` by

```bash
npm install -g expo-library
```

## Creating a New Library

```bash
expo-library
```

Answer some basic prompts about your module, and then the CLI will perform the following steps:

- copy over the template
- install dependencies via yarn or npm
- link packages together for local development
- initialize local git repo


## Development

Local development is broken into two parts (ideally using two tabs).

First, go to `root` dir of newly create library and edit component in index.js/ts file.

Second, go to `example/` dir and run metro bundle by

```bash
cd example
npm start # runs your expo app bundler
```

Now, anytime you make a change to your library in `index.js` or to the example app's `example/App.js` will fresh refresh component in example.

![](https://media.giphy.com/media/14udF3WUwwGMaA/giphy.gif)

#### Publishing to npm

```bash
npm publish
```

Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`.

## Contributing

See the [Contributing page](CONTRIBUTING.md).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/nomi9995"><img src="https://avatars3.githubusercontent.com/u/36044436?s=460&u=c7471cd9ccec793c7a0fccc7db475a577ff7969d&v=4" width="100px;" alt="Numan"/><br /><sub><b>Numan</b></sub></a><br /><a href="#infra-Numan" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/nomi9995/expo-library/commits?author=nomi9995" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

Copyright (c) 2020 Nomi9995. Licensed under the MIT license.
