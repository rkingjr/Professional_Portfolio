/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; },\n/* harmony export */   \"accomplishments\": function() { return /* binding */ accomplishments; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'PokéWeather',\n  description: \"In this application we wanted to have a fun way for users to get the current weather and associate that with different pokemon. If the user types in a city location, then the page will display a 5 day weather forecast. Then, if the user selects a day in the forecast, that weather will pull up a list of Pokémon.\",\n  image: 'images/1.png',\n  tags: ['Materialize', 'PokeAPI', 'OpenWeatherAPI'],\n  source: 'https://github.com/ribbonanarchy/PokemonVsNature',\n  visit: 'https://ribbonanarchy.github.io/PokemonVsNature/',\n  id: 0\n}, {\n  title: 'Curiosity Cabinet',\n  description: \"An Interactive show-and-tell application that allows contributors to upload an image and then annotate that image with notes pinned to specific parts of the image being described. Viewers can then explore the collection of uploaded images and read all the annotations attached to each image.\",\n  image: '../images/2.png',\n  tags: ['Annotorious', 'React', 'MongoDB'],\n  source: 'https://github.com/rkingjr/MERNcuriosityCabinet',\n  visit: 'https://mern-curiosity-cabinet.herokuapp.com/',\n  id: 1\n}, {\n  title: 'Snake Clone',\n  description: \"A clone of the classic game 'Snake' used to help me learn basic game mechanics.\",\n  image: '../images/3.png',\n  tags: ['CSS', 'JavaScript', 'HTML'],\n  source: 'https://github.com/rkingjr/Snake_Clone',\n  visit: 'https://rkingjr.github.io/Snake_Clone/',\n  id: 1\n}, {\n  title: 'Pong Clone',\n  description: \"A clone of the classic game 'Pong' to help me better understand how to integrate math equations into code.\",\n  image: '../images/4.png',\n  tags: ['CSS', 'JavaScript', 'HTML'],\n  source: 'https://github.com/rkingjr/MERNcuriosityCabinet',\n  visit: 'https://mern-curiosity-cabinet.herokuapp.com/',\n  id: 1\n}];\nvar TimeLineData = [{\n  year: 2005,\n  text: 'Traveled internationally for the first time to Europe with my grandparents.'\n}, {\n  year: 2009,\n  text: \"Sailed to Newfoundland as a crew member of Maine Maritime Academy's schooner Bowdoin.\"\n}, {\n  year: 2011,\n  text: 'Studied abroad as part of the Danube Summer Institute to study the inner workings of the European Union.'\n}, {\n  year: 2013,\n  text: 'Graduated from Texas A&M University with a BS in Political Science.'\n}, {\n  year: 2014,\n  text: 'Moved to Jinzhou, China'\n}, {\n  year: 2015,\n  text: 'Received my CELTA (Certificate for Teaching English to Speakers of Others Languages) from Cambridge University.'\n}, {\n  year: 2019,\n  text: \"Received the Best Teacher Award for EF English First's West Region.\"\n}, {\n  year: 2021,\n  text: 'Moved back to the US after 7 years in China.'\n}, {\n  year: 2022,\n  text: 'Received a certificate in Full Stack Web Development from the University of Texas at Austin.'\n}];\nvar accomplishments = [{\n  number: 20,\n  text: 'Open Source Projects'\n}, {\n  number: 1000,\n  text: 'Students'\n}, {\n  number: 1900,\n  text: 'Github Followers'\n}, {\n  number: 5000,\n  text: 'Github Stars'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiLCJhY2NvbXBsaXNobWVudHMiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFFLDBUQUZmO0FBR0lDLE9BQUssRUFBRSxjQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLGFBQUQsRUFBZ0IsU0FBaEIsRUFBMkIsZ0JBQTNCLENBSlY7QUFLSUMsUUFBTSxFQUFFLGtEQUxaO0FBTUVDLE9BQUssRUFBRSxrREFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTixPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsYUFBVyxFQUFDLHFTQUZkO0FBR0VDLE9BQUssRUFBRSxpQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLEVBQXlCLFNBQXpCLENBSlI7QUFLRUMsUUFBTSxFQUFFLGlEQUxWO0FBTUVDLE9BQUssRUFBRSwrQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFDLGlGQUZkO0FBR0VDLE9BQUssRUFBRSxpQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixNQUF0QixDQUpSO0FBS0VDLFFBQU0sRUFBRSx3Q0FMVjtBQU1FQyxPQUFLLEVBQUUsd0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQUMsNEdBRmQ7QUFHRUMsT0FBSyxFQUFFLGlCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxZQUFSLEVBQXNCLE1BQXRCLENBSlI7QUFLRUMsUUFBTSxFQUFFLGlEQUxWO0FBTUVDLE9BQUssRUFBRSwrQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTVCc0IsQ0FBakI7QUF1Q0EsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsRUFNMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTjBCLEVBTzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQVAwQixFQVExQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FSMEIsRUFTMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBVDBCLENBQXJCO0FBWUEsSUFBTUMsZUFBZSxHQUFHLENBQzdCO0FBQUVDLFFBQU0sRUFBRSxFQUFWO0FBQWNGLE1BQUksRUFBRTtBQUFwQixDQUQ2QixFQUU3QjtBQUFFRSxRQUFNLEVBQUUsSUFBVjtBQUFnQkYsTUFBSSxFQUFFO0FBQXRCLENBRjZCLEVBRzdCO0FBQUVFLFFBQU0sRUFBRSxJQUFWO0FBQWdCRixNQUFJLEVBQUU7QUFBdEIsQ0FINkIsRUFJN0I7QUFBRUUsUUFBTSxFQUFFLElBQVY7QUFBZ0JGLE1BQUksRUFBRTtBQUF0QixDQUo2QixDQUF4QiIsImZpbGUiOiIuL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdQb2vDqVdlYXRoZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluIHRoaXMgYXBwbGljYXRpb24gd2Ugd2FudGVkIHRvIGhhdmUgYSBmdW4gd2F5IGZvciB1c2VycyB0byBnZXQgdGhlIGN1cnJlbnQgd2VhdGhlciBhbmQgYXNzb2NpYXRlIHRoYXQgd2l0aCBkaWZmZXJlbnQgcG9rZW1vbi4gSWYgdGhlIHVzZXIgdHlwZXMgaW4gYSBjaXR5IGxvY2F0aW9uLCB0aGVuIHRoZSBwYWdlIHdpbGwgZGlzcGxheSBhIDUgZGF5IHdlYXRoZXIgZm9yZWNhc3QuIFRoZW4sIGlmIHRoZSB1c2VyIHNlbGVjdHMgYSBkYXkgaW4gdGhlIGZvcmVjYXN0LCB0aGF0IHdlYXRoZXIgd2lsbCBwdWxsIHVwIGEgbGlzdCBvZiBQb2vDqW1vbi5cIixcbiAgICAgIGltYWdlOiAnaW1hZ2VzLzEucG5nJyxcbiAgICAgIHRhZ3M6IFsnTWF0ZXJpYWxpemUnLCAnUG9rZUFQSScsICdPcGVuV2VhdGhlckFQSSddLFxuICAgICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3JpYmJvbmFuYXJjaHkvUG9rZW1vblZzTmF0dXJlJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcmliYm9uYW5hcmNoeS5naXRodWIuaW8vUG9rZW1vblZzTmF0dXJlLycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0N1cmlvc2l0eSBDYWJpbmV0JyxcbiAgICBkZXNjcmlwdGlvbjpcIkFuIEludGVyYWN0aXZlIHNob3ctYW5kLXRlbGwgYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgY29udHJpYnV0b3JzIHRvIHVwbG9hZCBhbiBpbWFnZSBhbmQgdGhlbiBhbm5vdGF0ZSB0aGF0IGltYWdlIHdpdGggbm90ZXMgcGlubmVkIHRvIHNwZWNpZmljIHBhcnRzIG9mIHRoZSBpbWFnZSBiZWluZyBkZXNjcmliZWQuIFZpZXdlcnMgY2FuIHRoZW4gZXhwbG9yZSB0aGUgY29sbGVjdGlvbiBvZiB1cGxvYWRlZCBpbWFnZXMgYW5kIHJlYWQgYWxsIHRoZSBhbm5vdGF0aW9ucyBhdHRhY2hlZCB0byBlYWNoIGltYWdlLlwiLFxuICAgIGltYWdlOiAnLi4vaW1hZ2VzLzIucG5nJyxcbiAgICB0YWdzOiBbJ0Fubm90b3Jpb3VzJywgJ1JlYWN0JywgJ01vbmdvREInXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcmtpbmdqci9NRVJOY3VyaW9zaXR5Q2FiaW5ldCcsXG4gICAgdmlzaXQ6ICdodHRwczovL21lcm4tY3VyaW9zaXR5LWNhYmluZXQuaGVyb2t1YXBwLmNvbS8nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTbmFrZSBDbG9uZScsXG4gICAgZGVzY3JpcHRpb246XCJBIGNsb25lIG9mIHRoZSBjbGFzc2ljIGdhbWUgJ1NuYWtlJyB1c2VkIHRvIGhlbHAgbWUgbGVhcm4gYmFzaWMgZ2FtZSBtZWNoYW5pY3MuXCIsXG4gICAgaW1hZ2U6ICcuLi9pbWFnZXMvMy5wbmcnLFxuICAgIHRhZ3M6IFsnQ1NTJywgJ0phdmFTY3JpcHQnLCAnSFRNTCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ya2luZ2pyL1NuYWtlX0Nsb25lJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcmtpbmdqci5naXRodWIuaW8vU25ha2VfQ2xvbmUvJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUG9uZyBDbG9uZScsXG4gICAgZGVzY3JpcHRpb246XCJBIGNsb25lIG9mIHRoZSBjbGFzc2ljIGdhbWUgJ1BvbmcnIHRvIGhlbHAgbWUgYmV0dGVyIHVuZGVyc3RhbmQgaG93IHRvIGludGVncmF0ZSBtYXRoIGVxdWF0aW9ucyBpbnRvIGNvZGUuXCIsXG4gICAgaW1hZ2U6ICcuLi9pbWFnZXMvNC5wbmcnLFxuICAgIHRhZ3M6IFsnQ1NTJywgJ0phdmFTY3JpcHQnLCAnSFRNTCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ya2luZ2pyL01FUk5jdXJpb3NpdHlDYWJpbmV0JyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vbWVybi1jdXJpb3NpdHktY2FiaW5ldC5oZXJva3VhcHAuY29tLycsXG4gICAgaWQ6IDEsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMDUsIHRleHQ6ICdUcmF2ZWxlZCBpbnRlcm5hdGlvbmFsbHkgZm9yIHRoZSBmaXJzdCB0aW1lIHRvIEV1cm9wZSB3aXRoIG15IGdyYW5kcGFyZW50cy4nLCB9LFxuICB7IHllYXI6IDIwMDksIHRleHQ6IFwiU2FpbGVkIHRvIE5ld2ZvdW5kbGFuZCBhcyBhIGNyZXcgbWVtYmVyIG9mIE1haW5lIE1hcml0aW1lIEFjYWRlbXkncyBzY2hvb25lciBCb3dkb2luLlwiLCB9LFxuICB7IHllYXI6IDIwMTEsIHRleHQ6ICdTdHVkaWVkIGFicm9hZCBhcyBwYXJ0IG9mIHRoZSBEYW51YmUgU3VtbWVyIEluc3RpdHV0ZSB0byBzdHVkeSB0aGUgaW5uZXIgd29ya2luZ3Mgb2YgdGhlIEV1cm9wZWFuIFVuaW9uLicsIH0sXG4gIHsgeWVhcjogMjAxMywgdGV4dDogJ0dyYWR1YXRlZCBmcm9tIFRleGFzIEEmTSBVbml2ZXJzaXR5IHdpdGggYSBCUyBpbiBQb2xpdGljYWwgU2NpZW5jZS4nLCB9LFxuICB7IHllYXI6IDIwMTQsIHRleHQ6ICdNb3ZlZCB0byBKaW56aG91LCBDaGluYScsIH0sXG4gIHsgeWVhcjogMjAxNSwgdGV4dDogJ1JlY2VpdmVkIG15IENFTFRBIChDZXJ0aWZpY2F0ZSBmb3IgVGVhY2hpbmcgRW5nbGlzaCB0byBTcGVha2VycyBvZiBPdGhlcnMgTGFuZ3VhZ2VzKSBmcm9tIENhbWJyaWRnZSBVbml2ZXJzaXR5LicsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogXCJSZWNlaXZlZCB0aGUgQmVzdCBUZWFjaGVyIEF3YXJkIGZvciBFRiBFbmdsaXNoIEZpcnN0J3MgV2VzdCBSZWdpb24uXCIsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ01vdmVkIGJhY2sgdG8gdGhlIFVTIGFmdGVyIDcgeWVhcnMgaW4gQ2hpbmEuJywgfSxcbiAgeyB5ZWFyOiAyMDIyLCB0ZXh0OiAnUmVjZWl2ZWQgYSBjZXJ0aWZpY2F0ZSBpbiBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wbWVudCBmcm9tIHRoZSBVbml2ZXJzaXR5IG9mIFRleGFzIGF0IEF1c3Rpbi4nLCB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGFjY29tcGxpc2htZW50cyA9IFtcbiAgeyBudW1iZXI6IDIwLCB0ZXh0OiAnT3BlbiBTb3VyY2UgUHJvamVjdHMnfSxcbiAgeyBudW1iZXI6IDEwMDAsIHRleHQ6ICdTdHVkZW50cycsIH0sXG4gIHsgbnVtYmVyOiAxOTAwLCB0ZXh0OiAnR2l0aHViIEZvbGxvd2VycycsIH0sXG4gIHsgbnVtYmVyOiA1MDAwLCB0ZXh0OiAnR2l0aHViIFN0YXJzJywgfVxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});