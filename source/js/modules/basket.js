import Vue from 'vue/dist/vue.common.dev';
import store from './store'

export default () => {

  new Vue({
    el: '#basket',
    store,
    mounted: function () {
      store.dispatch('getItemsInBasket');
    },
    computed: {
      totalPrice: function () {
        return store.state.itemsInBasket.reduce((totalPrice, item) => {
          return totalPrice + parseInt(item.price) * item.amount;
        }, 0);
      }
    }
  });
};