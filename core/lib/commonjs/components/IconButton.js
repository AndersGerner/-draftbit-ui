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

const IconButton = _ref => {
  let {
    Icon,
    icon,
    color: customColor,
    size = 32,
    disabled = false,
    loading = false,
    onPress,
    theme,
    style,
    ...props
  } = _ref;
  const iconColor = customColor || theme.colors.primary;
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({
    onPress: onPress,
    disabled: disabled || loading,
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [styles.container, {
        opacity: pressed || disabled ? 0.75 : 1,
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center"
      }, style];
    }
  }, props), /*#__PURE__*/React.createElement(_reactNative.View, null, icon && !loading ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size - 2,
    color: iconColor
  }) : null, loading ? /*#__PURE__*/React.createElement(_reactNative.ActivityIndicator, {
    size: "small",
    color: iconColor
  }) : null));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    ..._reactNative.Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none"
      }
    })
  }
});

var _default = (0, _theming.withTheme)(IconButton);

exports.default = _default;
//# sourceMappingURL=IconButton.js.map