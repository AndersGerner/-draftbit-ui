function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx */
import * as React from "react";
import { Animated, StyleSheet } from "react-native";
import shadow from "../styles/shadow";
import overlay from "../styles/overlay";
import { withTheme } from "../theming";

const Surface = _ref => {
  let {
    elevation,
    style,
    theme,
    children,
    ...rest
  } = _ref;
  const {
    elevation: styleElevation = 3,
    borderRadius: radius = 0
  } = StyleSheet.flatten(style) || {};
  const {
    dark: isDarkTheme,
    mode,
    colors
  } = theme;
  const borderRadius = radius;
  const ele = elevation || styleElevation;
  return /*#__PURE__*/React.createElement(Animated.View, _extends({}, rest, {
    style: [{
      borderRadius,
      backgroundColor: isDarkTheme && mode === "adaptive" ? overlay(ele, colors.surface) : colors.surface
    }, elevation ? shadow(elevation) : null, style]
  }), children);
};

export default withTheme(Surface);
//# sourceMappingURL=Surface.js.map