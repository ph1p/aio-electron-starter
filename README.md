# All in one electron starter

## What is this?

I was so often looking for a simple electron boilerplate that has already implemented all things like the tray icon, a builder or reloading the main process.
Additionally it should have as **few dependencies** as possible. I didn't really find what I was looking for, so I built this little starter kit.

## Features

* Tray-Icon support
* Build main with webpack
* Yarn workspaces
* electron-builder
* Auto reloading main process
* A small plugin to set window size inside the vue files
  * src/main/src/index.js | Start at line 48
  * src/renderer/src/main.js | Start at line 12

### Renderer

**You can also use any other framework/library, if you like**

* Vue (created with the vue CLI)
  * Vuex store
    * Persisted start
  * Router
* Context menu

## Commands

### Install all packages and add/delete specific package

`yarn install`

`yarn workspace main add PACKAGE`

`yarn workspace renderer add PACKAGE`

`yarn workspace renderer remove PACKAGE`


### Run in dev mode

`yarn start`

### Build only source code

`yarn build`

### Build app with electron-builder

`yarn build:app`