"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/collection",{

/***/ "./src/components/Card/CardPfp.tsx":
/*!*****************************************!*\
  !*** ./src/components/Card/CardPfp.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardPfp\": function() { return /* binding */ CardPfp; },\n/* harmony export */   \"CardStyle\": function() { return /* binding */ CardStyle; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"../../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/components/Card/util.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/WAW/Documents/Projects/ZION/apps/pfp_minter/src/components/Card/CardPfp.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar CardStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"CardPfp__CardStyle\",\n  componentId: \"sc-13xkacw-0\"\n})([\"border:1px solid;\", \";\"], function (props) {\n  return (0,_util__WEBPACK_IMPORTED_MODULE_2__.checkSize)(props);\n});\n_c = CardStyle;\nvar extended = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CardStyle).withConfig({\n  displayName: \"CardPfp__extended\",\n  componentId: \"sc-13xkacw-1\"\n})([\"\"]);\nvar CardPfp = function CardPfp(props) {\n  var name = props.name,\n      slug = props.slug,\n      small = props.small,\n      mid = props.mid,\n      big = props.big;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CardStyle, {\n    small: small,\n    mid: mid,\n    big: big,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"top-section\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"avatar\",\n        children: [\"Avatar \", name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"action\",\n        children: \"Action\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"image-section\",\n        children: \"Image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"info-section\",\n      children: \"Infos\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"social-section\",\n      children: \"Social\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n_c2 = CardPfp;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CardStyle\");\n$RefreshReg$(_c2, \"CardPfp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmRQZnAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNSSxTQUFTLEdBQUdGLHdFQUFIO0VBQUE7RUFBQTtBQUFBLCtCQU1sQixVQUFDSSxLQUFEO0VBQUEsT0FBV0gsZ0RBQVMsQ0FBQ0csS0FBRCxDQUFwQjtBQUFBLENBTmtCLENBQWY7S0FBTUY7QUFTYixJQUFNRyxRQUFRLEdBQUdMLDZEQUFNLENBQUNFLFNBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSxRQUFkO0FBZU8sSUFBTUksT0FBZ0IsR0FBRyxTQUFuQkEsT0FBbUIsQ0FBQ0YsS0FBRCxFQUFXO0VBQ3pDLElBQVFHLElBQVIsR0FBd0NILEtBQXhDLENBQVFHLElBQVI7RUFBQSxJQUFjQyxJQUFkLEdBQXdDSixLQUF4QyxDQUFjSSxJQUFkO0VBQUEsSUFBb0JDLEtBQXBCLEdBQXdDTCxLQUF4QyxDQUFvQkssS0FBcEI7RUFBQSxJQUEyQkMsR0FBM0IsR0FBd0NOLEtBQXhDLENBQTJCTSxHQUEzQjtFQUFBLElBQWdDQyxHQUFoQyxHQUF3Q1AsS0FBeEMsQ0FBZ0NPLEdBQWhDO0VBQ0Esb0JBQ0UsOERBQUMsU0FBRDtJQUFXLEtBQUssRUFBRUYsS0FBbEI7SUFBeUIsR0FBRyxFQUFFQyxHQUE5QjtJQUFtQyxHQUFHLEVBQUVDLEdBQXhDO0lBQUEsd0JBQ0U7TUFBSyxTQUFTLEVBQUMsYUFBZjtNQUFBLHdCQUNFO1FBQUssU0FBUyxFQUFDLFFBQWY7UUFBQSxzQkFBZ0NKLElBQWhDO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBRUU7UUFBSyxTQUFTLEVBQUMsUUFBZjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBS0UsOERBQUMsa0RBQUQ7TUFBTSxJQUFJLEVBQUMsR0FBWDtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDLGVBQWY7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTEYsZUFRRTtNQUFLLFNBQVMsRUFBQyxjQUFmO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBUkYsZUFTRTtNQUFLLFNBQVMsRUFBQyxnQkFBZjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVRGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBYUQsQ0FmTTtNQUFNRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmRQZnAudHN4PzgxZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNoZWNrU2l6ZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGNvbnN0IENhcmRTdHlsZSA9IHN0eWxlZC5kaXY8e1xuICBzbWFsbD86IGJvb2xlYW47XG4gIG1pZD86IGJvb2xlYW47XG4gIGJpZz86IGJvb2xlYW47XG59PmBcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gICR7KHByb3BzKSA9PiBjaGVja1NpemUocHJvcHMpfTtcbmA7XG5cbmNvbnN0IGV4dGVuZGVkID0gc3R5bGVkKENhcmRTdHlsZSlgYDtcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUGZwUHJvcHMge1xuICBpZD86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgc2x1Zz86IHN0cmluZztcbiAgc21hbGw/OiBib29sZWFuO1xuICBtaWQ/OiBib29sZWFuO1xuICBiaWc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQZnAge1xuICAocHJvcHM6IENhcmRQZnBQcm9wcyk6IEpTWC5FbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgQ2FyZFBmcDogQ2FyZFBmcCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG5hbWUsIHNsdWcsIHNtYWxsLCBtaWQsIGJpZyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPENhcmRTdHlsZSBzbWFsbD17c21hbGx9IG1pZD17bWlkfSBiaWc9e2JpZ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+QXZhdGFyIHtuYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvblwiPkFjdGlvbjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXNlY3Rpb25cIj5JbWFnZTwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLXNlY3Rpb25cIj5JbmZvczwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtc2VjdGlvblwiPlNvY2lhbDwvZGl2PlxuICAgIDwvQ2FyZFN0eWxlPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJzdHlsZWQiLCJjaGVja1NpemUiLCJDYXJkU3R5bGUiLCJkaXYiLCJwcm9wcyIsImV4dGVuZGVkIiwiQ2FyZFBmcCIsIm5hbWUiLCJzbHVnIiwic21hbGwiLCJtaWQiLCJiaWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card/CardPfp.tsx\n"));

/***/ })

});