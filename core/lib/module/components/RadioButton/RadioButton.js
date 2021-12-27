function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import Config from "../Config";
import IconButton from "../IconButton";
import { useRadioButtonGroupContext } from "./context";

const RadioButton = _ref => {
  let {
    Icon,
    disabled = false,
    color,
    value,
    selected,
    unselectedColor,
    onPress = () => {},
    size = Config.radioButtonSize,
    selectedIcon = "MaterialIcons/radio-button-checked",
    unselectedIcon = "MaterialIcons/radio-button-unchecked",
    style,
    ...rest
  } = _ref;
  const {
    value: contextValue,
    onValueChange
  } = useRadioButtonGroupContext();

  const handlePress = () => {
    onPress && onPress();

    if (onValueChange && value) {
      onValueChange(value);
    }
  };

  const isSelected = selected || contextValue != null && contextValue === value;
  return /*#__PURE__*/React.createElement(IconButton, _extends({
    Icon: Icon,
    icon: isSelected ? selectedIcon : unselectedIcon,
    color: isSelected ? color : unselectedColor,
    disabled: disabled,
    onPress: handlePress,
    size: size,
    style: style
  }, rest));
};

export default RadioButton;
//# sourceMappingURL=RadioButton.js.map