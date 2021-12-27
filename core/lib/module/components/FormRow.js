function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { extractStyles } from "../utilities";
import Touchable from "./Touchable";
export default function FormRow(_ref) {
  let {
    disabled,
    direction,
    children,
    label,
    style,
    onPress,
    ...rest
  } = _ref;
  const {
    textStyles,
    viewStyles
  } = extractStyles(style);
  return /*#__PURE__*/React.createElement(Touchable, _extends({
    disabled: disabled,
    onPress: onPress,
    style: [styles.row, {
      flexDirection: direction
    }, viewStyles]
  }, rest), /*#__PURE__*/React.createElement(Text, {
    style: textStyles
  }, label), children);
}
const styles = StyleSheet.create({
  row: {
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
//# sourceMappingURL=FormRow.js.map