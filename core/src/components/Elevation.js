import * as React from "react";
import { Animated, StyleSheet, View, } from "react-native";
import shadow from "../styles/shadow";
import { withTheme } from "../theming";
/* directly copied from https://github.com/callstack/react-native-paper/blob/main/src/components/Surface.tsx#L62 */
const Elevation = ({ style, theme, children, ...rest }) => {
    const { elevation = 4, borderRadius: radius } = StyleSheet.flatten(style) || {};
    const { colors } = theme;
    const borderRadius = radius;
    return (React.createElement(Animated.View, { ...rest, style: [
            {
                borderRadius,
                backgroundColor: colors.surface,
            },
            elevation ? shadow(elevation) : null,
            style,
        ] },
        React.createElement(View, { style: { overflow: "hidden", borderRadius } }, children)));
};
export default withTheme(Elevation);
