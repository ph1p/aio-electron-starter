const { remote } = window.require('electron');
const { Menu, MenuItem } = remote;

const menu = new Menu();
let mousePosition = {
  x: 0,
  y: 0
};

// Add dec context menu
if (process.env.NODE_ENV === 'development') {
  menu.append(
    new MenuItem({
      label: 'Inspect Element',
      click: e =>
        remote
          .getCurrentWindow()
          .inspectElement(mousePosition.x, mousePosition.y)
    })
  );
  menu.append(new MenuItem({ type: 'separator' }));
}

// Menu items -> https://electronjs.org/docs/api/menu-item
menu.append(
  new MenuItem({
    label: 'MenuItem2',
    type: 'normal'
  })
);

window.addEventListener(
  'contextmenu',
  e => {
    e.preventDefault();

    mousePosition = {
      x: e.x,
      y: e.y
    };

    menu.popup({
      window: remote.getCurrentWindow()
    });
  },
  false
);
