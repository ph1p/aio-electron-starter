const {
  BrowserWindow,
  app,
  Menu,
  Tray,
  nativeImage,
  ipcMain
} = require('electron');
const path = require('path');
const setupMenu = require('./menu');
const setupTray = require('./tray');
const { isDev } = require('./utils');

// Reload main process if needed
if (isDev) {
  try {
    require('electron-reloader')(module, {
      watchRenderer: false
    });
  } catch (_) {}
}

// Set URL
const winURL = isDev
  ? `http://localhost:${process.env.PORT || 8080}`
  : 'app/dist/index.html';

let mainWindow;

// ADD MAIN MENU
setupMenu();

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // ADD TRAY ICON
  setupTray();

  // set url
  mainWindow[winURL.startsWith('http') ? 'loadURL' : 'loadFile'](winURL);

  // EVENTS
  ipcMain.on('resize', (event, arg) => {
    if (!isDev) { // you can enable/disable it while your dev server is running
      mainWindow.setSize(arg.width || 1000, arg.height || 500);
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // DEV
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
