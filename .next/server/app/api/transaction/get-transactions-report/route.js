"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/transaction/get-transactions-report/route";
exports.ids = ["app/api/transaction/get-transactions-report/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute&page=%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute.js&appDir=C%3A%5CUsers%5CF.L.G%5CDesktop%5Cexpense-management%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CF.L.G%5CDesktop%5Cexpense-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute&page=%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute.js&appDir=C%3A%5CUsers%5CF.L.G%5CDesktop%5Cexpense-management%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CF.L.G%5CDesktop%5Cexpense-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_F_L_G_Desktop_expense_management_src_app_api_transaction_get_transactions_report_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/transaction/get-transactions-report/route.js */ \"(rsc)/./src/app/api/transaction/get-transactions-report/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/transaction/get-transactions-report/route\",\n        pathname: \"/api/transaction/get-transactions-report\",\n        filename: \"route\",\n        bundlePath: \"app/api/transaction/get-transactions-report/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\F.L.G\\\\Desktop\\\\expense-management\\\\src\\\\app\\\\api\\\\transaction\\\\get-transactions-report\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_F_L_G_Desktop_expense_management_src_app_api_transaction_get_transactions_report_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/transaction/get-transactions-report/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0cmFuc2FjdGlvbiUyRmdldC10cmFuc2FjdGlvbnMtcmVwb3J0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0cmFuc2FjdGlvbiUyRmdldC10cmFuc2FjdGlvbnMtcmVwb3J0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdHJhbnNhY3Rpb24lMkZnZXQtdHJhbnNhY3Rpb25zLXJlcG9ydCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNGLkwuRyU1Q0Rlc2t0b3AlNUNleHBlbnNlLW1hbmFnZW1lbnQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0YuTC5HJTVDRGVza3RvcCU1Q2V4cGVuc2UtbWFuYWdlbWVudCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM0RDtBQUN6STtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVuc2UtbWFuYWdlbWVudC8/N2VhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxGLkwuR1xcXFxEZXNrdG9wXFxcXGV4cGVuc2UtbWFuYWdlbWVudFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0cmFuc2FjdGlvblxcXFxnZXQtdHJhbnNhY3Rpb25zLXJlcG9ydFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdHJhbnNhY3Rpb24vZ2V0LXRyYW5zYWN0aW9ucy1yZXBvcnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90cmFuc2FjdGlvbi9nZXQtdHJhbnNhY3Rpb25zLXJlcG9ydFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdHJhbnNhY3Rpb24vZ2V0LXRyYW5zYWN0aW9ucy1yZXBvcnQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxGLkwuR1xcXFxEZXNrdG9wXFxcXGV4cGVuc2UtbWFuYWdlbWVudFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0cmFuc2FjdGlvblxcXFxnZXQtdHJhbnNhY3Rpb25zLXJlcG9ydFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90cmFuc2FjdGlvbi9nZXQtdHJhbnNhY3Rpb25zLXJlcG9ydC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute&page=%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute.js&appDir=C%3A%5CUsers%5CF.L.G%5CDesktop%5Cexpense-management%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CF.L.G%5CDesktop%5Cexpense-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/transaction/get-transactions-report/route.js":
/*!******************************************************************!*\
  !*** ./src/app/api/transaction/get-transactions-report/route.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\nconst GET = async (req, res)=>{\n    try {\n        const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"token\")?.value || \"\";\n        const result = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`${process.env.API_BASE_URL}/transaction/get-transactions-report`, {\n            headers: {\n                token: token\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(result.data, {\n            status: result?.status\n        });\n    } catch (error) {\n        const errorRes = error?.response;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(errorRes.data, {\n            status: errorRes?.status\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90cmFuc2FjdGlvbi9nZXQtdHJhbnNhY3Rpb25zLXJlcG9ydC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ2U7QUFDSjtBQUc5QixNQUFNRyxNQUFNLE9BQU9DLEtBQUtDO0lBQzNCLElBQUc7UUFDQyxNQUFNQyxRQUFRSixxREFBT0EsR0FBR0ssR0FBRyxDQUFDLFVBQVVDLFNBQVM7UUFHL0MsTUFBTUMsU0FBUyxNQUFNVCw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLENBQUMsRUFBRUcsUUFBUUMsR0FBRyxDQUFDQyxZQUFZLENBQUMsb0NBQW9DLENBQUMsRUFBRTtZQUFDQyxTQUFRO2dCQUFDUCxPQUFNQTtZQUFLO1FBQUM7UUFDeEgsT0FBT0wscURBQVlBLENBQUNhLElBQUksQ0FBQ0wsT0FBT00sSUFBSSxFQUFDO1lBQUNDLFFBQU9QLFFBQVFPO1FBQU07SUFDL0QsRUFDQSxPQUFNQyxPQUFNO1FBQ1IsTUFBTUMsV0FBV0QsT0FBT0U7UUFDeEIsT0FBT2xCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUNJLFNBQVNILElBQUksRUFBQztZQUFDQyxRQUFPRSxVQUFVRjtRQUFNO0lBQ25FO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVuc2UtbWFuYWdlbWVudC8uL3NyYy9hcHAvYXBpL3RyYW5zYWN0aW9uL2dldC10cmFuc2FjdGlvbnMtcmVwb3J0L3JvdXRlLmpzP2NkNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge05leHRSZXNwb25zZX0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7Y29va2llc30gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHRVQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMoKS5nZXQoJ3Rva2VuJyk/LnZhbHVlIHx8ICcnO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSV9CQVNFX1VSTH0vdHJhbnNhY3Rpb24vZ2V0LXRyYW5zYWN0aW9ucy1yZXBvcnRgLCB7aGVhZGVyczp7dG9rZW46dG9rZW59fSk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlc3VsdC5kYXRhLHtzdGF0dXM6cmVzdWx0Py5zdGF0dXN9KTtcclxuICAgIH1cclxuICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICBjb25zdCBlcnJvclJlcyA9IGVycm9yPy5yZXNwb25zZTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZXJyb3JSZXMuZGF0YSx7c3RhdHVzOmVycm9yUmVzPy5zdGF0dXN9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJheGlvcyIsIk5leHRSZXNwb25zZSIsImNvb2tpZXMiLCJHRVQiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImdldCIsInZhbHVlIiwicmVzdWx0IiwicHJvY2VzcyIsImVudiIsIkFQSV9CQVNFX1VSTCIsImhlYWRlcnMiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImVycm9yIiwiZXJyb3JSZXMiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/transaction/get-transactions-report/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute&page=%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransaction%2Fget-transactions-report%2Froute.js&appDir=C%3A%5CUsers%5CF.L.G%5CDesktop%5Cexpense-management%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CF.L.G%5CDesktop%5Cexpense-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();