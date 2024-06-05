/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/bored.js":
/*!***********************!*\
  !*** ./dist/bored.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MakeBoard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./dist/ship.js\");\n\nfunction MakeBoard() {\n  var board = Array(10).fill(-1).map(function () {\n    return new Array(10).fill(-1);\n  });\n  var shipsNumber = 0;\n  var sunkedships = 0;\n  var ships = [];\n  var sizes = [2, 2, 3, 4, 5];\n  var locations = [[4, 4], [1, 1], [6, 6], [9, 2], [3, 3]];\n  var getShips = function getShips() {\n    return ships;\n  };\n  var getSunkedShips = function getSunkedShips() {\n    return sunkedships;\n  };\n  var getBoard = function getBoard() {\n    return board;\n  };\n  var GameOver = function GameOver() {\n    if (shipsNumber !== sunkedships) return false;\n    return true;\n  };\n  var PlaceDef = function PlaceDef() {\n    var i = 0;\n    for (var _i = 0, _sizes = sizes; _i < _sizes.length; _i++) {\n      var size = _sizes[_i];\n      PlaceShip(size, locations[i]);\n      i++;\n    }\n    return true;\n  };\n  var Sunk = function Sunk(id) {\n    return ships[id].isSunk();\n  };\n  var Attack = function Attack(loc) {\n    if (loc[0] >= 10 || loc[1] >= 10) return false;\n    // adding targets to every place as a hitmarker, -2 means a ship was hit and -3 nothing was hit\n    var target = board[loc[0]][loc[1]];\n    if (target === -2) return false;\n    board[loc[0]][loc[1]] = -3;\n    if (target < 0) return false;\n    board[loc[0]][loc[1]] = -2;\n    ships[target].hit();\n    if (Sunk(target)) {\n      sunkedships++;\n    }\n    GameOver();\n    return true;\n  };\n  var PlaceShip = function PlaceShip(size, location) {\n    // horizantal placemnt\n    if (location[1] + size > 10) {\n      return false;\n    }\n    // testing overlapping\n    for (var i = 0; i < size; i++) {\n      if (board[location[0]][location[1] + i] !== -1) {\n        return false;\n      }\n    }\n    ships[shipsNumber] = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size, shipsNumber);\n    for (var _i2 = location[1]; _i2 < size + location[1]; _i2++) {\n      board[location[0]][_i2] = shipsNumber;\n    }\n    shipsNumber++;\n    return true;\n  };\n  // PlaceDef();\n  // Attack([4, 4]);\n  // Attack([4, 5]);\n  // Attack([3, 3]);\n  //\n  // console.log(ships[0].health());\n  // console.log(ships[3].health());\n  //\n  // console.log(ships[4]);\n  // GameOver();\n  // console.table(board);\n  //\n  return {\n    Attack: Attack,\n    PlaceDef: PlaceDef,\n    PlaceShip: PlaceShip,\n    GameOver: GameOver,\n    getBoard: getBoard,\n    getShips: getShips,\n    getSunkedShips: getSunkedShips\n  };\n}\n// MakeBoard();\n\n//# sourceURL=webpack://Battelship/./dist/bored.js?");

/***/ }),

/***/ "./dist/player.js":
/*!************************!*\
  !*** ./dist/player.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MakePlayer)\n/* harmony export */ });\n/* harmony import */ var _bored_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bored.js */ \"./dist/bored.js\");\n\nfunction MakePlayer(name, id) {\n  var board = (0,_bored_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var PlaceDefualt = function PlaceDefualt() {\n    board.PlaceDef();\n  };\n  var PlaceShip = function PlaceShip(size, loc) {\n    board.PlaceShip(size, loc);\n  };\n  var RecaiveAttack = function RecaiveAttack(loc) {\n    return board.Attack(loc);\n  };\n  var GetBoard = function GetBoard() {\n    return board;\n  };\n  return {\n    name: name,\n    GetBoard: GetBoard,\n    PlaceShip: PlaceShip,\n    RecaiveAttack: RecaiveAttack,\n    PlaceDefualt: PlaceDefualt,\n    id: id\n  };\n}\n\n//# sourceURL=webpack://Battelship/./dist/player.js?");

