function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { View } from "react-native";
import Text from "../Text";
import { withTheme } from "../../theming";
import RadioButtonGroup from "./RadioButtonGroup";

const RadioButtonFieldGroup = _ref => {
  let {
    label,
    children,
    theme,
    labelStyle,
    style,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: style
  }, /*#__PURE__*/React.createElement(Text, {
    style: [{
      fontSize: theme.typography.headline4.fontSize,
      color: theme.typography.headline4.color
    }, labelStyle]
  }, label), /*#__PURE__*/React.createElement(RadioButtonGroup, _extends({
    theme: theme
  }, rest), children));
};

export default withTheme(RadioButtonFieldGroup);
//# sourceMappingURL=RadioButtonFieldGroup.js.map