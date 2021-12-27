function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { withTheme } from "../../theming"; //@ts-ignore

import PickerComponent from "./PickerComponent"; //unable to find file due to using .android/.web/.ios

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

  return /*#__PURE__*/React.createElement(PickerComponent, _extends({}, props, {
    selectedValue: String(internalValue),
    placeholder: placeholder,
    options: pickerOptions,
    onValueChange: handleValueChange
  }));
};

export default withTheme(Picker);
//# sourceMappingURL=Picker.js.map