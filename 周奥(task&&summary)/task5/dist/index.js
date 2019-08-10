/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./test/js/footer.js":
/*!***************************!*\
  !*** ./test/js/footer.js ***!
  \***************************/
/*! exports provided: footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\n\r\nfunction footer () {\r\n  alert('底部');\r\n}\n\n//# sourceURL=webpack:///./test/js/footer.js?");

/***/ }),

/***/ "./test/js/header.js":
/*!***************************!*\
  !*** ./test/js/header.js ***!
  \***************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\n\r\nfunction header () {\r\n  alert('头部');\r\n}\n\n//# sourceURL=webpack:///./test/js/header.js?");

/***/ }),

/***/ "./test/js/index.js":
/*!**************************!*\
  !*** ./test/js/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.less */ \"./test/style/main.less\");\n/* harmony import */ var _style_main_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_header_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/header.less */ \"./test/style/header.less\");\n/* harmony import */ var _style_header_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_header_less__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_footer_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/footer.less */ \"./test/style/footer.less\");\n/* harmony import */ var _style_footer_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_footer_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./test/js/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ \"./test/js/main.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./test/js/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar btn1 = document.createElement(\"BUTTON\");\r\nvar btn2 = document.createElement(\"BUTTON\");\r\nvar btn3 = document.createElement(\"BUTTON\");\r\nvar t1 = document.createTextNode(\"CLICK ME\");\r\nvar t2 = document.createTextNode(\"CLICK ME\");\r\nvar t3 = document.createTextNode(\"CLICK ME\");\r\nbtn1.appendChild(t1);\r\nbtn2.appendChild(t2);\r\nbtn3.appendChild(t3);\r\ndocument.querySelector('article').appendChild(btn1);\r\ndocument.querySelector('header').appendChild(btn2);\r\ndocument.querySelector('footer').appendChild(btn3);\r\n\r\ndocument.querySelector('article').addEventListener('click', () => {\r\n  Object(_main__WEBPACK_IMPORTED_MODULE_4__[\"main\"])();\r\n})\r\ndocument.querySelector('header').addEventListener('click', () => {\r\n  Object(_header__WEBPACK_IMPORTED_MODULE_3__[\"header\"])();\r\n})\r\ndocument.querySelector('footer').addEventListener('click', () => {\r\n  Object(_footer__WEBPACK_IMPORTED_MODULE_5__[\"footer\"])();\r\n})\r\n\n\n//# sourceURL=webpack:///./test/js/index.js?");

/***/ }),

/***/ "./test/js/main.js":
/*!*************************!*\
  !*** ./test/js/main.js ***!
  \*************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n\r\nfunction main () {\r\n  alert('内容')\r\n}\n\n//# sourceURL=webpack:///./test/js/main.js?");

/***/ }),

/***/ "./test/style/footer.less":
/*!********************************!*\
  !*** ./test/style/footer.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./test/style/footer.less?");

/***/ }),

/***/ "./test/style/header.less":
/*!********************************!*\
  !*** ./test/style/header.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./test/style/header.less?");

/***/ }),

/***/ "./test/style/main.less":
/*!******************************!*\
  !*** ./test/style/main.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./test/style/main.less?");

/***/ })

/******/ });