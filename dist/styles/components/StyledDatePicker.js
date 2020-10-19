"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDatePicker = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _selectors = require("../selectors");

var _StyledSelect = require("./StyledSelect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledDatePicker = _styledComponents["default"].div.withConfig({
  displayName: "StyledDatePicker",
  componentId: "sc-2zecu1-0"
})(["display:flex;", "{.select-styled__control{border-radius:", ";}}.date-range{width:215px;margin-right:-1px;.DateInput{width:calc(50% - 25px);height:100%;background:transparent;}.DateRangePicker{display:block;}.DateRangePickerInput{align-items:center;background-color:hsl(0,0%,100%);border:", ";border-radius:", ";cursor:default;display:flex;flex-wrap:wrap;justify-content:space-between;height:", ";outline:0 !important;position:relative;transition:all 100ms;box-sizing:border-box;padding:0 10px;}.DateRangePickerInput_calendarIcon{background:0 0;border:0;color:", ";font:inherit;line-height:normal;overflow:visible;cursor:pointer;vertical-align:middle;padding:0px;margin:0;outline:none;width:20px;display:flex;align-content:center;align-items:center;}.DateRangePickerInput > div:first-child input{border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-0.5px;}.DateRangePickerInput > div:last-child input{border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-0.5px;}.DateInput_input{font-size:", ";color:", ";box-sizing:border-box;text-align:center;padding:0;outline:none;width:100%;height:100%;display:flex;align-content:center;align-items:center;font-weight:normal;background-color:transparent;}.DateRangePickerInput_arrow{vertical-align:middle;color:", ";display:flex;align-content:center;align-items:center;text-align:center;}.DateInput_input__focused{outline:0;background:", ";color:", ";font-weight:", ";border-color:", ";}.DateInput_input + .DateInput_input{margin-left:0;}.DateInput_fang{display:none;}.CalendarDay{border:0px !important;text-align:center;font-size:0.75rem;}.CalendarDay__default:hover{background-color:", ";border:1px solid ", ";background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='25'%3E%3Ccircle cx='12' cy='12' r='11.715' stroke='%23", "' stroke-width='1' fill='white' /%3E%3C/svg%3E\");color:", ";}.CalendarDay__selected:hover,.CalendarDay__selected_span:hover{background-color:", ";border:1px solid ", ";background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='25'%3E%3Ccircle cx='12' cy='12' r='11.715' stroke='%23", "' stroke-width='1' fill='white' /%3E%3C/svg%3E\");color:", ";}.CalendarDay__selected,.CalendarDay__selected:active,.CalendarDay__selected_span,.CalendarDay__hovered_span,.CalendarDay__selected_span:active{background:", ";border:1px solid ", ";color:", ";}.CalendarDay__selected_start,.CalendarDay__selected_end{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='25'%3E%3Ccircle cx='12' cy='12' r='11.715' stroke='black' stroke-width='0' fill='%23", "' /%3E%3C/svg%3E\");border-radius:50%;background-color:", ";color:", ";}.CalendarDay__selected_start{&.CalendarDay__selected_end{background-color:", ";}}.CalendarDay__selected_end{&.CalendarDay__selected_start{background-color:", ";}}.CalendarDay__selected_start{border-radius:50% 0 0 50%;}.CalendarDay__selected_end{border-radius:0 50% 50% 0;}.DateRangePicker_picker{top:", "!important;margin-top:0px;}.DayPickerNavigation_button__horizontal{position:absolute;top:18px;line-height:0.78;width:28px;height:28px;border:none;border-radius:50%;padding:0;background-color:", ";text-align:center;display:flex;align-content:center;align-items:center;justify-content:center;&:first-child{left:15px;}&:last-child{right:15px;}}.DayPicker_weekHeader{top:50px;}.DayPicker_weekHeader_li{text-transform:capitalize;}.CalendarMonth_caption{font-size:", ";padding-bottom:35px;color:", ";text-transform:capitalize;}.DayPickerNavigation_svg__horizontal{height:10px;width:10px;fill:", ";display:block;}.DayPicker__withBorder{box-shadow:", ";border-radius:3px;}.DayPickerNavigation_button__default{border:none;border-radius:50%;padding:0;background-color:", ";}.DayPicker_weekHeader,.dexma-icon{color:", ";}}.select{width:160px;.dexma-select__control{border-radius:0px ", " ", " 0px;margin-left:-1px;}}"], _StyledSelect.StyledSelect, function (props) {
  if (props.withSelect) {
    return "0 ".concat((0, _selectors.borderRadius)(props), " ").concat((0, _selectors.borderRadius)(props), " 0");
  }

  return (0, _selectors.borderRadius)(props);
}, _selectors.border, function (props) {
  if (props.withSelect) {
    return "".concat((0, _selectors.borderRadius)(props), " 0 0 ").concat((0, _selectors.borderRadius)(props));
  }

  return (0, _selectors.borderRadius)(props);
}, _selectors.dataPickerHeight, function (props) {
  if (props.focusedInput) {
    return (0, _selectors.primaryColor)(props);
  }

  return (0, _selectors.iconColor)(props);
}, _selectors.dataPickerFontSize, _selectors.fontColor, _selectors.iconColor, _selectors.backgroundColor, _selectors.primaryColor, _selectors.fontWeightSemiBold, _selectors.primaryColor, _selectors.backgroundColor, _selectors.white, _selectors.primaryColorSvg, _selectors.fontColor, function (props) {
  return (0, _polished.transparentize)(0.7, (0, _selectors.backgroundColorActive)(props));
}, _selectors.white, _selectors.primaryColorSvg, _selectors.fontColor, function (props) {
  return (0, _polished.transparentize)(0.7, (0, _selectors.backgroundColorActive)(props));
}, function (props) {
  return (0, _polished.transparentize)(0.7, (0, _selectors.backgroundColorActive)(props));
}, _selectors.fontColor, _selectors.primaryColorSvg, function (props) {
  return (0, _polished.transparentize)(0.7, (0, _selectors.backgroundColorActive)(props));
}, _selectors.white, _selectors.backgroundColor, _selectors.backgroundColor, _selectors.dataPickerHeight, _selectors.gray100, _selectors.dataPickerFontSize, _selectors.fontColor, _selectors.iconColor, _selectors.boxShadow, _selectors.gray100, _selectors.iconColor, _selectors.borderRadius, _selectors.borderRadius);

exports.StyledDatePicker = StyledDatePicker;