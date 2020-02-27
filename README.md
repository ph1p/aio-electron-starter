# All in one electron starter

## What is this?

I was so often looking for a simple electron boilerplate that has already implemented all things like the tray icon, a builder and reloading the main process.
Additionally it should have as **few dependencies** as possible. I didn't really find what I was looking for, so I built this little starter kit.

## Features

- Tray-Icon support
- TypeScript main process
- Yarn workspaces ([https://classic.yarnpkg.com/en/docs/workspaces](https://classic.yarnpkg.com/en/docs/workspaces))
- electron-builder
- Auto reloading main process
- A small plugin to set window size inside the vue files
  - src/main/src/index.js | Start at line 48
  - src/renderer/src/main.js | Start at line 12

## Structure

```bash
├── app/
│   └── resources/ # resources like the tray icon image
│
├── build/
│   └── icons/ # application icon
│
├── src/
│   ├── renderer/ # renderer process (e.g. react, vue, angular, svelte etc.)
│   └── main/ # main process
│   │   ├── src/ # all main files
│   │   └── types/ # additional typing informations
│
├── .gitignore
├── package.json
└── README.md
```

### Renderer

**You can also use any other framework/library, if you like**

- Vue (created with the vue CLI)
  - Vuex store
    - Persisted start
  - Router
- Context menu

## Commands

### Install all packages and add/delete specific package

```bash
yarn install # install packages

yarn workspace main add PACKAGE # install specific package for main process

yarn workspace renderer add PACKAGE # install specific package for render process

yarn workspace renderer remove PACKAGE # remove specific package from renderer process
```

### Run in dev mode

```bash
yarn start
```

### Build source code only

```bash
yarn build
```

### Build app with electron-builder

```bash
yarn build:app # Builds executable directly.

yarn build:all # Build all. Linux, Windows and Mac.

yarn build:mac # Build Mac

yarn build:linux # Build Linux

yarn build:windows # Build Windows
```
