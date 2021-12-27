import * as React from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
import { ResizeModeType } from "./ResizeMode";
declare type Props = {
    theme: Theme;
    useThemeGutterPadding: boolean;
    borderColor: string;
    borderWidth: number;
    backgroundColor: string;
    backgroundImage?: string | ImageSourcePropType;
    backgroundImageResizeMode?: ResizeModeType;
    elevation?: number;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
