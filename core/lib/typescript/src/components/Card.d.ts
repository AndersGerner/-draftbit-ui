import React from "react";
import { ImageSourcePropType, StyleProp, ViewStyle, TextStyle } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
export declare const TopRightCircleIcon: React.ComponentType<import("@draftbit/react-theme-provider").$Without<{
    icon: string;
    theme: Theme;
    onPress?: (() => void) | undefined;
} & IconSlot, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<{
    icon: string;
    theme: Theme;
    onPress?: (() => void) | undefined;
} & IconSlot> & (({ Icon, icon, theme, onPress, }: {
    icon: string;
    theme: Theme;
    onPress?: (() => void) | undefined;
} & IconSlot) => JSX.Element), {}>;
declare type Props = {
    image?: string | ImageSourcePropType;
    title?: string;
    subtitle?: string;
    description?: string;
    textCentered: boolean;
    icon?: string;
    aspectRatio?: number;
    elevation?: number;
    numColumns?: number;
    theme: Theme;
    titleStyle?: StyleProp<TextStyle>;
    subtitleStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    onPressIcon?: () => void;
    children?: React.ReactNode;
} & IconSlot;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
