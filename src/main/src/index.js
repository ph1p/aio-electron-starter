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

if (isDev) {
  try {
    require('electron-reloader')(module, {
      watchRenderer: false
    });
  } catch (_) {}
}

const winURL = isDev ? 'http://localhost:8080' : 'app/dist/index.html';

let mainWindow;

setupMenu();

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 500,
    useContentSize: true,
    width: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // TRAY
  setupTray();

  mainWindow[winURL.startsWith('http') ? 'loadURL' : 'loadFile'](winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // EVENTS
  ipcMain.on('resize', (event, arg) => {
    if (!isDev) {
      mainWindow.setSize(arg.width || 1000, arg.height || 500);
    }
  });
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
