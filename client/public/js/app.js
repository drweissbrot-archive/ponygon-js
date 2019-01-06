(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./js/Connection.js":
/*!**************************!*\
  !*** ./js/Connection.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Connection =
/*#__PURE__*/
function () {
  function Connection() {
    _classCallCheck(this, Connection);

    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()();
    this.auth = window.localStorage.getItem('auth');
  }

  _createClass(Connection, [{
    key: "on",
    value: function on(event, handler) {
      this.socket.on(event, handler);
      this.socket.on(event, function () {
        var _console;

        for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
          data[_key] = arguments[_key];
        }

        (_console = console).info.apply(_console, ['event', event].concat(data));
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, handler) {
      this.socket.off(event, handler);
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event, data, callback) {
      data = this.appendAuthToData(data);
      this.socket.emit(event, data, callback);
      return this;
    }
  }, {
    key: "get",
    value: function get(route, data) {
      var _this = this;

      data = this.appendAuthToData(data);
      return new Promise(function (resolve, reject) {
        _this.socket.emit("get ".concat(route), data, resolve);
      });
    }
  }, {
    key: "appendAuthToData",
    value: function appendAuthToData(data) {
      if (typeof data === 'null' || typeof data === 'undefined') {
        data = {
          auth: this.auth
        };
      } else if (_typeof(data) === 'object' && !data.hasOwnProperty('auth')) {
        data['auth'] = this.auth;
      }

      return data;
    }
  }]);

  return Connection;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Connection());

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap/vue */ "./js/bootstrap/vue.js");


/***/ }),

/***/ "./js/bootstrap/vue.js":
/*!*****************************!*\
  !*** ./js/bootstrap/vue.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./js/components/App.vue");
/* harmony import */ var _components_Lobby_Join_Create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Lobby/Join/Create */ "./js/components/Lobby/Join/Create.vue");



