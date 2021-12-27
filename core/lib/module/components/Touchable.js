function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Pressable } from "react-native";
export default function Touchable(_ref) {
  let {
    children,
    disabled,
    onPress,
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Pressable, _extends({
    onPress: onPress,
    disabled: disabled,
    hitSlop: 8,
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [{
        opacity: pressed || disabled ? 0.75 : 1
      }, style];
    }
  }, props), children);
}
//# sourceMappingURL=Touchable.js.map