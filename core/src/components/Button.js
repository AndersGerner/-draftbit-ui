import * as React from "react";
import { Text, Pressable, Platform, StyleSheet, ActivityIndicator, } from "react-native";
import { withTheme } from "../theming";
const CONSTANTS = {
    baseHeight: 42,
    borderRadius: 4,
    padding: 8,
    icon: 24,
};
function Base({ Icon, icon, title, onPress, loading, disabled, style, ...props }) {
    const { color, fontFamily, fontWeight, fontSize, lineHeight, letterSpacing, textTransform, textAlign, textDecorationLine, textDecorationColor, textDecorationStyle, ...buttonStyles } = StyleSheet.flatten(style || {});
    const titleStyles = {
        color,
        fontFamily,
        fontWeight,
        fontSize,
        lineHeight,
        letterSpacing,
        textTransform,
        textAlign,
        textDecorationLine,
        textDecorationColor,
        textDecorationStyle,
    };
    if (textAlign === "left") {
        buttonStyles.justifyContent = "flex-start";
    }
    if (textAlign === "right") {
        buttonStyles.justifyContent = "flex-end";
    }
    return (React.createElement(Pressable, { onPress: onPress, disabled: disabled || loading, style: ({ pressed }) => {
            return [
                styles.base,
                {
                    opacity: pressed || disabled ? 0.75 : 1,
                },
                buttonStyles,
            ];
        }, ...props },
        loading ? (React.createElement(ActivityIndicator, { size: "small", color: color, style: styles.loading })) : null,
        icon && !loading ? (React.createElement(Icon, { name: icon, color: color, style: styles.icon, size: CONSTANTS.icon })) : null,
        React.createElement(Text, { style: titleStyles }, title)));
}
const Solid = ({ style, theme, ...props }) => {
    return (React.createElement(Base, { style: [
            {
                color: "#FFF",
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.primary,
            },
            style,
        ], ...props }));
};
const ButtonSolid = withTheme(Solid);
export { ButtonSolid };
const Outline = ({ style, theme, ...props }) => {
    return (React.createElement(Base, { style: [
            styles.outline,
            {
                borderRadius: theme.roundness,
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
            },
            style,
        ], ...props }));
};
const ButtonOutline = withTheme(Outline);
export { ButtonOutline };
const styles = StyleSheet.create({
    base: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: CONSTANTS.baseHeight,
        paddingHorizontal: 12,
        fontFamily: "System",
        fontWeight: "700",
        ...Platform.select({
            web: {
                cursor: "pointer",
                userSelect: "none",
            },
        }),
    },
    outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
    },
    bare: {
        backgroundColor: "transparent",
        padding: 0,
        minHeight: undefined,
    },
    loading: {
        marginRight: 6,
    },
    icon: {
        ...Platform.select({
            web: {
                marginTop: 1,
                marginRight: 4,
                alignSelf: "center",
            },
            default: {
                marginBottom: 2,
                marginRight: 4,
                alignSelf: "center",
            },
        }),
    },
});
