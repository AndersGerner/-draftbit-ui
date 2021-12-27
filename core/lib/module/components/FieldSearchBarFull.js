import * as React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { withTheme } from "../theming";
import Config from "./Config";

const FieldSearchBarFull = _ref => {
  let {
    showIcon,
    Icon,
    icon = "search",
    placeholder = "",
    style,
    theme: {
      colors,
      typography
    },
    onChange: changeOverride,
    onSubmit: submitOverride,
    value,
    defaultValue
  } = _ref;
  const [focused, setIsFocused] = React.useState(false);

  const onBlur = () => {
    setIsFocused(false);
  };

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
  const onChange = React.useCallback(text => {
    changeOverride && changeOverride(text);
  }, [changeOverride]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSubmit = e => {
    submitOverride && submitOverride(e);
  };

  const {
    lineHeight,
    ...typeStyles
  } = typography.body2; // eslint-disable-line @typescript-eslint/no-unused-vars

  const handleChangeText = newValue => {
    setInternalValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, showIcon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: Config.fieldSearchBarFullIconSize,
    color: focused ? colors.primary : colors.light
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      marginLeft: showIcon ? 12 : 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    clearButtonMode: "while-editing",
    placeholder: placeholder,
    value: internalValue,
    onBlur: onBlur,
    onFocus: onFocus,
    onChangeText: handleChangeText,
    onSubmitEditing: onSubmit,
    placeholderTextColor: colors.light,
    style: [{
      color: colors.medium
    }, typeStyles]
  })));
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});
export default withTheme(FieldSearchBarFull);
//# sourceMappingURL=FieldSearchBarFull.js.map