"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

const SwiperItem = _ref => {
  let {
    children,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.wrapper, style]
  }, children);
};

var _default = SwiperItem;
exports.default = _default;
//# sourceMappingURL=SwiperItem.js.map