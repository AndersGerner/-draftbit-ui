function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { Animated, StyleSheet, View } from "react-native";
import shadow from "../styles/shadow";
import { withTheme } from "../theming";

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
  } = StyleSheet.flatten(style) || {};
  const {
    colors
  } = theme;
  const borderRadius = radius;
  return /*#__PURE__*/React.createElement(Animated.View, _extends({}, rest, {
    style: [{
      borderRadius,
      backgroundColor: colors.surface
    }, elevation ? shadow(elevation) : null, style]
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      overflow: "hidden",
      borderRadius
    }
  }, children));
};

export default withTheme(Elevation);
//# sourceMappingURL=Elevation.js.map