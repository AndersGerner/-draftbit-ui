"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FAB = _ref => {
  let {
    onPress,
    disabled,
    loading,
    iconName = "MaterialIcons/add",
    style,
    theme,
    iconColor,
    bgColor,
    size = 50,
    Icon,
    ...props
  } = _ref;
  const backgroundColor = bgColor || theme.colors.primary;
  const color = iconColor || "#FFF";
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [{
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: "hidden"
    }, style]
  }, /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({
    onPress: onPress,
    disabled: loading || disabled,
    android_ripple: {
      color: "#333",
      radius: size / 4
    },
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [styles.button, {
        opacity: pressed || disabled ? 0.75 : 1,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
      }];
    }
  }, props), /*#__PURE__*/React.createElement(_reactNative.View, null, loading ? /*#__PURE__*/React.createElement(_reactNative.ActivityIndicator, {
    size: "small",
    color: color
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    size: 28,
    color: color
  }))));
};

const styles = _reactNative.StyleSheet.create({
  button: {
    backgroundColor: "#5a45ff",
    justifyContent: "center",
    alignItems: "center",
    ..._reactNative.Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none"
      }
    })
  }
});

var _default = (0, _theming.withTheme)(FAB);

exports.default = _default;
//# sourceMappingURL=FAB.js.map