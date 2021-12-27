import * as React from "react";
import { Text } from "react-native";
import AnimatedCircularProgress from "./AnimatedCircularProgress";
import { withTheme } from "../theming";
const ProgressCircle = ({ progress = 0.5, style, color = "primary", size = 100, showsText = true, unfilledColor, strokeCap = "butt", textStyle, thickness = 1, theme, }) => {
    const progressNum = Math.round(progress * 100);
    const tintColor = color || theme.colors.primary;
    const backgroundColor = unfilledColor || theme.colors.secondary;
    return (React.createElement(AnimatedCircularProgress, { size: size, width: thickness, backgroundWidth: thickness, fill: progressNum, tintColor: tintColor, backgroundColor: backgroundColor, rotation: 0, lineCap: strokeCap, style: style }, (fill) => showsText ? (React.createElement(Text, { style: [{ fontSize: size * 0.275, color: tintColor }, textStyle] },
        Math.round(fill),
        "%")) : null));
};
export default withTheme(ProgressCircle);
