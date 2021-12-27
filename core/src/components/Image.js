/* README: Internal Image component used for stuff like Card. DO NOT EXPORT! */
import React from "react";
import { Image as NativeImage, StyleSheet, } from "react-native";
import Config from "./Config";
import AspectRatio from "./AspectRatio";
const generateDimensions = ({ aspectRatio, width, height }) => {
    if (aspectRatio && !width && !height) {
        return {
            aspectRatio,
            width: "100%",
        };
    }
    if (aspectRatio && height) {
        return {
            aspectRatio,
            height,
            width: aspectRatio * height,
        };
    }
    if (aspectRatio && width) {
        return {
            aspectRatio,
            width,
            height: width / aspectRatio,
        };
    }
    return { width, height };
};
const Image = ({ source, resizeMode = "cover", style, ...props }) => {
    let imageSource = source === null || source === undefined
        ? Config.placeholderImageURL
        : source;
    const styles = StyleSheet.flatten(style || {});
    const { aspectRatio, width, height } = generateDimensions(styles);
    if (aspectRatio) {
        return (React.createElement(AspectRatio, { style: [style, { width, height, aspectRatio }] },
            React.createElement(NativeImage, { ...props, source: imageSource, resizeMode: resizeMode, style: [
                    style,
                    {
                        height: "100%",
                        width: "100%",
                    },
                ] })));
    }
    return (React.createElement(NativeImage, { ...props, source: source, resizeMode: resizeMode, style: style }));
};
export default Image;
