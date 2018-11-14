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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/data/link.js":
/*!**************************!*\
  !*** ./src/data/link.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Link(node0, node1, length) {\r\n    this.node0 = node0;\r\n    this.node1 = node1;\r\n    this.nodeset = null;\r\n    this.length = length || 100;\r\n}\r\n\r\nLink.prototype.getOther = function (node) {\r\n    return node.id === this.node0.id ? this.node1 : this.node0;\r\n}\r\n\r\nLink.prototype.dispose = function () {\r\n    this.node0.removeLink(this);\r\n    this.node1.removeLink(this);\r\n    this.node0 = this.node1 = null;\r\n}\r\n\r\nmodule.exports = Link;\n\n//# sourceURL=webpack:///./src/data/link.js?");

/***/ }),

/***/ "./src/data/node.js":
/*!**************************!*\
  !*** ./src/data/node.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Node(id) {\r\n    this.id = id;\r\n    this.position = { x: 0, y: 0 };\r\n    this.velocity = { x: 0, y: 0 };\r\n    this.savedState = {\r\n        position: { x: 0, y: 0 },\r\n        velocity: { x: 0, y: 0 }\r\n    }\r\n    this.mass = 1;\r\n    this.nodeset = null;\r\n    this.links = [];\r\n    this.payload = null;\r\n    this.fixed = false;\r\n}\r\n\r\nNode.prototype.addLink = function (link) {\r\n    this.links.push(link);\r\n    return this;\r\n}\r\n\r\nNode.prototype.removeLink = function (link) {\r\n    this.links.splice(this.links.indexOf(link), 1);\r\n    return this;\r\n}\r\n\r\nNode.prototype.setPayload = function(payload) {\r\n    this.payload = payload;\r\n    return this;\r\n}\r\n\r\nNode.prototype.applyImpulse = function(x, y) {\r\n    this.velocity.x += x / this.mass;\r\n    this.velocity.y += y / this.mass;\r\n    return this;\r\n}\r\n\r\nNode.prototype.addPayload = function (name, value) {\r\n    if (this.payload === null) {\r\n        this.payload = {};\r\n    }\r\n\r\n    this.payload[name] = value;\r\n    return this;\r\n}\r\n\r\nNode.prototype.getPayload = function (name) {\r\n    if (this.payload === null) return null;\r\n    return this.payload[name] === undefined ? null : this.payload[name];\r\n}\r\n\r\nNode.prototype.step = function (dt) {\r\n    if(this.fixed !== true) {\r\n        this.position.x += this.velocity.x * dt;\r\n        this.position.y += this.velocity.y * dt;\r\n    }\r\n}\r\n\r\nNode.prototype.saveState = function () {\r\n    this.savedState.position.x = this.position.x;\r\n    this.savedState.position.y = this.position.y;\r\n    this.savedState.velocity.x = this.velocity.x;\r\n    this.savedState.velocity.y = this.velocity.y;\r\n    return this;\r\n}\r\n\r\nNode.prototype.dispose = function () {\r\n    \r\n}\r\n\r\nmodule.exports = Node;\n\n//# sourceURL=webpack:///./src/data/node.js?");

/***/ }),

/***/ "./src/data/nodeset.js":
/*!*****************************!*\
  !*** ./src/data/nodeset.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Node = __webpack_require__(/*! ./node */ \"./src/data/node.js\");\r\nvar Link = __webpack_require__(/*! ./link */ \"./src/data/link.js\");\r\n\r\nfunction NodeSet() {\r\n    this.nodes = [];\r\n    this.nodeMap = {};\r\n    this.links = [];\r\n}\r\n \r\nNodeSet.prototype.addNode = function (id) {\r\n    if (this.getNodeById(id) !== null) {\r\n        throw new Error(\"Node with id = \" + id + \" exists in this NodeSet\");\r\n    }\r\n    var node = new Node(id);\r\n    node.nodeset = this;\r\n    this.nodes.push(node);\r\n    this.nodeMap[id] = node;\r\n    return node;\r\n}\r\n\r\nNodeSet.prototype.addLink = function (id0, id1, length) {\r\n    var node0 = this.getNodeById(id0);\r\n    var node1 = this.getNodeById(id1);\r\n\r\n    if (node0 === null) throw new Error(\"No node with id=\" + id0);\r\n    if (node1 === null) throw new Error(\"No node with id=\" + id1);\r\n\r\n    var link = new Link(node0, node1, length);\r\n\r\n    link.nodeset = this;\r\n\r\n    node0.addLink(link);\r\n    node1.addLink(link);\r\n\r\n    this.links.push(link)\r\n\r\n    return link;\r\n}\r\n\r\nNodeSet.prototype.removeLink = function (link) {\r\n    var idx = this.links.indexOf(link);\r\n    if (idx !== -1) {\r\n        this.links.splice(idx, 1);\r\n        link.dispose();\r\n    }\r\n}\r\n\r\nNodeSet.prototype.removeNode = function (node) {\r\n    \r\n}\r\n\r\nNodeSet.prototype.getNodeById = function (id) {\r\n    var node = this.nodeMap[id];\r\n    return node === undefined ? null : node;\r\n\r\n}\r\n\r\n\r\nmodule.exports = NodeSet;\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/data/nodeset.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar Potatograph = __webpack_require__(/*! ./potatograph */ \"./src/potatograph.js-exposed\");\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/physics/sim-effectors/friction.js":
/*!***********************************************!*\
  !*** ./src/physics/sim-effectors/friction.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function frictionFactory(coeff) {\r\n    \r\n    coeff = coeff || 1.5;\r\n\r\n    return function (dt, nodes, links) {\r\n        for (var k = 0, m = nodes.length; k < m; k++) {\r\n            var node = nodes[k];\r\n            node.applyImpulse(-node.velocity.x * coeff * dt, -node.velocity.y * coeff * dt);            \r\n        }\r\n    }\r\n}\r\n\r\n\r\nfrictionFactory.default = frictionFactory();\r\nmodule.exports = frictionFactory;\n\n//# sourceURL=webpack:///./src/physics/sim-effectors/friction.js?");

/***/ }),

/***/ "./src/physics/sim-effectors/pull-to-center.js":
/*!*****************************************************!*\
  !*** ./src/physics/sim-effectors/pull-to-center.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction pullToCenterFactory(coeff) {\r\n\r\n    coeff = coeff || 1;\r\n\r\n    return function pullToCenter(dt, nodes, links) {\r\n        for (var k = 0, m = nodes.length; k < m; k++) {\r\n            var node = nodes[k];\r\n            node.applyImpulse(-node.position.x * coeff * dt, -node.position.y * coeff * dt);\r\n        }\r\n    }\r\n}\r\n\r\npullToCenterFactory.default = pullToCenterFactory();\r\n\r\nmodule.exports = pullToCenterFactory;\n\n//# sourceURL=webpack:///./src/physics/sim-effectors/pull-to-center.js?");

/***/ }),

/***/ "./src/physics/sim-effectors/radialAlign.js":
/*!**************************************************!*\
  !*** ./src/physics/sim-effectors/radialAlign.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction radialAlignFactory(levelDistance, coeff) {\r\n\r\n    levelDistance = levelDistance || 100;\r\n    coeff = coeff || 0.8;\r\n\r\n    return function radialAlign(dt, nodes, links) {\r\n        for (var k = 0, m = nodes.length; k < m; k++) {            \r\n            var node = nodes[k]; \r\n            var level = node.getPayload(\"alignLevel\");\r\n\r\n            if (typeof level !== 'number') {\r\n                throw new Error(\"radialAlign effector requires payload: [number] alignLevel\");\r\n            }\r\n\r\n            var target = levelDistance * level;\r\n\r\n            var dx = node.position.x;\r\n            var dy = node.position.y;\r\n\r\n            var distance = Math.sqrt(dx * dx + dy * dy);\r\n\r\n            if (distance <= 0) {\r\n                distance = 0.01;\r\n            }\r\n\r\n            var error = (target - distance) / distance;\r\n            \r\n            node.applyImpulse(dt * error * dx * coeff, dt * error * dy * coeff)\r\n        }\r\n    }\r\n}\r\n\r\nradialAlignFactory.default = radialAlignFactory();\r\nmodule.exports = radialAlignFactory\n\n//# sourceURL=webpack:///./src/physics/sim-effectors/radialAlign.js?");

/***/ }),

/***/ "./src/physics/sim-effectors/repulsion.js":
/*!************************************************!*\
  !*** ./src/physics/sim-effectors/repulsion.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar map = __webpack_require__(/*! ../../utils/math */ \"./src/utils/math.js\").map;\r\n\r\nfunction repulsionFactory(coeff, minDist, maxDist) {\r\n\r\n    coeff = coeff || 900;\r\n    minDist = minDist || 0;\r\n    maxDist = maxDist || 100;\r\n\r\n    return function springlinks(dt, nodes, links) {\r\n        for (var i = 0, n = nodes.length; i < n; i++) {\r\n            var node0 = nodes[i]\r\n            for (var j = i+1, m = nodes.length; j < m; j++) {\r\n                var node1 = nodes[j];\r\n                \r\n                var dx = node1.position.x - node0.position.x;\r\n                var dy = node1.position.y - node0.position.y;\r\n                \r\n                if (dx === 0 && dy === 0) {\r\n                    // prevent overlapping nodes\r\n                    dx = Math.random() - 0.5;\r\n                    dy = Math.random() - 0.5;\r\n                }\r\n\r\n                var distance = Math.max(Math.sqrt(dx * dx + dy * dy), 0.01);\r\n                var force = map(distance, minDist, maxDist, 1, 0) * coeff / distance;\r\n                var ix = dt * dx * force;\r\n                var iy = dt * dy * force;\r\n                node1.applyImpulse(ix, iy);\r\n                node0.applyImpulse(-ix, -iy);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nrepulsionFactory.default = repulsionFactory();\r\nmodule.exports = repulsionFactory\n\n//# sourceURL=webpack:///./src/physics/sim-effectors/repulsion.js?");

/***/ }),

/***/ "./src/physics/sim-effectors/springlinks.js":
/*!**************************************************!*\
  !*** ./src/physics/sim-effectors/springlinks.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction springlinksFactory(coeff) {\r\n\r\n    coeff = coeff || 3.6;\r\n\r\n    return function springlinks(dt, nodes, links) {\r\n        for (var k = 0, m = nodes.length; k < m; k++) {            \r\n            var node = nodes[k]; \r\n            for (var i = 0, n = node.links.length; i < n; i++) {\r\n                var link = node.links[i];\r\n                var other = link.getOther(node);\r\n                \r\n                var dx = other.position.x - node.position.x;\r\n                var dy = other.position.y - node.position.y;\r\n                \r\n                if (dx === 0 && dy === 0) {\r\n                    // prevent overlapping nodes\r\n                    dx = Math.random() - 0.5;\r\n                    dy = Math.random() - 0.5;\r\n                }\r\n                \r\n                var targetDistance = link.length;\r\n                \r\n                var distance = Math.max(Math.sqrt(dx * dx + dy * dy), 0.01);\r\n                var force = coeff * (distance - targetDistance) / distance;\r\n                \r\n                node.applyImpulse(dx * force * dt, dy * force * dt);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nspringlinksFactory.default = springlinksFactory();\r\nmodule.exports = springlinksFactory\n\n//# sourceURL=webpack:///./src/physics/sim-effectors/springlinks.js?");

/***/ }),

/***/ "./src/physics/sim-effectors/verticalAlign.js":
/*!****************************************************!*\
  !*** ./src/physics/sim-effectors/verticalAlign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction verticalAlignFactory(levelDistance, coeff) {\r\n\r\n    levelDistance = levelDistance || 100;\r\n    coeff = coeff || 0.3;\r\n\r\n    return function verticalAlign(dt, nodes, links) {\r\n        for (var k = 0, m = nodes.length; k < m; k++) {            \r\n            var node = nodes[k]; \r\n            var level = node.getPayload(\"alignLevel\");\r\n\r\n            if (typeof level !== 'number') {\r\n                throw new Error(\"verticalAlign effector requires payload: [number] alignLevel\");\r\n            }\r\n\r\n            var target = levelDistance * level;\r\n            var distance = target - node.position.y;\r\n\r\n            node.applyImpulse(0, dt * distance * coeff)\r\n        }\r\n    }\r\n}\r\n\r\nverticalAlignFactory.default = verticalAlignFactory();\r\nmodule.exports = verticalAlignFactory\n\n//# sourceURL=webpack:///./src/physics/sim-effectors/verticalAlign.js?");

/***/ }),

