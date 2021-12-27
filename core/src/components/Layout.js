import * as React from "react";
import { View } from "react-native";
export function Center({ width = 240, height = 200, children, bgColor, style, ...rest }) {
    return (React.createElement(View, { style: [
            {
                justifyContent: "center",
                alignItems: "center",
                width,
                height,
                backgroundColor: bgColor,
            },
            style,
        ], ...rest }, children));
}
export function Circle({ size = 50, bgColor, children, style, ...rest }) {
    const borderRadius = 1000;
    return (React.createElement(Center, { width: size, height: size, bgColor: bgColor, style: [
            style,
            { backgroundColor: bgColor, borderRadius, overflow: "hidden" },
        ], ...rest }, children));
}
export function Square({ size = 50, bgColor, children, style, ...rest }) {
    return (React.createElement(Center, { style: style, width: size, height: size, bgColor: bgColor, ...rest }, children));
}
export function Row({ justifyContent, alignItems, children, style, ...rest }) {
    return (React.createElement(View, { style: [
            style,
            {
                alignItems,
                flexDirection: "row",
                justifyContent: justifyContent,
            },
        ], ...rest }, children));
}
export function Spacer({ top = 8, right = 8, bottom = 8, left = 8, children, style, ...rest }) {
    return (React.createElement(View, { style: [
            style,
            {
                paddingRight: right,
                paddingTop: top,
                paddingLeft: left,
                paddingBottom: bottom,
            },
        ], ...rest }, children));
}
export function Stack({ children, justifyContent = "flex-start", alignItems = "flex-start", style, ...rest }) {
    return (
    // style must go first since we don't want justifyContent, alignItems overridden
    React.createElement(View, { style: [style, { justifyContent, alignItems }], ...rest }, children));
}
