function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View, StyleSheet, Pressable, ActivityIndicator, Platform } from "react-native";
import { withTheme } from "../theming";

const FAB = _ref => {
  let {
    onPress,
    disabled,
    loading,
    iconName = "MaterialIcons/add",
    style,
    theme,
    iconColor,
    bgColor,
    size = 50,
    Icon,
    ...props
  } = _ref;
  const backgroundColor = bgColor || theme.colors.primary;
  const color = iconColor || "#FFF";
  return /*#__PURE__*/React.createElement(View, {
    style: [{
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: "hidden"
    }, style]
  }, /*#__PURE__*/React.createElement(Pressable, _extends({
    onPress: onPress,
    disabled: loading || disabled,
    android_ripple: {
      color: "#333",
      radius: size / 4
    },
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [styles.button, {
        opacity: pressed || disabled ? 0.75 : 1,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
      }];
    }
  }, props), /*#__PURE__*/React.createElement(View, null, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: "small",
    color: color
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    size: 28,
    color: color
  }))));
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5a45ff",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none"
      }
    })
  }
});
export default withTheme(FAB);
//# sourceMappingURL=FAB.js.map