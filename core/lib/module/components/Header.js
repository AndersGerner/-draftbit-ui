import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withTheme } from "../theming";
import Divider from "./Divider";
import Touchable from "./Touchable";
import Config from "./Config";

const Header = _ref => {
  let {
    Icon,
    titleTypeStyle,
    titleColor,
    title,
    buttonText,
    dividerTopMargin,
    icon,
    onPress,
    style,
    theme: {
      colors,
      typography
    }
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.topContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [titleTypeStyle, {
      color: titleColor,
      flex: 1
    }],
    numberOfLines: 1
  }, title), onPress && /*#__PURE__*/React.createElement(Touchable, {
    style: {
      alignSelf: "center",
      marginLeft: 12
    },
    onPress: onPress
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.buttonContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [typography.subtitle2, {
      color: colors.light,
      marginRight: 8
    }],
    numberOfLines: 1
  }, buttonText), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: Config.headerIconSize,
    color: colors.light
  })))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      marginTop: dividerTopMargin || 16
    }
  }));
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default withTheme(Header);
//# sourceMappingURL=Header.js.map