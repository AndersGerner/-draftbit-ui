import * as React from "react";
import { View, Text } from "react-native";
import { withTheme } from "../theming";
import IconButton from "./IconButton";
const Stepper = ({ Icon, value, style, onChange, defaultValue, theme: { colors, typography, roundness }, iconSize = 24, iconColor = colors.strong, borderRadius = roundness, typeStyle, }) => {
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
        }
        else {
            setStateValue(stateValue - 1);
        }
    };
    const handlePlus = () => {
        if (value || value === 0) {
            onChange && onChange(value + 1);
        }
        else {
            setStateValue(stateValue + 1);
        }
    };
    return (React.createElement(View, { style: [
            { flexDirection: "row" },
            style,
            borderRadius ? { borderRadius } : {},
        ] },
        React.createElement(IconButton, { Icon: Icon, icon: "MaterialIcons/remove", onPress: handleMinus, size: iconSize, color: iconColor, disabled: value ? value === 0 : stateValue === 0 }),
        React.createElement(Text, { style: [
                typography.body1,
                {
                    textAlign: "center",
                    alignSelf: "center",
                    color: colors.medium,
                    marginHorizontal: 8,
                },
                typeStyle,
            ] }, value || stateValue),
        React.createElement(IconButton, { Icon: Icon, icon: "MaterialIcons/add", onPress: handlePlus, size: iconSize, color: iconColor })));
};
export default withTheme(Stepper);
