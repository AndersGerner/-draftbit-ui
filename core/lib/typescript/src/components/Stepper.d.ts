import * as React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
declare type Props = {
    value?: number;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
    onChange?: (value: number) => void;
    defaultValue?: number;
    iconSize?: number;
    iconColor?: string;
    borderRadius?: number;
    typeStyle?: StyleProp<TextStyle>;
} & IconSlot;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
