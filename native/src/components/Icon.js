import * as React from "react";
import { Image, View, StyleSheet, Platform, } from "react-native";
// This must use require to work in both web as a published project and in Snack
const VectorIcons = require("@expo/vector-icons");
const Icon = ({ name, color, size, style, ...rest }) => {
    if (!name)
        return null;
    let iconSet = "MaterialIcons";
    if (typeof name === "string" && name.indexOf("/") !== -1) {
        [iconSet, name] = name.split("/");
    }
    if (typeof name === "string") {
        const IconSet = VectorIcons[iconSet];
        return (React.createElement(View, { style: [styles.container, { width: size, height: size }, style] },
            React.createElement(IconSet, { ...rest, name: name, color: color, size: size })));
    }
    else if ((typeof name === "object" &&
        name !== null &&
        Object.prototype.hasOwnProperty.call(name, "uri") &&
        typeof name.uri === "string") ||
        typeof name === "number") {
        return (React.createElement(Image, { ...rest, source: name, style: [
                {
                    width: size,
                    height: size,
                    tintColor: color,
                },
                style,
            ] }));
    }
    return (React.createElement(View, { ...rest, style: [
            {
                width: size,
                height: size,
            },
            styles.container,
            style,
        ] }, name));
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...Platform.select({
            web: {
                cursor: "pointer",
                userSelect: "none",
            },
        }),
    },
});
export default Icon;
