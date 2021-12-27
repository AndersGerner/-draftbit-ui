import * as React from "react";
import { View } from "react-native";
import { radioButtonGroupContext, Direction } from "./context";
const { Provider } = radioButtonGroupContext;
const RadioButtonGroup = ({ direction = Direction.Vertical, value, onValueChange = () => { }, defaultValue, style, children, ...rest }) => {
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
    const handleValueChange = (newValue) => {
        setInternalValue(newValue);
        onValueChange(newValue);
    };
    const _containerStyle = [
        {
            flexDirection: direction === Direction.Horizontal ? "row" : "column",
        },
    ];
    if (direction !== Direction.Vertical) {
        _containerStyle.push({
            alignItems: "center",
        });
    }
    return (React.createElement(View, { style: [{ minHeight: 40 }, style], ...rest },
        React.createElement(Provider, { value: {
                value: internalValue || "",
                onValueChange: handleValueChange,
                direction,
            } },
            React.createElement(View, { style: _containerStyle }, children))));
};
export default RadioButtonGroup;
