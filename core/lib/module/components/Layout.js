function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View } from "react-native"; // @ts-ignore

export function Center(_ref) {
  let {
    width = 240,
    height = 200,
    children,
    bgColor,
    style,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [{
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
      backgroundColor: bgColor
    }, style]
  }, rest), children);
}
export function Circle(_ref2) {
  let {
    size = 50,
    bgColor,
    children,
    style,
    ...rest
  } = _ref2;
  const borderRadius = 1000;
  return /*#__PURE__*/React.createElement(Center, _extends({
    width: size,
    height: size,
    bgColor: bgColor,
    style: [style, {
      backgroundColor: bgColor,
      borderRadius,
      overflow: "hidden"
    }]
  }, rest), children);
}
export function Square(_ref3) {
  let {
    size = 50,
    bgColor,
    children,
    style,
    ...rest
  } = _ref3;
  return /*#__PURE__*/React.createElement(Center, _extends({
    style: style,
    width: size,
    height: size,
    bgColor: bgColor
  }, rest), children);
}
export function Row(_ref4) {
  let {
    justifyContent,
    alignItems,
    children,
    style,
    ...rest
  } = _ref4;
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [style, // style goes first b/c we can't override these
    {
      alignItems,
      flexDirection: "row",
      justifyContent: justifyContent
    }]
  }, rest), children);
}
export function Spacer(_ref5) {
  let {
    top = 8,
    right = 8,
    bottom = 8,
    left = 8,
    children,
    style,
    ...rest
  } = _ref5;
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [style, {
      paddingRight: right,
      paddingTop: top,
      paddingLeft: left,
      paddingBottom: bottom
    }]
  }, rest), children);
}
export function Stack(_ref6) {
  let {
    children,
    justifyContent = "flex-start",
    alignItems = "flex-start",
    style,
    ...rest
  } = _ref6;
  return (
    /*#__PURE__*/
    // style must go first since we don't want justifyContent, alignItems overridden
    React.createElement(View, _extends({
      style: [style, {
        justifyContent,
        alignItems
      }]
    }, rest), children)
  );
}
//# sourceMappingURL=Layout.js.map