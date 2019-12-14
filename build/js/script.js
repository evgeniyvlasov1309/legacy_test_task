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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ \"./source/js/modules/ajax.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./source/js/modules/modal.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var requestURL = 'http://localhost:3000/basket';\n  var productCards = document.querySelectorAll('.card');\n  productCards.forEach(function (card) {\n    var basketBtn = card.querySelector('.card__basket-btn');\n    var productName = card.querySelector('.card__title');\n    var productAmount = card.querySelector('input[name=\\\"количество\\\"]');\n    basketBtn.addEventListener('click', addToBasket.bind({}, productName, productAmount));\n  });\n\n  function addToBasket(productName, productAmount) {\n    var order = {\n      name: productName.textContent,\n      amount: productAmount.value\n    };\n    Object(_ajax__WEBPACK_IMPORTED_MODULE_0__[\"sendRequest\"])('POST', requestURL, order).then(function (data) {\n      return Object(_modal__WEBPACK_IMPORTED_MODULE_1__[\"openBasketModal\"])(data);\n    })[\"catch\"](function (err) {\n      return Object(_modal__WEBPACK_IMPORTED_MODULE_1__[\"openBasketModal\"])('Не удалось добавить товар в корзину');\n    });\n  }\n});\n\n//# sourceURL=webpack:///./source/js/modules/basket.js?");

/***/ }),

/***/ "./source/js/modules/card.js":
/*!***********************************!*\
  !*** ./source/js/modules/card.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var controlInputs = document.querySelectorAll('.card__amount-input');\n  controlInputs.forEach(function (input) {\n    var inputField = input.querySelector('input');\n    var decreaseButton = input.querySelector('.card__amount-btn--decrease');\n    var increaseButton = input.querySelector('.card__amount-btn--increase');\n    decreaseButton.addEventListener('click', function () {\n      if (inputField.value !== '1') {\n        inputField.value--;\n      }\n    });\n    inputField.addEventListener('input', function () {\n      var numberFilter = this.value.match(/[0-9]/g);\n\n      if (numberFilter) {\n        this.value = numberFilter.join('');\n      } else {\n        this.value = 1;\n      }\n    });\n    increaseButton.addEventListener('click', function () {\n      inputField.value++;\n    });\n  });\n});\n\n//# sourceURL=webpack:///./source/js/modules/card.js?");

/***/ }),

/***/ "./source/js/modules/filter.js":
/*!*************************************!*\
  !*** ./source/js/modules/filter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(noUiSlider) {/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var range = document.querySelector('.filter__range');\n  var min = 0;\n  var max = 10000;\n  noUiSlider.create(range, {\n    start: [0, 10000],\n    connect: true,\n    range: {\n      'min': min,\n      'max': max\n    }\n  });\n  var checkboxes = document.querySelectorAll('.filter input[type=\\\"checkbox\\\"');\n  var resetBtn = document.querySelector('.filter__reset-btn');\n  var inputPriceFrom = document.querySelector('input[name=\\\"price_from\\\"]');\n  var inputPriceTo = document.querySelector('input[name=\\\"price_to\\\"]');\n  var filtered = {\n    range: false,\n    checkboxes: false\n  };\n\n  function showResetBtn(filtered) {\n    resetBtn.style.display = null;\n\n    for (var key in filtered) {\n      if (filtered[key]) {\n        resetBtn.style.display = 'block';\n      }\n    }\n  }\n\n  resetBtn.addEventListener('click', resetFilter);\n\n  function updateFilter() {\n    checkboxes.forEach(function (checkbox) {\n      if (checkbox.checked) {\n        filtered.checkboxes = true;\n      }\n    });\n    showResetBtn(filtered);\n  }\n\n  function resetFilter() {\n    checkboxes.forEach(function (checkbox) {\n      checkbox.checked = false;\n    });\n    range.noUiSlider.set([min, max]);\n    filtered.range = false;\n    filtered.checkboxes = false;\n    showResetBtn(filtered);\n  }\n\n  checkboxes.forEach(function (checkbox) {\n    checkbox.addEventListener('change', function (e) {\n      filtered.checkboxes = false;\n      updateFilter();\n    });\n  });\n  range.noUiSlider.on('change', function (values) {\n    if (Math.round(values[0]) !== min || Math.round(values[1]) !== max) {\n      filtered.range = true;\n    } else {\n      filtered.range = false;\n    }\n\n    updateFilter();\n  });\n  inputPriceFrom.addEventListener('change', function (e) {\n    range.noUiSlider.set([e.target.value, null]);\n    resetBtn.style.display = 'block';\n  });\n  inputPriceTo.addEventListener('change', function (e) {\n    range.noUiSlider.set([null, e.target.value]);\n  });\n  range.noUiSlider.on('update', function (values, handle) {\n    inputPriceFrom.value = Math.round(values[0]);\n    inputPriceTo.value = Math.round(values[1]);\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! nouislider */ \"./node_modules/nouislider/distribute/nouislider.js\")))\n\n//# sourceURL=webpack:///./source/js/modules/filter.js?");

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

/***/ "./source/js/modules/select.js":
/*!*************************************!*\
  !*** ./source/js/modules/select.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(customSelect) {/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  customSelect[\"default\"]('select');\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! custom-select */ \"./node_modules/custom-select/build/index.js\")))\n\n//# sourceURL=webpack:///./source/js/modules/select.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordeon */ \"./source/js/modules/accordeon.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/filter */ \"./source/js/modules/filter.js\");\n/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/card */ \"./source/js/modules/card.js\");\n/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/select */ \"./source/js/modules/select.js\");\n/* harmony import */ var _modules_basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/basket */ \"./source/js/modules/basket.js\");\n\n\n\n\n\n\n(function () {\n  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_modules_accordeon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_modules_select__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_modules_basket__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n})();\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });