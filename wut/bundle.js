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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventListener_1 = __webpack_require__(1);
var ElementBase = (function () {
    function ElementBase() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.lineWidth = 1;
        this.borderColor = '';
        this.background = '';
        this.cursor = '';
        this.parent = null;
        this.mixins = {};
    }
    ElementBase.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
    };
    ElementBase.prototype.on = function (eventName, callback) {
        var _this = this;
        EventListener_1.default.on(eventName, function (event, target) {
            if (target !== _this)
                return;
            callback(event);
        });
        return this;
    };
    ElementBase.prototype.fire = function (eventName, event, target) {
        EventListener_1.default.fire(eventName, event, target);
    };
    ElementBase.prototype.use = function (mixin) {
        var name = mixin.name.toLowerCase();
        this.mixins[name] = new mixin(this);
        return this;
    };
    return ElementBase;
}());
exports.default = ElementBase;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventListener = (function () {
    function EventListener() {
    }
    EventListener.on = function (eventName, callback, toFirst) {
        if (toFirst === void 0) { toFirst = true; }
        if (!this.eventListeners.has(eventName)) {
            this.eventListeners.set(eventName, []);
        }
        if (toFirst) {
            this.eventListeners.get(eventName).unshift(callback);
        }
        else {
            this.eventListeners.get(eventName).push(callback);
        }
        return this;
    };
    EventListener.fire = function (eventName, event, target) {
        var callbacks = this.eventListeners.get(eventName);
        if (!callbacks)
            return;
        callbacks.forEach(function (callback) { return callback(event, target); });
    };
    EventListener.eventListeners = new Map();
    return EventListener;
}());
exports.default = EventListener;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(13));
__export(__webpack_require__(14));
__export(__webpack_require__(15));
__export(__webpack_require__(16));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(11));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(17));
__export(__webpack_require__(18));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PluginBase = (function () {
    function PluginBase() {
        this.isEnabled = true;
    }
    PluginBase.prototype.disable = function () {
        this.isEnabled = false;
    };
    PluginBase.prototype.enable = function () {
        this.isEnabled = true;
    };
    return PluginBase;
}());
exports.default = PluginBase;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stats_1 = __webpack_require__(7);
var src_1 = __webpack_require__(3);
var circles_1 = __webpack_require__(12);
var animation_1 = __webpack_require__(19);
var draggable_resiazable_1 = __webpack_require__(20);
var fps = 30;
var selectedDemoIdx = 0;
var demos = [
    {
        name: 'Circle anim',
        demo: circles_1.default
    },
    {
        name: 'Draggable Resizable',
        demo: draggable_resiazable_1.default
    },
    {
        name: 'Animation plugin',
        demo: animation_1.default
    }
];
var getDemo = function () { return demos[selectedDemoIdx].demo; };
var selectDemo = function (idx) {
    getDemo().destroy();
    selectedDemoIdx = idx;
    getDemo().init();
};
window['selectDemo'] = selectDemo;
var menu = document.getElementById('menu');
menu.innerHTML = demos.map(function (_a, idx) {
    var name = _a.name;
    return ("<button onclick=\"selectDemo(" + idx + ")\">" + name + "</button>");
}).join('');
// STATS
var stats = new Stats_1.default();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.dom.style.left = 'inherit';
stats.dom.style.top = 'inherit';
stats.dom.style.right = '0';
stats.dom.style.bottom = '0';
document.body.appendChild(stats.dom);
//
// CRATE NODE
var rootNode = document.getElementById('app');
// INIT RENDERER
var renderer = src_1.GraphicEngine.init('canvas');
renderer.appendTo(rootNode);
renderer.setSize(1000, 900);
// main render function
var render = function (timestamp) {
    stats.begin();
    renderer.clear();
    getDemo().render(timestamp, renderer);
    stats.end();
    //requestAnimationFrame(render);
};
var createRenderTimer = function () { return setInterval(function () {
    render(Date.now());
}, 1000 / fps); };
var thisRenderTimerIdx = createRenderTimer();
//requestAnimationFrame(render);
var FizzyText = function () {
    this.maxFps = fps;
};
var text = new FizzyText();
var gui = new window['dat'].GUI();
gui.add(text, 'maxFps', 1, 100).onChange(function (value) {
    fps = value;
    clearInterval(thisRenderTimerIdx);
    thisRenderTimerIdx = createRenderTimer();
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

var Stats = function () {

	var mode = 0;

	var container = document.createElement( 'div' );
	container.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';
	container.addEventListener( 'click', function ( event ) {

		event.preventDefault();
		showPanel( ++ mode % container.children.length );

	}, false );

	//

	function addPanel( panel ) {

		container.appendChild( panel.dom );
		return panel;

	}

	function showPanel( id ) {

		for ( var i = 0; i < container.children.length; i ++ ) {

			container.children[ i ].style.display = i === id ? 'block' : 'none';

		}

		mode = id;

	}

	//

	var beginTime = ( performance || Date ).now(), prevTime = beginTime, frames = 0;

	var fpsPanel = addPanel( new Stats.Panel( 'FPS', '#0ff', '#002' ) );
	var msPanel = addPanel( new Stats.Panel( 'MS', '#0f0', '#020' ) );

	if ( self.performance && self.performance.memory ) {

		var memPanel = addPanel( new Stats.Panel( 'MB', '#f08', '#201' ) );

	}

	showPanel( 0 );

	return {

		REVISION: 16,

		dom: container,

		addPanel: addPanel,
		showPanel: showPanel,

		begin: function () {

			beginTime = ( performance || Date ).now();

		},

		end: function () {

			frames ++;

			var time = ( performance || Date ).now();

			msPanel.update( time - beginTime, 200 );

			if ( time > prevTime + 1000 ) {

				fpsPanel.update( ( frames * 1000 ) / ( time - prevTime ), 100 );

				prevTime = time;
				frames = 0;

				if ( memPanel ) {

					var memory = performance.memory;
					memPanel.update( memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 );

				}

			}

			return time;

		},

		update: function () {

			beginTime = this.end();

		},

		// Backwards Compatibility

		domElement: container,
		setMode: showPanel

	};

};

Stats.Panel = function ( name, fg, bg ) {

	var min = Infinity, max = 0, round = Math.round;
	var PR = round( window.devicePixelRatio || 1 );

	var WIDTH = 80 * PR, HEIGHT = 48 * PR,
			TEXT_X = 3 * PR, TEXT_Y = 2 * PR,
			GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,
			GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;

	var canvas = document.createElement( 'canvas' );
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.cssText = 'width:80px;height:48px';

	var context = canvas.getContext( '2d' );
	context.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';
	context.textBaseline = 'top';

	context.fillStyle = bg;
	context.fillRect( 0, 0, WIDTH, HEIGHT );

	context.fillStyle = fg;
	context.fillText( name, TEXT_X, TEXT_Y );
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	context.fillStyle = bg;
	context.globalAlpha = 0.9;
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	return {

		dom: canvas,

		update: function ( value, maxValue ) {

			min = Math.min( min, value );
			max = Math.max( max, value );

			context.fillStyle = bg;
			context.globalAlpha = 1;
			context.fillRect( 0, 0, WIDTH, GRAPH_Y );
			context.fillStyle = fg;
			context.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );

			context.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );

			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );

			context.fillStyle = bg;
			context.globalAlpha = 0.9;
			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );

		}

	};

};




