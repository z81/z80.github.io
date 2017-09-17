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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(15));
__export(__webpack_require__(16));
__export(__webpack_require__(17));
__export(__webpack_require__(18));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventListener_1 = __webpack_require__(2);
var ElementBase = (function () {
    function ElementBase() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.borderSize = 1;
        this.borderColor = "#000";
        this.background = "#fff";
        this.cursor = "";
        this.rotate = 0;
        this.aimationType = "linear";
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(19));
__export(__webpack_require__(20));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));
__export(__webpack_require__(12));


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

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stats_1 = __webpack_require__(8);
var src_1 = __webpack_require__(4);
var circles_1 = __webpack_require__(14);
var animation_1 = __webpack_require__(21);
var draggable_resiazable_1 = __webpack_require__(22);
var window_1 = __webpack_require__(23);
var fps = 30;
var selectedDemoIdx = 0;
var demos = [
    {
        name: "Circle anim",
        demo: circles_1.default
    },
    {
        name: "Draggable Resizable",
        demo: draggable_resiazable_1.default
    },
    {
        name: "Animation plugin",
        demo: animation_1.default
    },
    {
        name: "Window",
        demo: window_1.default
    }
];
var FpsProp = function () {
    this.maxFps = fps;
};
var text = new FpsProp();
var gui = new window["dat"].GUI();
var getDemo = function () { return demos[selectedDemoIdx].demo; };
var selectDemo = function (idx) {
    getDemo().destroy();
    selectedDemoIdx = idx;
    getDemo().init();
    getDemo().props(gui);
};
window["selectDemo"] = selectDemo;
var menu = document.getElementById("menu");
menu.innerHTML = demos
    .map(function (_a, idx) {
    var name = _a.name;
    return "<button onclick=\"selectDemo(" + idx + ")\">" + name + "</button>";
})
    .join("");
// STATS
var stats = new Stats_1.default();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.dom.style.left = "inherit";
stats.dom.style.top = "inherit";
stats.dom.style.right = "0";
stats.dom.style.bottom = "0";
document.body.appendChild(stats.dom);
//
// CRATE NODE
var rootNode = document.getElementById("app");
// INIT RENDERER
var renderer = src_1.GraphicEngine.init("canvas");
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
var createRenderTimer = function () {
    return setInterval(function () {
        render(Date.now());
    }, 1000 / fps);
};
var thisRenderTimerIdx = createRenderTimer();
//requestAnimationFrame(render);
gui.add(text, "maxFps", 1, 100).onChange(function (value) {
    fps = value;
    clearInterval(thisRenderTimerIdx);
    thisRenderTimerIdx = createRenderTimer();
});


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasAdapter_1 = __webpack_require__(10);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasEventsListener_1 = __webpack_require__(11);
var EventListener_1 = __webpack_require__(2);
var CanvasAdapter = (function () {
    function CanvasAdapter() {
        this.elementNode = null;
        this.canvasNode = null;
        this.ctx = null;
        this.cache = [];
        this.antiAliasing = false;
    }
    CanvasAdapter.prototype.createCanvas = function () {
        this.canvasNode = document.createElement("canvas");
        this.elementNode.appendChild(this.canvasNode);
    };
    CanvasAdapter.prototype.initContext = function () {
        this.ctx = this.canvasNode.getContext("2d");
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
        EventListener_1.default.on("mousemove", function (event, element) {
            _this.setCursor(element.cursor);
        });
        EventListener_1.default.on("mouseleave", function (event, element) {
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
            case "circle":
                return this.drawCircle(element);
            case "text":
                return this.drawText(element);
            case "rect":
                return this.drawRect(element);
            case "group":
                return element.children.forEach(this.draw, this);
        }
    };
    CanvasAdapter.prototype.drawRect = function (config) {
        var x = config.x, y = config.y, background = config.background, borderColor = config.borderColor, width = config.width, height = config.height, rotate = config.rotate;
        if (!this.antiAliasing) {
            x += 0.5;
            y += 0.5;
        }
        //this.ctx.save();
        this.ctx.beginPath();
        this.configureCanvas(config);
        // if (rotate !== 0 && config._prevRotate !== rotate) {
        //   this.ctx.translate(x + width / 2, y + height / 2);
        //   this.ctx.rotate(rotate * Math.PI / 180);
        //   this.ctx.rect(-width / 2, -height, width, height);
        //   config._prevRotate = rotate;
        // } else if (rotate !== 0) {
        this.ctx.rect(x, y, width, height);
        // }
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.translate(0, 0);
        //this.ctx.restore();
    };
    CanvasAdapter.prototype.drawText = function (config) {
        var x = config.x, y = config.y, text = config.text, color = config.color, font = config.font, fontSize = config.fontSize, align = config.align;
        this.ctx.beginPath();
        this.ctx.font = font;
        if (align) {
            var textSize = this.ctx.measureText(text);
            if (align === "center") {
                x -= textSize.width / 2;
                y += fontSize / 2;
            }
        }
        this.configureCanvas(config);
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    };
    CanvasAdapter.prototype.drawCircle = function (config) {
        var x = config.x, y = config.y, radius = config.radius, background = config.background, lineWidth = config.lineWidth, borderColor = config.borderColor;
        if (!this.antiAliasing) {
            x += 0.5;
            y += 0.5;
        }
        this.ctx.beginPath();
        this.configureCanvas(config);
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
    };
    CanvasAdapter.prototype.configureCanvas = function (_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height, background = _a.background, borderColor = _a.borderColor, borderSize = _a.borderSize;
        this.ctx.fillStyle = background;
        this.ctx.strokeStyle = borderColor;
        if (borderSize !== undefined) {
            this.ctx.lineWidth = borderSize;
        }
    };
    CanvasAdapter.prototype.clear = function () {
        this.cache.length = 0;
        this.ctx.clearRect(0, 0, this.canvasNode.width, this.canvasNode.height);
    };
    return CanvasAdapter;
}());
exports.default = CanvasAdapter;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventListener_1 = __webpack_require__(2);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationTypes_1 = __webpack_require__(13);
var ANIMATION_SPEED = {
    slow: 1500,
    fast: 100
};
var ANIMATION_FPS = 60;
var activeAnimations = new Map();
var getAnimationTiming = function (type, t, b, c, d) {
    if (AnimationTypes_1.default[type] === undefined) {
        throw Error("Unknown animation type");
    }
    return AnimationTypes_1.default[type](t, b, c, d);
};
var AnimationCreator = (function () {
    function AnimationCreator(callback, time) {
        this.steps = [];
        this.activeAnimations = [];
        if (callback) {
            this.step(callback, time);
        }
    }
    AnimationCreator.prototype.step = function (config, animationDuration) {
        var _this = this;
        if (typeof config === "object") {
            var keys = Object.keys(config);
            keys.forEach(function (attribute) {
                var actionType = "attribute";
                var endValue = config[attribute];
                var timingType = config.timing;
                _this.steps.push({
                    actionType: actionType,
                    attribute: attribute,
                    endValue: endValue,
                    timingType: timingType,
                    animationDuration: animationDuration
                });
            });
        }
    };
    AnimationCreator.prototype.end = function () {
        return this.animationHandler.bind(this);
    };
    AnimationCreator.prototype.stopAnimation = function (canvasTarget) {
        var animations = activeAnimations.get(canvasTarget);
        animations.forEach(function (id) { return clearInterval(id); });
        animations.length = 0;
    };
    AnimationCreator.prototype.animationHandler = function (_a) {
        var canvasTarget = _a.canvasTarget;
        if (!activeAnimations.has(canvasTarget)) {
            activeAnimations.set(canvasTarget, []);
        }
        this.stopAnimation(canvasTarget);
        this.steps.forEach(this.animateStep.bind(this, canvasTarget));
    };
    AnimationCreator.prototype.animateStep = function (canvasTarget, animationConfig) {
        var _this = this;
        var animations = activeAnimations.get(canvasTarget);
        var attribute = animationConfig.attribute, endValue = animationConfig.endValue;
        animationConfig.startValue = canvasTarget[attribute];
        var i = 0;
        var interval = setInterval(function () {
            _this.startAnimationTimer(canvasTarget, animationConfig, i);
            i += 1000 / ANIMATION_FPS;
        }, 1000 / ANIMATION_FPS);
        animations.push(interval);
    };
    AnimationCreator.prototype.startAnimationTimer = function (canvasTarget, animConfig, t) {
        var startValue = animConfig.startValue, endValue = animConfig.endValue, attribute = animConfig.attribute, animationDuration = animConfig.animationDuration;
        var animationStepValue = (endValue - startValue) / (animationDuration / ANIMATION_FPS);
        var isAnimationCompleted = (endValue >= startValue && canvasTarget[attribute] >= endValue) ||
            (endValue <= startValue && canvasTarget[attribute] <= endValue);
        if (isAnimationCompleted) {
            this.stopAnimation(canvasTarget);
        }
        else {
            canvasTarget[attribute] = getAnimationTiming(canvasTarget.aimationType, t, startValue, endValue - startValue, animationDuration);
        }
    };
    return AnimationCreator;
}());
exports.Animation = function (config, delay) { return new AnimationCreator(config, delay); };
exports.default = exports.Animation;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright В© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
var animationTypes = {
    easeInQuad: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b;
    },
    easeInCubic: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * 0.3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return (-(a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p)) + b);
    },
    easeOutElastic: function (t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * 0.3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) +
            c +
            b);
    },
    easeInOutElastic: function (t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (0.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1)
            return (-0.5 *
                (a *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin((t * d - s) * (2 * Math.PI) / p)) +
                b);
        return (a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) *
            0.5 +
            c +
            b);
    },
    easeInBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (t, b, c, d) {
        return c - this.easing.easeOutBounce(d - t, 0, c, d) + b;
    },
    easeOutBounce: function (t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        }
        else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        }
        else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
    },
    easeInOutBounce: function (t, b, c, d) {
        if (t < d / 2)
            return this.easing.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        return (this.easing.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b);
    }
};
exports.default = animationTypes;
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright В© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Elements_1 = __webpack_require__(0);
var Plugins_1 = __webpack_require__(3);
var getTimeColor = function (timestamp) {
    var color = Math.round((Math.sin(timestamp / 0xff5) + 1) / 2 * 358);
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
    text.align = "center";
    text.fontSize = 20;
    text.moveTo(x + 3, y + 3);
    circle.moveTo(x, y);
    circle.on("click", function () {
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
        if (Math.abs(circle.x - mousePos[0]) + Math.abs(circle.y - mousePos[1]) <
            120) {
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
        document.addEventListener("mousemove", globalMouseMove, false);
    },
    destroy: function () {
        document.removeEventListener("mousemove", globalMouseMove, false);
    },
    render: render,
    props: function (gui) { }
};


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
var ElementBase_1 = __webpack_require__(1);
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
var ElementBase_1 = __webpack_require__(1);
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
var ElementBase_1 = __webpack_require__(1);
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
var ElementBase_1 = __webpack_require__(1);
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 10;
        _this.height = 10;
        _this.borderRadius = 0;
        _this.type = "rect";
        return _this;
    }
    return Rect;
}(ElementBase_1.default));
exports.Rect = Rect;


