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
	t1: 1.3,
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

var colors = ["08ca55", "13cd62", "1cd06f", "25d27d", "2ed48a", "38d797", "42daa4", "4addb1", "53dfbe", "5ee1cd", "67e4da", "70e7e7", "70e7e7", "70e7e7"];

function stag(vh) {
	return _extends({ duration: .3, opacity: 0, stagger: .1 }, vh);
}

function start(barOptions) {
	var vh = arguments.length <= 1 || arguments[1] === undefined ? { x: -size.w } : arguments[1];

	var tl = init();

	var fun = barOptions.HEIGHT > barOptions.WIDTH ? animate_bars_horizontal : animate_bars_vertical;
	fun(barOptions);
	TweenLite.to(".hero img", _extends({ duration: 3 }, barOptions.scale));
	// if(universalBanner.size==="300x250"){
	// 	TweenLite.to(".hero img", {duration:3, scale:.55})
	// }else{
	// 	TweenLite.from(".hero img", {duration:3, ...barOptions.scale})
	// }

	// return

	tl.from('.t1', stag(vh), "+=.4");
	tl.to(".t1", { duration: .3, opacity: 0 }, "+=" + READ.t1);

	tl.from('.t2', stag(vh));
	var listter = [".frame1"];

	// if(universalBanner.size!="300x250" && universalBanner.size!="160x600" ){
	// 	// console.log(universalBanner.size);
	// 	listter.push(".logos")
	// }

	tl.to(listter, { duration: .3, opacity: 0 }, "+=" + READ.t2);

	tl.to(".frame2", { duration: .3, opacity: 1 }, "t2");

	if (universalBanner.size === "300x250" || universalBanner.size === "160x600" || universalBanner.size === "300x600") {
		tl.to([".logos"], { duration: .2, opacity: 0 }, "-=.5");
		tl.from(".t4", { duration: .3, opacity: 0 });

		tl.from('.t3', stag(vh));
	} else if (universalBanner.size === "728x90" || universalBanner.size === "970x250") {
		tl.set('.logos', { opacity: 0, duration: .1 }, "-=.5");
		tl.from('.t3', stag(vh));
		tl.to([".t3"], { duration: .3, opacity: 0 }, "+=" + READ.t3);
		tl.from(".t4", { duration: .3, opacity: 0 });
		console.log('sldkfjskldfj');
	} else {
		tl.from('.t3', stag(vh));
		tl.to([".logos", ".t3"], { duration: .3, opacity: 0 }, "+=" + READ.t3);
		tl.from(".t4", { duration: .3, opacity: 0 });
	}

	tl.from([".cta", ".legalBtn"], { duration: .3, opacity: 0 });

	tl.add((0, _proline.olg)());
}

function animate_bars_horizontal(barOptions) {
	var TOTAL = barOptions.TOTAL;
	var WIDTH = barOptions.WIDTH;
	var HEIGHT = barOptions.HEIGHT;
	var GAP = barOptions.GAP;

	var bars = document.getElementById("bars");

	for (var i = 0; i < TOTAL; i++) {
		var barItem = document.createElement("div");
		var height = HEIGHT - i * GAP;

		TweenLite.set(barItem, {
			transformOrigin: "0% 100%",
			className: "bar bar_" + i,
			width: WIDTH,
			height: height,

			scale: 1,
			y: HEIGHT - height,
			backgroundColor: "#" + colors[i]
		});

		bars.appendChild(barItem);
	}

	var tl = new TimelineMax();

	tl.from('.bar', {
		scaleY: 0,
		stagger: 0.06
	});
	return tl;
}

function animate_bars_vertical(barOptions) {
	var TOTAL = barOptions.TOTAL;
	var WIDTH = barOptions.WIDTH;
	var HEIGHT = barOptions.HEIGHT;
	var GAP = barOptions.GAP;

	var bars = document.getElementById("bars");

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

	tl.from('.bar', {
		width: 0,
		stagger: 0.06
	});
	return tl;
}

exports.size = size;
exports.init = init;
exports.start = start;
exports.colors = colors;

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
'use strict';

var _commonJsHockeyJs = require('../../_common/js/hockey.js');

var barOptions = {
	TOTAL: 12,
	WIDTH: 278,
	HEIGHT: 4,
	GAP: 20,
	hero: 0.9,
	scale: { scale: .7, x: -181, y: -64 }

};

(0, _commonJsHockeyJs.start)(barOptions);

module.exports = {};

},{"../../_common/js/hockey.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
