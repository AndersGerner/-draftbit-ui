"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeWebSwiper = _interopRequireDefault(require("react-native-web-swiper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Swiper = _ref => {
  let {
    vertical = false,
    loop = false,
    timeout = 0,
    from = 0,
    prevTitle = "",
    nextTitle = "",
    dotsTouchable = true,
    children,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebSwiper.default, {
    from: from,
    loop: loop,
    timeout: timeout,
    vertical: vertical,
    controlsProps: {
      prevTitle,
      nextTitle,
      dotsTouchable
    }
  }, children));
};

var _default = Swiper;
exports.default = _default;
//# sourceMappingURL=Swiper.js.map