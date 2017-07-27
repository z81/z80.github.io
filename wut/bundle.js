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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementBase = (function () {
    function ElementBase() {
        this.x = 0;
        this.y = 0;
        this.lineWidth = 1;
        this.borderColor = '';
        this.background = '';
        this.eventListners = new Map();
    }
    ElementBase.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
    };
    ElementBase.prototype.on = function (eventName, callback) {
        this.eventListners.set(eventName, callback);
        return this;
    };
    ElementBase.prototype.fire = function (eventName, event) {
        var callback = this.eventListners.get(eventName);
        if (callback) {
            callback(event);
        }
    };
    return ElementBase;
}());
exports.default = ElementBase;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stats_1 = __webpack_require__(2);
var src_1 = __webpack_require__(3);
var Elements_1 = __webpack_require__(6);
var Plugins_1 = __webpack_require__(10);
var stats = new Stats_1.default();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.dom.style.left = 'inherit';
stats.dom.style.right = '0';
document.body.appendChild(stats.dom);
var rootNode = document.getElementById('app');
var renderer = src_1.default.init('canvas');
renderer.appendTo(rootNode);
renderer.setSize(1000, 900);
// generate
var circleList = new Map();
var textList = new Map();
var groupList = new Map();
var cols = 15;
var rows = 10;
var _loop_1 = function (i) {
    var x = (i % cols) * 60 + 40;
    var y = 60 * Math.ceil(i / cols);
    var circle = new Elements_1.Circle();
    var text = new Elements_1.Text();
    var group = new Elements_1.Group();
    group.add(circle);
    group.add(text);
    Plugins_1.Draggable(group);
    text.text = "" + i;
    text.background = '#fff';
    text.align = 'center';
    text.fontSize = 20;
    text.moveTo(x + 3, y + 3);
    circle.moveTo(x, y);
    circle.on('click', function () { return console.log('click', circle.x, circle.y); });
    circleList.set(i, circle);
    textList.set(i, text);
    groupList.set(i, group);
};
for (var i = 1; i <= cols * rows; i++) {
    _loop_1(i);
}
var mousePos = [0, 0];
var getTimeColor = function (timestamp) {
    var color = Math.round((Math.sin(timestamp / 0xFF5) + 1) / 2 * 358);
    return "hsl(" + color + ", 50%, 50%)";
};
var render = function (timestamp) {
    stats.begin();
    renderer.clear();
    circleList.forEach(function (circle, i) {
        var radius = (Math.sin(timestamp / 1000 + i) + 1) * 10 + 10;
        circle.background = getTimeColor(timestamp + i * 1000);
        circle.radius = Math.round(radius);
        if (Math.abs(circle.x - mousePos[0]) + Math.abs(circle.y - mousePos[1]) < 120) {
            circle.radius += 10;
        }
        var text = textList.get(i);
        text.fontSize = circle.radius;
        text.x = circle.x - circle.radius;
        text.y = circle.y;
    });
    groupList.forEach(renderer.draw, renderer);
    stats.end();
    requestAnimationFrame(render);
};
document.addEventListener('mousemove', function (e) {
    mousePos[0] = e.clientX;
    mousePos[1] = e.clientY;
});
/*setInterval(() => {
    render(Date.now());
}, 1000 / 30);*/
requestAnimationFrame(render);


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasAdapter_1 = __webpack_require__(4);
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
exports.default = GraphicEngine;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasEventsListener_1 = __webpack_require__(5);
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
        return this;
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
    CanvasAdapter.prototype.draw = function (element) {
        this.cache.push(element);
        switch (element.type) {
            case 'circle': return this.drawCircle(element);
            case 'text': return this.drawText(element);
            case 'group': return element.children.forEach(this.draw, this);
        }
    };
    CanvasAdapter.prototype.drawText = function (_a) {
        var x = _a.x, y = _a.y, text = _a.text, background = _a.background, font = _a.font, fontSize = _a.fontSize, align = _a.align;
        if (align) {
            var textSize = this.ctx.measureText(text);
            if (align === 'center') {
                x += textSize.width / 2;
                y += fontSize / 2;
            }
        }
        this.ctx.font = font;
        this.ctx.fillStyle = background;
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
    };
    CanvasAdapter.prototype.clear = function () {
        this.cache.length = 0;
        this.ctx.clearRect(0, 0, this.canvasNode.width, this.canvasNode.height);
    };
    return CanvasAdapter;
}());
exports.default = CanvasAdapter;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasEventsListener = (function () {
    function CanvasEventsListener(canvasNode, cache) {
        this.eventsForWatch = ['mousemove', 'click', 'mouseup', 'mousedown'];
        this.canvasNode = canvasNode;
        this.cache = cache;
        this.bindEventsListeners();
    }
    CanvasEventsListener.prototype.xray = function (_a, pointX, pointY) {
        var type = _a.type, x = _a.x, y = _a.y, radius = _a.radius, width = _a.width, height = _a.height;
        var onCursor = false;
        switch (type) {
            case 'rect':
                onCursor = ((pointX >= x && pointX <= x + width) &&
                    (pointY >= y && pointY <= y + height));
                break;
            case 'circle':
                onCursor = (Math.pow(pointX - x, 2) + Math.pow(pointY - y, 2) <= Math.pow(radius + 1, 2));
                break;
        }
        return onCursor;
    };
    CanvasEventsListener.prototype.eventHandler = function (eventName, event, root) {
        if (root === void 0) { root = this.cache; }
        for (var _i = 0, root_1 = root; _i < root_1.length; _i++) {
            var element = root_1[_i];
            if (element.type === 'group') {
                if (this.eventHandler(eventName, event, element.children)) {
                    element.fire(eventName, event);
                    return true;
                }
                continue;
            }
            if (this.xray(element, event.clientX, event.clientY)) {
                element.fire(eventName, event);
                return true;
            }
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));


/***/ }),
/* 7 */
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
/* 8 */
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
        return _this;
    }
    Object.defineProperty(Text.prototype, "fontName", {
        get: function () {
            return this._fontName;
        },
        set: function (value) {
            this.font = this.fontSize + "px " + value;
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
            this.font = value + "px " + this.fontName;
            this._fontSize = value;
        },
        enumerable: true,
        configurable: true
    });
    return Text;
}(ElementBase_1.default));
exports.Text = Text;


