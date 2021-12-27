import React from "react";
import { View, StyleSheet, } from "react-native";
const AspectRatio = (props) => {
    const [layout, setLayout] = React.useState(null);
    const { aspectRatio = 1, ...inputStyle } = StyleSheet.flatten(props.style) || {};
    const style = [inputStyle, { aspectRatio }];
    if (layout) {
        const { width = 0, height = 0 } = layout;
        if (width === 0) {
            style.push({ width: height * (1 / aspectRatio), height });
        }
        else {
            style.push({ width, height: width * (1 / aspectRatio) });
        }
    }
    return (React.createElement(View, { ...props, style: style, onLayout: ({ nativeEvent: { layout: l } }) => setLayout(l) }, props.children));
};
export default AspectRatio;
