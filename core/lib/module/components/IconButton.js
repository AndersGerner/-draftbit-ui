function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View, StyleSheet, ActivityIndicator, Pressable, Platform } from "react-native";
import { withTheme } from "../theming";

const IconButton = _ref => {
  let {
    Icon,
    icon,
    color: customColor,
    size = 32,
    disabled = false,
    loading = false,
    onPress,
    theme,
    style,
    ...props
  } = _ref;
  const iconColor = customColor || theme.colors.primary;
  return /*#__PURE__*/React.createElement(Pressable, _extends({
    onPress: onPress,
    disabled: disabled || loading,
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [styles.container, {
        opacity: pressed || disabled ? 0.75 : 1,
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center"
      }, style];
    }
  }, props), /*#__PURE__*/React.createElement(View, null, icon && !loading ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size - 2,
    color: iconColor
  }) : null, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: "small",
    color: iconColor
  }) : null));
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none"
      }
    })
  }
});
export default withTheme(IconButton);
//# sourceMappingURL=IconButton.js.map