/***/ }),
/* 9 */
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
    };
    return Group;
}(ElementBase_1.default));
exports.Group = Group;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(11));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var draggedElements = new Set();
var startDrag = function (element, e) {
    element.__isDrag = true;
    element.__startDragPosition = [e.clientX, e.clientY];
    draggedElements.add(element);
};
var stopDrag = function (element) {
    element.__isDrag = false;
    draggedElements.delete(element);
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
    var _a = element.__startDragPosition, x = _a[0], y = _a[1];
    var dx = e.clientX - x;
    var dy = e.clientY - y;
    element.__startDragPosition = [e.clientX, e.clientY];
    moveElement(element, dx, dy);
};
document.addEventListener('mousemove', function (e) {
    draggedElements.forEach(function (element) {
        if (e.buttons === 0) {
            element.__isDrag = false;
        }
        if (element.__isDrag) {
            drag(element, e);
        }
    });
});
function Draggable(element) {
    element.on('mousedown', startDrag.bind(this, element));
    element.on('mouseup', stopDrag.bind(this, element));
}
exports.Draggable = Draggable;
exports.default = Draggable;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODNkMDA5OGVhNDViODA5Y2IwZTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL0VsZW1lbnRCYXNlLnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0YXRzLmpzL3NyYy9TdGF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FkYXB0ZXJzL0NhbnZhc0FkYXB0ZXIvQ2FudmFzQWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNFdmVudHNMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsZW1lbnRzL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRWxlbWVudHMvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvRHJhZ2dhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7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QyxDQUFDO0FBS0YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFDO0lBQ3BDLGVBQWUsQ0FBQyxPQUFPLENBQUMsaUJBQU87UUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBR0gsbUJBQTBCLE9BQU87SUFDN0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RCxPQUFPLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFIRCw4QkFHQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4M2QwMDk4ZWE0NWI4MDljYjBlNSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRCYXNlIHtcbiAgICBwdWJsaWMgeDogTnVtYmVyID0gMDtcbiAgICBwdWJsaWMgeTogTnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbGluZVdpZHRoOiBOdW1iZXIgPSAxO1xuICAgIHB1YmxpYyBib3JkZXJDb2xvcjpTdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgYmFja2dyb3VuZDpTdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIGV2ZW50TGlzdG5lcnMgPSBuZXcgTWFwKCk7XG5cbiAgICBtb3ZlVG8oeDogTnVtYmVyLCB5OiBOdW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0bmVycy5zZXQoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpcmUoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudCkge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuZXZlbnRMaXN0bmVycy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsZW1lbnRzL0VsZW1lbnRCYXNlLnRzIiwiaW1wb3J0IFN0YXRzIGZyb20gJ3N0YXRzLmpzL3NyYy9TdGF0cyc7XG5pbXBvcnQgR3JhcGhpY0VuZ2luZSBmcm9tICcuL3NyYyc7XG5pbXBvcnQgeyBDaXJjbGUsIFRleHQsIEdyb3VwIH0gZnJvbSAnLi9zcmMvRWxlbWVudHMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9zcmMvUGx1Z2lucyc7XG5cblxuXG5jb25zdCBzdGF0cyA9IG5ldyBTdGF0cygpO1xuc3RhdHMuc2hvd1BhbmVsKCAwICk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG5zdGF0cy5kb20uc3R5bGUubGVmdCA9ICdpbmhlcml0JztcbnN0YXRzLmRvbS5zdHlsZS5yaWdodCA9ICcwJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHN0YXRzLmRvbSApO1xuXG5cbmNvbnN0IHJvb3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG5cblxuY29uc3QgcmVuZGVyZXIgPSBHcmFwaGljRW5naW5lLmluaXQoJ2NhbnZhcycpO1xucmVuZGVyZXIuYXBwZW5kVG8ocm9vdE5vZGUpO1xucmVuZGVyZXIuc2V0U2l6ZSgxMDAwLCA5MDApO1xuXG5cbi8vIGdlbmVyYXRlXG5jb25zdCBjaXJjbGVMaXN0ID0gbmV3IE1hcCgpO1xuY29uc3QgdGV4dExpc3QgPSBuZXcgTWFwKCk7XG5jb25zdCBncm91cExpc3QgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IGNvbHMgPSAxNTtcbmNvbnN0IHJvd3MgPSAxMDtcbmZvcihsZXQgaSA9IDE7IGkgPD0gY29scyAqIHJvd3M7IGkrKykge1xuICAgIGNvbnN0IHggPSAoaSAlIGNvbHMpICogNjAgKyA0MDtcbiAgICBjb25zdCB5ID0gNjAgKiBNYXRoLmNlaWwoaSAvIGNvbHMpO1xuXG4gICAgY29uc3QgY2lyY2xlID0gbmV3IENpcmNsZSgpO1xuICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dCgpO1xuICAgIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgZ3JvdXAuYWRkKGNpcmNsZSk7XG4gICAgZ3JvdXAuYWRkKHRleHQpO1xuICAgIERyYWdnYWJsZShncm91cCk7XG5cbiAgICB0ZXh0LnRleHQgPSBgJHtpfWA7XG4gICAgdGV4dC5iYWNrZ3JvdW5kID0gJyNmZmYnO1xuICAgIHRleHQuYWxpZ24gPSAnY2VudGVyJztcbiAgICB0ZXh0LmZvbnRTaXplID0gMjA7XG4gICAgdGV4dC5tb3ZlVG8oeCArIDMsIHkgKyAzKTtcblxuICAgIGNpcmNsZS5tb3ZlVG8oeCwgeSk7XG4gICAgY2lyY2xlLm9uKCdjbGljaycsICgpID0+IGNvbnNvbGUubG9nKCdjbGljaycsIGNpcmNsZS54LCBjaXJjbGUueSkpO1xuXG4gICAgY2lyY2xlTGlzdC5zZXQoaSwgY2lyY2xlKTtcbiAgICB0ZXh0TGlzdC5zZXQoaSwgdGV4dCk7XG4gICAgZ3JvdXBMaXN0LnNldChpLCBncm91cCk7XG59XG5cbmNvbnN0IG1vdXNlUG9zID0gWzAsIDBdO1xuXG5jb25zdCBnZXRUaW1lQ29sb3IgPSB0aW1lc3RhbXAgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gTWF0aC5yb3VuZCgoTWF0aC5zaW4odGltZXN0YW1wIC8gMHhGRjUpICsgMSkgLyAyICogMzU4KTtcbiAgICByZXR1cm4gYGhzbCgke2NvbG9yfSwgNTAlLCA1MCUpYDtcbn07XG5cblxuY29uc3QgcmVuZGVyID0gdGltZXN0YW1wID0+IHtcbiAgICBzdGF0cy5iZWdpbigpO1xuICAgIHJlbmRlcmVyLmNsZWFyKCk7XG5cbiAgICBjaXJjbGVMaXN0LmZvckVhY2goKGNpcmNsZSwgaSkgPT4ge1xuICAgICAgICBjb25zdCByYWRpdXMgPSAoTWF0aC5zaW4odGltZXN0YW1wIC8gMTAwMCArIGkpICsgMSkgKiAxMCArIDEwO1xuICAgICAgICBjaXJjbGUuYmFja2dyb3VuZCA9IGdldFRpbWVDb2xvcih0aW1lc3RhbXAgKyBpICogMTAwMCk7XG4gICAgICAgIGNpcmNsZS5yYWRpdXMgPSBNYXRoLnJvdW5kKHJhZGl1cyk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGNpcmNsZS54IC0gbW91c2VQb3NbMF0pICsgTWF0aC5hYnMoY2lyY2xlLnkgLSBtb3VzZVBvc1sxXSkgPCAxMjApIHtcbiAgICAgICAgICAgIGNpcmNsZS5yYWRpdXMgKz0gMTA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dExpc3QuZ2V0KGkpO1xuXG4gICAgICAgIHRleHQuZm9udFNpemUgPSBjaXJjbGUucmFkaXVzO1xuICAgICAgICB0ZXh0LnggPSBjaXJjbGUueCAtIGNpcmNsZS5yYWRpdXM7XG4gICAgICAgIHRleHQueSA9IGNpcmNsZS55O1xuICAgIH0pO1xuXG5cbiAgICBncm91cExpc3QuZm9yRWFjaChyZW5kZXJlci5kcmF3LCByZW5kZXJlcik7XG5cblxuXG4gICAgc3RhdHMuZW5kKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICBtb3VzZVBvc1swXSA9IGUuY2xpZW50WDtcbiAgICBtb3VzZVBvc1sxXSA9IGUuY2xpZW50WTtcbn0pO1xuXG5cbi8qc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHJlbmRlcihEYXRlLm5vdygpKTtcbn0sIDEwMDAgLyAzMCk7Ki9cblxuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi50cyIsIi8qKlxuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbS9cbiAqL1xuXG52YXIgU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG5cblx0dmFyIG1vZGUgPSAwO1xuXG5cdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMCc7XG5cdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRzaG93UGFuZWwoICsrIG1vZGUgJSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoICk7XG5cblx0fSwgZmFsc2UgKTtcblxuXHQvL1xuXG5cdGZ1bmN0aW9uIGFkZFBhbmVsKCBwYW5lbCApIHtcblxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggcGFuZWwuZG9tICk7XG5cdFx0cmV0dXJuIHBhbmVsO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBzaG93UGFuZWwoIGlkICkge1xuXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29udGFpbmVyLmNoaWxkcmVuWyBpIF0uc3R5bGUuZGlzcGxheSA9IGkgPT09IGlkID8gJ2Jsb2NrJyA6ICdub25lJztcblxuXHRcdH1cblxuXHRcdG1vZGUgPSBpZDtcblxuXHR9XG5cblx0Ly9cblxuXHR2YXIgYmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCksIHByZXZUaW1lID0gYmVnaW5UaW1lLCBmcmFtZXMgPSAwO1xuXG5cdHZhciBmcHNQYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdGUFMnLCAnIzBmZicsICcjMDAyJyApICk7XG5cdHZhciBtc1BhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ01TJywgJyMwZjAnLCAnIzAyMCcgKSApO1xuXG5cdGlmICggc2VsZi5wZXJmb3JtYW5jZSAmJiBzZWxmLnBlcmZvcm1hbmNlLm1lbW9yeSApIHtcblxuXHRcdHZhciBtZW1QYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdNQicsICcjZjA4JywgJyMyMDEnICkgKTtcblxuXHR9XG5cblx0c2hvd1BhbmVsKCAwICk7XG5cblx0cmV0dXJuIHtcblxuXHRcdFJFVklTSU9OOiAxNixcblxuXHRcdGRvbTogY29udGFpbmVyLFxuXG5cdFx0YWRkUGFuZWw6IGFkZFBhbmVsLFxuXHRcdHNob3dQYW5lbDogc2hvd1BhbmVsLFxuXG5cdFx0YmVnaW46IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0YmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCk7XG5cblx0XHR9LFxuXG5cdFx0ZW5kOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGZyYW1lcyArKztcblxuXHRcdFx0dmFyIHRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKTtcblxuXHRcdFx0bXNQYW5lbC51cGRhdGUoIHRpbWUgLSBiZWdpblRpbWUsIDIwMCApO1xuXG5cdFx0XHRpZiAoIHRpbWUgPiBwcmV2VGltZSArIDEwMDAgKSB7XG5cblx0XHRcdFx0ZnBzUGFuZWwudXBkYXRlKCAoIGZyYW1lcyAqIDEwMDAgKSAvICggdGltZSAtIHByZXZUaW1lICksIDEwMCApO1xuXG5cdFx0XHRcdHByZXZUaW1lID0gdGltZTtcblx0XHRcdFx0ZnJhbWVzID0gMDtcblxuXHRcdFx0XHRpZiAoIG1lbVBhbmVsICkge1xuXG5cdFx0XHRcdFx0dmFyIG1lbW9yeSA9IHBlcmZvcm1hbmNlLm1lbW9yeTtcblx0XHRcdFx0XHRtZW1QYW5lbC51cGRhdGUoIG1lbW9yeS51c2VkSlNIZWFwU2l6ZSAvIDEwNDg1NzYsIG1lbW9yeS5qc0hlYXBTaXplTGltaXQgLyAxMDQ4NTc2ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aW1lO1xuXG5cdFx0fSxcblxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRiZWdpblRpbWUgPSB0aGlzLmVuZCgpO1xuXG5cdFx0fSxcblxuXHRcdC8vIEJhY2t3YXJkcyBDb21wYXRpYmlsaXR5XG5cblx0XHRkb21FbGVtZW50OiBjb250YWluZXIsXG5cdFx0c2V0TW9kZTogc2hvd1BhbmVsXG5cblx0fTtcblxufTtcblxuU3RhdHMuUGFuZWwgPSBmdW5jdGlvbiAoIG5hbWUsIGZnLCBiZyApIHtcblxuXHR2YXIgbWluID0gSW5maW5pdHksIG1heCA9IDAsIHJvdW5kID0gTWF0aC5yb3VuZDtcblx0dmFyIFBSID0gcm91bmQoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEgKTtcblxuXHR2YXIgV0lEVEggPSA4MCAqIFBSLCBIRUlHSFQgPSA0OCAqIFBSLFxuXHRcdFx0VEVYVF9YID0gMyAqIFBSLCBURVhUX1kgPSAyICogUFIsXG5cdFx0XHRHUkFQSF9YID0gMyAqIFBSLCBHUkFQSF9ZID0gMTUgKiBQUixcblx0XHRcdEdSQVBIX1dJRFRIID0gNzQgKiBQUiwgR1JBUEhfSEVJR0hUID0gMzAgKiBQUjtcblxuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcblx0Y2FudmFzLndpZHRoID0gV0lEVEg7XG5cdGNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XG5cdGNhbnZhcy5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOjgwcHg7aGVpZ2h0OjQ4cHgnO1xuXG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcblx0Y29udGV4dC5mb250ID0gJ2JvbGQgJyArICggOSAqIFBSICkgKyAncHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnO1xuXHRjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdGNvbnRleHQuZmlsbFJlY3QoIDAsIDAsIFdJRFRILCBIRUlHSFQgKTtcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGZnO1xuXHRjb250ZXh0LmZpbGxUZXh0KCBuYW1lLCBURVhUX1gsIFRFWFRfWSApO1xuXHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCwgR1JBUEhfSEVJR0hUICk7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDAuOTtcblx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEgsIEdSQVBIX0hFSUdIVCApO1xuXG5cdHJldHVybiB7XG5cblx0XHRkb206IGNhbnZhcyxcblxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCB2YWx1ZSwgbWF4VmFsdWUgKSB7XG5cblx0XHRcdG1pbiA9IE1hdGgubWluKCBtaW4sIHZhbHVlICk7XG5cdFx0XHRtYXggPSBNYXRoLm1heCggbWF4LCB2YWx1ZSApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCAwLCAwLCBXSURUSCwgR1JBUEhfWSApO1xuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBmZztcblx0XHRcdGNvbnRleHQuZmlsbFRleHQoIHJvdW5kKCB2YWx1ZSApICsgJyAnICsgbmFtZSArICcgKCcgKyByb3VuZCggbWluICkgKyAnLScgKyByb3VuZCggbWF4ICkgKyAnKScsIFRFWFRfWCwgVEVYVF9ZICk7XG5cblx0XHRcdGNvbnRleHQuZHJhd0ltYWdlKCBjYW52YXMsIEdSQVBIX1ggKyBQUiwgR1JBUEhfWSwgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfSEVJR0hULCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9IRUlHSFQgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCArIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX1ksIFBSLCBHUkFQSF9IRUlHSFQgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YICsgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfWSwgUFIsIHJvdW5kKCAoIDEgLSAoIHZhbHVlIC8gbWF4VmFsdWUgKSApICogR1JBUEhfSEVJR0hUICkgKTtcblxuXHRcdH1cblxuXHR9O1xuXG59O1xuXG5leHBvcnQgeyBTdGF0cyBhcyBkZWZhdWx0IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdGF0cy5qcy9zcmMvU3RhdHMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENhbnZhc0FkYXB0ZXIgZnJvbSAnLi9BZGFwdGVycy9DYW52YXNBZGFwdGVyL0NhbnZhc0FkYXB0ZXInO1xuXG5jbGFzcyBHcmFwaGljRW5naW5lIHtcbiAgICBzdGF0aWMgaW5pdChyZW5kZXJlcklkOiBzdHJpbmcgPSAnY2FudmFzJykge1xuICAgICAgICBpZiAocmVuZGVyZXJJZCA9PT0gJ2NhbnZhcycpIHJldHVybiBuZXcgQ2FudmFzQWRhcHRlcigpO1xuXG4gICAgICAgIHRocm93IEVycm9yKCdVbmtub3duIHJlbmRlcmVyJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaGljRW5naW5lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCBDYW52YXNFdmVudHNMaXN0ZW5lciBmcm9tICcuL0NhbnZhc0V2ZW50c0xpc3RlbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzQWRhcHRlciB7XG4gICAgcHJpdmF0ZSBlbGVtZW50Tm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYW52YXNOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN0eCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZSA9IFtdO1xuICAgIHByaXZhdGUgZXZlbnRMaXN0ZW5lcjtcbiAgICBwdWJsaWMgYW50aUFsaWFzaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIHByaXZhdGUgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhc05vZGUpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBpbml0Q29udGV4dCgpIHtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc05vZGUuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cblxuICAgIGFwcGVuZFRvKGVsZW1lbnROb2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnROb2RlID0gZWxlbWVudE5vZGU7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5pbml0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmF1dG9TaXplKCk7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lciA9IG5ldyBDYW52YXNFdmVudHNMaXN0ZW5lcih0aGlzLmNhbnZhc05vZGUsIHRoaXMuY2FjaGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIGF1dG9TaXplKCkge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuZWxlbWVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cblxuICAgIHNldFNpemUod2lkdGg6IE51bWJlciwgaGVpZ2h0OiBOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5jYW52YXNOb2RlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzTm9kZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBkcmF3KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOiByZXR1cm4gdGhpcy5kcmF3Q2lyY2xlKGVsZW1lbnQpO1xuICAgICAgICAgICAgY2FzZSAndGV4dCc6IHJldHVybiB0aGlzLmRyYXdUZXh0KGVsZW1lbnQpO1xuICAgICAgICAgICAgY2FzZSAnZ3JvdXAnOiByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKHRoaXMuZHJhdywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRyYXdUZXh0KHsgeCwgeSwgdGV4dCwgYmFja2dyb3VuZCwgZm9udCwgZm9udFNpemUsIGFsaWduIH0pIHtcbiAgICAgICAgaWYgKGFsaWduKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXG4gICAgICAgICAgICBpZiAoYWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgeCArPSB0ZXh0U2l6ZS53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgeSArPSBmb250U2l6ZSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5mb250ID0gZm9udDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gICAgfVxuXG5cbiAgICBkcmF3Q2lyY2xlKHsgeCwgeSwgcmFkaXVzLCBiYWNrZ3JvdW5kLCBsaW5lV2lkdGgsIGJvcmRlckNvbG9yIH0pIHtcbiAgICAgICAgaWYgKCF0aGlzLmFudGlBbGlhc2luZykge1xuICAgICAgICAgICAgeCArPSAuNTtcbiAgICAgICAgICAgIHkgKz0gLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3JkZXJDb2xvciAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdG9ya2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmNhY2hlLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc05vZGUud2lkdGgsIHRoaXMuY2FudmFzTm9kZS5oZWlnaHQpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNBZGFwdGVyLnRzIiwiY2xhc3MgQ2FudmFzRXZlbnRzTGlzdGVuZXIge1xuICAgIHByaXZhdGUgY2FjaGU7XG4gICAgcHJpdmF0ZSBjYW52YXNOb2RlO1xuICAgIHByaXZhdGUgZXZlbnRzRm9yV2F0Y2ggPSBbJ21vdXNlbW92ZScsICdjbGljaycsICdtb3VzZXVwJywgJ21vdXNlZG93biddO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzTm9kZSwgY2FjaGUpIHtcbiAgICAgICAgdGhpcy5jYW52YXNOb2RlID0gY2FudmFzTm9kZTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHNMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICB4cmF5KHsgdHlwZSwgeCwgeSwgcmFkaXVzLCB3aWR0aCwgaGVpZ2h0IH0sIHBvaW50WCwgcG9pbnRZKSB7XG4gICAgICAgIGxldCBvbkN1cnNvciA9IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdCc6XG4gICAgICAgICAgICAgICAgb25DdXJzb3IgPSAoXG4gICAgICAgICAgICAgICAgICAgIChwb2ludFggPj0geCAmJiBwb2ludFggPD0geCArIHdpZHRoKSAmJlxuICAgICAgICAgICAgICAgICAgICAocG9pbnRZID49IHkgJiYgcG9pbnRZIDw9IHkgKyBoZWlnaHQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgb25DdXJzb3IgPSAoXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucG93KHBvaW50WCAtIHgsIDIpICsgTWF0aC5wb3cocG9pbnRZIC0geSwgMikgPD0gTWF0aC5wb3cocmFkaXVzICsgMSwgMilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9uQ3Vyc29yO1xuICAgIH1cblxuICAgIGV2ZW50SGFuZGxlcihldmVudE5hbWUsIGV2ZW50LCByb290ID0gdGhpcy5jYWNoZSkge1xuICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2Ygcm9vdCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlcihldmVudE5hbWUsIGV2ZW50LCBlbGVtZW50LmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZpcmUoZXZlbnROYW1lLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy54cmF5KGVsZW1lbnQsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5maXJlKGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmV2ZW50c0ZvcldhdGNoLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc05vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNFdmVudHNMaXN0ZW5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWRhcHRlcnMvQ2FudmFzQWRhcHRlci9DYW52YXNFdmVudHNMaXN0ZW5lci50cyIsImV4cG9ydCAqIGZyb20gJy4vQ2lyY2xlJztcbmV4cG9ydCAqIGZyb20gJy4vVGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL0dyb3VwJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvaW5kZXgudHMiLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi9FbGVtZW50QmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gNTtcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nID0gJ2NpcmNsZSc7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsZW1lbnRzL0NpcmNsZS50cyIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuL0VsZW1lbnRCYXNlJztcblxuZXhwb3J0IGNsYXNzIFRleHQgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG4gICAgZ2V0IGZvbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb250TmFtZTtcbiAgICB9XG5cbiAgICBzZXQgZm9udE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZvbnQgPSBgJHt0aGlzLmZvbnRTaXplfXB4ICR7dmFsdWV9YDtcbiAgICAgICAgdGhpcy5fZm9udE5hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZm9udFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnRTaXplO1xuICAgIH1cblxuICAgIHNldCBmb250U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZm9udCA9IGAke3ZhbHVlfXB4ICR7dGhpcy5mb250TmFtZX1gO1xuICAgICAgICB0aGlzLl9mb250U2l6ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nID0gJ3RleHQnO1xuICAgIHByaXZhdGUgZm9udDogc3RyaW5nID0gJzE0cHggR2VvcmdpYSc7XG4gICAgcHJpdmF0ZSBfZm9udFNpemU6IG51bWJlciA9IDE0O1xuICAgIHByaXZhdGUgX2ZvbnROYW1lOiBzdHJpbmcgPSAnR2VvcmdpYSc7XG4gICAgcHVibGljIGFsaWduOiBzdHJpbmcgPSAnJztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxlbWVudHMvVGV4dC50cyIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuL0VsZW1lbnRCYXNlJztcblxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuICAgIHB1YmxpYyBjaGlsZHJlbiA9IFtdO1xuXG4gICAgYWRkKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0eXBlOiBTdHJpbmcgPSAnZ3JvdXAnO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGVtZW50cy9Hcm91cC50cyIsImV4cG9ydCAqIGZyb20gJy4vRHJhZ2dhYmxlJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGx1Z2lucy9pbmRleC50cyIsImNvbnN0IGRyYWdnZWRFbGVtZW50cyA9IG5ldyBTZXQoKTtcblxuY29uc3Qgc3RhcnREcmFnID0gKGVsZW1lbnQsIGUpID0+IHtcbiAgICBlbGVtZW50Ll9faXNEcmFnID0gdHJ1ZTtcbiAgICBlbGVtZW50Ll9fc3RhcnREcmFnUG9zaXRpb24gPSBbZS5jbGllbnRYLCBlLmNsaWVudFldO1xuICAgIGRyYWdnZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG59O1xuXG5cbmNvbnN0IHN0b3BEcmFnID0gZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5fX2lzRHJhZyA9IGZhbHNlO1xuICAgIGRyYWdnZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG59O1xuXG5cbmNvbnN0IG1vdmVFbGVtZW50ID0gKGVsZW1lbnQsIGR4LCBkeSkgPT4ge1xuICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKGVsID0+IG1vdmVFbGVtZW50KGVsLCBkeCwgZHkpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQueCArPSBkeDtcbiAgICBlbGVtZW50LnkgKz0gZHk7XG59O1xuXG5cbmNvbnN0IGRyYWcgPSAoZWxlbWVudCwgZSkgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGVsZW1lbnQuX19zdGFydERyYWdQb3NpdGlvbjtcbiAgICBjb25zdCBkeCA9IGUuY2xpZW50WCAtIHg7XG4gICAgY29uc3QgZHkgPSBlLmNsaWVudFkgLSB5O1xuICAgIGVsZW1lbnQuX19zdGFydERyYWdQb3NpdGlvbiA9IFtlLmNsaWVudFgsIGUuY2xpZW50WV07XG5cbiAgICBtb3ZlRWxlbWVudChlbGVtZW50LCBkeCwgZHkpO1xufTtcblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgZHJhZ2dlZEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlLmJ1dHRvbnMgPT09IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuX19pc0RyYWcgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50Ll9faXNEcmFnKSB7XG4gICAgICAgICAgICBkcmFnKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gRHJhZ2dhYmxlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50Lm9uKCdtb3VzZWRvd24nLCBzdGFydERyYWcuYmluZCh0aGlzLCBlbGVtZW50KSk7XG4gICAgZWxlbWVudC5vbignbW91c2V1cCcsIHN0b3BEcmFnLmJpbmQodGhpcywgZWxlbWVudCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnZ2FibGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1BsdWdpbnMvRHJhZ2dhYmxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==