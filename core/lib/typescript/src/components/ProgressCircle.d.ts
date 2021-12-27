import * as React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import themeT from "../styles/DefaultTheme";
import { colorTypes } from "@draftbit/types";
declare type Props = {
    progress?: number;
    style?: StyleProp<ViewStyle>;
    color?: colorTypes;
    size?: number;
    showsText?: boolean;
    unfilledColor?: colorTypes;
    strokeCap?: "butt" | "square" | "round" | undefined;
    textStyle?: StyleProp<TextStyle>;
    thickness?: number;
    theme: typeof themeT;
};
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
