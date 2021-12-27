import * as React from "react";
import { View } from "react-native";
import { checkboxGroupContext, Direction } from "./context";
const { Provider } = checkboxGroupContext;
const CheckboxGroup = ({ direction = Direction.Vertical, values, onValueChange = () => { }, style, children, ...rest }) => {
    const _containerStyle = [
        {
            flexDirection: direction === Direction.Horizontal ? "row" : "column",
            overflow: "hidden",
        },
    ];
    if (direction !== Direction.Vertical) {
        _containerStyle.push({
            alignItems: "center",
        });
    }
    return (React.createElement(View, { style: [{ minHeight: 40 }, style], ...rest },
        React.createElement(Provider, { value: { values, onValueChange, direction } },
            React.createElement(View, { style: _containerStyle }, children))));
};
export default CheckboxGroup;
