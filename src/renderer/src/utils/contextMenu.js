const { ipcRenderer } = window.require('electron');

window.addEventListener(
  'contextmenu',
  e => {
    e.preventDefault();

    ipcRenderer.send('open-context-menu', {
      x: e.x,
      y: e.y,
    });
  },
  false,
);
