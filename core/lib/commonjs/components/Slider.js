"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _slider = _interopRequireDefault(require("@react-native-community/slider"));

var _lodash = _interopRequireDefault(require("lodash.isnumber"));

var _lodash2 = _interopRequireDefault(require("lodash.tonumber"));

var _theming = require("../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function maybeParseValue(value) {
  if (value === undefined) {
    return undefined;
  }

  if ((0, _lodash.default)(value)) {
    return value;
  }

  try {
    const maybe = (0, _lodash2.default)(value);

    if ((0, _lodash.default)(maybe)) {
      return maybe;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function Slider(_ref) {
  let {
    Icon,
    leftIcon,
    rightIcon,
    leftIconColor,
    rightIconColor,
    value,
    defaultValue,
    minimumTrackTintColor,
    maximumTrackTintColor,
    thumbTintColor,
    minimumValue = 0,
    maximumValue = 100,
    tapToSeek,
    step = 1,
    onValueChange = () => {},
    style,
    theme,
    ...rest
  } = _ref;
  const [internalValue, setInternalValue] = React.useState(value || defaultValue);
  React.useEffect(() => {
    if (value != null) {
      setInternalValue(value);
    }
  }, [value]);
  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);
  const minTrackColor = minimumTrackTintColor || theme.colors.primary;
  const maxTrackColor = maximumTrackTintColor || theme.colors.light;
  const thumbColor = thumbTintColor || theme.colors.primary;
  const leftIconThemeColor = leftIconColor || theme.colors.light;
  const rightIconThemeColor = rightIconColor || theme.colors.light;
  const parsedValue = maybeParseValue(internalValue);

  const handleSlidingComplete = newValue => {
    setInternalValue(newValue);
    onValueChange(newValue);
  };

  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [styles.container, style]
  }, rest), leftIcon ? /*#__PURE__*/React.createElement(Icon, {
    color: leftIconThemeColor,
    name: leftIcon,
    size: 24
  }) : null, /*#__PURE__*/React.createElement(_slider.default, {
    value: parsedValue,
    step: step,
    minimumValue: minimumValue,
    maximumValue: maximumValue,
    tapToSeek: tapToSeek,
    minimumTrackTintColor: minTrackColor,
    maximumTrackTintColor: maxTrackColor,
    thumbTintColor: thumbColor,
    onSlidingComplete: handleSlidingComplete,
    style: styles.slider
  }), rightIcon ? /*#__PURE__*/React.createElement(Icon, {
    color: rightIconThemeColor,
    name: rightIcon,
    size: 24
  }) : null);
}

const styles = _reactNative.StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  slider: {
    flex: 1,
    marginHorizontal: 12
  }
});

var _default = (0, _theming.withTheme)(Slider);

exports.default = _default;
//# sourceMappingURL=Slider.js.map