import * as React from "react";
import { StyleSheet, View, Platform, } from "react-native";
import Checkbox from "./Checkbox";
import Text from "../Text";
import { useCheckboxGroupContext } from "./context";
import { Direction as GroupDirection } from "./context";
import Touchable from "../Touchable";
import { extractStyles } from "../../utilities";
export var Direction;
(function (Direction) {
    Direction["Row"] = "row";
    Direction["RowReverse"] = "row-reverse";
})(Direction || (Direction = {}));
const getCheckboxAlignment = (parentDirection, direction) => {
    if (parentDirection === GroupDirection.Horizontal) {
        return direction === Direction.Row ? "flex-start" : "flex-end";
    }
    else if (direction === Direction.RowReverse) {
        return "flex-start";
    }
    else {
        return "flex-end";
    }
};
const renderLabel = (value, labelStyle, textStyle) => {
    if (typeof value === "string") {
        return React.createElement(Text, { style: [labelStyle, textStyle] }, value);
    }
    else {
        return React.createElement(React.Fragment, null, value);
    }
};
const CheckboxRow = ({ Icon, label = "Label", status, value, onPress = () => { }, labelContainerStyle, labelStyle, checkboxStyle, direction = Direction.Row, disabled, style, color, uncheckedColor, ...rest }) => {
    const { values: selectedValues, onValueChange, direction: parentDirection, } = useCheckboxGroupContext();
    const values = Array.isArray(selectedValues) ? selectedValues : [];
    const isChecked = status || values.includes(value);
    const handlePress = () => {
        if (!disabled) {
            onPress(!isChecked);
            onValueChange && onValueChange(value, !isChecked);
        }
    };
    const { textStyles, viewStyles } = extractStyles(style);
    return (React.createElement(Touchable, { onPress: handlePress, style: [styles.mainParent, { flexDirection: direction }, viewStyles], disabled: disabled, ...rest },
        React.createElement(View, { style: [
                styles.label,
                {
                    alignItems: direction === Direction.Row ? "flex-start" : "flex-end",
                },
                labelContainerStyle,
            ] }, renderLabel(label, labelStyle, textStyles)),
        React.createElement(View, { style: {
                flex: 1,
                alignItems: getCheckboxAlignment(parentDirection, direction),
            } },
            React.createElement(Checkbox, { Icon: Icon, status: isChecked, onPress: handlePress, style: checkboxStyle, disabled: disabled, color: color, uncheckedColor: uncheckedColor }))));
};
const styles = StyleSheet.create({
    mainParent: {
        alignItems: "center",
        justifyContent: "space-around",
        paddingStart: 20,
        minHeight: 50,
        paddingEnd: 20,
        flex: 1,
        ...Platform.select({
            web: {
                cursor: "pointer",
                userSelect: "none",
            },
        }),
    },
    label: {
        flex: 3,
    },
});
export default CheckboxRow;
