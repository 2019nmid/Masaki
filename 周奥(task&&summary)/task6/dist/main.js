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
/******/ 	return __webpack_require__(__webpack_require__.s = "./task6/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./task6/main.js":
/*!***********************!*\
  !*** ./task6/main.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./task6/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst todoForm = document.querySelector('.todoItem');\r\nconst msgContainer = document.querySelector('.item');\r\nconst todoStatus= document.querySelector('.todoStatus');\r\nvar todoMsg = JSON.parse(localStorage.getItem('todoMsg')) || [];\r\n\r\n// init();\r\n\r\n//初始化数据和方法\r\n// function init() {\r\n  show(todoMsg, msgContainer);\r\n  todoForm.addEventListener('submit', addItem);\r\n  msgContainer.addEventListener('click', changeDone);\r\n  msgContainer.addEventListener('click', deleteTodo);\r\n// }\r\n\r\n//添加待办\r\nfunction addItem(e) {\r\n  e.preventDefault();\r\n  const text = (this.querySelector('[name=item]')).value;\r\n  const item = {\r\n    text,\r\n    done: false\r\n  };\r\n  todoMsg.push(item);\r\n  show(todoMsg, msgContainer);\r\n  localStorage.setItem('todoMsg', JSON.stringify(todoMsg));\r\n  this.reset();\r\n}\r\n\r\n//展示数据\r\nfunction show (todoMsg, msgContainer) {\r\n  console.log(todoMsg)\r\n  if (todoMsg.length===0) {\r\n    todoStatus.style.display = 'block';\r\n     msgContainer.innerHTML = todoMsg.map((item, i) => {\r\n      return `\r\n        <li class=\"todoItem\">\r\n            <input type=\"checkbox\" data-index=${i} id=\"item${i}\" ${item.done ? 'checked' : ''}>\r\n            <lable class=\"itemText\" for=\"item${i}\">${item.text}</lable>\r\n            <input type=\"button\" data-index=${i} value=\"x\" class=\"delete-item\" >\r\n        </li>\r\n    `\r\n    }).join('');\r\n  } else {\r\n    todoStatus.style.display = 'none';\r\n    msgContainer.innerHTML = todoMsg.map((item, i) => {\r\n      return `\r\n        <li class=\"todoItem\">\r\n            <input type=\"checkbox\" data-index=${i} id=\"item${i}\" ${item.done ? 'checked' : ''}>\r\n            <lable class=\"itemText\" for=\"item${i}\">${item.text}</lable>\r\n            <input type=\"button\" data-index=${i} value=\"x\" class=\"delete-item\" >\r\n        </li>\r\n    `\r\n    }).join('');\r\n  }\r\n\r\n}\r\n\r\n//删除数据\r\nfunction deleteTodo(e) {\r\n  const msg = '确定删除该项事件？';\r\n  if (!e.target.matches(\"input[type='button']\")) return;\r\n  const el = e.target;\r\n  const index = el.dataset.index;\r\n\r\n  if (confirm(msg)) {\r\n    todoMsg.splice(index, 1);\r\n    localStorage.setItem('todoMsg', JSON.stringify(todoMsg));\r\n    show(todoMsg, msgContainer);\r\n  } else {\r\n    return;\r\n  }\r\n}\r\n\r\n\r\n//改变完成状态\r\nfunction changeDone(e) {\r\n  if (!e.target.matches(\"input[type='checkbox']\")) return;\r\n  const el = e.target;\r\n  const index = el.dataset.index;\r\n  todoMsg[index].done = !todoMsg[index].done;\r\n  localStorage.setItem('todoMsg', JSON.stringify(todoMsg));\r\n  show(todoMsg, msgContainer);\r\n}\n\n//# sourceURL=webpack:///./task6/main.js?");

/***/ }),

/***/ "./task6/main.scss":
/*!*************************!*\
  !*** ./task6/main.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./task6/main.scss?");

/***/ })

/******/ });