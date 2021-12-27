"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Subtitle = exports.Caption = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Title = (0, _theming.withTheme)(_ref => {
  let {
    text,
    theme,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [{
      fontSize: 20,
      letterSpacing: 0,
      lineHeight: 26,
      color: theme.colors.text
    }, style]
  }, text);
});
exports.Title = Title;
const Subtitle = (0, _theming.withTheme)(_ref2 => {
  let {
    text,
    theme,
    style
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [{
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 16,
      color: theme.colors.medium
    }, style]
  }, text);
});
exports.Subtitle = Subtitle;
const Caption = (0, _theming.withTheme)(_ref3 => {
  let {
    text,
    theme,
    style
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [{
      fontSize: 12,
      letterSpacing: 0,
      lineHeight: 14,
      color: theme.colors.light
    }, style]
  }, text);
});
exports.Caption = Caption;
//# sourceMappingURL=Typography.js.map