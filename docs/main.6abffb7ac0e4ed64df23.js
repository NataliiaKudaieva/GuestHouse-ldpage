/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./static/icons/sprite.svg
var sprite_namespaceObject = __webpack_require__.p + "assets/sprite.svg";
;// CONCATENATED MODULE: ./static/img/bedroom.png
var bedroom_namespaceObject = __webpack_require__.p + "assets/bedroom.png";
;// CONCATENATED MODULE: ./static/img/kitchen.png
var kitchen_namespaceObject = __webpack_require__.p + "assets/kitchen.png";
;// CONCATENATED MODULE: ./static/img/header_photo.png
var header_photo_namespaceObject = __webpack_require__.p + "assets/header_photo.png";
;// CONCATENATED MODULE: ./src/js/components/slider.js
const slider = () => {
  const container = document.querySelector(".slider");
  const prev = document.querySelector(".slider__prev");
  const next = document.querySelector(".slider__next");
  const item = document.querySelectorAll(".slider__item");
  let offset = 1;
  const sizeOfItem = item[0].offsetWidth;
  const setWidth = (size, offset) => {
    let width = size * offset + "px";
    return container.style.transform = `translateX(-${width})`;
  };
  next.addEventListener("click", () => {
    offset++;
    if (offset === item.length - 1) offset = 0;
    setWidth(sizeOfItem, offset);
  });
  prev.addEventListener("click", () => {
    offset--;
    if (offset <= -1) offset = 0;
    setWidth(sizeOfItem, offset);
  });
};
slider();
/* harmony default export */ var components_slider = ((/* unused pure expression or super */ null && (slider)));
;// CONCATENATED MODULE: ./src/js/components/scrollreveal.js
const scrolls = () => {
  ScrollReveal().reveal(".intro", {
    delay: 250
  });
  ScrollReveal().reveal([".history", ".motto", ".arrangements"], {
    delay: 250
  });
  ScrollReveal().reveal(".motto", {
    delay: 250
  });
  ScrollReveal().reveal(".arrangements", {
    delay: 250
  });
};
/* harmony default export */ var scrollreveal = (scrolls);
;// CONCATENATED MODULE: ./src/index.js





////COMPONENTS


scrollreveal();
/******/ })()
;