import React from "react";
import { Text } from "react-native";
import { withTheme } from "../theming";
export const Title = withTheme(_ref => {
  let {
    text,
    theme,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, {
    style: [{
      fontSize: 20,
      letterSpacing: 0,
      lineHeight: 26,
      color: theme.colors.text
    }, style]
  }, text);
});
export const Subtitle = withTheme(_ref2 => {
  let {
    text,
    theme,
    style
  } = _ref2;
  return /*#__PURE__*/React.createElement(Text, {
    style: [{
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 16,
      color: theme.colors.medium
    }, style]
  }, text);
});
export const Caption = withTheme(_ref3 => {
  let {
    text,
    theme,
    style
  } = _ref3;
  return /*#__PURE__*/React.createElement(Text, {
    style: [{
      fontSize: 12,
      letterSpacing: 0,
      lineHeight: 14,
      color: theme.colors.light
    }, style]
  }, text);
});
//# sourceMappingURL=Typography.js.map