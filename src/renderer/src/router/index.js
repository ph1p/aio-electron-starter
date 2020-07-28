import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import Example from '../views/Example.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/example',
    name: 'example',
    component: Example,
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
