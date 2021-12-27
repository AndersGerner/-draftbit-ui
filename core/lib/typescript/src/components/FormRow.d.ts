import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { RowDirection } from "@draftbit/types";
declare type Props = {
    disabled?: boolean;
    label: string;
    direction: RowDirection;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
};
export default function FormRow({ disabled, direction, children, label, style, onPress, ...rest }: Props): JSX.Element;
export {};