new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  components: {
    PgApp: _components_App__WEBPACK_IMPORTED_MODULE_1__["default"],
    PgCreateLobbyForm: _components_Lobby_Join_Create__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./js/components/App.vue":
/*!*******************************!*\
  !*** ./js/components/App.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_6a6fa670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6a6fa670& */ "./js/components/App.vue?vue&type=template&id=6a6fa670&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_6a6fa670___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_6a6fa670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/App.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./js/components/App.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/App.vue?vue&type=template&id=6a6fa670&":
/*!**************************************************************!*\
  !*** ./js/components/App.vue?vue&type=template&id=6a6fa670& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6a6fa670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6a6fa670& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/App.vue?vue&type=template&id=6a6fa670&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6a6fa670___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6a6fa670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Amor/Choose.vue":
/*!****************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Amor/Choose.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Choose_vue_vue_type_template_id_499f75d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Choose.vue?vue&type=template&id=499f75d4& */ "./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=template&id=499f75d4&");
/* harmony import */ var _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choose.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Choose_vue_vue_type_template_id_499f75d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Choose_vue_vue_type_template_id_499f75d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Amor/Choose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=template&id=499f75d4&":
/*!***********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=template&id=499f75d4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_499f75d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=template&id=499f75d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=template&id=499f75d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_499f75d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_499f75d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Amor/InLove.vue":
/*!****************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Amor/InLove.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InLove_vue_vue_type_template_id_404e2594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InLove.vue?vue&type=template&id=404e2594& */ "./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=template&id=404e2594&");
/* harmony import */ var _InLove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InLove.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InLove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InLove_vue_vue_type_template_id_404e2594___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InLove_vue_vue_type_template_id_404e2594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Amor/InLove.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InLove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InLove.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InLove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=template&id=404e2594&":
/*!***********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=template&id=404e2594& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InLove_vue_vue_type_template_id_404e2594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InLove.vue?vue&type=template&id=404e2594& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=template&id=404e2594&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InLove_vue_vue_type_template_id_404e2594___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InLove_vue_vue_type_template_id_404e2594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue":
/*!************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accusations_vue_vue_type_template_id_657a6bd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accusations.vue?vue&type=template&id=657a6bd6& */ "./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=template&id=657a6bd6&");
/* harmony import */ var _Accusations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accusations.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Accusations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Accusations_vue_vue_type_template_id_657a6bd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Accusations_vue_vue_type_template_id_657a6bd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Daytime/Accusations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accusations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Accusations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accusations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=template&id=657a6bd6&":
/*!*******************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=template&id=657a6bd6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Accusations_vue_vue_type_template_id_657a6bd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Accusations.vue?vue&type=template&id=657a6bd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=template&id=657a6bd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Accusations_vue_vue_type_template_id_657a6bd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Accusations_vue_vue_type_template_id_657a6bd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue":
/*!*******************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Deaths_vue_vue_type_template_id_4fbcb214___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deaths.vue?vue&type=template&id=4fbcb214& */ "./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=template&id=4fbcb214&");
/* harmony import */ var _Deaths_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deaths.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Deaths_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Deaths_vue_vue_type_template_id_4fbcb214___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Deaths_vue_vue_type_template_id_4fbcb214___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Daytime/Deaths.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Deaths_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deaths.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Deaths_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=template&id=4fbcb214&":
/*!**************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=template&id=4fbcb214& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Deaths_vue_vue_type_template_id_4fbcb214___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deaths.vue?vue&type=template&id=4fbcb214& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=template&id=4fbcb214&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Deaths_vue_vue_type_template_id_4fbcb214___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Deaths_vue_vue_type_template_id_4fbcb214___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue":
/*!******************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mayor_vue_vue_type_template_id_f9d4353e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mayor.vue?vue&type=template&id=f9d4353e& */ "./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=template&id=f9d4353e&");
/* harmony import */ var _Mayor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mayor.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mayor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mayor_vue_vue_type_template_id_f9d4353e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mayor_vue_vue_type_template_id_f9d4353e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Daytime/Mayor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mayor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Mayor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mayor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=template&id=f9d4353e&":
/*!*************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=template&id=f9d4353e& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mayor_vue_vue_type_template_id_f9d4353e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Mayor.vue?vue&type=template&id=f9d4353e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=template&id=f9d4353e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mayor_vue_vue_type_template_id_f9d4353e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mayor_vue_vue_type_template_id_f9d4353e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Voting.vue":
/*!*******************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Voting.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Voting_vue_vue_type_template_id_495db39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Voting.vue?vue&type=template&id=495db39e& */ "./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=template&id=495db39e&");
/* harmony import */ var _Voting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Voting.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Voting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Voting_vue_vue_type_template_id_495db39e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Voting_vue_vue_type_template_id_495db39e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Daytime/Voting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Voting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=template&id=495db39e&":
/*!**************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=template&id=495db39e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Voting_vue_vue_type_template_id_495db39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Voting.vue?vue&type=template&id=495db39e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=template&id=495db39e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Voting_vue_vue_type_template_id_495db39e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Voting_vue_vue_type_template_id_495db39e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/GgWp.vue":
/*!*********************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/GgWp.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GgWp_vue_vue_type_template_id_e05601ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GgWp.vue?vue&type=template&id=e05601ec& */ "./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=template&id=e05601ec&");
/* harmony import */ var _GgWp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GgWp.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GgWp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GgWp_vue_vue_type_template_id_e05601ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GgWp_vue_vue_type_template_id_e05601ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/GgWp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GgWp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=template&id=e05601ec&":
/*!****************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=template&id=e05601ec& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWp_vue_vue_type_template_id_e05601ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GgWp.vue?vue&type=template&id=e05601ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=template&id=e05601ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWp_vue_vue_type_template_id_e05601ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWp_vue_vue_type_template_id_e05601ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/GgWpPlayer.vue":
/*!***************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/GgWpPlayer.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GgWpPlayer_vue_vue_type_template_id_2508800b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GgWpPlayer.vue?vue&type=template&id=2508800b& */ "./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=template&id=2508800b&");
/* harmony import */ var _GgWpPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GgWpPlayer.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GgWpPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GgWpPlayer_vue_vue_type_template_id_2508800b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GgWpPlayer_vue_vue_type_template_id_2508800b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/GgWpPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWpPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GgWpPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWpPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=template&id=2508800b&":
/*!**********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=template&id=2508800b& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWpPlayer_vue_vue_type_template_id_2508800b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GgWpPlayer.vue?vue&type=template&id=2508800b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=template&id=2508800b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWpPlayer_vue_vue_type_template_id_2508800b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GgWpPlayer_vue_vue_type_template_id_2508800b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Hunter/Choose.vue":
/*!******************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Hunter/Choose.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Choose_vue_vue_type_template_id_2d732376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Choose.vue?vue&type=template&id=2d732376& */ "./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=template&id=2d732376&");
/* harmony import */ var _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choose.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Choose_vue_vue_type_template_id_2d732376___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Choose_vue_vue_type_template_id_2d732376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Hunter/Choose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=template&id=2d732376&":
/*!*************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=template&id=2d732376& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_2d732376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=template&id=2d732376& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=template&id=2d732376&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_2d732376___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_2d732376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue":
/*!**************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChooseSuccessor_vue_vue_type_template_id_2ac81147___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChooseSuccessor.vue?vue&type=template&id=2ac81147& */ "./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=template&id=2ac81147&");
/* harmony import */ var _ChooseSuccessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChooseSuccessor.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChooseSuccessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChooseSuccessor_vue_vue_type_template_id_2ac81147___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChooseSuccessor_vue_vue_type_template_id_2ac81147___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseSuccessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChooseSuccessor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseSuccessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=template&id=2ac81147&":
/*!*********************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=template&id=2ac81147& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseSuccessor_vue_vue_type_template_id_2ac81147___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChooseSuccessor.vue?vue&type=template&id=2ac81147& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=template&id=2ac81147&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseSuccessor_vue_vue_type_template_id_2ac81147___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseSuccessor_vue_vue_type_template_id_2ac81147___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Protector/Choose.vue":
/*!*********************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Protector/Choose.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Choose_vue_vue_type_template_id_42ec03b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Choose.vue?vue&type=template&id=42ec03b6& */ "./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=template&id=42ec03b6&");
/* harmony import */ var _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choose.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Choose_vue_vue_type_template_id_42ec03b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Choose_vue_vue_type_template_id_42ec03b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Protector/Choose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=template&id=42ec03b6&":
/*!****************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=template&id=42ec03b6& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_42ec03b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=template&id=42ec03b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=template&id=42ec03b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_42ec03b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_42ec03b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/RoleInterstitial.vue":
/*!*********************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/RoleInterstitial.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleInterstitial_vue_vue_type_template_id_a983401a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleInterstitial.vue?vue&type=template&id=a983401a& */ "./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=template&id=a983401a&");
/* harmony import */ var _RoleInterstitial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleInterstitial.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleInterstitial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleInterstitial_vue_vue_type_template_id_a983401a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleInterstitial_vue_vue_type_template_id_a983401a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/RoleInterstitial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleInterstitial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleInterstitial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleInterstitial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=template&id=a983401a&":
/*!****************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=template&id=a983401a& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleInterstitial_vue_vue_type_template_id_a983401a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleInterstitial.vue?vue&type=template&id=a983401a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=template&id=a983401a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleInterstitial_vue_vue_type_template_id_a983401a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleInterstitial_vue_vue_type_template_id_a983401a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Spy/Choose.vue":
/*!***************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Spy/Choose.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Choose_vue_vue_type_template_id_514211db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Choose.vue?vue&type=template&id=514211db& */ "./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=template&id=514211db&");
/* harmony import */ var _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choose.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Choose_vue_vue_type_template_id_514211db___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Choose_vue_vue_type_template_id_514211db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Spy/Choose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=template&id=514211db&":
/*!**********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=template&id=514211db& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_514211db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=template&id=514211db& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=template&id=514211db&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_514211db___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_514211db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Spy/Result.vue":
/*!***************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Spy/Result.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Result_vue_vue_type_template_id_92e41e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Result.vue?vue&type=template&id=92e41e3e& */ "./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=template&id=92e41e3e&");
/* harmony import */ var _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Result_vue_vue_type_template_id_92e41e3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Result_vue_vue_type_template_id_92e41e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Spy/Result.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=template&id=92e41e3e&":
/*!**********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=template&id=92e41e3e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_92e41e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=template&id=92e41e3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=template&id=92e41e3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_92e41e3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_92e41e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue":
/*!**********************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WaitingForPlayers_vue_vue_type_template_id_0f7265f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WaitingForPlayers.vue?vue&type=template&id=0f7265f5& */ "./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=template&id=0f7265f5&");
/* harmony import */ var _WaitingForPlayers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaitingForPlayers.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WaitingForPlayers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WaitingForPlayers_vue_vue_type_template_id_0f7265f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WaitingForPlayers_vue_vue_type_template_id_0f7265f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/WaitingForPlayers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingForPlayers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WaitingForPlayers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingForPlayers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=template&id=0f7265f5&":
/*!*****************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=template&id=0f7265f5& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingForPlayers_vue_vue_type_template_id_0f7265f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WaitingForPlayers.vue?vue&type=template&id=0f7265f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=template&id=0f7265f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingForPlayers_vue_vue_type_template_id_0f7265f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingForPlayers_vue_vue_type_template_id_0f7265f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue":
/*!********************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Choose_vue_vue_type_template_id_791d125c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Choose.vue?vue&type=template&id=791d125c& */ "./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=template&id=791d125c&");
/* harmony import */ var _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choose.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Choose_vue_vue_type_template_id_791d125c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Choose_vue_vue_type_template_id_791d125c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Werewolf/Choose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=template&id=791d125c&":
/*!***************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=template&id=791d125c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_791d125c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=template&id=791d125c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=template&id=791d125c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_791d125c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_791d125c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Werewolf/Result.vue":
/*!********************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Werewolf/Result.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Result_vue_vue_type_template_id_28bd55d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Result.vue?vue&type=template&id=28bd55d8& */ "./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=template&id=28bd55d8&");
/* harmony import */ var _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Result_vue_vue_type_template_id_28bd55d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Result_vue_vue_type_template_id_28bd55d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Werewolf/Result.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=template&id=28bd55d8&":
/*!***************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=template&id=28bd55d8& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_28bd55d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=template&id=28bd55d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=template&id=28bd55d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_28bd55d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_28bd55d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Witch/Choose.vue":
/*!*****************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Witch/Choose.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Choose_vue_vue_type_template_id_15ffdea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Choose.vue?vue&type=template&id=15ffdea0& */ "./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=template&id=15ffdea0&");
/* harmony import */ var _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choose.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Choose_vue_vue_type_template_id_15ffdea0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Choose_vue_vue_type_template_id_15ffdea0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Actions/Witch/Choose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=template&id=15ffdea0&":
/*!************************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=template&id=15ffdea0& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_15ffdea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choose.vue?vue&type=template&id=15ffdea0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=template&id=15ffdea0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_15ffdea0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choose_vue_vue_type_template_id_15ffdea0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Games/Werewolves/Werewolves.vue":
/*!*******************************************************!*\
  !*** ./js/components/Games/Werewolves/Werewolves.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Werewolves_vue_vue_type_template_id_3cd79160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Werewolves.vue?vue&type=template&id=3cd79160& */ "./js/components/Games/Werewolves/Werewolves.vue?vue&type=template&id=3cd79160&");
