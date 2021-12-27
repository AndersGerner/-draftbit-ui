function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View } from "react-native";
import { checkboxGroupContext, Direction } from "./context";
const {
  Provider
} = checkboxGroupContext;

const CheckboxGroup = _ref => {
  let {
    direction = Direction.Vertical,
    values,
    onValueChange = () => {},
    style,
    children,
    ...rest
  } = _ref;
  const _containerStyle = [{
    flexDirection: direction === Direction.Horizontal ? "row" : "column",
    overflow: "hidden"
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
      values,
      onValueChange,
      direction
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: _containerStyle
  }, children)));
};

export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map