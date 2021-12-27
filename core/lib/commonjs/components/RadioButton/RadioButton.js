"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Config = _interopRequireDefault(require("../Config"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _context = require("./context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RadioButton = _ref => {
  let {
    Icon,
    disabled = false,
    color,
    value,
    selected,
    unselectedColor,
    onPress = () => {},
    size = _Config.default.radioButtonSize,
    selectedIcon = "MaterialIcons/radio-button-checked",
    unselectedIcon = "MaterialIcons/radio-button-unchecked",
    style,
    ...rest
  } = _ref;
  const {
    value: contextValue,
    onValueChange
  } = (0, _context.useRadioButtonGroupContext)();

  const handlePress = () => {
    onPress && onPress();

    if (onValueChange && value) {
      onValueChange(value);
    }
  };

  const isSelected = selected || contextValue != null && contextValue === value;
  return /*#__PURE__*/React.createElement(_IconButton.default, _extends({
    Icon: Icon,
    icon: isSelected ? selectedIcon : unselectedIcon,
    color: isSelected ? color : unselectedColor,
    disabled: disabled,
    onPress: handlePress,
    size: size,
    style: style
  }, rest));
};

var _default = RadioButton;
exports.default = _default;
//# sourceMappingURL=RadioButton.js.map