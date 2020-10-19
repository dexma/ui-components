"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalGlobal = exports.StyledModal = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _antd = require("antd");

var _selectors = require("../selectors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .ant-modal-mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.45);\n    filter: alpha(opacity=50);\n  }\n  .ant-modal-mask-hidden {\n    display: none;\n  }\n  .ant-modal-wrap {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    overflow: auto;\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledModal = (0, _styledComponents["default"])(_antd.Modal).withConfig({
  displayName: "StyledModal",
  componentId: "sc-1mleb5-0"
})(["box-sizing:border-box;margin:0;padding:0;color:", ";font-size:", ";font-variant:tabular-nums;list-style:none;font-feature-settings:'tnum';position:relative;top:100px;width:auto;margin:0 auto;padding-bottom:24px;pointer-events:none;.ant-modal-title{margin:0;color:", ";font-weight:", ";font-size:20px;line-height:22px;word-wrap:break-word;}.ant-modal-content{position:relative;background-color:", ";background-clip:padding-box;border:0;border-radius:", ";box-shadow:", ";pointer-events:auto;}.ant-modal-close{position:absolute;top:0;right:0;z-index:10;padding:0;color:", ";font-weight:700;line-height:1;text-decoration:none;background:transparent;border:0;outline:0;cursor:pointer;transition:color 0.3s;}.ant-modal-close-x{display:block;width:56px;height:56px;font-size:16px;font-style:normal;line-height:56px;text-align:center;text-transform:none;text-rendering:auto;}.ant-modal-close:focus,.ant-modal-close:hover{color:", ";text-decoration:none;}.ant-modal-header{padding:24px 24px 16px 24px;color:", ";background:", ";border-radius:", " ", " 0 0;}.ant-modal-body{padding:0 24px 24px 24px;font-size:14px;line-height:1.5;word-wrap:break-word;color:", ";}.ant-modal-footer{padding:10px 16px 24px 16px;text-align:right;background:transparent;border-radius:0 0 ", " ", ";}.ant-modal-footer button + button{margin-bottom:0;margin-left:8px;}.ant-modal.zoom-enter,.ant-modal.zoom-appear{transform:none;opacity:0;animation-duration:0.3s;user-select:none;}.ant-modal-open{overflow:hidden;}.ant-modal-centered{text-align:center;}.ant-modal-centered::before{display:inline-block;width:0;height:100%;vertical-align:middle;content:'';}.ant-modal-centered .ant-modal{top:0;display:inline-block;text-align:left;vertical-align:middle;}"], _selectors.fontColor, _selectors.fontSize, _selectors.gray900, _selectors.fontWeightSemiBold, _selectors.backgroundColor, _selectors.borderRadius, _selectors.boxShadow, _selectors.fontColor, _selectors.fontColor, _selectors.fontColor, _selectors.backgroundColor, _selectors.borderRadius, _selectors.borderRadius, _selectors.fontColor, _selectors.borderRadius, _selectors.borderRadius);
exports.StyledModal = StyledModal;
var StyledModalGlobal = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.StyledModalGlobal = StyledModalGlobal;