function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Picker as NativePicker } from "@react-native-picker/picker";
import omit from "lodash.omit";
import { withTheme } from "../../theming";
import { extractStyles } from "../../utilities";
import TextField from "../TextField";
import Touchable from "../Touchable";

const Picker = _ref => {
  var _options$find$label, _options$find;

  let {
    style,
    options,
    placeholder,
    selectedValue,
    disabled = false,
    onValueChange: onValueChangeOverride = () => {},
    ...props
  } = _ref;
  const {
    viewStyles: {
      borderRadius,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderTopWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderRightWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderBottomWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderLeftWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderColor,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      backgroundColor,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      padding,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingTop,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingRight,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingBottom,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingLeft,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      ...viewStyles
    }
  } = extractStyles(style);
  const textField = React.useRef(undefined);

  const onValueChange = (itemValue, itemIndex) => {
    toggleFocus();
    onValueChangeOverride(itemValue, itemIndex);
  };

  const toggleFocus = () => {
    if (!disabled) {
      // @ts-ignore
      textField.current.toggleFocus(); // cannot determine if method exists due to component being wrapped in a withTheme()
    }
  };

  const stylesWithoutMargin = style && omit(StyleSheet.flatten(style), ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft"]);
  const selectedLabel = selectedValue && ((_options$find$label = (_options$find = options.find(o => o.value === selectedValue)) === null || _options$find === void 0 ? void 0 : _options$find.label) !== null && _options$find$label !== void 0 ? _options$find$label : selectedValue);
  return /*#__PURE__*/React.createElement(Touchable, {
    disabled: disabled,
    onPress: toggleFocus,
    style: [styles.container, viewStyles]
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(NativePicker, {
    enabled: !disabled,
    selectedValue: selectedValue,
    onValueChange: onValueChange,
    style: {
      flex: 1,
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%"
    }
  }, options.map(o => /*#__PURE__*/React.createElement(NativePicker.Item, {
    label: o.label,
    value: o.value,
    key: o.value
  }))), /*#__PURE__*/React.createElement(View, {
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
    value: selectedLabel,
    placeholder: placeholder // @ts-ignore
    ,
    ref: textField // cannot determine if ref is of correct type due to component being wrapped in a withTheme()
    ,
    disabled: disabled // @ts-expect-error
    ,
    style: stylesWithoutMargin
  })))));
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  }
});
export default withTheme(Picker);
//# sourceMappingURL=PickerComponent.web.js.map