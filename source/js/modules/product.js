import Vue from 'vue/dist/vue.common.dev';
import store from './store';

import {
  openBasketModal
} from './modal';
import {
  sendRequest
} from './ajax';

const postURL = 'http://localhost:3000/basket';

const product = Vue.component('product', {
  props: ['item'],
  store,
  data: function () {
    return {
      amount: 1
    }
  },
  methods: {
    putTobasket: function () {
      sendRequest('POST', postURL, {
        name: this.item.name,
        price: this.item.new_price,
        amount: this.amount
        })
        .then(data => {
          openBasketModal(data);
          store.dispatch('getItemsInBasket');
        })
        .catch(err => openBasketModal('Не удалось добавить товар в корзину'));
    },
    getNumbers: function () {
      this.amount = this.amount ? (this.amount).match(/[0-9]/g).join('') : 1;
    }
  },
  template: `
    <div class="col-4_lg-6_sm-12">
      <div class="card">
        <div class="card__image"><img :src="item.image" :srcset="item.image" :alt="item.name">
        </div>
        <h3 class="card__title">{{ item.name }}</h3>
        <div class="card__price">
          <div class="card__old-price" v-if="item.old_price">{{ item.old_price }} руб.</div>
          <div class="card__new-price">{{ item.new_price }} руб.</div>
        </div>
        <div class="card__controls">
          <div class="card__amount-input">
            <button class="card__amount-btn card__amount-btn--decrease" type="button" @click="amount > 1 ? amount-- : amount">-</button>
            <input type="text" name="количество" @input="getNumbers" v-model="amount">
            <button class="card__amount-btn card__amount-btn--increase" type="button" @click="amount++">+</button>
          </div>
          <button class="card__basket-btn" type="button" @click="putTobasket">В корзину</button>
        </div>
      </div>
    </div>
  `
});

export default {
  components: {
    product
  }
};
