"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _theming = require("../../theming");

var _PickerComponent = _interopRequireDefault(require("./PickerComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function normalizeOptions(options) {
  if (options.length === 0) {
    return [];
  }

  if (typeof options[0] === "string") {
    return options.map(option => ({
      label: option,
      value: String(option)
    }));
  }

  if (options[0].label && options[0].value) {
    return options.map(option => {
      return {
        label: option.label,
        value: String(option.value)
      };
    });
  }

  throw new Error('Picker options must be either an array of strings or array of { "label": string; "value": string; } objects.');
}

const Picker = _ref => {
  let {
    options = [],
    placeholder,
    onValueChange: onValueChangeOverride,
    value,
    defaultValue,
    ...props
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
  const onValueChange = React.useCallback((itemValue, itemIndex) => {
    if (placeholder && itemIndex === 0) {
      return;
    }

    onValueChangeOverride && onValueChangeOverride(String(itemValue), itemIndex);
  }, [placeholder, onValueChangeOverride]);
  const normalizedOptions = normalizeOptions(options);
  const pickerOptions = placeholder ? [{
    value: placeholder,
    label: placeholder
  }, ...normalizedOptions] : normalizedOptions;

  const handleValueChange = (newValue, itemIndex) => {
    setInternalValue(newValue);

    if (onValueChange) {
      onValueChange(newValue, itemIndex);
    }
  };

  return /*#__PURE__*/React.createElement(_PickerComponent.default, _extends({}, props, {
    selectedValue: String(internalValue),
    placeholder: placeholder,
    options: pickerOptions,
    onValueChange: handleValueChange
  }));
};

var _default = (0, _theming.withTheme)(Picker);

exports.default = _default;
//# sourceMappingURL=Picker.js.map