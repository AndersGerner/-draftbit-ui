function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { withTheme } from "../theming";
import { StyleSheet } from "react-native";
import IconButton from "./IconButton";

const ToggleButton = _ref => {
  let {
    Icon,
    icon,
    toggled = false,
    onPress = () => {},
    defaultValue,
    disabled = false,
    color = "primary",
    colorSecondary = "surface",
    borderColor = "divider",
    iconSize = 25,
    width = 50,
    height = 50,
    theme: {
      colors
    },
    style,
    ...rest
  } = _ref;
  const [internalValue, setInternalValue] = React.useState(toggled || defaultValue || false);
  React.useEffect(() => {
    if (toggled != null) {
      setInternalValue(toggled);
    }
  }, [toggled]);
  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);

  const handlePress = () => {
    setInternalValue(!toggled);
    onPress(!toggled);
  };

  return /*#__PURE__*/React.createElement(IconButton, _extends({
    Icon: Icon,
    icon: icon,
    size: iconSize,
    color: internalValue ? colors[color] : colors[colorSecondary],
    onPress: handlePress,
    disabled: disabled,
    style: [styles.mainContainer, {
      width,
      height,
      backgroundColor: toggled ? colors[colorSecondary] : colors[color],
      borderColor: colors[borderColor]
    }, style]
  }, rest));
};

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1
  }
});
export default withTheme(ToggleButton);
//# sourceMappingURL=ToggleButton.js.map