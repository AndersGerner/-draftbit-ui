import * as React from "react";
import { View, StyleSheet, Pressable, ActivityIndicator, Platform, } from "react-native";
import { withTheme } from "../theming";
const FAB = ({ onPress, disabled, loading, iconName = "MaterialIcons/add", style, theme, iconColor, bgColor, size = 50, Icon, ...props }) => {
    const backgroundColor = bgColor || theme.colors.primary;
    const color = iconColor || "#FFF";
    return (React.createElement(View, { style: [
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                overflow: "hidden",
            },
            style,
        ] },
        React.createElement(Pressable, { onPress: onPress, disabled: loading || disabled, android_ripple: {
                color: "#333",
                radius: size / 4,
            }, style: ({ pressed }) => {
                return [
                    styles.button,
                    {
                        opacity: pressed || disabled ? 0.75 : 1,
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        backgroundColor,
                    },
                ];
            }, ...props },
            React.createElement(View, null, loading ? (React.createElement(ActivityIndicator, { size: "small", color: color })) : (React.createElement(Icon, { name: iconName, size: 28, color: color }))))));
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#5a45ff",
        justifyContent: "center",
        alignItems: "center",
        ...Platform.select({
            web: {
                cursor: "pointer",
                userSelect: "none",
            },
        }),
    },
});
export default withTheme(FAB);
