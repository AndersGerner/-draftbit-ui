"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _Config = _interopRequireDefault(require("./Config"));

var _Touchable = _interopRequireDefault(require("./Touchable"));

var _Elevation = _interopRequireDefault(require("./Elevation"));

var _theming = require("../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Button = _ref => {
  let {
    Icon,
    icon,
    disabled = false,
    type = "solid",
    loading = false,
    labelColor,
    color: colorOverride,
    children,
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

  if (type === "solid") {
    backgroundColor = buttonColor;

    if (disabled) {
      textColor = (0, _color.default)(colors.surface).alpha(disabledOpacity).rgb().string();
    } else {
      textColor = labelColor || colors.surface;
    }
  } else {
    backgroundColor = "transparent";

    if (disabled) {
      textColor = (0, _color.default)(buttonColor).alpha(disabledOpacity).rgb().string();
    } else {
      textColor = labelColor || buttonColor;
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
    borderRadius: roundness
  };
  const textStyle = {
    textAlign: "center",
    color: textColor,
    marginVertical: 16,
    marginHorizontal: 16
  };
  const iconStyle = [styles.icon, {
    marginLeft: 16,
    marginRight: -8,
    width: _Config.default.buttonIconSize
  }];

  const {
    margin,
    marginEnd,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginHorizontal,
    marginVertical,
    ...innerStyles
  } = _reactNative.StyleSheet.flatten(style || {});

  const margins = {
    margin,
    marginEnd,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginHorizontal,
    marginVertical
  };
  return /*#__PURE__*/React.createElement(_Elevation.default, {
    style: {
      elevation,
      alignSelf: "stretch",
      ...margins
    }
  }, /*#__PURE__*/React.createElement(_Touchable.default, _extends({}, rest, {
    onPress: onPress,
    accessibilityState: {
      disabled
    },
    accessibilityRole: "button",
    disabled: disabled || loading,
    style: [styles.button, buttonStyle, innerStyles]
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
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
  }) : null, /*#__PURE__*/React.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [textStyle, typography.button]
  }, children))));
};

const styles = _reactNative.StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: "solid"
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: _Config.default.buttonIconSize
  }
});

var _default = (0, _theming.withTheme)(Button);

exports.default = _default;
//# sourceMappingURL=DeprecatedButton.js.map