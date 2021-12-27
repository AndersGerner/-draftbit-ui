"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _shadow = _interopRequireDefault(require("../styles/shadow"));

var _theming = require("../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* directly copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx#L62 */
const Elevation = _ref => {
  let {
    style,
    theme,
    children,
    ...rest
  } = _ref;
  const {
    elevation = 4,
    borderRadius: radius
  } = _reactNative.StyleSheet.flatten(style) || {};
  const {
    colors
  } = theme;
  const borderRadius = radius;
  return /*#__PURE__*/React.createElement(_reactNative.Animated.View, _extends({}, rest, {
    style: [{
      borderRadius,
      backgroundColor: colors.surface
    }, elevation ? (0, _shadow.default)(elevation) : null, style]
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      overflow: "hidden",
      borderRadius
    }
  }, children));
};

var _default = (0, _theming.withTheme)(Elevation);

exports.default = _default;
//# sourceMappingURL=Elevation.js.map