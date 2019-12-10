const { app, Menu, Tray } = require('electron');
const { getPathToFile, isDev } = require('./utils');

let tray = null;

function setupTray() {
  if (!tray) {
    let imgPath = getPathToFile((isDev ? '../../app/' : '') + 'resources/tray/IconTemplate.png');
    tray = new Tray(imgPath);

    const contextMenu = Menu.buildFromTemplate([
      { label: 'Item1', type: 'radio' },
      { label: 'item2', type: 'radio' },
      { label: 'Item3', type: 'radio', checked: true },
      { label: 'Item4', type: 'radio' }
    ]);
    tray.setToolTip('Dies ist meine Anwendung.');
    tray.setContextMenu(contextMenu);
  }
}

module.exports = setupTray;
