"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SwitchRow = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

var _FormRow = _interopRequireDefault(require("./FormRow"));

var _types = require("@draftbit/types");

var _hooks = require("../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Switch(_ref) {
  let {
    value,
    defaultValue,
    disabled,
    onValueChange,
    activeTrackColor,
    inactiveTrackColor,
    activeThumbColor,
    inactiveThumbColor,
    theme,
    style,
    ...rest
  } = _ref;
  const activeTrackThemeColor = activeTrackColor || theme.colors.primary;
  const inactiveTrackThemeColor = inactiveTrackColor || "#EEE";
  const activeThumbThemeColor = activeThumbColor || "#FFF";
  const inactiveThumbThemeColor = inactiveThumbColor || "#FFF";
  const [checked, setChecked] = React.useState(value || defaultValue);
  React.useEffect(() => {
    if (value != null && value !== checked) {
      setChecked(value);
    }
  }, [value, checked]); // This special logic is to handle weird APIs like Airtable that return
  // true or undefined for a boolean

  const previousDefaultValue = (0, _hooks.usePrevious)(defaultValue);
  React.useEffect(() => {
    if (defaultValue !== previousDefaultValue) {
      setChecked(Boolean(defaultValue));
    }
  }, [defaultValue, previousDefaultValue]);
  return /*#__PURE__*/React.createElement(_reactNative.Switch, _extends({
    value: checked,
    disabled: disabled,
    trackColor: {
      false: inactiveTrackThemeColor,
      true: activeTrackThemeColor
    },
    thumbColor: value ? activeThumbThemeColor : inactiveThumbThemeColor // @ts-ignore react-native-web only
    ,
    activeThumbColor: activeThumbThemeColor,
    ios_backgroundColor: inactiveTrackThemeColor,
    style: style,
    onValueChange: bool => {
      setChecked(bool);
      onValueChange && onValueChange(bool);
    }
  }, rest));
}

function Row(_ref2) {
  let {
    label = "Label",
    direction = _types.RowDirection.Row,
    style,
    value,
    defaultValue,
    disabled,
    onValueChange,
    activeTrackColor,
    inactiveTrackColor,
    activeThumbColor,
    inactiveThumbColor,
    theme,
    ...rest
  } = _ref2;
  const [checked, setChecked] = React.useState(value != null ? value : defaultValue);
  React.useEffect(() => {
    if (value != null) {
      setChecked(value);
    }
  }, [value]);
  React.useEffect(() => {
    if (defaultValue != null) {
      setChecked(defaultValue);
    }
  }, [defaultValue]);
  return /*#__PURE__*/React.createElement(_FormRow.default, _extends({
    disabled: disabled,
    onPress: () => {
      setChecked(!checked);
      onValueChange && onValueChange(!checked);
    },
    label: label,
    direction: direction,
    style: style
  }, rest), /*#__PURE__*/React.createElement(Switch, {
    theme: theme,
    value: checked,
    disabled: disabled,
    onValueChange: onValueChange,
    activeTrackColor: activeTrackColor,
    inactiveTrackColor: inactiveTrackColor,
    activeThumbColor: activeThumbColor,
    inactiveThumbColor: inactiveThumbColor
  }));
}

const SwitchRow = (0, _theming.withTheme)(Row);
exports.SwitchRow = SwitchRow;

var _default = (0, _theming.withTheme)(Switch);

exports.default = _default;
//# sourceMappingURL=Switch.js.map