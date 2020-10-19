"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineGlow = exports.shake = exports.jiggle = exports["float"] = exports.glow = exports.rotate360 = exports.easing = void 0;

var _styledComponents = require("styled-components");

var _selectors = require("../selectors");

// Handy CSS animations for micro-interactions
var easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)'
};
exports.easing = easing;
var rotate360 = (0, _styledComponents.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
exports.rotate360 = rotate360;
var glow = (0, _styledComponents.keyframes)(["0%,100%{opacity:1;}50%{opacity:.4;}"]);
exports.glow = glow;

var _float = (0, _styledComponents.keyframes)(["0%{transform:translateY(1px);}25%{transform:translateY(0px);}50%{transform:translateY(-3px);}100%{transform:translateY(1px);}"]);

exports["float"] = _float;
var jiggle = (0, _styledComponents.keyframes)(["0%,100%{transform:translate3d(0,0,0);}12.5%,62.5%{transform:translate3d(-4px,0,0);}37.5%,87.5%{transform:translate3d(4px,0,0);}"]);
exports.jiggle = jiggle;
var shake = (0, _styledComponents.keyframes)(["0%{transform:rotate(-3deg)}1.68421%{transform:rotate(3deg)}2.10526%{transform:rotate(6deg)}3.78947%{transform:rotate(-6deg)}4.21053%{transform:rotate(-6deg)}5.89474%{transform:rotate(6deg)}6.31579%{transform:rotate(6deg)}8%{transform:rotate(-6deg)}8.42105%{transform:rotate(-6deg)}10.10526%{transform:rotate(6deg)}10.52632%{transform:rotate(6deg)}12.21053%{transform:rotate(-6deg)}12.63158%{transform:rotate(-6deg)}14.31579%{transform:rotate(6deg)}15.78947%{transform:rotate(0deg)}100%{transform:rotate(0deg)}"]);
exports.shake = shake;
var inlineGlow = (0, _styledComponents.css)(["animation:", " 1.5s ease-in-out infinite;background:", ";color:transparent;cursor:progress;"], glow, _selectors.backgroundColor);
exports.inlineGlow = inlineGlow;