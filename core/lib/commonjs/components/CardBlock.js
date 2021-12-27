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

const CardBlock = _ref => {
  let {
    image = _Config.default.cardImageUrl,
    title,
    leftDescription,
    rightDescription,
    titleCentered,
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
  let titleJustification;
  let titleStyle;

  if (titleCentered && !leftDescription && !rightDescription) {
    titleJustification = "center";
  } else {
    titleJustification = "space-between";
  }

  if (numColumns === 1) {
    titleStyle = typography.button;
  } else if (numColumns === 2) {
    titleStyle = typography.headline6;
  } else {
    titleStyle = typography.headline5;
  }

  const rightDescriptionStyles = [typography.subtitle2, {
    color: colors.light
  }];
  return /*#__PURE__*/_react.default.createElement(_DeprecatedCardWrapper.default, _extends({
    style: style,
    onPress: onPress,
    numColumns: numColumns
  }, rest), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: colors.background
    }
  }, /*#__PURE__*/_react.default.createElement(_Elevation.default, {
    style: {
      elevation,
      borderRadius: roundness
    }
  }, /*#__PURE__*/_react.default.createElement(_Image.default, {
    style: {
      borderRadius: roundness,
      aspectRatio
    },
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  })), title ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: titleJustification,
      marginTop: numColumns === 3 ? 16 : 12
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [titleStyle, {
      color: colors.strong
    }]
  }, title), !leftDescription && rightDescription ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: rightDescriptionStyles
  }, rightDescription) : null) : null, leftDescription ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      justifyContent: "space-between",
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
    style: rightDescriptionStyles
  }, rightDescription) : null) : null));
};

var _default = (0, _theming.withTheme)(CardBlock);

exports.default = _default;
//# sourceMappingURL=CardBlock.js.map