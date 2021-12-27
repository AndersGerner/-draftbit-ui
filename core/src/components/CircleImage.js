import * as React from "react";
import { Image, } from "react-native";
import Config from "./Config";
const CircleImage = ({ source = Config.placeholderImageURL, size = 60, style, ...props }) => {
    const borderRadius = size / 2;
    return (React.createElement(Image, { style: [{ width: size, height: size, borderRadius }, style], source: typeof source === "string" ? { uri: source } : source, resizeMode: "cover", ...props }));
};
export default CircleImage;
