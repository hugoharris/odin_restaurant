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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_breakfast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/breakfast */ \"./src/pages/breakfast.js\");\n/* harmony import */ var _pages_lunch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/lunch */ \"./src/pages/lunch.js\");\n/* harmony import */ var _pages_dinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dinner */ \"./src/pages/dinner.js\");\n// import pages\n\n\n\n\n// get DOM elements\nconst navBreakfast = document.querySelector(\".breakfast\");\nconst navLunch = document.querySelector(\".lunch\");\nconst navDinner = document.querySelector(\".dinner\");\nconst content = document.getElementById(\"content\")\n\n// handle navigation\nfunction handleClick(e) {\n    const target = e.target.className;\n    if (target === 'breakfast') {\n        content.innerHTML = (0,_pages_breakfast__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } else if (target === 'lunch') {\n        content.innerHTML = (0,_pages_lunch__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (target === 'dinner') {\n        content.innerHTML = (0,_pages_dinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n} \n\n// listen for clicks to change content\nnavBreakfast.addEventListener(\"click\", handleClick)\nnavLunch.addEventListener(\"click\", handleClick)\nnavDinner.addEventListener(\"click\", handleClick)\n\n\n//# sourceURL=webpack://odin_restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pages/breakfast.js":
/*!********************************!*\
  !*** ./src/pages/breakfast.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ breakfast)\n/* harmony export */ });\nfunction breakfast() {\n    return `\n        <div class=\"menu-main\">\n            <h2>Breakfast</h2>\n            <ul>\n                <li>Bacon and Eggs: $20</li>\n                <li>French Toast: $10</li>\n                <li>Sausage and Ham: $15</li>\n            </ul>\n        </div>\n    `;\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/pages/breakfast.js?");

/***/ }),

/***/ "./src/pages/dinner.js":
/*!*****************************!*\
  !*** ./src/pages/dinner.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dinner)\n/* harmony export */ });\nfunction dinner() {\n    return `\n        <div class=\"menu-main\">\n            <h2>Dinner</h2>\n            <ul>\n                <li>Chicken and Rice: $20</li>\n                <li>Noodles with Ham: $10</li>\n                <li>Shrimp and Pasta: $15</li>\n            </ul>\n        </div>\n    `;\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/pages/dinner.js?");

/***/ }),

/***/ "./src/pages/lunch.js":
/*!****************************!*\
  !*** ./src/pages/lunch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ lunch)\n/* harmony export */ });\nfunction lunch() {\n    return `\n        <div class=\"menu-main\">\n            <h2>Lunch</h2>\n            <ul>\n                <li>Bacon Sandwich: $20</li>\n                <li>Tomato Soup: $10</li>\n                <li>Fried Rice: $15</li>\n            </ul>\n        </div>\n    `;\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/pages/lunch.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;