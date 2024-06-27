module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.ts":
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('xypp/acgembed-rr', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionData["for"]('xypp-acgembed-rr').registerSetting({
    setting: 'xypp.acgembed-rr.tags',
    // This is the key the settings will be saved under in the settings table in the database.
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('xypp-acgembed-rr.admin.settings.tags.label'),
    // The label to be shown letting the admin know what the setting does.
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('xypp-acgembed-rr.admin.settings.tags.desc'),
    // Optional help text where a longer explanation of the setting can go.
    type: 'textarea' // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
  }, 30 // Optional: Priority
  ).registerSetting({
    setting: 'xypp.acgembed-rr.lazy',
    // This is the key the settings will be saved under in the settings table in the database.
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('xypp-acgembed-rr.admin.settings.lazy.label'),
    // The label to be shown letting the admin know what the setting does.
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('xypp-acgembed-rr.admin.settings.lazy.desc'),
    // Optional help text where a longer explanation of the setting can go.
    type: 'boolean' // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
  }, 30 // Optional: Priority
  ).registerSetting({
    setting: 'xypp.acgembed-rr.show-url',
    // This is the key the settings will be saved under in the settings table in the database.
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('xypp-acgembed-rr.admin.settings.show-url.label'),
    // The label to be shown letting the admin know what the setting does.
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('xypp-acgembed-rr.admin.settings.show-url.desc'),
    // Optional help text where a longer explanation of the setting can go.
    type: 'boolean' // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
  }, 30 // Optional: Priority
  ).registerSetting({
    setting: 'xypp.acgembed-rr.fetch',
    // This is the key the settings will be saved under in the settings table in the database.
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('xypp-acgembed-rr.admin.settings.fetch.label'),
    // The label to be shown letting the admin know what the setting does.
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('xypp-acgembed-rr.admin.settings.fetch.desc'),
    // Optional help text where a longer explanation of the setting can go.
    type: 'boolean' // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
  }, 30 // Optional: Priority
  );
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/app'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map