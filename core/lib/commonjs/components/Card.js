"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TopRightCircleIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Image = _interopRequireDefault(require("./Image"));

var _Surface = _interopRequireDefault(require("./Surface"));

var _Typography = require("./Typography");

var _theming = require("../theming");

var _Config = _interopRequireDefault(require("./Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ICON_SIZE = _Config.default.cardIconSize;
const ICON_CONTAINER_SIZE = _Config.default.cardIconSize * 2;
const ICON_CONTAINER_PADDING = _Config.default.cardIconSize / 2 - 1;
const ICON_ELEVATION = _Config.default.cardIconElevation;
const TopRightCircleIcon = (0, _theming.withTheme)(_ref => {
  let {
    Icon,
    icon,
    theme,
    onPress
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Surface.default, {
    style: {
      justifyContent: "center",
      alignItems: "center",
      elevation: ICON_ELEVATION,
      position: "absolute",
      top: 12,
      right: 12,
      width: ICON_CONTAINER_SIZE,
      height: ICON_CONTAINER_SIZE,
      padding: ICON_CONTAINER_PADDING,
      borderRadius: ICON_CONTAINER_SIZE,
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
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
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    name: icon,
    size: ICON_SIZE,
    color: theme.colors.surface
  })));
});
exports.TopRightCircleIcon = TopRightCircleIcon;

const Card = _ref3 => {
  let {
    Icon,
    image = _Config.default.cardImageUrl,
    title,
    subtitle,
    description,
    textCentered,
    icon,
    aspectRatio = 1.5,
    elevation = 2,
    style,
    onPress,
    onPressIcon,
    titleStyle,
    subtitleStyle,
    descriptionStyle,
    theme,
    children
  } = _ref3;

  const {
    backgroundColor: bgColor,
    padding,
    ...styles
  } = _reactNative.StyleSheet.flatten(style || {});

  const backgroundColor = bgColor ? bgColor : theme.colors.surface;
  const innerPadding = padding ? padding : 12;
  return /*#__PURE__*/_react.default.createElement(_Surface.default, {
    style: [{
      elevation,
      backgroundColor
    }, styles]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    disabled: !onPress,
    onPress: onPress,
    style: _ref4 => {
      let {
        pressed
      } = _ref4;
      return [{
        opacity: pressed ? 0.8 : 1
      }];
    }
  }, /*#__PURE__*/_react.default.createElement(_Image.default, {
    style: {
      aspectRatio
    },
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      padding: innerPadding
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: textCentered ? "center" : "flex-start"
    }
  }, title || title && title !== "" ? /*#__PURE__*/_react.default.createElement(_Typography.Title, {
    text: title,
    style: titleStyle
  }) : null, subtitle || subtitle && subtitle !== "" ? /*#__PURE__*/_react.default.createElement(_Typography.Subtitle, {
    text: subtitle,
    style: subtitleStyle
  }) : null, description || description && description !== "" ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_Typography.Caption, {
    text: description,
    style: descriptionStyle
  })) : null, children)), icon ? /*#__PURE__*/_react.default.createElement(TopRightCircleIcon, {
    Icon: Icon,
    icon: icon,
    onPress: onPressIcon
  }) : null));
};

var _default = (0, _theming.withTheme)(Card);

exports.default = _default;
//# sourceMappingURL=Card.js.map