import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0,
  },
  mutations: {
    increment(state, increment) {
      state.num += increment;
    },
    decrement(state, increment) {
      state.num -= increment;
    },
  },
  actions: {
    increment({ commit }, num) {
      commit('increment', num);
    },
    asyncIncrement({ commit }, num) {
      setTimeout(() => commit('increment', num), 1000);
    },
    decrement({ commit }, num) {
      commit('decrement', num);
    },
    asyncDecrement({ commit }, num) {
      setTimeout(() => commit('decrement', num), 1000);
    },
  },
  getters: {
    currentNumber: state => state.num,
  },
  plugins: [
    createPersistedState({
      key: 'app',
    }),
  ],
});
