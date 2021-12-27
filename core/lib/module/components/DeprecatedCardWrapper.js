function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { withTheme } from "../theming";
import Touchable from "./Touchable";

const getWidth = numColumns => {
  switch (numColumns) {
    case 1:
      return "33%";

    case 2:
      return "50%";

    default:
      return "100%";
  }
};

const Card = _ref => {
  let {
    numColumns = 3,
    children,
    onPress,
    style,
    ...rest
  } = _ref;
  const width = getWidth(numColumns);
  return /*#__PURE__*/React.createElement(Touchable, _extends({
    disabled: !onPress,
    onPress: onPress,
    style: [style, {
      width
    }]
  }, rest), children);
};

export default withTheme(Card);
//# sourceMappingURL=DeprecatedCardWrapper.js.map