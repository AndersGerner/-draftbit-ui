"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const NumberInput = _ref => {
  let {
    onChangeText,
    value,
    defaultValue,
    ...props
  } = _ref;

  const [isDecimal, setIsDecimal] = _react.default.useState(value && !Number.isInteger(value));

  _react.default.useEffect(() => {
    if (value) {
      setIsDecimal(value.toString().includes("."));
    }
  }, [value]);

  const handleChangeText = newValue => {
    if (onChangeText) {
      const parsedNumber = parseFloat(newValue);
      const number = isNaN(parsedNumber) ? 0 : parsedNumber;
      setIsDecimal(newValue.includes("."));
      onChangeText(number);
    }
  };

  let strValue;

  if (value != undefined) {
    strValue = value.toString();

    if (isDecimal && !strValue.includes(".")) {
      strValue = `${strValue}.`;
    }
  }

  return /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    keyboardType: "numeric"
  }, props, {
    value: strValue,
    defaultValue: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.toString(),
    onChangeText: handleChangeText
  }));
};

var _default = NumberInput; // comment to try to fix sourcemap issue

exports.default = _default;
//# sourceMappingURL=NumberInput.js.map