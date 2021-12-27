import React from "react";
import { ViewStyle, PressableProps } from "react-native";
declare type Props = {
    disabled?: boolean;
    children: React.ReactNode;
    style?: ViewStyle;
    onPress?: () => void;
} & PressableProps;
export default function Touchable({ children, disabled, onPress, style, ...props }: Props): JSX.Element;
export {};
