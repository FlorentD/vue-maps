import Vue from 'vue';
import Vuex from 'vuex';
import first from 'lodash/fp/first';
import random from 'lodash/fp/random';
import prop from 'lodash/fp/prop';
import flow from 'lodash/fp/flow';
import lowerCase from 'lodash/fp/lowerCase';
import countries from './data/countries.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries,
    loop: 50,
    selected: first(countries),
  },
  mutations: {
    changeSelected(state) {
      state.selected = state.countries[random(0, state.countries.length - 1)];
    },
    decLoop(state) {
      state.loop = state.loop - 1;
    },
  },
  actions: {
    startRandomize({ commit, state }) {
      const handler = setInterval(() => {
        commit('changeSelected');
        commit('decLoop');
        if (state.loop === 0) {
          clearInterval(handler);
        }
      }, 200);
    },
  },
  getters: {
    name: state => prop('translations.fra.common')(state.selected),
    flag: state => flow(prop('cca3'), lowerCase)(state.selected),
  },
});
