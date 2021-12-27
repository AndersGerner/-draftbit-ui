function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { TextInput } from "react-native";

const NumberInput = _ref => {
  let {
    onChangeText,
    value,
    defaultValue,
    ...props
  } = _ref;
  const [isDecimal, setIsDecimal] = React.useState(value && !Number.isInteger(value));
  React.useEffect(() => {
    if (value) {
      setIsDecimal(value.toString().includes("."));
    }
  }, [value]);

  const handleChangeText = newValue => {
    if (onChangeText) {
      const parsedNumber = parseFloat(newValue);
      const number = isNaN(parsedNumber) ? 0 : parsedNumber;
      setIsDecimal(newValue.includes("."));
      onChangeText(number);
    }
  };

  let strValue;

  if (value != undefined) {
    strValue = value.toString();

    if (isDecimal && !strValue.includes(".")) {
      strValue = `${strValue}.`;
    }
  }

  return /*#__PURE__*/React.createElement(TextInput, _extends({
    keyboardType: "numeric"
  }, props, {
    value: strValue,
    defaultValue: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.toString(),
    onChangeText: handleChangeText
  }));
};

export default NumberInput; // comment to try to fix sourcemap issue
//# sourceMappingURL=NumberInput.js.map