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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageFactory */ \"./src/pageFactory.js\");\n\n\nconst pageContent = `\n<header name='about' class=\"app-header\">\n<div class='header-newsline newsline-pages'>\n  <h1 class='title title-about'>The · way</h1>\n  <h2 class=\"subtitle-pages\">#goals #bestdinneraround</h2>\n  <div class='message message-pages'>\n    <p>\n    Our founder once said:\n    <quote>I wish I could eat sugary corn flakes at like 4pm...</quote>\n    Then her roomate answered <q>Like the ones in the cabinet just behind you (lol)?</q>\n    And she said\n    <quote>Yeah, sure, but like... in a restaurant you know?</quote>\n    The rest is history.\n    </p>\n  </div>\n</div>\n<div class='toaster-area'>\n  <img class=\"toaster\" src=\"./img/toaster.png\" alt=\"\">\n  <img class='shine' src=\"./img/shine.png\" alt=\"\">\n  <img class='toast' src=\"./img/toast.png\" alt=\"\">\n  <img class='toast toast2' src=\"./img/toast.png\" alt=\"\">\n  <div class=\"message\">\n    <p><strong>Tip:</strong> If you amile at our stores mirrors</p>\n    <p>you'll the to see a real great person smiling back ;-)</p>      \n  </div>\n</div>\n<img class='header-img img-about' src=\"./img/cereal.jpg\" alt=\"\">\n</header>\n`;\n\nconst about = Object(_pageFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('about', pageContent, 'from-top');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageFactory */ \"./src/pageFactory.js\");\n\n\nconst pageContent = `\n<header name='contact' class=\"app-header\">\n<div class='header-newsline newsline-pages newsline-contact'>\n  <h1 class='title title-contact'>Get · touch</h1>\n  <h2 class=\"subtitle-pages subtitle subtitle-contact\">We are always open <br><small>(except when we are not)</small></h2>\n  <figure>\n    <img class='store' src='./img/store.jpg' alt=''>\n    <figcaption class='img-cap'>\n    <p><strong>Springfield store</strong></p>\n    <p><em>42, 2nd street - besides the station</em></p> \n    <p><a href='#'>mailme.hey@mail.com</a></p>\n    <p><strong>Hours: </strong>\n    <span>1am - 12am</span></p<\n    </figcaption>\n  </figure>\n</div>\n<div class='toaster-area'>\n  <img class=\"toaster\" src=\"./img/toaster.png\" alt=\"\">\n  <img class='shine' src=\"./img/shine.png\" alt=\"\">\n  <img class='toast' src=\"./img/toast.png\" alt=\"\">\n  <img class='toast toast2' src=\"./img/toast.png\" alt=\"\">\n  <div class=\"message\">\n    <p>For sale: <strong>baby shoes</strong>,</p>\n    <p>never worn...</p>      \n  </div>\n</div>\n<img class='header-img' id='header-img-pages' src=\"./img/cereal.jpg\" alt=\"\">\n</header>\n`;\n\nconst contact = Object(_pageFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('contact', pageContent, 'from-top');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst footer = (() => `<footer class=\"app-footer\">\n<ul>\n  <li>\n    2020 - <i class=\"fab fa-github-alt\"></i><a href=\"https://github.com/uryelah\"> uryelah</a>\n  </li>\n</ul>\n</footer>`)();\n/* harmony default export */ __webpack_exports__[\"default\"] = (footer);\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageFactory */ \"./src/pageFactory.js\");\n\n\nconst pageContent = `\n<header name='home' class=\"app-header\">\n<div class='header-newsline'>\n  <h1 class='title'>Lo·Eggo</h1>\n  <h2 class=\"subtitle\">breakfast food</h2>\n</div>\n<div class='toaster-area'>\n  <img class=\"toaster\" src=\"./img/toaster.png\" alt=\"\">\n  <img class='shine' src=\"./img/shine.png\" alt=\"\">\n  <img class='toast' src=\"./img/toast.png\" alt=\"\">\n  <img class='toast toast2' src=\"./img/toast.png\" alt=\"\">\n  <div class=\"message\">\n    <p><strong>Lo·Eggo</strong>, the 'gs' are silent, prides itself of serving fresh out of the box breakfast food 24/7.</p>\n    <p>Come the comfy life :-)</p>      \n  </div>\n</div>\n<img class='header-img' src=\"./img/cereal.jpg\" alt=\"\">\n</header>\n`;\n\nconst home = Object(_pageFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('home', pageContent, 'from-top');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _startAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startAnimation */ \"./src/startAnimation.js\");\n\n\n\n\n\n\n\n\nconst pagesModule = (() => ({\n  home: _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  about: _about__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  menu: _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  contact: _contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n}))();\n\nwindow.onload = () => {\n  const tabs = document.getElementsByClassName('tab');\n  const appContent = document.querySelector('#content');\n  appContent.innerHTML = `${_startAnimation__WEBPACK_IMPORTED_MODULE_6__[\"default\"] + _nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}\n  <header class=\"app-header\">\n  </header>\n\n  ${_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]}`;\n  pagesModule.home.addToPage(appContent.querySelector('.app-header'));\n  document.getElementById('home').classList.add('selected');\n\n  [...tabs].forEach(tab => {\n    tab.addEventListener('click', () => {\n      Array.from(tabs).forEach(t => {\n        if (t !== tab) {\n          t.classList.remove('selected');\n        } else {\n          t.classList.add('selected');\n        }\n      });\n      pagesModule[document.querySelector('.app-header').getAttribute('name')].leavePage(document.querySelector('.app-header'));\n      setTimeout(() => {\n        pagesModule[tab.id].addToPage(appContent.querySelector('.app-header'), false);\n      }, 1000);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageFactory */ \"./src/pageFactory.js\");\n\n\nconst pageContent = `\n<header name='menu' class=\"app-header\">\n<div class='header-newsline newsline-pages newsline-menu'>\n  <h1 class='title title-menu'>For · tummy</h1>\n  <h2 class=\"subtitle subtitle-pages subtitle-menu\">Mi grub es your grub</h2>\n</div>\n<div class='globes'>\n    <div class='globe'>\n      <img src='./img/01.jpg' alt=''>\n    </div>\n    <div class='globe'>\n      <img src='./img/02.jpg' alt=''>\n    </div>\n    <div class='globe'>\n      <img src='./img/03.jpeg' alt=''>\n    </div>\n    <div class='globe'>\n      <img src='./img/04.jpeg' alt=''>\n    </div>\n    <div class='globe'>\n      <img src='./img/05.jpeg' alt=''>\n    </div>\n    <div class='globe'>\n      <img src='./img/06.jpg' alt=''>\n    </div>\n  </div>\n<div class='toaster-area toaster-menu'>\n  <img class=\"toaster\" src=\"./img/toaster.png\" alt=\"\">\n  <img class='shine' src=\"./img/shine.png\" alt=\"\">\n  <img class='toast' src=\"./img/toast.png\" alt=\"\">\n  <img class='toast toast2' src=\"./img/toast.png\" alt=\"\">\n  <div class=\"message\">\n    <p>Hell is a <strong>nursery rimme</strong></p>\n  </div>\n</div>\n<img class='header-img' id='header-img-pages' src=\"./img/cereal.jpg\" alt=\"\">\n</header>\n`;\n\nconst menu = Object(_pageFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('menu', pageContent, 'from-top');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst nav = (() => `\n      <nav class='app-nav'>\n        <ul>\n          <li id='home' class='tab'><a href='#'>Home</a></li>\n          <li id='about' class='tab'><a href='#'>About</a></li>\n          <li id='menu' class='tab'><a href='#'>Menu</a></li id='menu' class='tab'>\n          <li id='contact' class='tab'><a href='#'>contact</a></li id='contact' class='tab'>\n        </ul>\n      </nav>\n`)();\n/* harmony default export */ __webpack_exports__[\"default\"] = (nav);\n\n//# sourceURL=webpack:///./src/nav.js?");