/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasAdapter_1 = __webpack_require__(9);
var GraphicEngine = (function () {
    function GraphicEngine() {
    }
    GraphicEngine.init = function (rendererId) {
        if (rendererId === void 0) { rendererId = 'canvas'; }
        if (rendererId === 'canvas')
            return new CanvasAdapter_1.default();
        throw Error('Unknown renderer');
    };
    return GraphicEngine;
}());
exports.GraphicEngine = GraphicEngine;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasEventsListener_1 = __webpack_require__(10);
var EventListener_1 = __webpack_require__(1);
var CanvasAdapter = (function () {
    function CanvasAdapter() {
        this.elementNode = null;
        this.canvasNode = null;
        this.ctx = null;
        this.cache = [];
        this.antiAliasing = false;
    }
    CanvasAdapter.prototype.createCanvas = function () {
        this.canvasNode = document.createElement('canvas');
        this.elementNode.appendChild(this.canvasNode);
    };
    CanvasAdapter.prototype.initContext = function () {
        this.ctx = this.canvasNode.getContext('2d');
    };
    CanvasAdapter.prototype.appendTo = function (elementNode) {
        this.elementNode = elementNode;
        this.createCanvas();
        this.initContext();
        this.autoSize();
        this.eventListener = new CanvasEventsListener_1.default(this.canvasNode, this.cache);
        this.bindEvents();
        return this;
    };
    CanvasAdapter.prototype.bindEvents = function () {
        var _this = this;
        EventListener_1.default.on('mousemove', function (event, element) {
            _this.setCursor(element.cursor);
        });
        EventListener_1.default.on('mouseleave', function (event, element) {
            _this.setCursor(element.cursor);
        });
    };
    CanvasAdapter.prototype.autoSize = function () {
        var _a = this.elementNode.getBoundingClientRect(), width = _a.width, height = _a.height;
        this.setSize(width, height);
    };
    CanvasAdapter.prototype.setSize = function (width, height) {
        this.canvasNode.width = width;
        this.canvasNode.height = height;
        return this;
    };
    CanvasAdapter.prototype.setCursor = function (cursor) {
        this.canvasNode.style.cursor = cursor;
    };
    CanvasAdapter.prototype.draw = function (element, i) {
        this.cache.push(element);
        switch (element.type) {
            case 'circle': return this.drawCircle(element);
            case 'text': return this.drawText(element);
            case 'rect': return this.drawRect(element);
            case 'group': return element.children.forEach(this.draw, this);
        }
    };
    CanvasAdapter.prototype.drawRect = function (_a) {
        var x = _a.x, y = _a.y, background = _a.background, borderColor = _a.borderColor, width = _a.width, height = _a.height;
        if (!this.antiAliasing) {
            x += .5;
            y += .5;
        }
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        if (background !== '') {
            this.ctx.fillStyle = background;
            this.ctx.fill();
        }
        if (borderColor !== '') {
            this.ctx.strokeStyle = borderColor;
            this.ctx.storke();
        }
    };
    CanvasAdapter.prototype.drawText = function (_a) {
        var x = _a.x, y = _a.y, text = _a.text, color = _a.color, font = _a.font, fontSize = _a.fontSize, align = _a.align;
        this.ctx.beginPath();
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        if (align) {
            var textSize = this.ctx.measureText(text);
            if (align === 'center') {
                x -= textSize.width / 2;
                y += fontSize / 2;
            }
        }
        this.ctx.fillText(text, x, y);
    };
    CanvasAdapter.prototype.drawCircle = function (_a) {
        var x = _a.x, y = _a.y, radius = _a.radius, background = _a.background, lineWidth = _a.lineWidth, borderColor = _a.borderColor;
        if (!this.antiAliasing) {
            x += .5;
            y += .5;
        }
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        this.ctx.lineWidth = lineWidth;
        if (background !== '') {
            this.ctx.fillStyle = background;
            this.ctx.fill();
        }
        if (borderColor !== '') {
            this.ctx.strokeStyle = borderColor;
            this.ctx.storke();
        }
        this.ctx.closePath();
    };
    CanvasAdapter.prototype.clear = function () {
        this.cache.length = 0;
        this.ctx.clearRect(0, 0, this.canvasNode.width, this.canvasNode.height);
    };
    return CanvasAdapter;
}());
exports.default = CanvasAdapter;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventListener_1 = __webpack_require__(1);
var CanvasEventsListener = (function () {
    function CanvasEventsListener(canvasNode, cache) {
        this.eventsForWatch = ['mousemove', 'click', 'mouseup', 'mousedown'];
        this.prevTarget = null;
        this.canvasNode = canvasNode;
        this.cache = cache;
        this.bindEventsListeners();
    }
    CanvasEventsListener.prototype.xray = function (_a, pointX, pointY) {
        var type = _a.type, x = _a.x, y = _a.y, radius = _a.radius, width = _a.width, height = _a.height;
        if (type === 'rect') {
            return ((pointX >= x && pointX <= x + width) &&
                (pointY >= y && pointY <= y + height));
        }
        if (type === 'circle') {
            return (Math.pow(pointX - x, 2) + Math.pow(pointY - y, 2) <= Math.pow(radius + 1, 2));
        }
        return false;
    };
    CanvasEventsListener.prototype.fireEvent = function (eventName, event, element) {
        if (this.prevTarget !== null && this.prevTarget !== element) {
            EventListener_1.default.fire('mouseleave', event, this.prevTarget);
        }
        if (this.prevTarget !== element) {
            console.log('mouseenter', this.prevTarget, element);
            EventListener_1.default.fire('mouseenter', event, element);
        }
        this.prevTarget = element;
        EventListener_1.default.fire(eventName, event, element);
        if (element.type === 'group') {
            element.children.forEach(function (el) { return EventListener_1.default.fire(eventName, event, el); });
        }
    };
    CanvasEventsListener.prototype.eventHandler = function (eventName, event, root, isGroup) {
        if (root === void 0) { root = this.cache; }
        if (isGroup === void 0) { isGroup = false; }
        var elementsOnCursor = [];
        for (var _i = 0, root_1 = root; _i < root_1.length; _i++) {
            var element = root_1[_i];
            if (element.type === 'group') {
                if (this.eventHandler(eventName, event, element.children, true)) {
                    //this.fireEvent(eventName, event, element);
                    elementsOnCursor.push(element);
                }
                continue;
            }
            if (this.xray(element, event.offsetX, event.offsetY)) {
                //this.fireEvent(eventName, event, element);
                elementsOnCursor.push(element);
            }
        }
        event.canvasTarget = null;
        for (var i = 0; i < elementsOnCursor.length; i++) {
            if (event.canvasTarget === null || event.canvasTarget.z < elementsOnCursor[i].z) {
                event.canvasTarget = elementsOnCursor[i];
            }
        }
        if (event.canvasTarget !== null) {
            if (isGroup) {
                return true;
            }
            else {
                this.fireEvent(eventName, event, event.canvasTarget);
            }
        }
        else if (this.prevTarget !== null && !isGroup) {
            event.canvasTarget = this.prevTarget;
            EventListener_1.default.fire('mouseleave', event, this.prevTarget);
            this.prevTarget = null;
        }
        return false;
    };
    CanvasEventsListener.prototype.bindEventsListeners = function () {
        var _this = this;
        this.eventsForWatch.forEach(function (eventName) {
            var handler = _this.eventHandler.bind(_this, eventName);
            _this.canvasNode.addEventListener(eventName, handler, false);
        });
    };
    return CanvasEventsListener;
}());
exports.default = CanvasEventsListener;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ANIMATION_SPEED = {
    'slow': 1500,
    'fast': 100
};
var PARSE_ANIMATION_VALUE_REGEXP = /([\+\-\=]?)(\d*\.?\d*)(px|%|)/i;
var activeAnimations = new Map();
var Step = (function () {
    function Step(config, time) {
        if (time === void 0) { time = 750; }
        this.transofrms = [];
        var keys = Object.keys(config);
        keys.forEach(function (attribute) {
            var actionType = 'attribute';
            var attributeValue = config[attribute];
            var _a = PARSE_ANIMATION_VALUE_REGEXP.exec(attributeValue), _ = _a[0], _b = _a[1], modificationType = _b === void 0 ? '=' : _b;
            /*this.transofrms.push({
                modificationType,
                actionType,
                attribute,
                value,
                time
            });*/
        });
    }
    return Step;
}());
var AnimationCreator = (function () {
    function AnimationCreator(callback, time) {
        this.steps = [];
        this.activeAnimations = [];
        if (callback) {
            this.step(callback, time);
        }
    }
    AnimationCreator.prototype.step = function (config, time) {
        var _this = this;
        if (typeof config === 'object') {
            var keys = Object.keys(config);
            keys.forEach(function (attribute) {
                var actionType = 'attribute';
                var attributeValue = config[attribute];
                var _a = PARSE_ANIMATION_VALUE_REGEXP.exec(attributeValue), _ = _a[0], _b = _a[1], modificationType = _b === void 0 ? '=' : _b, value = _a[2], _c = _a[3], valueFormat = _c === void 0 ? 'px' : _c;
                _this.steps.push({
                    modificationType: modificationType,
                    actionType: actionType,
                    valueFormat: valueFormat,
                    attribute: attribute,
                    value: value,
                    time: time
                });
            });
        }
    };
    AnimationCreator.prototype.end = function () {
        return this.animationHandler.bind(this);
    };
    AnimationCreator.prototype.animationHandler = function (_a) {
        var canvasTarget = _a.canvasTarget;
        var fps = 60;
        if (!activeAnimations.has(canvasTarget)) {
            activeAnimations.set(canvasTarget, []);
        }
        var animations = activeAnimations.get(canvasTarget);
        animations.forEach(function (id) { return clearInterval(id); });
        animations.length = 0;
        this.steps.forEach(function (_a) {
            var modificationType = _a.modificationType, actionType = _a.actionType, valueFormat = _a.valueFormat, attribute = _a.attribute, value = _a.value, time = _a.time;
            var endValue = canvasTarget[attribute];
            var animationStepValue = value / (time / fps);
            if (modificationType === '+')
                endValue += parseInt(value);
            if (modificationType === '-')
                endValue -= value;
            if (modificationType === '=') {
                endValue = value;
                animationStepValue = (value - canvasTarget[attribute]) / (time / fps);
            }
            var activeAnimationId = 0;
            var interval = setInterval(function () {
                var isAnimationCompleted = ((canvasTarget[attribute] > endValue && modificationType === '+') ||
                    (canvasTarget[attribute] <= endValue && modificationType === '-'));
                if (isAnimationCompleted) {
                    clearInterval(interval);
                    animations.splice(activeAnimationId, 1);
                }
                else {
                    if (modificationType === '+') {
                        canvasTarget[attribute] += animationStepValue;
                    }
                    else {
                        canvasTarget[attribute] -= animationStepValue;
                    }
                }
            }, 1000 / fps);
            activeAnimationId = animations.push(interval);
        });
    };
    return AnimationCreator;
}());
exports.Animation = function (config, delay) { return new AnimationCreator(config, delay); };
exports.default = exports.Animation;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Elements_1 = __webpack_require__(2);
var Plugins_1 = __webpack_require__(4);
var getTimeColor = function (timestamp) {
    var color = Math.round((Math.sin(timestamp / 0xFF5) + 1) / 2 * 358);
    return "hsl(" + color + ", 50%, 50%)";
};
// generate primitives
var circleList = new Map();
var textList = new Map();
var groupList = new Map();
var frozenElements = new Set();
var cols = 10;
var rows = 10;
var _loop_1 = function (i) {
    var x = (i % cols) * 60 + 40;
    var y = 60 * Math.ceil(i / cols);
    var circle = new Elements_1.Circle();
    var text = new Elements_1.Text();
    var group = new Elements_1.Group();
    group.add(circle);
    group.add(text);
    group.use(Plugins_1.Draggable);
    text.text = "" + i;
    text.align = 'center';
    text.fontSize = 20;
    text.moveTo(x + 3, y + 3);
    circle.moveTo(x, y);
    circle.on('click', function () {
        if (frozenElements.has(circle)) {
            frozenElements.delete(circle);
        }
        else {
            frozenElements.add(circle);
        }
    });
    circleList.set(i, circle);
    textList.set(i, text);
    groupList.set(i, group);
};
// gen circle
for (var i = 1; i <= cols * rows; i++) {
    _loop_1(i);
}
var mousePos = [0, 0];
// main render function
var render = function (timestamp, renderer) {
    circleList.forEach(function (circle, i) {
        if (frozenElements.has(circle))
            return;
        var radius = (Math.sin(timestamp / 1000 + i) + 1) * 10 + 10;
        circle.background = getTimeColor(timestamp + i * 1000);
        circle.radius = Math.round(radius);
        if (Math.abs(circle.x - mousePos[0]) + Math.abs(circle.y - mousePos[1]) < 120) {
            circle.radius += 10;
        }
        var text = textList.get(i);
        text.fontSize = circle.radius;
        text.x = circle.x;
        text.y = circle.y;
    });
    groupList.forEach(renderer.draw, renderer);
};
var globalMouseMove = function (e) {
    mousePos[0] = e.clientX;
    mousePos[1] = e.clientY;
};
exports.default = {
    init: function () {
        document.addEventListener('mousemove', globalMouseMove, false);
    },
    destroy: function () {
        document.removeEventListener('mousemove', globalMouseMove, false);
    },
    render: render
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ElementBase_1 = __webpack_require__(0);
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = 5;
        _this.type = 'circle';
        return _this;
    }
    return Circle;
}(ElementBase_1.default));
exports.Circle = Circle;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ElementBase_1 = __webpack_require__(0);
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = '';
        _this.type = 'text';
        _this.font = '14px Georgia';
        _this._fontSize = 14;
        _this._fontName = 'Georgia';
        _this.align = '';
        _this.color = '#fff';
        return _this;
    }
    Object.defineProperty(Text.prototype, "fontName", {
        get: function () {
            return this._fontName;
        },
        set: function (value) {
            this.font = this.buildFont(this._fontSize, value);
            this._fontName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (value) {
            this.font = this.buildFont(value, this._fontName);
            this._fontSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Text.prototype.buildFont = function (fontSize, fontName) {
        return fontSize + "px " + fontName;
    };
    return Text;
}(ElementBase_1.default));
exports.Text = Text;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ElementBase_1 = __webpack_require__(0);
var Group = (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        _this.type = 'group';
        return _this;
    }
    Group.prototype.add = function (element) {
        this.children.push(element);
        element.parent = this;
        return this;
    };
    return Group;
}(ElementBase_1.default));
exports.Group = Group;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ElementBase_1 = __webpack_require__(0);
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 10;
        _this.height = 10;
        _this.type = 'rect';
        return _this;
    }
    return Rect;
}(ElementBase_1.default));
exports.Rect = Rect;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MixinBase_1 = __webpack_require__(5);
var draggedElements = new Set();
var startDragPositions = new Map();
var startDrag = function (element, e) {
    startDragPositions.set(element, [e.clientX, e.clientY]);
    draggedElements.add(element);
};
var stopDrag = function (element) {
    draggedElements.delete(element);
    startDragPositions.delete(element);
};
var moveElement = function (element, dx, dy) {
    if (element.type === 'group') {
        element.children.forEach(function (el) { return moveElement(el, dx, dy); });
        return;
    }
    element.x += dx;
    element.y += dy;
};
var drag = function (element, e) {
    var _a = startDragPositions.get(element), x = _a[0], y = _a[1];
    var dx = e.clientX - x;
    var dy = e.clientY - y;
    startDragPositions.set(element, [e.clientX, e.clientY]);
    moveElement(element, dx, dy);
};
document.addEventListener('mousemove', function (e) {
    draggedElements.forEach(function (element) {
        if (!element.mixins.draggable.isEnabled)
            return;
        if (e.buttons === 0) {
            draggedElements.delete(element);
        }
        if (draggedElements.has(element)) {
            drag(element, e);
        }
    });
});
var Draggable = (function (_super) {
    __extends(Draggable, _super);
    function Draggable(element) {
        var _this = _super.call(this) || this;
        element.on('mousedown', startDrag.bind(_this, element));
        element.on('mouseup', stopDrag.bind(_this, element));
        return _this;
    }
    return Draggable;
}(MixinBase_1.default));
exports.Draggable = Draggable;
exports.default = Draggable;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MixinBase_1 = __webpack_require__(5);
var resizeAreaSize = 10;
var DIRECTION = {
    NONE: 0,
    LEFT: 2,
    TOP: 4,
    RIGHT: 8,
    BOTTOM: 16
};
var resizableElement = null;
var resizeDirection = DIRECTION.NONE;
var resizeStartPosition = [];
var changeOffsetSizeAndPos = function (element, offsetWidth, offsetHeight, offsetX, offsetY) {
    if (offsetX === void 0) { offsetX = 0; }
    if (offsetY === void 0) { offsetY = 0; }
    if (element.type === 'group') {
        element.children.forEach(function (el) { return changeOffsetSizeAndPos(el, offsetWidth, offsetHeight, offsetX, offsetY); });
        return;
    }
    element.width += offsetWidth;
    element.height += offsetHeight;
    element.x += offsetX;
    element.y += offsetY;
};
document.addEventListener('mouseup', function () {
    if (resizableElement !== null && resizableElement.mixins.draggable) {
        resizableElement.mixins.draggable.enable();
    }
    resizableElement = null;
}, false);
document.addEventListener('mousemove', function (_a) {
    var offsetX = _a.offsetX, offsetY = _a.offsetY;
    if (resizableElement !== null) {
        var x = resizeStartPosition[0], y = resizeStartPosition[1];
        if (resizeDirection & DIRECTION.RIGHT) {
            changeOffsetSizeAndPos(resizableElement, offsetX - x, 0);
        }
        else if (resizeDirection & DIRECTION.LEFT) {
            changeOffsetSizeAndPos(resizableElement, x - offsetX, 0, offsetX - x);
        }
        if (resizeDirection & DIRECTION.BOTTOM) {
            changeOffsetSizeAndPos(resizableElement, 0, offsetY - y);
        }
        else if (resizeDirection & DIRECTION.TOP) {
            changeOffsetSizeAndPos(resizableElement, 0, y - offsetY, 0, offsetY - y);
        }
        resizeStartPosition[0] = offsetX;
        resizeStartPosition[1] = offsetY;
        return;
    }
}, false);
var getDirection = function (_a, cursorX, cursorY) {
    var width = _a.width, height = _a.height, x = _a.x, y = _a.y, type = _a.type, children = _a.children;
    var direction = DIRECTION.NONE;
    if (type === 'group') {
        children.forEach(function (el) {
            var direct = getDirection(el, cursorX, cursorY);
            if (direct !== DIRECTION.NONE) {
                direction = direct;
            }
        });
    }
    if (type === 'rect') {
        if (cursorX >= (x + width - resizeAreaSize) && cursorX <= x + width) {
            direction |= DIRECTION.RIGHT;
        }
        else if (cursorX > x && cursorX <= x + resizeAreaSize) {
            direction |= DIRECTION.LEFT;
        }
        if (cursorY >= (y + height - resizeAreaSize) && cursorY <= y + height) {
            direction |= DIRECTION.BOTTOM;
        }
        else if (cursorY >= y && cursorY <= y + resizeAreaSize) {
            direction |= DIRECTION.TOP;
        }
    }
    return direction;
};
var Resizable = (function (_super) {
    __extends(Resizable, _super);
    function Resizable(element) {
        var _this = _super.call(this) || this;
        element.on('mousedown', function (e) {
            var direction = getDirection(e.canvasTarget, e.offsetX, e.offsetY);
            if (e.buttons > 0 && direction !== DIRECTION.NONE) {
                if (element.mixins.draggable) {
                    element.mixins.draggable.disable();
                }
                resizeDirection = direction;
                resizableElement = element;
                resizeStartPosition = [e.offsetX, e.offsetY];
            }
        });
        element.on('mousemove', function (_a) {
            var offsetX = _a.offsetX, offsetY = _a.offsetY, canvasTarget = _a.canvasTarget;
            if (resizableElement !== null)
                return;
            var direction = getDirection(canvasTarget, offsetX, offsetY);
            var cursor = '';
            if (direction & DIRECTION.LEFT)
                cursor = 'w-resize';
            if (direction & DIRECTION.RIGHT)
                cursor = 'w-resize';
            if (direction & DIRECTION.TOP)
                cursor = 's-resize';
            if (direction & DIRECTION.BOTTOM)
                cursor = 's-resize';
            if (direction === DIRECTION.BOTTOM + DIRECTION.LEFT)
                cursor = 'nesw-resize';
            if (direction === DIRECTION.BOTTOM + DIRECTION.RIGHT)
                cursor = 'nwse-resize';
            if (direction === DIRECTION.TOP + DIRECTION.LEFT)
                cursor = 'nwse-resize';
            if (direction === DIRECTION.TOP + DIRECTION.RIGHT)
                cursor = 'nesw-resize';
            element.cursor = cursor;
        });
        element.on('mouseleave', function (e) {
            element.cursor = '';
        });
        return _this;
    }
    return Resizable;
}(MixinBase_1.default));
exports.Resizable = Resizable;
exports.default = Resizable;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Elements_1 = __webpack_require__(2);
var src_1 = __webpack_require__(3);
var groupList = new Map();
var circle = new Elements_1.Circle();
circle.radius = 20;
circle.background = '#5a0';
circle.moveTo(700, 400);
circle.on('mouseenter', src_1.Animation({
    radius: '+15'
}, 1500).end());
circle.on('mouseleave', src_1.Animation({
    radius: '-15'
}, 1500).end());
groupList.set('123', circle);
//
exports.default = {
    init: function () { },
    destroy: function () { },
    render: function (_, renderer) { return groupList.forEach(renderer.draw, renderer); }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Elements_1 = __webpack_require__(2);
var Plugins_1 = __webpack_require__(4);
var getTimeColor = function (timestamp) {
    var color = Math.round((Math.sin(timestamp / 0xFF5) + 1) / 2 * 358);
    return "hsl(" + color + ", 50%, 50%)";
};
// generate primitives
var circleList = new Map();
var textList = new Map();
var groupList = new Map();
var frozenElements = new Set();
var id = 1;
for (var x = 1; x <= 2; x++) {
    for (var y = 1; y <= 2; y++) {
        var g = new Elements_1.Group();
        g.z = 1;
        var rect = new Elements_1.Rect();
        rect.x = 600 + x * 80;
        rect.y = 50 + y * 80;
        rect.width = 50;
        rect.height = 50;
        rect.background = getTimeColor((id + 1) * 3254);
        var text = new Elements_1.Text();
        text.fontSize = 25;
        text.text = "" + id;
        text.align = 'center';
        text.x = rect.x + 25;
        text.y = rect.y + 24;
        g
            .use(Plugins_1.Resizable)
            .use(Plugins_1.Draggable)
            .add(rect)
            .add(text);
        groupList.set('r' + id, g);
        id++;
    }
}
var mousePos = [0, 0];
// main render function
var render = function (timestamp, renderer) {
    circleList.forEach(function (circle, i) {
        if (frozenElements.has(circle))
            return;
        var radius = (Math.sin(timestamp / 1000 + i) + 1) * 10 + 10;
        circle.background = getTimeColor(timestamp + i * 1000);
        circle.radius = Math.round(radius);
        if (Math.abs(circle.x - mousePos[0]) + Math.abs(circle.y - mousePos[1]) < 120) {
            circle.radius += 10;
        }
        var text = textList.get(i);
        text.fontSize = circle.radius;
        text.x = circle.x;
        text.y = circle.y;
    });
    groupList.forEach(renderer.draw, renderer);
};
exports.default = {
    init: function () { },
    destroy: function () { },
    render: render
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTA5MzE1YzZlMTFiNTIwZDA4ZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL0VsZW1lbnRCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9FdmVudExpc3RlbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvTWl4aW5CYXNlLnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0YXRzLmpzL3NyYy9TdGF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JhcGhpY0VuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNBZGFwdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BZGFwdGVycy9DYW52YXNBZGFwdGVyL0NhbnZhc0V2ZW50c0xpc3RlbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvY2lyY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvQ2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50cy9UZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50cy9Hcm91cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvUmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGx1Z2lucy9EcmFnZ2FibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvUmVzaXphYmxlLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kcmFnZ2FibGVfcmVzaWF6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LEVBQUUsY0FBTyxDQUFDO0lBQ2pCLE1BQU07Q0FDVCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUwOTMxNWM2ZTExYjUyMGQwOGVlIiwiaW1wb3J0IEV2ZW50TGlzdGVuZXIgZnJvbSAnLi4vRXZlbnRMaXN0ZW5lcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudEJhc2Uge1xuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB6OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDE7XG4gICAgcHVibGljIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgYmFja2dyb3VuZDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGN1cnNvcjogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBwYXJlbnQgPSBudWxsO1xuICAgIHB1YmxpYyByZWFkb25seSBtaXhpbnMgPSB7fTtcblxuICAgIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuXG4gICAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBFdmVudExpc3RlbmVyLm9uKGV2ZW50TmFtZSwgKGV2ZW50LCB0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IHRoaXMpIHJldHVybjtcblxuICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmlyZShldmVudE5hbWU6IHN0cmluZywgZXZlbnQ6IEV2ZW50LCB0YXJnZXQ6IGFueSkge1xuICAgICAgICBFdmVudExpc3RlbmVyLmZpcmUoZXZlbnROYW1lLCBldmVudCwgdGFyZ2V0KTtcbiAgICB9XG5cblxuICAgIHVzZShtaXhpbikge1xuICAgICAgICBjb25zdCBuYW1lID0gbWl4aW4ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLm1peGluc1tuYW1lXSA9IG5ldyBtaXhpbih0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsZW1lbnRzL0VsZW1lbnRCYXNlLnRzIiwiY2xhc3MgRXZlbnRMaXN0ZW5lciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZXZlbnRMaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG5cbiAgICBzdGF0aWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgdG9GaXJzdDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzLmhhcyhldmVudE5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNldChldmVudE5hbWUsIFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b0ZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmdldChldmVudE5hbWUpLnVuc2hpZnQoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnROYW1lKS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZmlyZShldmVudE5hbWU6IHN0cmluZywgZXZlbnQ6IEV2ZW50LCB0YXJnZXQ6IGFueSkge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuO1xuXG4gICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKGV2ZW50LCB0YXJnZXQpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TGlzdGVuZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0V2ZW50TGlzdGVuZXIudHMiLCJleHBvcnQgKiBmcm9tICcuL0NpcmNsZSc7XG5leHBvcnQgKiBmcm9tICcuL1RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9Hcm91cCc7XG5leHBvcnQgKiBmcm9tICcuL1JlY3QnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vR3JhcGhpY0VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL0FuaW1hdGlvbic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9EcmFnZ2FibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9SZXNpemFibGUnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QbHVnaW5zL2luZGV4LnRzIiwiXG5jbGFzcyBQbHVnaW5CYXNlIHtcbiAgICBwdWJsaWMgaXNFbmFibGVkID0gdHJ1ZTtcblxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsdWdpbkJhc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1BsdWdpbnMvTWl4aW5CYXNlLnRzIiwiaW1wb3J0IFN0YXRzIGZyb20gJ3N0YXRzLmpzL3NyYy9TdGF0cyc7XG5pbXBvcnQgeyBHcmFwaGljRW5naW5lIH0gZnJvbSAnLi9zcmMnO1xuaW1wb3J0IGNpcmNsZURlbW8gZnJvbSAnLi9leGFtcGxlcy9jaXJjbGVzJztcbmltcG9ydCBhbmltRGVtbyBmcm9tICcuL2V4YW1wbGVzL2FuaW1hdGlvbic7XG5pbXBvcnQgZHJhZ2FibGVSZXNpemFibGVEZW1vIGZyb20gJy4vZXhhbXBsZXMvZHJhZ2dhYmxlX3Jlc2lhemFibGUnO1xuXG5cbmxldCBmcHMgPSAzMDtcbmxldCBzZWxlY3RlZERlbW9JZHggPSAwO1xuY29uc3QgZGVtb3MgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2lyY2xlIGFuaW0nLFxuICAgICAgICBkZW1vOiBjaXJjbGVEZW1vXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdEcmFnZ2FibGUgUmVzaXphYmxlJyxcbiAgICAgICAgZGVtbzogZHJhZ2FibGVSZXNpemFibGVEZW1vXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdBbmltYXRpb24gcGx1Z2luJyxcbiAgICAgICAgZGVtbzogYW5pbURlbW9cbiAgICB9XG5dO1xuXG5jb25zdCBnZXREZW1vID0gKCk9PiBkZW1vc1tzZWxlY3RlZERlbW9JZHhdLmRlbW87XG5cbmNvbnN0IHNlbGVjdERlbW8gPSBpZHggPT4ge1xuICAgIGdldERlbW8oKS5kZXN0cm95KCk7XG4gICAgc2VsZWN0ZWREZW1vSWR4ID0gaWR4O1xuICAgIGdldERlbW8oKS5pbml0KCk7XG59O1xuXG53aW5kb3dbJ3NlbGVjdERlbW8nXSA9IHNlbGVjdERlbW87XG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xubWVudS5pbm5lckhUTUwgPSBkZW1vcy5tYXAoKHsgbmFtZSB9LCBpZHgpID0+IChcbiAgICBgPGJ1dHRvbiBvbmNsaWNrPVwic2VsZWN0RGVtbygke2lkeH0pXCI+JHtuYW1lfTwvYnV0dG9uPmBcbikpLmpvaW4oJycpO1xuXG5cbi8vIFNUQVRTXG5jb25zdCBzdGF0cyA9IG5ldyBTdGF0cygpO1xuc3RhdHMuc2hvd1BhbmVsKCAwICk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG5zdGF0cy5kb20uc3R5bGUubGVmdCA9ICdpbmhlcml0JztcbnN0YXRzLmRvbS5zdHlsZS50b3AgPSAnaW5oZXJpdCc7XG5zdGF0cy5kb20uc3R5bGUucmlnaHQgPSAnMCc7XG5zdGF0cy5kb20uc3R5bGUuYm90dG9tID0gJzAnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggc3RhdHMuZG9tICk7XG4vL1xuXG4vLyBDUkFURSBOT0RFXG5jb25zdCByb290Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuLy8gSU5JVCBSRU5ERVJFUlxuY29uc3QgcmVuZGVyZXIgPSBHcmFwaGljRW5naW5lLmluaXQoJ2NhbnZhcycpO1xucmVuZGVyZXIuYXBwZW5kVG8ocm9vdE5vZGUpO1xucmVuZGVyZXIuc2V0U2l6ZSgxMDAwLCA5MDApO1xuXG5cbi8vIG1haW4gcmVuZGVyIGZ1bmN0aW9uXG5jb25zdCByZW5kZXIgPSB0aW1lc3RhbXAgPT4ge1xuICAgIHN0YXRzLmJlZ2luKCk7XG4gICAgcmVuZGVyZXIuY2xlYXIoKTtcbiAgICBnZXREZW1vKCkucmVuZGVyKHRpbWVzdGFtcCwgcmVuZGVyZXIpO1xuXG4gICAgc3RhdHMuZW5kKCk7XG4gICAgLy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn07XG5cblxuY29uc3QgY3JlYXRlUmVuZGVyVGltZXIgPSAoKT0+IHNldEludGVydmFsKCgpID0+IHtcbiAgICByZW5kZXIoRGF0ZS5ub3coKSk7XG59LCAxMDAwIC8gZnBzKTtcblxuXG5sZXQgdGhpc1JlbmRlclRpbWVySWR4ID0gY3JlYXRlUmVuZGVyVGltZXIoKTtcbi8vcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cblxuY29uc3QgRml6enlUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXhGcHMgPSBmcHM7XG59O1xuXG5jb25zdCB0ZXh0ID0gbmV3IEZpenp5VGV4dCgpO1xuY29uc3QgZ3VpID0gbmV3IHdpbmRvd1snZGF0J10uR1VJKCk7XG5cbmd1aS5hZGQodGV4dCwgJ21heEZwcycsIDEsIDEwMCkub25DaGFuZ2UoZnVuY3Rpb24odmFsdWUpIHtcbiAgICBmcHMgPSB2YWx1ZTtcbiAgICBjbGVhckludGVydmFsKHRoaXNSZW5kZXJUaW1lcklkeCk7XG4gICAgdGhpc1JlbmRlclRpbWVySWR4ID0gY3JlYXRlUmVuZGVyVGltZXIoKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4udHMiLCIvKipcbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb20vXG4gKi9cblxudmFyIFN0YXRzID0gZnVuY3Rpb24gKCkge1xuXG5cdHZhciBtb2RlID0gMDtcblxuXHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0Y29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC45O3otaW5kZXg6MTAwMDAnO1xuXHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2hvd1BhbmVsKCArKyBtb2RlICUgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCApO1xuXG5cdH0sIGZhbHNlICk7XG5cblx0Ly9cblxuXHRmdW5jdGlvbiBhZGRQYW5lbCggcGFuZWwgKSB7XG5cblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIHBhbmVsLmRvbSApO1xuXHRcdHJldHVybiBwYW5lbDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gc2hvd1BhbmVsKCBpZCApIHtcblxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnRhaW5lci5jaGlsZHJlblsgaSBdLnN0eWxlLmRpc3BsYXkgPSBpID09PSBpZCA/ICdibG9jaycgOiAnbm9uZSc7XG5cblx0XHR9XG5cblx0XHRtb2RlID0gaWQ7XG5cblx0fVxuXG5cdC8vXG5cblx0dmFyIGJlZ2luVGltZSA9ICggcGVyZm9ybWFuY2UgfHwgRGF0ZSApLm5vdygpLCBwcmV2VGltZSA9IGJlZ2luVGltZSwgZnJhbWVzID0gMDtcblxuXHR2YXIgZnBzUGFuZWwgPSBhZGRQYW5lbCggbmV3IFN0YXRzLlBhbmVsKCAnRlBTJywgJyMwZmYnLCAnIzAwMicgKSApO1xuXHR2YXIgbXNQYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdNUycsICcjMGYwJywgJyMwMjAnICkgKTtcblxuXHRpZiAoIHNlbGYucGVyZm9ybWFuY2UgJiYgc2VsZi5wZXJmb3JtYW5jZS5tZW1vcnkgKSB7XG5cblx0XHR2YXIgbWVtUGFuZWwgPSBhZGRQYW5lbCggbmV3IFN0YXRzLlBhbmVsKCAnTUInLCAnI2YwOCcsICcjMjAxJyApICk7XG5cblx0fVxuXG5cdHNob3dQYW5lbCggMCApO1xuXG5cdHJldHVybiB7XG5cblx0XHRSRVZJU0lPTjogMTYsXG5cblx0XHRkb206IGNvbnRhaW5lcixcblxuXHRcdGFkZFBhbmVsOiBhZGRQYW5lbCxcblx0XHRzaG93UGFuZWw6IHNob3dQYW5lbCxcblxuXHRcdGJlZ2luOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGJlZ2luVGltZSA9ICggcGVyZm9ybWFuY2UgfHwgRGF0ZSApLm5vdygpO1xuXG5cdFx0fSxcblxuXHRcdGVuZDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRmcmFtZXMgKys7XG5cblx0XHRcdHZhciB0aW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCk7XG5cblx0XHRcdG1zUGFuZWwudXBkYXRlKCB0aW1lIC0gYmVnaW5UaW1lLCAyMDAgKTtcblxuXHRcdFx0aWYgKCB0aW1lID4gcHJldlRpbWUgKyAxMDAwICkge1xuXG5cdFx0XHRcdGZwc1BhbmVsLnVwZGF0ZSggKCBmcmFtZXMgKiAxMDAwICkgLyAoIHRpbWUgLSBwcmV2VGltZSApLCAxMDAgKTtcblxuXHRcdFx0XHRwcmV2VGltZSA9IHRpbWU7XG5cdFx0XHRcdGZyYW1lcyA9IDA7XG5cblx0XHRcdFx0aWYgKCBtZW1QYW5lbCApIHtcblxuXHRcdFx0XHRcdHZhciBtZW1vcnkgPSBwZXJmb3JtYW5jZS5tZW1vcnk7XG5cdFx0XHRcdFx0bWVtUGFuZWwudXBkYXRlKCBtZW1vcnkudXNlZEpTSGVhcFNpemUgLyAxMDQ4NTc2LCBtZW1vcnkuanNIZWFwU2l6ZUxpbWl0IC8gMTA0ODU3NiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGltZTtcblxuXHRcdH0sXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0YmVnaW5UaW1lID0gdGhpcy5lbmQoKTtcblxuXHRcdH0sXG5cblx0XHQvLyBCYWNrd2FyZHMgQ29tcGF0aWJpbGl0eVxuXG5cdFx0ZG9tRWxlbWVudDogY29udGFpbmVyLFxuXHRcdHNldE1vZGU6IHNob3dQYW5lbFxuXG5cdH07XG5cbn07XG5cblN0YXRzLlBhbmVsID0gZnVuY3Rpb24gKCBuYW1lLCBmZywgYmcgKSB7XG5cblx0dmFyIG1pbiA9IEluZmluaXR5LCBtYXggPSAwLCByb3VuZCA9IE1hdGgucm91bmQ7XG5cdHZhciBQUiA9IHJvdW5kKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxICk7XG5cblx0dmFyIFdJRFRIID0gODAgKiBQUiwgSEVJR0hUID0gNDggKiBQUixcblx0XHRcdFRFWFRfWCA9IDMgKiBQUiwgVEVYVF9ZID0gMiAqIFBSLFxuXHRcdFx0R1JBUEhfWCA9IDMgKiBQUiwgR1JBUEhfWSA9IDE1ICogUFIsXG5cdFx0XHRHUkFQSF9XSURUSCA9IDc0ICogUFIsIEdSQVBIX0hFSUdIVCA9IDMwICogUFI7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG5cdGNhbnZhcy53aWR0aCA9IFdJRFRIO1xuXHRjYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuXHRjYW52YXMuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDo4MHB4O2hlaWdodDo0OHB4JztcblxuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cdGNvbnRleHQuZm9udCA9ICdib2xkICcgKyAoIDkgKiBQUiApICsgJ3B4IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJztcblx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRjb250ZXh0LmZpbGxSZWN0KCAwLCAwLCBXSURUSCwgSEVJR0hUICk7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBmZztcblx0Y29udGV4dC5maWxsVGV4dCggbmFtZSwgVEVYVF9YLCBURVhUX1kgKTtcblx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEgsIEdSQVBIX0hFSUdIVCApO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG5cdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRILCBHUkFQSF9IRUlHSFQgKTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0ZG9tOiBjYW52YXMsXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICggdmFsdWUsIG1heFZhbHVlICkge1xuXG5cdFx0XHRtaW4gPSBNYXRoLm1pbiggbWluLCB2YWx1ZSApO1xuXHRcdFx0bWF4ID0gTWF0aC5tYXgoIG1heCwgdmFsdWUgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggMCwgMCwgV0lEVEgsIEdSQVBIX1kgKTtcblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gZmc7XG5cdFx0XHRjb250ZXh0LmZpbGxUZXh0KCByb3VuZCggdmFsdWUgKSArICcgJyArIG5hbWUgKyAnICgnICsgcm91bmQoIG1pbiApICsgJy0nICsgcm91bmQoIG1heCApICsgJyknLCBURVhUX1gsIFRFWFRfWSApO1xuXG5cdFx0XHRjb250ZXh0LmRyYXdJbWFnZSggY2FudmFzLCBHUkFQSF9YICsgUFIsIEdSQVBIX1ksIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX0hFSUdIVCwgR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfSEVJR0hUICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1ggKyBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9ZLCBQUiwgR1JBUEhfSEVJR0hUICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC45O1xuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCArIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX1ksIFBSLCByb3VuZCggKCAxIC0gKCB2YWx1ZSAvIG1heFZhbHVlICkgKSAqIEdSQVBIX0hFSUdIVCApICk7XG5cblx0XHR9XG5cblx0fTtcblxufTtcblxuZXhwb3J0IHsgU3RhdHMgYXMgZGVmYXVsdCB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3RhdHMuanMvc3JjL1N0YXRzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDYW52YXNBZGFwdGVyIGZyb20gJy4vQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNBZGFwdGVyJztcblxuZXhwb3J0IGNsYXNzIEdyYXBoaWNFbmdpbmUge1xuICAgIHN0YXRpYyBpbml0KHJlbmRlcmVySWQ6IHN0cmluZyA9ICdjYW52YXMnKSB7XG4gICAgICAgIGlmIChyZW5kZXJlcklkID09PSAnY2FudmFzJykgcmV0dXJuIG5ldyBDYW52YXNBZGFwdGVyKCk7XG5cbiAgICAgICAgdGhyb3cgRXJyb3IoJ1Vua25vd24gcmVuZGVyZXInKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dyYXBoaWNFbmdpbmUudHMiLCJpbXBvcnQgQ2FudmFzRXZlbnRzTGlzdGVuZXIgZnJvbSAnLi9DYW52YXNFdmVudHNMaXN0ZW5lcic7XG5pbXBvcnQgRXZlbnRMaXN0ZW5lciBmcm9tICcuLi8uLi9FdmVudExpc3RlbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzQWRhcHRlciB7XG4gICAgcHJpdmF0ZSBlbGVtZW50Tm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYW52YXNOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN0eCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZSA9IFtdO1xuICAgIHByaXZhdGUgZXZlbnRMaXN0ZW5lcjtcbiAgICBwdWJsaWMgYW50aUFsaWFzaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIHByaXZhdGUgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhc05vZGUpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBpbml0Q29udGV4dCgpIHtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc05vZGUuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cblxuICAgIGFwcGVuZFRvKGVsZW1lbnROb2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnROb2RlID0gZWxlbWVudE5vZGU7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5pbml0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmF1dG9TaXplKCk7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lciA9IG5ldyBDYW52YXNFdmVudHNMaXN0ZW5lcih0aGlzLmNhbnZhc05vZGUsIHRoaXMuY2FjaGUpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIEV2ZW50TGlzdGVuZXIub24oJ21vdXNlbW92ZScsIChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICB0aGlzLnNldEN1cnNvcihlbGVtZW50LmN1cnNvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV2ZW50TGlzdGVuZXIub24oJ21vdXNlbGVhdmUnLCAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yKGVsZW1lbnQuY3Vyc29yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhdXRvU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmVsZW1lbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG5cbiAgICBzZXRTaXplKHdpZHRoOiBOdW1iZXIsIGhlaWdodDogTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2FudmFzTm9kZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc05vZGUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc2V0Q3Vyc29yKGN1cnNvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2FudmFzTm9kZS5zdHlsZS5jdXJzb3IgPSBjdXJzb3I7XG4gICAgfVxuXG5cbiAgICBkcmF3KGVsZW1lbnQsIGkpIHtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOiByZXR1cm4gdGhpcy5kcmF3Q2lyY2xlKGVsZW1lbnQpO1xuICAgICAgICAgICAgY2FzZSAndGV4dCc6IHJldHVybiB0aGlzLmRyYXdUZXh0KGVsZW1lbnQpO1xuICAgICAgICAgICAgY2FzZSAncmVjdCc6IHJldHVybiB0aGlzLmRyYXdSZWN0KGVsZW1lbnQpO1xuICAgICAgICAgICAgY2FzZSAnZ3JvdXAnOiByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKHRoaXMuZHJhdywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRyYXdSZWN0KHsgeCwgeSwgYmFja2dyb3VuZCwgYm9yZGVyQ29sb3IsIHdpZHRoLCBoZWlnaHQgfSkge1xuICAgICAgICBpZiAoIXRoaXMuYW50aUFsaWFzaW5nKSB7XG4gICAgICAgICAgICB4ICs9IC41O1xuICAgICAgICAgICAgeSArPSAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3JkZXJDb2xvciAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdG9ya2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZHJhd1RleHQoeyB4LCB5LCB0ZXh0LCBjb2xvciwgZm9udCwgZm9udFNpemUsIGFsaWduIH0pIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBmb250O1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblxuICAgICAgICBpZiAoYWxpZ24pIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRTaXplID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChhbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgICAgICB4IC09IHRleHRTaXplLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICB5ICs9IGZvbnRTaXplIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cblxuXG4gICAgZHJhd0NpcmNsZSh7IHgsIHksIHJhZGl1cywgYmFja2dyb3VuZCwgbGluZVdpZHRoLCBib3JkZXJDb2xvciB9KSB7XG4gICAgICAgIGlmICghdGhpcy5hbnRpQWxpYXNpbmcpIHtcbiAgICAgICAgICAgIHggKz0gLjU7XG4gICAgICAgICAgICB5ICs9IC41O1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3JkZXJDb2xvciAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdG9ya2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZS5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNOb2RlLndpZHRoLCB0aGlzLmNhbnZhc05vZGUuaGVpZ2h0KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FkYXB0ZXJzL0NhbnZhc0FkYXB0ZXIvQ2FudmFzQWRhcHRlci50cyIsImltcG9ydCBFdmVudExpc3RlbmVyIGZyb20gJy4uLy4uL0V2ZW50TGlzdGVuZXInO1xuXG5jbGFzcyBDYW52YXNFdmVudHNMaXN0ZW5lciB7XG4gICAgcHJpdmF0ZSBjYWNoZTtcbiAgICBwcml2YXRlIGNhbnZhc05vZGU7XG4gICAgcHJpdmF0ZSBldmVudHNGb3JXYXRjaCA9IFsnbW91c2Vtb3ZlJywgJ2NsaWNrJywgJ21vdXNldXAnLCAnbW91c2Vkb3duJ107XG4gICAgcHJpdmF0ZSBwcmV2VGFyZ2V0ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc05vZGUsIGNhY2hlKSB7XG4gICAgICAgIHRoaXMuY2FudmFzTm9kZSA9IGNhbnZhc05vZGU7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgeHJheSh7IHR5cGUsIHgsIHksIHJhZGl1cywgd2lkdGgsIGhlaWdodCB9LCBwb2ludFgsIHBvaW50WSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3JlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChwb2ludFggPj0geCAmJiBwb2ludFggPD0geCArIHdpZHRoKSAmJlxuICAgICAgICAgICAgICAgIChwb2ludFkgPj0geSAmJiBwb2ludFkgPD0geSArIGhlaWdodClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgTWF0aC5wb3cocG9pbnRYIC0geCwgMikgKyBNYXRoLnBvdyhwb2ludFkgLSB5LCAyKSA8PSBNYXRoLnBvdyhyYWRpdXMgKyAxLCAyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpcmVFdmVudChldmVudE5hbWUsIGV2ZW50LCBlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZUYXJnZXQgIT09IG51bGwgJiYgdGhpcy5wcmV2VGFyZ2V0ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBFdmVudExpc3RlbmVyLmZpcmUoJ21vdXNlbGVhdmUnLCBldmVudCwgdGhpcy5wcmV2VGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByZXZUYXJnZXQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3VzZWVudGVyJywgdGhpcy5wcmV2VGFyZ2V0LCBlbGVtZW50KVxuICAgICAgICAgICAgRXZlbnRMaXN0ZW5lci5maXJlKCdtb3VzZWVudGVyJywgZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VGFyZ2V0ID0gZWxlbWVudDtcbiAgICAgICAgRXZlbnRMaXN0ZW5lci5maXJlKGV2ZW50TmFtZSwgZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChlbCA9PiBFdmVudExpc3RlbmVyLmZpcmUoZXZlbnROYW1lLCBldmVudCwgZWwpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50SGFuZGxlcihldmVudE5hbWUsIGV2ZW50LCByb290ID0gdGhpcy5jYWNoZSwgaXNHcm91cCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzT25DdXJzb3IgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2Ygcm9vdCkge1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnRIYW5kbGVyKGV2ZW50TmFtZSwgZXZlbnQsIGVsZW1lbnQuY2hpbGRyZW4sIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5maXJlRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzT25DdXJzb3IucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnhyYXkoZWxlbWVudCwgZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSkpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZmlyZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzT25DdXJzb3IucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LmNhbnZhc1RhcmdldCA9IG51bGw7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtZW50c09uQ3Vyc29yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY2FudmFzVGFyZ2V0ID09PSBudWxsIHx8IGV2ZW50LmNhbnZhc1RhcmdldC56IDwgZWxlbWVudHNPbkN1cnNvcltpXS56KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuY2FudmFzVGFyZ2V0ID0gZWxlbWVudHNPbkN1cnNvcltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5jYW52YXNUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpc0dyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVFdmVudChldmVudE5hbWUsIGV2ZW50LCBldmVudC5jYW52YXNUYXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJldlRhcmdldCAhPT0gbnVsbCAmJiAhaXNHcm91cCkge1xuICAgICAgICAgICAgZXZlbnQuY2FudmFzVGFyZ2V0ID0gdGhpcy5wcmV2VGFyZ2V0O1xuICAgICAgICAgICAgRXZlbnRMaXN0ZW5lci5maXJlKCdtb3VzZWxlYXZlJywgZXZlbnQsIHRoaXMucHJldlRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnByZXZUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHNMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzRm9yV2F0Y2guZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQodGhpcywgZXZlbnROYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzTm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc0V2ZW50c0xpc3RlbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BZGFwdGVycy9DYW52YXNBZGFwdGVyL0NhbnZhc0V2ZW50c0xpc3RlbmVyLnRzIiwiY29uc3QgQU5JTUFUSU9OX1NQRUVEID0ge1xuICAgICdzbG93JzogMTUwMCxcbiAgICAnZmFzdCc6IDEwMFxufTtcblxuY29uc3QgUEFSU0VfQU5JTUFUSU9OX1ZBTFVFX1JFR0VYUCA9IC8oW1xcK1xcLVxcPV0/KShcXGQqXFwuP1xcZCopKHB4fCV8KS9pO1xuXG5jb25zdCBhY3RpdmVBbmltYXRpb25zID0gbmV3IE1hcCgpO1xuXG5jbGFzcyBTdGVwIHtcbiAgICBwcml2YXRlIHRyYW5zb2ZybXMgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgdGltZSA9IDc1MCkge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25UeXBlID0gJ2F0dHJpYnV0ZSc7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGNvbmZpZ1thdHRyaWJ1dGVdO1xuICAgICAgICAgICAgY29uc3QgW1xuICAgICAgICAgICAgICAgIF8sXG4gICAgICAgICAgICAgICAgbW9kaWZpY2F0aW9uVHlwZSA9ICc9JyxcblxuICAgICAgICAgICAgXSA9IFBBUlNFX0FOSU1BVElPTl9WQUxVRV9SRUdFWFAuZXhlYyhhdHRyaWJ1dGVWYWx1ZSk7XG5cblxuICAgICAgICAgICAgLyp0aGlzLnRyYW5zb2ZybXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbW9kaWZpY2F0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICBhY3Rpb25UeXBlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB0aW1lXG4gICAgICAgICAgICB9KTsqL1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuY2xhc3MgQW5pbWF0aW9uQ3JlYXRvciB7XG4gICAgcHJpdmF0ZSBzdGVwcyA9IFtdO1xuICAgIHByaXZhdGUgYWN0aXZlQW5pbWF0aW9ucyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2ssIHRpbWUpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXAoY2FsbGJhY2ssIHRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGVwKGNvbmZpZywgdGltZSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uVHlwZSA9ICdhdHRyaWJ1dGUnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gY29uZmlnW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgY29uc3QgW1xuICAgICAgICAgICAgICAgICAgICBfLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmljYXRpb25UeXBlID0gJz0nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3JtYXQgPSAncHgnXG4gICAgICAgICAgICAgICAgXSA9IFBBUlNFX0FOSU1BVElPTl9WQUxVRV9SRUdFWFAuZXhlYyhhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmljYXRpb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGltZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFuaW1hdGlvbkhhbmRsZXIoeyBjYW52YXNUYXJnZXQgfSkge1xuICAgICAgICBjb25zdCBmcHMgPSA2MDtcblxuXG4gICAgICAgIGlmICghYWN0aXZlQW5pbWF0aW9ucy5oYXMoY2FudmFzVGFyZ2V0KSkge1xuICAgICAgICAgICAgYWN0aXZlQW5pbWF0aW9ucy5zZXQoY2FudmFzVGFyZ2V0LCBbXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gYWN0aXZlQW5pbWF0aW9ucy5nZXQoY2FudmFzVGFyZ2V0KTtcbiAgICAgICAgYW5pbWF0aW9ucy5mb3JFYWNoKGlkID0+IGNsZWFySW50ZXJ2YWwoaWQpKTtcbiAgICAgICAgYW5pbWF0aW9ucy5sZW5ndGggPSAwO1xuXG5cblxuICAgICAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHsgbW9kaWZpY2F0aW9uVHlwZSwgYWN0aW9uVHlwZSwgdmFsdWVGb3JtYXQsIGF0dHJpYnV0ZSwgdmFsdWUsIHRpbWV9ICkgPT4ge1xuICAgICAgICAgICAgbGV0IGVuZFZhbHVlID0gY2FudmFzVGFyZ2V0W2F0dHJpYnV0ZV07XG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uU3RlcFZhbHVlID0gdmFsdWUgLyAodGltZSAvIGZwcyk7XG4gICAgICAgICAgICBpZiAobW9kaWZpY2F0aW9uVHlwZSA9PT0gJysnKSBlbmRWYWx1ZSArPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAobW9kaWZpY2F0aW9uVHlwZSA9PT0gJy0nKSBlbmRWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChtb2RpZmljYXRpb25UeXBlID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICBlbmRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0ZXBWYWx1ZSA9ICh2YWx1ZSAtIGNhbnZhc1RhcmdldFthdHRyaWJ1dGVdKSAvICh0aW1lIC8gZnBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGFjdGl2ZUFuaW1hdGlvbklkID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQW5pbWF0aW9uQ29tcGxldGVkID0gKFxuICAgICAgICAgICAgICAgICAgICAoY2FudmFzVGFyZ2V0W2F0dHJpYnV0ZV0gPiBlbmRWYWx1ZSAmJiBtb2RpZmljYXRpb25UeXBlID09PSAnKycpIHx8XG4gICAgICAgICAgICAgICAgICAgIChjYW52YXNUYXJnZXRbYXR0cmlidXRlXSA8PSBlbmRWYWx1ZSAmJiBtb2RpZmljYXRpb25UeXBlID09PSAnLScpXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0FuaW1hdGlvbkNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYWN0aXZlQW5pbWF0aW9uSWQsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWNhdGlvblR5cGUgPT09ICcrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzVGFyZ2V0W2F0dHJpYnV0ZV0gKz0gYW5pbWF0aW9uU3RlcFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzVGFyZ2V0W2F0dHJpYnV0ZV0gLT0gYW5pbWF0aW9uU3RlcFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCAvIGZwcyk7XG5cbiAgICAgICAgICAgIGFjdGl2ZUFuaW1hdGlvbklkID0gYW5pbWF0aW9ucy5wdXNoKGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQgY29uc3QgQW5pbWF0aW9uID0gKGNvbmZpZywgZGVsYXkpID0+IG5ldyBBbmltYXRpb25DcmVhdG9yKGNvbmZpZywgZGVsYXkpO1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FuaW1hdGlvbi50cyIsImltcG9ydCB7IENpcmNsZSwgVGV4dCwgR3JvdXAgfSBmcm9tICcuLi9zcmMvRWxlbWVudHMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi4vc3JjL1BsdWdpbnMnO1xuXG5cbmNvbnN0IGdldFRpbWVDb2xvciA9IHRpbWVzdGFtcCA9PiB7XG4gICAgY29uc3QgY29sb3IgPSBNYXRoLnJvdW5kKChNYXRoLnNpbih0aW1lc3RhbXAgLyAweEZGNSkgKyAxKSAvIDIgKiAzNTgpO1xuICAgIHJldHVybiBgaHNsKCR7Y29sb3J9LCA1MCUsIDUwJSlgO1xufTtcblxuXG4vLyBnZW5lcmF0ZSBwcmltaXRpdmVzXG5jb25zdCBjaXJjbGVMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgdGV4dExpc3QgPSBuZXcgTWFwKCk7XG5jb25zdCBncm91cExpc3QgPSBuZXcgTWFwKCk7XG5jb25zdCBmcm96ZW5FbGVtZW50cyA9IG5ldyBTZXQoKTtcblxuY29uc3QgY29scyA9IDEwO1xuY29uc3Qgcm93cyA9IDEwO1xuLy8gZ2VuIGNpcmNsZVxuZm9yKGxldCBpID0gMTsgaSA8PSBjb2xzICogcm93czsgaSsrKSB7XG4gICAgY29uc3QgeCA9IChpICUgY29scykgKiA2MCArIDQwO1xuICAgIGNvbnN0IHkgPSA2MCAqIE1hdGguY2VpbChpIC8gY29scyk7XG5cbiAgICBjb25zdCBjaXJjbGUgPSBuZXcgQ2lyY2xlKCk7XG4gICAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KCk7XG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICBncm91cC5hZGQoY2lyY2xlKTtcbiAgICBncm91cC5hZGQodGV4dCk7XG4gICAgZ3JvdXAudXNlKERyYWdnYWJsZSk7XG5cbiAgICB0ZXh0LnRleHQgPSBgJHtpfWA7XG4gICAgdGV4dC5hbGlnbiA9ICdjZW50ZXInO1xuICAgIHRleHQuZm9udFNpemUgPSAyMDtcbiAgICB0ZXh0Lm1vdmVUbyh4ICsgMywgeSArIDMpO1xuXG4gICAgY2lyY2xlLm1vdmVUbyh4LCB5KTtcbiAgICBjaXJjbGUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZnJvemVuRWxlbWVudHMuaGFzKGNpcmNsZSkpIHtcbiAgICAgICAgICAgIGZyb3plbkVsZW1lbnRzLmRlbGV0ZShjaXJjbGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZnJvemVuRWxlbWVudHMuYWRkKGNpcmNsZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgY2lyY2xlTGlzdC5zZXQoaSwgY2lyY2xlKTtcbiAgICB0ZXh0TGlzdC5zZXQoaSwgdGV4dCk7XG4gICAgZ3JvdXBMaXN0LnNldChpLCBncm91cCk7XG59XG5cbmNvbnN0IG1vdXNlUG9zID0gWzAsIDBdO1xuXG5cbi8vIG1haW4gcmVuZGVyIGZ1bmN0aW9uXG5jb25zdCByZW5kZXIgPSAodGltZXN0YW1wLCByZW5kZXJlcikgPT4ge1xuICAgIGNpcmNsZUxpc3QuZm9yRWFjaCgoY2lyY2xlLCBpKSA9PiB7XG4gICAgICAgIGlmIChmcm96ZW5FbGVtZW50cy5oYXMoY2lyY2xlKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IChNYXRoLnNpbih0aW1lc3RhbXAgLyAxMDAwICsgaSkgKyAxKSAqIDEwICsgMTA7XG4gICAgICAgIGNpcmNsZS5iYWNrZ3JvdW5kID0gZ2V0VGltZUNvbG9yKHRpbWVzdGFtcCArIGkgKiAxMDAwKTtcbiAgICAgICAgY2lyY2xlLnJhZGl1cyA9IE1hdGgucm91bmQocmFkaXVzKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoY2lyY2xlLnggLSBtb3VzZVBvc1swXSkgKyBNYXRoLmFicyhjaXJjbGUueSAtIG1vdXNlUG9zWzFdKSA8IDEyMCkge1xuICAgICAgICAgICAgY2lyY2xlLnJhZGl1cyArPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0TGlzdC5nZXQoaSk7XG5cbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IGNpcmNsZS5yYWRpdXM7XG4gICAgICAgIHRleHQueCA9IGNpcmNsZS54O1xuICAgICAgICB0ZXh0LnkgPSBjaXJjbGUueTtcbiAgICB9KTtcblxuXG4gICAgZ3JvdXBMaXN0LmZvckVhY2gocmVuZGVyZXIuZHJhdywgcmVuZGVyZXIpO1xufTtcblxuY29uc3QgZ2xvYmFsTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgbW91c2VQb3NbMF0gPSBlLmNsaWVudFg7XG4gICAgbW91c2VQb3NbMV0gPSBlLmNsaWVudFk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBnbG9iYWxNb3VzZU1vdmUsIGZhbHNlKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZ2xvYmFsTW91c2VNb3ZlLCBmYWxzZSlcbiAgICB9LFxuICAgIHJlbmRlclxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL2NpcmNsZXMudHMiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi9FbGVtZW50QmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gNTtcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nID0gJ2NpcmNsZSc7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsZW1lbnRzL0NpcmNsZS50cyIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuL0VsZW1lbnRCYXNlJztcblxuZXhwb3J0IGNsYXNzIFRleHQgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG4gICAgZ2V0IGZvbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb250TmFtZTtcbiAgICB9XG5cbiAgICBzZXQgZm9udE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZvbnQgPSB0aGlzLmJ1aWxkRm9udCh0aGlzLl9mb250U2l6ZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLl9mb250TmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBmb250U2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9udFNpemU7XG4gICAgfVxuXG4gICAgc2V0IGZvbnRTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5mb250ID0gdGhpcy5idWlsZEZvbnQodmFsdWUsIHRoaXMuX2ZvbnROYW1lKTtcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRm9udChmb250U2l6ZTogbnVtYmVyLCBmb250TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBgJHtmb250U2l6ZX1weCAke2ZvbnROYW1lfWA7XG4gICAgfVxuXG4gICAgcHVibGljIHRleHQ6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSAndGV4dCc7XG4gICAgcHJpdmF0ZSBmb250OiBzdHJpbmcgPSAnMTRweCBHZW9yZ2lhJztcbiAgICBwcml2YXRlIF9mb250U2l6ZTogbnVtYmVyID0gMTQ7XG4gICAgcHJpdmF0ZSBfZm9udE5hbWU6IHN0cmluZyA9ICdHZW9yZ2lhJztcbiAgICBwdWJsaWMgYWxpZ246IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBjb2xvcjpzdHJpbmcgPSAnI2ZmZic7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsZW1lbnRzL1RleHQudHMiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi9FbGVtZW50QmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIEVsZW1lbnRCYXNlIHtcbiAgICBwdWJsaWMgY2hpbGRyZW4gPSBbXTtcblxuICAgIGFkZChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdHlwZTogU3RyaW5nID0gJ2dyb3VwJztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvR3JvdXAudHMiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi9FbGVtZW50QmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBSZWN0IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9ICdyZWN0Jztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvUmVjdC50cyIsImltcG9ydCBNaXhpbkJhc2UgZnJvbSAnLi9NaXhpbkJhc2UnO1xuXG5jb25zdCBkcmFnZ2VkRWxlbWVudHMgPSBuZXcgU2V0KCk7XG5jb25zdCBzdGFydERyYWdQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IHN0YXJ0RHJhZyA9IChlbGVtZW50LCBlKSA9PiB7XG4gICAgc3RhcnREcmFnUG9zaXRpb25zLnNldChlbGVtZW50LCBbZS5jbGllbnRYLCBlLmNsaWVudFldKTtcbiAgICBkcmFnZ2VkRWxlbWVudHMuYWRkKGVsZW1lbnQpO1xufTtcblxuXG5jb25zdCBzdG9wRHJhZyA9IGVsZW1lbnQgPT4ge1xuICAgIGRyYWdnZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgc3RhcnREcmFnUG9zaXRpb25zLmRlbGV0ZShlbGVtZW50KVxufTtcblxuXG5jb25zdCBtb3ZlRWxlbWVudCA9IChlbGVtZW50LCBkeCwgZHkpID0+IHtcbiAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChlbCA9PiBtb3ZlRWxlbWVudChlbCwgZHgsIGR5KSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnggKz0gZHg7XG4gICAgZWxlbWVudC55ICs9IGR5O1xufTtcblxuXG5jb25zdCBkcmFnID0gKGVsZW1lbnQsIGUpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBzdGFydERyYWdQb3NpdGlvbnMuZ2V0KGVsZW1lbnQpO1xuICAgIGNvbnN0IGR4ID0gZS5jbGllbnRYIC0geDtcbiAgICBjb25zdCBkeSA9IGUuY2xpZW50WSAtIHk7XG4gICAgc3RhcnREcmFnUG9zaXRpb25zLnNldChlbGVtZW50LCBbZS5jbGllbnRYLCBlLmNsaWVudFldKTtcblxuICAgIG1vdmVFbGVtZW50KGVsZW1lbnQsIGR4LCBkeSk7XG59O1xuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICBkcmFnZ2VkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCFlbGVtZW50Lm1peGlucy5kcmFnZ2FibGUuaXNFbmFibGVkKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGUuYnV0dG9ucyA9PT0gMCkge1xuICAgICAgICAgICAgZHJhZ2dlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkcmFnZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBkcmFnKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgTWl4aW5CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlZG93bicsIHN0YXJ0RHJhZy5iaW5kKHRoaXMsIGVsZW1lbnQpKTtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2V1cCcsIHN0b3BEcmFnLmJpbmQodGhpcywgZWxlbWVudCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QbHVnaW5zL0RyYWdnYWJsZS50cyIsImltcG9ydCBNaXhpbkJhc2UgZnJvbSAnLi9NaXhpbkJhc2UnO1xuXG5cbmNvbnN0IHJlc2l6ZUFyZWFTaXplID0gMTA7XG5cbmNvbnN0IERJUkVDVElPTiA9IHtcbiAgICBOT05FOiAwLFxuICAgIExFRlQ6IDIsXG4gICAgVE9QOiA0LFxuICAgIFJJR0hUOiA4LFxuICAgIEJPVFRPTTogMTZcbn07XG5cbmxldCByZXNpemFibGVFbGVtZW50ID0gbnVsbDtcbmxldCByZXNpemVEaXJlY3Rpb24gPSBESVJFQ1RJT04uTk9ORTtcbmxldCByZXNpemVTdGFydFBvc2l0aW9uID0gW107XG5cblxuY29uc3QgY2hhbmdlT2Zmc2V0U2l6ZUFuZFBvcyA9IChlbGVtZW50LCBvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0LCBvZmZzZXRYID0gMCwgb2Zmc2V0WSA9IDApID0+IHtcbiAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChlbCA9PiBjaGFuZ2VPZmZzZXRTaXplQW5kUG9zKGVsLCBvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0LCBvZmZzZXRYLCBvZmZzZXRZKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LndpZHRoICs9IG9mZnNldFdpZHRoO1xuICAgIGVsZW1lbnQuaGVpZ2h0ICs9IG9mZnNldEhlaWdodDtcbiAgICBlbGVtZW50LnggKz0gb2Zmc2V0WDtcbiAgICBlbGVtZW50LnkgKz0gb2Zmc2V0WTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgaWYgKHJlc2l6YWJsZUVsZW1lbnQgIT09IG51bGwgJiYgcmVzaXphYmxlRWxlbWVudC5taXhpbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgIHJlc2l6YWJsZUVsZW1lbnQubWl4aW5zLmRyYWdnYWJsZS5lbmFibGUoKTtcbiAgICB9XG5cbiAgICByZXNpemFibGVFbGVtZW50ID0gbnVsbDtcbn0sIGZhbHNlKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoeyBvZmZzZXRYLCBvZmZzZXRZIH0pID0+IHtcbiAgICBpZiAocmVzaXphYmxlRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSByZXNpemVTdGFydFBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChyZXNpemVEaXJlY3Rpb24gJiBESVJFQ1RJT04uUklHSFQpIHtcbiAgICAgICAgICAgIGNoYW5nZU9mZnNldFNpemVBbmRQb3MocmVzaXphYmxlRWxlbWVudCwgb2Zmc2V0WCAtIHgsIDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc2l6ZURpcmVjdGlvbiAmIERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgICAgICBjaGFuZ2VPZmZzZXRTaXplQW5kUG9zKHJlc2l6YWJsZUVsZW1lbnQsIHggLSBvZmZzZXRYLCAwLCBvZmZzZXRYIC0geCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2l6ZURpcmVjdGlvbiAmIERJUkVDVElPTi5CT1RUT00pIHtcbiAgICAgICAgICAgIGNoYW5nZU9mZnNldFNpemVBbmRQb3MocmVzaXphYmxlRWxlbWVudCwgMCwgb2Zmc2V0WSAtIHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc2l6ZURpcmVjdGlvbiAmIERJUkVDVElPTi5UT1ApIHtcbiAgICAgICAgICAgIGNoYW5nZU9mZnNldFNpemVBbmRQb3MocmVzaXphYmxlRWxlbWVudCwgMCwgeSAtIG9mZnNldFksIDAsIG9mZnNldFkgLSB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2l6ZVN0YXJ0UG9zaXRpb25bMF0gPSBvZmZzZXRYO1xuICAgICAgICByZXNpemVTdGFydFBvc2l0aW9uWzFdID0gb2Zmc2V0WTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0sIGZhbHNlKTtcblxuXG5jb25zdCBnZXREaXJlY3Rpb24gPSAoeyB3aWR0aCwgaGVpZ2h0LCB4LCB5LCB0eXBlLCBjaGlsZHJlbiB9LCBjdXJzb3JYLCBjdXJzb3JZKSA9PiB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IERJUkVDVElPTi5OT05FO1xuXG4gICAgaWYgKHR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3QgPSBnZXREaXJlY3Rpb24oZWwsIGN1cnNvclgsIGN1cnNvclkpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdCAhPT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBkaXJlY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgaWYgKHR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgICBpZiAoY3Vyc29yWCA+PSAoeCArIHdpZHRoIC0gcmVzaXplQXJlYVNpemUpICYmIGN1cnNvclggPD0geCArIHdpZHRoKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gfD0gRElSRUNUSU9OLlJJR0hUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnNvclggPiB4ICYmIGN1cnNvclggPD0geCArIHJlc2l6ZUFyZWFTaXplKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gfD0gRElSRUNUSU9OLkxFRlQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3Vyc29yWSA+PSAoeSArIGhlaWdodCAtIHJlc2l6ZUFyZWFTaXplKSAmJiBjdXJzb3JZIDw9IHkgKyBoZWlnaHQpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiB8PSBESVJFQ1RJT04uQk9UVE9NO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnNvclkgPj0geSAmJiBjdXJzb3JZIDw9IHkgKyByZXNpemVBcmVhU2l6ZSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uIHw9IERJUkVDVElPTi5UT1A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xufTtcblxuXG5leHBvcnQgY2xhc3MgUmVzaXphYmxlIGV4dGVuZHMgTWl4aW5CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uKGUuY2FudmFzVGFyZ2V0LCBlLm9mZnNldFgsIGUub2Zmc2V0WSk7XG5cbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbnMgPiAwICYmIGRpcmVjdGlvbiAhPT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5taXhpbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubWl4aW5zLmRyYWdnYWJsZS5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzaXplRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIHJlc2l6YWJsZUVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHJlc2l6ZVN0YXJ0UG9zaXRpb24gPSBbZS5vZmZzZXRYLCBlLm9mZnNldFldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCAoeyBvZmZzZXRYLCBvZmZzZXRZLCBjYW52YXNUYXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc2l6YWJsZUVsZW1lbnQgIT09IG51bGwpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uKGNhbnZhc1RhcmdldCwgb2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgICAgICAgICBsZXQgY3Vyc29yID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gJiBESVJFQ1RJT04uTEVGVCkgY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gJiBESVJFQ1RJT04uUklHSFQpIGN1cnNvciA9ICd3LXJlc2l6ZSc7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uICYgRElSRUNUSU9OLlRPUCkgY3Vyc29yID0gJ3MtcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gJiBESVJFQ1RJT04uQk9UVE9NKSBjdXJzb3IgPSAncy1yZXNpemUnO1xuXG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5CT1RUT00gKyBESVJFQ1RJT04uTEVGVCkgY3Vyc29yID0gJ25lc3ctcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5CT1RUT00gKyBESVJFQ1RJT04uUklHSFQpIGN1cnNvciA9ICdud3NlLXJlc2l6ZSc7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVE9QICsgRElSRUNUSU9OLkxFRlQpIGN1cnNvciA9ICdud3NlLXJlc2l6ZSc7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVE9QICsgRElSRUNUSU9OLlJJR0hUKSBjdXJzb3IgPSAnbmVzdy1yZXNpemUnO1xuXG4gICAgICAgICAgICBlbGVtZW50LmN1cnNvciA9IGN1cnNvclxuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY3Vyc29yID0gJyc7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJlc2l6YWJsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGx1Z2lucy9SZXNpemFibGUudHMiLCJpbXBvcnQgeyBDaXJjbGUgfSBmcm9tICcuLi9zcmMvRWxlbWVudHMnO1xuaW1wb3J0IHsgIEFuaW1hdGlvbiB9IGZyb20gJy4uL3NyYyc7XG5jb25zdCBncm91cExpc3QgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IGNpcmNsZSA9IG5ldyBDaXJjbGUoKTtcbmNpcmNsZS5yYWRpdXMgPSAyMDtcbmNpcmNsZS5iYWNrZ3JvdW5kID0gJyM1YTAnO1xuY2lyY2xlLm1vdmVUbyg3MDAsIDQwMCk7XG5jaXJjbGUub24oJ21vdXNlZW50ZXInLCBBbmltYXRpb24oe1xuICAgIHJhZGl1czogJysxNSdcbn0sIDE1MDApLmVuZCgpKTtcbmNpcmNsZS5vbignbW91c2VsZWF2ZScsIEFuaW1hdGlvbih7XG4gICAgcmFkaXVzOiAnLTE1J1xufSwgMTUwMCkuZW5kKCkpO1xuZ3JvdXBMaXN0LnNldCgnMTIzJywgY2lyY2xlKTtcbi8vXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6ICgpID0+IHt9LFxuICAgIGRlc3Ryb3k6ICgpID0+IHt9LFxuICAgIHJlbmRlcjogKF8sIHJlbmRlcmVyKSA9PiBncm91cExpc3QuZm9yRWFjaChyZW5kZXJlci5kcmF3LCByZW5kZXJlcilcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9hbmltYXRpb24udHMiLCJpbXBvcnQgeyBUZXh0LCBHcm91cCwgUmVjdCB9IGZyb20gJy4uL3NyYy9FbGVtZW50cyc7XG5pbXBvcnQgeyBEcmFnZ2FibGUsIFJlc2l6YWJsZSB9IGZyb20gJy4uL3NyYy9QbHVnaW5zJztcblxuY29uc3QgZ2V0VGltZUNvbG9yID0gdGltZXN0YW1wID0+IHtcbiAgICBjb25zdCBjb2xvciA9IE1hdGgucm91bmQoKE1hdGguc2luKHRpbWVzdGFtcCAvIDB4RkY1KSArIDEpIC8gMiAqIDM1OCk7XG4gICAgcmV0dXJuIGBoc2woJHtjb2xvcn0sIDUwJSwgNTAlKWA7XG59O1xuXG5cbi8vIGdlbmVyYXRlIHByaW1pdGl2ZXNcbmNvbnN0IGNpcmNsZUxpc3QgPSBuZXcgTWFwKCk7XG5jb25zdCB0ZXh0TGlzdCA9IG5ldyBNYXAoKTtcbmNvbnN0IGdyb3VwTGlzdCA9IG5ldyBNYXAoKTtcbmNvbnN0IGZyb3plbkVsZW1lbnRzID0gbmV3IFNldCgpO1xuXG5cblxubGV0IGlkID0gMTtcbmZvcihsZXQgeCA9IDE7IHggPD0gMjsgeCsrKSB7XG4gICAgZm9yKGxldCB5ID0gMTsgeSA8PSAyOyB5KyspIHtcbiAgICAgICAgY29uc3QgZyA9IG5ldyBHcm91cCgpO1xuICAgICAgICBnLnogPSAxO1xuICAgICAgICBjb25zdCByZWN0ID0gbmV3IFJlY3QoKTtcbiAgICAgICAgcmVjdC54ID0gNjAwICsgeCAqIDgwO1xuICAgICAgICByZWN0LnkgPSA1MCArIHkgKiA4MDtcblxuICAgICAgICByZWN0LndpZHRoID0gNTA7XG4gICAgICAgIHJlY3QuaGVpZ2h0ID0gNTA7XG4gICAgICAgIHJlY3QuYmFja2dyb3VuZCA9IGdldFRpbWVDb2xvcigoaWQgKyAxKSAqIDMyNTQpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICB0ZXh0LmZvbnRTaXplID0gMjU7XG4gICAgICAgIHRleHQudGV4dCA9IGAke2lkfWA7XG4gICAgICAgIHRleHQuYWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgdGV4dC54ID0gcmVjdC54ICsgMjU7XG4gICAgICAgIHRleHQueSA9IHJlY3QueSArIDI0O1xuXG4gICAgICAgIGdcbiAgICAgICAgICAgIC51c2UoUmVzaXphYmxlKVxuICAgICAgICAgICAgLnVzZShEcmFnZ2FibGUpXG4gICAgICAgICAgICAuYWRkKHJlY3QpXG4gICAgICAgICAgICAuYWRkKHRleHQpO1xuXG4gICAgICAgIGdyb3VwTGlzdC5zZXQoJ3InICsgaWQsIGcpO1xuXG4gICAgICAgIGlkKys7XG4gICAgfVxufVxuXG5jb25zdCBtb3VzZVBvcyA9IFswLCAwXTtcblxuXG4vLyBtYWluIHJlbmRlciBmdW5jdGlvblxuY29uc3QgcmVuZGVyID0gKHRpbWVzdGFtcCwgcmVuZGVyZXIpID0+IHtcbiAgICBjaXJjbGVMaXN0LmZvckVhY2goKGNpcmNsZSwgaSkgPT4ge1xuICAgICAgICBpZiAoZnJvemVuRWxlbWVudHMuaGFzKGNpcmNsZSkpIHJldHVybjtcblxuICAgICAgICBjb25zdCByYWRpdXMgPSAoTWF0aC5zaW4odGltZXN0YW1wIC8gMTAwMCArIGkpICsgMSkgKiAxMCArIDEwO1xuICAgICAgICBjaXJjbGUuYmFja2dyb3VuZCA9IGdldFRpbWVDb2xvcih0aW1lc3RhbXAgKyBpICogMTAwMCk7XG4gICAgICAgIGNpcmNsZS5yYWRpdXMgPSBNYXRoLnJvdW5kKHJhZGl1cyk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGNpcmNsZS54IC0gbW91c2VQb3NbMF0pICsgTWF0aC5hYnMoY2lyY2xlLnkgLSBtb3VzZVBvc1sxXSkgPCAxMjApIHtcbiAgICAgICAgICAgIGNpcmNsZS5yYWRpdXMgKz0gMTA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dExpc3QuZ2V0KGkpO1xuXG4gICAgICAgIHRleHQuZm9udFNpemUgPSBjaXJjbGUucmFkaXVzO1xuICAgICAgICB0ZXh0LnggPSBjaXJjbGUueDtcbiAgICAgICAgdGV4dC55ID0gY2lyY2xlLnk7XG4gICAgfSk7XG5cblxuICAgIGdyb3VwTGlzdC5mb3JFYWNoKHJlbmRlcmVyLmRyYXcsIHJlbmRlcmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiAoKSA9PiB7fSxcbiAgICBkZXN0cm95OiAoKSA9PiB7fSxcbiAgICByZW5kZXJcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL2RyYWdnYWJsZV9yZXNpYXphYmxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==