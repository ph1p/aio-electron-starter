import { Menu, Tray } from 'electron';
import { getPathToFile } from './utils';

let tray: Tray = null;

export default function setupTray() {
  if (!tray) {
    tray = new Tray(getPathToFile('resources/tray/IconTemplate.png'));

    const contextMenu = Menu.buildFromTemplate([
      { label: 'Item1', type: 'radio' },
      { label: 'item2', type: 'radio' },
      { label: 'Item3', type: 'radio', checked: true },
      { label: 'Item4', type: 'radio' }
    ]);
    tray.setToolTip('The tray icon');
    tray.setContextMenu(contextMenu);
  }
}
