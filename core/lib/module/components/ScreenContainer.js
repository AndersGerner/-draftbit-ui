function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { StyleSheet, ScrollView as NativeScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withTheme } from "../theming";

function ScrollView(_ref) {
  let {
    children,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(NativeScrollView, {
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

  return /*#__PURE__*/React.createElement(SafeAreaView, _extends({
    edges: edges,
    style: [styles.container, {
      backgroundColor
    }]
  }, rest), /*#__PURE__*/React.createElement(View, {
    style: [styles.container, {
      backgroundColor
    }, style]
  }, scrollable ? /*#__PURE__*/React.createElement(ScrollView, {
    style: style
  }, children) : children));
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default withTheme(ScreenContainer);
//# sourceMappingURL=ScreenContainer.js.map