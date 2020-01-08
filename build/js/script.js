/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"script": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./source/js/script.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/modules/accordeon.js":
/*!****************************************!*\
  !*** ./source/js/modules/accordeon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  function accordeon(accordeonItems, toggleElement, toggleButton) {\n    var items = document.querySelectorAll(accordeonItems);\n\n    if (items) {\n      items.forEach(function (item) {\n        var toggler = toggleButton ? item.querySelector(toggleButton) : item;\n        var element = item.querySelector(toggleElement);\n        var className = item.className.split(\" \")[0];\n        var scrollHeight = element.scrollHeight;\n        element.style.maxHeight = new RegExp(\"\".concat(className, \"--opened\")).test(item.classList) ? \"\".concat(scrollHeight, \"px\") : null;\n        toggler.addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          item.classList.toggle(\"\".concat(className, \"--opened\"));\n          element.style.maxHeight = new RegExp(\"\".concat(className, \"--opened\")).test(item.classList) ? \"\".concat(scrollHeight, \"px\") : null;\n        });\n      });\n    }\n  }\n\n  accordeon(\".filter__block\", \".filter__hidden-part\", \".filter__toggler\");\n\n  if (window.innerWidth < 1025) {\n    accordeon(\".filter\", \".filter__content\", \".filter__toggler--collapsed\");\n  }\n});\n\n//# sourceURL=webpack:///./source/js/modules/accordeon.js?");

/***/ }),

/***/ "./source/js/modules/ajax.js":
/*!***********************************!*\
  !*** ./source/js/modules/ajax.js ***!
  \***********************************/
/*! exports provided: sendRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendRequest\", function() { return sendRequest; });\nfunction sendRequest(method, url) {\n  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var headers = {\n    'Content-Type': 'application/json'\n  };\n  var options = body ? {\n    method: method,\n    body: JSON.stringify(body),\n    headers: headers\n  } : null;\n  return fetch(url, options).then(function (response) {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return response.json().then(function (error) {\n      var e = new Error('ошибка');\n      e.data = error;\n      throw e;\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack:///./source/js/modules/ajax.js?");

/***/ }),

/***/ "./source/js/modules/basket.js":
/*!*************************************!*\
  !*** ./source/js/modules/basket.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.common.dev */ \"./node_modules/vue/dist/vue.common.dev.js\");\n/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./source/js/modules/store.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  new vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default.a({\n    el: '#basket',\n    store: _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    mounted: function mounted() {\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatch('getItemsInBasket');\n    },\n    computed: {\n      totalPrice: function totalPrice() {\n        return _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.itemsInBasket.reduce(function (totalPrice, item) {\n          return totalPrice + parseInt(item.price) * item.amount;\n        }, 0);\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack:///./source/js/modules/basket.js?");

/***/ }),

