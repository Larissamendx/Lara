(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/HomeContext.tsx":
/*!*************************************!*\
  !*** ./src/context/HomeContext.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeContext": function() { return /* binding */ HomeContext; },
/* harmony export */   "HomeContextProvider": function() { return /* binding */ HomeContextProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\a\\Documents\\GitHub\\ProjetoLara\\src\\context\\HomeContext.tsx";

const HomeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function HomeContextProvider({
  children
}) {
  const {
    0: imgAnterior,
    1: setImgAnterior
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: imgAtual,
    1: setImgAtual
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: imgProximo,
    1: setImgProximo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);

  function next() {
    if (imgAtual == 4) {
      setImgAnterior(imgAnterior + 1);
      setImgAtual(imgAtual + 1);
      setImgProximo(0);
    } else if (imgAtual == 5) {
      setImgAnterior(5);
      setImgAtual(0);
      setImgProximo(imgProximo + 1);
    } else if (imgAtual == 0) {
      setImgAnterior(0);
      setImgAtual(imgAtual + 1);
      setImgProximo(imgProximo + 1);
    } else {
      setImgAnterior(imgAnterior + 1);
      setImgAtual(imgAtual + 1);
      setImgProximo(imgProximo + 1);
    }
  }

  function back() {
    if (imgAtual == 5) {
      setImgAnterior(imgAnterior - 1);
      setImgAtual(imgAtual - 1);
      setImgProximo(5);
    } else if (imgAtual == 1) {
      setImgAnterior(5);
      setImgAtual(imgAtual - 1);
      setImgProximo(imgProximo - 1);
    } else if (imgAtual == 0) {
      setImgAnterior(imgAnterior - 1);
      setImgAtual(5);
      setImgProximo(imgProximo - 1);
    } else {
      setImgAnterior(imgAnterior - 1);
      setImgAtual(imgAtual - 1);
      setImgProximo(imgProximo - 1);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomeContext.Provider, {
    value: {
      imgAnterior,
      imgAtual,
      imgProximo,
      back,
      next
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_HomeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/HomeContext */ "./src/context/HomeContext.tsx");

var _jsxFileName = "C:\\Users\\a\\Documents\\GitHub\\ProjetoLara\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_HomeContext__WEBPACK_IMPORTED_MODULE_2__.HomeContextProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXJhLy4vc3JjL2NvbnRleHQvSG9tZUNvbnRleHQudHN4Iiwid2VicGFjazovL2xhcmEvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbGFyYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbGFyYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkhvbWVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImltZ0FudGVyaW9yIiwic2V0SW1nQW50ZXJpb3IiLCJ1c2VTdGF0ZSIsImltZ0F0dWFsIiwic2V0SW1nQXR1YWwiLCJpbWdQcm94aW1vIiwic2V0SW1nUHJveGltbyIsIm5leHQiLCJiYWNrIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBY08sTUFBTUEsV0FBVyxnQkFBR0Msb0RBQWEsQ0FBQyxFQUFELENBQWpDO0FBRUEsU0FBU0MsbUJBQVQsQ0FBNkI7QUFBRUM7QUFBRixDQUE3QixFQUFxRTtBQUN4RSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLCtDQUFRLENBQUMsQ0FBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBNUM7O0FBRUEsV0FBU0ssSUFBVCxHQUFnQjtBQUNaLFFBQUdKLFFBQVEsSUFBSSxDQUFmLEVBQWtCO0FBQ2RGLG9CQUFjLENBQUNELFdBQVcsR0FBRyxDQUFmLENBQWQ7QUFDQUksaUJBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBWDtBQUNBRyxtQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNELEtBSkgsTUFJUyxJQUFHSCxRQUFRLElBQUksQ0FBZixFQUFpQjtBQUN0QkYsb0JBQWMsQ0FBQyxDQUFELENBQWQ7QUFDQUcsaUJBQVcsQ0FBQyxDQUFELENBQVg7QUFDQUUsbUJBQWEsQ0FBQ0QsVUFBVSxHQUFHLENBQWQsQ0FBYjtBQUNELEtBSk0sTUFJQSxJQUFJRixRQUFRLElBQUksQ0FBaEIsRUFBbUI7QUFDeEJGLG9CQUFjLENBQUMsQ0FBRCxDQUFkO0FBQ0FHLGlCQUFXLENBQUNELFFBQVEsR0FBRyxDQUFaLENBQVg7QUFDQUcsbUJBQWEsQ0FBQ0QsVUFBVSxHQUFHLENBQWQsQ0FBYjtBQUNELEtBSk0sTUFJQTtBQUNMSixvQkFBYyxDQUFDRCxXQUFXLEdBQUcsQ0FBZixDQUFkO0FBQ0FJLGlCQUFXLENBQUNELFFBQVEsR0FBRyxDQUFaLENBQVg7QUFDQUcsbUJBQWEsQ0FBQ0QsVUFBVSxHQUFHLENBQWQsQ0FBYjtBQUNEO0FBQ047O0FBRUQsV0FBU0csSUFBVCxHQUFnQjtBQUNaLFFBQUdMLFFBQVEsSUFBSSxDQUFmLEVBQWtCO0FBQ2RGLG9CQUFjLENBQUNELFdBQVcsR0FBRyxDQUFmLENBQWQ7QUFDQUksaUJBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBWDtBQUNBRyxtQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNELEtBSkgsTUFJUyxJQUFHSCxRQUFRLElBQUksQ0FBZixFQUFpQjtBQUN0QkYsb0JBQWMsQ0FBQyxDQUFELENBQWQ7QUFDQUcsaUJBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBWDtBQUNBRyxtQkFBYSxDQUFDRCxVQUFVLEdBQUcsQ0FBZCxDQUFiO0FBQ0QsS0FKTSxNQUlBLElBQUlGLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUN4QkYsb0JBQWMsQ0FBQ0QsV0FBVyxHQUFHLENBQWYsQ0FBZDtBQUNBSSxpQkFBVyxDQUFDLENBQUQsQ0FBWDtBQUNBRSxtQkFBYSxDQUFDRCxVQUFVLEdBQUcsQ0FBZCxDQUFiO0FBQ0QsS0FKTSxNQUlBO0FBQ0xKLG9CQUFjLENBQUNELFdBQVcsR0FBRyxDQUFmLENBQWQ7QUFDQUksaUJBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBWDtBQUNBRyxtQkFBYSxDQUFDRCxVQUFVLEdBQUcsQ0FBZCxDQUFiO0FBQ0Q7QUFDTjs7QUFFSCxzQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUNFLFNBQUssRUFBRTtBQUNMTCxpQkFESztBQUVMRyxjQUZLO0FBR0xFLGdCQUhLO0FBSUxHLFVBSks7QUFLTEQ7QUFMSyxLQURUO0FBQUEsY0FTR1I7QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFRDtBQUNBOztBQUVBLFNBQVNVLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSw4REFBQyxxRUFBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgSG9tZUNvbnRleHREYXRhID0ge1xyXG4gICAgaW1nQW50ZXJpb3I6IG51bWJlcjtcclxuICAgIGltZ0F0dWFsOiBudW1iZXI7XHJcbiAgICBpbWdQcm94aW1vOiBudW1iZXI7XHJcbiAgICBiYWNrOiAoKSA9PiB2b2lkO1xyXG4gICAgbmV4dDogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbnR5cGUgSG9tZUNvbnRleHRQcm92aWRlclByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEhvbWVDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSG9tZUNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH06IEhvbWVDb250ZXh0UHJvdmlkZXJQcm9wcykge1xyXG4gICAgY29uc3QgW2ltZ0FudGVyaW9yLCBzZXRJbWdBbnRlcmlvcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbWdBdHVhbCwgc2V0SW1nQXR1YWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbaW1nUHJveGltbywgc2V0SW1nUHJveGltb10gPSB1c2VTdGF0ZSgyKTtcclxuICBcclxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgICAgaWYoaW1nQXR1YWwgPT0gNCkge1xyXG4gICAgICAgICAgICBzZXRJbWdBbnRlcmlvcihpbWdBbnRlcmlvciArIDEpO1xyXG4gICAgICAgICAgICBzZXRJbWdBdHVhbChpbWdBdHVhbCArIDEpO1xyXG4gICAgICAgICAgICBzZXRJbWdQcm94aW1vKDApO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKGltZ0F0dWFsID09IDUpe1xyXG4gICAgICAgICAgICBzZXRJbWdBbnRlcmlvcig1KTtcclxuICAgICAgICAgICAgc2V0SW1nQXR1YWwoMCk7XHJcbiAgICAgICAgICAgIHNldEltZ1Byb3hpbW8oaW1nUHJveGltbyArIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpbWdBdHVhbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEltZ0FudGVyaW9yKDApO1xyXG4gICAgICAgICAgICBzZXRJbWdBdHVhbChpbWdBdHVhbCArIDEpO1xyXG4gICAgICAgICAgICBzZXRJbWdQcm94aW1vKGltZ1Byb3hpbW8gKyAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEltZ0FudGVyaW9yKGltZ0FudGVyaW9yICsgMSk7XHJcbiAgICAgICAgICAgIHNldEltZ0F0dWFsKGltZ0F0dWFsICsgMSk7XHJcbiAgICAgICAgICAgIHNldEltZ1Byb3hpbW8oaW1nUHJveGltbyArIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBmdW5jdGlvbiBiYWNrKCkge1xyXG4gICAgICAgIGlmKGltZ0F0dWFsID09IDUpIHtcclxuICAgICAgICAgICAgc2V0SW1nQW50ZXJpb3IoaW1nQW50ZXJpb3IgLSAxKTtcclxuICAgICAgICAgICAgc2V0SW1nQXR1YWwoaW1nQXR1YWwgLSAxKTtcclxuICAgICAgICAgICAgc2V0SW1nUHJveGltbyg1KTtcclxuICAgICAgICAgIH0gZWxzZSBpZihpbWdBdHVhbCA9PSAxKXtcclxuICAgICAgICAgICAgc2V0SW1nQW50ZXJpb3IoNSk7XHJcbiAgICAgICAgICAgIHNldEltZ0F0dWFsKGltZ0F0dWFsIC0gMSk7XHJcbiAgICAgICAgICAgIHNldEltZ1Byb3hpbW8oaW1nUHJveGltbyAtIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpbWdBdHVhbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEltZ0FudGVyaW9yKGltZ0FudGVyaW9yIC0gMSk7XHJcbiAgICAgICAgICAgIHNldEltZ0F0dWFsKDUpO1xyXG4gICAgICAgICAgICBzZXRJbWdQcm94aW1vKGltZ1Byb3hpbW8gLSAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEltZ0FudGVyaW9yKGltZ0FudGVyaW9yIC0gMSk7XHJcbiAgICAgICAgICAgIHNldEltZ0F0dWFsKGltZ0F0dWFsIC0gMSk7XHJcbiAgICAgICAgICAgIHNldEltZ1Byb3hpbW8oaW1nUHJveGltbyAtIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhvbWVDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaW1nQW50ZXJpb3IsXHJcbiAgICAgICAgaW1nQXR1YWwsXHJcbiAgICAgICAgaW1nUHJveGltbyxcclxuICAgICAgICBiYWNrLFxyXG4gICAgICAgIG5leHQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvSG9tZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IEhvbWVDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9Ib21lQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIb21lQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0hvbWVDb250ZXh0UHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=