import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import type { IconSlot } from "../../interfaces/Icon";
export declare type RadioButtonProps = {
    selected?: boolean;
    disabled?: boolean;
    color?: string;
    value?: string;
    unselectedColor?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    size?: number;
    selectedIcon?: string;
    unselectedIcon?: string;
} & IconSlot;
declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
