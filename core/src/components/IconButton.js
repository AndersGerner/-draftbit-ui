import * as React from "react";
import { View, StyleSheet, ActivityIndicator, Pressable, Platform, } from "react-native";
import { withTheme } from "../theming";
const IconButton = ({ Icon, icon, color: customColor, size = 32, disabled = false, loading = false, onPress, theme, style, ...props }) => {
    const iconColor = customColor || theme.colors.primary;
    return (React.createElement(Pressable, { onPress: onPress, disabled: disabled || loading, style: ({ pressed }) => {
            return [
                styles.container,
                {
                    opacity: pressed || disabled ? 0.75 : 1,
                    width: size,
                    height: size,
                    alignItems: "center",
                    justifyContent: "center",
                },
                style,
            ];
        }, ...props },
        React.createElement(View, null,
            icon && !loading ? (React.createElement(Icon, { name: icon, size: size - 2, color: iconColor })) : null,
            loading ? React.createElement(ActivityIndicator, { size: "small", color: iconColor }) : null)));
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            web: {
                cursor: "pointer",
                userSelect: "none",
            },
        }),
    },
});
export default withTheme(IconButton);
