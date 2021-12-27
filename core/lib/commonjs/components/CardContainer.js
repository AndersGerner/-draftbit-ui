"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _Image = _interopRequireDefault(require("./Image"));

var _DeprecatedCardWrapper = _interopRequireDefault(require("./DeprecatedCardWrapper"));

var _Elevation = _interopRequireDefault(require("./Elevation"));

var _theming = require("../theming");

var _Config = _interopRequireDefault(require("./Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ICON_CONTAINER_SIZE = _Config.default.cardIconSize * 2;
const ICON_CONTAINER_PADDING = _Config.default.cardIconSize / 2 - 1;

const CardContainer = _ref => {
  let {
    Icon,
    icon,
    image = _Config.default.cardImageUrl,
    title,
    leftDescription,
    rightDescription,
    textCentered,
    aspectRatio = 1.5,
    elevation = 2,
    numColumns = 3,
    theme: {
      colors,
      roundness,
      typography
    },
    style,
    onPress,
    ...rest
  } = _ref;
  let textJustification;
  let titleStyle;

  if (textCentered && !rightDescription) {
    textJustification = "center";
  } else {
    textJustification = "space-between";
  }

  switch (numColumns) {
    case 2:
      titleStyle = typography.headline6;
      break;

    case 3:
      titleStyle = typography.headline5;
      break;
  }

  return /*#__PURE__*/_react.default.createElement(_DeprecatedCardWrapper.default, _extends({
    style: style,
    onPress: onPress,
    numColumns: numColumns
  }, rest), /*#__PURE__*/_react.default.createElement(_Elevation.default, {
    style: {
      elevation,
      borderRadius: roundness
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      borderRadius: roundness,
      overflow: "hidden",
      backgroundColor: colors.surface
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
      padding: numColumns === 1 ? 8 : 16
    }
  }, title ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: textJustification
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [titleStyle, {
      color: colors.strong
    }]
  }, title)) : null, leftDescription ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      justifyContent: textJustification,
      alignItems: "center",
      marginTop: numColumns === 3 ? 4 : 4 / 2
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [typography.body2, {
      color: colors.medium
    }]
  }, leftDescription), rightDescription ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [typography.subtitle2, {
      color: colors.light
    }]
  }, rightDescription) : null) : null), icon ? /*#__PURE__*/_react.default.createElement(_Elevation.default, {
    style: {
      elevation: _Config.default.cardIconElevation,
      position: "absolute",
      top: 12,
      right: 12,
      width: ICON_CONTAINER_SIZE,
      height: ICON_CONTAINER_SIZE,
      padding: ICON_CONTAINER_PADDING,
      borderRadius: ICON_CONTAINER_SIZE,
      backgroundColor: (0, _color.default)(colors.strong).alpha(_Config.default.cardIconBackgroundOpacity).rgb().string()
    }
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    name: icon,
    size: _Config.default.cardIconSize,
    color: colors.surface
  })) : null)));
};

var _default = (0, _theming.withTheme)(CardContainer);

exports.default = _default;
//# sourceMappingURL=CardContainer.js.map