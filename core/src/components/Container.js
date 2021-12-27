import * as React from "react";
import { View, ImageBackground, StyleSheet, } from "react-native";
import { withTheme } from "../theming";
import Elevation from "./Elevation";
const Container = ({ useThemeGutterPadding, borderColor, borderWidth, backgroundColor, backgroundImage, backgroundImageResizeMode, elevation, style, children, theme, // eslint-disable-line @typescript-eslint/no-unused-vars
...rest }) => {
    const { flex, flexGrow, flexWrap, flexBasis, flexShrink, flexDirection, alignContent, justifyContent, alignItems, padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingVertical, paddingHorizontal, ...styleProp } = StyleSheet.flatten(style) || {};
    const containerStyle = {
        backgroundColor,
        borderColor,
        borderWidth,
        width: "100%",
        ...styleProp,
    };
    const innerStyle = {
        flex,
        flexGrow,
        flexWrap,
        flexBasis,
        flexShrink,
        flexDirection,
        alignContent,
        justifyContent,
        alignItems,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingVertical,
        paddingHorizontal: paddingHorizontal || useThemeGutterPadding ? 16 : 0,
    };
    const Wrap = elevation ? Elevation : View;
    if (elevation) {
        containerStyle.elevation = elevation;
    }
    return (React.createElement(Wrap, { style: [containerStyle, style], ...rest }, backgroundImage ? (React.createElement(ImageBackground, { source: typeof backgroundImage === "string"
            ? { uri: backgroundImage }
            : backgroundImage, resizeMode: backgroundImageResizeMode, style: {
            flex: 1,
        } },
        React.createElement(View, { style: innerStyle }, children))) : (React.createElement(View, { style: innerStyle }, children))));
};
export default withTheme(Container);
