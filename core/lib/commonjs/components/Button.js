"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSolid = exports.ButtonOutline = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CONSTANTS = {
  baseHeight: 42,
  borderRadius: 4,
  padding: 8,
  icon: 24
};

function Base(_ref) {
  let {
    Icon,
    icon,
    title,
    onPress,
    loading,
    disabled,
    style,
    ...props
  } = _ref;

  const {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle,
    ...buttonStyles
  } = _reactNative.StyleSheet.flatten(style || {});

  const titleStyles = {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle
  };

  if (textAlign === "left") {
    buttonStyles.justifyContent = "flex-start";
  }

  if (textAlign === "right") {
    buttonStyles.justifyContent = "flex-end";
  }

  return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({
    onPress: onPress,
    disabled: disabled || loading,
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [styles.base, {
        opacity: pressed || disabled ? 0.75 : 1
      }, buttonStyles];
    }
  }, props), loading ? /*#__PURE__*/React.createElement(_reactNative.ActivityIndicator, {
    size: "small",
    color: color,
    style: styles.loading
  }) : null, icon && !loading ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    color: color,
    style: styles.icon,
    size: CONSTANTS.icon
  }) : null, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: titleStyles
  }, title));
}

const Solid = _ref3 => {
  let {
    style,
    theme,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement(Base, _extends({
    style: [{
      color: "#FFF",
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.primary
    }, style]
  }, props));
};

const ButtonSolid = (0, _theming.withTheme)(Solid);
exports.ButtonSolid = ButtonSolid;

const Outline = _ref4 => {
  let {
    style,
    theme,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement(Base, _extends({
    style: [styles.outline, {
      borderRadius: theme.roundness,
      borderColor: theme.colors.primary,
      color: theme.colors.primary
    }, style]
  }, props));
};

const ButtonOutline = (0, _theming.withTheme)(Outline);
exports.ButtonOutline = ButtonOutline;

const styles = _reactNative.StyleSheet.create({
  base: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: CONSTANTS.baseHeight,
    paddingHorizontal: 12,
    fontFamily: "System",
    fontWeight: "700",
    ..._reactNative.Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none"
      }
    })
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1
  },
  bare: {
    backgroundColor: "transparent",
    padding: 0,
    minHeight: undefined
  },
  loading: {
    marginRight: 6
  },
  icon: { ..._reactNative.Platform.select({
      web: {
        marginTop: 1,
        marginRight: 4,
        alignSelf: "center"
      },
      default: {
        marginBottom: 2,
        marginRight: 4,
        alignSelf: "center"
      }
    })
  }
});
//# sourceMappingURL=Button.js.map