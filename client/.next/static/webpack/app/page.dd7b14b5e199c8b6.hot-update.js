"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/CardExpenseSummary.tsx":
/*!**************************************************!*\
  !*** ./src/app/dashboard/CardExpenseSummary.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state/api */ \"(app-pages-browser)/./src/state/api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst colors = [\n    \"#00C49F\",\n    \"#0088FE\",\n    \"#FFBB28\"\n];\nconst CardExpenseSummary = ()=>{\n    _s();\n    const { data, isLoading } = (0,_state_api__WEBPACK_IMPORTED_MODULE_1__.useGetDashboardMetricsQuery)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between\",\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-5\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\My Computer\\\\Desktop\\\\inventory-management\\\\client\\\\src\\\\app\\\\dashboard\\\\CardExpenseSummary.tsx\",\n            lineNumber: 10,\n            columnNumber: 20\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg font-semibold \",\n                    children: \"Expense Summary\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\My Computer\\\\Desktop\\\\inventory-management\\\\client\\\\src\\\\app\\\\dashboard\\\\CardExpenseSummary.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\My Computer\\\\Desktop\\\\inventory-management\\\\client\\\\src\\\\app\\\\dashboard\\\\CardExpenseSummary.tsx\",\n                lineNumber: 11,\n                columnNumber: 6\n            }, undefined)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\My Computer\\\\Desktop\\\\inventory-management\\\\client\\\\src\\\\app\\\\dashboard\\\\CardExpenseSummary.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardExpenseSummary, \"VCh6dkkP/xhLH6HwuS0QU2vj4SE=\", false, function() {\n    return [\n        _state_api__WEBPACK_IMPORTED_MODULE_1__.useGetDashboardMetricsQuery\n    ];\n});\n_c = CardExpenseSummary;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardExpenseSummary);\nvar _c;\n$RefreshReg$(_c, \"CardExpenseSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL0NhcmRFeHBlbnNlU3VtbWFyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUUxQixNQUFNRSxTQUFTO0lBQUM7SUFBVztJQUFXO0NBQVU7QUFFaEQsTUFBTUMscUJBQXFCOztJQUN6QixNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFLEdBQUdMLHVFQUEyQkE7SUFDdkQscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7a0JBQ1pGLDBCQUFZLDhEQUFDQztZQUFJQyxXQUFVO3NCQUFNOzs7OztzQ0FBbUI7c0JBQ3RELDRFQUFDRDswQkFDRSw0RUFBQ0U7b0JBQUdELFdBQVU7OEJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU0vQztHQVpNSjs7UUFDd0JILG1FQUEyQkE7OztLQURuREc7QUFjTixpRUFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE15IENvbXB1dGVyXFxEZXNrdG9wXFxpbnZlbnRvcnktbWFuYWdlbWVudFxcY2xpZW50XFxzcmNcXGFwcFxcZGFzaGJvYXJkXFxDYXJkRXhwZW5zZVN1bW1hcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdldERhc2hib2FyZE1ldHJpY3NRdWVyeSB9IGZyb20gXCJAL3N0YXRlL2FwaVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjb2xvcnMgPSBbXCIjMDBDNDlGXCIsIFwiIzAwODhGRVwiLCBcIiNGRkJCMjhcIl07XHJcblxyXG5jb25zdCBDYXJkRXhwZW5zZVN1bW1hcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZUdldERhc2hib2FyZE1ldHJpY3NRdWVyeSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTMgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtMnhsIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIHtpc0xvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPkxvYWRpbmcuLi48L2Rpdj4gOiA8PlxyXG4gICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBcIj5FeHBlbnNlIFN1bW1hcnk8L2gyPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRFeHBlbnNlU3VtbWFyeTtcclxuIl0sIm5hbWVzIjpbInVzZUdldERhc2hib2FyZE1ldHJpY3NRdWVyeSIsIlJlYWN0IiwiY29sb3JzIiwiQ2FyZEV4cGVuc2VTdW1tYXJ5IiwiZGF0YSIsImlzTG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/CardExpenseSummary.tsx\n"));

/***/ })

});