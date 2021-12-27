import * as React from "react";
import { StyleProp, ViewStyle, TextInputProps } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import type { IconSlot } from "../../interfaces/Icon";
declare type Props = {
    style?: StyleProp<ViewStyle> & {
        height?: number;
    };
    theme: Theme;
    date?: Date;
    format?: string;
    onDateChange?: (data?: Date) => void;
    defaultValue?: Date;
    disabled?: boolean;
    mode?: "date" | "time" | "datetime";
    type?: "solid" | "underline";
    label?: string;
    placeholder?: string;
    leftIconName?: string;
    leftIconMode?: "outset" | "inset";
    rightIconName?: string;
} & IconSlot & TextInputProps;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
