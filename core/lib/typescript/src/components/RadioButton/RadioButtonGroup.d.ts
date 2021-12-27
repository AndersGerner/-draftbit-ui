import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import { Direction } from "./context";
export interface RadioButtonGroupProps {
    direction?: Direction;
    style?: StyleProp<ViewStyle>;
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    theme: Theme;
    children: React.ReactNode;
}
declare const RadioButtonGroup: React.FC<RadioButtonGroupProps>;
export default RadioButtonGroup;