/***/ "./source/js/modules/content.js":
/*!**************************************!*\
  !*** ./source/js/modules/content.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(noUiSlider) {/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.common.dev */ \"./node_modules/vue/dist/vue.common.dev.js\");\n/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax */ \"./source/js/modules/ajax.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var getURL = 'http://localhost:3000/items';\n  new vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default.a({\n    el: '#content',\n    data: {\n      items: [],\n      onlyDiscount: false,\n      brands: [],\n      features: [],\n      minRange: null,\n      maxRange: null,\n      slider: {\n        startMin: 0,\n        startMax: 750,\n        min: 0,\n        max: 1000,\n        step: 1\n      },\n      nextDisabled: false,\n      previousDisabled: true,\n      currentPage: 0,\n      pagesSeenOnPagination: 4,\n      amountOnPageOptions: [6, 12, 18, 24],\n      amountOnPage: 6,\n      sortType: 'популярности',\n      sortTypeOptions: ['популярности', 'названию А-Я', 'названию Я-А', 'возрастанию цены', 'убыванию цены']\n    },\n    watch: {\n      amountOnPage: function amountOnPage() {\n        this.currentPage = 0;\n      }\n    },\n    mounted: function mounted() {\n      var _this = this;\n\n      Object(_ajax__WEBPACK_IMPORTED_MODULE_1__[\"sendRequest\"])('GET', getURL).then(function (data) {\n        return _this.items = data;\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n      noUiSlider.create(this.$refs.slider, {\n        start: [this.slider.startMin, this.slider.startMax],\n        step: this.slider.step,\n        connect: true,\n        range: {\n          'min': this.slider.min,\n          'max': this.slider.max\n        }\n      });\n      this.$refs.slider.noUiSlider.on('update', function (values, handle) {\n        _this[handle ? 'maxRange' : 'minRange'] = parseInt(values[handle]);\n      });\n    },\n    computed: {\n      filteredItems: function filteredItems() {\n        var _this2 = this;\n\n        return this.items.filter(function (item) {\n          return _this2.onlyDiscount ? item.old_price : true;\n        }).filter(function (item) {\n          return _this2.brands.length ? _this2.brands.includes(item.brand) : true;\n        }).filter(function (item) {\n          return _this2.features.length ? _this2.features.includes(item.features) : true;\n        }).filter(function (item) {\n          var price = parseInt(item.new_price);\n          return price > _this2.minRange && price < _this2.maxRange;\n        }).sort(function (item1, item2) {\n          switch (_this2.sortType) {\n            case 'названию А-Я':\n              return item1.name > item2.name ? 1 : -1;\n\n            case 'названию Я-А':\n              return item1.name > item2.name ? -1 : 1;\n\n            case 'возрастанию цены':\n              return parseInt(item1.new_price) > parseInt(item2.new_price) ? 1 : -1;\n\n            case 'убыванию цены':\n              return parseInt(item1.new_price) > parseInt(item2.new_price) ? -1 : 1;\n\n            default:\n              return 1;\n          }\n        }).slice(this.amountOnPage * this.currentPage, this.amountOnPage * (this.currentPage + 1));\n      },\n      canResetFilter: function canResetFilter() {\n        return this.brands.length !== 0 || this.features.length !== 0 || this.minRange !== this.slider.startMin || this.maxRange !== this.slider.startMax;\n      },\n      pagintaionRange: function pagintaionRange() {\n        return this.pagesSeenOnPagination * Math.floor(this.currentPage / this.pagesSeenOnPagination);\n      },\n      pages: function pages() {\n        var amountOfPages = Math.ceil(this.items.length / this.amountOnPage);\n        var pages = new Array(amountOfPages).fill(this.amountOnPage);\n        pages[amountOfPages - 1] = this.items.length % this.amountOnPage !== 0 ? this.items.length % this.amountOnPage : this.amountOnPage;\n        return pages;\n      },\n      currentPaginationPages: function currentPaginationPages() {\n        return this.pages.map(function (page, index) {\n          return {\n            amountOnPage: page,\n            indexPage: index\n          };\n        }).slice(this.pagintaionRange, this.pagintaionRange + this.pagesSeenOnPagination);\n      },\n      showLastPage: function showLastPage() {\n        var lastPageInCurrentRange = this.currentPaginationPages[this.currentPaginationPages.length - 1] ? this.currentPaginationPages[this.currentPaginationPages.length - 1].indexPage : 0;\n        return lastPageInCurrentRange !== this.pages.length - 1;\n      }\n    },\n    methods: {\n      resetFilter: function resetFilter() {\n        this.brands = [];\n        this.features = [];\n        this.$refs.slider.noUiSlider.set([this.slider.startMin, this.slider.startMax]);\n      },\n      updateSlider: function updateSlider() {\n        this.$refs.slider.noUiSlider.set([this.minRange, this.maxRange]);\n      },\n      nextPage: function nextPage() {\n        if (this.currentPage === this.pages.length - 1) {\n          this.nextDisabled = true;\n        } else {\n          this.nextDisabled = false;\n          this.currentPage = this.currentPage + 1;\n        }\n      },\n      previousPage: function previousPage() {\n        if (this.currentPage === 0) {\n          this.previousDisabled = true;\n        } else {\n          this.previousDisabled = false;\n          this.currentPage = this.currentPage - 1;\n        }\n      },\n      setCurrentPage: function setCurrentPage(number) {\n        this.currentPage = number;\n      }\n    }\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! nouislider */ \"./node_modules/nouislider/distribute/nouislider.js\")))\n\n//# sourceURL=webpack:///./source/js/modules/content.js?");

/***/ }),

/***/ "./source/js/modules/modal.js":
/*!************************************!*\
  !*** ./source/js/modules/modal.js ***!
  \************************************/
/*! exports provided: openBasketModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openBasketModal\", function() { return openBasketModal; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction closeModal() {\n  var openModal = document.querySelector('.modal--open');\n  openModal.classList.remove('modal--open');\n}\n\nfunction openBasketModal(data) {\n  var modal = document.querySelector('.modal--basket');\n  var modalText = modal.querySelector('.modal__text');\n  var modalClose = modal.querySelector('.modal__close');\n\n  if (_typeof(data) === 'object') {\n    modalText.textContent = \"\\u0422\\u043E\\u0432\\u0430\\u0440 \".concat(data.name, \", \\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E - \").concat(data.amount, \", \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443\");\n  } else {\n    modalText.textContent = data;\n  }\n\n  modalClose.addEventListener('click', closeModal);\n  modal.classList.add('modal--open');\n}\n\n\n\n//# sourceURL=webpack:///./source/js/modules/modal.js?");

/***/ }),

