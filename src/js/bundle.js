/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/mobile_menu.js":
/*!***************************************!*\
  !*** ./src/js/modules/mobile_menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ mobile_menu
/* harmony export */ });
function mobile_menu(){
    const hamburger = document.querySelector(".hamburger");
    const phoneBtn = document.querySelector(".phone_icon");
    const mobileMenu = document.querySelector(".header_mobile");
    const mobileContacts = document.querySelector(".header_contacts");
    const closeMenulBtn = document.querySelector(".header_mobile_title i")
    const closeContactslBtn = document.querySelector(".header_contacts_title i")
    
    function toggleDropMenus(dropEl, openBtn, closeBtn){
        openBtn.addEventListener("click", () =>{
            document.querySelector("body").classList.add("body_freeze");
            dropEl.classList.add("show_mobile");
        });
        closeBtn.addEventListener("click", () => {
            document.querySelector("body").classList.remove("body_freeze");
            dropEl.classList.remove("show_mobile");
        });
    }
    
    toggleDropMenus(mobileMenu, hamburger, closeMenulBtn);
    toggleDropMenus(mobileContacts, phoneBtn, closeContactslBtn);
}


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ modal
/* harmony export */ });
function modal(){
    const modal = document.querySelector(".modal_window")
    const mainPhoto = document.querySelector(".product_photo_img")
    const preview = document.querySelector(".product_photo_preview_small")
    const closeModalBtn = document.querySelector(".modal_window_close")
    
    function openModal(){
        modal.classList.remove('hidden')
        document.querySelector("body").classList.add("body_freeze");
    }
    function closeModal(){
        modal.classList.add('hidden')
        document.querySelector("body").classList.remove("body_freeze");
    }
    
    mainPhoto.addEventListener("click", openModal);
    preview.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => e.target === modal ? closeModal(): null);
    document.addEventListener("keydown", (e) => e.code === "Escape" ? closeModal() : null );
}


/***/ }),

/***/ "./src/js/modules/options.js":
/*!***********************************!*\
  !*** ./src/js/modules/options.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ options
/* harmony export */ });
function options(){
    const menuItems = document.querySelectorAll(".options_menu ul li a");
    const contentItems = document.querySelectorAll(".content_block");
    const title = document.querySelector(".options_content_title");
    const allParamLink = document.querySelector(".all_parametrs");
    const parametrsMenuItem = document.querySelector(".options_menu_parametrs a");
    const deliveryMenuItem = document.querySelector(".options_menu_delivery a");
    const parametrsBlock = document.querySelector(".options_content_parametrs");
    const delivLinks = document.querySelectorAll(".deliv_link");


    const titlesText = [
        "Наличие",
        "Бесплатная доставка по Москве и области",
        "Характеристики аккумулятора Topla (Топла) EFB Stop&Go Asia (56068 SMF) 60 Ач 600 А прямая полярность",
        "Описание",
        "Аналоги",
    ];

    function checkActive(item, i){
        if(item.classList.contains("active")){
            contentItems[i].classList.remove("hidden")
            title.innerText = titlesText[i]
        }
    }

    function addActive(arr, item){
        arr.forEach(item => item.classList.remove("active"))
        item.classList.add("active")
    }

    contentItems.forEach(item => item.classList.add("hidden"))

    menuItems.forEach((item, i) => {
        checkActive(item, i)

        item.addEventListener("click", () => {
            addActive(menuItems, item)
            contentItems.forEach(item => item.classList.add("hidden"))
            checkActive(item, i)
        });
    });

    allParamLink.addEventListener("click", () => {
        addActive(menuItems, parametrsMenuItem)
        contentItems.forEach(item => item.classList.add("hidden"))
        menuItems.forEach((item, i) => checkActive(item, i))
    });

    delivLinks.forEach((item, i) => {
        item.addEventListener("click", () => {
            addActive(menuItems, deliveryMenuItem)
            contentItems.forEach(item => item.classList.add("hidden"))
            menuItems.forEach((item, i) => checkActive(item, i))
        })
    });
}


/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/options */ "./src/js/modules/options.js");
/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mobile_menu */ "./src/js/modules/mobile_menu.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");




window.addEventListener("DOMContentLoaded", () => {
    (0,_modules_options__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_modules_mobile_menu__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.default)();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map