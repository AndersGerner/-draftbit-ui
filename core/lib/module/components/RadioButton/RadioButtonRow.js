function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { StyleSheet, View, Platform } from "react-native";
import RadioButton from "./RadioButton";
import Text from "../Text";
import { useRadioButtonGroupContext } from "./context";
import { Direction as GroupDirection } from "./context";
import Touchable from "../Touchable";
import { extractStyles } from "../../utilities";
export let Direction;

(function (Direction) {
  Direction["Row"] = "row";
  Direction["RowReverse"] = "row-reverse";
})(Direction || (Direction = {}));

const getRadioButtonAlignment = (parentDirection, direction) => {
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

const RadioButtonRow = _ref => {
  let {
    Icon,
    label,
    value,
    color,
    unselectedColor,
    onPress = () => {},
    labelContainerStyle,
    labelStyle,
    radioButtonStyle,
    direction = Direction.Row,
    selected,
    disabled,
    style,
    ...rest
  } = _ref;
  const {
    value: contextValue,
    onValueChange,
    direction: parentDirection
  } = useRadioButtonGroupContext();

  const handlePress = () => {
    onPress(value);
    onValueChange && onValueChange(value);
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
      alignItems: getRadioButtonAlignment(parentDirection, direction)
    }
  }, /*#__PURE__*/React.createElement(RadioButton, {
    Icon: Icon,
    selected: selected || contextValue != null && contextValue === value,
    color: color,
    unselectedColor: unselectedColor,
    onPress: handlePress,
    style: radioButtonStyle
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
export default RadioButtonRow;
//# sourceMappingURL=RadioButtonRow.js.map