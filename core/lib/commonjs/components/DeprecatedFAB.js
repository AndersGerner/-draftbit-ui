"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _Config = _interopRequireDefault(require("./Config"));

var _Text = _interopRequireDefault(require("./Text"));

var _Touchable = _interopRequireDefault(require("./Touchable"));

var _Elevation = _interopRequireDefault(require("./Elevation"));

var _theming = require("../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FAB = _ref => {
  let {
    Icon,
    icon,
    disabled = false,
    type = "solid",
    loading = false,
    color: colorOverride,
    label,
    onPress,
    elevation = 0,
    style,
    theme: {
      colors,
      disabledOpacity,
      roundness,
      typography
    },
    ...rest
  } = _ref;
  let backgroundColor, borderColor, textColor, borderWidth;
  const buttonColor = colorOverride || colors.primary;

  if (type === "standard" || type === "extended" || type === "fixed") {
    backgroundColor = buttonColor;

    if (disabled) {
      textColor = (0, _color.default)(colors.surface).alpha(disabledOpacity).rgb().string();
    } else {
      textColor = colors.surface;
    }
  } else {
    backgroundColor = "transparent";

    if (disabled) {
      textColor = (0, _color.default)(buttonColor).alpha(disabledOpacity).rgb().string();
    } else {
      textColor = buttonColor;
    }
  }

  if (type === "outline") {
    if (disabled) {
      borderColor = (0, _color.default)(buttonColor).alpha(disabledOpacity).rgb().string();
    } else {
      borderColor = buttonColor;
    }

    borderWidth = _reactNative.StyleSheet.hairlineWidth;
  } else {
    borderColor = "transparent";
    borderWidth = 0;
  }

  const buttonStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius: roundness,
    alignItems: "center",
    justifyContent: "center"
  };
  const buttonStyles = [styles.button, buttonStyle];
  const contentStyle = [styles.content];
  const textStyle = {
    textAlign: "center",
    color: textColor
  };
  const iconStyle = [styles.icon, {
    width: _Config.default.buttonIconSize
  }];

  if (type === "standard" || type === "outline") {
    buttonStyle.width = _Config.default.FABSize;
    buttonStyle.height = _Config.default.FABSize;
    buttonStyle.borderRadius = _Config.default.FABBorderRadius;
    contentStyle.push({
      width: _Config.default.FABSize,
      height: _Config.default.FABSize
    });
  }

  if (type === "extended" || type === "fixed") {
    iconStyle.push({
      marginLeft: 16,
      marginRight: -8
    });
    textStyle.margin = 16;
  }

  if (type === "fixed") {
    buttonStyles.push({
      height: _Config.default.FABFixedHeight,
      alignSelf: "stretch"
    });
  }

  return /*#__PURE__*/React.createElement(_Elevation.default, {
    style: [{
      elevation
    }, style]
  }, /*#__PURE__*/React.createElement(_Touchable.default, { ...rest,
    onPress: onPress,
    accessibilityState: {
      disabled
    },
    accessibilityRole: "button",
    disabled: disabled || loading,
    style: buttonStyles
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.content
  }, icon && loading !== true ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: _Config.default.buttonIconSize,
    color: textColor
  })) : null, loading ? /*#__PURE__*/React.createElement(_reactNative.ActivityIndicator, {
    size: "small",
    color: textColor,
    style: iconStyle
  }) : null, label ? /*#__PURE__*/React.createElement(_Text.default, {
    numberOfLines: 1,
    style: [textStyle, typography.button]
  }, label) : null)));
};

const styles = _reactNative.StyleSheet.create({
  button: {
    borderStyle: "solid"
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: _Config.default.buttonIconSize
  },
  fixed: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    borderRadius: 0
  }
});

var _default = (0, _theming.withTheme)(FAB);

exports.default = _default;
//# sourceMappingURL=DeprecatedFAB.js.map },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: _Config.default.buttonIconSize
  },
  fixed: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    borderRadius: 0
  }
});

var _default = (0, _theming.withTheme)(FAB);

exports.default = _default;
//# sourceMappingURL=DeprecatedFAB.js.map