/* harmony import */ var _Werewolves_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Werewolves.vue?vue&type=script&lang=js& */ "./js/components/Games/Werewolves/Werewolves.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Werewolves_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Werewolves_vue_vue_type_template_id_3cd79160___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Werewolves_vue_vue_type_template_id_3cd79160___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Games/Werewolves/Werewolves.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Games/Werewolves/Werewolves.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Werewolves.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Werewolves_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Werewolves.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Werewolves.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Werewolves_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Games/Werewolves/Werewolves.vue?vue&type=template&id=3cd79160&":
/*!**************************************************************************************!*\
  !*** ./js/components/Games/Werewolves/Werewolves.vue?vue&type=template&id=3cd79160& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Werewolves_vue_vue_type_template_id_3cd79160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Werewolves.vue?vue&type=template&id=3cd79160& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Werewolves.vue?vue&type=template&id=3cd79160&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Werewolves_vue_vue_type_template_id_3cd79160___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Werewolves_vue_vue_type_template_id_3cd79160___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Lobby/Join/Concerns/StoresRememberedNickname.js":
/*!***********************************************************************!*\
  !*** ./js/components/Lobby/Join/Concerns/StoresRememberedNickname.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: window.localStorage.getItem('remembered-nickname')
    };
  },
  watch: {
    name: function name() {
      window.localStorage.setItem('remembered-nickname', this.name);
    }
  }
});

/***/ }),

/***/ "./js/components/Lobby/Join/Create.vue":
/*!*********************************************!*\
  !*** ./js/components/Lobby/Join/Create.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_443a1d52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=443a1d52& */ "./js/components/Lobby/Join/Create.vue?vue&type=template&id=443a1d52&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./js/components/Lobby/Join/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_443a1d52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_443a1d52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Lobby/Join/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Lobby/Join/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./js/components/Lobby/Join/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Join/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Lobby/Join/Create.vue?vue&type=template&id=443a1d52&":
/*!****************************************************************************!*\
  !*** ./js/components/Lobby/Join/Create.vue?vue&type=template&id=443a1d52& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_443a1d52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=443a1d52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Join/Create.vue?vue&type=template&id=443a1d52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_443a1d52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_443a1d52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Lobby/Join/Join.vue":
/*!*******************************************!*\
  !*** ./js/components/Lobby/Join/Join.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Join_vue_vue_type_template_id_70db7b45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Join.vue?vue&type=template&id=70db7b45& */ "./js/components/Lobby/Join/Join.vue?vue&type=template&id=70db7b45&");
/* harmony import */ var _Join_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Join.vue?vue&type=script&lang=js& */ "./js/components/Lobby/Join/Join.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Join_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Join_vue_vue_type_template_id_70db7b45___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Join_vue_vue_type_template_id_70db7b45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Lobby/Join/Join.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Lobby/Join/Join.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./js/components/Lobby/Join/Join.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Join_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Join.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Join/Join.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Join_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Lobby/Join/Join.vue?vue&type=template&id=70db7b45&":
/*!**************************************************************************!*\
  !*** ./js/components/Lobby/Join/Join.vue?vue&type=template&id=70db7b45& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Join_vue_vue_type_template_id_70db7b45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Join.vue?vue&type=template&id=70db7b45& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Join/Join.vue?vue&type=template&id=70db7b45&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Join_vue_vue_type_template_id_70db7b45___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Join_vue_vue_type_template_id_70db7b45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/Lobby/Lobby.vue":
/*!***************************************!*\
  !*** ./js/components/Lobby/Lobby.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lobby_vue_vue_type_template_id_8d0128e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lobby.vue?vue&type=template&id=8d0128e8& */ "./js/components/Lobby/Lobby.vue?vue&type=template&id=8d0128e8&");
