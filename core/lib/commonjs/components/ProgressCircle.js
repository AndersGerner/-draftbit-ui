"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _AnimatedCircularProgress = _interopRequireDefault(require("./AnimatedCircularProgress"));

var _theming = require("../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ProgressCircle = _ref => {
  let {
    progress = 0.5,
    style,
    color = "primary",
    size = 100,
    showsText = true,
    unfilledColor,
    strokeCap = "butt",
    textStyle,
    thickness = 1,
    theme
  } = _ref;
  const progressNum = Math.round(progress * 100);
  const tintColor = color || theme.colors.primary;
  const backgroundColor = unfilledColor || theme.colors.secondary;
  return /*#__PURE__*/React.createElement(_AnimatedCircularProgress.default, {
    size: size,
    width: thickness,
    backgroundWidth: thickness,
    fill: progressNum,
    tintColor: tintColor,
    backgroundColor: backgroundColor,
    rotation: 0,
    lineCap: strokeCap,
    style: style
  }, fill => showsText ? /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [{
      fontSize: size * 0.275,
      color: tintColor
    }, textStyle]
  }, Math.round(fill), "%") : null);
};

var _default = (0, _theming.withTheme)(ProgressCircle);

exports.default = _default;
//# sourceMappingURL=ProgressCircle.js.map