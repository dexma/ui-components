"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledToast = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _selectors = require("../selectors");

var _Toast = require("../../components/Toaster/Toast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledToast = _styledComponents["default"].div.withConfig({
  displayName: "StyledToast",
  componentId: "txg4z-0"
})(["position:fixed;z-index:100000;top:0;right:0;width:360px;display:flex;align-items:center;padding:10px;margin:20px;border-radius:4px;font-weight:500;font-size:", ";color:", ";background-color:", ";span{margin-left:10px;}"], _selectors.fontSize, function (props) {
  var _ToastType$INFO$Toast;

  return (_ToastType$INFO$Toast = {}, _defineProperty(_ToastType$INFO$Toast, _Toast.ToastType.INFO, 'white'), _defineProperty(_ToastType$INFO$Toast, _Toast.ToastType.SUCCESS, 'white'), _defineProperty(_ToastType$INFO$Toast, _Toast.ToastType.WARNING, 'black'), _defineProperty(_ToastType$INFO$Toast, _Toast.ToastType.ERROR, 'white'), _ToastType$INFO$Toast)[props.type];
}, function (props) {
  var _ToastType$INFO$Toast2;

  return (_ToastType$INFO$Toast2 = {}, _defineProperty(_ToastType$INFO$Toast2, _Toast.ToastType.INFO, _selectors.gray300), _defineProperty(_ToastType$INFO$Toast2, _Toast.ToastType.SUCCESS, _selectors.successColor), _defineProperty(_ToastType$INFO$Toast2, _Toast.ToastType.WARNING, _selectors.warningColor), _defineProperty(_ToastType$INFO$Toast2, _Toast.ToastType.ERROR, _selectors.errorColor), _ToastType$INFO$Toast2)[props.type];
});

exports.StyledToast = StyledToast;