"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _theming = require("../theming");

var _reactNative = require("react-native");

var _IconButton = _interopRequireDefault(require("./IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ToggleButton = _ref => {
  let {
    Icon,
    icon,
    toggled = false,
    onPress = () => {},
    defaultValue,
    disabled = false,
    color = "primary",
    colorSecondary = "surface",
    borderColor = "divider",
    iconSize = 25,
    width = 50,
    height = 50,
    theme: {
      colors
    },
    style,
    ...rest
  } = _ref;
  const [internalValue, setInternalValue] = React.useState(toggled || defaultValue || false);
  React.useEffect(() => {
    if (toggled != null) {
      setInternalValue(toggled);
    }
  }, [toggled]);
  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);

  const handlePress = () => {
    setInternalValue(!toggled);
    onPress(!toggled);
  };

  return /*#__PURE__*/React.createElement(_IconButton.default, _extends({
    Icon: Icon,
    icon: icon,
    size: iconSize,
    color: internalValue ? colors[color] : colors[colorSecondary],
    onPress: handlePress,
    disabled: disabled,
    style: [styles.mainContainer, {
      width,
      height,
      backgroundColor: toggled ? colors[colorSecondary] : colors[color],
      borderColor: colors[borderColor]
    }, style]
  }, rest));
};

const styles = _reactNative.StyleSheet.create({
  mainContainer: {
    borderWidth: 1
  }
});

var _default = (0, _theming.withTheme)(ToggleButton);

exports.default = _default;
//# sourceMappingURL=ToggleButton.js.map