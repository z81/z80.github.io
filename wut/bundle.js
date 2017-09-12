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
var changeOffsetSize = function (element, offsetX, offsetY) {
    console.log(element, offsetX, offsetY);
    if (element.type === 'group') {
        element.children.forEach(function (el) { return changeOffsetSize(el, offsetX, offsetY); });
        return;
    }
    element.width += offsetX;
    element.height += offsetY;
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
            changeOffsetSize(resizableElement, offsetX - x, 0);
        }
        else if (resizeDirection & DIRECTION.LEFT) {
            changeOffsetSize(resizableElement, offsetX - x, x - offsetX);
        }
        if (resizeDirection & DIRECTION.BOTTOM) {
            changeOffsetSize(resizableElement, 0, offsetY - y);
        }
        else if (resizeDirection & DIRECTION.TOP) {
            changeOffsetSize(resizableElement, offsetY - y, y - offsetY);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM1YzA1ZGMxYTcxY2M2N2FkYTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL0VsZW1lbnRCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9FdmVudExpc3RlbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvTWl4aW5CYXNlLnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0YXRzLmpzL3NyYy9TdGF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JhcGhpY0VuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNBZGFwdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BZGFwdGVycy9DYW52YXNBZGFwdGVyL0NhbnZhc0V2ZW50c0xpc3RlbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvY2lyY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvQ2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50cy9UZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50cy9Hcm91cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvUmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGx1Z2lucy9EcmFnZ2FibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvUmVzaXphYmxlLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kcmFnZ2FibGVfcmVzaWF6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YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMzVjMDVkYzFhNzFjYzY3YWRhNCIsImltcG9ydCBFdmVudExpc3RlbmVyIGZyb20gJy4uL0V2ZW50TGlzdGVuZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRCYXNlIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgejogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbGluZVdpZHRoOiBudW1iZXIgPSAxO1xuICAgIHB1YmxpYyBib3JkZXJDb2xvcjogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGJhY2tncm91bmQ6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBjdXJzb3I6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgcGFyZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgbWl4aW5zID0ge307XG5cbiAgICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cblxuICAgIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgRXZlbnRMaXN0ZW5lci5vbihldmVudE5hbWUsIChldmVudCwgdGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpcmUoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudCwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgRXZlbnRMaXN0ZW5lci5maXJlKGV2ZW50TmFtZSwgZXZlbnQsIHRhcmdldCk7XG4gICAgfVxuXG5cbiAgICB1c2UobWl4aW4pIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IG1peGluLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5taXhpbnNbbmFtZV0gPSBuZXcgbWl4aW4odGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9FbGVtZW50QmFzZS50cyIsImNsYXNzIEV2ZW50TGlzdGVuZXIge1xuICAgIHByaXZhdGUgc3RhdGljIGV2ZW50TGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuXG4gICAgc3RhdGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRvRmlyc3Q6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVycy5oYXMoZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5zZXQoZXZlbnROYW1lLCBbXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9GaXJzdCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnROYW1lKS51bnNoaWZ0KGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50TmFtZSkucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpcmUoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudCwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybjtcblxuICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayhldmVudCwgdGFyZ2V0KSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudExpc3RlbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FdmVudExpc3RlbmVyLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9DaXJjbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9UZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vR3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9SZWN0JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL0dyYXBoaWNFbmdpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9BbmltYXRpb24nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vRHJhZ2dhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vUmVzaXphYmxlJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGx1Z2lucy9pbmRleC50cyIsIlxuY2xhc3MgUGx1Z2luQmFzZSB7XG4gICAgcHVibGljIGlzRW5hYmxlZCA9IHRydWU7XG5cblxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuaXNFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5CYXNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QbHVnaW5zL01peGluQmFzZS50cyIsImltcG9ydCBTdGF0cyBmcm9tICdzdGF0cy5qcy9zcmMvU3RhdHMnO1xuaW1wb3J0IHsgR3JhcGhpY0VuZ2luZSB9IGZyb20gJy4vc3JjJztcbmltcG9ydCBjaXJjbGVEZW1vIGZyb20gJy4vZXhhbXBsZXMvY2lyY2xlcyc7XG5pbXBvcnQgYW5pbURlbW8gZnJvbSAnLi9leGFtcGxlcy9hbmltYXRpb24nO1xuaW1wb3J0IGRyYWdhYmxlUmVzaXphYmxlRGVtbyBmcm9tICcuL2V4YW1wbGVzL2RyYWdnYWJsZV9yZXNpYXphYmxlJztcblxuXG5sZXQgZnBzID0gMzA7XG5sZXQgc2VsZWN0ZWREZW1vSWR4ID0gMDtcbmNvbnN0IGRlbW9zID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0NpcmNsZSBhbmltJyxcbiAgICAgICAgZGVtbzogY2lyY2xlRGVtb1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRHJhZ2dhYmxlIFJlc2l6YWJsZScsXG4gICAgICAgIGRlbW86IGRyYWdhYmxlUmVzaXphYmxlRGVtb1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQW5pbWF0aW9uIHBsdWdpbicsXG4gICAgICAgIGRlbW86IGFuaW1EZW1vXG4gICAgfVxuXTtcblxuY29uc3QgZ2V0RGVtbyA9ICgpPT4gZGVtb3Nbc2VsZWN0ZWREZW1vSWR4XS5kZW1vO1xuXG5jb25zdCBzZWxlY3REZW1vID0gaWR4ID0+IHtcbiAgICBnZXREZW1vKCkuZGVzdHJveSgpO1xuICAgIHNlbGVjdGVkRGVtb0lkeCA9IGlkeDtcbiAgICBnZXREZW1vKCkuaW5pdCgpO1xufTtcblxud2luZG93WydzZWxlY3REZW1vJ10gPSBzZWxlY3REZW1vO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbm1lbnUuaW5uZXJIVE1MID0gZGVtb3MubWFwKCh7IG5hbWUgfSwgaWR4KSA9PiAoXG4gICAgYDxidXR0b24gb25jbGljaz1cInNlbGVjdERlbW8oJHtpZHh9KVwiPiR7bmFtZX08L2J1dHRvbj5gXG4pKS5qb2luKCcnKTtcblxuXG4vLyBTVEFUU1xuY29uc3Qgc3RhdHMgPSBuZXcgU3RhdHMoKTtcbnN0YXRzLnNob3dQYW5lbCggMCApOyAvLyAwOiBmcHMsIDE6IG1zLCAyOiBtYiwgMys6IGN1c3RvbVxuc3RhdHMuZG9tLnN0eWxlLmxlZnQgPSAnaW5oZXJpdCc7XG5zdGF0cy5kb20uc3R5bGUudG9wID0gJ2luaGVyaXQnO1xuc3RhdHMuZG9tLnN0eWxlLnJpZ2h0ID0gJzAnO1xuc3RhdHMuZG9tLnN0eWxlLmJvdHRvbSA9ICcwJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHN0YXRzLmRvbSApO1xuLy9cblxuLy8gQ1JBVEUgTk9ERVxuY29uc3Qgcm9vdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbi8vIElOSVQgUkVOREVSRVJcbmNvbnN0IHJlbmRlcmVyID0gR3JhcGhpY0VuZ2luZS5pbml0KCdjYW52YXMnKTtcbnJlbmRlcmVyLmFwcGVuZFRvKHJvb3ROb2RlKTtcbnJlbmRlcmVyLnNldFNpemUoMTAwMCwgOTAwKTtcblxuXG4vLyBtYWluIHJlbmRlciBmdW5jdGlvblxuY29uc3QgcmVuZGVyID0gdGltZXN0YW1wID0+IHtcbiAgICBzdGF0cy5iZWdpbigpO1xuICAgIHJlbmRlcmVyLmNsZWFyKCk7XG4gICAgZ2V0RGVtbygpLnJlbmRlcih0aW1lc3RhbXAsIHJlbmRlcmVyKTtcblxuICAgIHN0YXRzLmVuZCgpO1xuICAgIC8vcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59O1xuXG5cbmNvbnN0IGNyZWF0ZVJlbmRlclRpbWVyID0gKCk9PiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgcmVuZGVyKERhdGUubm93KCkpO1xufSwgMTAwMCAvIGZwcyk7XG5cblxubGV0IHRoaXNSZW5kZXJUaW1lcklkeCA9IGNyZWF0ZVJlbmRlclRpbWVyKCk7XG4vL3JlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuXG5cbmNvbnN0IEZpenp5VGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubWF4RnBzID0gZnBzO1xufTtcblxuY29uc3QgdGV4dCA9IG5ldyBGaXp6eVRleHQoKTtcbmNvbnN0IGd1aSA9IG5ldyB3aW5kb3dbJ2RhdCddLkdVSSgpO1xuXG5ndWkuYWRkKHRleHQsICdtYXhGcHMnLCAxLCAxMDApLm9uQ2hhbmdlKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgZnBzID0gdmFsdWU7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzUmVuZGVyVGltZXJJZHgpO1xuICAgIHRoaXNSZW5kZXJUaW1lcklkeCA9IGNyZWF0ZVJlbmRlclRpbWVyKCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYWluLnRzIiwiLyoqXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tL1xuICovXG5cbnZhciBTdGF0cyA9IGZ1bmN0aW9uICgpIHtcblxuXHR2YXIgbW9kZSA9IDA7XG5cblx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjAuOTt6LWluZGV4OjEwMDAwJztcblx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNob3dQYW5lbCggKysgbW9kZSAlIGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggKTtcblxuXHR9LCBmYWxzZSApO1xuXG5cdC8vXG5cblx0ZnVuY3Rpb24gYWRkUGFuZWwoIHBhbmVsICkge1xuXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBwYW5lbC5kb20gKTtcblx0XHRyZXR1cm4gcGFuZWw7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHNob3dQYW5lbCggaWQgKSB7XG5cblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRjb250YWluZXIuY2hpbGRyZW5bIGkgXS5zdHlsZS5kaXNwbGF5ID0gaSA9PT0gaWQgPyAnYmxvY2snIDogJ25vbmUnO1xuXG5cdFx0fVxuXG5cdFx0bW9kZSA9IGlkO1xuXG5cdH1cblxuXHQvL1xuXG5cdHZhciBiZWdpblRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKSwgcHJldlRpbWUgPSBiZWdpblRpbWUsIGZyYW1lcyA9IDA7XG5cblx0dmFyIGZwc1BhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ0ZQUycsICcjMGZmJywgJyMwMDInICkgKTtcblx0dmFyIG1zUGFuZWwgPSBhZGRQYW5lbCggbmV3IFN0YXRzLlBhbmVsKCAnTVMnLCAnIzBmMCcsICcjMDIwJyApICk7XG5cblx0aWYgKCBzZWxmLnBlcmZvcm1hbmNlICYmIHNlbGYucGVyZm9ybWFuY2UubWVtb3J5ICkge1xuXG5cdFx0dmFyIG1lbVBhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ01CJywgJyNmMDgnLCAnIzIwMScgKSApO1xuXG5cdH1cblxuXHRzaG93UGFuZWwoIDAgKTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0UkVWSVNJT046IDE2LFxuXG5cdFx0ZG9tOiBjb250YWluZXIsXG5cblx0XHRhZGRQYW5lbDogYWRkUGFuZWwsXG5cdFx0c2hvd1BhbmVsOiBzaG93UGFuZWwsXG5cblx0XHRiZWdpbjogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRiZWdpblRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKTtcblxuXHRcdH0sXG5cblx0XHRlbmQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0ZnJhbWVzICsrO1xuXG5cdFx0XHR2YXIgdGltZSA9ICggcGVyZm9ybWFuY2UgfHwgRGF0ZSApLm5vdygpO1xuXG5cdFx0XHRtc1BhbmVsLnVwZGF0ZSggdGltZSAtIGJlZ2luVGltZSwgMjAwICk7XG5cblx0XHRcdGlmICggdGltZSA+IHByZXZUaW1lICsgMTAwMCApIHtcblxuXHRcdFx0XHRmcHNQYW5lbC51cGRhdGUoICggZnJhbWVzICogMTAwMCApIC8gKCB0aW1lIC0gcHJldlRpbWUgKSwgMTAwICk7XG5cblx0XHRcdFx0cHJldlRpbWUgPSB0aW1lO1xuXHRcdFx0XHRmcmFtZXMgPSAwO1xuXG5cdFx0XHRcdGlmICggbWVtUGFuZWwgKSB7XG5cblx0XHRcdFx0XHR2YXIgbWVtb3J5ID0gcGVyZm9ybWFuY2UubWVtb3J5O1xuXHRcdFx0XHRcdG1lbVBhbmVsLnVwZGF0ZSggbWVtb3J5LnVzZWRKU0hlYXBTaXplIC8gMTA0ODU3NiwgbWVtb3J5LmpzSGVhcFNpemVMaW1pdCAvIDEwNDg1NzYgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGJlZ2luVGltZSA9IHRoaXMuZW5kKCk7XG5cblx0XHR9LFxuXG5cdFx0Ly8gQmFja3dhcmRzIENvbXBhdGliaWxpdHlcblxuXHRcdGRvbUVsZW1lbnQ6IGNvbnRhaW5lcixcblx0XHRzZXRNb2RlOiBzaG93UGFuZWxcblxuXHR9O1xuXG59O1xuXG5TdGF0cy5QYW5lbCA9IGZ1bmN0aW9uICggbmFtZSwgZmcsIGJnICkge1xuXG5cdHZhciBtaW4gPSBJbmZpbml0eSwgbWF4ID0gMCwgcm91bmQgPSBNYXRoLnJvdW5kO1xuXHR2YXIgUFIgPSByb3VuZCggd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSApO1xuXG5cdHZhciBXSURUSCA9IDgwICogUFIsIEhFSUdIVCA9IDQ4ICogUFIsXG5cdFx0XHRURVhUX1ggPSAzICogUFIsIFRFWFRfWSA9IDIgKiBQUixcblx0XHRcdEdSQVBIX1ggPSAzICogUFIsIEdSQVBIX1kgPSAxNSAqIFBSLFxuXHRcdFx0R1JBUEhfV0lEVEggPSA3NCAqIFBSLCBHUkFQSF9IRUlHSFQgPSAzMCAqIFBSO1xuXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuXHRjYW52YXMud2lkdGggPSBXSURUSDtcblx0Y2FudmFzLmhlaWdodCA9IEhFSUdIVDtcblx0Y2FudmFzLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6ODBweDtoZWlnaHQ6NDhweCc7XG5cblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xuXHRjb250ZXh0LmZvbnQgPSAnYm9sZCAnICsgKCA5ICogUFIgKSArICdweCBIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZic7XG5cdGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0Y29udGV4dC5maWxsUmVjdCggMCwgMCwgV0lEVEgsIEhFSUdIVCApO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gZmc7XG5cdGNvbnRleHQuZmlsbFRleHQoIG5hbWUsIFRFWFRfWCwgVEVYVF9ZICk7XG5cdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRILCBHUkFQSF9IRUlHSFQgKTtcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC45O1xuXHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCwgR1JBUEhfSEVJR0hUICk7XG5cblx0cmV0dXJuIHtcblxuXHRcdGRvbTogY2FudmFzLFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIHZhbHVlLCBtYXhWYWx1ZSApIHtcblxuXHRcdFx0bWluID0gTWF0aC5taW4oIG1pbiwgdmFsdWUgKTtcblx0XHRcdG1heCA9IE1hdGgubWF4KCBtYXgsIHZhbHVlICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIDAsIDAsIFdJRFRILCBHUkFQSF9ZICk7XG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGZnO1xuXHRcdFx0Y29udGV4dC5maWxsVGV4dCggcm91bmQoIHZhbHVlICkgKyAnICcgKyBuYW1lICsgJyAoJyArIHJvdW5kKCBtaW4gKSArICctJyArIHJvdW5kKCBtYXggKSArICcpJywgVEVYVF9YLCBURVhUX1kgKTtcblxuXHRcdFx0Y29udGV4dC5kcmF3SW1hZ2UoIGNhbnZhcywgR1JBUEhfWCArIFBSLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9IRUlHSFQsIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX0hFSUdIVCApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YICsgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfWSwgUFIsIEdSQVBIX0hFSUdIVCApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDAuOTtcblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1ggKyBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9ZLCBQUiwgcm91bmQoICggMSAtICggdmFsdWUgLyBtYXhWYWx1ZSApICkgKiBHUkFQSF9IRUlHSFQgKSApO1xuXG5cdFx0fVxuXG5cdH07XG5cbn07XG5cbmV4cG9ydCB7IFN0YXRzIGFzIGRlZmF1bHQgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0YXRzLmpzL3NyYy9TdGF0cy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ2FudmFzQWRhcHRlciBmcm9tICcuL0FkYXB0ZXJzL0NhbnZhc0FkYXB0ZXIvQ2FudmFzQWRhcHRlcic7XG5cbmV4cG9ydCBjbGFzcyBHcmFwaGljRW5naW5lIHtcbiAgICBzdGF0aWMgaW5pdChyZW5kZXJlcklkOiBzdHJpbmcgPSAnY2FudmFzJykge1xuICAgICAgICBpZiAocmVuZGVyZXJJZCA9PT0gJ2NhbnZhcycpIHJldHVybiBuZXcgQ2FudmFzQWRhcHRlcigpO1xuXG4gICAgICAgIHRocm93IEVycm9yKCdVbmtub3duIHJlbmRlcmVyJyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9HcmFwaGljRW5naW5lLnRzIiwiaW1wb3J0IENhbnZhc0V2ZW50c0xpc3RlbmVyIGZyb20gJy4vQ2FudmFzRXZlbnRzTGlzdGVuZXInO1xuaW1wb3J0IEV2ZW50TGlzdGVuZXIgZnJvbSAnLi4vLi4vRXZlbnRMaXN0ZW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0FkYXB0ZXIge1xuICAgIHByaXZhdGUgZWxlbWVudE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY2FudmFzTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdHggPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGUgPSBbXTtcbiAgICBwcml2YXRlIGV2ZW50TGlzdGVuZXI7XG4gICAgcHVibGljIGFudGlBbGlhc2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBwcml2YXRlIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXNOb2RlKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgaW5pdENvbnRleHQoKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNOb2RlLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG5cbiAgICBhcHBlbmRUbyhlbGVtZW50Tm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Tm9kZSA9IGVsZW1lbnROb2RlO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIHRoaXMuaW5pdENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5hdXRvU2l6ZSgpO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXIgPSBuZXcgQ2FudmFzRXZlbnRzTGlzdGVuZXIodGhpcy5jYW52YXNOb2RlLCB0aGlzLmNhY2hlKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBiaW5kRXZlbnRzKCkge1xuICAgICAgICBFdmVudExpc3RlbmVyLm9uKCdtb3VzZW1vdmUnLCAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgdGhpcy5zZXRDdXJzb3IoZWxlbWVudC5jdXJzb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICBFdmVudExpc3RlbmVyLm9uKCdtb3VzZWxlYXZlJywgKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcihlbGVtZW50LmN1cnNvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXV0b1NpemUoKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5lbGVtZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuXG4gICAgc2V0U2l6ZSh3aWR0aDogTnVtYmVyLCBoZWlnaHQ6IE51bWJlcikge1xuICAgICAgICB0aGlzLmNhbnZhc05vZGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXNOb2RlLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHNldEN1cnNvcihjdXJzb3I6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhbnZhc05vZGUuc3R5bGUuY3Vyc29yID0gY3Vyc29yO1xuICAgIH1cblxuXG4gICAgZHJhdyhlbGVtZW50LCBpKSB7XG4gICAgICAgIHRoaXMuY2FjaGUucHVzaChlbGVtZW50KTtcblxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzogcmV0dXJuIHRoaXMuZHJhd0NpcmNsZShlbGVtZW50KTtcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOiByZXR1cm4gdGhpcy5kcmF3VGV4dChlbGVtZW50KTtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3QnOiByZXR1cm4gdGhpcy5kcmF3UmVjdChlbGVtZW50KTtcbiAgICAgICAgICAgIGNhc2UgJ2dyb3VwJzogcmV0dXJuIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaCh0aGlzLmRyYXcsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkcmF3UmVjdCh7IHgsIHksIGJhY2tncm91bmQsIGJvcmRlckNvbG9yLCB3aWR0aCwgaGVpZ2h0IH0pIHtcbiAgICAgICAgaWYgKCF0aGlzLmFudGlBbGlhc2luZykge1xuICAgICAgICAgICAgeCArPSAuNTtcbiAgICAgICAgICAgIHkgKz0gLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9yZGVyQ29sb3IgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguc3RvcmtlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRyYXdUZXh0KHsgeCwgeSwgdGV4dCwgY29sb3IsIGZvbnQsIGZvbnRTaXplLCBhbGlnbiB9KSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gZm9udDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG5cbiAgICAgICAgaWYgKGFsaWduKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXG4gICAgICAgICAgICBpZiAoYWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgeCAtPSB0ZXh0U2l6ZS53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgeSArPSBmb250U2l6ZSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9XG5cblxuICAgIGRyYXdDaXJjbGUoeyB4LCB5LCByYWRpdXMsIGJhY2tncm91bmQsIGxpbmVXaWR0aCwgYm9yZGVyQ29sb3IgfSkge1xuICAgICAgICBpZiAoIXRoaXMuYW50aUFsaWFzaW5nKSB7XG4gICAgICAgICAgICB4ICs9IC41O1xuICAgICAgICAgICAgeSArPSAuNTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9yZGVyQ29sb3IgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguc3RvcmtlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzTm9kZS53aWR0aCwgdGhpcy5jYW52YXNOb2RlLmhlaWdodCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BZGFwdGVycy9DYW52YXNBZGFwdGVyL0NhbnZhc0FkYXB0ZXIudHMiLCJpbXBvcnQgRXZlbnRMaXN0ZW5lciBmcm9tICcuLi8uLi9FdmVudExpc3RlbmVyJztcblxuY2xhc3MgQ2FudmFzRXZlbnRzTGlzdGVuZXIge1xuICAgIHByaXZhdGUgY2FjaGU7XG4gICAgcHJpdmF0ZSBjYW52YXNOb2RlO1xuICAgIHByaXZhdGUgZXZlbnRzRm9yV2F0Y2ggPSBbJ21vdXNlbW92ZScsICdjbGljaycsICdtb3VzZXVwJywgJ21vdXNlZG93biddO1xuICAgIHByaXZhdGUgcHJldlRhcmdldCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNOb2RlLCBjYWNoZSkge1xuICAgICAgICB0aGlzLmNhbnZhc05vZGUgPSBjYW52YXNOb2RlO1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50c0xpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHhyYXkoeyB0eXBlLCB4LCB5LCByYWRpdXMsIHdpZHRoLCBoZWlnaHQgfSwgcG9pbnRYLCBwb2ludFkpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAocG9pbnRYID49IHggJiYgcG9pbnRYIDw9IHggKyB3aWR0aCkgJiZcbiAgICAgICAgICAgICAgICAocG9pbnRZID49IHkgJiYgcG9pbnRZIDw9IHkgKyBoZWlnaHQpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIE1hdGgucG93KHBvaW50WCAtIHgsIDIpICsgTWF0aC5wb3cocG9pbnRZIC0geSwgMikgPD0gTWF0aC5wb3cocmFkaXVzICsgMSwgMilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaXJlRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5wcmV2VGFyZ2V0ICE9PSBudWxsICYmIHRoaXMucHJldlRhcmdldCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgICAgRXZlbnRMaXN0ZW5lci5maXJlKCdtb3VzZWxlYXZlJywgZXZlbnQsIHRoaXMucHJldlRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmV2VGFyZ2V0ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbW91c2VlbnRlcicsIHRoaXMucHJldlRhcmdldCwgZWxlbWVudClcbiAgICAgICAgICAgIEV2ZW50TGlzdGVuZXIuZmlyZSgnbW91c2VlbnRlcicsIGV2ZW50LCBlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlRhcmdldCA9IGVsZW1lbnQ7XG4gICAgICAgIEV2ZW50TGlzdGVuZXIuZmlyZShldmVudE5hbWUsIGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goZWwgPT4gRXZlbnRMaXN0ZW5lci5maXJlKGV2ZW50TmFtZSwgZXZlbnQsIGVsKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudEhhbmRsZXIoZXZlbnROYW1lLCBldmVudCwgcm9vdCA9IHRoaXMuY2FjaGUsIGlzR3JvdXAgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50c09uQ3Vyc29yID0gW107XG5cbiAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIHJvb3QpIHtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlcihldmVudE5hbWUsIGV2ZW50LCBlbGVtZW50LmNoaWxkcmVuLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZmlyZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c09uQ3Vyc29yLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy54cmF5KGVsZW1lbnQsIGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmZpcmVFdmVudChldmVudE5hbWUsIGV2ZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50c09uQ3Vyc29yLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5jYW52YXNUYXJnZXQgPSBudWxsO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZWxlbWVudHNPbkN1cnNvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNhbnZhc1RhcmdldCA9PT0gbnVsbCB8fCBldmVudC5jYW52YXNUYXJnZXQueiA8IGVsZW1lbnRzT25DdXJzb3JbaV0ueikge1xuICAgICAgICAgICAgICAgIGV2ZW50LmNhbnZhc1RhcmdldCA9IGVsZW1lbnRzT25DdXJzb3JbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuY2FudmFzVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaXNHcm91cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZXZlbnQuY2FudmFzVGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByZXZUYXJnZXQgIT09IG51bGwgJiYgIWlzR3JvdXApIHtcbiAgICAgICAgICAgIGV2ZW50LmNhbnZhc1RhcmdldCA9IHRoaXMucHJldlRhcmdldDtcbiAgICAgICAgICAgIEV2ZW50TGlzdGVuZXIuZmlyZSgnbW91c2VsZWF2ZScsIGV2ZW50LCB0aGlzLnByZXZUYXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5wcmV2VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmV2ZW50c0ZvcldhdGNoLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc05vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNFdmVudHNMaXN0ZW5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNFdmVudHNMaXN0ZW5lci50cyIsImNvbnN0IEFOSU1BVElPTl9TUEVFRCA9IHtcbiAgICAnc2xvdyc6IDE1MDAsXG4gICAgJ2Zhc3QnOiAxMDBcbn07XG5cbmNvbnN0IFBBUlNFX0FOSU1BVElPTl9WQUxVRV9SRUdFWFAgPSAvKFtcXCtcXC1cXD1dPykoXFxkKlxcLj9cXGQqKShweHwlfCkvaTtcblxuY29uc3QgYWN0aXZlQW5pbWF0aW9ucyA9IG5ldyBNYXAoKTtcblxuY2xhc3MgU3RlcCB7XG4gICAgcHJpdmF0ZSB0cmFuc29mcm1zID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIHRpbWUgPSA3NTApIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gICAgICAgIGtleXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uVHlwZSA9ICdhdHRyaWJ1dGUnO1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBjb25maWdbYXR0cmlidXRlXTtcbiAgICAgICAgICAgIGNvbnN0IFtcbiAgICAgICAgICAgICAgICBfLFxuICAgICAgICAgICAgICAgIG1vZGlmaWNhdGlvblR5cGUgPSAnPScsXG5cbiAgICAgICAgICAgIF0gPSBQQVJTRV9BTklNQVRJT05fVkFMVUVfUkVHRVhQLmV4ZWMoYXR0cmlidXRlVmFsdWUpO1xuXG5cbiAgICAgICAgICAgIC8qdGhpcy50cmFuc29mcm1zLnB1c2goe1xuICAgICAgICAgICAgICAgIG1vZGlmaWNhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgYWN0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgdGltZVxuICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIEFuaW1hdGlvbkNyZWF0b3Ige1xuICAgIHByaXZhdGUgc3RlcHMgPSBbXTtcbiAgICBwcml2YXRlIGFjdGl2ZUFuaW1hdGlvbnMgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCB0aW1lKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zdGVwKGNhbGxiYWNrLCB0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RlcChjb25maWcsIHRpbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvblR5cGUgPSAnYXR0cmlidXRlJztcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGNvbmZpZ1thdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtcbiAgICAgICAgICAgICAgICAgICAgXyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2F0aW9uVHlwZSA9ICc9JyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRm9ybWF0ID0gJ3B4J1xuICAgICAgICAgICAgICAgIF0gPSBQQVJTRV9BTklNQVRJT05fVkFMVUVfUkVHRVhQLmV4ZWMoYXR0cmlidXRlVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2F0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRpb25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhbmltYXRpb25IYW5kbGVyKHsgY2FudmFzVGFyZ2V0IH0pIHtcbiAgICAgICAgY29uc3QgZnBzID0gNjA7XG5cblxuICAgICAgICBpZiAoIWFjdGl2ZUFuaW1hdGlvbnMuaGFzKGNhbnZhc1RhcmdldCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUFuaW1hdGlvbnMuc2V0KGNhbnZhc1RhcmdldCwgW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IGFjdGl2ZUFuaW1hdGlvbnMuZ2V0KGNhbnZhc1RhcmdldCk7XG4gICAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaChpZCA9PiBjbGVhckludGVydmFsKGlkKSk7XG4gICAgICAgIGFuaW1hdGlvbnMubGVuZ3RoID0gMDtcblxuXG5cbiAgICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKCh7IG1vZGlmaWNhdGlvblR5cGUsIGFjdGlvblR5cGUsIHZhbHVlRm9ybWF0LCBhdHRyaWJ1dGUsIHZhbHVlLCB0aW1lfSApID0+IHtcbiAgICAgICAgICAgIGxldCBlbmRWYWx1ZSA9IGNhbnZhc1RhcmdldFthdHRyaWJ1dGVdO1xuICAgICAgICAgICAgbGV0IGFuaW1hdGlvblN0ZXBWYWx1ZSA9IHZhbHVlIC8gKHRpbWUgLyBmcHMpO1xuICAgICAgICAgICAgaWYgKG1vZGlmaWNhdGlvblR5cGUgPT09ICcrJykgZW5kVmFsdWUgKz0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKG1vZGlmaWNhdGlvblR5cGUgPT09ICctJykgZW5kVmFsdWUgLT0gdmFsdWU7XG4gICAgICAgICAgICBpZiAobW9kaWZpY2F0aW9uVHlwZSA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgZW5kVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25TdGVwVmFsdWUgPSAodmFsdWUgLSBjYW52YXNUYXJnZXRbYXR0cmlidXRlXSkgLyAodGltZSAvIGZwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBhY3RpdmVBbmltYXRpb25JZCA9IDA7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0FuaW1hdGlvbkNvbXBsZXRlZCA9IChcbiAgICAgICAgICAgICAgICAgICAgKGNhbnZhc1RhcmdldFthdHRyaWJ1dGVdID4gZW5kVmFsdWUgJiYgbW9kaWZpY2F0aW9uVHlwZSA9PT0gJysnKSB8fFxuICAgICAgICAgICAgICAgICAgICAoY2FudmFzVGFyZ2V0W2F0dHJpYnV0ZV0gPD0gZW5kVmFsdWUgJiYgbW9kaWZpY2F0aW9uVHlwZSA9PT0gJy0nKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbnMuc3BsaWNlKGFjdGl2ZUFuaW1hdGlvbklkLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmljYXRpb25UeXBlID09PSAnKycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc1RhcmdldFthdHRyaWJ1dGVdICs9IGFuaW1hdGlvblN0ZXBWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc1RhcmdldFthdHRyaWJ1dGVdIC09IGFuaW1hdGlvblN0ZXBWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDAgLyBmcHMpO1xuXG4gICAgICAgICAgICBhY3RpdmVBbmltYXRpb25JZCA9IGFuaW1hdGlvbnMucHVzaChpbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGlvbiA9IChjb25maWcsIGRlbGF5KSA9PiBuZXcgQW5pbWF0aW9uQ3JlYXRvcihjb25maWcsIGRlbGF5KTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BbmltYXRpb24udHMiLCJpbXBvcnQgeyBDaXJjbGUsIFRleHQsIEdyb3VwIH0gZnJvbSAnLi4vc3JjL0VsZW1lbnRzJztcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4uL3NyYy9QbHVnaW5zJztcblxuXG5jb25zdCBnZXRUaW1lQ29sb3IgPSB0aW1lc3RhbXAgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gTWF0aC5yb3VuZCgoTWF0aC5zaW4odGltZXN0YW1wIC8gMHhGRjUpICsgMSkgLyAyICogMzU4KTtcbiAgICByZXR1cm4gYGhzbCgke2NvbG9yfSwgNTAlLCA1MCUpYDtcbn07XG5cblxuLy8gZ2VuZXJhdGUgcHJpbWl0aXZlc1xuY29uc3QgY2lyY2xlTGlzdCA9IG5ldyBNYXAoKTtcbmNvbnN0IHRleHRMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgZ3JvdXBMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgZnJvemVuRWxlbWVudHMgPSBuZXcgU2V0KCk7XG5cbmNvbnN0IGNvbHMgPSAxMDtcbmNvbnN0IHJvd3MgPSAxMDtcbi8vIGdlbiBjaXJjbGVcbmZvcihsZXQgaSA9IDE7IGkgPD0gY29scyAqIHJvd3M7IGkrKykge1xuICAgIGNvbnN0IHggPSAoaSAlIGNvbHMpICogNjAgKyA0MDtcbiAgICBjb25zdCB5ID0gNjAgKiBNYXRoLmNlaWwoaSAvIGNvbHMpO1xuXG4gICAgY29uc3QgY2lyY2xlID0gbmV3IENpcmNsZSgpO1xuICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dCgpO1xuICAgIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgZ3JvdXAuYWRkKGNpcmNsZSk7XG4gICAgZ3JvdXAuYWRkKHRleHQpO1xuICAgIGdyb3VwLnVzZShEcmFnZ2FibGUpO1xuXG4gICAgdGV4dC50ZXh0ID0gYCR7aX1gO1xuICAgIHRleHQuYWxpZ24gPSAnY2VudGVyJztcbiAgICB0ZXh0LmZvbnRTaXplID0gMjA7XG4gICAgdGV4dC5tb3ZlVG8oeCArIDMsIHkgKyAzKTtcblxuICAgIGNpcmNsZS5tb3ZlVG8oeCwgeSk7XG4gICAgY2lyY2xlLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGZyb3plbkVsZW1lbnRzLmhhcyhjaXJjbGUpKSB7XG4gICAgICAgICAgICBmcm96ZW5FbGVtZW50cy5kZWxldGUoY2lyY2xlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZyb3plbkVsZW1lbnRzLmFkZChjaXJjbGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIGNpcmNsZUxpc3Quc2V0KGksIGNpcmNsZSk7XG4gICAgdGV4dExpc3Quc2V0KGksIHRleHQpO1xuICAgIGdyb3VwTGlzdC5zZXQoaSwgZ3JvdXApO1xufVxuXG5jb25zdCBtb3VzZVBvcyA9IFswLCAwXTtcblxuXG4vLyBtYWluIHJlbmRlciBmdW5jdGlvblxuY29uc3QgcmVuZGVyID0gKHRpbWVzdGFtcCwgcmVuZGVyZXIpID0+IHtcbiAgICBjaXJjbGVMaXN0LmZvckVhY2goKGNpcmNsZSwgaSkgPT4ge1xuICAgICAgICBpZiAoZnJvemVuRWxlbWVudHMuaGFzKGNpcmNsZSkpIHJldHVybjtcblxuICAgICAgICBjb25zdCByYWRpdXMgPSAoTWF0aC5zaW4odGltZXN0YW1wIC8gMTAwMCArIGkpICsgMSkgKiAxMCArIDEwO1xuICAgICAgICBjaXJjbGUuYmFja2dyb3VuZCA9IGdldFRpbWVDb2xvcih0aW1lc3RhbXAgKyBpICogMTAwMCk7XG4gICAgICAgIGNpcmNsZS5yYWRpdXMgPSBNYXRoLnJvdW5kKHJhZGl1cyk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGNpcmNsZS54IC0gbW91c2VQb3NbMF0pICsgTWF0aC5hYnMoY2lyY2xlLnkgLSBtb3VzZVBvc1sxXSkgPCAxMjApIHtcbiAgICAgICAgICAgIGNpcmNsZS5yYWRpdXMgKz0gMTA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dExpc3QuZ2V0KGkpO1xuXG4gICAgICAgIHRleHQuZm9udFNpemUgPSBjaXJjbGUucmFkaXVzO1xuICAgICAgICB0ZXh0LnggPSBjaXJjbGUueDtcbiAgICAgICAgdGV4dC55ID0gY2lyY2xlLnk7XG4gICAgfSk7XG5cblxuICAgIGdyb3VwTGlzdC5mb3JFYWNoKHJlbmRlcmVyLmRyYXcsIHJlbmRlcmVyKTtcbn07XG5cbmNvbnN0IGdsb2JhbE1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIG1vdXNlUG9zWzBdID0gZS5jbGllbnRYO1xuICAgIG1vdXNlUG9zWzFdID0gZS5jbGllbnRZO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZ2xvYmFsTW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgfSxcbiAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGdsb2JhbE1vdXNlTW92ZSwgZmFsc2UpXG4gICAgfSxcbiAgICByZW5kZXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9jaXJjbGVzLnRzIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4vRWxlbWVudEJhc2UnO1xuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlciA9IDU7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9ICdjaXJjbGUnO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9DaXJjbGUudHMiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi9FbGVtZW50QmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuICAgIGdldCBmb250TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9udE5hbWU7XG4gICAgfVxuXG4gICAgc2V0IGZvbnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5mb250ID0gdGhpcy5idWlsZEZvbnQodGhpcy5fZm9udFNpemUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5fZm9udE5hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZm9udFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnRTaXplO1xuICAgIH1cblxuICAgIHNldCBmb250U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZm9udCA9IHRoaXMuYnVpbGRGb250KHZhbHVlLCB0aGlzLl9mb250TmFtZSk7XG4gICAgICAgIHRoaXMuX2ZvbnRTaXplID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEZvbnQoZm9udFNpemU6IG51bWJlciwgZm9udE5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYCR7Zm9udFNpemV9cHggJHtmb250TmFtZX1gO1xuICAgIH1cblxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nID0gJ3RleHQnO1xuICAgIHByaXZhdGUgZm9udDogc3RyaW5nID0gJzE0cHggR2VvcmdpYSc7XG4gICAgcHJpdmF0ZSBfZm9udFNpemU6IG51bWJlciA9IDE0O1xuICAgIHByaXZhdGUgX2ZvbnROYW1lOiBzdHJpbmcgPSAnR2VvcmdpYSc7XG4gICAgcHVibGljIGFsaWduOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgY29sb3I6c3RyaW5nID0gJyNmZmYnO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9UZXh0LnRzIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4vRWxlbWVudEJhc2UnO1xuXG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG4gICAgcHVibGljIGNoaWxkcmVuID0gW107XG5cbiAgICBhZGQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQucGFyZW50ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHR5cGU6IFN0cmluZyA9ICdncm91cCc7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsZW1lbnRzL0dyb3VwLnRzIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4vRWxlbWVudEJhc2UnO1xuXG5leHBvcnQgY2xhc3MgUmVjdCBleHRlbmRzIEVsZW1lbnRCYXNlIHtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSAncmVjdCc7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsZW1lbnRzL1JlY3QudHMiLCJpbXBvcnQgTWl4aW5CYXNlIGZyb20gJy4vTWl4aW5CYXNlJztcblxuY29uc3QgZHJhZ2dlZEVsZW1lbnRzID0gbmV3IFNldCgpO1xuY29uc3Qgc3RhcnREcmFnUG9zaXRpb25zID0gbmV3IE1hcCgpO1xuXG5jb25zdCBzdGFydERyYWcgPSAoZWxlbWVudCwgZSkgPT4ge1xuICAgIHN0YXJ0RHJhZ1Bvc2l0aW9ucy5zZXQoZWxlbWVudCwgW2UuY2xpZW50WCwgZS5jbGllbnRZXSk7XG4gICAgZHJhZ2dlZEVsZW1lbnRzLmFkZChlbGVtZW50KTtcbn07XG5cblxuY29uc3Qgc3RvcERyYWcgPSBlbGVtZW50ID0+IHtcbiAgICBkcmFnZ2VkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgIHN0YXJ0RHJhZ1Bvc2l0aW9ucy5kZWxldGUoZWxlbWVudClcbn07XG5cblxuY29uc3QgbW92ZUVsZW1lbnQgPSAoZWxlbWVudCwgZHgsIGR5KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goZWwgPT4gbW92ZUVsZW1lbnQoZWwsIGR4LCBkeSkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC54ICs9IGR4O1xuICAgIGVsZW1lbnQueSArPSBkeTtcbn07XG5cblxuY29uc3QgZHJhZyA9IChlbGVtZW50LCBlKSA9PiB7XG4gICAgY29uc3QgW3gsIHldID0gc3RhcnREcmFnUG9zaXRpb25zLmdldChlbGVtZW50KTtcbiAgICBjb25zdCBkeCA9IGUuY2xpZW50WCAtIHg7XG4gICAgY29uc3QgZHkgPSBlLmNsaWVudFkgLSB5O1xuICAgIHN0YXJ0RHJhZ1Bvc2l0aW9ucy5zZXQoZWxlbWVudCwgW2UuY2xpZW50WCwgZS5jbGllbnRZXSk7XG5cbiAgICBtb3ZlRWxlbWVudChlbGVtZW50LCBkeCwgZHkpO1xufTtcblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgZHJhZ2dlZEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmICghZWxlbWVudC5taXhpbnMuZHJhZ2dhYmxlLmlzRW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChlLmJ1dHRvbnMgPT09IDApIHtcbiAgICAgICAgICAgIGRyYWdnZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHJhZ2dlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgZHJhZyhlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cblxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIE1peGluQmFzZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZWRvd24nLCBzdGFydERyYWcuYmluZCh0aGlzLCBlbGVtZW50KSk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNldXAnLCBzdG9wRHJhZy5iaW5kKHRoaXMsIGVsZW1lbnQpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGx1Z2lucy9EcmFnZ2FibGUudHMiLCJpbXBvcnQgTWl4aW5CYXNlIGZyb20gJy4vTWl4aW5CYXNlJztcblxuXG5jb25zdCByZXNpemVBcmVhU2l6ZSA9IDEwO1xuXG5jb25zdCBESVJFQ1RJT04gPSB7XG4gICAgTk9ORTogMCxcbiAgICBMRUZUOiAyLFxuICAgIFRPUDogNCxcbiAgICBSSUdIVDogOCxcbiAgICBCT1RUT006IDE2XG59O1xuXG5sZXQgcmVzaXphYmxlRWxlbWVudCA9IG51bGw7XG5sZXQgcmVzaXplRGlyZWN0aW9uID0gRElSRUNUSU9OLk5PTkU7XG5sZXQgcmVzaXplU3RhcnRQb3NpdGlvbiA9IFtdO1xuXG5cbmNvbnN0IGNoYW5nZU9mZnNldFNpemUgPSAoZWxlbWVudCwgb2Zmc2V0WCwgb2Zmc2V0WSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQsIG9mZnNldFgsIG9mZnNldFkpO1xuICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKGVsID0+IGNoYW5nZU9mZnNldFNpemUoZWwsIG9mZnNldFgsIG9mZnNldFkpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQud2lkdGggKz0gb2Zmc2V0WDtcbiAgICBlbGVtZW50LmhlaWdodCArPSBvZmZzZXRZO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICBpZiAocmVzaXphYmxlRWxlbWVudCAhPT0gbnVsbCAmJiByZXNpemFibGVFbGVtZW50Lm1peGlucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgcmVzaXphYmxlRWxlbWVudC5taXhpbnMuZHJhZ2dhYmxlLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIHJlc2l6YWJsZUVsZW1lbnQgPSBudWxsO1xufSwgZmFsc2UpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICh7IG9mZnNldFgsIG9mZnNldFkgfSkgPT4ge1xuICAgIGlmIChyZXNpemFibGVFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHJlc2l6ZVN0YXJ0UG9zaXRpb247XG5cbiAgICAgICAgaWYgKHJlc2l6ZURpcmVjdGlvbiAmIERJUkVDVElPTi5SSUdIVCkge1xuICAgICAgICAgICAgY2hhbmdlT2Zmc2V0U2l6ZShyZXNpemFibGVFbGVtZW50LCBvZmZzZXRYIC0geCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzaXplRGlyZWN0aW9uICYgRElSRUNUSU9OLkxFRlQpIHtcbiAgICAgICAgICAgIGNoYW5nZU9mZnNldFNpemUocmVzaXphYmxlRWxlbWVudCwgb2Zmc2V0WCAtIHgsIHggLSBvZmZzZXRYKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzaXplRGlyZWN0aW9uICYgRElSRUNUSU9OLkJPVFRPTSkge1xuICAgICAgICAgICAgY2hhbmdlT2Zmc2V0U2l6ZShyZXNpemFibGVFbGVtZW50LCAwLCBvZmZzZXRZIC0geSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzaXplRGlyZWN0aW9uICYgRElSRUNUSU9OLlRPUCkge1xuICAgICAgICAgICAgY2hhbmdlT2Zmc2V0U2l6ZShyZXNpemFibGVFbGVtZW50LCBvZmZzZXRZIC0geSwgeSAtIG9mZnNldFkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzaXplU3RhcnRQb3NpdGlvblswXSA9IG9mZnNldFg7XG4gICAgICAgIHJlc2l6ZVN0YXJ0UG9zaXRpb25bMV0gPSBvZmZzZXRZO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSwgZmFsc2UpO1xuXG5cbmNvbnN0IGdldERpcmVjdGlvbiA9ICh7IHdpZHRoLCBoZWlnaHQsIHgsIHksIHR5cGUsIGNoaWxkcmVuIH0sIGN1cnNvclgsIGN1cnNvclkpID0+IHtcbiAgICBsZXQgZGlyZWN0aW9uID0gRElSRUNUSU9OLk5PTkU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdCA9IGdldERpcmVjdGlvbihlbCwgY3Vyc29yWCwgY3Vyc29yWSk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0ICE9PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBpZiAodHlwZSA9PT0gJ3JlY3QnKSB7XG4gICAgICAgIGlmIChjdXJzb3JYID49ICh4ICsgd2lkdGggLSByZXNpemVBcmVhU2l6ZSkgJiYgY3Vyc29yWCA8PSB4ICsgd2lkdGgpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiB8PSBESVJFQ1RJT04uUklHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3Vyc29yWCA+IHggJiYgY3Vyc29yWCA8PSB4ICsgcmVzaXplQXJlYVNpemUpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiB8PSBESVJFQ1RJT04uTEVGVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJzb3JZID49ICh5ICsgaGVpZ2h0IC0gcmVzaXplQXJlYVNpemUpICYmIGN1cnNvclkgPD0geSArIGhlaWdodCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uIHw9IERJUkVDVElPTi5CT1RUT007XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3Vyc29yWSA+PSB5ICYmIGN1cnNvclkgPD0geSArIHJlc2l6ZUFyZWFTaXplKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gfD0gRElSRUNUSU9OLlRPUDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG5cbmV4cG9ydCBjbGFzcyBSZXNpemFibGUgZXh0ZW5kcyBNaXhpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb24oZS5jYW52YXNUYXJnZXQsIGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcblxuICAgICAgICAgICAgaWYgKGUuYnV0dG9ucyA+IDAgJiYgZGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm1peGlucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5taXhpbnMuZHJhZ2dhYmxlLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNpemVEaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgcmVzaXphYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcmVzaXplU3RhcnRQb3NpdGlvbiA9IFtlLm9mZnNldFgsIGUub2Zmc2V0WV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlbW92ZScsICh7IG9mZnNldFgsIG9mZnNldFksIGNhbnZhc1RhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzaXphYmxlRWxlbWVudCAhPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb24oY2FudmFzVGFyZ2V0LCBvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICAgICAgICAgIGxldCBjdXJzb3IgPSAnJztcblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAmIERJUkVDVElPTi5MRUZUKSBjdXJzb3IgPSAndy1yZXNpemUnO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAmIERJUkVDVElPTi5SSUdIVCkgY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gJiBESVJFQ1RJT04uVE9QKSBjdXJzb3IgPSAncy1yZXNpemUnO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAmIERJUkVDVElPTi5CT1RUT00pIGN1cnNvciA9ICdzLXJlc2l6ZSc7XG5cblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkJPVFRPTSArIERJUkVDVElPTi5MRUZUKSBjdXJzb3IgPSAnbmVzdy1yZXNpemUnO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkJPVFRPTSArIERJUkVDVElPTi5SSUdIVCkgY3Vyc29yID0gJ253c2UtcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5UT1AgKyBESVJFQ1RJT04uTEVGVCkgY3Vyc29yID0gJ253c2UtcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5UT1AgKyBESVJFQ1RJT04uUklHSFQpIGN1cnNvciA9ICduZXN3LXJlc2l6ZSc7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuY3Vyc29yID0gY3Vyc29yXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jdXJzb3IgPSAnJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUmVzaXphYmxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QbHVnaW5zL1Jlc2l6YWJsZS50cyIsImltcG9ydCB7IENpcmNsZSB9IGZyb20gJy4uL3NyYy9FbGVtZW50cyc7XG5pbXBvcnQgeyAgQW5pbWF0aW9uIH0gZnJvbSAnLi4vc3JjJztcbmNvbnN0IGdyb3VwTGlzdCA9IG5ldyBNYXAoKTtcblxuY29uc3QgY2lyY2xlID0gbmV3IENpcmNsZSgpO1xuY2lyY2xlLnJhZGl1cyA9IDIwO1xuY2lyY2xlLmJhY2tncm91bmQgPSAnIzVhMCc7XG5jaXJjbGUubW92ZVRvKDcwMCwgNDAwKTtcbmNpcmNsZS5vbignbW91c2VlbnRlcicsIEFuaW1hdGlvbih7XG4gICAgcmFkaXVzOiAnKzE1J1xufSwgMTUwMCkuZW5kKCkpO1xuY2lyY2xlLm9uKCdtb3VzZWxlYXZlJywgQW5pbWF0aW9uKHtcbiAgICByYWRpdXM6ICctMTUnXG59LCAxNTAwKS5lbmQoKSk7XG5ncm91cExpc3Quc2V0KCcxMjMnLCBjaXJjbGUpO1xuLy9cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogKCkgPT4ge30sXG4gICAgZGVzdHJveTogKCkgPT4ge30sXG4gICAgcmVuZGVyOiAoXywgcmVuZGVyZXIpID0+IGdyb3VwTGlzdC5mb3JFYWNoKHJlbmRlcmVyLmRyYXcsIHJlbmRlcmVyKVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL2FuaW1hdGlvbi50cyIsImltcG9ydCB7IFRleHQsIEdyb3VwLCBSZWN0IH0gZnJvbSAnLi4vc3JjL0VsZW1lbnRzJztcbmltcG9ydCB7IERyYWdnYWJsZSwgUmVzaXphYmxlIH0gZnJvbSAnLi4vc3JjL1BsdWdpbnMnO1xuXG5jb25zdCBnZXRUaW1lQ29sb3IgPSB0aW1lc3RhbXAgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gTWF0aC5yb3VuZCgoTWF0aC5zaW4odGltZXN0YW1wIC8gMHhGRjUpICsgMSkgLyAyICogMzU4KTtcbiAgICByZXR1cm4gYGhzbCgke2NvbG9yfSwgNTAlLCA1MCUpYDtcbn07XG5cblxuLy8gZ2VuZXJhdGUgcHJpbWl0aXZlc1xuY29uc3QgY2lyY2xlTGlzdCA9IG5ldyBNYXAoKTtcbmNvbnN0IHRleHRMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgZ3JvdXBMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgZnJvemVuRWxlbWVudHMgPSBuZXcgU2V0KCk7XG5cblxuXG5sZXQgaWQgPSAxO1xuZm9yKGxldCB4ID0gMTsgeCA8PSAyOyB4KyspIHtcbiAgICBmb3IobGV0IHkgPSAxOyB5IDw9IDI7IHkrKykge1xuICAgICAgICBjb25zdCBnID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGcueiA9IDE7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgUmVjdCgpO1xuICAgICAgICByZWN0LnggPSA2MDAgKyB4ICogODA7XG4gICAgICAgIHJlY3QueSA9IDUwICsgeSAqIDgwO1xuXG4gICAgICAgIHJlY3Qud2lkdGggPSA1MDtcbiAgICAgICAgcmVjdC5oZWlnaHQgPSA1MDtcbiAgICAgICAgcmVjdC5iYWNrZ3JvdW5kID0gZ2V0VGltZUNvbG9yKChpZCArIDEpICogMzI1NCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAyNTtcbiAgICAgICAgdGV4dC50ZXh0ID0gYCR7aWR9YDtcbiAgICAgICAgdGV4dC5hbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICB0ZXh0LnggPSByZWN0LnggKyAyNTtcbiAgICAgICAgdGV4dC55ID0gcmVjdC55ICsgMjQ7XG5cbiAgICAgICAgZ1xuICAgICAgICAgICAgLnVzZShSZXNpemFibGUpXG4gICAgICAgICAgICAudXNlKERyYWdnYWJsZSlcbiAgICAgICAgICAgIC5hZGQocmVjdClcbiAgICAgICAgICAgIC5hZGQodGV4dCk7XG5cbiAgICAgICAgZ3JvdXBMaXN0LnNldCgncicgKyBpZCwgZyk7XG5cbiAgICAgICAgaWQrKztcbiAgICB9XG59XG5cbmNvbnN0IG1vdXNlUG9zID0gWzAsIDBdO1xuXG5cbi8vIG1haW4gcmVuZGVyIGZ1bmN0aW9uXG5jb25zdCByZW5kZXIgPSAodGltZXN0YW1wLCByZW5kZXJlcikgPT4ge1xuICAgIGNpcmNsZUxpc3QuZm9yRWFjaCgoY2lyY2xlLCBpKSA9PiB7XG4gICAgICAgIGlmIChmcm96ZW5FbGVtZW50cy5oYXMoY2lyY2xlKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IChNYXRoLnNpbih0aW1lc3RhbXAgLyAxMDAwICsgaSkgKyAxKSAqIDEwICsgMTA7XG4gICAgICAgIGNpcmNsZS5iYWNrZ3JvdW5kID0gZ2V0VGltZUNvbG9yKHRpbWVzdGFtcCArIGkgKiAxMDAwKTtcbiAgICAgICAgY2lyY2xlLnJhZGl1cyA9IE1hdGgucm91bmQocmFkaXVzKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoY2lyY2xlLnggLSBtb3VzZVBvc1swXSkgKyBNYXRoLmFicyhjaXJjbGUueSAtIG1vdXNlUG9zWzFdKSA8IDEyMCkge1xuICAgICAgICAgICAgY2lyY2xlLnJhZGl1cyArPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0TGlzdC5nZXQoaSk7XG5cbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IGNpcmNsZS5yYWRpdXM7XG4gICAgICAgIHRleHQueCA9IGNpcmNsZS54O1xuICAgICAgICB0ZXh0LnkgPSBjaXJjbGUueTtcbiAgICB9KTtcblxuXG4gICAgZ3JvdXBMaXN0LmZvckVhY2gocmVuZGVyZXIuZHJhdywgcmVuZGVyZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6ICgpID0+IHt9LFxuICAgIGRlc3Ryb3k6ICgpID0+IHt9LFxuICAgIHJlbmRlclxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvZHJhZ2dhYmxlX3Jlc2lhemFibGUudHMiXSwic291cmNlUm9vdCI6IiJ9