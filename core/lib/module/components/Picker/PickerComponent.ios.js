function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import omit from "lodash.omit";
import { Picker as NativePicker } from "@react-native-picker/picker";
import { withTheme } from "../../theming";
import Portal from "../Portal/Portal";
import Button from "../DeprecatedButton";
import TextField from "../TextField";
import Touchable from "../Touchable";
import { extractStyles } from "../../utilities";

const Picker = _ref => {
  var _options$find$label, _options$find;

  let {
    Icon,
    style,
    options,
    placeholder,
    selectedValue,
    disabled = false,
    onValueChange = () => {},
    theme: {
      colors
    },
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
  const [pickerVisible, setIsPickerVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsPickerVisible(!pickerVisible); // @ts-ignore

    textField.current.toggleFocus(); // cannot determine if method exists due to component being wrapped in a withTheme()
  };

  const stylesWithoutMargin = style && omit(StyleSheet.flatten(style), ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft"]);
  const selectedLabel = selectedValue && ((_options$find$label = (_options$find = options.find(o => o.value === selectedValue)) === null || _options$find === void 0 ? void 0 : _options$find.label) !== null && _options$find$label !== void 0 ? _options$find$label : selectedValue);
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, viewStyles]
  }, /*#__PURE__*/React.createElement(Touchable, {
    disabled: disabled,
    onPress: toggleVisibility
  }, /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
    value: String(selectedLabel),
    placeholder: placeholder // @ts-ignore
    ,
    ref: textField // cannot determine if ref is of correct type due to component being wrapped in a withTheme()
    ,
    disabled: disabled,
    pointerEvents: "none" // @ts-expect-error
    ,
    style: stylesWithoutMargin,
    Icon: Icon
  }))), pickerVisible && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(View, {
    style: [styles.picker, {
      backgroundColor: colors.divider
    }]
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: styles.pickerContainer
  }, /*#__PURE__*/React.createElement(Button, {
    Icon: Icon,
    type: "text",
    onPress: toggleVisibility,
    style: styles.closeButton
  }, "Close"), /*#__PURE__*/React.createElement(NativePicker, {
    style: {
      backgroundColor: "white"
    },
    selectedValue: selectedValue,
    onValueChange: onValueChange
  }, options.map(o => /*#__PURE__*/React.createElement(NativePicker.Item, {
    label: o.label,
    value: o.value,
    key: o.value
  })))))));
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  picker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  pickerContainer: {
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%"
  },
  closeButton: {
    alignSelf: "flex-end"
  }
});
export default withTheme(Picker);
//# sourceMappingURL=PickerComponent.ios.js.map