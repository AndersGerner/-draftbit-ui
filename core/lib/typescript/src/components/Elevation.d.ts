import * as React from "react";
import { ViewProps, StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
declare type Props = {
    style?: StyleProp<ViewStyle>;
    theme: Theme;
} & ViewProps;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
