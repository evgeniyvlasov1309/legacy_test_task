import Vue from 'vue/dist/vue.common.dev';

import {
  sendRequest
} from './ajax';

export default () => {

  const getURL = 'http://localhost:3000/items';

  new Vue({
    el: '#content',
    data: {
      items: [],
      onlyDiscount: false,
      brands: [],
      features: [],
      minRange: null,
      maxRange: null,
      slider: {
        startMin: 0,
        startMax: 750,
        min: 0,
        max: 1000,
        step: 1
      },
      currentPage: 1,
      pageRange: 4,
      amountOnPageOptions: [6, 12, 18, 24],
      amountOnPage: 6,
      sortType: 'популярности',
      sortTypeOptions: ['популярности','названию А-Я','названию Я-А','возрастанию цены', 'убыванию цены'],
    },
    watch: {
      amountOnPage: function () {
        this.currentPage = 1;
      }
    },
    mounted: function () {
      sendRequest('GET', getURL)
      .then(data => this.items = data)
      .catch(err => console.log(err));

      noUiSlider.create(this.$refs.slider, {
        start: [this.slider.startMin, this.slider.startMax],
        step: this.slider.step,
        connect: true,
        range: {
          'min': this.slider.min,
          'max': this.slider.max
        }
      });

      this.$refs.slider.noUiSlider.on('update',(values, handle) => {
        this[handle ? 'maxRange' : 'minRange'] = parseInt(values[handle]);
      });
    },
    computed: {
      filteredItems: function () {
        return this.items
        .filter((item) => this.onlyDiscount ? item.old_price : true)
        .filter((item) => {
          return this.brands.length ? this.brands.includes(item.brand) : true;
        })
        .filter((item) => {
          return this.features.length ? this.features.includes(item.features) : true;
        })
        .filter((item) => {
          const price = parseInt(item.new_price);
          return price > this.minRange && price < this.maxRange;
        })
        .sort((item1, item2) => {
          switch (this.sortType) {
            case 'названию А-Я':
              return item1.name > item2.name ? 1 : -1;
            case 'названию Я-А':
              return item1.name > item2.name ? -1 : 1;
            case 'возрастанию цены':
              return parseInt(item1.new_price) > parseInt(item2.new_price) ? 1 : -1;
            case 'убыванию цены':
              return parseInt(item1.new_price) > parseInt(item2.new_price) ? -1 : 1;
            default:
              return 1;
          }
        });
      },
      shownItems: function () {
        return this.filteredItems.slice(this.amountOnPage * (this.currentPage - 1), this.amountOnPage * (this.currentPage));
      },
      canResetFilter: function () {
        return this.brands.length !== 0 || this.features.length !== 0 || this.minRange !== this.slider.startMin || this.maxRange !== this.slider.startMax;
      },
      amountOfPages: function () {
        return Math.ceil(this.filteredItems.length / this.amountOnPage);
      },
    },
    methods: {
      resetFilter: function () {
        this.brands = [];
        this.features = [];

        this.$refs.slider.noUiSlider.set([this.slider.startMin, this.slider.startMax]);
      },
      updateSlider: function () {
        this.$refs.slider.noUiSlider.set([this.minRange, this.maxRange]);
      },
    },
  });
};