import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import { Direction } from "./context";
export interface CheckboxGroupProps {
    direction?: Direction;
    style?: StyleProp<ViewStyle>;
    values: string[];
    onValueChange: (value: string, selected: boolean) => void;
    theme: Theme;
    children: React.ReactNode;
}
declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
