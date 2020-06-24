import { BrowserWindow, app, ipcMain } from 'electron';
import setupMenu from './menu';
import setupTray from './tray';
import { isDev, activateDevReloader } from './utils';

app.allowRendererProcessReuse = true;

let mainWindow: Electron.BrowserWindow = null;

activateDevReloader();

// Set URL
const winURL = isDev
  ? `http://localhost:${process.env.PORT || 8080}`
  : 'app/dist/index.html';

// ADD MAIN MENU
setupMenu();

function createWindow() {
  mainWindow = new BrowserWindow({
    transparent: true,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#ffffff',
    frame: true,
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
  ipcMain.on('resize', (_, arg) => {
    if (!isDev) {
      // you can enable/disable it while your dev server is running
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
