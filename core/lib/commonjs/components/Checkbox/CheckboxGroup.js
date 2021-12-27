"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _context = require("./context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  Provider
} = _context.checkboxGroupContext;

const CheckboxGroup = _ref => {
  let {
    direction = _context.Direction.Vertical,
    values,
    onValueChange = () => {},
    style,
    children,
    ...rest
  } = _ref;
  const _containerStyle = [{
    flexDirection: direction === _context.Direction.Horizontal ? "row" : "column",
    overflow: "hidden"
  }];

  if (direction !== _context.Direction.Vertical) {
    _containerStyle.push({
      alignItems: "center"
    });
  }

  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [{
      minHeight: 40
    }, style]
  }, rest), /*#__PURE__*/React.createElement(Provider, {
    value: {
      values,
      onValueChange,
      direction
    }
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: _containerStyle
  }, children)));
};

var _default = CheckboxGroup;
exports.default = _default;
//# sourceMappingURL=CheckboxGroup.js.map