/***/ "./source/js/modules/product.js":
/*!**************************************!*\
  !*** ./source/js/modules/product.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.common.dev */ \"./node_modules/vue/dist/vue.common.dev.js\");\n/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./source/js/modules/store.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./source/js/modules/modal.js\");\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajax */ \"./source/js/modules/ajax.js\");\n\n\n\n\nvar postURL = 'http://localhost:3000/basket';\nvar product = vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default.a.component('product', {\n  props: ['item'],\n  store: _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  data: function data() {\n    return {\n      amount: 1\n    };\n  },\n  methods: {\n    putTobasket: function putTobasket() {\n      Object(_ajax__WEBPACK_IMPORTED_MODULE_3__[\"sendRequest\"])('POST', postURL, {\n        name: this.item.name,\n        price: this.item.new_price,\n        amount: this.amount\n      }).then(function (data) {\n        Object(_modal__WEBPACK_IMPORTED_MODULE_2__[\"openBasketModal\"])(data);\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatch('getItemsInBasket');\n      })[\"catch\"](function (err) {\n        return Object(_modal__WEBPACK_IMPORTED_MODULE_2__[\"openBasketModal\"])('Не удалось добавить товар в корзину');\n      });\n    }\n  },\n  template: \"\\n    <div class=\\\"col-4_lg-6_sm-12\\\">\\n      <div class=\\\"card\\\">\\n        <div class=\\\"card__image\\\"><img :src=\\\"item.image\\\" :srcset=\\\"item.image\\\" :alt=\\\"item.name\\\">\\n        </div>\\n        <h3 class=\\\"card__title\\\">{{ item.name }}</h3>\\n        <div class=\\\"card__price\\\">\\n          <div class=\\\"card__old-price\\\" v-if=\\\"item.old_price\\\">{{ item.old_price }} \\u0440\\u0443\\u0431.</div>\\n          <div class=\\\"card__new-price\\\">{{ item.new_price }} \\u0440\\u0443\\u0431.</div>\\n        </div>\\n        <div class=\\\"card__controls\\\">\\n          <div class=\\\"card__amount-input\\\">\\n            <button class=\\\"card__amount-btn card__amount-btn--decrease\\\" type=\\\"button\\\" @click=\\\"amount > 1 ? amount-- : amount\\\">-</button>\\n            <input type=\\\"text\\\" name=\\\"\\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E\\\" v-model=\\\"amount\\\">\\n            <button class=\\\"card__amount-btn card__amount-btn--increase\\\" type=\\\"button\\\" @click=\\\"amount++\\\">+</button>\\n          </div>\\n          <button class=\\\"card__basket-btn\\\" type=\\\"button\\\" @click=\\\"putTobasket\\\">\\u0412 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443</button>\\n        </div>\\n      </div>\\n    </div>\\n  \"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    product: product\n  }\n});\n\n//# sourceURL=webpack:///./source/js/modules/product.js?");

/***/ }),

/***/ "./source/js/modules/select.js":
/*!*************************************!*\
  !*** ./source/js/modules/select.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.common.dev */ \"./node_modules/vue/dist/vue.common.dev.js\");\n/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ \"./node_modules/vue-select/dist/vue-select.js\");\n/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default.a.component('v-select', vue_select__WEBPACK_IMPORTED_MODULE_1___default.a);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a\n  }\n});\n\n//# sourceURL=webpack:///./source/js/modules/select.js?");

/***/ }),

/***/ "./source/js/modules/store.js":
/*!************************************!*\
  !*** ./source/js/modules/store.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.common.dev */ \"./node_modules/vue/dist/vue.common.dev.js\");\n/* harmony import */ var vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajax */ \"./source/js/modules/ajax.js\");\n\n\n\nvar allURL = 'http://localhost:3000/items';\nvar basketURL = 'http://localhost:3000/basket';\nvue_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state: {\n    items: [],\n    itemsInBasket: []\n  },\n  mutations: {\n    setItems: function setItems(state, items) {\n      state.items = items;\n    },\n    getItemsInBasket: function getItemsInBasket(state, items) {\n      state.itemsInBasket = items;\n    }\n  },\n  actions: {\n    setItems: function setItems(context) {\n      Object(_ajax__WEBPACK_IMPORTED_MODULE_2__[\"sendRequest\"])('GET', allURL).then(function (data) {\n        return context.commit('setItems', data);\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    },\n    getItemsInBasket: function getItemsInBasket(context) {\n      Object(_ajax__WEBPACK_IMPORTED_MODULE_2__[\"sendRequest\"])('GET', basketURL).then(function (data) {\n        return context.commit('getItemsInBasket', data);\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./source/js/modules/store.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordeon */ \"./source/js/modules/accordeon.js\");\n/* harmony import */ var _modules_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/content */ \"./source/js/modules/content.js\");\n/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/select */ \"./source/js/modules/select.js\");\n/* harmony import */ var _modules_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/product */ \"./source/js/modules/product.js\");\n/* harmony import */ var _modules_basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/basket */ \"./source/js/modules/basket.js\");\n\n\n\n\n\n\n(function () {\n  Object(_modules_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_modules_accordeon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_basket__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n})();\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });