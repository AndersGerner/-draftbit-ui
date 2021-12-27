"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

var _IconButton = _interopRequireDefault(require("./IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Stepper = _ref => {
  let {
    Icon,
    value,
    style,
    onChange,
    defaultValue,
    theme: {
      colors,
      typography,
      roundness
    },
    iconSize = 24,
    iconColor = colors.strong,
    borderRadius = roundness,
    typeStyle
  } = _ref;
  const [stateValue, setStateValue] = React.useState(value || defaultValue || 0);
  React.useEffect(() => {
    if (value != null) {
      setStateValue(value);
    }
  }, [value]);
  React.useEffect(() => {
    if (defaultValue != null) {
      setStateValue(defaultValue);
    }
  }, [defaultValue]);

  const handleMinus = () => {
    if (value || value === 0) {
      onChange && onChange(value - 1);
    } else {
      setStateValue(stateValue - 1);
    }
  };

  const handlePlus = () => {
    if (value || value === 0) {
      onChange && onChange(value + 1);
    } else {
      setStateValue(stateValue + 1);
    }
  };

  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [{
      flexDirection: "row"
    }, style, borderRadius ? {
      borderRadius
    } : {}]
  }, /*#__PURE__*/React.createElement(_IconButton.default, {
    Icon: Icon,
    icon: "MaterialIcons/remove",
    onPress: handleMinus,
    size: iconSize,
    color: iconColor,
    disabled: value ? value === 0 : stateValue === 0
  }), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [typography.body1, {
      textAlign: "center",
      alignSelf: "center",
      color: colors.medium,
      marginHorizontal: 8
    }, typeStyle]
  }, value || stateValue), /*#__PURE__*/React.createElement(_IconButton.default, {
    Icon: Icon,
    icon: "MaterialIcons/add",
    onPress: handlePlus,
    size: iconSize,
    color: iconColor
  }));
};

var _default = (0, _theming.withTheme)(Stepper);

exports.default = _default;
//# sourceMappingURL=Stepper.js.map