import Vue from 'vue/dist/vue.common.dev';
import store from './store'

const basket = Vue.component('basket', {
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
  },
  template: `
  <li class="user-nav__item user-nav__item--basket"><a class="user-nav__link user-nav__link--basket" href="#" id="basket">
  <div class="user-nav__icon">
    <svg width="26" height="23">
      <use xlink:href="img/sprite_auto.svg#basket-icon"></use>
    </svg>
  </div>
  <div class="user-nav__text">Корзина<span>{{ totalPrice }} руб.</span></div></a></li>
  `
});

export default {
  components: {
    basket
  }
};