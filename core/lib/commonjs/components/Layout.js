"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Center = Center;
exports.Circle = Circle;
exports.Row = Row;
exports.Spacer = Spacer;
exports.Square = Square;
exports.Stack = Stack;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Center(_ref) {
  let {
    width = 240,
    height = 200,
    children,
    bgColor,
    style,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [{
      justifyContent: "center",
      alignItems: "center",
      width,
      height,
      backgroundColor: bgColor
    }, style]
  }, rest), children);
}

function Circle(_ref2) {
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

function Square(_ref3) {
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

function Row(_ref4) {
  let {
    justifyContent,
    alignItems,
    children,
    style,
    ...rest
  } = _ref4;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [style, // style goes first b/c we can't override these
    {
      alignItems,
      flexDirection: "row",
      justifyContent: justifyContent
    }]
  }, rest), children);
}

function Spacer(_ref5) {
  let {
    top = 8,
    right = 8,
    bottom = 8,
    left = 8,
    children,
    style,
    ...rest
  } = _ref5;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [style, {
      paddingRight: right,
      paddingTop: top,
      paddingLeft: left,
      paddingBottom: bottom
    }]
  }, rest), children);
}

function Stack(_ref6) {
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
    React.createElement(_reactNative.View, _extends({
      style: [style, {
        justifyContent,
        alignItems
      }]
    }, rest), children)
  );
}
//# sourceMappingURL=Layout.js.map