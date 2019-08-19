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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);
const add = document.querySelector('.add-item');//找到添加事件的变表单，之所以需要监听form而不是input是因为这样用户回车时也会触发事件
const container = document.querySelector('.item');//找到将事项加入的元素
var items = JSON.parse(localStorage.getItem('items')) || [];


//        将添加的待办事件push进items数组中
function addItem(e){
    e.preventDefault();  //阻止表单提交的默认行为
    const text = (this.querySelector('[name=item]')).value;
    const item ={
        text,
        done: false
    };
    items.push(item);
    populateList(items, container);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

//      将items数组中的事件添加到html页面中
function populateList(plate, plateList) {
    plateList.innerHTML=plate.map( (item, i) => {
        return`
        <li class="item-li">
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}>
            <lable class="item-text" for="item${i}">${item.text}</lable>
            <input type="button" data-index=${i} value="删除" class="delete-item" >
        </li>
    `
    }).join('');
}

//        切换checked状态
function toggleDone(e) {
    if(!e.target.matches("input[type='checkbox']")) return; // 只有复选框才可以执行事件
    const el = e.target;
    const index = el.dataset.index;
    items[index].done =!items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, container);
}

//       删除事件
function deleteDone(e) {
    const msg ='确定删除该项事件？'
    if(!e.target.matches("input[type='button']")) return; // 只有复选框才可以执行事件
    const el = e.target;
    const index = el.dataset.index;
    if(confirm(msg)){
        items.splice(index,1); //将选中数组删除
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, container);
    }else{
        return;
    }
}

add.addEventListener('submit', addItem);
container.addEventListener('click', toggleDone);
container.addEventListener('click', deleteDone);

populateList(items, container);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);