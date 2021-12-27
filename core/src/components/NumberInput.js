import React from "react";
import { TextInput } from "react-native";
const NumberInput = ({ onChangeText, value, defaultValue, ...props }) => {
    const [isDecimal, setIsDecimal] = React.useState(value && !Number.isInteger(value));
    React.useEffect(() => {
        if (value) {
            setIsDecimal(value.toString().includes("."));
        }
    }, [value]);
    const handleChangeText = (newValue) => {
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
    return (React.createElement(TextInput, { keyboardType: "numeric", ...props, value: strValue, defaultValue: defaultValue?.toString(), onChangeText: handleChangeText }));
};
export default NumberInput;
// comment to try to fix sourcemap issue