/***/ }),

/***/ "./src/pageFactory.js":
/*!****************************!*\
  !*** ./src/pageFactory.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst pageFactory = (title, content, transition) => {\n  const getTitle = () => title;\n  const getContent = () => content;\n  function addToPage(putAt, withTransition = true) {\n    if (withTransition) {\n      putAt.outerHTML = content;\n    } else {\n      putAt.outerHTML = content;\n    }\n\n    document.querySelector(`[name=\"${title}\"]`).classList.add(transition);\n  }\n  function leavePage(removeMe) {\n    removeMe.classList.remove(transition);\n    removeMe.classList.add(`${transition}-out`);\n  }\n  return {\n    getTitle, getContent, addToPage, leavePage,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageFactory);\n\n//# sourceURL=webpack:///./src/pageFactory.js?");

/***/ }),

/***/ "./src/startAnimation.js":
/*!*******************************!*\
  !*** ./src/startAnimation.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst animation = (() => `<div class=\"open-animation\">\n    <img id='stream' src=\"./img/stream.png\" alt=\"\">\n    <div class=\"loop-group\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n      <img class='loops' src=\"./img/loops.png\" alt=\"\">\n    </div>\n    </div>\n    <div class='cover'></div>`\n)();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animation);\n\n//# sourceURL=webpack:///./src/startAnimation.js?");

/***/ })

/******/ });