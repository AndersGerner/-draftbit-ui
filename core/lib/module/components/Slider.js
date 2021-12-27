function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View, StyleSheet } from "react-native";
import NativeSlider from "@react-native-community/slider";
import isNumber from "lodash.isnumber";
import toNumber from "lodash.tonumber";
import { withTheme } from "../theming";

function maybeParseValue(value) {
  if (value === undefined) {
    return undefined;
  }

  if (isNumber(value)) {
    return value;
  }

  try {
    const maybe = toNumber(value);

    if (isNumber(maybe)) {
      return maybe;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function Slider(_ref) {
  let {
    Icon,
    leftIcon,
    rightIcon,
    leftIconColor,
    rightIconColor,
    value,
    defaultValue,
    minimumTrackTintColor,
    maximumTrackTintColor,
    thumbTintColor,
    minimumValue = 0,
    maximumValue = 100,
    tapToSeek,
    step = 1,
    onValueChange = () => {},
    style,
    theme,
    ...rest
  } = _ref;
  const [internalValue, setInternalValue] = React.useState(value || defaultValue);
  React.useEffect(() => {
    if (value != null) {
      setInternalValue(value);
    }
  }, [value]);
  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);
  const minTrackColor = minimumTrackTintColor || theme.colors.primary;
  const maxTrackColor = maximumTrackTintColor || theme.colors.light;
  const thumbColor = thumbTintColor || theme.colors.primary;
  const leftIconThemeColor = leftIconColor || theme.colors.light;
  const rightIconThemeColor = rightIconColor || theme.colors.light;
  const parsedValue = maybeParseValue(internalValue);

  const handleSlidingComplete = newValue => {
    setInternalValue(newValue);
    onValueChange(newValue);
  };

  return /*#__PURE__*/React.createElement(View, _extends({
    style: [styles.container, style]
  }, rest), leftIcon ? /*#__PURE__*/React.createElement(Icon, {
    color: leftIconThemeColor,
    name: leftIcon,
    size: 24
  }) : null, /*#__PURE__*/React.createElement(NativeSlider, {
    value: parsedValue,
    step: step,
    minimumValue: minimumValue,
    maximumValue: maximumValue,
    tapToSeek: tapToSeek,
    minimumTrackTintColor: minTrackColor,
    maximumTrackTintColor: maxTrackColor,
    thumbTintColor: thumbColor,
    onSlidingComplete: handleSlidingComplete,
    style: styles.slider
  }), rightIcon ? /*#__PURE__*/React.createElement(Icon, {
    color: rightIconThemeColor,
    name: rightIcon,
    size: 24
  }) : null);
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  slider: {
    flex: 1,
    marginHorizontal: 12
  }
});
export default withTheme(Slider);
//# sourceMappingURL=Slider.js.map