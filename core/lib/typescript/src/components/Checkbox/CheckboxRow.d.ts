import * as React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { CheckboxProps } from "./Checkbox";
import type { IconSlot } from "../../interfaces/Icon";
export declare enum Direction {
    Row = "row",
    RowReverse = "row-reverse"
}
export interface CheckboxRowProps extends Omit<CheckboxProps, "onPress"> {
    label: string | React.ReactNode;
    value: string;
    labelContainerStyle: StyleProp<ViewStyle>;
    checkboxStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    onPress?: (value: boolean) => void;
    direction?: Direction;
    color: string;
    unselectedColor: string;
}
declare const CheckboxRow: React.FC<CheckboxRowProps & IconSlot>;
export default CheckboxRow;
