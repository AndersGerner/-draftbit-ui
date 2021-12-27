import React from "react";
import { Text, StyleSheet, TouchableOpacity, } from "react-native";
import { extractStyles } from "../../utilities";
const ActionSheetItem = ({ label, style, color, onPress }) => {
    const { textStyles, viewStyles } = extractStyles(style);
    return (React.createElement(TouchableOpacity, { activeOpacity: 0.7, style: [styles.wrapper, viewStyles], onPress: onPress },
        React.createElement(Text, { style: [styles.label, textStyles, { color }] }, label)));
};
const styles = StyleSheet.create({
    wrapper: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#CCCCCC",
        backgroundColor: "#F1F1F1",
        minHeight: 50,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
    },
    label: {
        fontSize: 16,
        textAlign: "center",
        color: "#0A84FF",
        fontWeight: "500",
        overflow: "hidden",
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignSelf: "center",
    },
});
export default ActionSheetItem;
