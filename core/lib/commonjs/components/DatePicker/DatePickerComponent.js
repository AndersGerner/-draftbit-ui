"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _datetimepicker = _interopRequireDefault(require("@react-native-community/datetimepicker"));

var _reactNativeModalDatetimePicker = _interopRequireDefault(require("react-native-modal-datetime-picker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DatePickerComponent = _ref => {
  let {
    value,
    onChange,
    mode,
    toggleVisibility
  } = _ref;
  return _reactNative.Platform.OS === "ios" || _reactNative.Platform.OS === "android" ? /*#__PURE__*/_react.default.createElement(_reactNativeModalDatetimePicker.default, {
    date: value,
    mode: mode,
    isVisible: true,
    display: _reactNative.Platform.OS === "ios" ? "spinner" : "default",
    onCancel: () => {
      console.log("Picker cancelled before selecting anything.");
      toggleVisibility();
    },
    onConfirm: data => {
      onChange(null, data);
    }
  }) : /*#__PURE__*/_react.default.createElement(_datetimepicker.default, {
    value: value,
    mode: mode,
    onChange: onChange,
    display: "default"
  });
};

var _default = DatePickerComponent;
exports.default = _default;
//# sourceMappingURL=DatePickerComponent.js.map