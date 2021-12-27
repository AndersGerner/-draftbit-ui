function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";
import { extractStyles } from "../../utilities";
import { withTheme } from "../../theming";

const AccordionItem = _ref => {
  let {
    Icon,
    icon,
    label,
    style,
    iconColor,
    theme,
    ...rest
  } = _ref;
  const {
    textStyles,
    viewStyles
  } = extractStyles(style);
  return /*#__PURE__*/React.createElement(Pressable, _extends({
    style: [styles.container, viewStyles]
  }, rest), /*#__PURE__*/React.createElement(View, {
    style: styles.row
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: iconColor || theme.colors.primary
  }) : null, /*#__PURE__*/React.createElement(View, {
    style: [styles.item, styles.content]
  }, /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    style: textStyles
  }, label))));
};

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8
  },
  item: {
    marginVertical: 6,
    paddingLeft: 8
  },
  content: {
    flex: 1,
    justifyContent: "center"
  }
});
export default withTheme(AccordionItem);
//# sourceMappingURL=AccordionItem.js.map