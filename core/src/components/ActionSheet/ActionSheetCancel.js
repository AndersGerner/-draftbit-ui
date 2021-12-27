import React from "react";
import ActionSheetItem from "./ActionSheetItem";
const ActionSheetCancel = ({ label = "Cancel", color, style, onPress, }) => {
    return (React.createElement(ActionSheetItem, { label: label, color: color || "#FF453A", style: [style], onPress: onPress }));
};
export default ActionSheetCancel;