/***/ "./src/physics/solver.js":
/*!*******************************!*\
  !*** ./src/physics/solver.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction Solver(nodeset) {\r\n    this.nodeset = nodeset;\r\n    this.timestep = 1 / 30;\r\n    this.simulationEffectors = [];\r\n    this.layoutEffectors = [];\r\n}\r\n\r\nSolver.prototype.step = function () {\r\n    var nodes = this.nodeset.nodes;\r\n    var links = this.nodeset.links;\r\n    var dt = this.timestep;\r\n    \r\n    var effectors = this.simulationEffectors;\r\n    for (var j = 0, m = effectors.length; j < m; j++) {\r\n        effectors[j](dt, nodes, links)\r\n    }\r\n\r\n    for (var i = 0, n = nodes.length; i < n; i++) {\r\n        var node = nodes[i];\r\n        node.step(dt);\r\n        node.saveState();\r\n    }\r\n\r\n    this.isStable();\r\n    \r\n}\r\n\r\nSolver.prototype.isStable = function (epsilon) {\r\n    var nodes = this.nodeset.nodes;\r\n    var total = 0;\r\n    for (var i = 0, n = nodes.length; i < n; i++) {\r\n        var node = nodes[i];\r\n        var dx = node.position.x - node.savedState.position.x;\r\n        var dy = node.position.y - node.savedState.position.y;\r\n        var distSq = dx * dx + dy * dy;\r\n        total += distSq;\r\n    }\r\n\r\n    total /= nodes.length;\r\n    console.log(total);\r\n}\r\n\r\nSolver.prototype.addSimulationEffector = function(executor) {\r\n    this.simulationEffectors.push(executor)\r\n}\r\n\r\nSolver.prototype.addLayoutEffector = function(executor, weight) {\r\n    this.layoutEffectors.push({\r\n        executor: executor,\r\n        weight: weight || 1\r\n    })\r\n}\r\n\r\n\r\nmodule.exports = Solver;\n\n//# sourceURL=webpack:///./src/physics/solver.js?");

/***/ }),

/***/ "./src/potatograph.js":
/*!****************************!*\
  !*** ./src/potatograph.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Solver = __webpack_require__(/*! ./physics/solver */ \"./src/physics/solver.js\");\r\nvar NodeSet = __webpack_require__(/*! ./data/nodeset */ \"./src/data/nodeset.js\");\r\nvar springlinks = __webpack_require__(/*! ./physics/sim-effectors/springlinks */ \"./src/physics/sim-effectors/springlinks.js\");\r\nvar pullToCenter = __webpack_require__(/*! ./physics/sim-effectors/pull-to-center */ \"./src/physics/sim-effectors/pull-to-center.js\");\r\nvar friction = __webpack_require__(/*! ./physics/sim-effectors/friction */ \"./src/physics/sim-effectors/friction.js\");\r\nvar repulsion = __webpack_require__(/*! ./physics/sim-effectors/repulsion */ \"./src/physics/sim-effectors/repulsion.js\");\r\nvar verticalAlign = __webpack_require__(/*! ./physics/sim-effectors/verticalAlign */ \"./src/physics/sim-effectors/verticalAlign.js\");\r\nvar radialAlign = __webpack_require__(/*! ./physics/sim-effectors/radialAlign */ \"./src/physics/sim-effectors/radialAlign.js\");\r\n\r\nmodule.exports = {\r\n    Solver: Solver,\r\n    NodeSet: NodeSet,\r\n    effectors: {\r\n        simulation: {\r\n            springlinks: springlinks,\r\n            pullToCenter: pullToCenter,\r\n            friction: friction,\r\n            repulsion: repulsion,\r\n            verticalAlign: verticalAlign,\r\n            radialAlign: radialAlign\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/potatograph.js?");

/***/ }),

/***/ "./src/potatograph.js-exposed":
/*!************************************!*\
  !*** ./src/potatograph.js-exposed ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"Potatograph\"] = __webpack_require__(/*! -!./potatograph.js */ \"./src/potatograph.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/potatograph.js-exposed?");

/***/ }),

/***/ "./src/utils/math.js":
/*!***************************!*\
  !*** ./src/utils/math.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nfunction lerp(t, a, b) {\r\n    return t * (b - a) + a;\r\n}\r\n\r\nfunction clamp(t, a, b) {\r\n    if (a > b) {\r\n        var temp = a;\r\n        a = b;\r\n        b = temp;\r\n    }\r\n    return Math.min(b, Math.max(t, a));\r\n}\r\n\r\nfunction clamp01(t) {\r\n    return clamp(t, 0, 1);\r\n}\r\n\r\nfunction map (t, a, b, mapA, mapB) {\r\n    var t1 = clamp01((t - a) / (b - a));\r\n    return lerp(t1, mapA, mapB);\r\n}\r\n\r\nmodule.exports = {\r\n    map: map,\r\n    lerp: lerp,\r\n    clamp: clamp,\r\n    clamp01: clamp01\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utils/math.js?");

/***/ })

/******/ });