function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { View, StyleSheet } from "react-native";

const AspectRatio = props => {
  const [layout, setLayout] = React.useState(null);
  const {
    aspectRatio = 1,
    ...inputStyle
  } = StyleSheet.flatten(props.style) || {};
  const style = [inputStyle, {
    aspectRatio
  }];

  if (layout) {
    const {
      width = 0,
      height = 0
    } = layout;

    if (width === 0) {
      style.push({
        width: height * (1 / aspectRatio),
        height
      });
    } else {
      style.push({
        width,
        height: width * (1 / aspectRatio)
      });
    }
  }

  return /*#__PURE__*/React.createElement(View, _extends({}, props, {
    style: style,
    onLayout: _ref => {
      let {
        nativeEvent: {
          layout: l
        }
      } = _ref;
      return setLayout(l);
    }
  }), props.children);
};

export default AspectRatio;
//# sourceMappingURL=AspectRatio.js.map