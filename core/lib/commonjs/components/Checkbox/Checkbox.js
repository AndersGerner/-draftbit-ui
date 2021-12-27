"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../../theming");

var _Touchable = _interopRequireDefault(require("../Touchable"));

var _hooks = require("../../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Checkbox = _ref => {
  let {
    Icon,
    status,
    disabled = false,
    onPress = () => {},
    color,
    uncheckedColor,
    defaultValue,
    checkedIcon = "MaterialCommunityIcons/checkbox-marked",
    uncheckedIcon = "MaterialCommunityIcons/checkbox-blank-outline",
    size = 24,
    style,
    ...rest
  } = _ref;
  const [internalValue, setInternalValue] = React.useState(status || defaultValue || false);
  React.useEffect(() => {
    if (status != null) {
      setInternalValue(status);
    }
  }, [status]); // This special logic is to handle weird APIs like Airtable that return
  // true or undefined for a boolean

  const previousDefaultValue = (0, _hooks.usePrevious)(defaultValue);
  React.useEffect(() => {
    if (defaultValue !== previousDefaultValue) {
      setInternalValue(Boolean(defaultValue));
    }
  }, [defaultValue, previousDefaultValue]);
  const {
    colors
  } = (0, _theming.useTheme)();
  const checkboxColor = internalValue ? color || colors.primary : uncheckedColor || colors.primary;

  const handlePress = () => {
    setInternalValue(!internalValue);
    onPress(!internalValue);
  };

  return /*#__PURE__*/React.createElement(_Touchable.default, _extends({}, rest, {
    onPress: handlePress,
    disabled: disabled,
    accessibilityState: {
      disabled
    },
    accessibilityRole: "button",
    accessibilityLiveRegion: "polite",
    style: [styles.container, style, {
      width: size,
      height: size
    }]
  }), /*#__PURE__*/React.createElement(Icon, {
    style: styles.icon,
    name: internalValue ? checkedIcon : uncheckedIcon,
    size: size,
    color: checkboxColor
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.fillContainer]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.fill, {
      opacity: disabled ? 0.5 : 1
    }, {
      borderColor: checkboxColor
    }]
  })));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 18
  },
  fillContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    alignSelf: "center"
  },
  fill: {
    borderRadius: 5,
    width: 30,
    height: 30,
    alignSelf: "center"
  }
});

var _default = Checkbox;
exports.default = _default;
//# sourceMappingURL=Checkbox.js.map