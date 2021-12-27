function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { StyleSheet, View, Platform } from "react-native";
import Checkbox from "./Checkbox";
import Text from "../Text";
import { useCheckboxGroupContext } from "./context";
import { Direction as GroupDirection } from "./context";
import Touchable from "../Touchable";
import { extractStyles } from "../../utilities";
export let Direction;

(function (Direction) {
  Direction["Row"] = "row";
  Direction["RowReverse"] = "row-reverse";
})(Direction || (Direction = {}));

const getCheckboxAlignment = (parentDirection, direction) => {
  if (parentDirection === GroupDirection.Horizontal) {
    return direction === Direction.Row ? "flex-start" : "flex-end";
  } else if (direction === Direction.RowReverse) {
    return "flex-start";
  } else {
    return "flex-end";
  }
};

const renderLabel = (value, labelStyle, textStyle) => {
  if (typeof value === "string") {
    return /*#__PURE__*/React.createElement(Text, {
      style: [labelStyle, textStyle]
    }, value);
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, value);
  }
};

const CheckboxRow = _ref => {
  let {
    Icon,
    label = "Label",
    status,
    value,
    onPress = () => {},
    labelContainerStyle,
    labelStyle,
    checkboxStyle,
    direction = Direction.Row,
    disabled,
    style,
    color,
    uncheckedColor,
    ...rest
  } = _ref;
  const {
    values: selectedValues,
    onValueChange,
    direction: parentDirection
  } = useCheckboxGroupContext();
  const values = Array.isArray(selectedValues) ? selectedValues : [];
  const isChecked = status || values.includes(value);

  const handlePress = () => {
    if (!disabled) {
      onPress(!isChecked);
      onValueChange && onValueChange(value, !isChecked);
    }
  };

  const {
    textStyles,
    viewStyles
  } = extractStyles(style);
  return /*#__PURE__*/React.createElement(Touchable, _extends({
    onPress: handlePress,
    style: [styles.mainParent, {
      flexDirection: direction
    }, viewStyles],
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement(View, {
    style: [styles.label, {
      alignItems: direction === Direction.Row ? "flex-start" : "flex-end"
    }, labelContainerStyle]
  }, renderLabel(label, labelStyle, textStyles)), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      alignItems: getCheckboxAlignment(parentDirection, direction)
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    Icon: Icon,
    status: isChecked,
    onPress: handlePress,
    style: checkboxStyle,
    disabled: disabled,
    color: color,
    uncheckedColor: uncheckedColor
  })));
};

const styles = StyleSheet.create({
  mainParent: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingStart: 20,
    minHeight: 50,
    paddingEnd: 20,
    flex: 1,
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none"
      }
    })
  },
  label: {
    flex: 3
  }
});
export default CheckboxRow;
//# sourceMappingURL=CheckboxRow.js.map