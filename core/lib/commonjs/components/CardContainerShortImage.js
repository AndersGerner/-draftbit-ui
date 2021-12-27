"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Image = _interopRequireDefault(require("./Image"));

var _DeprecatedCardWrapper = _interopRequireDefault(require("./DeprecatedCardWrapper"));

var _Elevation = _interopRequireDefault(require("./Elevation"));

var _theming = require("../theming");

var _Config = _interopRequireDefault(require("./Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CardContainerShortImage = _ref => {
  let {
    image = _Config.default.squareImageUrl,
    title,
    subtitle,
    mode = "left",
    aspectRatio = 1,
    elevation = 2,
    theme: {
      colors,
      roundness,
      typography
    },
    style,
    onPress,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_DeprecatedCardWrapper.default, _extends({
    style: style,
    onPress: onPress
  }, rest), /*#__PURE__*/_react.default.createElement(_Elevation.default, {
    style: {
      elevation,
      borderRadius: roundness
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      overflow: "hidden",
      flexDirection: "row",
      justifyContent: mode === "right" ? "space-between" : "flex-start",
      borderRadius: roundness
    }
  }, mode === "left" && /*#__PURE__*/_react.default.createElement(_Image.default, {
    style: {
      aspectRatio
    },
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      padding: 16,
      backgroundColor: colors.surface,
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [typography.headline5, {
      color: colors.strong
    }]
  }, title), subtitle ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [typography.body2, {
      color: colors.medium,
      marginTop: 4
    }]
  }, subtitle) : null), mode === "right" && /*#__PURE__*/_react.default.createElement(_Image.default, {
    style: {
      aspectRatio
    },
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  }))));
};

var _default = (0, _theming.withTheme)(CardContainerShortImage);

exports.default = _default;
//# sourceMappingURL=CardContainerShortImage.js.map