/* harmony import */ var _Lobby_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lobby.vue?vue&type=script&lang=js& */ "./js/components/Lobby/Lobby.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Lobby_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lobby_vue_vue_type_template_id_8d0128e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Lobby_vue_vue_type_template_id_8d0128e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/Lobby/Lobby.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/Lobby/Lobby.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./js/components/Lobby/Lobby.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Lobby.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Lobby.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/Lobby/Lobby.vue?vue&type=template&id=8d0128e8&":
/*!**********************************************************************!*\
  !*** ./js/components/Lobby/Lobby.vue?vue&type=template&id=8d0128e8& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_template_id_8d0128e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Lobby.vue?vue&type=template&id=8d0128e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Lobby.vue?vue&type=template&id=8d0128e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_template_id_8d0128e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lobby_vue_vue_type_template_id_8d0128e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/mixins/ListensForConnectionEvents.js":
/*!*************************************************!*\
  !*** ./js/mixins/ListensForConnectionEvents.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    if (!this.events) return;

    for (var event in this.events) {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].on(event, this.events[event]);
    }
  },
  destroy: function destroy() {
    if (!this.events) return;

    for (var event in this.events) {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].off(event, this.events[event]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
/* harmony import */ var _Lobby_Lobby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lobby/Lobby */ "./js/components/Lobby/Lobby.vue");
/* harmony import */ var _Lobby_Join_Create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lobby/Join/Create */ "./js/components/Lobby/Join/Create.vue");
/* harmony import */ var _Lobby_Join_Join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lobby/Join/Join */ "./js/components/Lobby/Join/Join.vue");
/* harmony import */ var _Games_Werewolves_Werewolves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Games/Werewolves/Werewolves */ "./js/components/Games/Werewolves/Werewolves.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PgLobby: _Lobby_Lobby__WEBPACK_IMPORTED_MODULE_1__["default"],
    PgLobbyCreate: _Lobby_Join_Create__WEBPACK_IMPORTED_MODULE_2__["default"],
    PgLobbyJoin: _Lobby_Join_Join__WEBPACK_IMPORTED_MODULE_3__["default"],
    PgWerewolves: _Games_Werewolves_Werewolves__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      auth: window.localStorage.getItem('auth'),
      lobbyId: window.location.hash.replace(/^#/, ''),
      game: null,
      playerId: null
    };
  },
  mounted: function mounted() {
    connection__WEBPACK_IMPORTED_MODULE_0__["default"].on('game starting', this.onGameStarting);
  },
  methods: {
    onCreatedOrJoinedLobby: function onCreatedOrJoinedLobby(_ref) {
      var lobbyId = _ref.lobbyId,
          authString = _ref.authString;
      this.auth = authString;
      this.lobbyId = lobbyId;
    },
    onGameStarting: function onGameStarting(_ref2) {
      var name = _ref2.name;
      this.game = name;
    }
  },
  watch: {
    auth: function auth(newAuth, oldAuth) {
      window.localStorage.setItem('auth', newAuth);
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].auth = newAuth;
      this.playerId = newAuth.split(';')[0];
    },
    lobbyId: function lobbyId(newLobbyId, oldLobbyId) {
      if (newLobbyId) window.location.hash = "#".concat(newLobbyId);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    alivePlayers: {
      required: true
    }
  },
  data: function data() {
    return {
      chosen: [],
      submitted: false
    };
  },
  methods: {
    choosePlayer: function choosePlayer(player) {
      if (this.chosen.includes(player)) return;
      if (this.chosen.length === 2) this.chosen = [];
      this.chosen.push(player);
    },
    submit: function submit() {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('amor choice', {
        players: this.chosen.map(function (player) {
          return player.id;
        })
      });
      this.submitted = true;
      this.$emit('log', this.summary);
    }
  },
  computed: {
    summary: function summary() {
      if (this.chosen.length > 2) this.chosen = [];
      if (this.chosen.length === 0) return 'Please choose two players.';
      if (this.chosen.length === 1) return "".concat(this.chosen[0].name, " will be in love.");
      return "".concat(this.chosen[0].name, " and ").concat(this.chosen[1].name, " will be in love.");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      required: true
    }
  },
  mounted: function mounted() {
    this.$emit('log', "You are in love with ".concat(this.data.other.name, " (").concat(this.data.other.role, ")."));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
/* harmony import */ var mixins_ListensForConnectionEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mixins/ListensForConnectionEvents */ "./js/mixins/ListensForConnectionEvents.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [mixins_ListensForConnectionEvents__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    data: {
      required: true
    },
    alivePlayers: {
      required: true
    },
    mayor: Boolean
  },
  data: function data() {
    return {
      accusations: [],
      events: {
        'accusations': this.onAccusations
      }
    };
  },
  methods: {
    accusePlayer: function accusePlayer(player) {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('accuse', {
        player: player.id
      });
    },
    continueToVoting: function continueToVoting() {
      if (this.accusations.length) connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('mayor continue to voting');
    },
    onAccusations: function onAccusations(_ref) {
      var accusations = _ref.accusations;
      this.accusations = accusations;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      required: true
    }
  },
  // mounted() {
  // 	this.$emit('log', this.data.deaths.map((player) => player.name).join(', ') + ' died.')
  // },
  computed: {
    names: function names() {
      return this.data.deaths.map(function (player) {
        return player.name;
      }).join(', ');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      required: true
    },
    alivePlayers: {
      required: true
    }
  },
  data: function data() {
    return {
      chosen: null
    };
  },
  methods: {
    choosePlayer: function choosePlayer(player) {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('vote for mayor', {
        player: player.id
      });
      this.chosen = player;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      required: true
    }
  },
  data: function data() {
    return {
      votedFor: null
    };
  },
  methods: {
    voteFor: function voteFor(player) {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('vote', {
        player: player.id
      });
      this.votedFor = player;
    }
  },
  computed: {
    summary: function summary() {
      return this.votedFor ? "You want ".concat(this.votedFor.name, " to die.") : 'Please choose who you want to die.';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GgWpPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GgWpPlayer */ "./js/components/Games/Werewolves/Actions/GgWpPlayer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    GgWpPlayer: _GgWpPlayer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {
      required: true
    }
  },
  mounted: function mounted() {
    this.$emit('log', this.heading);
  },
  computed: {
    heading: function heading() {
      return "The ".concat(this.data.winner, " win!");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    player: {
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    alivePlayers: {
      required: true
    }
  },
  methods: {
    choose: function choose(player) {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('hunter choice', {
        player: player.id
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    alivePlayers: {
      required: true
    }
  },
  methods: {
    choose: function choose(player) {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('mayor choice', {
        player: player.id
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    alivePlayers: {
      required: true
    },
    data: {
      required: true
    }
  },
  data: function data() {
    return {
      chosen: null,
      submitted: false
    };
  },
  methods: {
    choose: function choose(player) {
      this.chosen = player;
    },
    submit: function submit() {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('protector choice', {
        player: this.chosen.id
      });
      this.submitted = true;
      this.$emit('log', this.summary);
    }
  },
  computed: {
    summary: function summary() {
      if (this.chosen) return "You will protect ".concat(this.chosen.name, " this night.");
      return 'Please choose who you want to protect.';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    alivePlayers: {
      required: true
    }
  },
  data: function data() {
    return {
      chosen: null
    };
  },
  methods: {
    choose: function choose(player) {
      this.chosen = player;
    },
    submit: function submit() {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('spy choice', {
        player: this.chosen.id
      });
    }
  },
  computed: {
    summary: function summary() {
      return this.chosen ? "You want to investigate ".concat(this.chosen.name, ".") : 'Please choose who you want to investigate.';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      required: true
    }
  },
  mounted: function mounted() {
    this.$emit('log', this.result);
  },
  computed: {
    result: function result() {
      return this.data.friendly ? "".concat(this.data.player.name, " seems to be an ordinary villager.") : "Something seems off about ".concat(this.data.player.name, ".");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({//
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
/* harmony import */ var mixins_ListensForConnectionEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mixins/ListensForConnectionEvents */ "./js/mixins/ListensForConnectionEvents.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [mixins_ListensForConnectionEvents__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    data: {
      required: true
    },
    alivePlayers: {
      required: true
    }
  },
  data: function data() {
    return {
      chosen: null,
      choices: this.getInitialAllChoices(),
      events: {
        'werewolf choices': this.onWerewolfChoices
      }
    };
  },
  methods: {
    getInitialAllChoices: function getInitialAllChoices() {
      return this.data.werewolves.map(function (wolf) {
        return {
          wolf: wolf,
          choice: null
        };
      });
    },
    choose: function choose(player) {
      if (this.chosen === player) return;
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('werewolf choice', {
        player: player.id
      });
    },
    onWerewolfChoices: function onWerewolfChoices(_ref) {
      var choices = _ref.choices;
      this.choices = choices;
    }
  },
  computed: {
    summary: function summary() {
      return this.chosen === null ? 'Please choose the victim.' : "You want to kill ".concat(this.chosen.name, ".");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      required: true
    }
  },
  mounted: function mounted() {
    this.$emit('log', this.body);
  },
  computed: {
    body: function body() {
      return "The Werewolves will attack ".concat(this.data.victim.name, " tonight.");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    alivePlayers: {
      required: true
    },
    data: {
      required: true
    }
  },
  data: function data() {
    return {
      healWerewolfVictim: false,
      chosen: null,
      submitted: false
    };
  },
  mounted: function mounted() {
    if (this.data.werewolfVictim) this.$emit('log', "The Werewolves attacked ".concat(this.data.werewolfVictim.name, " tonight."));else this.$emit('log', 'The Werewolves attacked no-one tonight.');
  },
  methods: {
    choose: function choose(player) {
      this.chosen = player;
    },
    chooseNoOne: function chooseNoOne() {
      this.chosen = null;
    },
    submit: function submit() {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('witch choice', {
        heal: this.healWerewolfVictim,
        kill: this.chosen ? this.chosen.id : null
      });
      this.$emit('log', this.healSummary);
      this.$emit('log', this.killSummary);
      this.submitted = true;
    }
  },
  computed: {
    healSummary: function healSummary() {
      if (!this.data.canHeal) return 'You cannot heal the werewolf victim.';
      return this.healWerewolfVictim ? 'You will heal the werewolf victim.' : 'You will not heal the werewolf victim.';
    },
    killSummary: function killSummary() {
      if (!this.data.canKill) return 'You cannot kill anyone.';
      return this.chosen ? "You want to kill ".concat(this.chosen.name, ".") : 'You will not kill anyone.';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Werewolves.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Werewolves.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
/* harmony import */ var _Actions_GgWp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actions/GgWp */ "./js/components/Games/Werewolves/Actions/GgWp.vue");
/* harmony import */ var _Actions_RoleInterstitial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actions/RoleInterstitial */ "./js/components/Games/Werewolves/Actions/RoleInterstitial.vue");
/* harmony import */ var _Actions_WaitingForPlayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions/WaitingForPlayers */ "./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue");
/* harmony import */ var _Actions_Amor_Choose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Actions/Amor/Choose */ "./js/components/Games/Werewolves/Actions/Amor/Choose.vue");
/* harmony import */ var _Actions_Amor_InLove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Actions/Amor/InLove */ "./js/components/Games/Werewolves/Actions/Amor/InLove.vue");
/* harmony import */ var _Actions_Werewolf_Choose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Actions/Werewolf/Choose */ "./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue");
/* harmony import */ var _Actions_Werewolf_Result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Actions/Werewolf/Result */ "./js/components/Games/Werewolves/Actions/Werewolf/Result.vue");
/* harmony import */ var _Actions_Daytime_Deaths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Actions/Daytime/Deaths */ "./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue");
/* harmony import */ var _Actions_Daytime_Mayor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Actions/Daytime/Mayor */ "./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue");
/* harmony import */ var _Actions_Daytime_Accusations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Actions/Daytime/Accusations */ "./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue");
/* harmony import */ var _Actions_Daytime_Voting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Actions/Daytime/Voting */ "./js/components/Games/Werewolves/Actions/Daytime/Voting.vue");
/* harmony import */ var _Actions_Mayor_ChooseSuccessor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Actions/Mayor/ChooseSuccessor */ "./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue");
/* harmony import */ var _Actions_Spy_Choose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Actions/Spy/Choose */ "./js/components/Games/Werewolves/Actions/Spy/Choose.vue");
/* harmony import */ var _Actions_Spy_Result__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Actions/Spy/Result */ "./js/components/Games/Werewolves/Actions/Spy/Result.vue");
/* harmony import */ var _Actions_Protector_Choose__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Actions/Protector/Choose */ "./js/components/Games/Werewolves/Actions/Protector/Choose.vue");
/* harmony import */ var _Actions_Witch_Choose__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Actions/Witch/Choose */ "./js/components/Games/Werewolves/Actions/Witch/Choose.vue");
/* harmony import */ var _Actions_Hunter_Choose__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Actions/Hunter/Choose */ "./js/components/Games/Werewolves/Actions/Hunter/Choose.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


















