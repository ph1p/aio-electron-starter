import Vue from 'vue';
const electron = window.require('electron');

import App from './App.vue';
import router from './router';
import store from './store';

import './utils/contextMenu';

Vue.config.productionTip = false;

/*
Small plugin to support auto resizing before create a Vue
You can use it like this in your components:
{
  electron: {
    width: 100,
    height: 100
  }
}
*/
const Electron = {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {
        if (this.$options.electron) {
          const { width, height } = this.$options.electron;
          if (width || height) {
            electron.ipcRenderer.send('resize', { width, height });
          }
        }
      }
    });
  }
};

Vue.use(Electron);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
