import Vue from 'vue/dist/vue.common.dev';
import Vuex from 'vuex';
import {
  sendRequest
} from './ajax';

const allURL = 'http://localhost:3000/items';
const basketURL = 'http://localhost:3000/basket';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    itemsInBasket: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    getItemsInBasket(state, items) {
      state.itemsInBasket = items;
    }
  },
  actions: {
    setItems(context) {
      sendRequest('GET', allURL)
      .then(data => context.commit('setItems', data))
      .catch(err => console.log(err));
    },
    getItemsInBasket(context) {
      sendRequest('GET', basketURL)
      .then(data => context.commit('getItemsInBasket', data))
      .catch(err => console.log(err));
    }
  }
});