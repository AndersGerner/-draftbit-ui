"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _theming = require("../theming");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ScrollView(_ref) {
  let {
    children,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.ScrollView, {
    contentContainerStyle: [{
      flexGrow: 1
    }, style]
  }, children);
}

function ScreenContainer(_ref2) {
  let {
    hasSafeArea = false,
    scrollable = false,
    hasBottomSafeArea,
    hasTopSafeArea,
    theme,
    style,
    children,
    ...rest
  } = _ref2;
  const backgroundColor = theme.colors.background;
  const edges = ["left", "right"];

  if (hasSafeArea || hasTopSafeArea) {
    edges.push("top");
  }

  if (hasSafeArea || hasBottomSafeArea) {
    edges.push("bottom");
  }

  return /*#__PURE__*/React.createElement(_reactNativeSafeAreaContext.SafeAreaView, _extends({
    edges: edges,
    style: [styles.container, {
      backgroundColor
    }]
  }, rest), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, {
      backgroundColor
    }, style]
  }, scrollable ? /*#__PURE__*/React.createElement(ScrollView, {
    style: style
  }, children) : children));
}

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

var _default = (0, _theming.withTheme)(ScreenContainer);

exports.default = _default;
//# sourceMappingURL=ScreenContainer.js.map