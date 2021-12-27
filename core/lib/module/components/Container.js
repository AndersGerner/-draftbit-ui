function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { withTheme } from "../theming";
import Elevation from "./Elevation";

const Container = _ref => {
  let {
    useThemeGutterPadding,
    borderColor,
    borderWidth,
    backgroundColor,
    backgroundImage,
    backgroundImageResizeMode,
    elevation,
    style,
    children,
    theme,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    ...rest
  } = _ref;
  const {
    flex,
    flexGrow,
    flexWrap,
    flexBasis,
    flexShrink,
    flexDirection,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,
    ...styleProp
  } = StyleSheet.flatten(style) || {};
  const containerStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    width: "100%",
    ...styleProp
  };
  const innerStyle = {
    flex,
    flexGrow,
    flexWrap,
    flexBasis,
    flexShrink,
    flexDirection,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal: paddingHorizontal || useThemeGutterPadding ? 16 : 0
  };
  const Wrap = elevation ? Elevation : View;

  if (elevation) {
    containerStyle.elevation = elevation;
  }

  return /*#__PURE__*/React.createElement(Wrap, _extends({
    style: [containerStyle, style]
  }, rest), backgroundImage ? /*#__PURE__*/React.createElement(ImageBackground, {
    source: typeof backgroundImage === "string" ? {
      uri: backgroundImage
    } : backgroundImage,
    resizeMode: backgroundImageResizeMode,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: innerStyle
  }, children)) : /*#__PURE__*/React.createElement(View, {
    style: innerStyle
  }, children));
};

export default withTheme(Container);
//# sourceMappingURL=Container.js.map