/* Copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx */
import * as React from "react";
import { Animated, StyleSheet, } from "react-native";
import shadow from "../styles/shadow";
import overlay from "../styles/overlay";
import { withTheme } from "../theming";
const Surface = ({ elevation, style, theme, children, ...rest }) => {
    const { elevation: styleElevation = 3, borderRadius: radius = 0 } = (StyleSheet.flatten(style) || {});
    const { dark: isDarkTheme, mode, colors } = theme;
    const borderRadius = radius;
    const ele = elevation || styleElevation;
    return (React.createElement(Animated.View, { ...rest, style: [
            {
                borderRadius,
                backgroundColor: isDarkTheme && mode === "adaptive"
                    ? overlay(ele, colors.surface)
                    : colors.surface,
            },
            elevation ? shadow(elevation) : null,
            style,
        ] }, children));
};
export default withTheme(Surface);