/***/ }),
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Elements_1 = __webpack_require__(0);
var src_1 = __webpack_require__(4);
var groupList = new Map();
var Props = new function () {
    this.background = "#5a0";
    this.aimationType = "easeInOutElastic";
}();
var circle = new Elements_1.Circle();
circle.radius = 20;
circle.background = Props.background;
circle.moveTo(700, 400);
circle.aimationType = "easeInOutElastic";
circle.on("mouseenter", src_1.Animation({
    radius: 50
}, 1500).end());
circle.on("mouseleave", src_1.Animation({
    radius: 20
}, 1000).end());
groupList.set("123", circle);
//
var rect = new Elements_1.Rect();
rect.width = 50;
rect.height = 50;
rect.background = Props.background;
rect.rotate = 45;
rect.aimationType = "easeInOutBack";
rect.moveTo(200, 400);
rect.on("mousedown", src_1.Animation({
    height: 100,
    width: 100,
    x: 720,
    y: 420
}, 1500).end());
rect.on("mouseleave", src_1.Animation({
    height: 50,
    width: 50,
    x: 200,
    y: 400
}, 1500).end());
groupList.set("1235", rect);
//
var thisGUIItemInstance = [];
var thisGUIInstance = null;
var removeBackgroundProp = function () {
    if (thisGUIItemInstance.length > 0 && thisGUIItemInstance) {
        thisGUIItemInstance.forEach(function (item) { return thisGUIInstance.remove(item); });
        thisGUIItemInstance.length = 0;
    }
};
var avaliableAnimationTypes = [
    "easeInQuad",
    "easeOutQuad",
    "easeInOutQuad",
    "easeInCubic",
    "easeOutCubic",
    "easeInOutCubic",
    "easeInQuart",
    "easeOutQuart",
    "easeInOutQuart",
    "easeInQuint",
    "easeOutQuint",
    "easeInOutQuint",
    "easeInSine",
    "easeOutSine",
    "easeInOutSine",
    "easeInExpo",
    "easeOutExpo",
    "easeInOutExpo",
    "easeInCirc",
    "easeOutCirc",
    "easeInOutCirc",
    "easeInElastic",
    "easeOutElastic",
    "easeInOutElastic",
    "easeInBack",
    "easeOutBack",
    "easeInOutBack",
    "easeInBounce",
    "easeOutBounce",
    "easeInOutBounce"
];
exports.default = {
    init: function () { },
    destroy: function () {
        removeBackgroundProp();
    },
    render: function (_, renderer) { return groupList.forEach(renderer.draw, renderer); },
    props: function (gui) {
        thisGUIInstance = gui;
        removeBackgroundProp();
        thisGUIItemInstance.push(gui
            .add(Props, "aimationType", avaliableAnimationTypes)
            .onChange(function (aimationType) {
            rect.aimationType = aimationType;
            circle.aimationType = aimationType;
        }));
        thisGUIItemInstance.push(gui.addColor(Props, "background").onChange(function (background) {
            rect.background = background;
            circle.background = background;
        }));
    }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Elements_1 = __webpack_require__(0);
var Plugins_1 = __webpack_require__(3);
var getTimeColor = function (timestamp) {
    var color = Math.round((Math.sin(timestamp / 0xff5) + 1) / 2 * 358);
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
        text.align = "center";
        text.x = rect.x + 25;
        text.y = rect.y + 24;
        g
            .use(Plugins_1.Resizable)
            .use(Plugins_1.Draggable)
            .add(rect)
            .add(text);
        groupList.set("r" + id, g);
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
        if (Math.abs(circle.x - mousePos[0]) + Math.abs(circle.y - mousePos[1]) <
            120) {
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
    render: render,
    props: function (gui) { }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Elements_1 = __webpack_require__(0);
var Plugins_1 = __webpack_require__(3);
var groupList = new Set();
var g = new Elements_1.Group();
var win = new Elements_1.Rect();
var header = new Elements_1.Rect();
var headerText = new Elements_1.Text();
var close = new Elements_1.Rect();
var closeText = new Elements_1.Text();
var maxText = new Elements_1.Text();
var minText = new Elements_1.Text();
var max = new Elements_1.Rect();
var min = new Elements_1.Rect();
g.add(win);
g.add(header);
g.add(headerText);
g.add(close);
g.add(min);
g.add(max);
g.add(closeText);
g.add(maxText);
g.add(minText);
g.use(Plugins_1.Draggable).use(Plugins_1.Resizable);
groupList.add(g);
var updateWindow = function (x, y, width, height) {
    win.x = x;
    win.y = y;
    win.width = width;
    win.height = height;
    win.borderColor = "#00BCD4";
    win.borderSize = 7;
    header.x = x;
    header.y = y;
    header.background = "#00BCD4";
    header.width = win.width;
    header.height = 30;
    header.borderColor = "#00BCD4";
    header.borderSize = 1;
    headerText.x = x + 20;
    headerText.y = y + 20;
    headerText.color = "#000";
    headerText.text = "Window title";
    close.width = 25;
    close.height = 25;
    close.x = x + width - close.width;
    close.y = y;
    close.background = "#ff5722";
    close.borderSize = 0;
    max.width = 25;
    max.height = 25;
    max.x = x + width - close.width * 2 - 5;
    max.y = y;
    max.background = "#8bc34a";
    min.width = 25;
    min.height = 25;
    min.x = x + width - close.width * 3 - 10;
    min.y = y;
    min.background = "#3f51b5";
    closeText.x = close.x + 7;
    closeText.y = y + 20;
    closeText.fontSize = close.height;
    closeText.fontName = "Arial";
    closeText.color = "#000";
    closeText.text = "x";
    maxText.x = max.x + 7;
    maxText.y = y + 18;
    maxText.fontSize = 18;
    maxText.fontName = "Arial";
    maxText.color = "#000";
    maxText.text = "🗖";
    minText.x = min.x + 7;
    minText.y = y + 16;
    minText.fontSize = close.height;
    minText.fontName = "Arial";
    minText.color = "#333";
    minText.text = "_";
};
updateWindow(600, 50, 250, 150);
// main render function
var render = function (timestamp, renderer) {
    updateWindow(win.x, win.y, win.width, win.height);
    groupList.forEach(renderer.draw, renderer);
};
exports.default = {
    init: function () { },
    destroy: function () { },
    render: render,
    props: function (gui) { }
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWRlODNiOWFlNDY2YWVkOTdkNTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50cy9FbGVtZW50QmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGx1Z2lucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvTWl4aW5CYXNlLnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0YXRzLmpzL3NyYy9TdGF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JhcGhpY0VuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNBZGFwdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BZGFwdGVycy9DYW52YXNBZGFwdGVyL0NhbnZhc0V2ZW50c0xpc3RlbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2NpcmNsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL1JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvRHJhZ2dhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9QbHVnaW5zL1Jlc2l6YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZHJhZ2dhYmxlX3Jlc2lhemFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvd2luZG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQSxrQ0FBeUI7QUFDekIsa0NBQXVCO0FBQ3ZCLGtDQUF3QjtBQUN4QixrQ0FBdUI7Ozs7Ozs7Ozs7QUNIdkIsNkNBQTZDO0FBRTdDO0lBQUE7UUFDUyxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsTUFBTSxDQUFDO1FBQzdCLGVBQVUsR0FBVyxNQUFNLENBQUM7UUFDNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQVcsUUFBUSxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDTixXQUFNLEdBQUcsRUFBRSxDQUFDO0lBMEI5QixDQUFDO0lBeEJDLDRCQUFNLEdBQU4sVUFBTyxDQUFTLEVBQUUsQ0FBUztRQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFD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QyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELFlBQVksRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELGNBQWMsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxZQUFZLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxjQUFjLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELFdBQVcsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxZQUFZLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELGNBQWMsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsVUFBVSxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELFdBQVcsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxhQUFhLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsVUFBVSxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELFdBQVcsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELGFBQWEsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxVQUFVLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsV0FBVyxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxhQUFhLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMs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QUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxhQUFhLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDO1lBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxZQUFZLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsYUFBYSxFQUFFLFVBQVMsQ0FBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0QsQ0FBQztJQUNILENBQUM7SUFDRCxlQUFlLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMs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QUcsRUFBRSxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMzQixPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUN2QixPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRixZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFaEMsdUJBQXVCO0FBQ3ZCLElBQU0sTUFBTSxHQUFHLFVBQUMsU0FBUyxFQUFFLFFBQVE7SUFDakMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDO0FBRUYsa0JBQWU7SUFDYixJQUFJLEVBQUUsY0FBTyxDQUFDO0lBQ2QsT0FBTyxFQUFFLGNBQU8sQ0FBQztJQUNqQixNQUFNO0lBQ04sS0FBSyxFQUFFLGFBQUcsSUFBSyxDQUFDO0NBQ2pCLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWRlODNiOWFlNDY2YWVkOTdkNTQiLCJleHBvcnQgKiBmcm9tICcuL0NpcmNsZSc7XG5leHBvcnQgKiBmcm9tICcuL1RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9Hcm91cCc7XG5leHBvcnQgKiBmcm9tICcuL1JlY3QnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9pbmRleC50cyIsImltcG9ydCBFdmVudExpc3RlbmVyIGZyb20gXCIuLi9FdmVudExpc3RlbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRCYXNlIHtcbiAgcHVibGljIHg6IG51bWJlciA9IDA7XG4gIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgejogbnVtYmVyID0gMDtcbiAgcHVibGljIGJvcmRlclNpemU6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBib3JkZXJDb2xvcjogc3RyaW5nID0gXCIjMDAwXCI7XG4gIHB1YmxpYyBiYWNrZ3JvdW5kOiBzdHJpbmcgPSBcIiNmZmZcIjtcbiAgcHVibGljIGN1cnNvcjogc3RyaW5nID0gXCJcIjtcbiAgcHVibGljIHJvdGF0ZTogbnVtYmVyID0gMDtcbiAgcHVibGljIGFpbWF0aW9uVHlwZTogc3RyaW5nID0gXCJsaW5lYXJcIjtcbiAgcHJpdmF0ZSBwYXJlbnQgPSBudWxsO1xuICBwdWJsaWMgcmVhZG9ubHkgbWl4aW5zID0ge307XG5cbiAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIEV2ZW50TGlzdGVuZXIub24oZXZlbnROYW1lLCAoZXZlbnQsIHRhcmdldCkgPT4ge1xuICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuXG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaXJlKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudDogRXZlbnQsIHRhcmdldDogYW55KSB7XG4gICAgRXZlbnRMaXN0ZW5lci5maXJlKGV2ZW50TmFtZSwgZXZlbnQsIHRhcmdldCk7XG4gIH1cblxuICB1c2UobWl4aW4pIHtcbiAgICBjb25zdCBuYW1lID0gbWl4aW4ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMubWl4aW5zW25hbWVdID0gbmV3IG1peGluKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9FbGVtZW50QmFzZS50cyIsImNsYXNzIEV2ZW50TGlzdGVuZXIge1xuICAgIHByaXZhdGUgc3RhdGljIGV2ZW50TGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuXG4gICAgc3RhdGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRvRmlyc3Q6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVycy5oYXMoZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5zZXQoZXZlbnROYW1lLCBbXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9GaXJzdCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnROYW1lKS51bnNoaWZ0KGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50TmFtZSkucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpcmUoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudCwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybjtcblxuICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayhldmVudCwgdGFyZ2V0KSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudExpc3RlbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FdmVudExpc3RlbmVyLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9EcmFnZ2FibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9SZXNpemFibGUnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QbHVnaW5zL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9HcmFwaGljRW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vQW5pbWF0aW9uJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJcbmNsYXNzIFBsdWdpbkJhc2Uge1xuICAgIHB1YmxpYyBpc0VuYWJsZWQgPSB0cnVlO1xuXG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luQmFzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGx1Z2lucy9NaXhpbkJhc2UudHMiLCJpbXBvcnQgU3RhdHMgZnJvbSBcInN0YXRzLmpzL3NyYy9TdGF0c1wiO1xuaW1wb3J0IHsgR3JhcGhpY0VuZ2luZSB9IGZyb20gXCIuL3NyY1wiO1xuaW1wb3J0IGNpcmNsZURlbW8gZnJvbSBcIi4vZXhhbXBsZXMvY2lyY2xlc1wiO1xuaW1wb3J0IGFuaW1EZW1vIGZyb20gXCIuL2V4YW1wbGVzL2FuaW1hdGlvblwiO1xuaW1wb3J0IGRyYWdhYmxlUmVzaXphYmxlRGVtbyBmcm9tIFwiLi9leGFtcGxlcy9kcmFnZ2FibGVfcmVzaWF6YWJsZVwiO1xuaW1wb3J0IHdpbmRvd0RlbW8gZnJvbSBcIi4vZXhhbXBsZXMvd2luZG93XCI7XG5cbmxldCBmcHMgPSAzMDtcbmxldCBzZWxlY3RlZERlbW9JZHggPSAwO1xuY29uc3QgZGVtb3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkNpcmNsZSBhbmltXCIsXG4gICAgZGVtbzogY2lyY2xlRGVtb1xuICB9LFxuICB7XG4gICAgbmFtZTogXCJEcmFnZ2FibGUgUmVzaXphYmxlXCIsXG4gICAgZGVtbzogZHJhZ2FibGVSZXNpemFibGVEZW1vXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFuaW1hdGlvbiBwbHVnaW5cIixcbiAgICBkZW1vOiBhbmltRGVtb1xuICB9LFxuICB7XG4gICAgbmFtZTogXCJXaW5kb3dcIixcbiAgICBkZW1vOiB3aW5kb3dEZW1vXG4gIH1cbl07XG5cbmxldCBGcHNQcm9wID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMubWF4RnBzID0gZnBzO1xufTtcblxuY29uc3QgdGV4dCA9IG5ldyBGcHNQcm9wKCk7XG5jb25zdCBndWkgPSBuZXcgd2luZG93W1wiZGF0XCJdLkdVSSgpO1xuXG5jb25zdCBnZXREZW1vID0gKCkgPT4gZGVtb3Nbc2VsZWN0ZWREZW1vSWR4XS5kZW1vO1xuXG5jb25zdCBzZWxlY3REZW1vID0gaWR4ID0+IHtcbiAgZ2V0RGVtbygpLmRlc3Ryb3koKTtcbiAgc2VsZWN0ZWREZW1vSWR4ID0gaWR4O1xuICBnZXREZW1vKCkuaW5pdCgpO1xuICBnZXREZW1vKCkucHJvcHMoZ3VpKTtcbn07XG5cbndpbmRvd1tcInNlbGVjdERlbW9cIl0gPSBzZWxlY3REZW1vO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xubWVudS5pbm5lckhUTUwgPSBkZW1vc1xuICAubWFwKFxuICAgICh7IG5hbWUgfSwgaWR4KSA9PiBgPGJ1dHRvbiBvbmNsaWNrPVwic2VsZWN0RGVtbygke2lkeH0pXCI+JHtuYW1lfTwvYnV0dG9uPmBcbiAgKVxuICAuam9pbihcIlwiKTtcblxuLy8gU1RBVFNcbmNvbnN0IHN0YXRzID0gbmV3IFN0YXRzKCk7XG5zdGF0cy5zaG93UGFuZWwoMCk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG5zdGF0cy5kb20uc3R5bGUubGVmdCA9IFwiaW5oZXJpdFwiO1xuc3RhdHMuZG9tLnN0eWxlLnRvcCA9IFwiaW5oZXJpdFwiO1xuc3RhdHMuZG9tLnN0eWxlLnJpZ2h0ID0gXCIwXCI7XG5zdGF0cy5kb20uc3R5bGUuYm90dG9tID0gXCIwXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XG4vL1xuXG4vLyBDUkFURSBOT0RFXG5jb25zdCByb290Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuXG4vLyBJTklUIFJFTkRFUkVSXG5jb25zdCByZW5kZXJlciA9IEdyYXBoaWNFbmdpbmUuaW5pdChcImNhbnZhc1wiKTtcbnJlbmRlcmVyLmFwcGVuZFRvKHJvb3ROb2RlKTtcbnJlbmRlcmVyLnNldFNpemUoMTAwMCwgOTAwKTtcblxuLy8gbWFpbiByZW5kZXIgZnVuY3Rpb25cbmNvbnN0IHJlbmRlciA9IHRpbWVzdGFtcCA9PiB7XG4gIHN0YXRzLmJlZ2luKCk7XG4gIHJlbmRlcmVyLmNsZWFyKCk7XG4gIGdldERlbW8oKS5yZW5kZXIodGltZXN0YW1wLCByZW5kZXJlcik7XG5cbiAgc3RhdHMuZW5kKCk7XG4gIC8vcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVSZW5kZXJUaW1lciA9ICgpID0+XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICByZW5kZXIoRGF0ZS5ub3coKSk7XG4gIH0sIDEwMDAgLyBmcHMpO1xuXG5sZXQgdGhpc1JlbmRlclRpbWVySWR4ID0gY3JlYXRlUmVuZGVyVGltZXIoKTtcbi8vcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbmd1aS5hZGQodGV4dCwgXCJtYXhGcHNcIiwgMSwgMTAwKS5vbkNoYW5nZShmdW5jdGlvbih2YWx1ZSkge1xuICBmcHMgPSB2YWx1ZTtcbiAgY2xlYXJJbnRlcnZhbCh0aGlzUmVuZGVyVGltZXJJZHgpO1xuICB0aGlzUmVuZGVyVGltZXJJZHggPSBjcmVhdGVSZW5kZXJUaW1lcigpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYWluLnRzIiwiLyoqXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tL1xuICovXG5cbnZhciBTdGF0cyA9IGZ1bmN0aW9uICgpIHtcblxuXHR2YXIgbW9kZSA9IDA7XG5cblx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjAuOTt6LWluZGV4OjEwMDAwJztcblx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNob3dQYW5lbCggKysgbW9kZSAlIGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggKTtcblxuXHR9LCBmYWxzZSApO1xuXG5cdC8vXG5cblx0ZnVuY3Rpb24gYWRkUGFuZWwoIHBhbmVsICkge1xuXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBwYW5lbC5kb20gKTtcblx0XHRyZXR1cm4gcGFuZWw7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHNob3dQYW5lbCggaWQgKSB7XG5cblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRjb250YWluZXIuY2hpbGRyZW5bIGkgXS5zdHlsZS5kaXNwbGF5ID0gaSA9PT0gaWQgPyAnYmxvY2snIDogJ25vbmUnO1xuXG5cdFx0fVxuXG5cdFx0bW9kZSA9IGlkO1xuXG5cdH1cblxuXHQvL1xuXG5cdHZhciBiZWdpblRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKSwgcHJldlRpbWUgPSBiZWdpblRpbWUsIGZyYW1lcyA9IDA7XG5cblx0dmFyIGZwc1BhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ0ZQUycsICcjMGZmJywgJyMwMDInICkgKTtcblx0dmFyIG1zUGFuZWwgPSBhZGRQYW5lbCggbmV3IFN0YXRzLlBhbmVsKCAnTVMnLCAnIzBmMCcsICcjMDIwJyApICk7XG5cblx0aWYgKCBzZWxmLnBlcmZvcm1hbmNlICYmIHNlbGYucGVyZm9ybWFuY2UubWVtb3J5ICkge1xuXG5cdFx0dmFyIG1lbVBhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ01CJywgJyNmMDgnLCAnIzIwMScgKSApO1xuXG5cdH1cblxuXHRzaG93UGFuZWwoIDAgKTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0UkVWSVNJT046IDE2LFxuXG5cdFx0ZG9tOiBjb250YWluZXIsXG5cblx0XHRhZGRQYW5lbDogYWRkUGFuZWwsXG5cdFx0c2hvd1BhbmVsOiBzaG93UGFuZWwsXG5cblx0XHRiZWdpbjogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRiZWdpblRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKTtcblxuXHRcdH0sXG5cblx0XHRlbmQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0ZnJhbWVzICsrO1xuXG5cdFx0XHR2YXIgdGltZSA9ICggcGVyZm9ybWFuY2UgfHwgRGF0ZSApLm5vdygpO1xuXG5cdFx0XHRtc1BhbmVsLnVwZGF0ZSggdGltZSAtIGJlZ2luVGltZSwgMjAwICk7XG5cblx0XHRcdGlmICggdGltZSA+IHByZXZUaW1lICsgMTAwMCApIHtcblxuXHRcdFx0XHRmcHNQYW5lbC51cGRhdGUoICggZnJhbWVzICogMTAwMCApIC8gKCB0aW1lIC0gcHJldlRpbWUgKSwgMTAwICk7XG5cblx0XHRcdFx0cHJldlRpbWUgPSB0aW1lO1xuXHRcdFx0XHRmcmFtZXMgPSAwO1xuXG5cdFx0XHRcdGlmICggbWVtUGFuZWwgKSB7XG5cblx0XHRcdFx0XHR2YXIgbWVtb3J5ID0gcGVyZm9ybWFuY2UubWVtb3J5O1xuXHRcdFx0XHRcdG1lbVBhbmVsLnVwZGF0ZSggbWVtb3J5LnVzZWRKU0hlYXBTaXplIC8gMTA0ODU3NiwgbWVtb3J5LmpzSGVhcFNpemVMaW1pdCAvIDEwNDg1NzYgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGJlZ2luVGltZSA9IHRoaXMuZW5kKCk7XG5cblx0XHR9LFxuXG5cdFx0Ly8gQmFja3dhcmRzIENvbXBhdGliaWxpdHlcblxuXHRcdGRvbUVsZW1lbnQ6IGNvbnRhaW5lcixcblx0XHRzZXRNb2RlOiBzaG93UGFuZWxcblxuXHR9O1xuXG59O1xuXG5TdGF0cy5QYW5lbCA9IGZ1bmN0aW9uICggbmFtZSwgZmcsIGJnICkge1xuXG5cdHZhciBtaW4gPSBJbmZpbml0eSwgbWF4ID0gMCwgcm91bmQgPSBNYXRoLnJvdW5kO1xuXHR2YXIgUFIgPSByb3VuZCggd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSApO1xuXG5cdHZhciBXSURUSCA9IDgwICogUFIsIEhFSUdIVCA9IDQ4ICogUFIsXG5cdFx0XHRURVhUX1ggPSAzICogUFIsIFRFWFRfWSA9IDIgKiBQUixcblx0XHRcdEdSQVBIX1ggPSAzICogUFIsIEdSQVBIX1kgPSAxNSAqIFBSLFxuXHRcdFx0R1JBUEhfV0lEVEggPSA3NCAqIFBSLCBHUkFQSF9IRUlHSFQgPSAzMCAqIFBSO1xuXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuXHRjYW52YXMud2lkdGggPSBXSURUSDtcblx0Y2FudmFzLmhlaWdodCA9IEhFSUdIVDtcblx0Y2FudmFzLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6ODBweDtoZWlnaHQ6NDhweCc7XG5cblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xuXHRjb250ZXh0LmZvbnQgPSAnYm9sZCAnICsgKCA5ICogUFIgKSArICdweCBIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZic7XG5cdGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0Y29udGV4dC5maWxsUmVjdCggMCwgMCwgV0lEVEgsIEhFSUdIVCApO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gZmc7XG5cdGNvbnRleHQuZmlsbFRleHQoIG5hbWUsIFRFWFRfWCwgVEVYVF9ZICk7XG5cdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRILCBHUkFQSF9IRUlHSFQgKTtcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC45O1xuXHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCwgR1JBUEhfSEVJR0hUICk7XG5cblx0cmV0dXJuIHtcblxuXHRcdGRvbTogY2FudmFzLFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIHZhbHVlLCBtYXhWYWx1ZSApIHtcblxuXHRcdFx0bWluID0gTWF0aC5taW4oIG1pbiwgdmFsdWUgKTtcblx0XHRcdG1heCA9IE1hdGgubWF4KCBtYXgsIHZhbHVlICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIDAsIDAsIFdJRFRILCBHUkFQSF9ZICk7XG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGZnO1xuXHRcdFx0Y29udGV4dC5maWxsVGV4dCggcm91bmQoIHZhbHVlICkgKyAnICcgKyBuYW1lICsgJyAoJyArIHJvdW5kKCBtaW4gKSArICctJyArIHJvdW5kKCBtYXggKSArICcpJywgVEVYVF9YLCBURVhUX1kgKTtcblxuXHRcdFx0Y29udGV4dC5kcmF3SW1hZ2UoIGNhbnZhcywgR1JBUEhfWCArIFBSLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9IRUlHSFQsIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX0hFSUdIVCApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YICsgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfWSwgUFIsIEdSQVBIX0hFSUdIVCApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDAuOTtcblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1ggKyBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9ZLCBQUiwgcm91bmQoICggMSAtICggdmFsdWUgLyBtYXhWYWx1ZSApICkgKiBHUkFQSF9IRUlHSFQgKSApO1xuXG5cdFx0fVxuXG5cdH07XG5cbn07XG5cbmV4cG9ydCB7IFN0YXRzIGFzIGRlZmF1bHQgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0YXRzLmpzL3NyYy9TdGF0cy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ2FudmFzQWRhcHRlciBmcm9tICcuL0FkYXB0ZXJzL0NhbnZhc0FkYXB0ZXIvQ2FudmFzQWRhcHRlcic7XG5cbmV4cG9ydCBjbGFzcyBHcmFwaGljRW5naW5lIHtcbiAgICBzdGF0aWMgaW5pdChyZW5kZXJlcklkOiBzdHJpbmcgPSAnY2FudmFzJykge1xuICAgICAgICBpZiAocmVuZGVyZXJJZCA9PT0gJ2NhbnZhcycpIHJldHVybiBuZXcgQ2FudmFzQWRhcHRlcigpO1xuXG4gICAgICAgIHRocm93IEVycm9yKCdVbmtub3duIHJlbmRlcmVyJyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9HcmFwaGljRW5naW5lLnRzIiwiaW1wb3J0IENhbnZhc0V2ZW50c0xpc3RlbmVyIGZyb20gXCIuL0NhbnZhc0V2ZW50c0xpc3RlbmVyXCI7XG5pbXBvcnQgRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi4vLi4vRXZlbnRMaXN0ZW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNBZGFwdGVyIHtcbiAgcHJpdmF0ZSBlbGVtZW50Tm9kZSA9IG51bGw7XG4gIHByaXZhdGUgY2FudmFzTm9kZSA9IG51bGw7XG4gIHByaXZhdGUgY3R4ID0gbnVsbDtcbiAgcHJpdmF0ZSBjYWNoZSA9IFtdO1xuICBwcml2YXRlIGV2ZW50TGlzdGVuZXI7XG4gIHB1YmxpYyBhbnRpQWxpYXNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGNyZWF0ZUNhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuZWxlbWVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXNOb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvbnRleHQoKSB7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc05vZGUuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG5cbiAgYXBwZW5kVG8oZWxlbWVudE5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Tm9kZSA9IGVsZW1lbnROb2RlO1xuXG4gICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICB0aGlzLmluaXRDb250ZXh0KCk7XG4gICAgdGhpcy5hdXRvU2l6ZSgpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lciA9IG5ldyBDYW52YXNFdmVudHNMaXN0ZW5lcih0aGlzLmNhbnZhc05vZGUsIHRoaXMuY2FjaGUpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kRXZlbnRzKCkge1xuICAgIEV2ZW50TGlzdGVuZXIub24oXCJtb3VzZW1vdmVcIiwgKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLnNldEN1cnNvcihlbGVtZW50LmN1cnNvcik7XG4gICAgfSk7XG5cbiAgICBFdmVudExpc3RlbmVyLm9uKFwibW91c2VsZWF2ZVwiLCAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0Q3Vyc29yKGVsZW1lbnQuY3Vyc29yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGF1dG9TaXplKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5lbGVtZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBzZXRTaXplKHdpZHRoOiBOdW1iZXIsIGhlaWdodDogTnVtYmVyKSB7XG4gICAgdGhpcy5jYW52YXNOb2RlLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXNOb2RlLmhlaWdodCA9IGhlaWdodDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q3Vyc29yKGN1cnNvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5jYW52YXNOb2RlLnN0eWxlLmN1cnNvciA9IGN1cnNvcjtcbiAgfVxuXG4gIGRyYXcoZWxlbWVudCwgaSkge1xuICAgIHRoaXMuY2FjaGUucHVzaChlbGVtZW50KTtcblxuICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXdDaXJjbGUoZWxlbWVudCk7XG4gICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5kcmF3VGV4dChlbGVtZW50KTtcbiAgICAgIGNhc2UgXCJyZWN0XCI6XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXdSZWN0KGVsZW1lbnQpO1xuICAgICAgY2FzZSBcImdyb3VwXCI6XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2godGhpcy5kcmF3LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBkcmF3UmVjdChjb25maWcpIHtcbiAgICBsZXQgeyB4LCB5LCBiYWNrZ3JvdW5kLCBib3JkZXJDb2xvciwgd2lkdGgsIGhlaWdodCwgcm90YXRlIH0gPSBjb25maWc7XG5cbiAgICBpZiAoIXRoaXMuYW50aUFsaWFzaW5nKSB7XG4gICAgICB4ICs9IDAuNTtcbiAgICAgIHkgKz0gMC41O1xuICAgIH1cblxuICAgIC8vdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY29uZmlndXJlQ2FudmFzKGNvbmZpZyk7XG4gICAgLy8gaWYgKHJvdGF0ZSAhPT0gMCAmJiBjb25maWcuX3ByZXZSb3RhdGUgIT09IHJvdGF0ZSkge1xuICAgIC8vICAgdGhpcy5jdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcbiAgICAvLyAgIHRoaXMuY3R4LnJvdGF0ZShyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAvLyAgIHRoaXMuY3R4LnJlY3QoLXdpZHRoIC8gMiwgLWhlaWdodCwgd2lkdGgsIGhlaWdodCk7XG4gICAgLy8gICBjb25maWcuX3ByZXZSb3RhdGUgPSByb3RhdGU7XG4gICAgLy8gfSBlbHNlIGlmIChyb3RhdGUgIT09IDApIHtcbiAgICB0aGlzLmN0eC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC50cmFuc2xhdGUoMCwgMCk7XG4gICAgLy90aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3VGV4dChjb25maWcpIHtcbiAgICBsZXQgeyB4LCB5LCB0ZXh0LCBjb2xvciwgZm9udCwgZm9udFNpemUsIGFsaWduIH0gPSBjb25maWc7XG5cbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5mb250ID0gZm9udDtcblxuICAgIGlmIChhbGlnbikge1xuICAgICAgY29uc3QgdGV4dFNpemUgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcblxuICAgICAgaWYgKGFsaWduID09PSBcImNlbnRlclwiKSB7XG4gICAgICAgIHggLT0gdGV4dFNpemUud2lkdGggLyAyO1xuICAgICAgICB5ICs9IGZvbnRTaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZ3VyZUNhbnZhcyhjb25maWcpO1xuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gIH1cblxuICBkcmF3Q2lyY2xlKGNvbmZpZykge1xuICAgIGxldCB7IHgsIHksIHJhZGl1cywgYmFja2dyb3VuZCwgbGluZVdpZHRoLCBib3JkZXJDb2xvciB9ID0gY29uZmlnO1xuXG4gICAgaWYgKCF0aGlzLmFudGlBbGlhc2luZykge1xuICAgICAgeCArPSAwLjU7XG4gICAgICB5ICs9IDAuNTtcbiAgICB9XG5cbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmNvbmZpZ3VyZUNhbnZhcyhjb25maWcpO1xuICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgY29uZmlndXJlQ2FudmFzKHtcbiAgICB4LFxuICAgIHksXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGJhY2tncm91bmQsXG4gICAgYm9yZGVyQ29sb3IsXG4gICAgYm9yZGVyU2l6ZVxuICB9KSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZDtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuXG4gICAgaWYgKGJvcmRlclNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gYm9yZGVyU2l6ZTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNhY2hlLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzTm9kZS53aWR0aCwgdGhpcy5jYW52YXNOb2RlLmhlaWdodCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BZGFwdGVycy9DYW52YXNBZGFwdGVyL0NhbnZhc0FkYXB0ZXIudHMiLCJpbXBvcnQgRXZlbnRMaXN0ZW5lciBmcm9tICcuLi8uLi9FdmVudExpc3RlbmVyJztcblxuY2xhc3MgQ2FudmFzRXZlbnRzTGlzdGVuZXIge1xuICAgIHByaXZhdGUgY2FjaGU7XG4gICAgcHJpdmF0ZSBjYW52YXNOb2RlO1xuICAgIHByaXZhdGUgZXZlbnRzRm9yV2F0Y2ggPSBbJ21vdXNlbW92ZScsICdjbGljaycsICdtb3VzZXVwJywgJ21vdXNlZG93biddO1xuICAgIHByaXZhdGUgcHJldlRhcmdldCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNOb2RlLCBjYWNoZSkge1xuICAgICAgICB0aGlzLmNhbnZhc05vZGUgPSBjYW52YXNOb2RlO1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50c0xpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHhyYXkoeyB0eXBlLCB4LCB5LCByYWRpdXMsIHdpZHRoLCBoZWlnaHQgfSwgcG9pbnRYLCBwb2ludFkpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAocG9pbnRYID49IHggJiYgcG9pbnRYIDw9IHggKyB3aWR0aCkgJiZcbiAgICAgICAgICAgICAgICAocG9pbnRZID49IHkgJiYgcG9pbnRZIDw9IHkgKyBoZWlnaHQpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIE1hdGgucG93KHBvaW50WCAtIHgsIDIpICsgTWF0aC5wb3cocG9pbnRZIC0geSwgMikgPD0gTWF0aC5wb3cocmFkaXVzICsgMSwgMilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaXJlRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5wcmV2VGFyZ2V0ICE9PSBudWxsICYmIHRoaXMucHJldlRhcmdldCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgICAgRXZlbnRMaXN0ZW5lci5maXJlKCdtb3VzZWxlYXZlJywgZXZlbnQsIHRoaXMucHJldlRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmV2VGFyZ2V0ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbW91c2VlbnRlcicsIHRoaXMucHJldlRhcmdldCwgZWxlbWVudClcbiAgICAgICAgICAgIEV2ZW50TGlzdGVuZXIuZmlyZSgnbW91c2VlbnRlcicsIGV2ZW50LCBlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlRhcmdldCA9IGVsZW1lbnQ7XG4gICAgICAgIEV2ZW50TGlzdGVuZXIuZmlyZShldmVudE5hbWUsIGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goZWwgPT4gRXZlbnRMaXN0ZW5lci5maXJlKGV2ZW50TmFtZSwgZXZlbnQsIGVsKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudEhhbmRsZXIoZXZlbnROYW1lLCBldmVudCwgcm9vdCA9IHRoaXMuY2FjaGUsIGlzR3JvdXAgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50c09uQ3Vyc29yID0gW107XG5cbiAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIHJvb3QpIHtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlcihldmVudE5hbWUsIGV2ZW50LCBlbGVtZW50LmNoaWxkcmVuLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZmlyZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c09uQ3Vyc29yLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy54cmF5KGVsZW1lbnQsIGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmZpcmVFdmVudChldmVudE5hbWUsIGV2ZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50c09uQ3Vyc29yLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5jYW52YXNUYXJnZXQgPSBudWxsO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZWxlbWVudHNPbkN1cnNvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNhbnZhc1RhcmdldCA9PT0gbnVsbCB8fCBldmVudC5jYW52YXNUYXJnZXQueiA8IGVsZW1lbnRzT25DdXJzb3JbaV0ueikge1xuICAgICAgICAgICAgICAgIGV2ZW50LmNhbnZhc1RhcmdldCA9IGVsZW1lbnRzT25DdXJzb3JbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuY2FudmFzVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaXNHcm91cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZXZlbnQuY2FudmFzVGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByZXZUYXJnZXQgIT09IG51bGwgJiYgIWlzR3JvdXApIHtcbiAgICAgICAgICAgIGV2ZW50LmNhbnZhc1RhcmdldCA9IHRoaXMucHJldlRhcmdldDtcbiAgICAgICAgICAgIEV2ZW50TGlzdGVuZXIuZmlyZSgnbW91c2VsZWF2ZScsIGV2ZW50LCB0aGlzLnByZXZUYXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5wcmV2VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmV2ZW50c0ZvcldhdGNoLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc05vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNFdmVudHNMaXN0ZW5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNFdmVudHNMaXN0ZW5lci50cyIsImltcG9ydCBhbmltYXRpb25UeXBlcyBmcm9tIFwiLi9BbmltYXRpb25UeXBlc1wiO1xuXG5jb25zdCBBTklNQVRJT05fU1BFRUQgPSB7XG4gIHNsb3c6IDE1MDAsXG4gIGZhc3Q6IDEwMFxufTtcblxuY29uc3QgQU5JTUFUSU9OX0ZQUyA9IDYwO1xuXG5jb25zdCBhY3RpdmVBbmltYXRpb25zID0gbmV3IE1hcCgpO1xuXG5jb25zdCBnZXRBbmltYXRpb25UaW1pbmcgPSAodHlwZSwgdCwgYiwgYywgZCkgPT4ge1xuICBpZiAoYW5pbWF0aW9uVHlwZXNbdHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IEVycm9yKFwiVW5rbm93biBhbmltYXRpb24gdHlwZVwiKTtcbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb25UeXBlc1t0eXBlXSh0LCBiLCBjLCBkKTtcbn07XG5cbmNsYXNzIEFuaW1hdGlvbkNyZWF0b3Ige1xuICBwcml2YXRlIHN0ZXBzID0gW107XG4gIHByaXZhdGUgYWN0aXZlQW5pbWF0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCB0aW1lKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnN0ZXAoY2FsbGJhY2ssIHRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0ZXAoY29uZmlnLCBhbmltYXRpb25EdXJhdGlvbikge1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgICAgIGtleXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb25UeXBlID0gXCJhdHRyaWJ1dGVcIjtcbiAgICAgICAgY29uc3QgZW5kVmFsdWUgPSBjb25maWdbYXR0cmlidXRlXTtcbiAgICAgICAgY29uc3QgdGltaW5nVHlwZSA9IGNvbmZpZy50aW1pbmc7XG5cbiAgICAgICAgdGhpcy5zdGVwcy5wdXNoKHtcbiAgICAgICAgICBhY3Rpb25UeXBlLFxuICAgICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgICB0aW1pbmdUeXBlLFxuICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0b3BBbmltYXRpb24oY2FudmFzVGFyZ2V0KSB7XG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IGFjdGl2ZUFuaW1hdGlvbnMuZ2V0KGNhbnZhc1RhcmdldCk7XG4gICAgYW5pbWF0aW9ucy5mb3JFYWNoKGlkID0+IGNsZWFySW50ZXJ2YWwoaWQpKTtcbiAgICBhbmltYXRpb25zLmxlbmd0aCA9IDA7XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGlvbkhhbmRsZXIoeyBjYW52YXNUYXJnZXQgfSkge1xuICAgIGlmICghYWN0aXZlQW5pbWF0aW9ucy5oYXMoY2FudmFzVGFyZ2V0KSkge1xuICAgICAgYWN0aXZlQW5pbWF0aW9ucy5zZXQoY2FudmFzVGFyZ2V0LCBbXSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wQW5pbWF0aW9uKGNhbnZhc1RhcmdldCk7XG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKHRoaXMuYW5pbWF0ZVN0ZXAuYmluZCh0aGlzLCBjYW52YXNUYXJnZXQpKTtcbiAgfVxuXG4gIHByaXZhdGUgYW5pbWF0ZVN0ZXAoY2FudmFzVGFyZ2V0LCBhbmltYXRpb25Db25maWcpIHtcbiAgICBjb25zdCBhbmltYXRpb25zID0gYWN0aXZlQW5pbWF0aW9ucy5nZXQoY2FudmFzVGFyZ2V0KTtcbiAgICBjb25zdCB7IGF0dHJpYnV0ZSwgZW5kVmFsdWUgfSA9IGFuaW1hdGlvbkNvbmZpZztcbiAgICBhbmltYXRpb25Db25maWcuc3RhcnRWYWx1ZSA9IGNhbnZhc1RhcmdldFthdHRyaWJ1dGVdO1xuXG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGlvblRpbWVyKGNhbnZhc1RhcmdldCwgYW5pbWF0aW9uQ29uZmlnLCBpKTtcblxuICAgICAgaSArPSAxMDAwIC8gQU5JTUFUSU9OX0ZQUztcbiAgICB9LCAxMDAwIC8gQU5JTUFUSU9OX0ZQUyk7XG5cbiAgICBhbmltYXRpb25zLnB1c2goaW50ZXJ2YWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydEFuaW1hdGlvblRpbWVyKGNhbnZhc1RhcmdldCwgYW5pbUNvbmZpZywgdCkge1xuICAgIGNvbnN0IHsgc3RhcnRWYWx1ZSwgZW5kVmFsdWUsIGF0dHJpYnV0ZSwgYW5pbWF0aW9uRHVyYXRpb24gfSA9IGFuaW1Db25maWc7XG4gICAgY29uc3QgYW5pbWF0aW9uU3RlcFZhbHVlID1cbiAgICAgIChlbmRWYWx1ZSAtIHN0YXJ0VmFsdWUpIC8gKGFuaW1hdGlvbkR1cmF0aW9uIC8gQU5JTUFUSU9OX0ZQUyk7XG4gICAgY29uc3QgaXNBbmltYXRpb25Db21wbGV0ZWQgPVxuICAgICAgKGVuZFZhbHVlID49IHN0YXJ0VmFsdWUgJiYgY2FudmFzVGFyZ2V0W2F0dHJpYnV0ZV0gPj0gZW5kVmFsdWUpIHx8XG4gICAgICAoZW5kVmFsdWUgPD0gc3RhcnRWYWx1ZSAmJiBjYW52YXNUYXJnZXRbYXR0cmlidXRlXSA8PSBlbmRWYWx1ZSk7XG5cbiAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZWQpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihjYW52YXNUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXNUYXJnZXRbYXR0cmlidXRlXSA9IGdldEFuaW1hdGlvblRpbWluZyhcbiAgICAgICAgY2FudmFzVGFyZ2V0LmFpbWF0aW9uVHlwZSxcbiAgICAgICAgdCxcbiAgICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgICAgZW5kVmFsdWUgLSBzdGFydFZhbHVlLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGlvbiA9IChjb25maWcsIGRlbGF5KSA9PiBuZXcgQW5pbWF0aW9uQ3JlYXRvcihjb25maWcsIGRlbGF5KTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FuaW1hdGlvbi50cyIsIi8qXG4gKiBqUXVlcnkgRWFzaW5nIHYxLjMgLSBodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvXG4gKlxuICogVXNlcyB0aGUgYnVpbHQgaW4gZWFzaW5nIGNhcGFiaWxpdGllcyBhZGRlZCBJbiBqUXVlcnkgMS4xXG4gKiB0byBvZmZlciBtdWx0aXBsZSBlYXNpbmcgb3B0aW9uc1xuICpcbiAqIFRFUk1TIE9GIFVTRSAtIGpRdWVyeSBFYXNpbmdcbiAqIFxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLiBcbiAqIFxuICogQ29weXJpZ2h0INCSwqkgMjAwOCBHZW9yZ2UgTWNHaW5sZXkgU21pdGhcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBcbiAqIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IFxuICogb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgXG4gKiBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiBcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIFxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqIFxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxuICogIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgXG4gKiBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuIFxuICpcbiovXG5cbmNvbnN0IGFuaW1hdGlvblR5cGVzID0ge1xuICBlYXNlSW5RdWFkOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKyBiO1xuICB9LFxuICBlYXNlT3V0UXVhZDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHJldHVybiAtYyAqICh0IC89IGQpICogKHQgLSAyKSArIGI7XG4gIH0sXG4gIGVhc2VJbk91dFF1YWQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgIHJldHVybiAtYyAvIDIgKiAoLS10ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgfSxcbiAgZWFzZUluQ3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKyBiO1xuICB9LFxuICBlYXNlT3V0Q3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcbiAgfSxcbiAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICsgYjtcbiAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcbiAgfSxcbiAgZWFzZUluUXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcbiAgfSxcbiAgZWFzZU91dFF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIC1jICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAtIDEpICsgYjtcbiAgfSxcbiAgZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIC1jIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAtIDIpICsgYjtcbiAgfSxcbiAgZWFzZUluUXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XG4gIH0sXG4gIGVhc2VPdXRRdWludDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7XG4gIH0sXG4gIGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgKiB0ICsgMikgKyBiO1xuICB9LFxuICBlYXNlSW5TaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIC1jICogTWF0aC5jb3ModCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGMgKyBiO1xuICB9LFxuICBlYXNlT3V0U2luZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHJldHVybiBjICogTWF0aC5zaW4odCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGI7XG4gIH0sXG4gIGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gLWMgLyAyICogKE1hdGguY29zKE1hdGguUEkgKiB0IC8gZCkgLSAxKSArIGI7XG4gIH0sXG4gIGVhc2VJbkV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gdCA9PSAwID8gYiA6IGMgKiBNYXRoLnBvdygyLCAxMCAqICh0IC8gZCAtIDEpKSArIGI7XG4gIH0sXG4gIGVhc2VPdXRFeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIHQgPT0gZCA/IGIgKyBjIDogYyAqICgtTWF0aC5wb3coMiwgLTEwICogdCAvIGQpICsgMSkgKyBiO1xuICB9LFxuICBlYXNlSW5PdXRFeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XG4gICAgaWYgKHQgPT0gZCkgcmV0dXJuIGIgKyBjO1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICsgYjtcbiAgICByZXR1cm4gYyAvIDIgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XG4gIH0sXG4gIGVhc2VJbkNpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gLWMgKiAoTWF0aC5zcXJ0KDEgLSAodCAvPSBkKSAqIHQpIC0gMSkgKyBiO1xuICB9LFxuICBlYXNlT3V0Q2lyYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSAodCA9IHQgLyBkIC0gMSkgKiB0KSArIGI7XG4gIH0sXG4gIGVhc2VJbk91dENpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIC1jIC8gMiAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpICsgYjtcbiAgICByZXR1cm4gYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgKyBiO1xuICB9LFxuICBlYXNlSW5FbGFzdGljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgIHZhciBwID0gMDtcbiAgICB2YXIgYSA9IGM7XG4gICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XG4gICAgaWYgKCh0IC89IGQpID09IDEpIHJldHVybiBiICsgYztcbiAgICBpZiAoIXApIHAgPSBkICogMC4zO1xuICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgIGEgPSBjO1xuICAgICAgdmFyIHMgPSBwIC8gNDtcbiAgICB9IGVsc2UgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgcmV0dXJuIChcbiAgICAgIC0oXG4gICAgICAgIGEgKlxuICAgICAgICBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqXG4gICAgICAgIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApXG4gICAgICApICsgYlxuICAgICk7XG4gIH0sXG4gIGVhc2VPdXRFbGFzdGljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgIHZhciBwID0gMDtcbiAgICB2YXIgYSA9IGM7XG4gICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XG4gICAgaWYgKCh0IC89IGQpID09IDEpIHJldHVybiBiICsgYztcbiAgICBpZiAoIXApIHAgPSBkICogMC4zO1xuICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgIGEgPSBjO1xuICAgICAgdmFyIHMgPSBwIC8gNDtcbiAgICB9IGVsc2UgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgcmV0dXJuIChcbiAgICAgIGEgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICtcbiAgICAgIGMgK1xuICAgICAgYlxuICAgICk7XG4gIH0sXG4gIGVhc2VJbk91dEVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBhID0gYztcbiAgICBpZiAodCA9PSAwKSByZXR1cm4gYjtcbiAgICBpZiAoKHQgLz0gZCAvIDIpID09IDIpIHJldHVybiBiICsgYztcbiAgICBpZiAoIXApIHAgPSBkICogKDAuMyAqIDEuNSk7XG4gICAgaWYgKGEgPCBNYXRoLmFicyhjKSkge1xuICAgICAgYSA9IGM7XG4gICAgICB2YXIgcyA9IHAgLyA0O1xuICAgIH0gZWxzZSB2YXIgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcbiAgICBpZiAodCA8IDEpXG4gICAgICByZXR1cm4gKFxuICAgICAgICAtMC41ICpcbiAgICAgICAgICAoYSAqXG4gICAgICAgICAgICBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqXG4gICAgICAgICAgICBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgK1xuICAgICAgICBiXG4gICAgICApO1xuICAgIHJldHVybiAoXG4gICAgICBhICpcbiAgICAgICAgTWF0aC5wb3coMiwgLTEwICogKHQgLT0gMSkpICpcbiAgICAgICAgTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKlxuICAgICAgICAwLjUgK1xuICAgICAgYyArXG4gICAgICBiXG4gICAgKTtcbiAgfSxcbiAgZWFzZUluQmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xuICAgIGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSArIGI7XG4gIH0sXG4gIGVhc2VPdXRCYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XG4gICAgaWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcbiAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxKSArIGI7XG4gIH0sXG4gIGVhc2VJbk91dEJhY2s6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIHMpIHtcbiAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKVxuICAgICAgcmV0dXJuIGMgLyAyICogKHQgKiB0ICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHQgLSBzKSkgKyBiO1xuICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9IDEuNTI1KSArIDEpICogdCArIHMpICsgMikgKyBiO1xuICB9LFxuICBlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAtIHRoaXMuZWFzaW5nLmVhc2VPdXRCb3VuY2UoZCAtIHQsIDAsIGMsIGQpICsgYjtcbiAgfSxcbiAgZWFzZU91dEJvdW5jZTogZnVuY3Rpb24odDogYW55LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0IC89IGQpIDwgMSAvIDIuNzUpIHtcbiAgICAgIHJldHVybiBjICogKDcuNTYyNSAqIHQgKiB0KSArIGI7XG4gICAgfSBlbHNlIGlmICh0IDwgMiAvIDIuNzUpIHtcbiAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09IDEuNSAvIDIuNzUpICogdCArIDAuNzUpICsgYjtcbiAgICB9IGVsc2UgaWYgKHQgPCAyLjUgLyAyLjc1KSB7XG4gICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAyLjI1IC8gMi43NSkgKiB0ICsgMC45Mzc1KSArIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09IDIuNjI1IC8gMi43NSkgKiB0ICsgMC45ODQzNzUpICsgYjtcbiAgICB9XG4gIH0sXG4gIGVhc2VJbk91dEJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIGlmICh0IDwgZCAvIDIpXG4gICAgICByZXR1cm4gdGhpcy5lYXNpbmcuZWFzZUluQm91bmNlKHQgKiAyLCAwLCBjLCBkKSAqIDAuNSArIGI7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5lYXNpbmcuZWFzZU91dEJvdW5jZSh0ICogMiAtIGQsIDAsIGMsIGQpICogMC41ICsgYyAqIDAuNSArIGJcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhbmltYXRpb25UeXBlcztcbi8qXG4gKlxuICogVEVSTVMgT0YgVVNFIC0gRUFTSU5HIEVRVUFUSU9OU1xuICogXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuIFxuICogXG4gKiBDb3B5cmlnaHQg0JLCqSAyMDAxIFJvYmVydCBQZW5uZXJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBcbiAqIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IFxuICogb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgXG4gKiBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiBcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIFxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqIFxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxuICogIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgXG4gKiBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuIFxuICpcbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FuaW1hdGlvblR5cGVzLnRzIiwiaW1wb3J0IHsgQ2lyY2xlLCBUZXh0LCBHcm91cCB9IGZyb20gXCIuLi9zcmMvRWxlbWVudHNcIjtcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gXCIuLi9zcmMvUGx1Z2luc1wiO1xuXG5jb25zdCBnZXRUaW1lQ29sb3IgPSB0aW1lc3RhbXAgPT4ge1xuICBjb25zdCBjb2xvciA9IE1hdGgucm91bmQoKE1hdGguc2luKHRpbWVzdGFtcCAvIDB4ZmY1KSArIDEpIC8gMiAqIDM1OCk7XG4gIHJldHVybiBgaHNsKCR7Y29sb3J9LCA1MCUsIDUwJSlgO1xufTtcblxuLy8gZ2VuZXJhdGUgcHJpbWl0aXZlc1xuY29uc3QgY2lyY2xlTGlzdCA9IG5ldyBNYXAoKTtcbmNvbnN0IHRleHRMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgZ3JvdXBMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgZnJvemVuRWxlbWVudHMgPSBuZXcgU2V0KCk7XG5cbmNvbnN0IGNvbHMgPSAxMDtcbmNvbnN0IHJvd3MgPSAxMDtcbi8vIGdlbiBjaXJjbGVcbmZvciAobGV0IGkgPSAxOyBpIDw9IGNvbHMgKiByb3dzOyBpKyspIHtcbiAgY29uc3QgeCA9IChpICUgY29scykgKiA2MCArIDQwO1xuICBjb25zdCB5ID0gNjAgKiBNYXRoLmNlaWwoaSAvIGNvbHMpO1xuXG4gIGNvbnN0IGNpcmNsZSA9IG5ldyBDaXJjbGUoKTtcbiAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KCk7XG4gIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gIGdyb3VwLmFkZChjaXJjbGUpO1xuICBncm91cC5hZGQodGV4dCk7XG4gIGdyb3VwLnVzZShEcmFnZ2FibGUpO1xuXG4gIHRleHQudGV4dCA9IGAke2l9YDtcbiAgdGV4dC5hbGlnbiA9IFwiY2VudGVyXCI7XG4gIHRleHQuZm9udFNpemUgPSAyMDtcbiAgdGV4dC5tb3ZlVG8oeCArIDMsIHkgKyAzKTtcblxuICBjaXJjbGUubW92ZVRvKHgsIHkpO1xuICBjaXJjbGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGZyb3plbkVsZW1lbnRzLmhhcyhjaXJjbGUpKSB7XG4gICAgICBmcm96ZW5FbGVtZW50cy5kZWxldGUoY2lyY2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJvemVuRWxlbWVudHMuYWRkKGNpcmNsZSk7XG4gICAgfVxuICB9KTtcblxuICBjaXJjbGVMaXN0LnNldChpLCBjaXJjbGUpO1xuICB0ZXh0TGlzdC5zZXQoaSwgdGV4dCk7XG4gIGdyb3VwTGlzdC5zZXQoaSwgZ3JvdXApO1xufVxuXG5jb25zdCBtb3VzZVBvcyA9IFswLCAwXTtcblxuLy8gbWFpbiByZW5kZXIgZnVuY3Rpb25cbmNvbnN0IHJlbmRlciA9ICh0aW1lc3RhbXAsIHJlbmRlcmVyKSA9PiB7XG4gIGNpcmNsZUxpc3QuZm9yRWFjaCgoY2lyY2xlLCBpKSA9PiB7XG4gICAgaWYgKGZyb3plbkVsZW1lbnRzLmhhcyhjaXJjbGUpKSByZXR1cm47XG5cbiAgICBjb25zdCByYWRpdXMgPSAoTWF0aC5zaW4odGltZXN0YW1wIC8gMTAwMCArIGkpICsgMSkgKiAxMCArIDEwO1xuICAgIGNpcmNsZS5iYWNrZ3JvdW5kID0gZ2V0VGltZUNvbG9yKHRpbWVzdGFtcCArIGkgKiAxMDAwKTtcbiAgICBjaXJjbGUucmFkaXVzID0gTWF0aC5yb3VuZChyYWRpdXMpO1xuXG4gICAgaWYgKFxuICAgICAgTWF0aC5hYnMoY2lyY2xlLnggLSBtb3VzZVBvc1swXSkgKyBNYXRoLmFicyhjaXJjbGUueSAtIG1vdXNlUG9zWzFdKSA8XG4gICAgICAxMjBcbiAgICApIHtcbiAgICAgIGNpcmNsZS5yYWRpdXMgKz0gMTA7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IHRleHRMaXN0LmdldChpKTtcblxuICAgIHRleHQuZm9udFNpemUgPSBjaXJjbGUucmFkaXVzO1xuICAgIHRleHQueCA9IGNpcmNsZS54O1xuICAgIHRleHQueSA9IGNpcmNsZS55O1xuICB9KTtcblxuICBncm91cExpc3QuZm9yRWFjaChyZW5kZXJlci5kcmF3LCByZW5kZXJlcik7XG59O1xuXG5jb25zdCBnbG9iYWxNb3VzZU1vdmUgPSBlID0+IHtcbiAgbW91c2VQb3NbMF0gPSBlLmNsaWVudFg7XG4gIG1vdXNlUG9zWzFdID0gZS5jbGllbnRZO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBnbG9iYWxNb3VzZU1vdmUsIGZhbHNlKTtcbiAgfSxcbiAgZGVzdHJveTogKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZ2xvYmFsTW91c2VNb3ZlLCBmYWxzZSk7XG4gIH0sXG4gIHJlbmRlcixcbiAgcHJvcHM6IGd1aSA9PiB7fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL2NpcmNsZXMudHMiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi9FbGVtZW50QmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gNTtcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nID0gJ2NpcmNsZSc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvQ2lyY2xlLnRzIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4vRWxlbWVudEJhc2UnO1xuXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIEVsZW1lbnRCYXNlIHtcbiAgICBnZXQgZm9udE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnROYW1lO1xuICAgIH1cblxuICAgIHNldCBmb250TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZm9udCA9IHRoaXMuYnVpbGRGb250KHRoaXMuX2ZvbnRTaXplLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuX2ZvbnROYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGZvbnRTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb250U2l6ZTtcbiAgICB9XG5cbiAgICBzZXQgZm9udFNpemUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmZvbnQgPSB0aGlzLmJ1aWxkRm9udCh2YWx1ZSwgdGhpcy5fZm9udE5hbWUpO1xuICAgICAgICB0aGlzLl9mb250U2l6ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRGb250KGZvbnRTaXplOiBudW1iZXIsIGZvbnROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGAke2ZvbnRTaXplfXB4ICR7Zm9udE5hbWV9YDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcbiAgICBwcml2YXRlIGZvbnQ6IHN0cmluZyA9ICcxNHB4IEdlb3JnaWEnO1xuICAgIHByaXZhdGUgX2ZvbnRTaXplOiBudW1iZXIgPSAxNDtcbiAgICBwcml2YXRlIF9mb250TmFtZTogc3RyaW5nID0gJ0dlb3JnaWEnO1xuICAgIHB1YmxpYyBhbGlnbjogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGNvbG9yOnN0cmluZyA9ICcjZmZmJztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvVGV4dC50cyIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuL0VsZW1lbnRCYXNlJztcblxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuICAgIHB1YmxpYyBjaGlsZHJlbiA9IFtdO1xuXG4gICAgYWRkKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnBhcmVudCA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyB0eXBlOiBTdHJpbmcgPSAnZ3JvdXAnO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9Hcm91cC50cyIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tIFwiLi9FbGVtZW50QmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgUmVjdCBleHRlbmRzIEVsZW1lbnRCYXNlIHtcbiAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAxMDtcbiAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMTA7XG4gIHB1YmxpYyBib3JkZXJSYWRpdXM6IG51bWJlciA9IDA7XG4gIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSBcInJlY3RcIjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9SZWN0LnRzIiwiaW1wb3J0IE1peGluQmFzZSBmcm9tICcuL01peGluQmFzZSc7XG5cbmNvbnN0IGRyYWdnZWRFbGVtZW50cyA9IG5ldyBTZXQoKTtcbmNvbnN0IHN0YXJ0RHJhZ1Bvc2l0aW9ucyA9IG5ldyBNYXAoKTtcblxuY29uc3Qgc3RhcnREcmFnID0gKGVsZW1lbnQsIGUpID0+IHtcbiAgICBzdGFydERyYWdQb3NpdGlvbnMuc2V0KGVsZW1lbnQsIFtlLmNsaWVudFgsIGUuY2xpZW50WV0pO1xuICAgIGRyYWdnZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG59O1xuXG5cbmNvbnN0IHN0b3BEcmFnID0gZWxlbWVudCA9PiB7XG4gICAgZHJhZ2dlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICBzdGFydERyYWdQb3NpdGlvbnMuZGVsZXRlKGVsZW1lbnQpXG59O1xuXG5cbmNvbnN0IG1vdmVFbGVtZW50ID0gKGVsZW1lbnQsIGR4LCBkeSkgPT4ge1xuICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKGVsID0+IG1vdmVFbGVtZW50KGVsLCBkeCwgZHkpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQueCArPSBkeDtcbiAgICBlbGVtZW50LnkgKz0gZHk7XG59O1xuXG5cbmNvbnN0IGRyYWcgPSAoZWxlbWVudCwgZSkgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IHN0YXJ0RHJhZ1Bvc2l0aW9ucy5nZXQoZWxlbWVudCk7XG4gICAgY29uc3QgZHggPSBlLmNsaWVudFggLSB4O1xuICAgIGNvbnN0IGR5ID0gZS5jbGllbnRZIC0geTtcbiAgICBzdGFydERyYWdQb3NpdGlvbnMuc2V0KGVsZW1lbnQsIFtlLmNsaWVudFgsIGUuY2xpZW50WV0pO1xuXG4gICAgbW92ZUVsZW1lbnQoZWxlbWVudCwgZHgsIGR5KTtcbn07XG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgIGRyYWdnZWRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnQubWl4aW5zLmRyYWdnYWJsZS5pc0VuYWJsZWQpIHJldHVybjtcblxuICAgICAgICBpZiAoZS5idXR0b25zID09PSAwKSB7XG4gICAgICAgICAgICBkcmFnZ2VkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRyYWdnZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGRyYWcoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBNaXhpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2Vkb3duJywgc3RhcnREcmFnLmJpbmQodGhpcywgZWxlbWVudCkpO1xuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZXVwJywgc3RvcERyYWcuYmluZCh0aGlzLCBlbGVtZW50KSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnZ2FibGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1BsdWdpbnMvRHJhZ2dhYmxlLnRzIiwiaW1wb3J0IE1peGluQmFzZSBmcm9tICcuL01peGluQmFzZSc7XG5cblxuY29uc3QgcmVzaXplQXJlYVNpemUgPSAxMDtcblxuY29uc3QgRElSRUNUSU9OID0ge1xuICAgIE5PTkU6IDAsXG4gICAgTEVGVDogMixcbiAgICBUT1A6IDQsXG4gICAgUklHSFQ6IDgsXG4gICAgQk9UVE9NOiAxNlxufTtcblxubGV0IHJlc2l6YWJsZUVsZW1lbnQgPSBudWxsO1xubGV0IHJlc2l6ZURpcmVjdGlvbiA9IERJUkVDVElPTi5OT05FO1xubGV0IHJlc2l6ZVN0YXJ0UG9zaXRpb24gPSBbXTtcblxuXG5jb25zdCBjaGFuZ2VPZmZzZXRTaXplQW5kUG9zID0gKGVsZW1lbnQsIG9mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHQsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCkgPT4ge1xuICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKGVsID0+IGNoYW5nZU9mZnNldFNpemVBbmRQb3MoZWwsIG9mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHQsIG9mZnNldFgsIG9mZnNldFkpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQud2lkdGggKz0gb2Zmc2V0V2lkdGg7XG4gICAgZWxlbWVudC5oZWlnaHQgKz0gb2Zmc2V0SGVpZ2h0O1xuICAgIGVsZW1lbnQueCArPSBvZmZzZXRYO1xuICAgIGVsZW1lbnQueSArPSBvZmZzZXRZO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICBpZiAocmVzaXphYmxlRWxlbWVudCAhPT0gbnVsbCAmJiByZXNpemFibGVFbGVtZW50Lm1peGlucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgcmVzaXphYmxlRWxlbWVudC5taXhpbnMuZHJhZ2dhYmxlLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIHJlc2l6YWJsZUVsZW1lbnQgPSBudWxsO1xufSwgZmFsc2UpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICh7IG9mZnNldFgsIG9mZnNldFkgfSkgPT4ge1xuICAgIGlmIChyZXNpemFibGVFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHJlc2l6ZVN0YXJ0UG9zaXRpb247XG5cbiAgICAgICAgaWYgKHJlc2l6ZURpcmVjdGlvbiAmIERJUkVDVElPTi5SSUdIVCkge1xuICAgICAgICAgICAgY2hhbmdlT2Zmc2V0U2l6ZUFuZFBvcyhyZXNpemFibGVFbGVtZW50LCBvZmZzZXRYIC0geCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzaXplRGlyZWN0aW9uICYgRElSRUNUSU9OLkxFRlQpIHtcbiAgICAgICAgICAgIGNoYW5nZU9mZnNldFNpemVBbmRQb3MocmVzaXphYmxlRWxlbWVudCwgeCAtIG9mZnNldFgsIDAsIG9mZnNldFggLSB4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzaXplRGlyZWN0aW9uICYgRElSRUNUSU9OLkJPVFRPTSkge1xuICAgICAgICAgICAgY2hhbmdlT2Zmc2V0U2l6ZUFuZFBvcyhyZXNpemFibGVFbGVtZW50LCAwLCBvZmZzZXRZIC0geSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzaXplRGlyZWN0aW9uICYgRElSRUNUSU9OLlRPUCkge1xuICAgICAgICAgICAgY2hhbmdlT2Zmc2V0U2l6ZUFuZFBvcyhyZXNpemFibGVFbGVtZW50LCAwLCB5IC0gb2Zmc2V0WSwgMCwgb2Zmc2V0WSAtIHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzaXplU3RhcnRQb3NpdGlvblswXSA9IG9mZnNldFg7XG4gICAgICAgIHJlc2l6ZVN0YXJ0UG9zaXRpb25bMV0gPSBvZmZzZXRZO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSwgZmFsc2UpO1xuXG5cbmNvbnN0IGdldERpcmVjdGlvbiA9ICh7IHdpZHRoLCBoZWlnaHQsIHgsIHksIHR5cGUsIGNoaWxkcmVuIH0sIGN1cnNvclgsIGN1cnNvclkpID0+IHtcbiAgICBsZXQgZGlyZWN0aW9uID0gRElSRUNUSU9OLk5PTkU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdCA9IGdldERpcmVjdGlvbihlbCwgY3Vyc29yWCwgY3Vyc29yWSk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0ICE9PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBpZiAodHlwZSA9PT0gJ3JlY3QnKSB7XG4gICAgICAgIGlmIChjdXJzb3JYID49ICh4ICsgd2lkdGggLSByZXNpemVBcmVhU2l6ZSkgJiYgY3Vyc29yWCA8PSB4ICsgd2lkdGgpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiB8PSBESVJFQ1RJT04uUklHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3Vyc29yWCA+IHggJiYgY3Vyc29yWCA8PSB4ICsgcmVzaXplQXJlYVNpemUpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiB8PSBESVJFQ1RJT04uTEVGVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJzb3JZID49ICh5ICsgaGVpZ2h0IC0gcmVzaXplQXJlYVNpemUpICYmIGN1cnNvclkgPD0geSArIGhlaWdodCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uIHw9IERJUkVDVElPTi5CT1RUT007XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3Vyc29yWSA+PSB5ICYmIGN1cnNvclkgPD0geSArIHJlc2l6ZUFyZWFTaXplKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gfD0gRElSRUNUSU9OLlRPUDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG5cbmV4cG9ydCBjbGFzcyBSZXNpemFibGUgZXh0ZW5kcyBNaXhpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb24oZS5jYW52YXNUYXJnZXQsIGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcblxuICAgICAgICAgICAgaWYgKGUuYnV0dG9ucyA+IDAgJiYgZGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm1peGlucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5taXhpbnMuZHJhZ2dhYmxlLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNpemVEaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgcmVzaXphYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcmVzaXplU3RhcnRQb3NpdGlvbiA9IFtlLm9mZnNldFgsIGUub2Zmc2V0WV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlbW92ZScsICh7IG9mZnNldFgsIG9mZnNldFksIGNhbnZhc1RhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzaXphYmxlRWxlbWVudCAhPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb24oY2FudmFzVGFyZ2V0LCBvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICAgICAgICAgIGxldCBjdXJzb3IgPSAnJztcblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAmIERJUkVDVElPTi5MRUZUKSBjdXJzb3IgPSAndy1yZXNpemUnO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAmIERJUkVDVElPTi5SSUdIVCkgY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gJiBESVJFQ1RJT04uVE9QKSBjdXJzb3IgPSAncy1yZXNpemUnO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAmIERJUkVDVElPTi5CT1RUT00pIGN1cnNvciA9ICdzLXJlc2l6ZSc7XG5cblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkJPVFRPTSArIERJUkVDVElPTi5MRUZUKSBjdXJzb3IgPSAnbmVzdy1yZXNpemUnO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkJPVFRPTSArIERJUkVDVElPTi5SSUdIVCkgY3Vyc29yID0gJ253c2UtcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5UT1AgKyBESVJFQ1RJT04uTEVGVCkgY3Vyc29yID0gJ253c2UtcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5UT1AgKyBESVJFQ1RJT04uUklHSFQpIGN1cnNvciA9ICduZXN3LXJlc2l6ZSc7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuY3Vyc29yID0gY3Vyc29yXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jdXJzb3IgPSAnJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUmVzaXphYmxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QbHVnaW5zL1Jlc2l6YWJsZS50cyIsImltcG9ydCB7IENpcmNsZSwgUmVjdCB9IGZyb20gXCIuLi9zcmMvRWxlbWVudHNcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuLi9zcmNcIjtcbmNvbnN0IGdyb3VwTGlzdCA9IG5ldyBNYXAoKTtcblxuY29uc3QgUHJvcHMgPSBuZXcgZnVuY3Rpb24oKSB7XG4gIHRoaXMuYmFja2dyb3VuZCA9IFwiIzVhMFwiO1xuICB0aGlzLmFpbWF0aW9uVHlwZSA9IFwiZWFzZUluT3V0RWxhc3RpY1wiO1xufSgpO1xuXG5jb25zdCBjaXJjbGUgPSBuZXcgQ2lyY2xlKCk7XG5jaXJjbGUucmFkaXVzID0gMjA7XG5jaXJjbGUuYmFja2dyb3VuZCA9IFByb3BzLmJhY2tncm91bmQ7XG5jaXJjbGUubW92ZVRvKDcwMCwgNDAwKTtcbmNpcmNsZS5haW1hdGlvblR5cGUgPSBcImVhc2VJbk91dEVsYXN0aWNcIjtcblxuY2lyY2xlLm9uKFxuICBcIm1vdXNlZW50ZXJcIixcbiAgQW5pbWF0aW9uKFxuICAgIHtcbiAgICAgIHJhZGl1czogNTBcbiAgICB9LFxuICAgIDE1MDBcbiAgKS5lbmQoKVxuKTtcblxuY2lyY2xlLm9uKFxuICBcIm1vdXNlbGVhdmVcIixcbiAgQW5pbWF0aW9uKFxuICAgIHtcbiAgICAgIHJhZGl1czogMjBcbiAgICB9LFxuICAgIDEwMDBcbiAgKS5lbmQoKVxuKTtcblxuZ3JvdXBMaXN0LnNldChcIjEyM1wiLCBjaXJjbGUpO1xuLy9cbmNvbnN0IHJlY3QgPSBuZXcgUmVjdCgpO1xucmVjdC53aWR0aCA9IDUwO1xucmVjdC5oZWlnaHQgPSA1MDtcbnJlY3QuYmFja2dyb3VuZCA9IFByb3BzLmJhY2tncm91bmQ7XG5yZWN0LnJvdGF0ZSA9IDQ1O1xucmVjdC5haW1hdGlvblR5cGUgPSBcImVhc2VJbk91dEJhY2tcIjtcbnJlY3QubW92ZVRvKDIwMCwgNDAwKTtcblxucmVjdC5vbihcbiAgXCJtb3VzZWRvd25cIixcbiAgQW5pbWF0aW9uKFxuICAgIHtcbiAgICAgIGhlaWdodDogMTAwLFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIHg6IDcyMCxcbiAgICAgIHk6IDQyMFxuICAgIH0sXG4gICAgMTUwMFxuICApLmVuZCgpXG4pO1xuXG5yZWN0Lm9uKFxuICBcIm1vdXNlbGVhdmVcIixcbiAgQW5pbWF0aW9uKFxuICAgIHtcbiAgICAgIGhlaWdodDogNTAsXG4gICAgICB3aWR0aDogNTAsXG4gICAgICB4OiAyMDAsXG4gICAgICB5OiA0MDBcbiAgICB9LFxuICAgIDE1MDBcbiAgKS5lbmQoKVxuKTtcblxuZ3JvdXBMaXN0LnNldChcIjEyMzVcIiwgcmVjdCk7XG4vL1xuXG5sZXQgdGhpc0dVSUl0ZW1JbnN0YW5jZSA9IFtdO1xubGV0IHRoaXNHVUlJbnN0YW5jZSA9IG51bGw7XG5cbmNvbnN0IHJlbW92ZUJhY2tncm91bmRQcm9wID0gKCkgPT4ge1xuICBpZiAodGhpc0dVSUl0ZW1JbnN0YW5jZS5sZW5ndGggPiAwICYmIHRoaXNHVUlJdGVtSW5zdGFuY2UpIHtcbiAgICB0aGlzR1VJSXRlbUluc3RhbmNlLmZvckVhY2goaXRlbSA9PiB0aGlzR1VJSW5zdGFuY2UucmVtb3ZlKGl0ZW0pKTtcbiAgICB0aGlzR1VJSXRlbUluc3RhbmNlLmxlbmd0aCA9IDA7XG4gIH1cbn07XG5cbmNvbnN0IGF2YWxpYWJsZUFuaW1hdGlvblR5cGVzID0gW1xuICBcImVhc2VJblF1YWRcIixcbiAgXCJlYXNlT3V0UXVhZFwiLFxuICBcImVhc2VJbk91dFF1YWRcIixcbiAgXCJlYXNlSW5DdWJpY1wiLFxuICBcImVhc2VPdXRDdWJpY1wiLFxuICBcImVhc2VJbk91dEN1YmljXCIsXG4gIFwiZWFzZUluUXVhcnRcIixcbiAgXCJlYXNlT3V0UXVhcnRcIixcbiAgXCJlYXNlSW5PdXRRdWFydFwiLFxuICBcImVhc2VJblF1aW50XCIsXG4gIFwiZWFzZU91dFF1aW50XCIsXG4gIFwiZWFzZUluT3V0UXVpbnRcIixcbiAgXCJlYXNlSW5TaW5lXCIsXG4gIFwiZWFzZU91dFNpbmVcIixcbiAgXCJlYXNlSW5PdXRTaW5lXCIsXG4gIFwiZWFzZUluRXhwb1wiLFxuICBcImVhc2VPdXRFeHBvXCIsXG4gIFwiZWFzZUluT3V0RXhwb1wiLFxuICBcImVhc2VJbkNpcmNcIixcbiAgXCJlYXNlT3V0Q2lyY1wiLFxuICBcImVhc2VJbk91dENpcmNcIixcbiAgXCJlYXNlSW5FbGFzdGljXCIsXG4gIFwiZWFzZU91dEVsYXN0aWNcIixcbiAgXCJlYXNlSW5PdXRFbGFzdGljXCIsXG4gIFwiZWFzZUluQmFja1wiLFxuICBcImVhc2VPdXRCYWNrXCIsXG4gIFwiZWFzZUluT3V0QmFja1wiLFxuICBcImVhc2VJbkJvdW5jZVwiLFxuICBcImVhc2VPdXRCb3VuY2VcIixcbiAgXCJlYXNlSW5PdXRCb3VuY2VcIlxuXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiAoKSA9PiB7fSxcbiAgZGVzdHJveTogKCkgPT4ge1xuICAgIHJlbW92ZUJhY2tncm91bmRQcm9wKCk7XG4gIH0sXG4gIHJlbmRlcjogKF8sIHJlbmRlcmVyKSA9PiBncm91cExpc3QuZm9yRWFjaChyZW5kZXJlci5kcmF3LCByZW5kZXJlciksXG4gIHByb3BzOiBndWkgPT4ge1xuICAgIHRoaXNHVUlJbnN0YW5jZSA9IGd1aTtcbiAgICByZW1vdmVCYWNrZ3JvdW5kUHJvcCgpO1xuXG4gICAgdGhpc0dVSUl0ZW1JbnN0YW5jZS5wdXNoKFxuICAgICAgZ3VpXG4gICAgICAgIC5hZGQoUHJvcHMsIFwiYWltYXRpb25UeXBlXCIsIGF2YWxpYWJsZUFuaW1hdGlvblR5cGVzKVxuICAgICAgICAub25DaGFuZ2UoZnVuY3Rpb24oYWltYXRpb25UeXBlKSB7XG4gICAgICAgICAgcmVjdC5haW1hdGlvblR5cGUgPSBhaW1hdGlvblR5cGU7XG4gICAgICAgICAgY2lyY2xlLmFpbWF0aW9uVHlwZSA9IGFpbWF0aW9uVHlwZTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpc0dVSUl0ZW1JbnN0YW5jZS5wdXNoKFxuICAgICAgZ3VpLmFkZENvbG9yKFByb3BzLCBcImJhY2tncm91bmRcIikub25DaGFuZ2UoZnVuY3Rpb24oYmFja2dyb3VuZCkge1xuICAgICAgICByZWN0LmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICAgICAgICBjaXJjbGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9hbmltYXRpb24udHMiLCJpbXBvcnQgeyBUZXh0LCBHcm91cCwgUmVjdCB9IGZyb20gXCIuLi9zcmMvRWxlbWVudHNcIjtcbmltcG9ydCB7IERyYWdnYWJsZSwgUmVzaXphYmxlIH0gZnJvbSBcIi4uL3NyYy9QbHVnaW5zXCI7XG5cbmNvbnN0IGdldFRpbWVDb2xvciA9IHRpbWVzdGFtcCA9PiB7XG4gIGNvbnN0IGNvbG9yID0gTWF0aC5yb3VuZCgoTWF0aC5zaW4odGltZXN0YW1wIC8gMHhmZjUpICsgMSkgLyAyICogMzU4KTtcbiAgcmV0dXJuIGBoc2woJHtjb2xvcn0sIDUwJSwgNTAlKWA7XG59O1xuXG4vLyBnZW5lcmF0ZSBwcmltaXRpdmVzXG5jb25zdCBjaXJjbGVMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgdGV4dExpc3QgPSBuZXcgTWFwKCk7XG5jb25zdCBncm91cExpc3QgPSBuZXcgTWFwKCk7XG5jb25zdCBmcm96ZW5FbGVtZW50cyA9IG5ldyBTZXQoKTtcblxubGV0IGlkID0gMTtcbmZvciAobGV0IHggPSAxOyB4IDw9IDI7IHgrKykge1xuICBmb3IgKGxldCB5ID0gMTsgeSA8PSAyOyB5KyspIHtcbiAgICBjb25zdCBnID0gbmV3IEdyb3VwKCk7XG4gICAgZy56ID0gMTtcbiAgICBjb25zdCByZWN0ID0gbmV3IFJlY3QoKTtcbiAgICByZWN0LnggPSA2MDAgKyB4ICogODA7XG4gICAgcmVjdC55ID0gNTAgKyB5ICogODA7XG5cbiAgICByZWN0LndpZHRoID0gNTA7XG4gICAgcmVjdC5oZWlnaHQgPSA1MDtcbiAgICByZWN0LmJhY2tncm91bmQgPSBnZXRUaW1lQ29sb3IoKGlkICsgMSkgKiAzMjU0KTtcblxuICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dCgpO1xuICAgIHRleHQuZm9udFNpemUgPSAyNTtcbiAgICB0ZXh0LnRleHQgPSBgJHtpZH1gO1xuICAgIHRleHQuYWxpZ24gPSBcImNlbnRlclwiO1xuICAgIHRleHQueCA9IHJlY3QueCArIDI1O1xuICAgIHRleHQueSA9IHJlY3QueSArIDI0O1xuXG4gICAgZ1xuICAgICAgLnVzZShSZXNpemFibGUpXG4gICAgICAudXNlKERyYWdnYWJsZSlcbiAgICAgIC5hZGQocmVjdClcbiAgICAgIC5hZGQodGV4dCk7XG5cbiAgICBncm91cExpc3Quc2V0KFwiclwiICsgaWQsIGcpO1xuXG4gICAgaWQrKztcbiAgfVxufVxuXG5jb25zdCBtb3VzZVBvcyA9IFswLCAwXTtcblxuLy8gbWFpbiByZW5kZXIgZnVuY3Rpb25cbmNvbnN0IHJlbmRlciA9ICh0aW1lc3RhbXAsIHJlbmRlcmVyKSA9PiB7XG4gIGNpcmNsZUxpc3QuZm9yRWFjaCgoY2lyY2xlLCBpKSA9PiB7XG4gICAgaWYgKGZyb3plbkVsZW1lbnRzLmhhcyhjaXJjbGUpKSByZXR1cm47XG5cbiAgICBjb25zdCByYWRpdXMgPSAoTWF0aC5zaW4odGltZXN0YW1wIC8gMTAwMCArIGkpICsgMSkgKiAxMCArIDEwO1xuICAgIGNpcmNsZS5iYWNrZ3JvdW5kID0gZ2V0VGltZUNvbG9yKHRpbWVzdGFtcCArIGkgKiAxMDAwKTtcbiAgICBjaXJjbGUucmFkaXVzID0gTWF0aC5yb3VuZChyYWRpdXMpO1xuXG4gICAgaWYgKFxuICAgICAgTWF0aC5hYnMoY2lyY2xlLnggLSBtb3VzZVBvc1swXSkgKyBNYXRoLmFicyhjaXJjbGUueSAtIG1vdXNlUG9zWzFdKSA8XG4gICAgICAxMjBcbiAgICApIHtcbiAgICAgIGNpcmNsZS5yYWRpdXMgKz0gMTA7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IHRleHRMaXN0LmdldChpKTtcblxuICAgIHRleHQuZm9udFNpemUgPSBjaXJjbGUucmFkaXVzO1xuICAgIHRleHQueCA9IGNpcmNsZS54O1xuICAgIHRleHQueSA9IGNpcmNsZS55O1xuICB9KTtcblxuICBncm91cExpc3QuZm9yRWFjaChyZW5kZXJlci5kcmF3LCByZW5kZXJlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6ICgpID0+IHt9LFxuICBkZXN0cm95OiAoKSA9PiB7fSxcbiAgcmVuZGVyLFxuICBwcm9wczogZ3VpID0+IHt9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvZHJhZ2dhYmxlX3Jlc2lhemFibGUudHMiLCJpbXBvcnQgeyBUZXh0LCBHcm91cCwgUmVjdCB9IGZyb20gXCIuLi9zcmMvRWxlbWVudHNcIjtcbmltcG9ydCB7IERyYWdnYWJsZSwgUmVzaXphYmxlIH0gZnJvbSBcIi4uL3NyYy9QbHVnaW5zXCI7XG5cbmNvbnN0IGdyb3VwTGlzdCA9IG5ldyBTZXQoKTtcblxuY29uc3QgZyA9IG5ldyBHcm91cCgpO1xuY29uc3Qgd2luID0gbmV3IFJlY3QoKTtcbmNvbnN0IGhlYWRlciA9IG5ldyBSZWN0KCk7XG5jb25zdCBoZWFkZXJUZXh0ID0gbmV3IFRleHQoKTtcbmNvbnN0IGNsb3NlID0gbmV3IFJlY3QoKTtcbmNvbnN0IGNsb3NlVGV4dCA9IG5ldyBUZXh0KCk7XG5jb25zdCBtYXhUZXh0ID0gbmV3IFRleHQoKTtcbmNvbnN0IG1pblRleHQgPSBuZXcgVGV4dCgpO1xuY29uc3QgbWF4ID0gbmV3IFJlY3QoKTtcbmNvbnN0IG1pbiA9IG5ldyBSZWN0KCk7XG5cbmcuYWRkKHdpbik7XG5nLmFkZChoZWFkZXIpO1xuZy5hZGQoaGVhZGVyVGV4dCk7XG5nLmFkZChjbG9zZSk7XG5nLmFkZChtaW4pO1xuZy5hZGQobWF4KTtcbmcuYWRkKGNsb3NlVGV4dCk7XG5nLmFkZChtYXhUZXh0KTtcbmcuYWRkKG1pblRleHQpO1xuZy51c2UoRHJhZ2dhYmxlKS51c2UoUmVzaXphYmxlKTtcbmdyb3VwTGlzdC5hZGQoZyk7XG5cbmNvbnN0IHVwZGF0ZVdpbmRvdyA9ICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gIHdpbi54ID0geDtcbiAgd2luLnkgPSB5O1xuICB3aW4ud2lkdGggPSB3aWR0aDtcbiAgd2luLmhlaWdodCA9IGhlaWdodDtcbiAgd2luLmJvcmRlckNvbG9yID0gXCIjMDBCQ0Q0XCI7XG4gIHdpbi5ib3JkZXJTaXplID0gNztcbiAgaGVhZGVyLnggPSB4O1xuICBoZWFkZXIueSA9IHk7XG4gIGhlYWRlci5iYWNrZ3JvdW5kID0gXCIjMDBCQ0Q0XCI7XG4gIGhlYWRlci53aWR0aCA9IHdpbi53aWR0aDtcbiAgaGVhZGVyLmhlaWdodCA9IDMwO1xuICBoZWFkZXIuYm9yZGVyQ29sb3IgPSBcIiMwMEJDRDRcIjtcbiAgaGVhZGVyLmJvcmRlclNpemUgPSAxO1xuICBoZWFkZXJUZXh0LnggPSB4ICsgMjA7XG4gIGhlYWRlclRleHQueSA9IHkgKyAyMDtcbiAgaGVhZGVyVGV4dC5jb2xvciA9IFwiIzAwMFwiO1xuICBoZWFkZXJUZXh0LnRleHQgPSBcIldpbmRvdyB0aXRsZVwiO1xuICBjbG9zZS53aWR0aCA9IDI1O1xuICBjbG9zZS5oZWlnaHQgPSAyNTtcbiAgY2xvc2UueCA9IHggKyB3aWR0aCAtIGNsb3NlLndpZHRoO1xuICBjbG9zZS55ID0geTtcbiAgY2xvc2UuYmFja2dyb3VuZCA9IFwiI2ZmNTcyMlwiO1xuICBjbG9zZS5ib3JkZXJTaXplID0gMDtcbiAgbWF4LndpZHRoID0gMjU7XG4gIG1heC5oZWlnaHQgPSAyNTtcbiAgbWF4LnggPSB4ICsgd2lkdGggLSBjbG9zZS53aWR0aCAqIDIgLSA1O1xuICBtYXgueSA9IHk7XG4gIG1heC5iYWNrZ3JvdW5kID0gXCIjOGJjMzRhXCI7XG4gIG1pbi53aWR0aCA9IDI1O1xuICBtaW4uaGVpZ2h0ID0gMjU7XG4gIG1pbi54ID0geCArIHdpZHRoIC0gY2xvc2Uud2lkdGggKiAzIC0gMTA7XG4gIG1pbi55ID0geTtcbiAgbWluLmJhY2tncm91bmQgPSBcIiMzZjUxYjVcIjtcbiAgY2xvc2VUZXh0LnggPSBjbG9zZS54ICsgNztcbiAgY2xvc2VUZXh0LnkgPSB5ICsgMjA7XG4gIGNsb3NlVGV4dC5mb250U2l6ZSA9IGNsb3NlLmhlaWdodDtcbiAgY2xvc2VUZXh0LmZvbnROYW1lID0gXCJBcmlhbFwiO1xuICBjbG9zZVRleHQuY29sb3IgPSBcIiMwMDBcIjtcbiAgY2xvc2VUZXh0LnRleHQgPSBcInhcIjtcbiAgbWF4VGV4dC54ID0gbWF4LnggKyA3O1xuICBtYXhUZXh0LnkgPSB5ICsgMTg7XG4gIG1heFRleHQuZm9udFNpemUgPSAxODtcbiAgbWF4VGV4dC5mb250TmFtZSA9IFwiQXJpYWxcIjtcbiAgbWF4VGV4dC5jb2xvciA9IFwiIzAwMFwiO1xuICBtYXhUZXh0LnRleHQgPSBcIvCfl5ZcIjtcbiAgbWluVGV4dC54ID0gbWluLnggKyA3O1xuICBtaW5UZXh0LnkgPSB5ICsgMTY7XG4gIG1pblRleHQuZm9udFNpemUgPSBjbG9zZS5oZWlnaHQ7XG4gIG1pblRleHQuZm9udE5hbWUgPSBcIkFyaWFsXCI7XG4gIG1pblRleHQuY29sb3IgPSBcIiMzMzNcIjtcbiAgbWluVGV4dC50ZXh0ID0gXCJfXCI7XG59O1xuXG51cGRhdGVXaW5kb3coNjAwLCA1MCwgMjUwLCAxNTApO1xuXG4vLyBtYWluIHJlbmRlciBmdW5jdGlvblxuY29uc3QgcmVuZGVyID0gKHRpbWVzdGFtcCwgcmVuZGVyZXIpID0+IHtcbiAgdXBkYXRlV2luZG93KHdpbi54LCB3aW4ueSwgd2luLndpZHRoLCB3aW4uaGVpZ2h0KTtcbiAgZ3JvdXBMaXN0LmZvckVhY2gocmVuZGVyZXIuZHJhdywgcmVuZGVyZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiAoKSA9PiB7fSxcbiAgZGVzdHJveTogKCkgPT4ge30sXG4gIHJlbmRlcixcbiAgcHJvcHM6IGd1aSA9PiB7fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3dpbmRvdy50cyJdLCJzb3VyY2VSb290IjoiIn0=