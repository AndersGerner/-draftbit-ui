function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import color from "color";
import Config from "./Config";
import Touchable from "./Touchable";
import Elevation from "./Elevation";
import { withTheme } from "../theming";

const Button = _ref => {
  let {
    Icon,
    icon,
    disabled = false,
    type = "solid",
    loading = false,
    labelColor,
    color: colorOverride,
    children,
    onPress,
    elevation = 0,
    style,
    theme: {
      colors,
      disabledOpacity,
      roundness,
      typography
    },
    ...rest
  } = _ref;
  let backgroundColor, borderColor, textColor, borderWidth;
  const buttonColor = colorOverride || colors.primary;

  if (type === "solid") {
    backgroundColor = buttonColor;

    if (disabled) {
      textColor = color(colors.surface).alpha(disabledOpacity).rgb().string();
    } else {
      textColor = labelColor || colors.surface;
    }
  } else {
    backgroundColor = "transparent";

    if (disabled) {
      textColor = color(buttonColor).alpha(disabledOpacity).rgb().string();
    } else {
      textColor = labelColor || buttonColor;
    }
  }

  if (type === "outline") {
    if (disabled) {
      borderColor = color(buttonColor).alpha(disabledOpacity).rgb().string();
    } else {
      borderColor = buttonColor;
    }

    borderWidth = StyleSheet.hairlineWidth;
  } else {
    borderColor = "transparent";
    borderWidth = 0;
  }

  const buttonStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius: roundness
  };
  const textStyle = {
    textAlign: "center",
    color: textColor,
    marginVertical: 16,
    marginHorizontal: 16
  };
  const iconStyle = [styles.icon, {
    marginLeft: 16,
    marginRight: -8,
    width: Config.buttonIconSize
  }];
  const {
    margin,
    marginEnd,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginHorizontal,
    marginVertical,
    ...innerStyles
  } = StyleSheet.flatten(style || {});
  const margins = {
    margin,
    marginEnd,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginHorizontal,
    marginVertical
  };
  return /*#__PURE__*/React.createElement(Elevation, {
    style: {
      elevation,
      alignSelf: "stretch",
      ...margins
    }
  }, /*#__PURE__*/React.createElement(Touchable, _extends({}, rest, {
    onPress: onPress,
    accessibilityState: {
      disabled
    },
    accessibilityRole: "button",
    disabled: disabled || loading,
    style: [styles.button, buttonStyle, innerStyles]
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, icon && loading !== true ? /*#__PURE__*/React.createElement(View, {
    style: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: Config.buttonIconSize,
    color: textColor
  })) : null, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: "small",
    color: textColor,
    style: iconStyle
  }) : null, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [textStyle, typography.button]
  }, children))));
};

const styles = StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: "solid"
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: Config.buttonIconSize
  }
});
export default withTheme(Button);
//# sourceMappingURL=DeprecatedButton.js.map