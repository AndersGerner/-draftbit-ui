import * as React from "react";
import { TouchableHighlightProps, StyleProp, ViewStyle } from "react-native";
import type { IconSlot } from "../../interfaces/Icon";
export interface CheckboxProps {
    status?: boolean;
    disabled?: boolean;
    onPress?: (checked: boolean) => void;
    color?: string;
    uncheckedColor?: string;
    checkedIcon?: string;
    uncheckedIcon?: string;
    defaultValue?: boolean;
    size?: number;
    style?: StyleProp<ViewStyle>;
}
declare const Checkbox: React.FC<CheckboxProps & TouchableHighlightProps & IconSlot>;
export default Checkbox;
