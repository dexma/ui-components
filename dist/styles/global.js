"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorybookStyles = exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

var _StyledButton = require("./components/StyledButton");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getGlobalStyles = (0, _styledComponents.css)(["input::-ms-clear,input::-ms-reveal{display:none;}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box;}html{font-size:14px;font-family:sans-serif;line-height:1.15;}@-ms-viewport{width:device-width;}article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-variant:tabular-nums;line-height:1.5;font-feature-settings:'tnum';}[tabindex='-1']:focus{outline:none !important;}hr{box-sizing:content-box;height:0;overflow:visible;}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0.5em;font-weight:500;}p{margin-top:0;margin-bottom:1em;}abbr[title],abbr[data-original-title]{text-decoration:underline;border-bottom:0;cursor:help;}address{margin-bottom:1em;font-style:normal;line-height:inherit;}input[type='text'],input[type='password'],input[type='number'],textarea{-webkit-appearance:none;}ol,ul,dl{margin-top:0;margin-bottom:1em;}ol ol,ul ul,ol ul,ul ol{margin-bottom:0;}dt{font-weight:500;}dd{margin-bottom:0.5em;margin-left:0;}blockquote{margin:0 0 1em;}dfn{font-style:italic;}b,strong{font-weight:bolder;}small{font-size:80%;}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}a{text-decoration:none;background-color:transparent;outline:none;cursor:pointer;transition:color 0.3s;}a:active,a:hover{text-decoration:none;outline:0;}a[disabled]{cursor:not-allowed;pointer-events:none;}pre,code,kbd,samp{font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,Courier,monospace;}pre{margin-top:0;margin-bottom:1rem;overflow:auto;}figure{margin:0 0 1rem;}img{vertical-align:middle;border-style:none;}svg:not(:root){overflow:hidden;}a,area,button,[role='button'],input:not([type='range']),label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation;}table{border-collapse:collapse;}caption{padding-top:0.75rem;padding-bottom:0.3rem;text-align:left;caption-side:bottom;}th{text-align:inherit;}input,button,select,optgroup,textarea{margin:0;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;outline:none;}button,input{overflow:visible;}button,select{text-transform:none;}button,html [type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{padding:0;border-style:none;}input[type='radio'],input[type='checkbox']{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;}input[type='date'],input[type='time'],input[type='datetime-local'],input[type='month']{-webkit-appearance:listbox;}textarea{overflow:auto;resize:vertical;}fieldset{min-width:0;margin:0;padding:0;border:0;}legend{display:block;width:100%;max-width:100%;margin-bottom:0.5rem;padding:0;color:inherit;font-size:1.5em;line-height:inherit;white-space:normal;}progress{vertical-align:baseline;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{outline-offset:-2px;-webkit-appearance:none;}[type='search']::-webkit-search-cancel-button,[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button;}output{display:inline-block;}summary{display:list-item;}template{display:none;}[hidden]{display:none !important;}mark{padding:0.2em;}"]);
var getStorybookStyles = (0, _styledComponents.css)(["", "{margin-right:5px;}.css-1tb5rpz,.css-h1ypda{overflow:visible !important;}"], _StyledButton.StyledButton);
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), getGlobalStyles);
exports.GlobalStyle = GlobalStyle;
var StorybookStyles = (0, _styledComponents.createGlobalStyle)(_templateObject2(), getStorybookStyles);
exports.StorybookStyles = StorybookStyles;