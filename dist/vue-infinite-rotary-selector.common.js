(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueInfiniteRotarySelector"] = factory();
	else
		root["VueInfiniteRotarySelector"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzPzM2OTgiXSwibmFtZXMiOlsiZyIsIkZ1bmN0aW9uIiwiZXZhbCIsImUiLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLENBQUo7O0FBRUE7QUFDQUEsSUFBSyxZQUFXO0FBQ2YsUUFBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxLQUFJQSxLQUFLQyxTQUFTLGFBQVQsR0FBTCxJQUFrQyxDQUFDLEdBQUVDLElBQUgsRUFBUyxNQUFULENBQXRDO0FBQ0EsQ0FIRCxDQUdFLE9BQU1DLENBQU4sRUFBUztBQUNWO0FBQ0EsS0FBRyxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXJCLEVBQ0NKLElBQUlJLE1BQUo7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJOLENBQWpCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: \\n\\nVue packages version mismatch:\\n\\n- vue@2.5.16\\n- vue-template-compiler@2.5.13\\n\\nThis may cause things to work incorrectly. Make sure to use the same version for both.\\nIf you are using vue-loader@>=10.0, simply update vue-template-compiler.\\nIf you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.\\n\\n    at Object.<anonymous> (/Users/fabiovalle/Desktop/webcow/node_modules/vue-infinite-rotary-selector/node_modules/vue-template-compiler/index.js:8:9)\\n    at Module._compile (internal/modules/cjs/loader.js:702:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)\\n    at Module.load (internal/modules/cjs/loader.js:612:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:543:3)\\n    at Module.require (internal/modules/cjs/loader.js:650:17)\\n    at require (internal/modules/cjs/helpers.js:20:18)\\n    at Object.<anonymous> (/Users/fabiovalle/Desktop/webcow/node_modules/vue-infinite-rotary-selector/node_modules/vue-loader/lib/parser.js:1:78)\\n    at Module._compile (internal/modules/cjs/loader.js:702:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)\\n    at Module.load (internal/modules/cjs/loader.js:612:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:543:3)\\n    at Module.require (internal/modules/cjs/loader.js:650:17)\\n    at require (internal/modules/cjs/helpers.js:20:18)\\n    at Object.<anonymous> (/Users/fabiovalle/Desktop/webcow/node_modules/vue-infinite-rotary-selector/node_modules/vue-loader/lib/loader.js:2:13)\\n    at Module._compile (internal/modules/cjs/loader.js:702:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)\\n    at Module.load (internal/modules/cjs/loader.js:612:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:543:3)\\n    at Module.require (internal/modules/cjs/loader.js:650:17)\\n    at require (internal/modules/cjs/helpers.js:20:18)\\n    at Object.<anonymous> (/Users/fabiovalle/Desktop/webcow/node_modules/vue-infinite-rotary-selector/node_modules/vue-loader/index.js:1:80)\\n    at Module._compile (internal/modules/cjs/loader.js:702:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)\\n    at Module.load (internal/modules/cjs/loader.js:612:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:543:3)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__[\"install\"] = install;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_InfiniteRotarySelector_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_InfiniteRotarySelector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_InfiniteRotarySelector_vue__);\n/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__components_InfiniteRotarySelector_vue__, \"default\")) __webpack_require__.d(__webpack_exports__, \"InfiniteRotarySelector\", function() { return __WEBPACK_IMPORTED_MODULE_0__components_InfiniteRotarySelector_vue__[\"default\"]; });\n\n\n// Install the components\nfunction install(Vue) {\n  Vue.component('infinite-rotary-selector', __WEBPACK_IMPORTED_MODULE_0__components_InfiniteRotarySelector_vue__[\"default\"]);\n  /* -- Add more components here -- */\n}\n\n// Expose the components\n\n\n/* -- Plugin definition & Auto-install -- */\n/* You shouldn't have to modify the code below */\n\n// Plugin\nvar plugin = {\n  /* eslint-disable no-undef */\n  version: \"1.0.2\",\n  install: install\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (plugin);\n\n// Auto-install\nvar GlobalVue = null;\nif (typeof window !== 'undefined') {\n  GlobalVue = window.Vue;\n} else if (typeof global !== 'undefined') {\n  GlobalVue = global.Vue;\n}\nif (GlobalVue) {\n  GlobalVue.use(plugin);\n}\n/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJpbnN0YWxsIiwiVnVlIiwiY29tcG9uZW50IiwicGx1Z2luIiwidmVyc2lvbiIsIkdsb2JhbFZ1ZSIsIndpbmRvdyIsImdsb2JhbCIsInVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQUNPLFNBQVNBLE9BQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQzVCQSxNQUFJQyxTQUFKLENBQWMsMEJBQWQsRUFBMEMsK0VBQTFDO0FBQ0E7QUFDRDs7QUFFRDtBQUNBOztBQUtBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNQyxTQUFTO0FBQ2I7QUFDQUMsV0FBUyxPQUZJO0FBR2JKO0FBSGEsQ0FBZjs7QUFNQSwrREFBZUcsTUFBZjs7QUFFQTtBQUNBLElBQUlFLFlBQVksSUFBaEI7QUFDQSxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNELGNBQVlDLE9BQU9MLEdBQW5CO0FBQ0QsQ0FGRCxNQUVPLElBQUksT0FBT00sTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUN4Q0YsY0FBWUUsT0FBT04sR0FBbkI7QUFDRDtBQUNELElBQUlJLFNBQUosRUFBZTtBQUNiQSxZQUFVRyxHQUFWLENBQWNMLE1BQWQ7QUFDRCxDIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5maW5pdGVSb3RhcnlTZWxlY3RvciBmcm9tICcuL2NvbXBvbmVudHMvSW5maW5pdGVSb3RhcnlTZWxlY3Rvci52dWUnXG5cbi8vIEluc3RhbGwgdGhlIGNvbXBvbmVudHNcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgVnVlLmNvbXBvbmVudCgnaW5maW5pdGUtcm90YXJ5LXNlbGVjdG9yJywgSW5maW5pdGVSb3RhcnlTZWxlY3RvcilcbiAgLyogLS0gQWRkIG1vcmUgY29tcG9uZW50cyBoZXJlIC0tICovXG59XG5cbi8vIEV4cG9zZSB0aGUgY29tcG9uZW50c1xuZXhwb3J0IHtcbiAgSW5maW5pdGVSb3RhcnlTZWxlY3RvclxuICAvKiAtLSBBZGQgbW9yZSBjb21wb25lbnRzIGhlcmUgLS0gKi9cbn1cblxuLyogLS0gUGx1Z2luIGRlZmluaXRpb24gJiBBdXRvLWluc3RhbGwgLS0gKi9cbi8qIFlvdSBzaG91bGRuJ3QgaGF2ZSB0byBtb2RpZnkgdGhlIGNvZGUgYmVsb3cgKi9cblxuLy8gUGx1Z2luXG5jb25zdCBwbHVnaW4gPSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gIHZlcnNpb246IFZFUlNJT04sXG4gIGluc3RhbGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbi8vIEF1dG8taW5zdGFsbFxubGV0IEdsb2JhbFZ1ZSA9IG51bGxcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSB3aW5kb3cuVnVlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWVcbn1cbmlmIChHbG9iYWxWdWUpIHtcbiAgR2xvYmFsVnVlLnVzZShwbHVnaW4pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
});