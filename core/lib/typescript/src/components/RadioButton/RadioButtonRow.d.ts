import * as React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { RadioButtonProps } from "./RadioButton";
import type { IconSlot } from "../../interfaces/Icon";
export declare enum Direction {
    Row = "row",
    RowReverse = "row-reverse"
}
export interface RadioButtonRowProps extends Omit<RadioButtonProps, "onPress"> {
    label: string | React.ReactNode;
    value: string;
    color?: string;
    unselectedColor?: string;
    labelContainerStyle: StyleProp<ViewStyle>;
    radioButtonStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    onPress?: (value: string) => void;
    direction?: Direction;
}
declare const RadioButtonRow: React.FC<RadioButtonRowProps & IconSlot>;
export default RadioButtonRow;
