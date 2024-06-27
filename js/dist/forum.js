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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.ts":
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_MediaInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/MediaInfo */ "./src/forum/models/MediaInfo.ts");






// We provide our extension code in the form of an "initializer".
// This is a callback that will run after the core has booted.
flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('xypp/acgembed-rr', function (app) {
  // @ts-ignore
  flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.MediaInfo = flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default.a.hasMany('media-infos');
  app.store.models['media-infos'] = _models_MediaInfo__WEBPACK_IMPORTED_MODULE_5__["default"];
  function enableEmbedElem(iframe, cover) {
    var _iframe$attr;
    $(".acgembed-rr-cover.hide").parent().find("iframe").each(function (_, elem) {
      var _$$attr;
      $(elem).attr("src", (_$$attr = $(elem).attr("data-poster")) != null ? _$$attr : "");
      $(elem).addClass("acgembed-covered");
    });
    $(".acgembed-rr-cover.hide").fadeIn();
    $(".acgembed-rr-cover.hide").removeClass("hide");
    cover.fadeOut();
    cover.addClass("hide");
    iframe.attr("src", (_iframe$attr = iframe.attr("data-src")) != null ? _iframe$attr : "");
    iframe.removeClass("acgembed-covered");
  }
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, ["oncreate", "onupdate"], function () {
    var t_media_infos = this.attrs.post.MediaInfo();
    var mediaInfoRec = {};
    t_media_infos.forEach(function (media_info) {
      mediaInfoRec[media_info.source() + ":" + media_info.url()] = media_info;
    });
    $(".PostStream-item[data-id=" + this.attrs.post.id() + "]").find(".acgembed-rr-template").each(function (i, elem) {
      if ($(elem).hasClass("init")) {
        return;
      }
      $(elem).addClass("init");
      try {
        var _content, _content2, _iframe$attr2, _info$poster, _info$poster2;
        var content = elem == null || (_content = elem.content) == null || (_content = _content.firstChild) == null ? void 0 : _content.cloneNode(true);
        var _info = elem == null || (_content2 = elem.content) == null || (_content2 = _content2.querySelector("a")) == null ? void 0 : _content2.cloneNode(true);
        if (!content || !_info || !$(_info)) return;
        var infoObj = mediaInfoRec[$(_info).html() + ":" + $(_info).attr("href")];
        var info = {
          title: app.translator.trans("xypp-acgembed-rr.forum.unknown-title", [$(_info).html()]).join(""),
          desc: app.translator.trans("xypp-acgembed-rr.forum.unknown"),
          poster: ""
        };
        if (infoObj) {
          info.title = infoObj.title();
          info.desc = infoObj.desc();
          info.poster = infoObj.poster();
        }
        var embedPlayer = $(content);
        var iframe = embedPlayer.find("iframe");
        iframe.attr("data-src", (_iframe$attr2 = iframe.attr("src")) != null ? _iframe$attr2 : "");
        iframe.attr("data-poster", (_info$poster = info.poster) != null ? _info$poster : "about:blank");
        iframe.attr("src", (_info$poster2 = info.poster) != null ? _info$poster2 : "about:blank");
        iframe.addClass("acgembed-covered");
        embedPlayer.insertAfter(elem);
        var coverElem = $("<div></div>");
        coverElem.addClass("acgembed-rr-cover");
        var bgHTML = info.poster && "<div class='acgembed-rr bg' style='background-image:url(\"" + info.poster + "\")'></div>";
        coverElem.html(bgHTML + "<div class='acgembed-rr title'></div><div class='acgembed-rr desc'></div><div class='start'>" + app.translator.trans("xypp-acgembed-rr.forum.play") + "</div>");
        coverElem.find(".title").text(info.title);
        coverElem.find(".desc").text(info.desc);
        coverElem.insertAfter(iframe);
        coverElem.on("click", function () {
          enableEmbedElem($(iframe), $(coverElem));
        });
      } catch (e) {
        console.log(e);
      }
    });
  });
});

/***/ }),

/***/ "./src/forum/models/MediaInfo.ts":
/*!***************************************!*\
  !*** ./src/forum/models/MediaInfo.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaInfo; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);



// For more details about frontend models
// checkout https://docs.flarum.org/extend/models.html#frontend-models
var MediaInfo = /*#__PURE__*/function (_Model) {
  function MediaInfo() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.createdAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('createdAt', flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate);
    _this.updatedAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('updatedAt', flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate);
    _this.title = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('title');
    _this.url = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('url');
    _this.poster = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('poster');
    _this.desc = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('desc');
    _this.source = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('source');
    _this.post = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('post');
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MediaInfo, _Model);
  return MediaInfo;
}(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/models/Post":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/Post']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/Post'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map