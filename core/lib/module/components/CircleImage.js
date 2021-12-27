function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { Image } from "react-native";
import Config from "./Config";

const CircleImage = _ref => {
  let {
    source = Config.placeholderImageURL,
    size = 60,
    style,
    ...props
  } = _ref;
  const borderRadius = size / 2;
  return /*#__PURE__*/React.createElement(Image, _extends({
    style: [{
      width: size,
      height: size,
      borderRadius
    }, style],
    source: typeof source === "string" ? {
      uri: source
    } : source,
    resizeMode: "cover"
  }, props));
};

export default CircleImage;
//# sourceMappingURL=CircleImage.js.map