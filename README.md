# JAWS Dashboard

Uses a base of [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate)

## Install

Install dependencies.

```bash
$ npm install
```

## Run

Run this two commands __simultaniously__ in different console tabs.

```bash
npm run hot-server
npm run start-hot
```

#### Toggle Chrome DevTools

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

- see [electron-debug](https://github.com/sindresorhus/electron-debug) for more detail information.

#### Toggle Redux DevTools

<kbd>Ctrl+H</kbd>

- see [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) for more detail information.


## Package

```bash
npm run package
```

#### Options

- --name, -n: Application name (default: ElectronReact)
- --version, -v: Electron version (default: latest version)
- --asar, -a: [asar](https://github.com/atom/asar) support (default: false)
- --icon, -i: Application icon
- --all: pack for all platforms

Use `electron-packager` to pack your app with `--all` options for darwin (osx), linux and win32 (windows) platform. After build, you will find them in `release` folder. Otherwise, you will only find one for your os.

`test`, `tools`, `release` folder and devDependencies in `package.json` will be ignored by default.
