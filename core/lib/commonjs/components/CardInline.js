"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Typography = require("./Typography");

var _Image = _interopRequireDefault(require("./Image"));

var _Surface = _interopRequireDefault(require("./Surface"));

var _Config = _interopRequireDefault(require("./Config"));

var _theming = require("../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-nocheck
const CardInline = _ref => {
  let {
    image = _Config.default.cardImageUrl,
    title,
    subtitle,
    aspectRatio = 1.5,
    elevation = 2,
    style,
    titleStyle,
    subtitleStyle,
    onPress
  } = _ref;

  const {
    alignItems,
    justifyContent,
    width,
    height
  } = _reactNative.StyleSheet.flatten(style || {});

  const imageStyles = width && height ? {
    width,
    height
  } : {
    aspectRatio
  };
  return /*#__PURE__*/_react.default.createElement(_Surface.default, {
    style: [{
      elevation
    }, style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    disabled: !onPress,
    onPress: onPress,
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [{
        opacity: pressed ? 0.8 : 1
      }];
    }
  }, /*#__PURE__*/_react.default.createElement(_Image.default, {
    style: imageStyles,
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.overlay, {
      justifyContent,
      alignItems
    }]
  }, title ? /*#__PURE__*/_react.default.createElement(_Typography.Title, {
    style: [{
      color: "white"
    }, titleStyle],
    text: title
  }) : null, subtitle ? /*#__PURE__*/_react.default.createElement(_Typography.Subtitle, {
    style: [{
      color: "rgba(255, 255, 255, 0.7)"
    }, subtitleStyle],
    text: subtitle
  }) : null)));
};

const styles = _reactNative.StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  }
});

var _default = (0, _theming.withTheme)(CardInline);

exports.default = _default;
//# sourceMappingURL=CardInline.js.map