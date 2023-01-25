/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\n\n\n_utils__WEBPACK_IMPORTED_MODULE_0__.btn.addEventListener(\"click\", () => {\n  document.body.style.background = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPredifinedColor)(_utils__WEBPACK_IMPORTED_MODULE_0__.colors);\n  _utils__WEBPACK_IMPORTED_MODULE_0__.color.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPredifinedColor)(_utils__WEBPACK_IMPORTED_MODULE_0__.colors);\n});\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btn\": () => (/* binding */ btn),\n/* harmony export */   \"color\": () => (/* binding */ color),\n/* harmony export */   \"colors\": () => (/* binding */ colors),\n/* harmony export */   \"getHexColor\": () => (/* binding */ getHexColor),\n/* harmony export */   \"getPredifinedColor\": () => (/* binding */ getPredifinedColor),\n/* harmony export */   \"hex\": () => (/* binding */ hex)\n/* harmony export */ });\nconst colors = [\n  \"#264653\",\n  \"#2a9d8f\",\n  \"#e9c46a\",\n  \"#f4a261\",\n  \"#e76f51\",\n  \"#e63946\",\n  \"#f1faee\",\n  \"#a8dadc\",\n  \"#457b9d\",\n  \"#1d3557\",\n  \"#f4f1de\",\n  \"#e07a5f\",\n  \"#3d405b\",\n  \"#81b29a\",\n  \"#f2cc8f\",\n];\n\nconst hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, \"A\", \"B\", \"C\", \"D\", \"E\", \"F\"];\n\nconst btn = document.getElementById(\"btn\");\nconst color = document.querySelector(\".color\");\n\nconst getRandomNumber = (arr) => Math.floor(Math.random() * arr.length);\n\nconst getHexColor = (arr) => {\n  let hexColor = \"#\";\n  for (let i = 0; i < 6; i++) {\n    hexColor += arr[getRandomNumber(arr)];\n  }\n  return hexColor;\n};\n\nconst getPredifinedColor = (arr) => {\n  return arr[getRandomNumber(arr)];\n};\n\n\n//# sourceURL=webpack:///./js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;