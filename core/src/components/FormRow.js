import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { extractStyles } from "../utilities";
import Touchable from "./Touchable";
export default function FormRow({ disabled, direction, children, label, style, onPress, ...rest }) {
    const { textStyles, viewStyles } = extractStyles(style);
    return (React.createElement(Touchable, { disabled: disabled, onPress: onPress, style: [styles.row, { flexDirection: direction }, viewStyles], ...rest },
        React.createElement(Text, { style: textStyles }, label),
        children));
}
const styles = StyleSheet.create({
    row: {
        marginLeft: 8,
        marginRight: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
