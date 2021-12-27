"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Config = _interopRequireDefault(require("./Config"));

var _AspectRatio = _interopRequireDefault(require("./AspectRatio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const generateDimensions = _ref => {
  let {
    aspectRatio,
    width,
    height
  } = _ref;

  if (aspectRatio && !width && !height) {
    return {
      aspectRatio,
      width: "100%"
    };
  }

  if (aspectRatio && height) {
    return {
      aspectRatio,
      height,
      width: aspectRatio * height
    };
  }

  if (aspectRatio && width) {
    return {
      aspectRatio,
      width,
      height: width / aspectRatio
    };
  }

  return {
    width,
    height
  };
};

const Image = _ref2 => {
  let {
    source,
    resizeMode = "cover",
    style,
    ...props
  } = _ref2;
  let imageSource = source === null || source === undefined ? _Config.default.placeholderImageURL : source;

  const styles = _reactNative.StyleSheet.flatten(style || {});

  const {
    aspectRatio,
    width,
    height
  } = generateDimensions(styles);

  if (aspectRatio) {
    return /*#__PURE__*/_react.default.createElement(_AspectRatio.default, {
      style: [style, {
        width,
        height,
        aspectRatio
      }]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({}, props, {
      source: imageSource,
      resizeMode: resizeMode,
      style: [style, {
        height: "100%",
        width: "100%"
      }]
    })));
  }

  return /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({}, props, {
    source: source,
    resizeMode: resizeMode,
    style: style
  }));
};

var _default = Image;
exports.default = _default;
//# sourceMappingURL=Image.js.map