/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PgGgWp: _Actions_GgWp__WEBPACK_IMPORTED_MODULE_1__["default"],
    PgRoleInterstitial: _Actions_RoleInterstitial__WEBPACK_IMPORTED_MODULE_2__["default"],
    PgWaitingForPlayers: _Actions_WaitingForPlayers__WEBPACK_IMPORTED_MODULE_3__["default"],
    PgAmorChoose: _Actions_Amor_Choose__WEBPACK_IMPORTED_MODULE_4__["default"],
    PgAmorInLove: _Actions_Amor_InLove__WEBPACK_IMPORTED_MODULE_5__["default"],
    PgWerewolfChoose: _Actions_Werewolf_Choose__WEBPACK_IMPORTED_MODULE_6__["default"],
    PgWerewolfResult: _Actions_Werewolf_Result__WEBPACK_IMPORTED_MODULE_7__["default"],
    PgDaytimeDeaths: _Actions_Daytime_Deaths__WEBPACK_IMPORTED_MODULE_8__["default"],
    PgDaytimeMayor: _Actions_Daytime_Mayor__WEBPACK_IMPORTED_MODULE_9__["default"],
    PgDaytimeAccusations: _Actions_Daytime_Accusations__WEBPACK_IMPORTED_MODULE_10__["default"],
    PgDaytimeVoting: _Actions_Daytime_Voting__WEBPACK_IMPORTED_MODULE_11__["default"],
    PgMayorChooseSuccessor: _Actions_Mayor_ChooseSuccessor__WEBPACK_IMPORTED_MODULE_12__["default"],
    PgSpyChoose: _Actions_Spy_Choose__WEBPACK_IMPORTED_MODULE_13__["default"],
    PgSpyResult: _Actions_Spy_Result__WEBPACK_IMPORTED_MODULE_14__["default"],
    PgProtectorChoose: _Actions_Protector_Choose__WEBPACK_IMPORTED_MODULE_15__["default"],
    PgWitchChoose: _Actions_Witch_Choose__WEBPACK_IMPORTED_MODULE_16__["default"],
    PgHunterChoose: _Actions_Hunter_Choose__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  props: {
    lobbyId: {
      required: true
    }
  },
  data: function data() {
    return {
      logs: ["Playing Werewolves on Ponygon in Lobby ".concat(this.lobbyId, ".")],
      speakingAllowed: false,
      view: 'waiting-for-players',
      actionData: null,
      players: [],
      alivePlayers: [],
      role: null,
      dead: false,
      mayor: false,
      phase: null,
      viewsShownForDead: ['mayor-choose-successor', 'gg-wp', 'hunter-choose']
    };
  },
  mounted: function mounted() {
    this.addEventListeners();
    connection__WEBPACK_IMPORTED_MODULE_0__["default"].get('players').then(this.onPlayers).catch(function (err) {
      return console.error(err);
    });
  },
  methods: {
    log: function log(_log) {
      this.logs.unshift(_log);
      return this;
    },
    addEventListeners: function addEventListeners() {
      var _this = this;

      connection__WEBPACK_IMPORTED_MODULE_0__["default"].on('action', this.onAction).on('clear action', this.onClearAction).on('players', this.onPlayers).on('log', this.log).on('phase', this.onPhase).on('role', this.onRole).on('speaking allowed', this.onSpeakingAllowed).on('dead', function () {
        return _this.dead = true;
      }).on('mayor', function () {
        return _this.mayor = true;
      });
    },
    onPlayers: function onPlayers(_ref) {
      var players = _ref.players;
      this.players = players;
    },
    onAction: function onAction(_ref2) {
      var view = _ref2.view,
          data = _ref2.data;
      this.actionData = data;
      this.view = view.replace(/ /g, '-');
    },
    onClearAction: function onClearAction() {
      this.actionData = null;
      this.view = null;
    },
    onPhase: function onPhase(_ref3) {
      var phase = _ref3.phase;
      this.phase = phase;
    },
    onRole: function onRole(_ref4) {
      var role = _ref4.role;
      this.role = role;
    },
    onSpeakingAllowed: function onSpeakingAllowed(allowed) {
      this.speakingAllowed = allowed;
    }
  },
  watch: {
    players: function players(newPlayers, oldPlayers) {
      this.alivePlayers = newPlayers.filter(function (player) {
        return !player.dead;
      });
    },
    role: function role(newRole, oldRole) {
      if (newRole !== oldRole) this.log("You are a ".concat(newRole, "."));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Join/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Lobby/Join/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
/* harmony import */ var _Concerns_StoresRememberedNickname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Concerns/StoresRememberedNickname */ "./js/components/Lobby/Join/Concerns/StoresRememberedNickname.js");
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Concerns_StoresRememberedNickname__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    createLobby: function createLobby() {
      var _this = this;

      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('create lobby', {
        name: this.name
      }, function (res) {
        _this.$emit('createdLobby', res);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Join/Join.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Lobby/Join/Join.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
/* harmony import */ var _Concerns_StoresRememberedNickname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Concerns/StoresRememberedNickname */ "./js/components/Lobby/Join/Concerns/StoresRememberedNickname.js");
/* harmony import */ var mixins_ListensForConnectionEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mixins/ListensForConnectionEvents */ "./js/mixins/ListensForConnectionEvents.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [mixins_ListensForConnectionEvents__WEBPACK_IMPORTED_MODULE_2__["default"], _Concerns_StoresRememberedNickname__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      cannotJoinReason: null,
      events: {
        'cannot join lobby': this.onCannotJoinLobby
      }
    };
  },
  props: {
    lobbyId: {
      required: true
    }
  },
  methods: {
    joinLobby: function joinLobby() {
      var _this = this;

      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('join lobby', {
        name: this.name,
        lobbyId: this.lobbyId
      }, function (res) {
        _this.$emit('joinedLobby', res);
      });
    },
    onCannotJoinLobby: function onCannotJoinLobby(_ref) {
      var reason = _ref.reason;
      this.cannotJoinReason = reason;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Lobby.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Lobby/Lobby.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connection */ "./js/Connection.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    auth: {
      required: true
    },
    id: {
      required: true
    },
    playerId: {
      required: true
    }
  },
  data: function data() {
    return {
      players: [],
      isLobbyLeader: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.addEventListeners();
    connection__WEBPACK_IMPORTED_MODULE_0__["default"].get('players').then(function (res) {
      if (!res) return _this.$emit('leave');
      _this.players = res.players;
    }).catch(function (err) {
      console.error(err);
    });
  },
  methods: {
    startGame: function startGame(name) {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].emit('start game', {
        name: name
      });
    },
    addEventListeners: function addEventListeners() {
      connection__WEBPACK_IMPORTED_MODULE_0__["default"].on('players', this.onPlayers).on('user joined', this.onUserJoined);
    },
    onPlayers: function onPlayers(_ref) {
      var players = _ref.players;
      this.players = players;
    },
    onUserJoined: function onUserJoined(_ref2) {
      var name = _ref2.name;
      console.log(name, 'joined the lobby');
    }
  },
  computed: {
    inviteUrl: function inviteUrl() {
      return window.location.toString();
    }
  },
  watch: {
    players: function players() {
      var _this2 = this;

      var ownPlayer = this.players.find(function (player) {
        return player.id === _this2.playerId;
      });
      if (ownPlayer) this.isLobbyLeader = ownPlayer.leader;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/App.vue?vue&type=template&id=6a6fa670&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/App.vue?vue&type=template&id=6a6fa670& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ponygon" },
    [
      !_vm.game
        ? [
            !_vm.lobbyId
              ? _c("pg-lobby-create", {
                  on: { createdLobby: _vm.onCreatedOrJoinedLobby }
                })
              : _vm.lobbyId && !_vm.auth
                ? _c("pg-lobby-join", {
                    attrs: { lobbyId: _vm.lobbyId },
                    on: { joinedLobby: _vm.onCreatedOrJoinedLobby }
                  })
                : _vm._e(),
            _vm._v(" "),
            _vm.lobbyId && _vm.auth
              ? _c("pg-lobby", {
                  attrs: {
                    auth: _vm.auth,
                    id: _vm.lobbyId,
                    playerId: _vm.playerId
                  },
                  on: {
                    leave: function($event) {
                      _vm.lobbyId = _vm.auth = ""
                    }
                  }
                })
              : _vm._e()
          ]
        : [
            _vm.game === "werewolves"
              ? _c("pg-werewolves", {
                  attrs: { auth: _vm.auth, lobbyId: _vm.lobbyId }
                })
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=template&id=499f75d4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Amor/Choose.vue?vue&type=template&id=499f75d4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "amor --choose" }, [
    _c("h3", [_vm._v("\n\t\tWho should be in love?\n\t")]),
    _vm._v(" "),
    !_vm.submitted
      ? _c(
          "div",
          { staticClass: "players" },
          _vm._l(_vm.alivePlayers, function(player) {
            return _c(
              "a",
              {
                class: ["player", { "--active": _vm.chosen.includes(player) }],
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.choosePlayer(player)
                  }
                }
              },
              [_vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")]
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "summary" }, [
      _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.summary) + "\n\t\t")]),
      _vm._v(" "),
      _vm.chosen.length === 2 && !_vm.submitted
        ? _c(
            "button",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [_vm._v("\n\t\t\tConfirm\n\t\t")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=template&id=404e2594&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Amor/InLove.vue?vue&type=template&id=404e2594& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "amor --in-love" }, [
    _c("h3", [
      _vm._v(
        "\n\t\tYou are in love with " +
          _vm._s(_vm.data.other.name) +
          " (" +
          _vm._s(_vm.data.other.role) +
          ").\n\t"
      )
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v("\n\t\tYou are in love with "),
      _c("strong", [_vm._v(_vm._s(_vm.data.other.name))]),
      _vm._v(" ("),
      _c("strong", [_vm._v(_vm._s(_vm.data.other.role))]),
      _vm._v(
        ").\n\t\tWhen one of you dies, the other will also die.\n\t\tWhen you two are the only survivors, you win the game.\n\t"
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=template&id=657a6bd6&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Daytime/Accusations.vue?vue&type=template&id=657a6bd6& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "daytime --accusations" }, [
    _c("h2", [_vm._v("Accusations")]),
    _vm._v(" "),
    _vm.mayor
      ? _c("div", { staticClass: "continue" }, [
          _c(
            "button",
            {
              attrs: { disabled: !_vm.accusations.length },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.continueToVoting($event)
                }
              }
            },
            [_vm._v("\n\t\t\tContinue to Voting\n\t\t")]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("p", [
      _vm._v("\n\t\tYou may accuse another villager of being a werewolf.\n\t")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players" },
      _vm._l(_vm.alivePlayers, function(player) {
        return _c(
          "a",
          {
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.accusePlayer(player)
              }
            }
          },
          [_vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("p", [_vm._v("\n\t\tAlready accused as werewolves:\n\t")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players" },
      _vm._l(_vm.accusations, function(player) {
        return _c("div", { staticClass: "player" }, [
          _vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=template&id=4fbcb214&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Daytime/Deaths.vue?vue&type=template&id=4fbcb214& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "daytime --deaths" },
    [
      _c("h2", [_vm._v("The village awakens...")]),
      _vm._v(" "),
      _vm.data.deaths.length
        ? [
            _c("p", [
              _vm._v("\n\t\t\t... and finds "),
              _c("strong", [_vm._v(_vm._s(_vm.names))]),
              _vm._v(" dead.\n\t\t")
            ])
          ]
        : _c("p", [_vm._v("\n\t\t... and finds everyone is still alive.\n\t")])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=template&id=f9d4353e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Daytime/Mayor.vue?vue&type=template&id=f9d4353e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "daytime --mayor" }, [
    _c("h2", [_vm._v("The Mayoral Election")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players" },
      _vm._l(_vm.alivePlayers, function(player) {
        return _c(
          "a",
          {
            class: ["player", { "--active": _vm.chosen === player }],
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.choosePlayer(player)
              }
            }
          },
          [_vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=template&id=495db39e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Daytime/Voting.vue?vue&type=template&id=495db39e& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "daytime --voting" }, [
    _c("h2", [_vm._v("Voting")]),
    _vm._v(" "),
    _c("p", [_vm._v("\n\t\tWho should die?\n\t")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players" },
      _vm._l(_vm.data.accused, function(player) {
        return _c(
          "a",
          {
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.voteFor(player)
              }
            }
          },
          [_vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "summary" }, [
      _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.summary) + "\n\t\t")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=template&id=e05601ec&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/GgWp.vue?vue&type=template&id=e05601ec& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "gg-wp" }, [
    _c("h3", [_vm._v("\n\t\t" + _vm._s(_vm.heading) + "\n\t")]),
    _vm._v(" "),
    _c("h4", [_vm._v("\n\t\tCongratulations to\n\t")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players --winners" },
      _vm._l(_vm.data.winners, function(player, index) {
        return _c("gg-wp-player", { key: index, attrs: { player: player } })
      }),
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players --losers" },
      _vm._l(_vm.data.losers, function(player, index) {
        return _c("gg-wp-player", { key: index, attrs: { player: player } })
      }),
      1
    ),
    _vm._v(" "),
    _c("p", [_vm._v("\n\t\tgg wp\n\t")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=template&id=2508800b&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/GgWpPlayer.vue?vue&type=template&id=2508800b& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "player" }, [
    _c("span", { staticClass: "name" }, [_vm._v(_vm._s(_vm.player.name))]),
    _vm._v(" "),
    _vm.player.dead
      ? _c("span", { attrs: { title: "dead" } }, [_vm._v("✝")])
      : _vm._e(),
    _vm._v(" "),
    _vm.player.mayor
      ? _c("span", { attrs: { title: "mayor" } }, [_vm._v("m")])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "role" }, [_vm._v(_vm._s(_vm.player.role))])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=template&id=2d732376&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Hunter/Choose.vue?vue&type=template&id=2d732376& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "hunter --choose" }, [
    _c("h2", [_vm._v("Who will you kill?")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players" },
      _vm._l(_vm.alivePlayers, function(player) {
        return _c(
          "a",
          {
            staticClass: "player",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.choose(player)
              }
            }
          },
          [_vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=template&id=2ac81147&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Mayor/ChooseSuccessor.vue?vue&type=template&id=2ac81147& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mayor --choose-successor" }, [
    _c("h2", [_vm._v("Choose Your Successor")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players" },
      _vm._l(_vm.alivePlayers, function(player) {
        return _c(
          "a",
          {
            staticClass: "player",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.choose(player)
              }
            }
          },
          [_vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=template&id=42ec03b6&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Protector/Choose.vue?vue&type=template&id=42ec03b6& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "protector --choose" }, [
    _c("h3", [_vm._v("\n\t\tWho do yo want to protect?\n\t")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n\t\tPlease note that you cannot protect the same person two nights in a row.\n\t"
      )
    ]),
    _vm._v(" "),
    !_vm.submitted
      ? _c(
          "div",
          { staticClass: "players" },
          _vm._l(_vm.alivePlayers, function(player) {
            return !_vm.data.protectedLastNight ||
              player.id !== _vm.data.protectedLastNight.id
              ? _c(
                  "a",
                  {
                    class: ["player", { "--active": _vm.chosen === player }],
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.choose(player)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")]
                )
              : _vm._e()
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "summary" }, [
      _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.summary) + "\n\t\t")]),
      _vm._v(" "),
      _vm.chosen && !_vm.submitted
        ? _c(
            "button",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [_vm._v("\n\t\t\tConfirm\n\t\t")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=template&id=a983401a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/RoleInterstitial.vue?vue&type=template&id=a983401a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "role-interstitial" }, [
    _c("h3", [_vm._v("\n\t\tYou are a " + _vm._s(_vm.data.role) + ".\n\t")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n\t\tTODO Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t"
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=template&id=514211db&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Spy/Choose.vue?vue&type=template&id=514211db& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "spy --choose" }, [
    _c("h3", [_vm._v("\n\t\tWho do yo want to investigate?\n\t")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players" },
      _vm._l(_vm.alivePlayers, function(player) {
        return _c(
          "a",
          {
            class: ["player", { "--active": _vm.chosen === player }],
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.choose(player)
              }
            }
          },
          [_vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "summary" }, [
      _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.summary) + "\n\t\t")]),
      _vm._v(" "),
      _vm.chosen
        ? _c(
            "button",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [_vm._v("\n\t\t\tConfirm\n\t\t")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=template&id=92e41e3e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Spy/Result.vue?vue&type=template&id=92e41e3e& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "spy --result" }, [
    _c("h3", [_vm._v("\n\t\t" + _vm._s(_vm.result) + "\n\t")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=template&id=0f7265f5&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/WaitingForPlayers.vue?vue&type=template&id=0f7265f5& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "waiting-for-players" }, [
      _c("h3", [_vm._v("\n\t\tWaiting for other players...\n\t")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=template&id=791d125c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Werewolf/Choose.vue?vue&type=template&id=791d125c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "werewolf --chose" }, [
    _c("h3", [_vm._v("\n\t\tWho will be your victim?\n\t")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "grid" },
      _vm._l(_vm.choices, function(choice) {
        return _c("div", { staticClass: "wolf" }, [
          _c("div", { staticClass: "name" }, [
            _vm._v("\n\t\t\t\t" + _vm._s(choice.wolf.name) + "\n\t\t\t")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "victim" },
            [
              choice.choice === null
                ? [_vm._v("\n\t\t\t\t\thas not yet chosen a victim\n\t\t\t\t")]
                : [
                    _vm._v(
                      "\n\t\t\t\t\t" + _vm._s(choice.choice.name) + "\n\t\t\t\t"
                    )
                  ]
            ],
            2
          )
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "players" },
      _vm._l(_vm.alivePlayers, function(player) {
        return _c(
          "a",
          {
            class: ["player", { "--active": _vm.chosen === player }],
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.choose(player)
              }
            }
          },
          [_vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\t\t")]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "summary" }, [
      _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.summary) + "\n\t\t")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=template&id=28bd55d8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Werewolf/Result.vue?vue&type=template&id=28bd55d8& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "werewolf --result" }, [
    _c("h3", [_vm._v("\n\t\t" + _vm._s(_vm.body) + "\n\t")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=template&id=15ffdea0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Actions/Witch/Choose.vue?vue&type=template&id=15ffdea0& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "protector --choose" },
    [
      _c("h3", [_vm._v("\n\t\tWhat will you do tonight?\n\t")]),
      _vm._v(" "),
      !_vm.submitted
        ? [
            _vm.data.werewolfVictim
              ? _c(
                  "div",
                  { staticClass: "heal" },
                  [
                    _c("p", [
                      _vm._v("\n\t\t\t\tThe Werewolves attacked "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.werewolfVictim.name))
                      ]),
                      _vm._v(" tonight.\n\t\t\t")
                    ]),
                    _vm._v(" "),
                    _vm.data.canHeal
                      ? [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.healWerewolfVictim,
                                expression: "healWerewolfVictim"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              id: "heal-werewolf-victim"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.healWerewolfVictim)
                                ? _vm._i(_vm.healWerewolfVictim, null) > -1
                                : _vm.healWerewolfVictim
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.healWerewolfVictim,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.healWerewolfVictim = $$a.concat([
                                        $$v
                                      ]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.healWerewolfVictim = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.healWerewolfVictim = $$c
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            { attrs: { for: "heal-werewolf-victim" } },
                            [
                              _vm._v(
                                "\n\t\t\t\t\theal " +
                                  _vm._s(_vm.data.werewolfVictim.name) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n\t\t\t\t\tPlease note that you can only heal a single person per match.\n\t\t\t\t"
                            )
                          ])
                        ]
                      : [
                          _c("p", [
                            _vm._v(
                              "\n\t\t\t\t\tYou cannot heal them.\n\t\t\t\t"
                            )
                          ])
                        ]
                  ],
                  2
                )
              : _c("div", { staticClass: "heal" }, [
                  _c("p", [
                    _vm._v(
                      "\n\t\t\t\tThe Werewolves did not attack anyone tonight.\n\t\t\t"
                    )
                  ])
                ]),
            _vm._v(" "),
            _vm.data.canKill
              ? _c("div", { staticClass: "kill" }, [
                  _c("p", [
                    _vm._v("\n\t\t\t\tWho do you want to kill?\n\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "players" },
                    [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.chooseNoOne($event)
                            }
                          }
                        },
                        [_vm._v("\n\t\t\t\t\tno-one\n\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.alivePlayers, function(player) {
                        return _c(
                          "a",
                          {
                            class: [
                              "player",
                              { "--active": _vm.chosen === player }
                            ],
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.choose(player)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t" +
                                _vm._s(player.name) +
                                "\n\t\t\t\t"
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                ])
              : _c("div", { staticClass: "kill" }, [
                  _c("p", [_vm._v("\n\t\t\t\tYou cannot kill anyone.\n\t\t\t")])
                ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "summary" }, [
        _c("div", [
          _c("p", [
            _vm._v("\n\t\t\t\t" + _vm._s(_vm.healSummary) + "\n\t\t\t")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("\n\t\t\t\t" + _vm._s(_vm.killSummary) + "\n\t\t\t")])
        ]),
        _vm._v(" "),
        (_vm.data.canHeal || _vm.data.canKill) && !_vm.submitted
          ? _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [_vm._v("\n\t\t\tConfirm\n\t\t")]
            )
          : _vm._e()
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Games/Werewolves/Werewolves.vue?vue&type=template&id=3cd79160&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Games/Werewolves/Werewolves.vue?vue&type=template&id=3cd79160& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "werewolves" }, [
    _c("link", {
      attrs: {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700"
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "player-list" }, [
      _c("div", { staticClass: "meta" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.dead && _vm.speakingAllowed,
                expression: "! dead && speakingAllowed"
              }
            ],
            staticClass: "speaking-allowed --true"
          },
          [_vm._v("\n\t\t\t\tYou may talk now.\n\t\t\t")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.dead || !_vm.speakingAllowed,
                expression: "dead || ! speakingAllowed"
              }
            ],
            staticClass: "speaking-allowed --false"
          },
          [_vm._v("\n\t\t\t\tPlease do not talk now.\n\t\t\t")]
        ),
        _vm._v(" "),
        _vm.role
          ? _c("div", { staticClass: "you-are" }, [
              _vm._v("\n\t\t\t\tYou are a " + _vm._s(_vm.role) + ".\n\t\t\t")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.mayor
          ? _c("div", { staticClass: "mayor" }, [
              _vm._v("\n\t\t\t\tYou are the mayor.\n\t\t\t")
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "players" },
        _vm._l(_vm.players, function(player) {
          return _c("div", { class: ["player", { "--dead": player.dead }] }, [
            _c("div", { staticClass: "basic" }, [
              _c("div", { staticClass: "name" }, [
                _vm._v("\n\t\t\t\t\t\t" + _vm._s(player.name) + "\n\t\t\t\t\t")
              ]),
              _vm._v(" "),
              player.role
                ? _c("div", { staticClass: "role" }, [
                    _vm._v(
                      "\n\t\t\t\t\t\t" + _vm._s(player.role) + "\n\t\t\t\t\t"
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "additional" }, [
              player.dead
                ? _c(
                    "span",
                    { staticClass: "dead", attrs: { title: "dead" } },
                    [_vm._v("✝")]
                  )
                : _vm._e(),
              _vm._v(" "),
              player.mayor
                ? _c(
                    "span",
                    {
                      staticClass: "mayor",
                      attrs: { title: player.dead ? "was Mayor" : "Mayor" }
                    },
                    [_vm._v("m")]
                  )
                : _vm._e(),
              _vm._v(" "),
              player.leader
                ? _c(
                    "span",
                    { staticClass: "leader", attrs: { title: "Lobby Leader" } },
                    [_vm._v("👑")]
                  )
                : _vm._e()
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "main" }, [
      _c(
        "div",
        { staticClass: "action" },
        [
          _vm.phase
            ? _c("h2", [
                _vm._v(
                  "\n\t\t\t\t" +
                    _vm._s(_vm.phase.night ? "Night" : "Day") +
                    "\n\t\t\t\t" +
                    _vm._s(_vm.phase.round) +
                    " –\n\t\t\t\tPhase " +
                    _vm._s(_vm.phase.part) +
                    "\n\t\t\t"
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          (_vm.view && !_vm.dead) || _vm.viewsShownForDead.includes(_vm.view)
            ? _c("pg-" + _vm.view, {
                tag: "component",
                attrs: {
                  data: _vm.actionData,
                  players: _vm.players,
                  alivePlayers: _vm.alivePlayers,
                  mayor: _vm.mayor
                },
                on: { log: _vm.log }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.dead && _vm.view !== "gg-wp"
            ? _c("p", [
                _vm._v(
                  "\n\t\t\t\tYou have already died.\n\t\t\t\tPlease remain quiet, and let the remaining players complete the match.\n\t\t\t"
                )
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "log" },
        _vm._l(_vm.logs, function(log) {
          return _c("p", [_vm._v("\n\t\t\t\t" + _vm._s(log) + "\n\t\t\t")])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Join/Create.vue?vue&type=template&id=443a1d52&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Lobby/Join/Create.vue?vue&type=template&id=443a1d52& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lobby-join-create" }, [
    _c("h1", [_vm._v("Create a Lobby")]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { action: "/app", method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.createLobby($event)
          }
        }
      },
      [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.name,
              expression: "name"
            }
          ],
          attrs: { type: "text", name: "name", required: "" },
          domProps: { value: _vm.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.name = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("button", { attrs: { type: "submit" } }, [_vm._v("Create a Lobby")])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Join/Join.vue?vue&type=template&id=70db7b45&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Lobby/Join/Join.vue?vue&type=template&id=70db7b45& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lobby-join-join" }, [
    _c("h1", [_vm._v("Join a Lobby")]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { action: "/app", method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.joinLobby($event)
          }
        }
      },
      [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.name,
              expression: "name"
            }
          ],
          attrs: { type: "text", name: "name", required: "" },
          domProps: { value: _vm.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.name = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("button", { attrs: { type: "submit" } }, [_vm._v("Join")])
      ]
    ),
    _vm._v(" "),
    _vm.cannotJoinReason
      ? _c("p", [
          _vm._v(
            "\n\t\tCould not join lobby: " +
              _vm._s(_vm.cannotJoinReason) +
              "\n\t"
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/Lobby/Lobby.vue?vue&type=template&id=8d0128e8&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/Lobby/Lobby.vue?vue&type=template&id=8d0128e8& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lobby" }, [
    _c("div", { staticClass: "title" }, [
      _c("h1", [
        _vm._v("\n\t\t\tPonygon Lobby\n\t\t\t"),
        _c("code", [_vm._v(_vm._s(_vm.id))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "invite-link" }, [
        _vm._v("\n\t\t\tInvite your friends using this link:\n\t\t\t"),
        _c(
          "a",
          {
            attrs: { href: _vm.inviteUrl },
            on: {
              click: function($event) {
                $event.preventDefault()
              }
            }
          },
          [_vm._v("\n\t\t\t\t" + _vm._s(_vm.inviteUrl) + "\n\t\t\t")]
        ),
        _vm._v("\n\n\t\t\tor\n\n\t\t\t"),
        _c(
          "a",
          {
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.$emit("leave")
              }
            }
          },
          [_vm._v("\n\t\t\t\tleave this lobby\n\t\t\t")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "player-list" },
      [
        _c("h2", [
          _vm._v(
            "\n\t\t\t" +
              _vm._s(_vm.players.length) +
              " Players in Your Lobby\n\t\t"
          )
        ]),
        _vm._v(" "),
        _vm._l(_vm.players, function(player) {
          return _c(
            "div",
            { staticClass: "player" },
            [
              _vm._v("\n\t\t\t" + _vm._s(player.name) + "\n\n\t\t\t"),
              player.leader ? [_vm._v("👑")] : _vm._e()
            ],
            2
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "game-list" }, [
      _c("h2", [_vm._v("Choose a Game")]),
      _vm._v(" "),
      _c("div", { staticClass: "game" }, [
        _vm._m(1),
        _vm._v(" "),
        _vm.isLobbyLeader
          ? _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.startGame("werewolves")
                  }
                }
              },
              [_vm._v("\n\t\t\t\tPlay\n\t\t\t")]
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "chat" }, [
      _c("h2", [_vm._v("Chat")]),
      _vm._v(" "),
      _c("p", [_vm._v("TODO chat will be here at some point maybe")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "meta" }, [
      _c("h3", [_vm._v("werewolves")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./stylus/app.styl":
/*!*************************!*\
  !*** ./stylus/app.styl ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./js/app.js ./stylus/app.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/pierre/dev/js/ponygon-js/client/js/app.js */"./js/app.js");
module.exports = __webpack_require__(/*! /home/pierre/dev/js/ponygon-js/client/stylus/app.styl */"./stylus/app.styl");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);