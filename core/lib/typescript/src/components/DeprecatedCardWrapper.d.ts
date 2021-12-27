import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import theme from "../styles/DefaultTheme";
declare type Props = {
    numColumns?: number;
    children?: React.ReactNode;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    theme: typeof theme;
};
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
