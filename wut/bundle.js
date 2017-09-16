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
        this.borderColor = "";
        this.background = "";
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
__export(__webpack_require__(15));
__export(__webpack_require__(16));
__export(__webpack_require__(17));
__export(__webpack_require__(18));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));
__export(__webpack_require__(12));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(19));
__export(__webpack_require__(20));


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
var src_1 = __webpack_require__(3);
var circles_1 = __webpack_require__(14);
var animation_1 = __webpack_require__(21);
var draggable_resiazable_1 = __webpack_require__(22);
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
        this.ctx.fillStyle = color;
        if (align) {
            var textSize = this.ctx.measureText(text);
            if (align === "center") {
                x -= textSize.width / 2;
                y += fontSize / 2;
            }
        }
        this.configureCanvas(config);
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
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height, background = _a.background, borderColor = _a.borderColor, lineWidth = _a.lineWidth;
        if (background !== "") {
            this.ctx.fillStyle = background;
        }
        if (borderColor !== "") {
            this.ctx.strokeStyle = borderColor;
        }
        if (lineWidth !== undefined) {
            this.ctx.lineWidth = lineWidth;
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
        throw Error("Uncnown animation type");
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
var Elements_1 = __webpack_require__(2);
var Plugins_1 = __webpack_require__(4);
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
var Elements_1 = __webpack_require__(2);
var src_1 = __webpack_require__(3);
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
var Elements_1 = __webpack_require__(2);
var Plugins_1 = __webpack_require__(4);
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODk4MmI3MTI5ZjQwY2Y4ZGQxNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL0VsZW1lbnRCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9FdmVudExpc3RlbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9FbGVtZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvTWl4aW5CYXNlLnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0YXRzLmpzL3NyYy9TdGF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JhcGhpY0VuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNBZGFwdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BZGFwdGVycy9DYW52YXNBZGFwdGVyL0NhbnZhc0V2ZW50c0xpc3RlbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2NpcmNsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL1JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvRHJhZ2dhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9QbHVnaW5zL1Jlc2l6YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9hbmltYXRpb24udHMiLCJ3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QUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELFdBQVcsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsWUFBWSxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsY0FBYyxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELFdBQVcsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELFlBQVksRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELGNBQWMsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsV0FBVyxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELFlBQVksRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsY0FBYyxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxVQUFVLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsV0FBVyxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELGFBQWEsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxVQUFVLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsV0FBVyxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsYUFBYSxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELFVBQVUsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELGFBQWEsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFD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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELGFBQWEsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUM7WUFBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELFlBQVksRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFD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QUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5DLEVBQUUsQ0FBQyxDQUNELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLEdBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDRCxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRUQsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUM7QUFFRixrQkFBZTtJQUNiLElBQUksRUFBRSxjQUFPLENBQUM7SUFDZCxPQUFPLEVBQUUsY0FBTyxDQUFDO0lBQ2pCLE1BQU07SUFDTixLQUFLLEVBQUUsYUFBRyxJQUFLLENBQUM7Q0FDakIsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4OTgyYjcxMjlmNDBjZjhkZDE3OCIsImltcG9ydCBFdmVudExpc3RlbmVyIGZyb20gXCIuLi9FdmVudExpc3RlbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRCYXNlIHtcbiAgcHVibGljIHg6IG51bWJlciA9IDA7XG4gIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgejogbnVtYmVyID0gMDtcbiAgcHVibGljIGxpbmVXaWR0aDogbnVtYmVyID0gMTtcbiAgcHVibGljIGJvcmRlckNvbG9yOiBzdHJpbmcgPSBcIlwiO1xuICBwdWJsaWMgYmFja2dyb3VuZDogc3RyaW5nID0gXCJcIjtcbiAgcHVibGljIGN1cnNvcjogc3RyaW5nID0gXCJcIjtcbiAgcHVibGljIHJvdGF0ZTogbnVtYmVyID0gMDtcbiAgcHVibGljIGFpbWF0aW9uVHlwZTogc3RyaW5nID0gXCJsaW5lYXJcIjtcbiAgcHJpdmF0ZSBwYXJlbnQgPSBudWxsO1xuICBwdWJsaWMgcmVhZG9ubHkgbWl4aW5zID0ge307XG5cbiAgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIEV2ZW50TGlzdGVuZXIub24oZXZlbnROYW1lLCAoZXZlbnQsIHRhcmdldCkgPT4ge1xuICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuXG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaXJlKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudDogRXZlbnQsIHRhcmdldDogYW55KSB7XG4gICAgRXZlbnRMaXN0ZW5lci5maXJlKGV2ZW50TmFtZSwgZXZlbnQsIHRhcmdldCk7XG4gIH1cblxuICB1c2UobWl4aW4pIHtcbiAgICBjb25zdCBuYW1lID0gbWl4aW4ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMubWl4aW5zW25hbWVdID0gbmV3IG1peGluKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9FbGVtZW50QmFzZS50cyIsImNsYXNzIEV2ZW50TGlzdGVuZXIge1xuICAgIHByaXZhdGUgc3RhdGljIGV2ZW50TGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuXG4gICAgc3RhdGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRvRmlyc3Q6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVycy5oYXMoZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5zZXQoZXZlbnROYW1lLCBbXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9GaXJzdCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnROYW1lKS51bnNoaWZ0KGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50TmFtZSkucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpcmUoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudCwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybjtcblxuICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayhldmVudCwgdGFyZ2V0KSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudExpc3RlbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FdmVudExpc3RlbmVyLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9DaXJjbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9UZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vR3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9SZWN0JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL0dyYXBoaWNFbmdpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9BbmltYXRpb24nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vRHJhZ2dhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vUmVzaXphYmxlJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGx1Z2lucy9pbmRleC50cyIsIlxuY2xhc3MgUGx1Z2luQmFzZSB7XG4gICAgcHVibGljIGlzRW5hYmxlZCA9IHRydWU7XG5cblxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuaXNFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5CYXNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QbHVnaW5zL01peGluQmFzZS50cyIsImltcG9ydCBTdGF0cyBmcm9tIFwic3RhdHMuanMvc3JjL1N0YXRzXCI7XG5pbXBvcnQgeyBHcmFwaGljRW5naW5lIH0gZnJvbSBcIi4vc3JjXCI7XG5pbXBvcnQgY2lyY2xlRGVtbyBmcm9tIFwiLi9leGFtcGxlcy9jaXJjbGVzXCI7XG5pbXBvcnQgYW5pbURlbW8gZnJvbSBcIi4vZXhhbXBsZXMvYW5pbWF0aW9uXCI7XG5pbXBvcnQgZHJhZ2FibGVSZXNpemFibGVEZW1vIGZyb20gXCIuL2V4YW1wbGVzL2RyYWdnYWJsZV9yZXNpYXphYmxlXCI7XG5cbmxldCBmcHMgPSAzMDtcbmxldCBzZWxlY3RlZERlbW9JZHggPSAwO1xuY29uc3QgZGVtb3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkNpcmNsZSBhbmltXCIsXG4gICAgZGVtbzogY2lyY2xlRGVtb1xuICB9LFxuICB7XG4gICAgbmFtZTogXCJEcmFnZ2FibGUgUmVzaXphYmxlXCIsXG4gICAgZGVtbzogZHJhZ2FibGVSZXNpemFibGVEZW1vXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFuaW1hdGlvbiBwbHVnaW5cIixcbiAgICBkZW1vOiBhbmltRGVtb1xuICB9XG5dO1xuXG5sZXQgRnBzUHJvcCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm1heEZwcyA9IGZwcztcbn07XG5cbmNvbnN0IHRleHQgPSBuZXcgRnBzUHJvcCgpO1xuY29uc3QgZ3VpID0gbmV3IHdpbmRvd1tcImRhdFwiXS5HVUkoKTtcblxuY29uc3QgZ2V0RGVtbyA9ICgpID0+IGRlbW9zW3NlbGVjdGVkRGVtb0lkeF0uZGVtbztcblxuY29uc3Qgc2VsZWN0RGVtbyA9IGlkeCA9PiB7XG4gIGdldERlbW8oKS5kZXN0cm95KCk7XG4gIHNlbGVjdGVkRGVtb0lkeCA9IGlkeDtcbiAgZ2V0RGVtbygpLmluaXQoKTtcbiAgZ2V0RGVtbygpLnByb3BzKGd1aSk7XG59O1xuXG53aW5kb3dbXCJzZWxlY3REZW1vXCJdID0gc2VsZWN0RGVtbztcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbm1lbnUuaW5uZXJIVE1MID0gZGVtb3NcbiAgLm1hcChcbiAgICAoeyBuYW1lIH0sIGlkeCkgPT4gYDxidXR0b24gb25jbGljaz1cInNlbGVjdERlbW8oJHtpZHh9KVwiPiR7bmFtZX08L2J1dHRvbj5gXG4gIClcbiAgLmpvaW4oXCJcIik7XG5cbi8vIFNUQVRTXG5jb25zdCBzdGF0cyA9IG5ldyBTdGF0cygpO1xuc3RhdHMuc2hvd1BhbmVsKDApOyAvLyAwOiBmcHMsIDE6IG1zLCAyOiBtYiwgMys6IGN1c3RvbVxuc3RhdHMuZG9tLnN0eWxlLmxlZnQgPSBcImluaGVyaXRcIjtcbnN0YXRzLmRvbS5zdHlsZS50b3AgPSBcImluaGVyaXRcIjtcbnN0YXRzLmRvbS5zdHlsZS5yaWdodCA9IFwiMFwiO1xuc3RhdHMuZG9tLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xuLy9cblxuLy8gQ1JBVEUgTk9ERVxuY29uc3Qgcm9vdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcblxuLy8gSU5JVCBSRU5ERVJFUlxuY29uc3QgcmVuZGVyZXIgPSBHcmFwaGljRW5naW5lLmluaXQoXCJjYW52YXNcIik7XG5yZW5kZXJlci5hcHBlbmRUbyhyb290Tm9kZSk7XG5yZW5kZXJlci5zZXRTaXplKDEwMDAsIDkwMCk7XG5cbi8vIG1haW4gcmVuZGVyIGZ1bmN0aW9uXG5jb25zdCByZW5kZXIgPSB0aW1lc3RhbXAgPT4ge1xuICBzdGF0cy5iZWdpbigpO1xuICByZW5kZXJlci5jbGVhcigpO1xuICBnZXREZW1vKCkucmVuZGVyKHRpbWVzdGFtcCwgcmVuZGVyZXIpO1xuXG4gIHN0YXRzLmVuZCgpO1xuICAvL3JlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xufTtcblxuY29uc3QgY3JlYXRlUmVuZGVyVGltZXIgPSAoKSA9PlxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgcmVuZGVyKERhdGUubm93KCkpO1xuICB9LCAxMDAwIC8gZnBzKTtcblxubGV0IHRoaXNSZW5kZXJUaW1lcklkeCA9IGNyZWF0ZVJlbmRlclRpbWVyKCk7XG4vL3JlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuXG5ndWkuYWRkKHRleHQsIFwibWF4RnBzXCIsIDEsIDEwMCkub25DaGFuZ2UoZnVuY3Rpb24odmFsdWUpIHtcbiAgZnBzID0gdmFsdWU7XG4gIGNsZWFySW50ZXJ2YWwodGhpc1JlbmRlclRpbWVySWR4KTtcbiAgdGhpc1JlbmRlclRpbWVySWR4ID0gY3JlYXRlUmVuZGVyVGltZXIoKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi50cyIsIi8qKlxuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbS9cbiAqL1xuXG52YXIgU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG5cblx0dmFyIG1vZGUgPSAwO1xuXG5cdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMCc7XG5cdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRzaG93UGFuZWwoICsrIG1vZGUgJSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoICk7XG5cblx0fSwgZmFsc2UgKTtcblxuXHQvL1xuXG5cdGZ1bmN0aW9uIGFkZFBhbmVsKCBwYW5lbCApIHtcblxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggcGFuZWwuZG9tICk7XG5cdFx0cmV0dXJuIHBhbmVsO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBzaG93UGFuZWwoIGlkICkge1xuXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29udGFpbmVyLmNoaWxkcmVuWyBpIF0uc3R5bGUuZGlzcGxheSA9IGkgPT09IGlkID8gJ2Jsb2NrJyA6ICdub25lJztcblxuXHRcdH1cblxuXHRcdG1vZGUgPSBpZDtcblxuXHR9XG5cblx0Ly9cblxuXHR2YXIgYmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCksIHByZXZUaW1lID0gYmVnaW5UaW1lLCBmcmFtZXMgPSAwO1xuXG5cdHZhciBmcHNQYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdGUFMnLCAnIzBmZicsICcjMDAyJyApICk7XG5cdHZhciBtc1BhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ01TJywgJyMwZjAnLCAnIzAyMCcgKSApO1xuXG5cdGlmICggc2VsZi5wZXJmb3JtYW5jZSAmJiBzZWxmLnBlcmZvcm1hbmNlLm1lbW9yeSApIHtcblxuXHRcdHZhciBtZW1QYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdNQicsICcjZjA4JywgJyMyMDEnICkgKTtcblxuXHR9XG5cblx0c2hvd1BhbmVsKCAwICk7XG5cblx0cmV0dXJuIHtcblxuXHRcdFJFVklTSU9OOiAxNixcblxuXHRcdGRvbTogY29udGFpbmVyLFxuXG5cdFx0YWRkUGFuZWw6IGFkZFBhbmVsLFxuXHRcdHNob3dQYW5lbDogc2hvd1BhbmVsLFxuXG5cdFx0YmVnaW46IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0YmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCk7XG5cblx0XHR9LFxuXG5cdFx0ZW5kOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGZyYW1lcyArKztcblxuXHRcdFx0dmFyIHRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKTtcblxuXHRcdFx0bXNQYW5lbC51cGRhdGUoIHRpbWUgLSBiZWdpblRpbWUsIDIwMCApO1xuXG5cdFx0XHRpZiAoIHRpbWUgPiBwcmV2VGltZSArIDEwMDAgKSB7XG5cblx0XHRcdFx0ZnBzUGFuZWwudXBkYXRlKCAoIGZyYW1lcyAqIDEwMDAgKSAvICggdGltZSAtIHByZXZUaW1lICksIDEwMCApO1xuXG5cdFx0XHRcdHByZXZUaW1lID0gdGltZTtcblx0XHRcdFx0ZnJhbWVzID0gMDtcblxuXHRcdFx0XHRpZiAoIG1lbVBhbmVsICkge1xuXG5cdFx0XHRcdFx0dmFyIG1lbW9yeSA9IHBlcmZvcm1hbmNlLm1lbW9yeTtcblx0XHRcdFx0XHRtZW1QYW5lbC51cGRhdGUoIG1lbW9yeS51c2VkSlNIZWFwU2l6ZSAvIDEwNDg1NzYsIG1lbW9yeS5qc0hlYXBTaXplTGltaXQgLyAxMDQ4NTc2ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aW1lO1xuXG5cdFx0fSxcblxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRiZWdpblRpbWUgPSB0aGlzLmVuZCgpO1xuXG5cdFx0fSxcblxuXHRcdC8vIEJhY2t3YXJkcyBDb21wYXRpYmlsaXR5XG5cblx0XHRkb21FbGVtZW50OiBjb250YWluZXIsXG5cdFx0c2V0TW9kZTogc2hvd1BhbmVsXG5cblx0fTtcblxufTtcblxuU3RhdHMuUGFuZWwgPSBmdW5jdGlvbiAoIG5hbWUsIGZnLCBiZyApIHtcblxuXHR2YXIgbWluID0gSW5maW5pdHksIG1heCA9IDAsIHJvdW5kID0gTWF0aC5yb3VuZDtcblx0dmFyIFBSID0gcm91bmQoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEgKTtcblxuXHR2YXIgV0lEVEggPSA4MCAqIFBSLCBIRUlHSFQgPSA0OCAqIFBSLFxuXHRcdFx0VEVYVF9YID0gMyAqIFBSLCBURVhUX1kgPSAyICogUFIsXG5cdFx0XHRHUkFQSF9YID0gMyAqIFBSLCBHUkFQSF9ZID0gMTUgKiBQUixcblx0XHRcdEdSQVBIX1dJRFRIID0gNzQgKiBQUiwgR1JBUEhfSEVJR0hUID0gMzAgKiBQUjtcblxuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcblx0Y2FudmFzLndpZHRoID0gV0lEVEg7XG5cdGNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XG5cdGNhbnZhcy5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOjgwcHg7aGVpZ2h0OjQ4cHgnO1xuXG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcblx0Y29udGV4dC5mb250ID0gJ2JvbGQgJyArICggOSAqIFBSICkgKyAncHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnO1xuXHRjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdGNvbnRleHQuZmlsbFJlY3QoIDAsIDAsIFdJRFRILCBIRUlHSFQgKTtcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGZnO1xuXHRjb250ZXh0LmZpbGxUZXh0KCBuYW1lLCBURVhUX1gsIFRFWFRfWSApO1xuXHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCwgR1JBUEhfSEVJR0hUICk7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDAuOTtcblx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEgsIEdSQVBIX0hFSUdIVCApO1xuXG5cdHJldHVybiB7XG5cblx0XHRkb206IGNhbnZhcyxcblxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCB2YWx1ZSwgbWF4VmFsdWUgKSB7XG5cblx0XHRcdG1pbiA9IE1hdGgubWluKCBtaW4sIHZhbHVlICk7XG5cdFx0XHRtYXggPSBNYXRoLm1heCggbWF4LCB2YWx1ZSApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCAwLCAwLCBXSURUSCwgR1JBUEhfWSApO1xuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBmZztcblx0XHRcdGNvbnRleHQuZmlsbFRleHQoIHJvdW5kKCB2YWx1ZSApICsgJyAnICsgbmFtZSArICcgKCcgKyByb3VuZCggbWluICkgKyAnLScgKyByb3VuZCggbWF4ICkgKyAnKScsIFRFWFRfWCwgVEVYVF9ZICk7XG5cblx0XHRcdGNvbnRleHQuZHJhd0ltYWdlKCBjYW52YXMsIEdSQVBIX1ggKyBQUiwgR1JBUEhfWSwgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfSEVJR0hULCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9IRUlHSFQgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCArIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX1ksIFBSLCBHUkFQSF9IRUlHSFQgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YICsgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfWSwgUFIsIHJvdW5kKCAoIDEgLSAoIHZhbHVlIC8gbWF4VmFsdWUgKSApICogR1JBUEhfSEVJR0hUICkgKTtcblxuXHRcdH1cblxuXHR9O1xuXG59O1xuXG5leHBvcnQgeyBTdGF0cyBhcyBkZWZhdWx0IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdGF0cy5qcy9zcmMvU3RhdHMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENhbnZhc0FkYXB0ZXIgZnJvbSAnLi9BZGFwdGVycy9DYW52YXNBZGFwdGVyL0NhbnZhc0FkYXB0ZXInO1xuXG5leHBvcnQgY2xhc3MgR3JhcGhpY0VuZ2luZSB7XG4gICAgc3RhdGljIGluaXQocmVuZGVyZXJJZDogc3RyaW5nID0gJ2NhbnZhcycpIHtcbiAgICAgICAgaWYgKHJlbmRlcmVySWQgPT09ICdjYW52YXMnKSByZXR1cm4gbmV3IENhbnZhc0FkYXB0ZXIoKTtcblxuICAgICAgICB0aHJvdyBFcnJvcignVW5rbm93biByZW5kZXJlcicpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR3JhcGhpY0VuZ2luZS50cyIsImltcG9ydCBDYW52YXNFdmVudHNMaXN0ZW5lciBmcm9tIFwiLi9DYW52YXNFdmVudHNMaXN0ZW5lclwiO1xuaW1wb3J0IEV2ZW50TGlzdGVuZXIgZnJvbSBcIi4uLy4uL0V2ZW50TGlzdGVuZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzQWRhcHRlciB7XG4gIHByaXZhdGUgZWxlbWVudE5vZGUgPSBudWxsO1xuICBwcml2YXRlIGNhbnZhc05vZGUgPSBudWxsO1xuICBwcml2YXRlIGN0eCA9IG51bGw7XG4gIHByaXZhdGUgY2FjaGUgPSBbXTtcbiAgcHJpdmF0ZSBldmVudExpc3RlbmVyO1xuICBwdWJsaWMgYW50aUFsaWFzaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjcmVhdGVDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmVsZW1lbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzTm9kZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRDb250ZXh0KCkge1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNOb2RlLmdldENvbnRleHQoXCIyZFwiKTtcbiAgfVxuXG4gIGFwcGVuZFRvKGVsZW1lbnROb2RlOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudE5vZGUgPSBlbGVtZW50Tm9kZTtcblxuICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgdGhpcy5pbml0Q29udGV4dCgpO1xuICAgIHRoaXMuYXV0b1NpemUoKTtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXIgPSBuZXcgQ2FudmFzRXZlbnRzTGlzdGVuZXIodGhpcy5jYW52YXNOb2RlLCB0aGlzLmNhY2hlKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgYmluZEV2ZW50cygpIHtcbiAgICBFdmVudExpc3RlbmVyLm9uKFwibW91c2Vtb3ZlXCIsIChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5zZXRDdXJzb3IoZWxlbWVudC5jdXJzb3IpO1xuICAgIH0pO1xuXG4gICAgRXZlbnRMaXN0ZW5lci5vbihcIm1vdXNlbGVhdmVcIiwgKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLnNldEN1cnNvcihlbGVtZW50LmN1cnNvcik7XG4gICAgfSk7XG4gIH1cblxuICBhdXRvU2l6ZSgpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuZWxlbWVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc2V0U2l6ZSh3aWR0aDogTnVtYmVyLCBoZWlnaHQ6IE51bWJlcikge1xuICAgIHRoaXMuY2FudmFzTm9kZS53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzTm9kZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEN1cnNvcihjdXJzb3I6IHN0cmluZykge1xuICAgIHRoaXMuY2FudmFzTm9kZS5zdHlsZS5jdXJzb3IgPSBjdXJzb3I7XG4gIH1cblxuICBkcmF3KGVsZW1lbnQsIGkpIHtcbiAgICB0aGlzLmNhY2hlLnB1c2goZWxlbWVudCk7XG5cbiAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICByZXR1cm4gdGhpcy5kcmF3Q2lyY2xlKGVsZW1lbnQpO1xuICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd1RleHQoZWxlbWVudCk7XG4gICAgICBjYXNlIFwicmVjdFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5kcmF3UmVjdChlbGVtZW50KTtcbiAgICAgIGNhc2UgXCJncm91cFwiOlxuICAgICAgICByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKHRoaXMuZHJhdywgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1JlY3QoY29uZmlnKSB7XG4gICAgbGV0IHsgeCwgeSwgYmFja2dyb3VuZCwgYm9yZGVyQ29sb3IsIHdpZHRoLCBoZWlnaHQsIHJvdGF0ZSB9ID0gY29uZmlnO1xuXG4gICAgaWYgKCF0aGlzLmFudGlBbGlhc2luZykge1xuICAgICAgeCArPSAwLjU7XG4gICAgICB5ICs9IDAuNTtcbiAgICB9XG5cbiAgICAvL3RoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmNvbmZpZ3VyZUNhbnZhcyhjb25maWcpO1xuICAgIC8vIGlmIChyb3RhdGUgIT09IDAgJiYgY29uZmlnLl9wcmV2Um90YXRlICE9PSByb3RhdGUpIHtcbiAgICAvLyAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh4ICsgd2lkdGggLyAyLCB5ICsgaGVpZ2h0IC8gMik7XG4gICAgLy8gICB0aGlzLmN0eC5yb3RhdGUocm90YXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgLy8gICB0aGlzLmN0eC5yZWN0KC13aWR0aCAvIDIsIC1oZWlnaHQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIC8vICAgY29uZmlnLl9wcmV2Um90YXRlID0gcm90YXRlO1xuICAgIC8vIH0gZWxzZSBpZiAocm90YXRlICE9PSAwKSB7XG4gICAgdGhpcy5jdHgucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAvLyB9XG5cbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHgudHJhbnNsYXRlKDAsIDApO1xuICAgIC8vdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd1RleHQoY29uZmlnKSB7XG4gICAgbGV0IHsgeCwgeSwgdGV4dCwgY29sb3IsIGZvbnQsIGZvbnRTaXplLCBhbGlnbiB9ID0gY29uZmlnO1xuXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguZm9udCA9IGZvbnQ7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG5cbiAgICBpZiAoYWxpZ24pIHtcbiAgICAgIGNvbnN0IHRleHRTaXplID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCk7XG5cbiAgICAgIGlmIChhbGlnbiA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgICB4IC09IHRleHRTaXplLndpZHRoIC8gMjtcbiAgICAgICAgeSArPSBmb250U2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVDYW52YXMoY29uZmlnKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgfVxuXG4gIGRyYXdDaXJjbGUoY29uZmlnKSB7XG4gICAgbGV0IHsgeCwgeSwgcmFkaXVzLCBiYWNrZ3JvdW5kLCBsaW5lV2lkdGgsIGJvcmRlckNvbG9yIH0gPSBjb25maWc7XG5cbiAgICBpZiAoIXRoaXMuYW50aUFsaWFzaW5nKSB7XG4gICAgICB4ICs9IDAuNTtcbiAgICAgIHkgKz0gMC41O1xuICAgIH1cblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY29uZmlndXJlQ2FudmFzKGNvbmZpZyk7XG4gICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBjb25maWd1cmVDYW52YXMoeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBiYWNrZ3JvdW5kLCBib3JkZXJDb2xvciwgbGluZVdpZHRoIH0pIHtcbiAgICBpZiAoYmFja2dyb3VuZCAhPT0gXCJcIikge1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoYm9yZGVyQ29sb3IgIT09IFwiXCIpIHtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgfVxuXG4gICAgaWYgKGxpbmVXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jYWNoZS5sZW5ndGggPSAwO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc05vZGUud2lkdGgsIHRoaXMuY2FudmFzTm9kZS5oZWlnaHQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNBZGFwdGVyLnRzIiwiaW1wb3J0IEV2ZW50TGlzdGVuZXIgZnJvbSAnLi4vLi4vRXZlbnRMaXN0ZW5lcic7XG5cbmNsYXNzIENhbnZhc0V2ZW50c0xpc3RlbmVyIHtcbiAgICBwcml2YXRlIGNhY2hlO1xuICAgIHByaXZhdGUgY2FudmFzTm9kZTtcbiAgICBwcml2YXRlIGV2ZW50c0ZvcldhdGNoID0gWydtb3VzZW1vdmUnLCAnY2xpY2snLCAnbW91c2V1cCcsICdtb3VzZWRvd24nXTtcbiAgICBwcml2YXRlIHByZXZUYXJnZXQgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzTm9kZSwgY2FjaGUpIHtcbiAgICAgICAgdGhpcy5jYW52YXNOb2RlID0gY2FudmFzTm9kZTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHNMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICB4cmF5KHsgdHlwZSwgeCwgeSwgcmFkaXVzLCB3aWR0aCwgaGVpZ2h0IH0sIHBvaW50WCwgcG9pbnRZKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAncmVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgKHBvaW50WCA+PSB4ICYmIHBvaW50WCA8PSB4ICsgd2lkdGgpICYmXG4gICAgICAgICAgICAgICAgKHBvaW50WSA+PSB5ICYmIHBvaW50WSA8PSB5ICsgaGVpZ2h0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhwb2ludFggLSB4LCAyKSArIE1hdGgucG93KHBvaW50WSAtIHksIDIpIDw9IE1hdGgucG93KHJhZGl1cyArIDEsIDIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucHJldlRhcmdldCAhPT0gbnVsbCAmJiB0aGlzLnByZXZUYXJnZXQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIEV2ZW50TGlzdGVuZXIuZmlyZSgnbW91c2VsZWF2ZScsIGV2ZW50LCB0aGlzLnByZXZUYXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJldlRhcmdldCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdXNlZW50ZXInLCB0aGlzLnByZXZUYXJnZXQsIGVsZW1lbnQpXG4gICAgICAgICAgICBFdmVudExpc3RlbmVyLmZpcmUoJ21vdXNlZW50ZXInLCBldmVudCwgZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZUYXJnZXQgPSBlbGVtZW50O1xuICAgICAgICBFdmVudExpc3RlbmVyLmZpcmUoZXZlbnROYW1lLCBldmVudCwgZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKGVsID0+IEV2ZW50TGlzdGVuZXIuZmlyZShldmVudE5hbWUsIGV2ZW50LCBlbCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRIYW5kbGVyKGV2ZW50TmFtZSwgZXZlbnQsIHJvb3QgPSB0aGlzLmNhY2hlLCBpc0dyb3VwID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHNPbkN1cnNvciA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiByb290KSB7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIoZXZlbnROYW1lLCBldmVudCwgZWxlbWVudC5jaGlsZHJlbiwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmZpcmVFdmVudChldmVudE5hbWUsIGV2ZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNPbkN1cnNvci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMueHJheShlbGVtZW50LCBldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKSkge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5maXJlRXZlbnQoZXZlbnROYW1lLCBldmVudCwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNPbkN1cnNvci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQuY2FudmFzVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzT25DdXJzb3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jYW52YXNUYXJnZXQgPT09IG51bGwgfHwgZXZlbnQuY2FudmFzVGFyZ2V0LnogPCBlbGVtZW50c09uQ3Vyc29yW2ldLnopIHtcbiAgICAgICAgICAgICAgICBldmVudC5jYW52YXNUYXJnZXQgPSBlbGVtZW50c09uQ3Vyc29yW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmNhbnZhc1RhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGlzR3JvdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnQsIGV2ZW50LmNhbnZhc1RhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcmV2VGFyZ2V0ICE9PSBudWxsICYmICFpc0dyb3VwKSB7XG4gICAgICAgICAgICBldmVudC5jYW52YXNUYXJnZXQgPSB0aGlzLnByZXZUYXJnZXQ7XG4gICAgICAgICAgICBFdmVudExpc3RlbmVyLmZpcmUoJ21vdXNlbGVhdmUnLCBldmVudCwgdGhpcy5wcmV2VGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucHJldlRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50c0xpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5ldmVudHNGb3JXYXRjaC5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudEhhbmRsZXIuYmluZCh0aGlzLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNOb2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzRXZlbnRzTGlzdGVuZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FkYXB0ZXJzL0NhbnZhc0FkYXB0ZXIvQ2FudmFzRXZlbnRzTGlzdGVuZXIudHMiLCJpbXBvcnQgYW5pbWF0aW9uVHlwZXMgZnJvbSBcIi4vQW5pbWF0aW9uVHlwZXNcIjtcblxuY29uc3QgQU5JTUFUSU9OX1NQRUVEID0ge1xuICBzbG93OiAxNTAwLFxuICBmYXN0OiAxMDBcbn07XG5cbmNvbnN0IEFOSU1BVElPTl9GUFMgPSA2MDtcblxuY29uc3QgYWN0aXZlQW5pbWF0aW9ucyA9IG5ldyBNYXAoKTtcblxuY29uc3QgZ2V0QW5pbWF0aW9uVGltaW5nID0gKHR5cGUsIHQsIGIsIGMsIGQpID0+IHtcbiAgaWYgKGFuaW1hdGlvblR5cGVzW3R5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcIlVuY25vd24gYW5pbWF0aW9uIHR5cGVcIik7XG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uVHlwZXNbdHlwZV0odCwgYiwgYywgZCk7XG59O1xuXG5jbGFzcyBBbmltYXRpb25DcmVhdG9yIHtcbiAgcHJpdmF0ZSBzdGVwcyA9IFtdO1xuICBwcml2YXRlIGFjdGl2ZUFuaW1hdGlvbnMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgdGltZSkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgdGhpcy5zdGVwKGNhbGxiYWNrLCB0aW1lKTtcbiAgICB9XG4gIH1cblxuICBzdGVwKGNvbmZpZywgYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gICAgICBrZXlzLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uVHlwZSA9IFwiYXR0cmlidXRlXCI7XG4gICAgICAgIGNvbnN0IGVuZFZhbHVlID0gY29uZmlnW2F0dHJpYnV0ZV07XG4gICAgICAgIGNvbnN0IHRpbWluZ1R5cGUgPSBjb25maWcudGltaW5nO1xuXG4gICAgICAgIHRoaXMuc3RlcHMucHVzaCh7XG4gICAgICAgICAgYWN0aW9uVHlwZSxcbiAgICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgICAgZW5kVmFsdWUsXG4gICAgICAgICAgdGltaW5nVHlwZSxcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25IYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdG9wQW5pbWF0aW9uKGNhbnZhc1RhcmdldCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBhY3RpdmVBbmltYXRpb25zLmdldChjYW52YXNUYXJnZXQpO1xuICAgIGFuaW1hdGlvbnMuZm9yRWFjaChpZCA9PiBjbGVhckludGVydmFsKGlkKSk7XG4gICAgYW5pbWF0aW9ucy5sZW5ndGggPSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBhbmltYXRpb25IYW5kbGVyKHsgY2FudmFzVGFyZ2V0IH0pIHtcbiAgICBpZiAoIWFjdGl2ZUFuaW1hdGlvbnMuaGFzKGNhbnZhc1RhcmdldCkpIHtcbiAgICAgIGFjdGl2ZUFuaW1hdGlvbnMuc2V0KGNhbnZhc1RhcmdldCwgW10pO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcEFuaW1hdGlvbihjYW52YXNUYXJnZXQpO1xuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCh0aGlzLmFuaW1hdGVTdGVwLmJpbmQodGhpcywgY2FudmFzVGFyZ2V0KSk7XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGVTdGVwKGNhbnZhc1RhcmdldCwgYW5pbWF0aW9uQ29uZmlnKSB7XG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IGFjdGl2ZUFuaW1hdGlvbnMuZ2V0KGNhbnZhc1RhcmdldCk7XG4gICAgY29uc3QgeyBhdHRyaWJ1dGUsIGVuZFZhbHVlIH0gPSBhbmltYXRpb25Db25maWc7XG4gICAgYW5pbWF0aW9uQ29uZmlnLnN0YXJ0VmFsdWUgPSBjYW52YXNUYXJnZXRbYXR0cmlidXRlXTtcblxuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpb25UaW1lcihjYW52YXNUYXJnZXQsIGFuaW1hdGlvbkNvbmZpZywgaSk7XG5cbiAgICAgIGkgKz0gMTAwMCAvIEFOSU1BVElPTl9GUFM7XG4gICAgfSwgMTAwMCAvIEFOSU1BVElPTl9GUFMpO1xuXG4gICAgYW5pbWF0aW9ucy5wdXNoKGludGVydmFsKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRBbmltYXRpb25UaW1lcihjYW52YXNUYXJnZXQsIGFuaW1Db25maWcsIHQpIHtcbiAgICBjb25zdCB7IHN0YXJ0VmFsdWUsIGVuZFZhbHVlLCBhdHRyaWJ1dGUsIGFuaW1hdGlvbkR1cmF0aW9uIH0gPSBhbmltQ29uZmlnO1xuICAgIGNvbnN0IGFuaW1hdGlvblN0ZXBWYWx1ZSA9XG4gICAgICAoZW5kVmFsdWUgLSBzdGFydFZhbHVlKSAvIChhbmltYXRpb25EdXJhdGlvbiAvIEFOSU1BVElPTl9GUFMpO1xuICAgIGNvbnN0IGlzQW5pbWF0aW9uQ29tcGxldGVkID1cbiAgICAgIChlbmRWYWx1ZSA+PSBzdGFydFZhbHVlICYmIGNhbnZhc1RhcmdldFthdHRyaWJ1dGVdID49IGVuZFZhbHVlKSB8fFxuICAgICAgKGVuZFZhbHVlIDw9IHN0YXJ0VmFsdWUgJiYgY2FudmFzVGFyZ2V0W2F0dHJpYnV0ZV0gPD0gZW5kVmFsdWUpO1xuXG4gICAgaWYgKGlzQW5pbWF0aW9uQ29tcGxldGVkKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24oY2FudmFzVGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzVGFyZ2V0W2F0dHJpYnV0ZV0gPSBnZXRBbmltYXRpb25UaW1pbmcoXG4gICAgICAgIGNhbnZhc1RhcmdldC5haW1hdGlvblR5cGUsXG4gICAgICAgIHQsXG4gICAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICAgIGVuZFZhbHVlIC0gc3RhcnRWYWx1ZSxcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb25cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBBbmltYXRpb24gPSAoY29uZmlnLCBkZWxheSkgPT4gbmV3IEFuaW1hdGlvbkNyZWF0b3IoY29uZmlnLCBkZWxheSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BbmltYXRpb24udHMiLCIvKlxuICogalF1ZXJ5IEVhc2luZyB2MS4zIC0gaHR0cDovL2dzZ2QuY28udWsvc2FuZGJveC9qcXVlcnkvZWFzaW5nL1xuICpcbiAqIFVzZXMgdGhlIGJ1aWx0IGluIGVhc2luZyBjYXBhYmlsaXRpZXMgYWRkZWQgSW4galF1ZXJ5IDEuMVxuICogdG8gb2ZmZXIgbXVsdGlwbGUgZWFzaW5nIG9wdGlvbnNcbiAqXG4gKiBURVJNUyBPRiBVU0UgLSBqUXVlcnkgRWFzaW5nXG4gKiBcbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS4gXG4gKiBcbiAqIENvcHlyaWdodCDQksKpIDIwMDggR2VvcmdlIE1jR2lubGV5IFNtaXRoXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqIFxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgXG4gKiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIFxuICogcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBcbiAqIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKiBcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgXG4gKiBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcbiAqICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEVcbiAqICBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICogIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIFxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLiBcbiAqXG4qL1xuXG5jb25zdCBhbmltYXRpb25UeXBlcyA9IHtcbiAgZWFzZUluUXVhZDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjtcbiAgfSxcbiAgZWFzZU91dFF1YWQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xuICB9LFxuICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgICByZXR1cm4gLWMgLyAyICogKC0tdCAqICh0IC0gMikgLSAxKSArIGI7XG4gIH0sXG4gIGVhc2VJbkN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICsgYjtcbiAgfSxcbiAgZWFzZU91dEN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG4gIH0sXG4gIGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XG4gIH0sXG4gIGVhc2VJblF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCArIGI7XG4gIH0sXG4gIGVhc2VPdXRRdWFydDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHJldHVybiAtYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgLSAxKSArIGI7XG4gIH0sXG4gIGVhc2VJbk91dFF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKyBiO1xuICAgIHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XG4gIH0sXG4gIGVhc2VJblF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCAqIHQgKyBiO1xuICB9LFxuICBlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgKiB0ICsgMSkgKyBiO1xuICB9LFxuICBlYXNlSW5PdXRRdWludDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpICsgYjtcbiAgfSxcbiAgZWFzZUluU2luZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHJldHVybiAtYyAqIE1hdGguY29zKHQgLyBkICogKE1hdGguUEkgLyAyKSkgKyBjICsgYjtcbiAgfSxcbiAgZWFzZU91dFNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqIE1hdGguc2luKHQgLyBkICogKE1hdGguUEkgLyAyKSkgKyBiO1xuICB9LFxuICBlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIC1jIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCAvIGQpIC0gMSkgKyBiO1xuICB9LFxuICBlYXNlSW5FeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIHQgPT0gMCA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKiAodCAvIGQgLSAxKSkgKyBiO1xuICB9LFxuICBlYXNlT3V0RXhwbzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHJldHVybiB0ID09IGQgPyBiICsgYyA6IGMgKiAoLU1hdGgucG93KDIsIC0xMCAqIHQgLyBkKSArIDEpICsgYjtcbiAgfSxcbiAgZWFzZUluT3V0RXhwbzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIGlmICh0ID09IDApIHJldHVybiBiO1xuICAgIGlmICh0ID09IGQpIHJldHVybiBiICsgYztcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkgcmV0dXJuIGMgLyAyICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXQpICsgMikgKyBiO1xuICB9LFxuICBlYXNlSW5DaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjtcbiAgfSxcbiAgZWFzZU91dENpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqIE1hdGguc3FydCgxIC0gKHQgPSB0IC8gZCAtIDEpICogdCkgKyBiO1xuICB9LFxuICBlYXNlSW5PdXRDaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiAtYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcbiAgfSxcbiAgZWFzZUluRWxhc3RpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSBjO1xuICAgIGlmICh0ID09IDApIHJldHVybiBiO1xuICAgIGlmICgodCAvPSBkKSA9PSAxKSByZXR1cm4gYiArIGM7XG4gICAgaWYgKCFwKSBwID0gZCAqIDAuMztcbiAgICBpZiAoYSA8IE1hdGguYWJzKGMpKSB7XG4gICAgICBhID0gYztcbiAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgfSBlbHNlIHZhciBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuICAgIHJldHVybiAoXG4gICAgICAtKFxuICAgICAgICBhICpcbiAgICAgICAgTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKlxuICAgICAgICBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKVxuICAgICAgKSArIGJcbiAgICApO1xuICB9LFxuICBlYXNlT3V0RWxhc3RpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSBjO1xuICAgIGlmICh0ID09IDApIHJldHVybiBiO1xuICAgIGlmICgodCAvPSBkKSA9PSAxKSByZXR1cm4gYiArIGM7XG4gICAgaWYgKCFwKSBwID0gZCAqIDAuMztcbiAgICBpZiAoYSA8IE1hdGguYWJzKGMpKSB7XG4gICAgICBhID0gYztcbiAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgfSBlbHNlIHZhciBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuICAgIHJldHVybiAoXG4gICAgICBhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSArXG4gICAgICBjICtcbiAgICAgIGJcbiAgICApO1xuICB9LFxuICBlYXNlSW5PdXRFbGFzdGljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgIHZhciBwID0gMDtcbiAgICB2YXIgYSA9IGM7XG4gICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA9PSAyKSByZXR1cm4gYiArIGM7XG4gICAgaWYgKCFwKSBwID0gZCAqICgwLjMgKiAxLjUpO1xuICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgIGEgPSBjO1xuICAgICAgdmFyIHMgPSBwIC8gNDtcbiAgICB9IGVsc2UgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgaWYgKHQgPCAxKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgLTAuNSAqXG4gICAgICAgICAgKGEgKlxuICAgICAgICAgICAgTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKlxuICAgICAgICAgICAgTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICtcbiAgICAgICAgYlxuICAgICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgYSAqXG4gICAgICAgIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqXG4gICAgICAgIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICpcbiAgICAgICAgMC41ICtcbiAgICAgIGMgK1xuICAgICAgYlxuICAgICk7XG4gIH0sXG4gIGVhc2VJbkJhY2s6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIHMpIHtcbiAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogKChzICsgMSkgKiB0IC0gcykgKyBiO1xuICB9LFxuICBlYXNlT3V0QmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xuICAgIGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqICgocyArIDEpICogdCArIHMpICsgMSkgKyBiO1xuICB9LFxuICBlYXNlSW5PdXRCYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XG4gICAgaWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSlcbiAgICAgIHJldHVybiBjIC8gMiAqICh0ICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0IC0gcykpICsgYjtcbiAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHQgKyBzKSArIDIpICsgYjtcbiAgfSxcbiAgZWFzZUluQm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgLSB0aGlzLmVhc2luZy5lYXNlT3V0Qm91bmNlKGQgLSB0LCAwLCBjLCBkKSArIGI7XG4gIH0sXG4gIGVhc2VPdXRCb3VuY2U6IGZ1bmN0aW9uKHQ6IGFueSwgYiwgYywgZCkge1xuICAgIGlmICgodCAvPSBkKSA8IDEgLyAyLjc1KSB7XG4gICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiB0ICogdCkgKyBiO1xuICAgIH0gZWxzZSBpZiAodCA8IDIgLyAyLjc1KSB7XG4gICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAxLjUgLyAyLjc1KSAqIHQgKyAwLjc1KSArIGI7XG4gICAgfSBlbHNlIGlmICh0IDwgMi41IC8gMi43NSkge1xuICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMi4yNSAvIDIuNzUpICogdCArIDAuOTM3NSkgKyBiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAyLjYyNSAvIDIuNzUpICogdCArIDAuOTg0Mzc1KSArIGI7XG4gICAgfVxuICB9LFxuICBlYXNlSW5PdXRCb3VuY2U6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICBpZiAodCA8IGQgLyAyKVxuICAgICAgcmV0dXJuIHRoaXMuZWFzaW5nLmVhc2VJbkJvdW5jZSh0ICogMiwgMCwgYywgZCkgKiAwLjUgKyBiO1xuICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuZWFzaW5nLmVhc2VPdXRCb3VuY2UodCAqIDIgLSBkLCAwLCBjLCBkKSAqIDAuNSArIGMgKiAwLjUgKyBiXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0aW9uVHlwZXM7XG4vKlxuICpcbiAqIFRFUk1TIE9GIFVTRSAtIEVBU0lORyBFUVVBVElPTlNcbiAqIFxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLiBcbiAqIFxuICogQ29weXJpZ2h0INCSwqkgMjAwMSBSb2JlcnQgUGVubmVyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqIFxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgXG4gKiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIFxuICogcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBcbiAqIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKiBcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgXG4gKiBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcbiAqICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEVcbiAqICBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICogIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIFxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLiBcbiAqXG4gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BbmltYXRpb25UeXBlcy50cyIsImltcG9ydCB7IENpcmNsZSwgVGV4dCwgR3JvdXAgfSBmcm9tIFwiLi4vc3JjL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tIFwiLi4vc3JjL1BsdWdpbnNcIjtcblxuY29uc3QgZ2V0VGltZUNvbG9yID0gdGltZXN0YW1wID0+IHtcbiAgY29uc3QgY29sb3IgPSBNYXRoLnJvdW5kKChNYXRoLnNpbih0aW1lc3RhbXAgLyAweGZmNSkgKyAxKSAvIDIgKiAzNTgpO1xuICByZXR1cm4gYGhzbCgke2NvbG9yfSwgNTAlLCA1MCUpYDtcbn07XG5cbi8vIGdlbmVyYXRlIHByaW1pdGl2ZXNcbmNvbnN0IGNpcmNsZUxpc3QgPSBuZXcgTWFwKCk7XG5jb25zdCB0ZXh0TGlzdCA9IG5ldyBNYXAoKTtcbmNvbnN0IGdyb3VwTGlzdCA9IG5ldyBNYXAoKTtcbmNvbnN0IGZyb3plbkVsZW1lbnRzID0gbmV3IFNldCgpO1xuXG5jb25zdCBjb2xzID0gMTA7XG5jb25zdCByb3dzID0gMTA7XG4vLyBnZW4gY2lyY2xlXG5mb3IgKGxldCBpID0gMTsgaSA8PSBjb2xzICogcm93czsgaSsrKSB7XG4gIGNvbnN0IHggPSAoaSAlIGNvbHMpICogNjAgKyA0MDtcbiAgY29uc3QgeSA9IDYwICogTWF0aC5jZWlsKGkgLyBjb2xzKTtcblxuICBjb25zdCBjaXJjbGUgPSBuZXcgQ2lyY2xlKCk7XG4gIGNvbnN0IHRleHQgPSBuZXcgVGV4dCgpO1xuICBjb25zdCBncm91cCA9IG5ldyBHcm91cCgpO1xuICBncm91cC5hZGQoY2lyY2xlKTtcbiAgZ3JvdXAuYWRkKHRleHQpO1xuICBncm91cC51c2UoRHJhZ2dhYmxlKTtcblxuICB0ZXh0LnRleHQgPSBgJHtpfWA7XG4gIHRleHQuYWxpZ24gPSBcImNlbnRlclwiO1xuICB0ZXh0LmZvbnRTaXplID0gMjA7XG4gIHRleHQubW92ZVRvKHggKyAzLCB5ICsgMyk7XG5cbiAgY2lyY2xlLm1vdmVUbyh4LCB5KTtcbiAgY2lyY2xlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChmcm96ZW5FbGVtZW50cy5oYXMoY2lyY2xlKSkge1xuICAgICAgZnJvemVuRWxlbWVudHMuZGVsZXRlKGNpcmNsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb3plbkVsZW1lbnRzLmFkZChjaXJjbGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY2lyY2xlTGlzdC5zZXQoaSwgY2lyY2xlKTtcbiAgdGV4dExpc3Quc2V0KGksIHRleHQpO1xuICBncm91cExpc3Quc2V0KGksIGdyb3VwKTtcbn1cblxuY29uc3QgbW91c2VQb3MgPSBbMCwgMF07XG5cbi8vIG1haW4gcmVuZGVyIGZ1bmN0aW9uXG5jb25zdCByZW5kZXIgPSAodGltZXN0YW1wLCByZW5kZXJlcikgPT4ge1xuICBjaXJjbGVMaXN0LmZvckVhY2goKGNpcmNsZSwgaSkgPT4ge1xuICAgIGlmIChmcm96ZW5FbGVtZW50cy5oYXMoY2lyY2xlKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmFkaXVzID0gKE1hdGguc2luKHRpbWVzdGFtcCAvIDEwMDAgKyBpKSArIDEpICogMTAgKyAxMDtcbiAgICBjaXJjbGUuYmFja2dyb3VuZCA9IGdldFRpbWVDb2xvcih0aW1lc3RhbXAgKyBpICogMTAwMCk7XG4gICAgY2lyY2xlLnJhZGl1cyA9IE1hdGgucm91bmQocmFkaXVzKTtcblxuICAgIGlmIChcbiAgICAgIE1hdGguYWJzKGNpcmNsZS54IC0gbW91c2VQb3NbMF0pICsgTWF0aC5hYnMoY2lyY2xlLnkgLSBtb3VzZVBvc1sxXSkgPFxuICAgICAgMTIwXG4gICAgKSB7XG4gICAgICBjaXJjbGUucmFkaXVzICs9IDEwO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSB0ZXh0TGlzdC5nZXQoaSk7XG5cbiAgICB0ZXh0LmZvbnRTaXplID0gY2lyY2xlLnJhZGl1cztcbiAgICB0ZXh0LnggPSBjaXJjbGUueDtcbiAgICB0ZXh0LnkgPSBjaXJjbGUueTtcbiAgfSk7XG5cbiAgZ3JvdXBMaXN0LmZvckVhY2gocmVuZGVyZXIuZHJhdywgcmVuZGVyZXIpO1xufTtcblxuY29uc3QgZ2xvYmFsTW91c2VNb3ZlID0gZSA9PiB7XG4gIG1vdXNlUG9zWzBdID0gZS5jbGllbnRYO1xuICBtb3VzZVBvc1sxXSA9IGUuY2xpZW50WTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZ2xvYmFsTW91c2VNb3ZlLCBmYWxzZSk7XG4gIH0sXG4gIGRlc3Ryb3k6ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGdsb2JhbE1vdXNlTW92ZSwgZmFsc2UpO1xuICB9LFxuICByZW5kZXIsXG4gIHByb3BzOiBndWkgPT4ge31cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9jaXJjbGVzLnRzIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4vRWxlbWVudEJhc2UnO1xuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlciA9IDU7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9ICdjaXJjbGUnO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsZW1lbnRzL0NpcmNsZS50cyIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuL0VsZW1lbnRCYXNlJztcblxuZXhwb3J0IGNsYXNzIFRleHQgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG4gICAgZ2V0IGZvbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb250TmFtZTtcbiAgICB9XG5cbiAgICBzZXQgZm9udE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZvbnQgPSB0aGlzLmJ1aWxkRm9udCh0aGlzLl9mb250U2l6ZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLl9mb250TmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBmb250U2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9udFNpemU7XG4gICAgfVxuXG4gICAgc2V0IGZvbnRTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5mb250ID0gdGhpcy5idWlsZEZvbnQodmFsdWUsIHRoaXMuX2ZvbnROYW1lKTtcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRm9udChmb250U2l6ZTogbnVtYmVyLCBmb250TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBgJHtmb250U2l6ZX1weCAke2ZvbnROYW1lfWA7XG4gICAgfVxuXG4gICAgcHVibGljIHRleHQ6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSAndGV4dCc7XG4gICAgcHJpdmF0ZSBmb250OiBzdHJpbmcgPSAnMTRweCBHZW9yZ2lhJztcbiAgICBwcml2YXRlIF9mb250U2l6ZTogbnVtYmVyID0gMTQ7XG4gICAgcHJpdmF0ZSBfZm9udE5hbWU6IHN0cmluZyA9ICdHZW9yZ2lhJztcbiAgICBwdWJsaWMgYWxpZ246IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBjb2xvcjpzdHJpbmcgPSAnI2ZmZic7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsZW1lbnRzL1RleHQudHMiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi9FbGVtZW50QmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIEVsZW1lbnRCYXNlIHtcbiAgICBwdWJsaWMgY2hpbGRyZW4gPSBbXTtcblxuICAgIGFkZChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdHlwZTogU3RyaW5nID0gJ2dyb3VwJztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvR3JvdXAudHMiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi9FbGVtZW50QmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBSZWN0IGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9ICdyZWN0Jztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvUmVjdC50cyIsImltcG9ydCBNaXhpbkJhc2UgZnJvbSAnLi9NaXhpbkJhc2UnO1xuXG5jb25zdCBkcmFnZ2VkRWxlbWVudHMgPSBuZXcgU2V0KCk7XG5jb25zdCBzdGFydERyYWdQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IHN0YXJ0RHJhZyA9IChlbGVtZW50LCBlKSA9PiB7XG4gICAgc3RhcnREcmFnUG9zaXRpb25zLnNldChlbGVtZW50LCBbZS5jbGllbnRYLCBlLmNsaWVudFldKTtcbiAgICBkcmFnZ2VkRWxlbWVudHMuYWRkKGVsZW1lbnQpO1xufTtcblxuXG5jb25zdCBzdG9wRHJhZyA9IGVsZW1lbnQgPT4ge1xuICAgIGRyYWdnZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgc3RhcnREcmFnUG9zaXRpb25zLmRlbGV0ZShlbGVtZW50KVxufTtcblxuXG5jb25zdCBtb3ZlRWxlbWVudCA9IChlbGVtZW50LCBkeCwgZHkpID0+IHtcbiAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChlbCA9PiBtb3ZlRWxlbWVudChlbCwgZHgsIGR5KSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnggKz0gZHg7XG4gICAgZWxlbWVudC55ICs9IGR5O1xufTtcblxuXG5jb25zdCBkcmFnID0gKGVsZW1lbnQsIGUpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBzdGFydERyYWdQb3NpdGlvbnMuZ2V0KGVsZW1lbnQpO1xuICAgIGNvbnN0IGR4ID0gZS5jbGllbnRYIC0geDtcbiAgICBjb25zdCBkeSA9IGUuY2xpZW50WSAtIHk7XG4gICAgc3RhcnREcmFnUG9zaXRpb25zLnNldChlbGVtZW50LCBbZS5jbGllbnRYLCBlLmNsaWVudFldKTtcblxuICAgIG1vdmVFbGVtZW50KGVsZW1lbnQsIGR4LCBkeSk7XG59O1xuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICBkcmFnZ2VkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCFlbGVtZW50Lm1peGlucy5kcmFnZ2FibGUuaXNFbmFibGVkKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGUuYnV0dG9ucyA9PT0gMCkge1xuICAgICAgICAgICAgZHJhZ2dlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkcmFnZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBkcmFnKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgTWl4aW5CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlZG93bicsIHN0YXJ0RHJhZy5iaW5kKHRoaXMsIGVsZW1lbnQpKTtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2V1cCcsIHN0b3BEcmFnLmJpbmQodGhpcywgZWxlbWVudCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QbHVnaW5zL0RyYWdnYWJsZS50cyIsImltcG9ydCBNaXhpbkJhc2UgZnJvbSAnLi9NaXhpbkJhc2UnO1xuXG5cbmNvbnN0IHJlc2l6ZUFyZWFTaXplID0gMTA7XG5cbmNvbnN0IERJUkVDVElPTiA9IHtcbiAgICBOT05FOiAwLFxuICAgIExFRlQ6IDIsXG4gICAgVE9QOiA0LFxuICAgIFJJR0hUOiA4LFxuICAgIEJPVFRPTTogMTZcbn07XG5cbmxldCByZXNpemFibGVFbGVtZW50ID0gbnVsbDtcbmxldCByZXNpemVEaXJlY3Rpb24gPSBESVJFQ1RJT04uTk9ORTtcbmxldCByZXNpemVTdGFydFBvc2l0aW9uID0gW107XG5cblxuY29uc3QgY2hhbmdlT2Zmc2V0U2l6ZUFuZFBvcyA9IChlbGVtZW50LCBvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0LCBvZmZzZXRYID0gMCwgb2Zmc2V0WSA9IDApID0+IHtcbiAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChlbCA9PiBjaGFuZ2VPZmZzZXRTaXplQW5kUG9zKGVsLCBvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0LCBvZmZzZXRYLCBvZmZzZXRZKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LndpZHRoICs9IG9mZnNldFdpZHRoO1xuICAgIGVsZW1lbnQuaGVpZ2h0ICs9IG9mZnNldEhlaWdodDtcbiAgICBlbGVtZW50LnggKz0gb2Zmc2V0WDtcbiAgICBlbGVtZW50LnkgKz0gb2Zmc2V0WTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgaWYgKHJlc2l6YWJsZUVsZW1lbnQgIT09IG51bGwgJiYgcmVzaXphYmxlRWxlbWVudC5taXhpbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgIHJlc2l6YWJsZUVsZW1lbnQubWl4aW5zLmRyYWdnYWJsZS5lbmFibGUoKTtcbiAgICB9XG5cbiAgICByZXNpemFibGVFbGVtZW50ID0gbnVsbDtcbn0sIGZhbHNlKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoeyBvZmZzZXRYLCBvZmZzZXRZIH0pID0+IHtcbiAgICBpZiAocmVzaXphYmxlRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSByZXNpemVTdGFydFBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChyZXNpemVEaXJlY3Rpb24gJiBESVJFQ1RJT04uUklHSFQpIHtcbiAgICAgICAgICAgIGNoYW5nZU9mZnNldFNpemVBbmRQb3MocmVzaXphYmxlRWxlbWVudCwgb2Zmc2V0WCAtIHgsIDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc2l6ZURpcmVjdGlvbiAmIERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgICAgICBjaGFuZ2VPZmZzZXRTaXplQW5kUG9zKHJlc2l6YWJsZUVsZW1lbnQsIHggLSBvZmZzZXRYLCAwLCBvZmZzZXRYIC0geCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2l6ZURpcmVjdGlvbiAmIERJUkVDVElPTi5CT1RUT00pIHtcbiAgICAgICAgICAgIGNoYW5nZU9mZnNldFNpemVBbmRQb3MocmVzaXphYmxlRWxlbWVudCwgMCwgb2Zmc2V0WSAtIHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc2l6ZURpcmVjdGlvbiAmIERJUkVDVElPTi5UT1ApIHtcbiAgICAgICAgICAgIGNoYW5nZU9mZnNldFNpemVBbmRQb3MocmVzaXphYmxlRWxlbWVudCwgMCwgeSAtIG9mZnNldFksIDAsIG9mZnNldFkgLSB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2l6ZVN0YXJ0UG9zaXRpb25bMF0gPSBvZmZzZXRYO1xuICAgICAgICByZXNpemVTdGFydFBvc2l0aW9uWzFdID0gb2Zmc2V0WTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0sIGZhbHNlKTtcblxuXG5jb25zdCBnZXREaXJlY3Rpb24gPSAoeyB3aWR0aCwgaGVpZ2h0LCB4LCB5LCB0eXBlLCBjaGlsZHJlbiB9LCBjdXJzb3JYLCBjdXJzb3JZKSA9PiB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IERJUkVDVElPTi5OT05FO1xuXG4gICAgaWYgKHR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3QgPSBnZXREaXJlY3Rpb24oZWwsIGN1cnNvclgsIGN1cnNvclkpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdCAhPT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBkaXJlY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgaWYgKHR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgICBpZiAoY3Vyc29yWCA+PSAoeCArIHdpZHRoIC0gcmVzaXplQXJlYVNpemUpICYmIGN1cnNvclggPD0geCArIHdpZHRoKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gfD0gRElSRUNUSU9OLlJJR0hUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnNvclggPiB4ICYmIGN1cnNvclggPD0geCArIHJlc2l6ZUFyZWFTaXplKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gfD0gRElSRUNUSU9OLkxFRlQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3Vyc29yWSA+PSAoeSArIGhlaWdodCAtIHJlc2l6ZUFyZWFTaXplKSAmJiBjdXJzb3JZIDw9IHkgKyBoZWlnaHQpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiB8PSBESVJFQ1RJT04uQk9UVE9NO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnNvclkgPj0geSAmJiBjdXJzb3JZIDw9IHkgKyByZXNpemVBcmVhU2l6ZSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uIHw9IERJUkVDVElPTi5UT1A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xufTtcblxuXG5leHBvcnQgY2xhc3MgUmVzaXphYmxlIGV4dGVuZHMgTWl4aW5CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uKGUuY2FudmFzVGFyZ2V0LCBlLm9mZnNldFgsIGUub2Zmc2V0WSk7XG5cbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbnMgPiAwICYmIGRpcmVjdGlvbiAhPT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5taXhpbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubWl4aW5zLmRyYWdnYWJsZS5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzaXplRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIHJlc2l6YWJsZUVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHJlc2l6ZVN0YXJ0UG9zaXRpb24gPSBbZS5vZmZzZXRYLCBlLm9mZnNldFldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCAoeyBvZmZzZXRYLCBvZmZzZXRZLCBjYW52YXNUYXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc2l6YWJsZUVsZW1lbnQgIT09IG51bGwpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uKGNhbnZhc1RhcmdldCwgb2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgICAgICAgICBsZXQgY3Vyc29yID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gJiBESVJFQ1RJT04uTEVGVCkgY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gJiBESVJFQ1RJT04uUklHSFQpIGN1cnNvciA9ICd3LXJlc2l6ZSc7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uICYgRElSRUNUSU9OLlRPUCkgY3Vyc29yID0gJ3MtcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gJiBESVJFQ1RJT04uQk9UVE9NKSBjdXJzb3IgPSAncy1yZXNpemUnO1xuXG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5CT1RUT00gKyBESVJFQ1RJT04uTEVGVCkgY3Vyc29yID0gJ25lc3ctcmVzaXplJztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5CT1RUT00gKyBESVJFQ1RJT04uUklHSFQpIGN1cnNvciA9ICdud3NlLXJlc2l6ZSc7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVE9QICsgRElSRUNUSU9OLkxFRlQpIGN1cnNvciA9ICdud3NlLXJlc2l6ZSc7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVE9QICsgRElSRUNUSU9OLlJJR0hUKSBjdXJzb3IgPSAnbmVzdy1yZXNpemUnO1xuXG4gICAgICAgICAgICBlbGVtZW50LmN1cnNvciA9IGN1cnNvclxuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY3Vyc29yID0gJyc7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJlc2l6YWJsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGx1Z2lucy9SZXNpemFibGUudHMiLCJpbXBvcnQgeyBDaXJjbGUsIFJlY3QgfSBmcm9tIFwiLi4vc3JjL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiLi4vc3JjXCI7XG5jb25zdCBncm91cExpc3QgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IFByb3BzID0gbmV3IGZ1bmN0aW9uKCkge1xuICB0aGlzLmJhY2tncm91bmQgPSBcIiM1YTBcIjtcbiAgdGhpcy5haW1hdGlvblR5cGUgPSBcImVhc2VJbk91dEVsYXN0aWNcIjtcbn0oKTtcblxuY29uc3QgY2lyY2xlID0gbmV3IENpcmNsZSgpO1xuY2lyY2xlLnJhZGl1cyA9IDIwO1xuY2lyY2xlLmJhY2tncm91bmQgPSBQcm9wcy5iYWNrZ3JvdW5kO1xuY2lyY2xlLm1vdmVUbyg3MDAsIDQwMCk7XG5jaXJjbGUuYWltYXRpb25UeXBlID0gXCJlYXNlSW5PdXRFbGFzdGljXCI7XG5cbmNpcmNsZS5vbihcbiAgXCJtb3VzZWVudGVyXCIsXG4gIEFuaW1hdGlvbihcbiAgICB7XG4gICAgICByYWRpdXM6IDUwXG4gICAgfSxcbiAgICAxNTAwXG4gICkuZW5kKClcbik7XG5cbmNpcmNsZS5vbihcbiAgXCJtb3VzZWxlYXZlXCIsXG4gIEFuaW1hdGlvbihcbiAgICB7XG4gICAgICByYWRpdXM6IDIwXG4gICAgfSxcbiAgICAxMDAwXG4gICkuZW5kKClcbik7XG5cbmdyb3VwTGlzdC5zZXQoXCIxMjNcIiwgY2lyY2xlKTtcbi8vXG5jb25zdCByZWN0ID0gbmV3IFJlY3QoKTtcbnJlY3Qud2lkdGggPSA1MDtcbnJlY3QuaGVpZ2h0ID0gNTA7XG5yZWN0LmJhY2tncm91bmQgPSBQcm9wcy5iYWNrZ3JvdW5kO1xucmVjdC5yb3RhdGUgPSA0NTtcbnJlY3QuYWltYXRpb25UeXBlID0gXCJlYXNlSW5PdXRCYWNrXCI7XG5yZWN0Lm1vdmVUbygyMDAsIDQwMCk7XG5cbnJlY3Qub24oXG4gIFwibW91c2Vkb3duXCIsXG4gIEFuaW1hdGlvbihcbiAgICB7XG4gICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICB4OiA3MjAsXG4gICAgICB5OiA0MjBcbiAgICB9LFxuICAgIDE1MDBcbiAgKS5lbmQoKVxuKTtcblxucmVjdC5vbihcbiAgXCJtb3VzZWxlYXZlXCIsXG4gIEFuaW1hdGlvbihcbiAgICB7XG4gICAgICBoZWlnaHQ6IDUwLFxuICAgICAgd2lkdGg6IDUwLFxuICAgICAgeDogMjAwLFxuICAgICAgeTogNDAwXG4gICAgfSxcbiAgICAxNTAwXG4gICkuZW5kKClcbik7XG5cbmdyb3VwTGlzdC5zZXQoXCIxMjM1XCIsIHJlY3QpO1xuLy9cblxubGV0IHRoaXNHVUlJdGVtSW5zdGFuY2UgPSBbXTtcbmxldCB0aGlzR1VJSW5zdGFuY2UgPSBudWxsO1xuXG5jb25zdCByZW1vdmVCYWNrZ3JvdW5kUHJvcCA9ICgpID0+IHtcbiAgaWYgKHRoaXNHVUlJdGVtSW5zdGFuY2UubGVuZ3RoID4gMCAmJiB0aGlzR1VJSXRlbUluc3RhbmNlKSB7XG4gICAgdGhpc0dVSUl0ZW1JbnN0YW5jZS5mb3JFYWNoKGl0ZW0gPT4gdGhpc0dVSUluc3RhbmNlLnJlbW92ZShpdGVtKSk7XG4gICAgdGhpc0dVSUl0ZW1JbnN0YW5jZS5sZW5ndGggPSAwO1xuICB9XG59O1xuXG5jb25zdCBhdmFsaWFibGVBbmltYXRpb25UeXBlcyA9IFtcbiAgXCJlYXNlSW5RdWFkXCIsXG4gIFwiZWFzZU91dFF1YWRcIixcbiAgXCJlYXNlSW5PdXRRdWFkXCIsXG4gIFwiZWFzZUluQ3ViaWNcIixcbiAgXCJlYXNlT3V0Q3ViaWNcIixcbiAgXCJlYXNlSW5PdXRDdWJpY1wiLFxuICBcImVhc2VJblF1YXJ0XCIsXG4gIFwiZWFzZU91dFF1YXJ0XCIsXG4gIFwiZWFzZUluT3V0UXVhcnRcIixcbiAgXCJlYXNlSW5RdWludFwiLFxuICBcImVhc2VPdXRRdWludFwiLFxuICBcImVhc2VJbk91dFF1aW50XCIsXG4gIFwiZWFzZUluU2luZVwiLFxuICBcImVhc2VPdXRTaW5lXCIsXG4gIFwiZWFzZUluT3V0U2luZVwiLFxuICBcImVhc2VJbkV4cG9cIixcbiAgXCJlYXNlT3V0RXhwb1wiLFxuICBcImVhc2VJbk91dEV4cG9cIixcbiAgXCJlYXNlSW5DaXJjXCIsXG4gIFwiZWFzZU91dENpcmNcIixcbiAgXCJlYXNlSW5PdXRDaXJjXCIsXG4gIFwiZWFzZUluRWxhc3RpY1wiLFxuICBcImVhc2VPdXRFbGFzdGljXCIsXG4gIFwiZWFzZUluT3V0RWxhc3RpY1wiLFxuICBcImVhc2VJbkJhY2tcIixcbiAgXCJlYXNlT3V0QmFja1wiLFxuICBcImVhc2VJbk91dEJhY2tcIixcbiAgXCJlYXNlSW5Cb3VuY2VcIixcbiAgXCJlYXNlT3V0Qm91bmNlXCIsXG4gIFwiZWFzZUluT3V0Qm91bmNlXCJcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogKCkgPT4ge30sXG4gIGRlc3Ryb3k6ICgpID0+IHtcbiAgICByZW1vdmVCYWNrZ3JvdW5kUHJvcCgpO1xuICB9LFxuICByZW5kZXI6IChfLCByZW5kZXJlcikgPT4gZ3JvdXBMaXN0LmZvckVhY2gocmVuZGVyZXIuZHJhdywgcmVuZGVyZXIpLFxuICBwcm9wczogZ3VpID0+IHtcbiAgICB0aGlzR1VJSW5zdGFuY2UgPSBndWk7XG4gICAgcmVtb3ZlQmFja2dyb3VuZFByb3AoKTtcblxuICAgIHRoaXNHVUlJdGVtSW5zdGFuY2UucHVzaChcbiAgICAgIGd1aVxuICAgICAgICAuYWRkKFByb3BzLCBcImFpbWF0aW9uVHlwZVwiLCBhdmFsaWFibGVBbmltYXRpb25UeXBlcylcbiAgICAgICAgLm9uQ2hhbmdlKGZ1bmN0aW9uKGFpbWF0aW9uVHlwZSkge1xuICAgICAgICAgIHJlY3QuYWltYXRpb25UeXBlID0gYWltYXRpb25UeXBlO1xuICAgICAgICAgIGNpcmNsZS5haW1hdGlvblR5cGUgPSBhaW1hdGlvblR5cGU7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXNHVUlJdGVtSW5zdGFuY2UucHVzaChcbiAgICAgIGd1aS5hZGRDb2xvcihQcm9wcywgXCJiYWNrZ3JvdW5kXCIpLm9uQ2hhbmdlKGZ1bmN0aW9uKGJhY2tncm91bmQpIHtcbiAgICAgICAgcmVjdC5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICAgICAgY2lyY2xlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvYW5pbWF0aW9uLnRzIiwiaW1wb3J0IHsgVGV4dCwgR3JvdXAsIFJlY3QgfSBmcm9tIFwiLi4vc3JjL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBEcmFnZ2FibGUsIFJlc2l6YWJsZSB9IGZyb20gXCIuLi9zcmMvUGx1Z2luc1wiO1xuXG5jb25zdCBnZXRUaW1lQ29sb3IgPSB0aW1lc3RhbXAgPT4ge1xuICBjb25zdCBjb2xvciA9IE1hdGgucm91bmQoKE1hdGguc2luKHRpbWVzdGFtcCAvIDB4ZmY1KSArIDEpIC8gMiAqIDM1OCk7XG4gIHJldHVybiBgaHNsKCR7Y29sb3J9LCA1MCUsIDUwJSlgO1xufTtcblxuLy8gZ2VuZXJhdGUgcHJpbWl0aXZlc1xuY29uc3QgY2lyY2xlTGlzdCA9IG5ldyBNYXAoKTtcbmNvbnN0IHRleHRMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgZ3JvdXBMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgZnJvemVuRWxlbWVudHMgPSBuZXcgU2V0KCk7XG5cbmxldCBpZCA9IDE7XG5mb3IgKGxldCB4ID0gMTsgeCA8PSAyOyB4KyspIHtcbiAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMjsgeSsrKSB7XG4gICAgY29uc3QgZyA9IG5ldyBHcm91cCgpO1xuICAgIGcueiA9IDE7XG4gICAgY29uc3QgcmVjdCA9IG5ldyBSZWN0KCk7XG4gICAgcmVjdC54ID0gNjAwICsgeCAqIDgwO1xuICAgIHJlY3QueSA9IDUwICsgeSAqIDgwO1xuXG4gICAgcmVjdC53aWR0aCA9IDUwO1xuICAgIHJlY3QuaGVpZ2h0ID0gNTA7XG4gICAgcmVjdC5iYWNrZ3JvdW5kID0gZ2V0VGltZUNvbG9yKChpZCArIDEpICogMzI1NCk7XG5cbiAgICBjb25zdCB0ZXh0ID0gbmV3IFRleHQoKTtcbiAgICB0ZXh0LmZvbnRTaXplID0gMjU7XG4gICAgdGV4dC50ZXh0ID0gYCR7aWR9YDtcbiAgICB0ZXh0LmFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB0ZXh0LnggPSByZWN0LnggKyAyNTtcbiAgICB0ZXh0LnkgPSByZWN0LnkgKyAyNDtcblxuICAgIGdcbiAgICAgIC51c2UoUmVzaXphYmxlKVxuICAgICAgLnVzZShEcmFnZ2FibGUpXG4gICAgICAuYWRkKHJlY3QpXG4gICAgICAuYWRkKHRleHQpO1xuXG4gICAgZ3JvdXBMaXN0LnNldChcInJcIiArIGlkLCBnKTtcblxuICAgIGlkKys7XG4gIH1cbn1cblxuY29uc3QgbW91c2VQb3MgPSBbMCwgMF07XG5cbi8vIG1haW4gcmVuZGVyIGZ1bmN0aW9uXG5jb25zdCByZW5kZXIgPSAodGltZXN0YW1wLCByZW5kZXJlcikgPT4ge1xuICBjaXJjbGVMaXN0LmZvckVhY2goKGNpcmNsZSwgaSkgPT4ge1xuICAgIGlmIChmcm96ZW5FbGVtZW50cy5oYXMoY2lyY2xlKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmFkaXVzID0gKE1hdGguc2luKHRpbWVzdGFtcCAvIDEwMDAgKyBpKSArIDEpICogMTAgKyAxMDtcbiAgICBjaXJjbGUuYmFja2dyb3VuZCA9IGdldFRpbWVDb2xvcih0aW1lc3RhbXAgKyBpICogMTAwMCk7XG4gICAgY2lyY2xlLnJhZGl1cyA9IE1hdGgucm91bmQocmFkaXVzKTtcblxuICAgIGlmIChcbiAgICAgIE1hdGguYWJzKGNpcmNsZS54IC0gbW91c2VQb3NbMF0pICsgTWF0aC5hYnMoY2lyY2xlLnkgLSBtb3VzZVBvc1sxXSkgPFxuICAgICAgMTIwXG4gICAgKSB7XG4gICAgICBjaXJjbGUucmFkaXVzICs9IDEwO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSB0ZXh0TGlzdC5nZXQoaSk7XG5cbiAgICB0ZXh0LmZvbnRTaXplID0gY2lyY2xlLnJhZGl1cztcbiAgICB0ZXh0LnggPSBjaXJjbGUueDtcbiAgICB0ZXh0LnkgPSBjaXJjbGUueTtcbiAgfSk7XG5cbiAgZ3JvdXBMaXN0LmZvckVhY2gocmVuZGVyZXIuZHJhdywgcmVuZGVyZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiAoKSA9PiB7fSxcbiAgZGVzdHJveTogKCkgPT4ge30sXG4gIHJlbmRlcixcbiAgcHJvcHM6IGd1aSA9PiB7fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL2RyYWdnYWJsZV9yZXNpYXphYmxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==