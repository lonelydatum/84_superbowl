(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _proline = require("./proline");

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var w = size.w;
var h = size.h;

var READ = {
	t1: 2.7,
	t2: 1.7,
	t3: 2.1
};

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

function stag(vh) {
	return _extends({ duration: .3, opacity: 0, stagger: .1 }, vh);
}

function start_landscape(barOptions, barOptions2) {
	var vh = arguments.length <= 2 || arguments[2] === undefined ? { x: -size.w } : arguments[2];

	var tl = init();
	tl.add("start");
	var barTL = barOptions.verHor === "h" ? animate_bars_vertical(barOptions, false) : animate_bars_horizontal(barOptions);

	tl.add(barTL, "start");
	// return
	tl.from('.t1', stag(vh), "start+=.3");
	tl.from('.logos', { opacity: 0, duration: .3 });
	tl.to([".hero", ".t1", "#bars", ".logos"], { duration: .3, opacity: 0 }, "+=" + READ.t1);

	var barTL2 = barOptions2.verHor === "h" ? animate_bars_vertical(barOptions2) : animate_bars_horizontal(barOptions2);
	tl.add(barTL2, "end");
	tl.from('.t2', stag(vh), "end+=.3");
	if (universalBanner.size === "728x90" || universalBanner.size === "320x50") {
		tl.to(".t2", { duration: .3, opacity: 0 }, "+=" + READ.t2);
	} else {
		tl.to(".t2", { duration: .3, y: 0, scale: .5, x: 0, top: 0, left: 0 }, "+=" + READ.t2);
	}

	tl.from([".cta", ".legalBtn", ".logos_big", ".playsmart"], { duration: .3, opacity: 0 });
	tl.add((0, _proline.olg)());
}

function start(barOptions, barOptions2) {
	var vh = arguments.length <= 2 || arguments[2] === undefined ? { x: -size.w } : arguments[2];

	console.log('sldkfj');
	var tl = init();
	tl.add("start");
	var barTL = barOptions.verHor === "h" ? animate_bars_vertical(barOptions, false) : animate_bars_horizontal(barOptions);

	tl.add(barTL, "start");
	tl.from('.t1', stag(vh), "start+=.3");
	tl.to([".hero", ".t1", "#bars", ".logos"], { duration: .3, opacity: 0 }, "+=" + READ.t1);

	var barTL2 = barOptions2.verHor === "h" ? animate_bars_vertical(barOptions2) : animate_bars_horizontal(barOptions2);
	tl.add(barTL2, "end");
	tl.from('.t2', stag(vh), "end+=.3");

	if (universalBanner.size === "970x250") {
		tl.to(".t2", { duration: .3, y: 0, scale: .5, x: 0, top: 0, left: 0 }, "+=" + READ.t2);
		tl.from([".cta", ".legalBtn", ".playsmart", ".logos_big"], { duration: .3, opacity: 0 }, "+=.3");
	} else {
		tl.from('.logos_big', { opacity: 0 }, "-=.1");
		tl.from([".cta", ".legalBtn", ".playsmart"], { duration: .3, opacity: 0 }, "+=.4");
	}

	tl.add((0, _proline.olg)());
}

function animate_bars_horizontal(barOptions) {
	var TOTAL = barOptions.TOTAL;
	var WIDTH = barOptions.WIDTH;
	var HEIGHT = barOptions.HEIGHT;
	var GAP = barOptions.GAP;
	var id = barOptions.id;
	var colors = barOptions.colors;
	var startColor = barOptions.startColor;

	var bars = document.getElementById(id);
	for (var i = 0; i < TOTAL; i++) {
		var barItem = document.createElement("div");
		var height = HEIGHT - i * GAP;
		console.log(i, colors[i]);
		TweenLite.set(barItem, {
			transformOrigin: "0% 100%",
			className: "bar bar_" + i,
			width: WIDTH,
			height: height,

			scale: 1,
			x: WIDTH * i,
			y: HEIGHT - height,
			backgroundColor: "#" + colors[i]
		});

		bars.appendChild(barItem);
	}

	var tl = new TimelineMax();
	tl.from("#" + id + " .bar", {
		scaleY: 0,
		stagger: 0.06
	});
	return tl;
}

function animate_bars_vertical(barOptions) {
	var animate = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	var TOTAL = barOptions.TOTAL;
	var WIDTH = barOptions.WIDTH;
	var HEIGHT = barOptions.HEIGHT;
	var GAP = barOptions.GAP;
	var id = barOptions.id;
	var colors = barOptions.colors;

	var bars = document.getElementById(id);
	for (var i = 0; i < TOTAL; i++) {

		var barItem = document.createElement("div");
		TweenLite.set(barItem, {
			className: "bar bar_" + i,
			height: HEIGHT,
			width: WIDTH - i * GAP,
			y: HEIGHT * i,
			backgroundColor: "#" + colors[i]
		});

		bars.appendChild(barItem);
	}

	var tl = new TimelineMax();
	if (animate) {
		tl.from("#" + id + " .bar", {
			width: 0,
			stagger: 0.06
		});
	}

	return tl;
}

exports.size = size;
exports.init = init;
exports.start = start;
exports.start_landscape = start_landscape;

},{"./proline":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],3:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonJsCommonJs = require('../../_common/js/common.js');

var colors = ["00c748", "17cc46", "2ed145", "46d442", "5eda40", "76de3d", "8de23b", "a4e739", "bbeb37", "d3ef35"];

var barOptions = {
	colors: colors,
	verHor: "h",
	TOTAL: 10,
	WIDTH: 31,
	HEIGHT: 10,
	GAP: -35,
	id: "bars"

};

var barOptions2 = _extends({}, barOptions, {
	colors: colors.reverse(),
	WIDTH: 350 + 50,
	HEIGHT: 13,
	TOTAL: 8,
	GAP: 50,
	id: "bars2"
});

(0, _commonJsCommonJs.start)(barOptions, barOptions2);

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
