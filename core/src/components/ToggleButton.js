import * as React from "react";
import { withTheme } from "../theming";
import { StyleSheet } from "react-native";
import IconButton from "./IconButton";
const ToggleButton = ({ Icon, icon, toggled = false, onPress = () => { }, defaultValue, disabled = false, color = "primary", colorSecondary = "surface", borderColor = "divider", iconSize = 25, width = 50, height = 50, theme: { colors }, style, ...rest }) => {
    const [internalValue, setInternalValue] = React.useState(toggled || defaultValue || false);
    React.useEffect(() => {
        if (toggled != null) {
            setInternalValue(toggled);
        }
    }, [toggled]);
    React.useEffect(() => {
        if (defaultValue != null) {
            setInternalValue(defaultValue);
        }
    }, [defaultValue]);
    const handlePress = () => {
        setInternalValue(!toggled);
        onPress(!toggled);
    };
    return (React.createElement(IconButton, { Icon: Icon, icon: icon, size: iconSize, color: internalValue ? colors[color] : colors[colorSecondary], onPress: handlePress, disabled: disabled, style: [
            styles.mainContainer,
            {
                width,
                height,
                backgroundColor: toggled ? colors[colorSecondary] : colors[color],
                borderColor: colors[borderColor],
            },
            style,
        ], ...rest }));
};
const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 1,
    },
});
export default withTheme(ToggleButton);
