"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Text = _interopRequireDefault(require("../Text"));

var _theming = require("../../theming");

var _RadioButtonGroup = _interopRequireDefault(require("./RadioButtonGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RadioButtonFieldGroup = _ref => {
  let {
    label,
    children,
    theme,
    labelStyle,
    style,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: [{
      fontSize: theme.typography.headline4.fontSize,
      color: theme.typography.headline4.color
    }, labelStyle]
  }, label), /*#__PURE__*/_react.default.createElement(_RadioButtonGroup.default, _extends({
    theme: theme
  }, rest), children));
};

var _default = (0, _theming.withTheme)(RadioButtonFieldGroup);

exports.default = _default;
//# sourceMappingURL=RadioButtonFieldGroup.js.map