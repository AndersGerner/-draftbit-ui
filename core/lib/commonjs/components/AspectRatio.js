"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AspectRatio = props => {
  const [layout, setLayout] = _react.default.useState(null);

  const {
    aspectRatio = 1,
    ...inputStyle
  } = _reactNative.StyleSheet.flatten(props.style) || {};
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

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, props, {
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

var _default = AspectRatio;
exports.default = _default;
//# sourceMappingURL=AspectRatio.js.map