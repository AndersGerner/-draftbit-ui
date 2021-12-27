"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

var _Elevation = _interopRequireDefault(require("./Elevation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Container = _ref => {
  let {
    useThemeGutterPadding,
    borderColor,
    borderWidth,
    backgroundColor,
    backgroundImage,
    backgroundImageResizeMode,
    elevation,
    style,
    children,
    theme,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    ...rest
  } = _ref;
  const {
    flex,
    flexGrow,
    flexWrap,
    flexBasis,
    flexShrink,
    flexDirection,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,
    ...styleProp
  } = _reactNative.StyleSheet.flatten(style) || {};
  const containerStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    width: "100%",
    ...styleProp
  };
  const innerStyle = {
    flex,
    flexGrow,
    flexWrap,
    flexBasis,
    flexShrink,
    flexDirection,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal: paddingHorizontal || useThemeGutterPadding ? 16 : 0
  };
  const Wrap = elevation ? _Elevation.default : _reactNative.View;

  if (elevation) {
    containerStyle.elevation = elevation;
  }

  return /*#__PURE__*/React.createElement(Wrap, _extends({
    style: [containerStyle, style]
  }, rest), backgroundImage ? /*#__PURE__*/React.createElement(_reactNative.ImageBackground, {
    source: typeof backgroundImage === "string" ? {
      uri: backgroundImage
    } : backgroundImage,
    resizeMode: backgroundImageResizeMode,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: innerStyle
  }, children)) : /*#__PURE__*/React.createElement(_reactNative.View, {
    style: innerStyle
  }, children));
};

var _default = (0, _theming.withTheme)(Container);

exports.default = _default;
//# sourceMappingURL=Container.js.map