function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../theming";
import Touchable from "../Touchable";
import { usePrevious } from "../../hooks";

const Checkbox = _ref => {
  let {
    Icon,
    status,
    disabled = false,
    onPress = () => {},
    color,
    uncheckedColor,
    defaultValue,
    checkedIcon = "MaterialCommunityIcons/checkbox-marked",
    uncheckedIcon = "MaterialCommunityIcons/checkbox-blank-outline",
    size = 24,
    style,
    ...rest
  } = _ref;
  const [internalValue, setInternalValue] = React.useState(status || defaultValue || false);
  React.useEffect(() => {
    if (status != null) {
      setInternalValue(status);
    }
  }, [status]); // This special logic is to handle weird APIs like Airtable that return
  // true or undefined for a boolean

  const previousDefaultValue = usePrevious(defaultValue);
  React.useEffect(() => {
    if (defaultValue !== previousDefaultValue) {
      setInternalValue(Boolean(defaultValue));
    }
  }, [defaultValue, previousDefaultValue]);
  const {
    colors
  } = useTheme();
  const checkboxColor = internalValue ? color || colors.primary : uncheckedColor || colors.primary;

  const handlePress = () => {
    setInternalValue(!internalValue);
    onPress(!internalValue);
  };

  return /*#__PURE__*/React.createElement(Touchable, _extends({}, rest, {
    onPress: handlePress,
    disabled: disabled,
    accessibilityState: {
      disabled
    },
    accessibilityRole: "button",
    accessibilityLiveRegion: "polite",
    style: [styles.container, style, {
      width: size,
      height: size
    }]
  }), /*#__PURE__*/React.createElement(Icon, {
    style: styles.icon,
    name: internalValue ? checkedIcon : uncheckedIcon,
    size: size,
    color: checkboxColor
  }), /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, styles.fillContainer]
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.fill, {
      opacity: disabled ? 0.5 : 1
    }, {
      borderColor: checkboxColor
    }]
  })));
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18
  },
  fillContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    alignSelf: "center"
  },
  fill: {
    borderRadius: 5,
    width: 30,
    height: 30,
    alignSelf: "center"
  }
});
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map