/***/ }),

/***/ "./dist/script.js":
/*!************************!*\
  !*** ./dist/script.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./dist/player.js\");\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\nvar grid = document.querySelector(\".grid1\");\nvar grid2 = document.querySelector(\".grid2\");\nvar frag = create(1);\nvar frag2 = create(2);\nif (grid && grid2) {\n  grid2.append(frag2);\n  grid.append(frag);\n}\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * max);\n}\nfunction GameLogicDom() {\n  var player1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"human\", 1);\n  var cmp = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"cmp\", 2);\n  player1.PlaceDefualt();\n  cmp.PlaceDefualt();\n  var turn = 1;\n  var play = function play(attack, type) {\n    if (type === 1 && turn === 1) {\n      var board = cmp.GetBoard().getBoard();\n      var childern = grid === null || grid === void 0 ? void 0 : grid.children;\n      if (!childern) return;\n      UpdateBoard(board, childern);\n      cmp.RecaiveAttack(attack);\n      turn = 2;\n    } else if (type === 2 && turn === 2) {\n      var _board = player1.GetBoard().getBoard();\n      var _childern = grid2 === null || grid2 === void 0 ? void 0 : grid2.children;\n      if (!_childern) return;\n      UpdateBoard(_board, _childern);\n      var list = [getRandomInt(9), getRandomInt(9)];\n      player1.RecaiveAttack(list);\n      turn = 1;\n    }\n    if (cmp.GetBoard().GameOver() || player1.GetBoard().GameOver()) {\n      if (grid) grid.textContent = \"win\";\n    }\n  };\n  return {\n    play: play,\n    player1: player1,\n    cmp: cmp\n  };\n}\nfunction UpdateBoard(borad, frag) {\n  var items = [];\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      items.push(borad[i][j]);\n    }\n  }\n  var _iterator = _createForOfIteratorHelper(frag),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      item.textContent = \"\".concat(items[0]);\n      items.shift();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nvar game = GameLogicDom();\nfunction create(type) {\n  var frag = document.createDocumentFragment();\n  for (var i = 0; i < 10; i++) {\n    var _loop = function _loop() {\n      var tmp = document.createElement(\"div\");\n      tmp.classList.add(\"item\");\n      tmp.setAttribute(\"data-value\", \"\".concat(i).concat(j).concat(type));\n      tmp.textContent = \"~\";\n      tmp.addEventListener(\"click\", function () {\n        var data = tmp.getAttribute(\"data-value\");\n        if (data === null) return;\n        var move = [+data[0], +data[1]];\n        var type = +data[2];\n        game.play(move, type);\n      });\n      frag.append(tmp);\n    };\n    for (var j = 0; j < 10; j++) {\n      _loop();\n    }\n  }\n  return frag;\n}\n\n//# sourceURL=webpack://Battelship/./dist/script.js?");

/***/ }),

/***/ "./dist/ship.js":
/*!**********************!*\
  !*** ./dist/ship.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateShip)\n/* harmony export */ });\nfunction CreateShip(block) {\n  var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var size = block;\n  var hits = 0;\n  var sunk = false;\n  var id = ids;\n  var hit = function hit() {\n    hits++;\n    if (hits >= size) {\n      sunk = true;\n    }\n  };\n  var health = function health() {\n    return size - hits;\n  };\n  var isSunk = function isSunk() {\n    return sunk;\n  };\n  return {\n    size: size,\n    id: id,\n    hits: hits,\n    sunk: sunk,\n    health: health,\n    isSunk: isSunk,\n    hit: hit\n  };\n}\n\n//# sourceURL=webpack://Battelship/./dist/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/script.js");
/******/ 	
/******/ })()
;