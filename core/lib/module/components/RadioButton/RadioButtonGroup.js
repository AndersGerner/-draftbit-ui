function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View } from "react-native";
import { radioButtonGroupContext, Direction } from "./context";
const {
  Provider
} = radioButtonGroupContext;

const RadioButtonGroup = _ref => {
  let {
    direction = Direction.Vertical,
    value,
    onValueChange = () => {},
    defaultValue,
    style,
    children,
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

  const handleValueChange = newValue => {
    setInternalValue(newValue);
    onValueChange(newValue);
  };

  const _containerStyle = [{
    flexDirection: direction === Direction.Horizontal ? "row" : "column"
  }];

  if (direction !== Direction.Vertical) {
    _containerStyle.push({
      alignItems: "center"
    });
  }

  return /*#__PURE__*/React.createElement(View, _extends({
    style: [{
      minHeight: 40
    }, style]
  }, rest), /*#__PURE__*/React.createElement(Provider, {
    value: {
      value: internalValue || "",
      onValueChange: handleValueChange,
      direction
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: _containerStyle
  }, children)));
};

export default RadioButtonGroup;
//# sourceMappingURL=RadioButtonGroup.js.map