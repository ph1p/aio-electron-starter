import { MenuItem, Menu, BrowserWindow, ipcMain, dialog } from 'electron';

function setupContextMenu() {
  const menu = new Menu();
  let mousePosition = {
    x: 0,
    y: 0,
  };

  // Add dev context menu
  if (process.env.NODE_ENV === 'development') {
    menu.append(
      new MenuItem({
        label: 'Inspect Element',
        click: e =>
          BrowserWindow.getFocusedWindow().webContents.inspectElement(
            mousePosition.x,
            mousePosition.y,
          ),
      }),
    );
    menu.append(new MenuItem({ type: 'separator' }));
  }

  // Menu items -> https://electronjs.org/docs/api/menu-item
  menu.append(
    new MenuItem({
      label: 'MenuItem2',
      type: 'normal',
      click() {
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'info',
          message: 'Hi!',
        });
      },
    }),
  );

  ipcMain.addListener('open-context-menu', (_, position) => {
    mousePosition = position;

    menu.popup({
      window: BrowserWindow.getFocusedWindow(),
    });
  });
}

export default setupContextMenu;
