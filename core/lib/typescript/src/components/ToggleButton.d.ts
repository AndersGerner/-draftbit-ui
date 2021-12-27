import * as React from "react";
import { colorTypes } from "@draftbit/types";
import { StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
declare type Props = {
    icon: string;
    toggled?: boolean;
    onPress?: (value: boolean) => void;
    defaultValue?: boolean;
    disabled?: boolean;
    color?: colorTypes;
    colorSecondary?: colorTypes;
    borderColor?: colorTypes;
    iconSize?: number;
    width?: number;
    height?: number;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
} & IconSlot;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
